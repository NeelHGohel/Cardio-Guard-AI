from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import numpy as np
import joblib
import os

# ---------------- APP INIT ----------------
app = FastAPI(
    title="CardioGuard AI API",
    description="Cardiovascular Risk Prediction using Gradient Boosting",
    version="1.0.0"
)

# ---------------- CORS ----------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # change to frontend domain in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------- LOAD MODEL (RENDER SAFE PATH) ----------------
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
model = joblib.load(os.path.join(BASE_DIR, "model_gb_deploy.pkl"))

# ---------------- INPUT SCHEMA ----------------
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

# ---------------- ROOT ROUTE ----------------
@app.get("/")
def root():
    return {
        "message": "CardioGuard AI API is running",
        "model": "Gradient Boosting",
        "status": "OK"
    }

# ---------------- PREDICTION ROUTE ----------------
@app.post("/predict")
def predict_risk(data: CardioInput):

    # IMPORTANT: Feature order MUST match training exactly
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
        data.active
    ]])

    # Probability of cardio disease (class = 1)
    proba = model.predict_proba(features)[0][1]

    # Risk mapping
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
