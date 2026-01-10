// "use client";

// import { useState, useEffect, useRef } from "react";
// import { predictRisk } from "../../lib/api";
// import Card from "../../components/Card";
// import Input from "../../components/Input";
// import Select from "../../components/Select";
// import {
//   Activity,
//   User,
//   Stethoscope,
//   Bike,
//   Cigarette,
//   Wine,
//   Loader2,
//   ArrowRight,
//   AlertCircle,
// } from "lucide-react";

// import { PredictionResult } from "../result/ResultClient";
// import { PredictionResponse } from "../../lib/predictionSchema";

// type NumOrEmpty = number | "";

// type PredictionResultProps = {
//   result: PredictionResponse;
//   inputData: Record<string, any>;
//   onReset?: () => void;
// };

// export default function PredictPage() {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [result, setResult] = useState<any | null>(null);
//   const resultRef = useRef<HTMLDivElement>(null);

//   const [form, setForm] = useState<{
//     age: NumOrEmpty;
//     gender: number;
//     height: NumOrEmpty;
//     weight: NumOrEmpty;
//     ap_hi: NumOrEmpty;
//     ap_lo: NumOrEmpty;
//     cholesterol: number;
//     gluc: number;
//     smoke: number;
//     alco: number;
//     active: number;
//     bmi: NumOrEmpty;
//   }>({
//     age: "",
//     gender: 1,
//     height: "",
//     weight: "",
//     ap_hi: "",
//     ap_lo: "",
//     cholesterol: 1,
//     gluc: 1,
//     smoke: 0,
//     alco: 0,
//     active: 0,
//     bmi: "",
//   });

//   /* ---------------- BMI AUTO CALC ---------------- */
//   useEffect(() => {
//     if (form.height && form.weight) {
//       const h = Number(form.height) / 100;
//       const bmi = Number(form.weight) / (h * h);
//       setForm((p) => ({ ...p, bmi: Number(bmi.toFixed(1)) }));
//     } else {
//       setForm((p) => ({ ...p, bmi: "" }));
//     }
//   }, [form.height, form.weight]);

//   const update = (k: string, v: NumOrEmpty | number) =>
//     setForm((p) => ({ ...p, [k]: v }));

//   /* ---------------- SUBMIT ---------------- */
//   const submit = async () => {
//     setError(null);
//     setLoading(true);
//     setResult(null);

//     try {
//       await new Promise((r) => setTimeout(r, 1200)); // UX delay

//       const res = await predictRisk({
//         ...form,
//         age: Number(form.age),
//         height: Number(form.height),
//         weight: Number(form.weight),
//         ap_hi: Number(form.ap_hi),
//         ap_lo: Number(form.ap_lo),
//         bmi: Number(form.bmi),
//       });

//       setResult(res);

//       setTimeout(() => {
//         resultRef.current?.scrollIntoView({ behavior: "smooth" });
//       }, 200);
//     } catch (e) {
//       setError("Prediction failed. Please verify all inputs.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">
//       {/* ---------------- FORM SECTION ---------------- */}
//       {!result && (
//         <>
//           <section className="space-y-6">
//             <h1 className="text-4xl font-bold text-slate-900">
//               Cardiovascular Risk Assessment
//             </h1>
//             <p className="text-slate-600 max-w-2xl">
//               Enter standard clinical parameters. The Gradient Boosting model
//               analyzes these indicators to estimate cardiovascular risk.
//             </p>
//           </section>

//           {/* Patient Profile */}
//           <Card>
//             <SectionHeader icon={<User />} title="Patient Profile" />
//             <div className="grid md:grid-cols-2 gap-6 py-6">
//               <Input
//                 label="Age"
//                 type="number"
//                 placeholder="Enter Age"
//                 value={form.age}
//                 onChange={(e) =>
//                   update("age", e.target.value === "" ? "" : +e.target.value)
//                 }
//               />
//               <Select
//                 label="Gender"
//                 value={form.gender}
//                 onChange={(e) => update("gender", +e.target.value)}
//                 options={[
//                   { value: 1, label: "Male" },
//                   { value: 0, label: "Female" },
//                 ]}
//               />
//               <Input
//                 label="Height (cm)"
//                 type="number"
//                 placeholder="Enter Height "
//                 value={form.height}
//                 onChange={(e) =>
//                   update("height", e.target.value === "" ? "" : +e.target.value)
//                 }
//               />
//               <Input
//                 label="Weight (kg)"
//                 type="number"
//                 placeholder="Enter Weight"
//                 value={form.weight}
//                 onChange={(e) =>
//                   update("weight", e.target.value === "" ? "" : +e.target.value)
//                 }
//               />
//             </div>
//           </Card>

