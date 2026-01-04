"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { predictRisk } from "./../../lib/api";
import Card from "./../../components/Card";
import {
  Activity,
  User,
  Ruler,
  Weight,
  Heart,
  Droplets,
  Cigarette,
  Wine,
  Bike,
  AlertCircle,
  Loader2,
  ArrowRight,
  Calculator,
} from "lucide-react";

export default function PredictPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    age: 0,
    gender: 1,
    height: 0,
    weight: 0,
    ap_hi: 0,
    ap_lo: 0,
    cholesterol: 1,
    gluc: 1,
    smoke: 0,
    alco: 0,
    active: 0,
    bmi: 0,
  });

  // BMI Auto Calculation
  useEffect(() => {
    if (form.height > 0 && form.weight > 0) {
      const heightM = form.height / 100;
      const bmi = form.weight / (heightM * heightM);
      setForm((prev) => ({ ...prev, bmi: Number(bmi.toFixed(1)) }));
    }
  }, [form.height, form.weight]);

  const update = (key: string, value: number) => {
    setForm({ ...form, [key]: value });
  };

  // Submit Handler
  const submit = async () => {
    setLoading(true);
    setError(null);

    try {
      // 🔴 Ensure BMI is calculated and numeric
      const payload = {
        ...form,
        age: Number(form.age),
        gender: Number(form.gender),
        height: Number(form.height),
        weight: Number(form.weight),
        ap_hi: Number(form.ap_hi),
        ap_lo: Number(form.ap_lo),
        cholesterol: Number(form.cholesterol),
        gluc: Number(form.gluc),
        smoke: Number(form.smoke),
        alco: Number(form.alco),
        active: Number(form.active),
        bmi: Number(form.bmi), // ✅ THIS IS THE KEY LINE
      };

      console.log("Sending payload:", payload); // ✅ debug once

      const result = await predictRisk(payload);

      const resultData = encodeURIComponent(JSON.stringify(result));
      localStorage.setItem("prediction", JSON.stringify(result));
      router.push(`/result?data=${resultData}`);
    } catch (err) {
      console.error(err);
      setError("Unable to generate prediction. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-red-50 rounded-lg">
            <Activity className="text-red-500" size={28} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            Cardiovascular Risk Assessment
          </h2>
        </div>
        <p className="text-gray-600">
          Enter your health details based on recent medical reports. All fields
          are required for accurate prediction.
        </p>
      </div>

      {/* Info Banner */}
      <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
        <div className="flex items-start gap-3">
          <AlertCircle
            className="text-blue-400 flex-shrink-0 mt-0.5"
            size={20}
          />
          <p className="text-sm text-blue-900">
            <span className="font-semibold">Important:</span> Please ensure all
            measurements are accurate and from recent medical examinations.
            Inaccurate data may lead to incorrect predictions.
          </p>
        </div>
      </div>

      {/* Form Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Basic Information */}
        <Card>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-indigo-50 rounded-lg">
              <User className="text-indigo-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">
              Basic Information
            </h3>
          </div>

          <div className="space-y-4">
            <InputField
              label="Age"
              icon={<User size={18} className="text-gray-600" />}
              value={form.age}
              onChange={(v: any) => update("age", v)}
              unit="years"
              min={1}
              max={120}
            />

            <SelectField
              label="Gender"
              icon={<User size={18} className="text-gray-600" />}
              value={form.gender}
              onChange={(v: any) => update("gender", v)}
            >
              <option value={1}>Male</option>
              <option value={0}>Female</option>
            </SelectField>

            <InputField
              label="Height"
              icon={<Ruler size={18} className="text-gray-600" />}
              value={form.height}
              onChange={(v: any) => update("height", v)}
              unit="cm"
              min={50}
              max={250}
            />

            <InputField
              label="Weight"
              icon={<Weight size={18} className="text-gray-600" />}
              value={form.weight}
              onChange={(v: any) => update("weight", v)}
              unit="kg"
              min={20}
              max={300}
            />

            <div className="p-4 rounded-lg bg-green-50 border border-green-200">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Calculator size={18} className="text-green-600" />
                  <label className="text-sm font-semibold text-gray-900">
                    BMI (Body Mass Index)
                  </label>
                </div>
                <span className="text-2xl font-bold text-green-600">
                  {form.bmi}
                </span>
              </div>
              <p className="text-xs text-gray-600">
                Automatically calculated from height and weight
              </p>
            </div>
          </div>
        </Card>

        {/* Clinical Measurements */}
        <Card>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-red-50 rounded-lg">
              <Heart className="text-red-500" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">
              Clinical Measurements
            </h3>
          </div>

          <div className="space-y-4">
            <InputField
              label="Systolic Blood Pressure"
              icon={<Activity size={18} className="text-gray-600" />}
              value={form.ap_hi}
              onChange={(v: any) => update("ap_hi", v)}
              unit="mmHg"
              min={70}
              max={250}
              hint="Upper reading"
            />

            <InputField
              label="Diastolic Blood Pressure"
              icon={<Activity size={18} className="text-gray-600" />}
              value={form.ap_lo}
              onChange={(v: any) => update("ap_lo", v)}
              unit="mmHg"
              min={40}
              max={150}
              hint="Lower reading"
            />

            <SelectField
              label="Cholesterol Level"
              icon={<Droplets size={18} className="text-gray-600" />}
              value={form.cholesterol}
              onChange={(v: any) => update("cholesterol", v)}
            >
              <option value={1}>Normal</option>
              <option value={2}>Above Normal</option>
              <option value={3}>Well Above Normal</option>
            </SelectField>

            <SelectField
              label="Glucose Level"
              icon={<Droplets size={18} className="text-gray-600" />}
              value={form.gluc}
              onChange={(v: any) => update("gluc", v)}
            >
              <option value={1}>Normal</option>
              <option value={2}>Above Normal</option>
              <option value={3}>Well Above Normal</option>
            </SelectField>
          </div>
        </Card>
      </div>

      {/* Lifestyle Factors */}
      <Card>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-green-50 rounded-lg">
            <Bike className="text-green-600" size={24} />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Lifestyle Factors</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ToggleField
            label="Smoking"
            icon={<Cigarette size={20} />}
            description="Do you smoke cigarettes?"
            value={form.smoke}
            onChange={(v: any) => update("smoke", v)}
          />

          <ToggleField
            label="Alcohol Consumption"
            icon={<Wine size={20} />}
            description="Regular alcohol intake?"
            value={form.alco}
            onChange={(v: any) => update("alco", v)}
          />

          <ToggleField
            label="Physical Activity"
            icon={<Bike size={20} />}
            description="Regular exercise routine?"
            value={form.active}
            onChange={(v: any) => update("active", v)}
          />
        </div>
      </Card>

      {/* Error Message */}
      {error && (
        <div className="p-4 rounded-lg bg-red-50 border-2 border-red-500">
          <div className="flex items-start gap-3">
            <AlertCircle
              className="text-red-500 flex-shrink-0 mt-0.5"
              size={20}
            />
            <div>
              <p className="font-semibold text-gray-900">Prediction Error</p>
              <p className="text-sm text-gray-600 mt-1">{error}</p>
            </div>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          onClick={submit}
          disabled={loading}
          className={`
            flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg text-white transition-all duration-200
            ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 shadow-lg hover:shadow-xl hover:scale-105"
            }
          `}
        >
          {loading ? (
            <>
              <Loader2 size={24} className="animate-spin" />
              Generating Prediction...
            </>
          ) : (
            <>
              <Heart size={24} />
              Predict Cardiovascular Risk
              <ArrowRight size={24} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}

/* ============ REUSABLE FORM COMPONENTS ============ */

function InputField({
  label,
  icon,
  value,
  onChange,
  unit,
  min,
  max,
  hint,
}: any) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-900 mb-2">
        {label}
      </label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2">{icon}</div>
        <input
          type="number"
          min={min}
          max={max}
          value={value === 0 ? "" : value}
          onChange={(e) =>
            onChange(e.target.value === "" ? 0 : Number(e.target.value))
          }
          placeholder="Enter value"
          className="w-full pl-10 pr-16 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all placeholder:text-gray-300"
        />
        {unit && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium">
            {unit}
          </span>
        )}
      </div>
      {hint && <p className="text-xs text-gray-400 mt-1">{hint}</p>}
    </div>
  );
}

function SelectField({ label, icon, value, onChange, children }: any) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-900 mb-2">
        {label}
      </label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
          {icon}
        </div>
        <select
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all cursor-pointer"
        >
          {children}
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg
            width="12"
            height="8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.5l5 5 5-5"
              stroke="#9CA3AF"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ToggleField({ label, icon, description, value, onChange }: any) {
  const isActive = value === 1;

  return (
    <div
      onClick={() => onChange(isActive ? 0 : 1)}
      className={`
        p-4 rounded-lg border-2 cursor-pointer transition-all duration-200
        ${
          isActive
            ? "border-indigo-600 bg-indigo-50"
            : "border-gray-200 bg-white hover:border-gray-400"
        }
      `}
    >
      <div className="flex items-start justify-between mb-2">
        <div
          className={`p-2 rounded-lg ${
            isActive ? "bg-indigo-600" : "bg-gray-200"
          }`}
        >
          <div className={isActive ? "text-white" : "text-gray-600"}>
            {icon}
          </div>
        </div>
        <div
          className={`
            w-12 h-6 rounded-full relative transition-all duration-200
            ${isActive ? "bg-indigo-600" : "bg-gray-200"}
          `}
        >
          <div
            className={`
              absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-200
              ${isActive ? "left-7" : "left-1"}
            `}
          />
        </div>
      </div>
      <p
        className={`font-semibold mb-1 ${
          isActive ? "text-indigo-600" : "text-gray-900"
        }`}
      >
        {label}
      </p>
      <p className="text-xs text-gray-600">{description}</p>
    </div>
  );
}
