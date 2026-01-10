"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  CartesianGrid,
} from "recharts";
import Card from "./../../components/Card";
import {
  BarChart3,
  TrendingUp,
  Activity,
  Heart,
  Droplets,
  Scale,
  Zap,
  BookOpen,
  ArrowRight,
  Info,
} from "lucide-react";
import Link from "next/link";

const factors = [
  {
    name: "Blood Pressure",
    value: 85,
    color: "#EF4444",
    icon: Activity,
    description: "Force of circulating blood on artery walls",
  },
  {
    name: "Cholesterol",
    value: 70,
    color: "#F59E0B",
    icon: Droplets,
    description: "Waxy substance found in blood",
  },
  {
    name: "BMI",
    value: 65,
    color: "#10B981",
    icon: Scale,
    description: "Body mass to height ratio",
  },
  {
    name: "Glucose",
    value: 60,
    color: "#6366F1",
    icon: Zap,
    description: "Blood sugar level",
  },
  {
    name: "Age & Lifestyle",
    value: 45,
    color: "#8B5CF6",
    icon: TrendingUp,
    description: "Age, smoking, alcohol, activity",
  },
];

export default function InsightsPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-12 pb-20">
      {/* 1. Hero / Narrative Intro */}
      <section className="pt-10">
        <div className="max-w-3xl">
          {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wide mb-6 shadow-sm">
            <BookOpen size={14} />
            Explainable AI
          </div> */}

          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-6">
            Understanding Gradient Boosting Decisions
          </h1>

          <p className="text-l text-slate-600 leading-relaxed mb-8">
            CardioGuard uses a{" "}
            <span className="font-semibold text-slate-900">
              Gradient Boosting model
            </span>
            , which combines multiple decision trees trained sequentially to
            improve prediction accuracy. While this approach is highly
            effective, the complexity of many interconnected trees can make the
            model appear like a{" "}
            <span className="font-semibold text-slate-900">“black box”</span>.
            To address this, we provide clear explanations through
            <span className="font-semibold text-slate-900">
              {" "}
              Global Feature Importance
            </span>
            , showing which health factors most strongly influence risk
            predictions.
          </p>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      </section>

      {/* 2. Global Feature Importance Chart */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-1 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            What Drives Risk?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Our model was trained on over 70,000 clinical records. Across this
            population, <strong>Systolic Blood Pressure</strong> emerged as the
            single most predictive indicator of cardiovascular events, followed
            closely by Cholesterol levels.
          </p>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <div className="flex items-start gap-3">
              <Info className="text-indigo-600 shrink-0 mt-0.5" size={18} />
              <p className="text-sm text-slate-700">
                <strong>Note:</strong> While these are global averages,
                individual risk can vary based on the unique combination of
                factors in a specific patient.
              </p>
            </div>
          </div>
        </div>

        <Card className="lg:col-span-2">
          <div className="mb-8">
            <h3 className="font-bold text-slate-900">
              Global Feature Importance
            </h3>
            <p className="text-sm text-slate-500">
              Relative impact score (0-100) on model decision making
            </p>
          </div>

          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={factors}
                margin={{ top: 0, right: 30, left: 40, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={true}
                  vertical={false}
                  stroke="#E2E8F0"
                />
                <XAxis type="number" hide />
                <YAxis
                  dataKey="name"
                  type="category"
                  axisLine={false}
                  tickLine={false}
                  width={120}
                  tick={{ fill: "#475569", fontSize: 13, fontWeight: 600 }}
                />
                <Tooltip
                  cursor={{ fill: "transparent" }}
                  contentStyle={{
                    borderRadius: "12px",
                    border: "none",
                    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                  }}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={32}>
                  {factors.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </section>

      {/* 3. Deep Dive Grid */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="h-8 w-1 bg-indigo-600 rounded-full" />
          <h2 className="text-2xl font-bold text-slate-900">
            Clinical Drivers Breakdown
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Blood Pressure */}
          <Card className="border-t-4 border-t-rose-500 hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-rose-50 text-rose-500 rounded-xl">
                <Activity size={24} />
              </div>
              <span className="px-2 py-1 bg-rose-100 text-rose-700 text-[10px] font-bold uppercase rounded">
                Critical Impact
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Blood Pressure
            </h3>
            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
              Chronic hypertension damages arteries, making them less elastic,
              which decreases the flow of blood and oxygen to the heart.
            </p>
            <div className="pt-4 border-t border-slate-100">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Clinician Note
              </p>
              <p className="text-sm text-slate-800">
                Systolic pressure (ap_hi) &gt; 140 is a major warning sign.
              </p>
            </div>
          </Card>

          {/* Cholesterol */}
          <Card className="border-t-4 border-t-amber-500 hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-amber-50 text-amber-500 rounded-xl">
                <Droplets size={24} />
              </div>
              <span className="px-2 py-1 bg-amber-100 text-amber-700 text-[10px] font-bold uppercase rounded">
                High Impact
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Cholesterol
            </h3>
            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
              High levels of low-density lipoprotein (LDL) can lead to plaque
              buildup in arteries, significantly increasing heart attack risk.
            </p>
            <div className="pt-4 border-t border-slate-100">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Clinician Note
              </p>
              <p className="text-sm text-slate-800">
                Total cholesterol levels should ideally be below 200 mg/dL.
              </p>
            </div>
          </Card>

          {/* BMI */}
          <Card className="border-t-4 border-t-emerald-500 hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-emerald-50 text-emerald-500 rounded-xl">
                <Scale size={24} />
              </div>
              <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase rounded">
                Moderate Impact
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Body Mass Index
            </h3>
            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
              Obesity puts extra strain on the heart and is often linked to
              other risks like high BP and diabetes.
            </p>
            <div className="pt-4 border-t border-slate-100">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Clinician Note
              </p>
              <p className="text-sm text-slate-800">
                BMI &gt; 30 is classified as obese and warrants intervention.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* 4. Call to Action */}
      <section className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to assess a patient?
          </h2>
          <p className="text-slate-400 text-lg">
            Apply these insights in a real-time clinical assessment using our
            predictive model.
          </p>
        </div>

        <div className="relative z-10">
          <Link
            href="/predict"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-indigo-50 transition-colors shadow-lg"
          >
            <span>Start Assessment</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
