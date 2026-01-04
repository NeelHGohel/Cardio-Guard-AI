"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { predictRisk } from "./../../lib/api";

export default function PredictPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    age: 60,
    gender: 1,
    height: 168,
    weight: 90,
    ap_hi: 165,
    ap_lo: 100,
    cholesterol: 3,
    gluc: 3,
    smoke: 1,
    alco: 1,
    active: 0,
    bmi: 0, // ✅ calculated, not typed
  });

  // ✅ BMI CALCULATION (UI + BACKEND)
  useEffect(() => {
    if (form.height > 0 && form.weight > 0) {
      const bmi = form.weight / Math.pow(form.height / 100, 2);

      setForm((prev) => ({
        ...prev,
        bmi: Number(bmi.toFixed(1)),
      }));
    }
  }, [form.height, form.weight]);

  const update = (key: string, value: number) => {
    setForm({ ...form, [key]: value });
  };

  const submit = async () => {
    setLoading(true);
    setError(null);

    try {
      console.log("Sending payload:", form);

      const result = await predictRisk(form);

      router.push(`/result?data=${encodeURIComponent(JSON.stringify(result))}`);
    } catch {
      setError("Prediction failed");
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>Cardio Risk Prediction</h2>

      <input
        type="number"
        value={form.height}
        onChange={(e) => update("height", Number(e.target.value))}
        placeholder="Height (cm)"
      />

      <input
        type="number"
        value={form.weight}
        onChange={(e) => update("weight", Number(e.target.value))}
        placeholder="Weight (kg)"
      />

      {/* ✅ BMI DISPLAY ONLY */}
      <p>
        <strong>BMI:</strong> {form.bmi}
      </p>

      <button onClick={submit} disabled={loading}>
        {loading ? "Predicting..." : "Predict"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
