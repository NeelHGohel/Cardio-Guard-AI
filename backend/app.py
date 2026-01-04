from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import numpy as np
import joblib
import os

app = FastAPI(
    title="CardioGuard AI API",
    description="Cardiovascular Risk Prediction using Gradient Boosting",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
model = joblib.load(os.path.join(BASE_DIR, "model_gb_deploy.pkl"))

# ✅ BMI IS REQUIRED
class CardioInput(BaseModel):
    age: int
    gender: int
    height: float
    weight: float
    ap_hi: int
    ap_lo: int
    cholesterol: int
    gluc: int
    smoke: int
    alco: int
    active: int
    bmi: float

@app.get("/")
def root():
    return {"status": "OK"}

@app.post("/predict")
def predict_risk(data: CardioInput):
    features = np.array([[  
        data.age,
        data.gender,
        data.height,
        data.weight,
        data.ap_hi,
        data.ap_lo,
        data.cholesterol,
        data.gluc,
        data.smoke,
        data.alco,
        data.active,
        data.bmi
    ]])

    proba = model.predict_proba(features)[0][1]

    if proba > 0.6:
        risk = "High Risk"
    elif proba > 0.3:
        risk = "Medium Risk"
    else:
        risk = "Low Risk"

    return {
        "risk": risk,
        "probability": round(float(proba), 3)
    }
