export async function predictRisk(data: any) {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  // console.log("Backend URL:", baseUrl);

  if (!baseUrl) {
    throw new Error("Backend URL is not defined");
  }

  const res = await fetch(`${baseUrl}/predict`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Backend error:", errorText);
    throw new Error(errorText || "Prediction failed");
  }

  return res.json();
}
