from fastapi import FastAPI, UploadFile, File, Form
from fastapi.responses import JSONResponse
from PyPDF2 import PdfReader
import joblib
import re
import io

# Load trained model and vectorizer
model = joblib.load("model/model.pkl")
vectorizer = joblib.load("model/vectorizer.pkl")

app = FastAPI(
    title="ATS Resume Analyzer API",
    description="Analyze resumes, predict career domain, and compute ATS job match score.",
    version="1.0.0"
)

# Resume text extraction
def extract_text_from_pdf(uploaded_file):
    pdf_reader = PdfReader(uploaded_file)
    text = ""
    for page in pdf_reader.pages:
        text += page.extract_text()
    return text

# Cleaning text
def clean_resume(resume_text):
    resume_text = re.sub(r'[^a-zA-Z]', ' ', resume_text)
    resume_text = re.sub(r'\b\w{1,2}\b', ' ', resume_text)
    return resume_text.lower().strip()

# ATS score calculation
def calculate_ats_score(job_desc, resume_text):
    job_keywords = set(re.findall(r'\b\w+\b', job_desc.lower()))
    resume_keywords = set(re.findall(r'\b\w+\b', resume_text.lower()))
    matched = job_keywords.intersection(resume_keywords)
    if len(job_keywords) == 0:
        return 0
    ats_score = len(matched) / len(job_keywords) * 100
    return round(ats_score, 2)

@app.post("/analyze")
async def analyze_resume(job_description: str = Form(...), file: UploadFile = File(...)):
    try:
        # Extract text from PDF
        content = await file.read()
        pdf_text = extract_text_from_pdf(io.BytesIO(content))
        cleaned_text = clean_resume(pdf_text)
        
        # Transform resume into features and predict category
        vectorized = vectorizer.transform([cleaned_text]).toarray()
        prediction = model.predict(vectorized)[0]
        
        # Compute ATS score
        ats_score = calculate_ats_score(job_description, cleaned_text)

        response = {
            "filename": file.filename,
            "predicted_category": prediction,
            "ats_match_score": ats_score,
            "job_description": job_description
        }

        return JSONResponse(content=response)

    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})

@app.get("/")
async def root():
    return {"message": "ATS Resume Analyzer API is running."}