//           {/* Clinical */}
//           <Card>
//             <SectionHeader icon={<Stethoscope />} title="Clinical Vitals" />
//             <div className="grid md:grid-cols-2 gap-6 py-6">
//               <Input
//                 label="Systolic BP (High BP)"
//                 type="number"
//                 placeholder="Enter BP (High)"
//                 value={form.ap_hi}
//                 onChange={(e) =>
//                   update("ap_hi", e.target.value === "" ? "" : +e.target.value)
//                 }
//               />
//               <Input
//                 label="Diastolic BP (Low BP)"
//                 placeholder="Enter BP (Low)"
//                 type="number"
//                 value={form.ap_lo}
//                 onChange={(e) =>
//                   update("ap_lo", e.target.value === "" ? "" : +e.target.value)
//                 }
//               />
//               <Select
//                 label="Cholesterol"
//                 value={form.cholesterol}
//                 onChange={(e) => update("cholesterol", +e.target.value)}
//                 options={[
//                   { value: 1, label: "Normal" },
//                   { value: 2, label: "Above Normal" },
//                   { value: 3, label: "Well Above Normal" },
//                 ]}
//               />
//               <Select
//                 label="Glucose"
//                 value={form.gluc}
//                 onChange={(e) => update("gluc", +e.target.value)}
//                 options={[
//                   { value: 1, label: "Normal" },
//                   { value: 2, label: "Above Normal" },
//                   { value: 3, label: "Well Above Normal" },
//                 ]}
//               />
//             </div>
//           </Card>

//           {/* Lifestyle */}
//           <Card className="">
//             <SectionHeader icon={<Bike />} title="Lifestyle Factors" />
//             <div className="py-6">
//               <Toggle
//                 label="Smoker"
//                 active={form.smoke === 1}
//                 onClick={() => update("smoke", form.smoke ? 0 : 1)}
//                 icon={<Cigarette />}
//               />
//               <Toggle
//                 label="Alcohol Consumption"
//                 active={form.alco === 1}
//                 onClick={() => update("alco", form.alco ? 0 : 1)}
//                 icon={<Wine />}
//               />
//               <Toggle
//                 label="Physically Active"
//                 active={form.active === 1}
//                 onClick={() => update("active", form.active ? 0 : 1)}
//                 icon={<Activity />}
//               />
//             </div>
//           </Card>

//           <div className="">
//             <button
//               onClick={submit}
//               disabled={loading}
//               className="w-full flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl"
//             >
//               {loading ? (
//                 <>
//                   <Loader2 className="animate-spin" />
//                   Analyzing…
//                 </>
//               ) : (
//                 <>
//                   Run Prediction
//                   <ArrowRight />
//                 </>
//               )}
//             </button>

//             {error && (
//               <div className="mt-4 flex items-center gap-2 text-rose-600 text-sm">
//                 <AlertCircle size={16} /> {error}
//               </div>
//             )}
//           </div>
//         </>
//       )}

//       {/* ---------------- RESULT SECTION ---------------- */}
//       {result && (
//         <div ref={resultRef} className="pt-12">
//           <PredictionResult
//             result={result}
//             onReset={() => {
//               setResult(null);
//               window.scrollTo({ top: 0, behavior: "smooth" });
//             }}
//           />
//         </div>
//       )}
//     </div>
//   );
// }

// /* ---------------- HELPERS ---------------- */

