# ATS
ATS

```text
├── Dockerfile
├── JOURNAL
│   ├── ATS Resume Classification Project Analysis.pdf
│   ├── Anshita Tripathi.pdf
│   ├── Kunal Meshram.pdf
│   └── Vibhu Sahu.pdf
├── LICENSE
├── README.md
├── api
│   ├── main.py
│   └── requirements.txt
├── ats-landingpage
│   ├── assets
│   │   ├── app-demo.png
│   │   └── logo-icon.png
│   ├── index.html
│   ├── script.js
│   └── style.css
├── compose.yaml
├── data
│   ├── Shubham Kumar (2).pdf
│   └── UpdatedResumeDataSet.csv
├── frontend
│   ├── index.html
│   ├── script.js
│   └── style.css
├── ml_pipline
│   ├── ATSFORRESUME (1).ipynb
│   ├── resume_category_model.pkl
│   └── sample_data
│       ├── Shubham Kumar.pdf
│       └── UpdatedResumeDataSet.csv
└── model
    ├── model.pkl
    └── vectorizer.pkl

```


## Application URL

| URL | Result |
|---|---|
| `https://ats.narwhalsofficial.com/` | Landing page from `/var/www/ats/index.html` |
| `https://ats.narwhalsofficial.com/demo` | Redirects to `/demo/` |
| `https://ats.narwhalsofficial.com/demo/` | FastAPI application |
| `https://ats.narwhalsofficial.com/demo/docs` | FastAPI Swagger docs, if enabled |




## Lables For Issues

### 1. Recommended GitHub labels

Use this table to organize your ATS repository issues and pull requests.

| Label              | Color      | Hex code  | Purpose                                          |
| ------------------ | ---------- | --------- | ------------------------------------------------ |
| `bug`              | Red        | `#D73A4A` | Something isn't working                          |
| `feature`          | Green      | `#0E8A16` | New functionality                                |
| `enhancement`      | Blue       | `#1D76DB` | Improve existing functionality                   |
| `documentation`    | Light blue | `#0075CA` | README, API docs, guides                         |
| `refactor`         | Purple     | `#7057FF` | Improve code structure without changing behavior |
| `test`             | Teal       | `#008672` | Unit tests, integration tests                    |
| `security`         | Dark red   | `#B60205` | Authentication, authorization, security fixes    |
| `performance`      | Orange     | `#FB8C00` | Query and API performance                        |
| `good first issue` | Green      | `#7057FF` | Beginner-friendly issues                         |
| `help wanted`      | Cyan       | `#008672` | Extra attention needed                           |
| `duplicate`        | Gray       | `#CFD3D7` | Duplicate issue                                  |
| `invalid`          | Gray       | `#E4E669` | Invalid issue                                    |
| `question`         | Purple     | `#D876E3` | Questions or clarification                       |
| `wontfix`          | Gray       | `#FFFFFF` | Issue will not be fixed                          |

## 2. Priority labels

Use these labels to decide which issues should be completed first.

| Label           | Color    | Hex code  | Purpose                                                  |
| --------------- | -------- | --------- | -------------------------------------------------------- |
| `P0 - Critical` | Dark red | `#B60205` | Critical security, authentication, or production failure |
| `P1 - High`     | Red      | `#D73A4A` | Important feature or major bug                           |
| `P2 - Medium`   | Orange   | `#FB8C00` | Normal development task                                  |
| `P3 - Low`      | Yellow   | `#FBCA04` | Minor improvement or low-priority task                   |

## 3. ATS feature-area labels

These labels help you filter issues by module.

| Label                  | Color      | Hex code  |
| ---------------------- | ---------- | --------- |
| `area: users`          | Blue       | `#1D76DB` |
| `area: DevOps`         | Green      | `#0E8A16` |
| `area: comments`       | Purple     | `#7057FF` |
| `area: instructors`    | Cyan       | `#008672` |
| `area: authentication` | Red        | `#B60205` |
| `area: database`       | Gray       | `#6A737D` |
| `area: api`            | Light blue | `#0075CA` |

## 4. Development status labels

| Label                      | Color  | Hex code  |
| -------------------------- | ------ | --------- |
| `status: todo`             | Gray   | `#CFD3D7` |
| `status: in progress`      | Blue   | `#1D76DB` |
| `status: blocked`          | Red    | `#B60205` |
| `status: ready for review` | Purple | `#7057FF` |
| `status: done`             | Green  | `#0E8A16` |

## 5. Backend architecture labels

Since your project uses layered architecture, these labels will help identify which layer needs modification.

| Label                   | Color  | Hex code  |
| ----------------------- | ------ | --------- |
| `backend: models`       | Blue   | `#1D76DB` |
| `backend: schemas-dto`  | Purple | `#7057FF` |
| `backend: repositories` | Green  | `#0E8A16` |
| `backend: services`     | Orange | `#FB8C00` |
| `backend: routes`       | Cyan   | `#008672` |
| `backend: config`       | Gray   | `#6A737D` |

