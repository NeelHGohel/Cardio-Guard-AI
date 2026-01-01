from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import numpy as np
import joblib

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

# ---------------- LOAD MODEL (SAFE) ----------------
model = joblib.load("model_gb_deploy.pkl")

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
    bmi: float

# ---------------- ROOT ----------------
@app.get("/")
def root():
    return {
        "message": "CardioGuard AI API is running",
        "model": "Gradient Boosting",
        "accuracy": "72.82%"
    }

# ---------------- PREDICTION ----------------
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

    prediction = model.predict(features)[0]
    risk = "High Risk" if prediction == 1 else "Low Risk"

    response = {"risk": risk}

    # Optional confidence
    if hasattr(model, "predict_proba"):
        try:
            proba = model.predict_proba(features)[0]
            response["confidence"] = round(float(max(proba)), 2)
        except:
            pass

    return response