// function SectionHeader({ icon, title }: any) {
//   return (
//     <div className="flex items-center gap-4">
//       <div className="p-3 bg-slate-900 text-white rounded-xl">{icon}</div>
//       <h2 className="text-2xl font-bold">{title}</h2>
//     </div>
//   );
// }

// function Toggle({ label, active, onClick, icon }: any) {
//   return (
//     <div
//       onClick={onClick}
//       className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer
//         ${
//           active ? "bg-slate-100 border-slate-300" : "bg-white border-slate-200"
//         }`}
//     >
//       <div className="flex items-center gap-4">
//         <div
//           className={`p-3 rounded-lg ${
//             active ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-500"
//           }`}
//         >
//           {icon}
//         </div>
//         <span className="font-semibold">{label}</span>
//       </div>
//       <div
//         className={`w-5 h-5 rounded-full ${
//           active ? "bg-indigo-600" : "bg-slate-300"
//         }`}
//       />
//     </div>
//   );
// }
// "use client";

// import { useState, useEffect, useRef } from "react";
// import { predictRisk } from "../../lib/api";
// import Card from "../../components/Card";
// import Input from "../../components/Input";
// import Select from "../../components/Select";
// import {
//   Activity,
//   User,
//   Stethoscope,
//   Bike,
//   Cigarette,
//   Wine,
//   Loader2,
//   ArrowRight,
//   AlertCircle,
// } from "lucide-react";

// import { PredictionResult } from "../result/ResultClient";
// import { PredictionResponse } from "../../lib/predictionSchema";

// type NumOrEmpty = number | "";

// export default function PredictPage() {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [result, setResult] = useState<PredictionResponse | null>(null);
//   const resultRef = useRef<HTMLDivElement>(null);

//   const [form, setForm] = useState<{
//     age: NumOrEmpty;
//     gender: number;
//     height: NumOrEmpty;
//     weight: NumOrEmpty;
//     ap_hi: NumOrEmpty;
//     ap_lo: NumOrEmpty;
//     cholesterol: number;
//     gluc: number;
//     smoke: number;
//     alco: number;
//     active: number;
//     bmi: NumOrEmpty;
//   }>({
//     age: "",
//     gender: 1,
//     height: "",
//     weight: "",
//     ap_hi: "",
//     ap_lo: "",
//     cholesterol: 1,
//     gluc: 1,
//     smoke: 0,
//     alco: 0,
//     active: 0,
//     bmi: "",
//   });

//   /* ---------------- BMI AUTO CALC ---------------- */
//   useEffect(() => {
//     if (form.height && form.weight) {
//       const h = Number(form.height) / 100;
//       const bmi = Number(form.weight) / (h * h);
//       setForm((p) => ({ ...p, bmi: Number(bmi.toFixed(1)) }));
//     } else {
//       setForm((p) => ({ ...p, bmi: "" }));
//     }
//   }, [form.height, form.weight]);

//   const update = (k: string, v: NumOrEmpty | number) =>
//     setForm((p) => ({ ...p, [k]: v }));

//   /* ---------------- SUBMIT ---------------- */
//   const submit = async () => {
//     setError(null);
//     setLoading(true);
//     setResult(null);

//     try {
//       await new Promise((r) => setTimeout(r, 1200)); // UX delay

//       const res = await predictRisk({
//         ...form,
//         age: Number(form.age),
//         height: Number(form.height),
//         weight: Number(form.weight),
//         ap_hi: Number(form.ap_hi),
//         ap_lo: Number(form.ap_lo),
//         bmi: Number(form.bmi),
//       });

//       setResult(res);

//       setTimeout(() => {
//         resultRef.current?.scrollIntoView({ behavior: "smooth" });
//       }, 200);
//     } catch (e) {
//       setError("Prediction failed. Please verify all inputs.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">
//       {/* ---------------- FORM SECTION ---------------- */}
//       {!result && (
//         <>
//           <section className="space-y-6">
//             <h1 className="text-4xl font-bold text-slate-900">
//               Cardiovascular Risk Assessment
//             </h1>
//             <p className="text-slate-600 max-w-2xl">
//               Enter standard clinical parameters. The Gradient Boosting model
//               analyzes these indicators to estimate cardiovascular risk.
//             </p>
//           </section>

