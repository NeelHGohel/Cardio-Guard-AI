"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from "recharts";
import Card from "@/components/Card";
import {
  AlertTriangle,
  CheckCircle2,
  Activity,
  Shield,
  TrendingUp,
  FileText,
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
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#E5E7EB] border-t-[#4F46E5] mb-4"></div>
          <p className="text-[#6B7280]">Loading prediction result...</p>
        </div>
      </div>
    );
  }

  const isHigh = result.risk === "High Risk";
  const confidence = result.confidence ? Math.round(result.confidence * 100) : null;

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
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
          isHigh ? "bg-[#FEF2F2]" : "bg-[#ECFDF5]"
        }`}>
          {isHigh ? (
            <AlertTriangle className="text-[#EF4444]" size={32} />
          ) : (
            <CheckCircle2 className="text-[#22C55E]" size={32} />
          )}
        </div>
        <h2 className="text-3xl font-bold text-[#111827] mb-2">
          Prediction Result
        </h2>
        <p className="text-[#6B7280]">
          Based on the health data you provided
        </p>
      </div>

      {/* Main Result Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Risk Assessment Card */}
        <div
          className={`rounded-xl border-2 p-8 ${
            isHigh
              ? "border-[#EF4444] bg-gradient-to-br from-[#FEF2F2] to-[#FEE2E2]"
              : "border-[#22C55E] bg-gradient-to-br from-[#ECFDF5] to-[#D1FAE5]"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            {isHigh ? (
              <AlertTriangle className="text-[#EF4444]" size={28} />
            ) : (
              <CheckCircle2 className="text-[#22C55E]" size={28} />
            )}
            <h3 className="text-lg font-semibold text-[#111827]">
              Risk Assessment
            </h3>
          </div>

          <div className="mb-6">
            <p className="text-sm text-[#6B7280] mb-2">Cardiovascular Risk Level</p>
            <p
              className={`text-5xl font-bold ${
                isHigh ? "text-[#EF4444]" : "text-[#22C55E]"
              }`}
            >
              {result.risk}
            </p>
          </div>

          <div className="space-y-3">
            <div className={`p-4 rounded-lg ${
              isHigh ? "bg-white border border-[#FEE2E2]" : "bg-white border border-[#D1FAE5]"
            }`}>
              <div className="flex items-start gap-2">
                <Info className={`flex-shrink-0 mt-0.5 ${
                  isHigh ? "text-[#EF4444]" : "text-[#22C55E]"
                }`} size={18} />
                <p className="text-sm text-[#6B7280]">
                  This assessment is generated using a <span className="font-semibold">Gradient Boosting 
                  machine learning model</span> and is intended for <span className="font-semibold">decision-support 
                  only</span>.
                </p>
              </div>
            </div>

            <div className={`p-4 rounded-lg ${
              isHigh ? "bg-white border border-[#FEE2E2]" : "bg-white border border-[#D1FAE5]"
            }`}>
              <div className="flex items-start gap-2">
                <Stethoscope className={`flex-shrink-0 mt-0.5 ${
                  isHigh ? "text-[#EF4444]" : "text-[#22C55E]"
                }`} size={18} />
                <p className="text-sm text-[#6B7280]">
                  Always consult a <span className="font-semibold">certified healthcare professional</span> for 
                  proper medical diagnosis and treatment advice.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Confidence Gauge Card */}
        <Card>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-[#EEF2FF] rounded-lg">
              <Activity className="text-[#4F46E5]" size={24} />
            </div>
            <h3 className="text-xl font-bold text-[#111827]">
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
                  <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                  <RadialBar
                    background={{ fill: "#F3F4F6" }}
                    dataKey="value"
                    cornerRadius={10}
                  />
                </RadialBarChart>
              </ResponsiveContainer>

              <div className="text-center mt-4">
                <p className="text-5xl font-bold text-[#111827] mb-2">
                  {confidence}%
                </p>
                <p className="text-sm text-[#6B7280]">
                  Model confidence in this prediction
                </p>
              </div>

              <div className="w-full mt-6 p-4 rounded-lg bg-[#F9FAFB]">
                <p className="text-xs text-[#6B7280]">
                  <span className="font-semibold">Confidence Score:</span> Indicates how certain 
                  the model is about this prediction based on the input features and learned patterns.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-64">
              <p className="text-[#9CA3AF]">Confidence score not available</p>
            </div>
          )}
        </Card>
      </div>

      {/* Recommendations */}
      <Card>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-[#F0F9FF] rounded-lg">
            <Heart className="text-[#38BDF8]" size={24} />
          </div>
          <h3 className="text-xl font-bold text-[#111827]">
            {isHigh ? "Recommended Actions" : "Maintaining Heart Health"}
          </h3>
        </div>

        <div className="space-y-4">
          {isHigh ? (
            <>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-[#FEF2F2] border border-[#FECACA]">
                <div className="w-8 h-8 bg-[#EF4444] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  1
                </div>
                <div>
                  <p className="font-semibold text-[#111827] mb-1">
                    Consult a Cardiologist Immediately
                  </p>
                  <p className="text-sm text-[#6B7280]">
                    Schedule an appointment with a heart specialist for comprehensive cardiovascular 
                    evaluation and proper diagnostic tests (ECG, stress test, blood work).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-[#FFFBEB] border border-[#FDE68A]">
                <div className="w-8 h-8 bg-[#F59E0B] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  2
                </div>
                <div>
                  <p className="font-semibold text-[#111827] mb-1">
                    Monitor Your Blood Pressure Daily
                  </p>
                  <p className="text-sm text-[#6B7280]">
                    Keep a daily log of blood pressure readings and share them with your doctor. 
                    Maintain values below 120/80 mmHg if possible.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-[#F0F9FF] border border-[#BAE6FD]">
                <div className="w-8 h-8 bg-[#38BDF8] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  3
                </div>
                <div>
                  <p className="font-semibold text-[#111827] mb-1">
                    Lifestyle Modifications
                  </p>
                  <p className="text-sm text-[#6B7280]">
                    Adopt a heart-healthy diet (low sodium, rich in fruits/vegetables), engage in 
                    regular physical activity (30 min/day), quit smoking, and limit alcohol intake.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-[#EEF2FF] border border-[#C7D2FE]">
                <div className="w-8 h-8 bg-[#4F46E5] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  4
                </div>
                <div>
                  <p className="font-semibold text-[#111827] mb-1">
                    Medication Adherence
                  </p>
                  <p className="text-sm text-[#6B7280]">
                    If prescribed, take all cardiovascular medications as directed and never skip 
                    doses without consulting your doctor.
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-[#ECFDF5] border border-[#A7F3D0]">
                <div className="w-8 h-8 bg-[#22C55E] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  ✓
                </div>
                <div>
                  <p className="font-semibold text-[#111827] mb-1">
                    Continue Regular Check-ups
                  </p>
                  <p className="text-sm text-[#6B7280]">
                    Maintain annual physical examinations and cardiovascular screenings to monitor 
                    your heart health proactively.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-[#ECFDF5] border border-[#A7F3D0]">
                <div className="w-8 h-8 bg-[#22C55E] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  ✓
                </div>
                <div>
                  <p className="font-semibold text-[#111827] mb-1">
                    Maintain Healthy Lifestyle Habits
                  </p>
                  <p className="text-sm text-[#6B7280]">
                    Keep up with regular exercise, balanced nutrition, adequate sleep, and stress 
                    management to preserve your cardiovascular health.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-[#ECFDF5] border border-[#A7F3D0]">
                <div className="w-8 h-8 bg-[#22C55E] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  ✓
                </div>
                <div>
                  <p className="font-semibold text-[#111827] mb-1">
                    Stay Vigilant About Changes
                  </p>
                  <p className="text-sm text-[#6B7280]">
                    Monitor for any new symptoms (chest pain, shortness of breath, unusual fatigue) 
                    and report them to your doctor immediately.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </Card>

      {/* Warning Banner */}
      <div className="p-6 rounded-xl bg-gradient-to-br from-[#FEF2F2] to-[#FEE2E2] border-2 border-[#EF4444]">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-white rounded-xl shadow-sm">
            <AlertCircle className="text-[#EF4444]" size={28} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#111827] mb-2">
              Important Medical Disclaimer
            </h3>
            <p className="text-[#4B5563] leading-relaxed">
              This AI-generated prediction is <span className="font-semibold">not a medical diagnosis</span>. 
              The model has a 72.82% accuracy rate, meaning it may be incorrect in approximately 27% of cases. 
              This tool is designed for educational purposes and decision support only. For any health concerns, 
              always consult with qualified healthcare professionals who can conduct proper medical examinations 
              and diagnostic tests.
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => router.push("/predict")}
          className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border-2 border-[#4F46E5] text-[#4F46E5] font-semibold hover:bg-[#EEF2FF] transition-all duration-200"
        >
          <RefreshCw size={20} />
          New Risk Assessment
        </button>

        <button
          onClick={() => router.push("/accuracy")}
          className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#4F46E5] text-white font-semibold hover:bg-[#4338CA] shadow-md hover:shadow-lg transition-all duration-200"
        >
          <Shield size={20} />
          View Model Accuracy
        </button>

        <button
          onClick={() => router.push("/insights")}
          className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border-2 border-[#E5E7EB] text-[#6B7280] font-semibold hover:bg-[#F9FAFB] hover:border-[#9CA3AF] transition-all duration-200"
        >
          <TrendingUp size={20} />
          View Risk Factors
        </button>

        <button
          onClick={() => router.push("/")}
          className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border-2 border-[#E5E7EB] text-[#6B7280] font-semibold hover:bg-[#F9FAFB] hover:border-[#9CA3AF] transition-all duration-200"
        >
          <ArrowLeft size={20} />
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}