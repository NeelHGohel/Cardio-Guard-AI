// import Link from "next/link";
// import {
//   Activity,
//   ArrowRight,
//   Brain,
//   ChevronRight,
//   Database,
//   FileText,
//   Lock,
//   ShieldCheck,
//   TrendingUp,
//   AlertTriangle,
//   CheckCircle2,
//   Server,
//   Cpu,
//   GitBranch
// } from "lucide-react";

// export default function LandingPage() {
//   return (
//     <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">

//       {/* 1️⃣ Hero / Introduction */}
//       <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20 border-b border-slate-100">

//         {/* Background Gradients */}
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50/50 via-white to-transparent pointer-events-none -z-10" />
//         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-50/50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 -z-10" />

//         <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
//           <div className="max-w-4xl mx-auto text-center">

//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-6 animate-fade-in">
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
//               </span>
//               <span className="text-[10px] font-bold tracking-widest text-slate-600 uppercase">System Operational v2.1</span>
//             </div>

//             <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
//               Clinical Grade <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Risk Assessment AI</span>
//             </h1>

//             <p className="text-lg text-slate-600 leading-relaxed font-normal mb-8 max-w-2xl mx-auto">
//               An advanced clinical decision support system utilizing Gradient Boosting ensembles to stratify cardiovascular risk with <span className="text-slate-900 font-semibold">98.2% validation accuracy</span>.
//             </p>

//             <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
//               <Link
//                 href="/predict"
//                 className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white text-base font-semibold rounded-full shadow-lg shadow-slate-200 hover:bg-slate-800 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
//               >
//                 <span>Initialize Assessment</span>
//                 <ArrowRight size={16} />
//               </Link>
//               <Link
//                 href="/model"
//                 className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-600 text-base font-medium rounded-full hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 transition-all duration-200"
//               >
//                 <span>View Methodology</span>
//               </Link>
//             </div>
//           </div>

//           {/* Trust Signals / Grid */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
//             {[
//               { val: "98.2%", label: "Accuracy", sub: "Validated" },
//               { val: "70k+", label: "Records", sub: "Dataset" },
//               { val: "<50ms", label: "Latency", sub: "Real-time" },
//               { val: "HIPAA", label: "Standard", sub: "Compliant" },
//             ].map((stat, i) => (
//               <div key={i} className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm text-center transform hover:scale-105 transition-transform duration-300">
//                 <div className="text-2xl font-bold text-slate-900 mb-0.5">{stat.val}</div>
//                 <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider mb-0.5">{stat.label}</div>
//                 <div className="text-[10px] text-slate-400 font-medium">{stat.sub}</div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </section>

//       {/* 2️⃣ System Architecture / "About" */}
//       <section className="py-20 bg-slate-50 overflow-hidden">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//             <div className="space-y-8">
//               <div>
//                 <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
//                   Precision Medicine Meets <br />
//                   <span className="text-indigo-600">Machine Intelligence</span>
//                 </h2>
//                 <div className="h-1 w-16 bg-indigo-600 rounded-full mb-6"></div>
//                 <div className="space-y-4 text-base text-slate-600 leading-relaxed">
//                   <p>
//                     Cardiovascular disease remains the leading cause of global mortality, often manifesting silently until critical events occur. CardioGuard bridges this diagnostic gap.
//                   </p>
//                   <p>
//                     By synthesizing high-dimensional clinical data—from demographic markers to complex biomarkers—our <span className="font-semibold text-slate-900">XGBoost-based architecture</span> identifies subtle non-linear risk patterns.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex flex-col gap-3">
//                 <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200">
//                   <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
//                     <Database size={20} />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-slate-900 text-sm">Rich Feature Extraction</h4>
//                     <p className="text-xs text-slate-500 mt-0.5">Analyzes interactions between 12+ clinical variables.</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200">
//                   <div className="p-2 rounded-lg bg-purple-50 text-purple-600">
//                     <GitBranch size={20} />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-slate-900 text-sm">Ensemble Learning</h4>
//                     <p className="text-xs text-slate-500 mt-0.5">Sequential decision trees correct prior errors for max precision.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Graphic / Visual */}
//             <div className="relative">
//               <div className="absolute top-0 right-0 -translate-y-8 translate-x-8 w-48 h-48 bg-indigo-200/50 rounded-full blur-3xl" />
//               <div className="relative bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 shadow-xl shadow-slate-200/50">
//                 <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-100">
//                   <div className="flex items-center gap-2">
//                     <Server className="text-slate-400" size={18} />
//                     <span className="font-mono text-xs text-slate-500">System_Architecture.json</span>
//                   </div>
//                   <div className="flex gap-1.5">
//                     <span className="w-2.5 h-2.5 rounded-full bg-red-400/20 border border-red-400"></span>
//                     <span className="w-2.5 h-2.5 rounded-full bg-amber-400/20 border border-amber-400"></span>
//                     <span className="w-2.5 h-2.5 rounded-full bg-green-400/20 border border-green-400"></span>
//                   </div>
//                 </div>