//           {/* Patient Profile */}
//           <Card>
//             <SectionHeader icon={<User />} title="Patient Profile" />
//             <div className="grid md:grid-cols-2 gap-6 py-6">
//               <Input
//                 label="Age"
//                 type="number"
//                 placeholder="Enter Age"
//                 value={form.age}
//                 onChange={(e) =>
//                   update("age", e.target.value === "" ? "" : +e.target.value)
//                 }
//               />
//               <Select
//                 label="Gender"
//                 value={form.gender}
//                 onChange={(e) => update("gender", +e.target.value)}
//                 options={[
//                   { value: 1, label: "Male" },
//                   { value: 0, label: "Female" },
//                 ]}
//               />
//               <Input
//                 label="Height (cm)"
//                 type="number"
//                 placeholder="Enter Height"
//                 value={form.height}
//                 onChange={(e) =>
//                   update("height", e.target.value === "" ? "" : +e.target.value)
//                 }
//               />
//               <Input
//                 label="Weight (kg)"
//                 type="number"
//                 placeholder="Enter Weight"
//                 value={form.weight}
//                 onChange={(e) =>
//                   update("weight", e.target.value === "" ? "" : +e.target.value)
//                 }
//               />
//               <Input
//                 label="BMI (Auto-calculated)"
//                 type="number"
//                 value={form.bmi}
//                 readOnly
//               />
//             </div>
//           </Card>

//           {/* Clinical */}
//           <Card>
//             <SectionHeader icon={<Stethoscope />} title="Clinical Vitals" />
//             <div className="grid md:grid-cols-2 gap-6 py-6">
//               <Input
//                 label="Systolic BP"
//                 type="number"
//                 value={form.ap_hi}
//                 onChange={(e) =>
//                   update("ap_hi", e.target.value === "" ? "" : +e.target.value)
//                 }
//               />
//               <Input
//                 label="Diastolic BP"
//                 type="number"
//                 value={form.ap_lo}
//                 onChange={(e) =>
//                   update("ap_lo", e.target.value === "" ? "" : +e.target.value)
//                 }
//               />
//               <Select
//                 label="Cholesterol"
//                 value={form.cholesterol}
//                 onChange={(e) => update("cholesterol", +e.target.value)}
//                 options={[
//                   { value: 1, label: "Normal" },
//                   { value: 2, label: "Above Normal" },
//                   { value: 3, label: "Well Above Normal" },
//                 ]}
//               />
//               <Select
//                 label="Glucose"
//                 value={form.gluc}
//                 onChange={(e) => update("gluc", +e.target.value)}
//                 options={[
//                   { value: 1, label: "Normal" },
//                   { value: 2, label: "Above Normal" },
//                   { value: 3, label: "Well Above Normal" },
//                 ]}
//               />
//             </div>
//           </Card>

//           {/* Lifestyle */}
//           <Card>
//             <SectionHeader icon={<Bike />} title="Lifestyle Factors" />
//             <div className="py-6">
//               <Toggle
//                 label="Smoker"
//                 active={form.smoke === 1}
//                 onClick={() => update("smoke", form.smoke ? 0 : 1)}
//                 icon={<Cigarette />}
//               />
//               <Toggle
//                 label="Alcohol Consumption"
//                 active={form.alco === 1}
//                 onClick={() => update("alco", form.alco ? 0 : 1)}
//                 icon={<Wine />}
//               />
//               <Toggle
//                 label="Physically Active"
//                 active={form.active === 1}
//                 onClick={() => update("active", form.active ? 0 : 1)}
//                 icon={<Activity />}
//               />
//             </div>
//           </Card>

//           <button
//             onClick={submit}
//             disabled={loading}
//             className="w-full flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl"
//           >
//             {loading ? (
//               <>
//                 <Loader2 className="animate-spin" />
//                 Analyzing…
//               </>
//             ) : (
//               <>
//                 Run Prediction
//                 <ArrowRight />
//               </>
//             )}
//           </button>

//           {error && (
//             <div className="mt-4 flex items-center gap-2 text-rose-600 text-sm">
//               <AlertCircle size={16} /> {error}
//             </div>
//           )}
//         </>
//       )}

