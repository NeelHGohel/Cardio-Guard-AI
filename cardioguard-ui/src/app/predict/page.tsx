"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { predictRisk } from "@/lib/api";
import Card from "@/components/Card";
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
      const result = await predictRisk(form);
      // Pass result via URL params instead of localStorage
      const resultData = encodeURIComponent(JSON.stringify(result));
      router.push(`/result?data=${resultData}`);
    } catch {
      setError("Unable to generate prediction. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-[#FEF2F2] rounded-lg">
            <Activity className="text-[#EF4444]" size={28} />
          </div>
          <h2 className="text-3xl font-bold text-[#111827]">
            Cardiovascular Risk Assessment
          </h2>
        </div>
        <p className="text-[#6B7280]">
          Enter your health details based on recent medical reports. All fields
          are required for accurate prediction.
        </p>
      </div>

      {/* Info Banner */}
      <div className="p-4 rounded-lg bg-[#F0F9FF] border border-[#BAE6FD]">
        <div className="flex items-start gap-3">
          <AlertCircle
            className="text-[#38BDF8] flex-shrink-0 mt-0.5"
            size={20}
          />
          <p className="text-sm text-[#0C4A6E]">
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
            <div className="p-2 bg-[#EEF2FF] rounded-lg">
              <User className="text-[#4F46E5]" size={24} />
            </div>
            <h3 className="text-xl font-bold text-[#111827]">
              Basic Information
            </h3>
          </div>

          <div className="space-y-4">
            <InputField
              label="Age"
              icon={<User size={18} className="text-[#6B7280]" />}
              value={form.age}
              onChange={(v: any) => update("age", v)}
              unit="years"
              min={1}
              max={120}
            />

            <SelectField
              label="Gender"
              icon={<User size={18} className="text-[#6B7280]" />}
              value={form.gender}
              onChange={(v: any) => update("gender", v)}
            >
              <option value={1}>Male</option>
              <option value={0}>Female</option>
            </SelectField>

            <InputField
              label="Height"
              icon={<Ruler size={18} className="text-[#6B7280]" />}
              value={form.height}
              onChange={(v: any) => update("height", v)}
              unit="cm"
              min={50}
              max={250}
            />

            <InputField
              label="Weight"
              icon={<Weight size={18} className="text-[#6B7280]" />}
              value={form.weight}
              onChange={(v: any) => update("weight", v)}
              unit="kg"
              min={20}
              max={300}
            />

            <div className="p-4 rounded-lg bg-[#ECFDF5] border border-[#A7F3D0]">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Calculator size={18} className="text-[#22C55E]" />
                  <label className="text-sm font-semibold text-[#111827]">
                    BMI (Body Mass Index)
                  </label>
                </div>
                <span className="text-2xl font-bold text-[#22C55E]">
                  {form.bmi}
                </span>
              </div>
              <p className="text-xs text-[#6B7280]">
                Automatically calculated from height and weight
              </p>
            </div>
          </div>
        </Card>

        {/* Clinical Measurements */}
        <Card>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-[#FEF2F2] rounded-lg">
              <Heart className="text-[#EF4444]" size={24} />
            </div>
            <h3 className="text-xl font-bold text-[#111827]">
              Clinical Measurements
            </h3>
          </div>

          <div className="space-y-4">
            <InputField
              label="Systolic Blood Pressure"
              icon={<Activity size={18} className="text-[#6B7280]" />}
              value={form.ap_hi}
              onChange={(v: any) => update("ap_hi", v)}
              unit="mmHg"
              min={70}
              max={250}
              hint="Upper reading"
            />

            <InputField
              label="Diastolic Blood Pressure"
              icon={<Activity size={18} className="text-[#6B7280]" />}
              value={form.ap_lo}
              onChange={(v: any) => update("ap_lo", v)}
              unit="mmHg"
              min={40}
              max={150}
              hint="Lower reading"
            />

            <SelectField
              label="Cholesterol Level"
              icon={<Droplets size={18} className="text-[#6B7280]" />}
              value={form.cholesterol}
              onChange={(v: any) => update("cholesterol", v)}
            >
              <option value={1}>Normal</option>
              <option value={2}>Above Normal</option>
              <option value={3}>Well Above Normal</option>
            </SelectField>

            <SelectField
              label="Glucose Level"
              icon={<Droplets size={18} className="text-[#6B7280]" />}
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
          <div className="p-2 bg-[#ECFDF5] rounded-lg">
            <Bike className="text-[#22C55E]" size={24} />
          </div>
          <h3 className="text-xl font-bold text-[#111827]">
            Lifestyle Factors
          </h3>
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
        <div className="p-4 rounded-lg bg-[#FEF2F2] border-2 border-[#EF4444]">
          <div className="flex items-start gap-3">
            <AlertCircle
              className="text-[#EF4444] flex-shrink-0 mt-0.5"
              size={20}
            />
            <div>
              <p className="font-semibold text-[#111827]">Prediction Error</p>
              <p className="text-sm text-[#6B7280] mt-1">{error}</p>
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
                ? "bg-[#9CA3AF] cursor-not-allowed"
                : "bg-[#4F46E5] hover:bg-[#4338CA] shadow-lg hover:shadow-xl hover:scale-105"
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
      <label className="block text-sm font-semibold text-[#111827] mb-2">
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
          className="w-full pl-10 pr-16 py-3 border border-[#E5E7EB] rounded-lg bg-white text-[#111827] font-medium focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent transition-all placeholder:text-[#D1D5DB]"
        />
        {unit && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#9CA3AF] font-medium">
            {unit}
          </span>
        )}
      </div>
      {hint && <p className="text-xs text-[#9CA3AF] mt-1">{hint}</p>}
    </div>
  );
}

function SelectField({ label, icon, value, onChange, children }: any) {
  return (
    <div>
      <label className="block text-sm font-semibold text-[#111827] mb-2">
        {label}
      </label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
          {icon}
        </div>
        <select
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full pl-10 pr-4 py-3 border border-[#E5E7EB] rounded-lg bg-white text-[#111827] font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent transition-all cursor-pointer"
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
            ? "border-[#4F46E5] bg-[#EEF2FF]"
            : "border-[#E5E7EB] bg-white hover:border-[#9CA3AF]"
        }
      `}
    >
      <div className="flex items-start justify-between mb-2">
        <div
          className={`p-2 rounded-lg ${
            isActive ? "bg-[#4F46E5]" : "bg-[#F3F4F6]"
          }`}
        >
          <div className={isActive ? "text-white" : "text-[#6B7280]"}>
            {icon}
          </div>
        </div>
        <div
          className={`
            w-12 h-6 rounded-full relative transition-all duration-200
            ${isActive ? "bg-[#4F46E5]" : "bg-[#E5E7EB]"}
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
          isActive ? "text-[#4F46E5]" : "text-[#111827]"
        }`}
      >
        {label}
      </p>
      <p className="text-xs text-[#6B7280]">{description}</p>
    </div>
  );
}