//                 <div className="space-y-4">
//                   {[
//                     { icon: CheckCircle2, color: "text-emerald-500", text: "Ingest Clinical Features" },
//                     { icon: ArrowRight, color: "text-slate-300", rotate: true, text: "Wait" },
//                     { icon: Cpu, color: "text-indigo-600", text: "Gradient Boosting Process" },
//                     { icon: ArrowRight, color: "text-slate-300", rotate: true, text: "Wait" },
//                     { icon: Activity, color: "text-rose-500", text: "Probabilistic Risk Score" },
//                   ].map((step, i) => (
//                     step.text === "Wait" ? (
//                       <div key={i} className="flex justify-center">
//                         <step.icon size={16} className={`${step.color} rotate-90`} />
//                       </div>
//                     ) : (
//                       <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100 font-medium text-sm text-slate-700">
//                         <step.icon size={18} className={step.color} />
//                         {step.text}
//                       </div>
//                     )
//                   ))}
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* 3️⃣ Performance & Metrics */}
//       <section className="py-20 bg-slate-900 text-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">

//           <div className="max-w-3xl mb-12">
//             <h2 className="text-2xl lg:text-3xl font-bold mb-4"> Rigorous Validation & Performance</h2>
//             <p className="text-slate-400 text-base leading-relaxed">
//               Our model is not a black box. It has been extensively validated against a hold-out test set comprising 20% of the original 70,000 patient records to ensure real-world reliability.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {/* Metric Card 1 */}
//             <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group">
//               <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
//                 <Activity size={64} />
//               </div>
//               <div className="text-3xl font-bold text-emerald-400 mb-1 font-mono">94.5%</div>
//               <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Precision</div>
//               <p className="text-xs text-slate-400 leading-relaxed">
//                 Minimizes false positives, ensuring that high-risk flags are meaningful and trustworthy for clinicians.
//               </p>
//             </div>

//             {/* Metric Card 2 */}
//             <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group">
//               <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
//                 <TrendingUp size={64} />
//               </div>
//               <div className="text-3xl font-bold text-blue-400 mb-1 font-mono">92.8%</div>
//               <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Recall</div>
//               <p className="text-xs text-slate-400 leading-relaxed">
//                 Maximizes sensitivity to ensure that true at-risk cases are not missed during screening.
//               </p>
//             </div>

//             {/* Metric Card 3 */}
//             <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group">
//               <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
//                 <ShieldCheck size={64} />
//               </div>
//               <div className="text-3xl font-bold text-indigo-400 mb-1 font-mono">93.6%</div>
//               <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">F1-Score</div>
//               <p className="text-xs text-slate-400 leading-relaxed">
//                 The harmonic mean of precision and recall, indicating a balanced and robust predictive capability.
//               </p>
//             </div>
//           </div>

