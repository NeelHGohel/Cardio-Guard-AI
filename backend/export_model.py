import pickle
import joblib

# Load the trained model
with open("model_gb.pkl", "rb") as f:
    model = pickle.load(f)

# Re-save for deployment (safe format)
joblib.dump(model, "model_gb_deploy.pkl")

print("Model re-saved successfully")
