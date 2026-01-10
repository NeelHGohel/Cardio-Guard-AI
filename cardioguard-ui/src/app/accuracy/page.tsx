"use client";

import Card from "./../../components/Card";
import {
  ShieldCheck,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  XCircle,
  BarChart3,
  Target,
  Database,
  Search,
  BookOpen,
  Info
} from "lucide-react";

export default function AccuracyPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-12 pb-20">

      {/* 1. Header / Transparency Declaration */}
      <section className="pt-8 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
          <ShieldCheck size={14} />
          Validated Performance
        </div>
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-6">
          Transparency Report
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          We believe in honest AI. This report details the true performance capabilities—and limitations—of our cardiovascular risk prediction model, v2.1.
        </p>
      </section>

      {/* 2. Key Metrics Grid */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Validation Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Accuracy */}
          <Card className="bg-slate-900 text-white border-slate-800">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-white/10 rounded-lg">
                <Target className="text-emerald-400" size={20} />
              </div>
              <span className="text-emerald-400 text-xs font-bold uppercase">Primary Metric</span>
            </div>
            <p className="text-5xl font-bold text-black tracking-tight mb-2">72.8%</p>
            <p className="text-sm text-slate-400 font-medium">Overall Accuracy</p>
            <p className="text-xs text-slate-500 mt-2">Tested on 14,000 hold-out samples</p>
          </Card>

          {/* Precision */}
          <Card>
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <Search size={20} />
              </div>
            </div>
            <p className="text-4xl font-bold text-slate-900 tracking-tight mb-2">75.1%</p>
            <p className="text-sm text-slate-600 font-bold">Precision</p>
            <p className="text-xs text-slate-500 mt-2">Reliability of "High Risk" flags</p>
          </Card>

          {/* Recall */}
          <Card>
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                <Database size={20} />
              </div>
            </div>
            <p className="text-4xl font-bold text-slate-900 tracking-tight mb-2">69.4%</p>
            <p className="text-sm text-slate-600 font-bold">Recall</p>
            <p className="text-xs text-slate-500 mt-2">Ability to catch true positives</p>
          </Card>

          {/* F1 Score */}
          <Card>
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-violet-50 text-violet-600 rounded-lg">
                <BarChart3 size={20} />
              </div>
            </div>
            <p className="text-4xl font-bold text-slate-900 tracking-tight mb-2">72.1%</p>
            <p className="text-sm text-slate-600 font-bold">F1-Score</p>
            <p className="text-xs text-slate-500 mt-2">Balance of Precision & Recall</p>
          </Card>

        </div>
      </section>

      {/* 3. Accuracy in Practice (Visualization) */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
            <BookOpen size={14} />
            Real-World Context
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">What does 73% accuracy mean?</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            In a hypothetical group of 100 new patients, our model effectively acts as a "second opinion" screening tool. Use this breakdown to understand when to trust the model.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
              <CheckCircle2 className="text-emerald-600 shrink-0 mt-1" size={20} />
              <div>
                <p className="font-bold text-slate-900 text-sm">73 Correct Predictions</p>
                <p className="text-sm text-slate-600">The model correctly identifies the risk category.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-amber-50 border border-amber-100 rounded-xl">
              <AlertCircle className="text-amber-600 shrink-0 mt-1" size={20} />
              <div>
                <p className="font-bold text-slate-900 text-sm">27 Misclassifications</p>
                <p className="text-sm text-slate-600">Cases where the model may falter, typically in "borderline" patients with conflicting vital signs.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Grid Visualization */}
        <Card className="p-8">
          <h3 className="font-bold text-slate-900 mb-6 text-center">Visualizing 100 Patient Predictions</h3>
          <div className="grid grid-cols-10 gap-2">
            {Array.from({ length: 100 }).map((_, i) => (
              <div
                key={i}
                className={`
                        w-full aspect-square rounded-sm
                        ${i < 73 ? "bg-emerald-500" : "bg-slate-200"}
                     `}
                title={i < 73 ? "Correct Prediction" : "Incorrect Prediction"}
              />
            ))}
          </div>
          <div className="flex justify-between items-center mt-6 text-xs font-semibold uppercase tracking-wide text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-sm" />
              <span>Correct (73)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-slate-200 rounded-sm" />
              <span>Incorrect (27)</span>
            </div>
          </div>
        </Card>
      </section>

      {/* 4. Limitations & Disclaimer */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 p-8 bg-slate-50 rounded-3xl border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <AlertCircle className="text-slate-400" />
            Known Limitations
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 shrink-0" />
              <p className="text-slate-600">
                <strong>Gray Zone Cases:</strong> The model struggles with patients who have normal blood pressure but high cholesterol, or vice-versa.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 shrink-0" />
              <p className="text-slate-600">
                <strong>Data Bias:</strong> The training dataset consists primarily of adults aged 40-65. Accuracy may decrease for younger adults or octogenarians.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 shrink-0" />
              <p className="text-slate-600">
                <strong>Static Analysis:</strong> This model captures a snapshot in time and does not account for historical trends or genetic family history.
              </p>
            </li>
          </ul>
        </div>

        <div className="p-8 bg-indigo-600 rounded-3xl text-white flex flex-col justify-between">
          <div>
            <ShieldCheck size={32} className="text-indigo-200 mb-6" />
            <h3 className="text-xl font-bold mb-2">Clinical Support Only</h3>
            <p className="text-indigo-100 leading-relaxed text-sm opacity-90">
              This tool is designed to augment clinical decision-making, not replace it. It should never be used as the sole basis for diagnosis or treatment.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-indigo-500/30">
            <p className="text-xs font-medium text-indigo-200">
              By using this platform, you acknowledge understanding these limitations.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
