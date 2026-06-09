from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import numpy as np
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = pickle.load(open("model.pkl", "rb"))

class Student(BaseModel):
    hours_studied: float
    previous_scores: float
    extracurricular: int
    sleep_hours: float
    papers_practiced: float

@app.post("/predict")
def predict(data: Student):

    features = np.array([[
        data.hours_studied,
        data.previous_scores,
        data.extracurricular,
        data.sleep_hours,
        data.papers_practiced
    ]])

    prediction = model.predict(features)

    return {
        "prediction": float(prediction[0])
    }