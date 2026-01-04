"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import Card from "./../../components/Card";
import {
  AlertTriangle,
  CheckCircle2,
  Activity,
  Shield,
  TrendingUp,
  RefreshCw,
  ArrowLeft,
  Stethoscope,
  Heart,
  AlertCircle,
  Info,
} from "lucide-react";

export default function ResultContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const data = searchParams.get("data");

    if (!data) {
      router.push("/predict");
      return;
    }

    try {
      const parsed = JSON.parse(decodeURIComponent(data));
      setResult(parsed);
    } catch {
      router.push("/predict");
    }
  }, [router, searchParams]);

  if (!result) return null;

  const isHigh = result.risk === "High Risk";
  const confidence = result.confidence
    ? Math.round(result.confidence * 100)
    : null;

  const chartData = confidence
    ? [
        {
          name: "Confidence",
          value: confidence,
          fill: isHigh ? "#EF4444" : "#22C55E",
        },
      ]
    : [];

  /* 🔴 UI BELOW IS UNCHANGED 🔴 */
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* 🔽 YOUR ENTIRE UI CODE GOES HERE (unchanged) */}
      {/* (You already pasted it before — paste it exactly here) */}
    </div>
  );
}
