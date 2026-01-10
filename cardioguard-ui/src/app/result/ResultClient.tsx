// "use client";

// export const dynamic = "force-dynamic";

// import {
//   AlertTriangle,
//   CheckCircle2,
//   Activity,
//   RefreshCw,
//   Info,
// } from "lucide-react";

// import type { PredictionResponse } from "../../lib/predictionSchema";

// type PredictionResultProps = {
//   result: PredictionResponse;
//   onReset?: () => void;
// };

// export function PredictionResult({ result, onReset }: PredictionResultProps) {
//   /* ---------- HARD VALIDATION ---------- */
//   if (typeof result.probability !== "number" || isNaN(result.probability)) {
//     return (
//       <div className="p-8 bg-rose-50 border border-rose-200 rounded-2xl text-center">
//         <p className="text-rose-700 font-semibold text-lg">
//           Invalid Model Output
//         </p>
//         <p className="text-sm text-rose-600 mt-2">
//           The AI service did not return a valid probability value.
//         </p>
//         {onReset && (
//           <button
//             onClick={onReset}
//             className="mt-6 px-5 py-2.5 bg-rose-600 text-black rounded-xl font-semibold"
//           >
//             Start New Assessment
//           </button>
//         )}
//       </div>
//     );
//   }

//   const rawProbability = result.probability;

//   const probability = Math.min(
//     100,
//     Math.max(
//       0,
//       rawProbability <= 1
//         ? Math.round(rawProbability * 100)
//         : Math.round(rawProbability)
//     )
//   );

//   const isHighRisk = probability > 50;

//   const theme = isHighRisk
//     ? {
//         chart: "#fb7185",
//         accent: "text-rose-400",
//         Icon: AlertTriangle,
//       }
//     : {
//         chart: "#34d399",
//         accent: "text-emerald-400",
//         Icon: CheckCircle2,
//       };

//   return (
//     <div className="animate-slide-up">
//       <section className="bg-white-900 rounded-3xl shadow-2xl overflow-hidden ring-1 ring-black/5">
//         <div className="p-8 md:p-12">
//           <div className="flex flex-col lg:flex-row gap-12 items-center">
//             {/* Radial Probability */}
//             <div className="relative w-64 h-64 flex items-center justify-center">
//               <svg
//                 className="absolute inset-0 w-full h-full -rotate-90"
//                 viewBox="0 0 100 100"
//               >
//                 <circle
//                   cx="50"
//                   cy="50"
//                   r="45"
//                   fill="none"
//                   // stroke="#1e293b"
//                   strokeWidth="6"
//                 />
//                 <circle
//                   cx="50"
//                   cy="50"
//                   r="45"
//                   fill="none"
//                   stroke={theme.chart}
//                   strokeWidth="6"
//                   strokeDasharray="283"
//                   strokeDashoffset={283 - (283 * probability) / 100}
//                   strokeLinecap="round"
//                   className="transition-all duration-1000 ease-out"
//                 />
//               </svg>

//               <div className="text-center">
//                 <span className="text-6xl font-bold text-black">
//                   {probability}%
//                 </span>
//                 <p className="text-xs text-white-400 uppercase tracking-widest mt-1">
//                   Model Probability
//                 </p>
//               </div>
//             </div>

//             {/* Text */}
//             <div className="flex-1 text-center lg:text-left space-y-5">
//               <span
//                 className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold uppercase ${theme.accent}`}
//               >
//                 <Activity size={14} />
//                 Model Prediction
//               </span>

//               <h2 className="text-3xl md:text-4xl font-bold text-black">
//                 {isHighRisk ? "Elevated Risk Detected" : "Low Risk Profile"}
//               </h2>

//               <p className="text-lg text-white-400 max-w-2xl">
//                 {isHighRisk
//                   ? "The Gradient Boosting model detected patterns associated with elevated cardiovascular risk. This result is for screening purposes only."
//                   : "The model did not detect significant cardiovascular risk patterns based on the provided data."}
//               </p>

//               {onReset && (
//                 <button
//                   onClick={onReset}
//                   className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold"
//                 >
//                   Start New Assessment
//                   <RefreshCw size={16} />
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="bg-black/20 p-6 border-t border-black/5 flex gap-3">
//           <Info className="text-white-500 mt-0.5" size={16} />
//           <p className="text-xs text-white-500 leading-relaxed">
//             <strong>Medical Disclaimer:</strong> This AI-generated prediction is
//             for educational purposes only and must not be used as a medical
//             diagnosis.
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// }
"use client";

export const dynamic = "force-dynamic";

import {
  AlertTriangle,
  CheckCircle2,
  Activity,
  RefreshCw,
  Info,
  Download,
  ArrowLeft,
} from "lucide-react";

import type { PredictionResponse } from "../../lib/predictionSchema";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

