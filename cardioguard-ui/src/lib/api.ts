export const API_BASE = "http://127.0.0.1:8000";

export async function predictRisk(data: any) {
  const res = await fetch(`${API_BASE}/predict`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Prediction failed");
  return res.json();
}