//       {/* ---------------- RESULT SECTION ---------------- */}
//       {result && (
//         <div ref={resultRef} className="pt-12">
//           <PredictionResult
//             result={result}
//             inputData={{
//               Age: Number(form.age),
//               Gender: form.gender === 1 ? "Male" : "Female",
//               Height: `${form.height} cm`,
//               Weight: `${form.weight} kg`,
//               BMI: form.bmi,
//               "Systolic BP": `${form.ap_hi} mmHg`,
//               "Diastolic BP": `${form.ap_lo} mmHg`,
//               Cholesterol:
//                 form.cholesterol === 1
//                   ? "Normal"
//                   : form.cholesterol === 2
//                   ? "Above Normal"
//                   : "Well Above Normal",
//               Glucose:
//                 form.gluc === 1
//                   ? "Normal"
//                   : form.gluc === 2
//                   ? "Above Normal"
//                   : "Well Above Normal",
//               Smoker: form.smoke ? "Yes" : "No",
//               Alcohol: form.alco ? "Yes" : "No",
//               "Physically Active": form.active ? "Yes" : "No",
//             }}
//             onReset={() => {
//               setResult(null);
//               window.scrollTo({ top: 0, behavior: "smooth" });
//             }}
//           />
//         </div>
//       )}
//     </div>
//   );
// }

// /* ---------------- HELPERS ---------------- */

// function SectionHeader({ icon, title }: any) {
//   return (
//     <div className="flex items-center gap-4">
//       <div className="p-3 bg-slate-900 text-white rounded-xl">{icon}</div>
//       <h2 className="text-2xl font-bold">{title}</h2>
//     </div>
//   );
// }

// function Toggle({ label, active, onClick, icon }: any) {
//   return (
//     <div
//       onClick={onClick}
//       className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer ${
//         active ? "bg-slate-100 border-slate-300" : "bg-white border-slate-200"
//       }`}
//     >
//       <div className="flex items-center gap-4">
//         <div
//           className={`p-3 rounded-lg ${
//             active ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-500"
//           }`}
//         >
//           {icon}
//         </div>
//         <span className="font-semibold">{label}</span>
//       </div>
//       <div
//         className={`w-5 h-5 rounded-full ${
//           active ? "bg-indigo-600" : "bg-slate-300"
//         }`}
//       />
//     </div>
//   );
// }

"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { predictRisk } from "../../lib/api";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Select from "../../components/Select";
import {
  Activity,
  User,
  Stethoscope,
  Bike,
  Cigarette,
  Wine,
  Loader2,
  ArrowRight,
  AlertCircle,
} from "lucide-react";

import { PredictionResult } from "../result/ResultClient";
import { PredictionResponse } from "../../lib/predictionSchema";

type NumOrEmpty = number | "";

interface SectionHeaderProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
}

interface ToggleProps {
  label: string;
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
}

