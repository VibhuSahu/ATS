document.getElementById("resumeForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const jobDescription = document.getElementById("jobDescription").value.trim();
    const resumeFile = document.getElementById("resumeFile").files[0];

    if (!jobDescription || !resumeFile) {
        alert("Please provide both job description and resume file.");
        return;
    }

    const formData = new FormData();
    formData.append("job_description", jobDescription);
    formData.append("file", resumeFile);

    const apiUrl = "https://sturdy-enigma-7xrqx9gjx6v2w7q-8000.app.github.dev/analyze";

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            body: formData
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        document.getElementById("predictedCategory").innerText = result.predicted_category;
        document.getElementById("atsScore").innerText = result.ats_match_score;
        document.getElementById("fileName").innerText = result.filename;
        document.getElementById("responseContainer").classList.remove("hidden");

    } catch (error) {
        alert("An error occurred: " + error.message);
        console.error(error);
    }
});