type PredictionResultProps = {
  result: PredictionResponse;
  inputData: Record<string, any>;
  onReset?: () => void;
};

export default function PredictionResult({
  result,
  inputData,
  onReset,
}: PredictionResultProps) {
  /* ---------- HARD VALIDATION ---------- */
  if (typeof result.probability !== "number" || isNaN(result.probability)) {
    return (
      <div className="p-8 bg-rose-50 border border-rose-200 rounded-2xl text-center">
        <p className="text-rose-700 font-semibold text-lg">
          Invalid Model Output
        </p>
        <p className="text-sm text-rose-600 mt-2">
          The AI service did not return a valid probability value.
        </p>
        {onReset && (
          <button
            onClick={onReset}
            className="mt-6 px-5 py-2.5 bg-rose-600 text-black rounded-xl font-semibold"
          >
            Start New Assessment
          </button>
        )}
      </div>
    );
  }

  /* ---------- PROBABILITY NORMALIZATION ---------- */
  const rawProbability = result.probability;

  const probability = Math.min(
    100,
    Math.max(
      0,
      rawProbability <= 1
        ? Math.round(rawProbability * 100)
        : Math.round(rawProbability)
    )
  );

  const isHighRisk = probability > 50;

  const theme = isHighRisk
    ? {
        chart: "#fb7185",
        accent: "text-rose-400",
        Icon: AlertTriangle,
      }
    : {
        chart: "#34d399",
        accent: "text-emerald-400",
        Icon: CheckCircle2,
      };

  /* ---------- PDF DOWNLOAD ---------- */
  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(18);
    doc.text("Cardiovascular Risk Assessment Report", 14, 20);

    doc.setFontSize(11);
    doc.text(`Generated on: ${new Date().toLocaleString()}`, 14, 28);

    // Prediction summary
    autoTable(doc, {
      startY: 36,
      head: [["Prediction Summary", "Value"]],
      body: [
        ["Risk Level", isHighRisk ? "High Risk" : "Low Risk"],
        ["Model Probability", `${probability}%`],
        ["Model Used", "Gradient Boosting Classifier"],
      ],
    });

    // Input data table
    const finalY = (doc as any).lastAutoTable?.finalY || 40;

    autoTable(doc, {
      startY: finalY + 10,
      head: [["Input Parameter", "Value"]],
      body: Object.entries(inputData),
    });

    // Disclaimer
    doc.setFontSize(9);
    doc.text(
      "Medical Disclaimer: This AI-generated report is for educational purposes only and must not be used as a medical diagnosis.",
      14,
      doc.internal.pageSize.height - 12
    );

    doc.save("CardioGuard_AI_Report.pdf");
  };

  return (
    <div className="animate-slide-up">
      <section className="bg-white-900 rounded-3xl shadow-2xl overflow-hidden ring-1 ring-black/5">
        <div className="p-8 md:p-12">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Radial Probability */}
            <div className="relative w-64 h-64 flex items-center justify-center">
              <svg
                className="absolute inset-0 w-full h-full -rotate-90"
                viewBox="0 0 100 100"
              >
                <circle cx="50" cy="50" r="45" fill="none" strokeWidth="6" />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke={theme.chart}
                  strokeWidth="6"
                  strokeDasharray="283"
                  strokeDashoffset={283 - (283 * probability) / 100}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>

              <div className="text-center">
                <span className="text-6xl font-bold text-black">
                  {probability}%
                </span>
                <p className="text-xs text-white-400 uppercase tracking-widest mt-1">
                  Model Probability
                </p>
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 text-center lg:text-left space-y-5">
              <span
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold uppercase ${theme.accent}`}
              >
                <Activity size={14} />
                Model Prediction
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-black">
                {isHighRisk ? "Elevated Risk Detected" : "Low Risk Profile"}
              </h2>

              <p className="text-lg text-white-400 max-w-2xl">
                {isHighRisk
                  ? "The Gradient Boosting model detected patterns associated with elevated cardiovascular risk. This result is for screening purposes only."
                  : "The model did not detect significant cardiovascular risk patterns based on the provided data."}
              </p>

              <div className="flex flex-wrap gap-4">
                {onReset && (
                  <button
                    onClick={onReset}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold"
                  >
                    Back
                    <ArrowLeft size={16} />
                  </button>
                )}

                <button
                  onClick={handleDownloadPDF}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold"
                >
                  <Download size={16} />
                  Save Report (PDF)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-black/20 p-6 border-t border-black/5 flex gap-3">
          <Info className="text-white-500 mt-0.5" size={16} />
          <p className="text-xs text-white-500 leading-relaxed">
            <strong>Medical Disclaimer:</strong> This AI-generated prediction is
            for educational purposes only and must not be used as a medical
            diagnosis.
          </p>
        </div>
      </section>
    </div>
  );
}
