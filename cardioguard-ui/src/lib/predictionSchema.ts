import { z } from "zod";

/**
 * Strict schema for ML prediction response
 * Backend MUST follow this format
 */
export const PredictionResponseSchema = z.object({
  probability: z
    .number()
    .min(0, "Probability must be >= 0")
    .max(100, "Probability must be <= 100"),

  risk: z.enum(["High Risk", "Low Risk"]),

  // Optional (future-proof)
  model_version: z.string().optional(),
  inference_time_ms: z.number().optional(),
});

export type PredictionResponse = z.infer<typeof PredictionResponseSchema>;