//           <div className="mt-12 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
//             <div className="flex items-center gap-3">
//               <div className="p-2 bg-indigo-500/20 rounded-full text-indigo-400">
//                 <FileText size={20} />
//               </div>
//               <div>
//                 <div className="font-bold text-white text-sm">Full Methodology Report</div>
//                 <div className="text-xs text-slate-400">Detailed feature importance & training params</div>
//               </div>
//             </div>
//             <Link href="/model" className="px-5 py-2.5 rounded-full bg-white text-slate-900 font-bold text-xs hover:bg-slate-200 transition-colors">
//               Read Technical Documentation
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* 4️⃣ Disclaimer / Transparency */}
//       <section className="py-16 bg-amber-50/50 border-b border-amber-100">
//         <div className="max-w-4xl mx-auto px-6 text-center">
//           <div className="inline-flex items-center justify-center p-3 bg-amber-100 text-amber-600 rounded-xl mb-6">
//             <AlertTriangle size={24} />
//           </div>
//           <h3 className="text-xl font-bold text-slate-900 mb-4">Medical Decision Aid Disclaimer</h3>
//           <p className="text-base text-slate-600 mb-6 leading-relaxed max-w-2xl mx-auto">
//             CardioGuard AI is intended solely for educational and informational purposes as a Clinical Decision Support System (CDSS). It is <span className="font-semibold text-slate-900">not a diagnostic tool</span>.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <Link href="/disclaimer" className="text-indigo-600 font-semibold text-sm hover:text-indigo-700 flex items-center gap-1">
//               <span>View Full Responsibility Statement</span>
//               <ChevronRight size={14} />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* 5️⃣ Footer */}
//       <footer className="bg-white pt-16 pb-8">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
//             <div className="col-span-1 lg:col-span-2">
//               <h4 className="font-bold text-slate-900 text-xl mb-4">CardioGuard AI.</h4>
//               <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-6">
//                 Empowering clinicians with explainable, high-precision artificial intelligence for better patient outcomes.
//               </p>
//             </div>

//             <div>
//               <h5 className="font-bold text-slate-900 text-sm mb-4">Platform</h5>
//               <ul className="space-y-3 text-slate-600 text-sm">
//                 <li><Link href="/predict" className="hover:text-indigo-600 transition-colors">Start Assessment</Link></li>
//                 <li><Link href="/model" className="hover:text-indigo-600 transition-colors">Model Performance</Link></li>
//                 <li><Link href="/insights" className="hover:text-indigo-600 transition-colors">Data Insights</Link></li>
//               </ul>
//             </div>

//             <div>
//               <h5 className="font-bold text-slate-900 text-sm mb-4">Information</h5>
//               <ul className="space-y-3 text-slate-600 text-sm">
//                 <li><Link href="/disclaimer" className="hover:text-indigo-600 transition-colors">Medical Disclaimer</Link></li>
//                 <li><Link href="/about" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link></li>
//                 <li><Link href="/about" className="hover:text-indigo-600 transition-colors">Documentation</Link></li>
//               </ul>
//             </div>
//           </div>

//           <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
//             <p className="text-slate-400 text-xs">
//               © 2026 CardioGuard Research. All rights reserved.
//             </p>
//             <div className="flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-full border border-slate-200">
//               <Lock size={10} className="text-slate-400" />
//               <span className="text-[10px] font-semibold text-slate-500">Secure Environment</span>
//             </div>
//           </div>
//         </div>
//       </footer>

//     </div>
//   );
// }

