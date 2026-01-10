"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Card from "./../../components/Card";
import {
  ShieldAlert,
  CheckCircle2,
  ArrowRight,
  AlertCircle,
  FileText,
  Lock,
  Scale
} from "lucide-react";

export default function DisclaimerPage() {
  const [accepted, setAccepted] = useState(false);
  const router = useRouter();

  const handleContinue = () => {
    if (accepted) {
      router.push("/predict");
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20">

      {/* 1. Hero / Header */}
      <section className="pt-8 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
          <Scale size={14} />
          Ethical Standards
        </div>
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-6">
          Professional Responsibility
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          At CardioGuard AI, we prioritize transparency and patient safety. Please review our operational standards and limitations before using this tool.
        </p>
      </section>

      {/* 2. Core Principles Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Intended Use */}
        <div className="space-y-4">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
            <FileText size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Intended Use</h3>
          <p className="text-slate-600 leading-relaxed text-sm">
            This tool is an <strong>educational aid</strong> designed to demonstrate machine learning capabilities. It is <strong>NOT</strong> a substitute for professional medical advice, diagnosis, or treatment.
          </p>
        </div>

        {/* Scientific Limitations */}
        <div className="space-y-4">
          <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
            <AlertCircle size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Limitations</h3>
          <p className="text-slate-600 leading-relaxed text-sm">
            Predictions are probabilistic estimates based on a static dataset. The model has a known accuracy of 72.8% and may misclassify edge cases or atypical presentations.
          </p>
        </div>

        {/* Data Privacy */}
        <div className="space-y-4">
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
            <Lock size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Data Privacy</h3>
          <p className="text-slate-600 leading-relaxed text-sm">
            Your health data is processed <strong>locally within your browser session</strong>. We do not store, transmit, or sell your personal health information to any cloud servers.
          </p>
        </div>

      </section>

      {/* 3. Detailed Acknowledgment Card */}
      <Card className="border-t-4 border-t-indigo-600 shadow-2xl">
        <div className="p-4 md:p-8 space-y-8">

          <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
            <ShieldAlert className="text-indigo-600 shrink-0 mt-1" size={24} />
            <div>
              <h4 className="font-bold text-slate-900 mb-1">Clinical Safety Notice</h4>
              <p className="text-sm text-slate-600">
                If you are experiencing severe symptoms such as chest pain, shortness of breath, or dizziness, please stop using this tool and contact emergency services immediately.
              </p>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h4 className="font-bold text-slate-900">User Acknowledgment</h4>
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="acceptance"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="w-5 h-5 mt-1 text-indigo-600 border-slate-300 rounded focus:ring-indigo-600 cursor-pointer"
              />
              <label
                htmlFor="acceptance"
                className="text-slate-600 cursor-pointer text-sm leading-relaxed"
              >
                I verify that I have read the above information. I understand that CardioGuard AI provides <strong>informational insights only</strong> and I serve as the sole responsible party for any actions taken based on these results.
              </label>
            </div>
          </div>

          <button
            disabled={!accepted}
            onClick={handleContinue}
            className={`
              w-full md:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all duration-200
              ${accepted
                ? "bg-indigo-600 hover:bg-indigo-700 shadow-xl hover:shadow-indigo-200 hover:-translate-y-0.5"
                : "bg-slate-200 text-slate-400 cursor-not-allowed"
              }
            `}
          >
            {accepted ? (
              <>
                <span>Access Prediction Tool</span>
                <ArrowRight size={20} />
              </>
            ) : (
              <span className="flex items-center gap-2">
                <AlertCircle size={18} />
                <span>Acknowledge to Continue</span>
              </span>
            )}
          </button>
        </div>
      </Card>

    </div>
  );
}
