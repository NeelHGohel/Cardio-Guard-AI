// export async function predictRisk(data: any) {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/predict`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });

//   if (!res.ok) {
//     const err = await res.text();
//     throw new Error(err);
//   }

//   return res.json();
// }
import { PredictionResponseSchema } from "./predictionSchema";

export async function predictRisk(data: any) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/predict`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Prediction request failed");
  }

  const json = await res.json();

  // 🔒 STRICT VALIDATION
  const parsed = PredictionResponseSchema.safeParse(json);

  if (!parsed.success) {
    console.error("❌ Invalid ML response:", parsed.error.format());
    throw new Error("Invalid model response format");
  }

  // ✅ Guaranteed ML output
  return parsed.data;
}
