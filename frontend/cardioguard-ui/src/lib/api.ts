export const API_BASE = process.env.VITE_API_BASE_URL;

export async function predictRisk(data: any) {
  console.log(":::::::::::::::::::::" + API_BASE);
  const res = await fetch(`${API_BASE}/predict`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Prediction failed");
  return res.json();
}
