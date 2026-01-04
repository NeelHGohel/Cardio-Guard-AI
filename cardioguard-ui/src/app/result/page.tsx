"use client";

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
    setResult(JSON.parse(data));
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
            <div
              className={`p-4 rounded-lg ${
                isHigh
                  ? "bg-white border border-red-100"
                  : "bg-white border border-green-100"
              }`}
            >
              <div className="flex items-start gap-2">
                <Info
                  className={`flex-shrink-0 mt-0.5 ${
                    isHigh ? "text-red-500" : "text-green-600"
                  }`}
                  size={18}
                />
                <p className="text-sm text-gray-600">
                  This assessment is generated using a{" "}
                  <span className="font-semibold">
                    Gradient Boosting machine learning model
                  </span>{" "}
                  and is intended for{" "}
                  <span className="font-semibold">decision-support only</span>.
                </p>
              </div>
            </div>

            <div
              className={`p-4 rounded-lg ${
                isHigh
                  ? "bg-white border border-red-100"
                  : "bg-white border border-green-100"
              }`}
            >
              <div className="flex items-start gap-2">
                <Stethoscope
                  className={`flex-shrink-0 mt-0.5 ${
                    isHigh ? "text-red-500" : "text-green-600"
                  }`}
                  size={18}
                />
                <p className="text-sm text-gray-600">
                  Always consult a{" "}
                  <span className="font-semibold">
                    certified healthcare professional
                  </span>{" "}
                  for proper medical diagnosis and treatment advice.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Confidence Gauge Card */}
        <Card>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-indigo-50 rounded-lg">
              <Activity className="text-indigo-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">
              Prediction Confidence
            </h3>
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
                <p className="text-5xl font-bold text-gray-900 mb-2">
                  {confidence}%
                </p>
                <p className="text-sm text-gray-600">
                  Model confidence in this prediction
                </p>
              </div>

              <div className="w-full mt-6 p-4 rounded-lg bg-gray-50">
                <p className="text-xs text-gray-600">
                  <span className="font-semibold">Confidence Score:</span>{" "}
                  Indicates how certain the model is about this prediction based
                  on the input features and learned patterns.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-64">
              <p className="text-gray-400">Confidence score not available</p>
            </div>
          )}
        </Card>
      </div>

      {/* Recommendations */}
      <Card>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-50 rounded-lg">
            <Heart className="text-blue-400" size={24} />
          </div>
          <h3 className="text-xl font-bold text-gray-900">
            {isHigh ? "Recommended Actions" : "Maintaining Heart Health"}
          </h3>
        </div>

        <div className="space-y-4">
          {isHigh ? (
            <>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  1
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    Consult a Cardiologist Immediately
                  </p>
                  <p className="text-sm text-gray-600">
                    Schedule an appointment with a heart specialist for
                    comprehensive cardiovascular evaluation and proper
                    diagnostic tests (ECG, stress test, blood work).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-amber-50 border border-amber-200">
                <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  2
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    Monitor Your Blood Pressure Daily
                  </p>
                  <p className="text-sm text-gray-600">
                    Keep a daily log of blood pressure readings and share them
                    with your doctor. Maintain values below 120/80 mmHg if
                    possible.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-blue-50 border border-blue-200">
                <div className="w-8 h-8 bg-blue-400 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  3
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    Lifestyle Modifications
                  </p>
                  <p className="text-sm text-gray-600">
                    Adopt a heart-healthy diet (low sodium, rich in
                    fruits/vegetables), engage in regular physical activity (30
                    min/day), quit smoking, and limit alcohol intake.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-indigo-50 border border-indigo-200">
                <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  4
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    Medication Adherence
                  </p>
                  <p className="text-sm text-gray-600">
                    If prescribed, take all cardiovascular medications as
                    directed and never skip doses without consulting your
                    doctor.
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-green-50 border border-green-200">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  ✓
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    Continue Regular Check-ups
                  </p>
                  <p className="text-sm text-gray-600">
                    Maintain annual physical examinations and cardiovascular
                    screenings to monitor your heart health proactively.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-green-50 border border-green-200">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  ✓
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    Maintain Healthy Lifestyle Habits
                  </p>
                  <p className="text-sm text-gray-600">
                    Keep up with regular exercise, balanced nutrition, adequate
                    sleep, and stress management to preserve your cardiovascular
                    health.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-green-50 border border-green-200">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  ✓
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    Stay Vigilant About Changes
                  </p>
                  <p className="text-sm text-gray-600">
                    Monitor for any new symptoms (chest pain, shortness of
                    breath, unusual fatigue) and report them to your doctor
                    immediately.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </Card>

      {/* Warning Banner */}
      <div className="p-6 rounded-xl bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-500">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-white rounded-xl shadow-sm">
            <AlertCircle className="text-red-500" size={28} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Important Medical Disclaimer
            </h3>
            <p className="text-gray-700 leading-relaxed">
              This AI-generated prediction is{" "}
              <span className="font-semibold">not a medical diagnosis</span>.
              The model has a 72.82% accuracy rate, meaning it may be incorrect
              in approximately 27% of cases. This tool is designed for
              educational purposes and decision support only. For any health
              concerns, always consult with qualified healthcare professionals
              who can conduct proper medical examinations and diagnostic tests.
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => router.push("/predict")}
          className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border-2 border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-50 transition-all duration-200"
        >
          <RefreshCw size={20} />
          New Risk Assessment
        </button>

        <button
          onClick={() => router.push("/accuracy")}
          className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all duration-200"
        >
          <Shield size={20} />
          View Model Accuracy
        </button>

        <button
          onClick={() => router.push("/insights")}
          className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border-2 border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
        >
          <TrendingUp size={20} />
          View Risk Factors
        </button>

        <button
          onClick={() => router.push("/")}
          className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border-2 border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
        >
          <ArrowLeft size={20} />
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}
