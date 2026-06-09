
# 🎓 Student Performance Predictor

A Machine Learning-powered web application that predicts a student's academic performance based on study habits, previous scores, extracurricular participation, sleep patterns, and question paper practice.

## 🚀 Live Demo

### Frontend

<a href="https://predict-student-performcance-dun.vercel.app/">clicke here</a>

### Backend API

https://predict-student-performance-3nlf.onrender.com

---

## 📌 Features

* Predict student performance using Machine Learning
* Modern React.js frontend
* FastAPI backend
* Responsive UI
* Real-time prediction
* REST API integration
* Cloud deployment with Vercel and Render

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Axios
* CSS3

### Backend

* FastAPI
* Uvicorn
* Scikit-Learn
* NumPy
* Pandas

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## 📂 Project Structure

```bash
multivaraible-linear-regression-main
│
├── backend
│   ├── main.py
│   ├── model.pkl
│
├── frontend
│   ├── src
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
├── Student_Performance.csv
└── README.md
```

---

## 📊 Input Features

| Feature                    | Description                   |
| -------------------------- | ----------------------------- |
| Hours Studied              | Number of study hours per day |
| Previous Exam Score        | Previous academic score       |
| Extracurricular Activities | Participation in activities   |
| Sleep Hours                | Average daily sleep           |
| Question Papers Practiced  | Number of papers solved       |

---

## ⚙️ Model

The project uses a trained Machine Learning regression model to estimate a student's performance score based on educational and lifestyle factors.

The trained model is stored as:

```python
model.pkl
```

and is loaded using FastAPI during API startup.

---

## 🔌 API Endpoint

### Predict Performance

```http
POST /predict
```

### Request Body

```json
{
  "hours_studied": 5,
  "previous_scores": 80,
  "extracurricular": 1,
  "sleep_hours": 7,
  "papers_practiced": 5
}
```

### Response

```json
{
  "prediction": 66.60
}
```

---

## 💻 Run Locally

### Clone Repository

```bash
git clone https://github.com/rayaproluaditya/multivaraible-linear-regression.git

cd multivaraible-linear-regression
```

---

### Backend Setup

```bash
cd backend

pip install -r requirements.txt

uvicorn main:app --reload
```

Backend runs at:

```bash
http://127.0.0.1:8000
```

---

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs at:

```bash
http://localhost:5173
```

---

## 🌐 Deployment

### Frontend (Vercel)

```text
Framework: Vite
Root Directory: frontend
Build Command: npm run build
Output Directory: dist
```

### Backend (Render)

```text
Build Command:
pip install -r requirements.txt

Start Command:
uvicorn main:app --host 0.0.0.0 --port $PORT
```

---

## 🎯 Future Improvements

* User Authentication
* Prediction History
* Performance Analytics Dashboard
* Explainable AI Insights
* Model Retraining Pipeline
* Docker Deployment

---

## 👨‍💻 Author

**R. Aditya Prakash**

GitHub:
https://github.com/rayaproluaditya

---

⭐ If you found this project useful, consider giving it a star on GitHub.