export default function PredictPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<PredictionResponse | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState<{
    age: NumOrEmpty;
    gender: number;
    height: NumOrEmpty;
    weight: NumOrEmpty;
    ap_hi: NumOrEmpty;
    ap_lo: NumOrEmpty;
    cholesterol: number;
    gluc: number;
    smoke: number;
    alco: number;
    active: number;
    bmi: NumOrEmpty;
  }>({
    age: "",
    gender: 1,
    height: "",
    weight: "",
    ap_hi: "",
    ap_lo: "",
    cholesterol: 1,
    gluc: 1,
    smoke: 0,
    alco: 0,
    active: 0,
    bmi: "",
  });

  /* ---------------- BMI AUTO CALC ---------------- */
  useEffect(() => {
    if (form.height && form.weight) {
      const h = Number(form.height) / 100;
      const bmi = Number(form.weight) / (h * h);
      setForm((p) => ({ ...p, bmi: Number(bmi.toFixed(1)) }));
    } else {
      setForm((p) => ({ ...p, bmi: "" }));
    }
  }, [form.height, form.weight]);

  const update = (k: string, v: NumOrEmpty | number) =>
    setForm((p) => ({ ...p, [k]: v }));

  /* ---------------- SUBMIT ---------------- */
  const submit = async () => {
    setError(null);
    setLoading(true);
    setResult(null);

    try {
      await new Promise((r) => setTimeout(r, 1200)); // UX delay

      const res = await predictRisk({
        ...form,
        age: Number(form.age),
        height: Number(form.height),
        weight: Number(form.weight),
        ap_hi: Number(form.ap_hi),
        ap_lo: Number(form.ap_lo),
        bmi: Number(form.bmi),
      });

      setResult(res);

      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } catch (e) {
      setError("Prediction failed. Please verify all inputs.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        {/* ---------------- FORM SECTION ---------------- */}
        {!result && (
          <>
            <section className="space-y-4 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
                <Activity size={16} />
                AI-Powered Health Assessment
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 bg-clip-text text-transparent">
                Cardiovascular Risk Assessment
              </h1>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Enter clinical parameters below. Our advanced Gradient Boosting
                model analyzes these indicators to provide an accurate
                cardiovascular risk estimate.
              </p>
            </section>

            {/* Patient Profile */}
            <Card>
              <SectionHeader
                icon={<User />}
                title="Patient Profile"
                subtitle="Basic demographic information"
              />
              <div className="grid md:grid-cols-2 gap-5 py-6">
                <Input
                  label="Age"
                  type="number"
                  placeholder="e.g., 45"
                  value={form.age}
                  onChange={(e) =>
                    update("age", e.target.value === "" ? "" : +e.target.value)
                  }
                />
                <Select
                  label="Gender"
                  value={form.gender}
                  onChange={(e) => update("gender", +e.target.value)}
                  options={[
                    { value: 1, label: "Male" },
                    { value: 0, label: "Female" },
                  ]}
                />
                <Input
                  label="Height (cm)"
                  type="number"
                  placeholder="e.g., 170"
                  value={form.height}
                  onChange={(e) =>
                    update(
                      "height",
                      e.target.value === "" ? "" : +e.target.value
                    )
                  }
                />
                <Input
                  label="Weight (kg)"
                  type="number"
                  placeholder="e.g., 70"
                  value={form.weight}
                  onChange={(e) =>
                    update(
                      "weight",
                      e.target.value === "" ? "" : +e.target.value
                    )
                  }
                />
                <div className="md:col-span-2">
                  <Input
                    label="BMI (Auto-calculated)"
                    type="number"
                    value={form.bmi}
                    readOnly
                  />
                  {form.bmi && (
                    <p className="text-xs text-slate-500 mt-1.5 ml-1">
                      {form.bmi < 18.5 && "Underweight"}
                      {form.bmi >= 18.5 && form.bmi < 25 && "Normal weight"}
                      {form.bmi >= 25 && form.bmi < 30 && "Overweight"}
                      {form.bmi >= 30 && "Obese"}
                    </p>
                  )}
                </div>
              </div>
            </Card>

            {/* Clinical */}
            <Card>
              <SectionHeader
                icon={<Stethoscope />}
                title="Clinical Vitals"
                subtitle="Blood pressure and lab results"
              />
              <div className="grid md:grid-cols-2 gap-5 py-6">
                <Input
                  label="Systolic BP (mmHg)"
                  type="number"
                  placeholder="e.g., 120"
                  value={form.ap_hi}
                  onChange={(e) =>
                    update(
                      "ap_hi",
                      e.target.value === "" ? "" : +e.target.value
                    )
                  }
                />
                <Input
                  label="Diastolic BP (mmHg)"
                  type="number"
                  placeholder="e.g., 80"
                  value={form.ap_lo}
                  onChange={(e) =>
                    update(
                      "ap_lo",
                      e.target.value === "" ? "" : +e.target.value
                    )
                  }
                />
                <Select
                  label="Cholesterol Level"
                  value={form.cholesterol}
                  onChange={(e) => update("cholesterol", +e.target.value)}
                  options={[
                    { value: 1, label: "Normal" },
                    { value: 2, label: "Above Normal" },
                    { value: 3, label: "Well Above Normal" },
                  ]}
                />
                <Select
                  label="Glucose Level"
                  value={form.gluc}
                  onChange={(e) => update("gluc", +e.target.value)}
                  options={[
                    { value: 1, label: "Normal" },
                    { value: 2, label: "Above Normal" },
                    { value: 3, label: "Well Above Normal" },
                  ]}
                />
              </div>
            </Card>

            {/* Lifestyle */}
            <Card>
              <SectionHeader
                icon={<Bike />}
                title="Lifestyle Factors"
                subtitle="Daily habits and activities"
              />
              <div className="py-6 space-y-3">
                <Toggle
                  label="Smoker"
                  active={form.smoke === 1}
                  onClick={() => update("smoke", form.smoke ? 0 : 1)}
                  icon={<Cigarette />}
                />
                <Toggle
                  label="Alcohol Consumption"
                  active={form.alco === 1}
                  onClick={() => update("alco", form.alco ? 0 : 1)}
                  icon={<Wine />}
                />
                <Toggle
                  label="Physically Active"
                  active={form.active === 1}
                  onClick={() => update("active", form.active ? 0 : 1)}
                  icon={<Activity />}
                />
              </div>
            </Card>

            <button
              onClick={submit}
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold py-5 rounded-2xl shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Analyzing Risk Profile…
                </>
              ) : (
                <>
                  Run Prediction
                  <ArrowRight size={20} />
                </>
              )}
            </button>

            {error && (
              <div className="flex items-center gap-3 p-4 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl">
                <AlertCircle size={20} className="flex-shrink-0" />
                <span className="font-medium">{error}</span>
              </div>
            )}
          </>
        )}

        {/* ---------------- RESULT SECTION ---------------- */}
        {result && (
          <div ref={resultRef}>
            <PredictionResult
              result={result}
              inputData={{
                Age: Number(form.age),
                Gender: form.gender === 1 ? "Male" : "Female",
                Height: `${form.height} cm`,
                Weight: `${form.weight} kg`,
                BMI: form.bmi,
                "Systolic BP": `${form.ap_hi} mmHg`,
                "Diastolic BP": `${form.ap_lo} mmHg`,
                Cholesterol:
                  form.cholesterol === 1
                    ? "Normal"
                    : form.cholesterol === 2
                    ? "Above Normal"
                    : "Well Above Normal",
                Glucose:
                  form.gluc === 1
                    ? "Normal"
                    : form.gluc === 2
                    ? "Above Normal"
                    : "Well Above Normal",
                Smoker: form.smoke ? "Yes" : "No",
                Alcohol: form.alco ? "Yes" : "No",
                "Physically Active": form.active ? "Yes" : "No",
              }}
              onReset={() => {
                setResult(null);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------------- HELPER COMPONENTS ---------------- */

function SectionHeader({ icon, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3">
        <div className="p-2.5 bg-gradient-to-br from-slate-900 to-slate-700 text-white rounded-xl shadow-sm">
          {icon}
        </div>
        <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
      </div>
      {subtitle && <p className="text-sm text-slate-500 ml-12">{subtitle}</p>}
    </div>
  );
}

function Toggle({ label, active, onClick, icon }: ToggleProps) {
  return (
    <div
      onClick={onClick}
      className={`group flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
        active
          ? "bg-gradient-to-r from-indigo-50 to-blue-50 border-indigo-300 shadow-sm"
          : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm"
      }`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`p-2.5 rounded-lg transition-all duration-200 ${
            active
              ? "bg-gradient-to-br from-indigo-600 to-blue-600 text-white shadow-md"
              : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
          }`}
        >
          {icon}
        </div>
        <span
          className={`font-semibold ${
            active ? "text-slate-900" : "text-slate-700"
          }`}
        >
          {label}
        </span>
      </div>
      <div
        className={`w-12 h-6 rounded-full transition-all duration-200 relative ${
          active ? "bg-indigo-600" : "bg-slate-300"
        }`}
      >
        <div
          className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-all duration-200 ${
            active ? "right-0.5" : "left-0.5"
          }`}
        />
      </div>
    </div>
  );
}