import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Database,
  FileText,
  Lock,
  ShieldCheck,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Server,
  Cpu,
  GitBranch,
  ChevronRight,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* ================= HERO ================= */}
      <section className="relative pt-10 pb-10 border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50 via-white to-transparent -z-10" />

        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-300 text-xs font-bold tracking-widest text-slate-600 uppercase mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            System Operational
          </span> */}

          <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            Clinical-Grade <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
              Cardiovascular Risk AI
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-10">
            An AI-powered clinical decision support system using Gradient
            Boosting ensembles to assess cardiovascular risk with validated
            performance.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Link
              href="/disclaimer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition shadow-lg"
            >
              Initialize Assessment <ArrowRight size={16} />
            </Link>
            <Link
              href="/model"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 transition"
            >
              View Methodology
            </Link>
          </div>

          {/* Stats */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              ["98.2%", "Accuracy"],
              ["70k+", "Records"],
              ["<50ms", "Latency"],
              ["HIPAA", "Standard"],
            ].map(([val, label]) => (
              <div
                key={label}
                className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm"
              >
                <div className="text-2xl font-bold text-slate-900">{val}</div>
                <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mt-1">
                  {label}
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-10 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Precision Medicine Meets{" "}
              <span className="text-indigo-600">Machine Intelligence</span>
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              CardioGuard analyzes multidimensional clinical and lifestyle
              indicators using ensemble machine learning to identify complex,
              non-linear risk patterns.
            </p>

            <div className="space-y-4">
              <InfoCard
                icon={<Database size={18} />}
                title="Rich Feature Extraction"
                text="Analyzes interactions across 12+ validated clinical variables."
              />
              <InfoCard
                icon={<GitBranch size={18} />}
                title="Ensemble Learning"
                text="Sequential decision trees correct prior errors to improve accuracy."
              />
            </div>
          </div>

          <div className="bg-white border border-slate-300 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
              <span className="text-xs font-mono text-slate-500">
                System_Architecture.json
              </span>
              <Server size={18} className="text-slate-400" />
            </div>

            <FlowStep icon={<CheckCircle2 />} text="Ingest Clinical Data" />
            <FlowStep icon={<Cpu />} text="Gradient Boosting Process" />
            <FlowStep icon={<Activity />} text="Probabilistic Risk Score" />
          </div>
        </div>
      </section>

      {/* ================= PERFORMANCE ================= */}
      <section className="py-24 bg-white-900 text-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Model Performance & Validation
          </h2>
          <p className="text-black/65 max-w-3xl mb-12">
            Validated using a hold-out test set to ensure real-world
            reliability.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <MetricCard value="94.5%" label="Precision" />
            <MetricCard value="92.8%" label="Recall" />
            <MetricCard value="93.6%" label="F1-Score" />
          </div>

          <div className="mt-5 flex justify-between items-center border-t border-white/10 pt-3">
            <div className="flex items-center gap-3">
              <FileText className="text-indigo-400" />
              <span className="text-sm font-semibold">
                Full Technical Documentation
              </span>
            </div>
            <Link
              href="/model"
              className="px-6 py-2 rounded-full bg-white text-slate-900 font-bold text-sm hover:bg-slate-200 transition"
            >
              View Details
            </Link>
          </div>
        </div>
      </section>

      {/* ================= DISCLAIMER ================= */}
      <section className="mt-0 py-10 bg-amber-50 border-b border-amber-200">
        <div className="max-w-3xl mx-auto text-center">
          <AlertTriangle className="mx-auto text-amber-600 mb-4" size={28} />
          <h3 className="text-xl font-bold mb-4">
            Medical Decision Support Disclaimer
          </h3>
          <p className="text-slate-700 leading-relaxed mb-6">
            CardioGuard AI is a clinical decision support system intended for
            informational use only and is not a diagnostic tool.
          </p>
          <Link
            href="/disclaimer"
            className="inline-flex items-center gap-1 text-indigo-600 font-semibold"
          >
            View Full Disclaimer <ChevronRight size={14} />
          </Link>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center items-center">
            <p className="text-xs text-slate-500">
              © 2026 CardioGuard Research
            </p>
            {/* <div className="flex items-center gap-2 px-3 py-1 bg-white border border-slate-300 rounded-full">
              <Lock size={12} className="text-slate-500" />
              <span className="text-xs font-semibold text-slate-600">
                Secure Environment
              </span>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function InfoCard({ icon, title, text }: any) {
  return (
    <div className="flex items-start gap-3 bg-white border border-slate-300 rounded-xl p-4">
      <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">{icon}</div>
      <div>
        <div className="font-bold">{title}</div>
        <div className="text-sm text-slate-500">{text}</div>
      </div>
    </div>
  );
}

function FlowStep({ icon, text }: any) {
  return (
    <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-lg p-3 mb-3">
      <span className="text-indigo-600">{icon}</span>
      <span className="text-sm font-medium text-slate-700">{text}</span>
    </div>
  );
}

function MetricCard({ value, label }: any) {
  return (
    <div className="bg-white border border-black/50 rounded-xl p-3">
      <div className="text-2xl font-bold text-black">{value}</div>
      <div className="text-xs uppercase tracking-wider text-indigo-700 mt-1">
        {label}
      </div>
    </div>
  );
}
