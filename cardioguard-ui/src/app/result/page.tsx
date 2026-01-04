"use client";

export const prerender = false;

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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

export default function ResultPage() {
  const router = useRouter();
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const data = localStorage.getItem("prediction");

    if (!data) {
      router.push("/predict");
      return;
    }

    try {
      setResult(JSON.parse(data));
    } catch {
      router.push("/predict");
    }
  }, [router]);

  if (!result) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-indigo-600 mb-4"></div>
          <p className="text-gray-600">Loading prediction result...</p>
        </div>
      </div>
    );
  }

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

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <div
          className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
            isHigh ? "bg-red-50" : "bg-green-50"
          }`}
        >
          {isHigh ? (
            <AlertTriangle className="text-red-500" size={32} />
          ) : (
            <CheckCircle2 className="text-green-600" size={32} />
          )}
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Prediction Result
        </h2>
        <p className="text-gray-600">Based on the health data you provided</p>
      </div>

      {/* Main Result Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Risk Assessment Card */}
        <div
          className={`rounded-xl border-2 p-8 ${
            isHigh
              ? "border-red-500 bg-gradient-to-br from-red-50 to-red-100"
              : "border-green-600 bg-gradient-to-br from-green-50 to-green-100"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            {isHigh ? (
              <AlertTriangle className="text-red-500" size={28} />
            ) : (
              <CheckCircle2 className="text-green-600" size={28} />
            )}
            <h3 className="text-lg font-semibold text-gray-900">
              Risk Assessment
            </h3>
          </div>

          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-2">
              Cardiovascular Risk Level
            </p>
            <p
              className={`text-5xl font-bold ${
                isHigh ? "text-red-500" : "text-green-600"
              }`}
            >
              {result.risk}
            </p>
          </div>

          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-white border">
              <div className="flex items-start gap-2">
                <Info
                  className={`mt-0.5 ${
                    isHigh ? "text-red-500" : "text-green-600"
                  }`}
                  size={18}
                />
                <p className="text-sm text-gray-600">
                  This assessment is generated using a{" "}
                  <span className="font-semibold">
                    Gradient Boosting machine learning model
                  </span>{" "}
                  and is intended for decision support only.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-white border">
              <div className="flex items-start gap-2">
                <Stethoscope
                  className={`mt-0.5 ${
                    isHigh ? "text-red-500" : "text-green-600"
                  }`}
                  size={18}
                />
                <p className="text-sm text-gray-600">
                  Always consult a certified healthcare professional.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Confidence Gauge Card */}
        <Card>
          <div className="flex items-center gap-3 mb-6">
            <Activity className="text-indigo-600" size={24} />
            <h3 className="text-xl font-bold">Prediction Confidence</h3>
          </div>

          {confidence ? (
            <div className="flex flex-col items-center">
              <ResponsiveContainer width="100%" height={240}>
                <RadialBarChart
                  cx="50%"
                  cy="50%"
                  innerRadius="70%"
                  outerRadius="90%"
                  barSize={16}
                  data={chartData}
                  startAngle={180}
                  endAngle={0}
                >
                  <PolarAngleAxis
                    type="number"
                    domain={[0, 100]}
                    tick={false}
                  />
                  <RadialBar
                    background={{ fill: "#F3F4F6" }}
                    dataKey="value"
                    cornerRadius={10}
                  />
                </RadialBarChart>
              </ResponsiveContainer>

              <div className="text-center mt-4">
                <p className="text-5xl font-bold text-gray-900">
                  {confidence}%
                </p>
                <p className="text-sm text-gray-600">
                  Model confidence in this prediction
                </p>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-400">
              Confidence score not available
            </p>
          )}
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => router.push("/predict")}
          className="flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-indigo-600 text-indigo-600 font-semibold"
        >
          <RefreshCw size={20} />
          New Assessment
        </button>

        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-gray-200 text-gray-600 font-semibold"
        >
          <ArrowLeft size={20} />
          Back to Dashboard
        </button>

        <button
          onClick={() => router.push("/accuracy")}
          className="flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold"
        >
          <Shield size={20} />
          View Model Accuracy
        </button>

        <button
          onClick={() => router.push("/insights")}
          className="flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-gray-200 text-gray-600 font-semibold"
        >
          <TrendingUp size={20} />
          View Risk Factors
        </button>
      </div>
    </div>
  );
}
