// import Card from "@/components/Card";
// import {
//   Brain,
//   ShieldCheck,
//   Activity,
//   TrendingUp,
//   Users,
//   AlertCircle,
//   ArrowRight,
//   Sparkles,
// } from "lucide-react";
// import Link from "next/link";

// export default function DashboardPage() {
//   return (
//     <div className="space-y-8">
//       {/* Hero Section */}
//       <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] p-8 text-white shadow-lg">
//         <div className="relative z-10">
//           <div className="flex items-center gap-2 mb-3">
//             <Sparkles size={24} />
//             <span className="text-sm font-semibold uppercase tracking-wider opacity-90">
//               Welcome Back
//             </span>
//           </div>
//           <h1 className="text-3xl font-bold mb-2">
//             Cardiovascular Risk Assessment
//           </h1>
//           <p className="text-lg opacity-90 mb-6 max-w-2xl">
//             AI-powered prediction system using Gradient Boosting algorithm to
//             assess heart disease risk with 72.82% accuracy.
//           </p>
//           <Link
//             href="/disclaimer"
//             className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#4F46E5] transition-all hover:shadow-lg hover:scale-105"
//           >
//             Start New Prediction
//             <ArrowRight size={18} />
//           </Link>
//         </div>

//         {/* Decorative Elements */}
//         <div className="absolute top-0 right-0 -mt-12 -mr-12 h-64 w-64 rounded-full bg-white opacity-5"></div>
//         <div className="absolute bottom-0 right-0 -mb-8 -mr-8 h-48 w-48 rounded-full bg-white opacity-5"></div>
//       </div>

//       {/* Stats Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         <Card>
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-sm font-medium text-[#6B7280] mb-1">
//                 ML Algorithm
//               </p>
//               <p className="text-2xl font-bold text-[#111827] mb-1">
//                 Gradient Boosting
//               </p>
//               <p className="text-xs text-[#9CA3AF]">Advanced ensemble method</p>
//             </div>
//             <div className="p-3 bg-[#EEF2FF] rounded-xl">
//               <Brain className="text-[#4F46E5]" size={24} />
//             </div>
//           </div>
//         </Card>

//         <Card>
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-sm font-medium text-[#6B7280] mb-1">
//                 Model Accuracy
//               </p>
//               <p className="text-2xl font-bold text-[#111827] mb-1">72.82%</p>
//               <p className="text-xs text-[#22C55E] flex items-center gap-1">
//                 <TrendingUp size={12} />
//                 High precision
//               </p>
//             </div>
//             <div className="p-3 bg-[#ECFDF5] rounded-xl">
//               <ShieldCheck className="text-[#22C55E]" size={24} />
//             </div>
//           </div>
//         </Card>

//         <Card>
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-sm font-medium text-[#6B7280] mb-1">
//                 Risk Categories
//               </p>
//               <p className="text-2xl font-bold text-[#111827] mb-1">
//                 High / Low
//               </p>
//               <p className="text-xs text-[#9CA3AF]">Binary classification</p>
//             </div>
//             <div className="p-3 bg-[#FEF2F2] rounded-xl">
//               <Activity className="text-[#EF4444]" size={24} />
//             </div>
//           </div>
//         </Card>

//         <Card>
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-sm font-medium text-[#6B7280] mb-1">
//                 Total Predictions
//               </p>
//               <p className="text-2xl font-bold text-[#111827] mb-1">1,247</p>
//               <p className="text-xs text-[#9CA3AF]">Last 30 days</p>
//             </div>
//             <div className="p-3 bg-[#F0F9FF] rounded-xl">
//               <Users className="text-[#38BDF8]" size={24} />
//             </div>
//           </div>
//         </Card>
//       </div>

//       {/* Quick Actions */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <Card title="Quick Actions">
//           <div className="space-y-3">
//             <Link
//               href="/disclaimer"
//               className="flex items-center justify-between p-4 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] transition-all hover:border-[#4F46E5] hover:bg-white group"
//             >
//               <div className="flex items-center gap-3">
//                 <div className="p-2 bg-white rounded-lg border border-[#E5E7EB] group-hover:border-[#4F46E5] transition-all">
//                   <Activity className="text-[#4F46E5]" size={20} />
//                 </div>
//                 <div>
//                   <p className="font-semibold text-[#111827]">
//                     New Risk Assessment
//                   </p>
//                   <p className="text-sm text-[#6B7280]">
//                     Predict cardiovascular risk
//                   </p>
//                 </div>
//               </div>
//               <ArrowRight
//                 className="text-[#9CA3AF] group-hover:text-[#4F46E5] transition-all"
//                 size={20}
//               />
//             </Link>

//             <Link
//               href="/model"
//               className="flex items-center justify-between p-4 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] transition-all hover:border-[#4F46E5] hover:bg-white group"
//             >
//               <div className="flex items-center gap-3">
//                 <div className="p-2 bg-white rounded-lg border border-[#E5E7EB] group-hover:border-[#4F46E5] transition-all">
//                   <Brain className="text-[#4F46E5]" size={20} />
//                 </div>
//                 <div>
//                   <p className="font-semibold text-[#111827]">
//                     View Algorithm Details
//                   </p>
//                   <p className="text-sm text-[#6B7280]">
//                     Learn about the ML model
//                   </p>
//                 </div>
//               </div>
//               <ArrowRight
//                 className="text-[#9CA3AF] group-hover:text-[#4F46E5] transition-all"
//                 size={20}
//               />
//             </Link>

//             <Link
//               href="/insights"
//               className="flex items-center justify-between p-4 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] transition-all hover:border-[#4F46E5] hover:bg-white group"
//             >
//               <div className="flex items-center gap-3">
//                 <div className="p-2 bg-white rounded-lg border border-[#E5E7EB] group-hover:border-[#4F46E5] transition-all">
//                   <TrendingUp className="text-[#4F46E5]" size={20} />
//                 </div>
//                 <div>
//                   <p className="font-semibold text-[#111827]">Data Insights</p>
//                   <p className="text-sm text-[#6B7280]">
//                     Explore prediction patterns
//                   </p>
//                 </div>
//               </div>
//               <ArrowRight
//                 className="text-[#9CA3AF] group-hover:text-[#4F46E5] transition-all"
//                 size={20}
//               />
//             </Link>
//           </div>
//         </Card>

//         <Card title="System Information">
//           <div className="space-y-4">
//             <div className="flex items-start gap-3 p-4 rounded-lg bg-[#F0F9FF] border border-[#BAE6FD]">
//               <AlertCircle className="text-[#38BDF8] mt-0.5" size={20} />
//               <div>
//                 <p className="font-semibold text-[#111827] mb-1">
//                   Model Version 2.1
//                 </p>
//                 <p className="text-sm text-[#6B7280]">
//                   Latest update includes improved feature engineering and
//                   enhanced prediction accuracy.
//                 </p>
//               </div>
//             </div>

//             <div className="space-y-2">
//               <div className="flex justify-between items-center">
//                 <span className="text-sm text-[#6B7280]">Training Dataset</span>
//                 <span className="text-sm font-semibold text-[#111827]">
//                   65k+ samples
//                 </span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-sm text-[#6B7280]">Features Used</span>
//                 <span className="text-sm font-semibold text-[#111827]">
//                   13 attributes
//                 </span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-sm text-[#6B7280]">Last Updated</span>
//                 <span className="text-sm font-semibold text-[#111827]">
//                   Dec 2025
//                 </span>
//               </div>
//             </div>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// }
import Card from "@/components/Card";
import {
  Brain,
  ShieldCheck,
  Activity,
  TrendingUp,
  Users,
  AlertCircle,
  ArrowRight,
  Heart,
  Zap,
  Shield,
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Animated Hero Section with Project Name */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#4F46E5] via-[#6366F1] to-[#7C3AED] p-12 text-white shadow-2xl">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Circles */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-white/5 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-float-slow"></div>
          
          {/* Floating Hearts */}
          <div className="absolute top-20 right-1/4 animate-float-heart">
            <Heart className="text-white/20" size={32} />
          </div>
          <div className="absolute bottom-32 right-1/3 animate-float-heart-delayed">
            <Heart className="text-white/15" size={24} />
          </div>
          <div className="absolute top-1/2 left-1/4 animate-float-heart-slow">
            <Heart className="text-white/20" size={28} />
          </div>
          
          {/* Pulse Rings */}
          <div className="absolute top-1/2 right-20 w-24 h-24">
            <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-pulse-ring"></div>
            <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-pulse-ring-delayed"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Project Branding */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4 animate-fade-in">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 shadow-lg animate-pulse-glow">
                <Heart className="text-white" size={32} />
              </div>
              <div>
                <h2 className="text-5xl font-bold tracking-tight mb-1 animate-slide-up">
                  CardioGuard AI
                </h2>
                <div className="flex items-center gap-2 animate-slide-up-delayed">
                  <div className="h-px w-8 bg-white/50"></div>
                  <p className="text-sm font-small text-white/90 tracking-wide uppercase">
                    AI-Powered Heart Health Prediction
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-3xl space-y-4 mb-8 animate-fade-in-delayed">
            <p className="text-xl font-medium text-white/95 leading-relaxed">
              Advanced cardiovascular risk assessment powered by Gradient Boosting machine learning
            </p>
            {/* <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <Zap className="text-yellow-300" size={18} />
                <span className="text-sm font-semibold">72.82% Accuracy</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <Shield className="text-emerald-300" size={18} />
                <span className="text-sm font-semibold">FDA Research Standards</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <Brain className="text-purple-300" size={18} />
                <span className="text-sm font-semibold">13 Health Factors</span>
              </div>
            </div> */}
          </div>

          {/* CTA Button */}
          <Link
            href="/disclaimer"
            className="inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-base font-bold text-[#4F46E5] shadow-xl transition-all hover:shadow-2xl hover:scale-105 hover:bg-white/95 animate-bounce-subtle"
          >
            <Heart size={20} />
            Start Risk Assessment
            <ArrowRight size={20} />
          </Link>
        </div>

        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-[#6B7280] mb-1">
                ML Algorithm
              </p>
              <p className="text-2xl font-bold text-[#111827] mb-1">
                Gradient Boosting
              </p>
              <p className="text-xs text-[#9CA3AF]">Advanced ensemble method</p>
            </div>
            <div className="p-3 bg-[#EEF2FF] rounded-xl">
              <Brain className="text-[#4F46E5]" size={24} />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-[#6B7280] mb-1">
                Model Accuracy
              </p>
              <p className="text-2xl font-bold text-[#111827] mb-1">72.82%</p>
              <p className="text-xs text-[#22C55E] flex items-center gap-1">
                <TrendingUp size={12} />
                High precision
              </p>
            </div>
            <div className="p-3 bg-[#ECFDF5] rounded-xl">
              <ShieldCheck className="text-[#22C55E]" size={24} />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-[#6B7280] mb-1">
                Risk Categories
              </p>
              <p className="text-2xl font-bold text-[#111827] mb-1">
                High / Low
              </p>
              <p className="text-xs text-[#9CA3AF]">Binary classification</p>
            </div>
            <div className="p-3 bg-[#FEF2F2] rounded-xl">
              <Activity className="text-[#EF4444]" size={24} />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-[#6B7280] mb-1">
                Total Predictions
              </p>
              <p className="text-2xl font-bold text-[#111827] mb-1">1,247</p>
              <p className="text-xs text-[#9CA3AF]">Last 30 days</p>
            </div>
            <div className="p-3 bg-[#F0F9FF] rounded-xl">
              <Users className="text-[#38BDF8]" size={24} />
            </div>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Quick Actions">
          <div className="space-y-3">
            <Link
              href="/disclaimer"
              className="flex items-center justify-between p-4 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] transition-all hover:border-[#4F46E5] hover:bg-white group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg border border-[#E5E7EB] group-hover:border-[#4F46E5] transition-all">
                  <Activity className="text-[#4F46E5]" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-[#111827]">
                    New Risk Assessment
                  </p>
                  <p className="text-sm text-[#6B7280]">
                    Predict cardiovascular risk
                  </p>
                </div>
              </div>
              <ArrowRight
                className="text-[#9CA3AF] group-hover:text-[#4F46E5] transition-all"
                size={20}
              />
            </Link>

            <Link
              href="/model"
              className="flex items-center justify-between p-4 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] transition-all hover:border-[#4F46E5] hover:bg-white group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg border border-[#E5E7EB] group-hover:border-[#4F46E5] transition-all">
                  <Brain className="text-[#4F46E5]" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-[#111827]">
                    View Algorithm Details
                  </p>
                  <p className="text-sm text-[#6B7280]">
                    Learn about the ML model
                  </p>
                </div>
              </div>
              <ArrowRight
                className="text-[#9CA3AF] group-hover:text-[#4F46E5] transition-all"
                size={20}
              />
            </Link>

            <Link
              href="/insights"
              className="flex items-center justify-between p-4 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] transition-all hover:border-[#4F46E5] hover:bg-white group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg border border-[#E5E7EB] group-hover:border-[#4F46E5] transition-all">
                  <TrendingUp className="text-[#4F46E5]" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-[#111827]">Data Insights</p>
                  <p className="text-sm text-[#6B7280]">
                    Explore prediction patterns
                  </p>
                </div>
              </div>
              <ArrowRight
                className="text-[#9CA3AF] group-hover:text-[#4F46E5] transition-all"
                size={20}
              />
            </Link>
          </div>
        </Card>

        <Card title="System Information">
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-[#F0F9FF] border border-[#BAE6FD]">
              <AlertCircle className="text-[#38BDF8] mt-0.5" size={20} />
              <div>
                <p className="font-semibold text-[#111827] mb-1">
                  Model Version 2.1
                </p>
                <p className="text-sm text-[#6B7280]">
                  Latest update includes improved feature engineering and
                  enhanced prediction accuracy.
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-[#6B7280]">Training Dataset</span>
                <span className="text-sm font-semibold text-[#111827]">
                  65k+ samples
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-[#6B7280]">Features Used</span>
                <span className="text-sm font-semibold text-[#111827]">
                  13 attributes
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-[#6B7280]">Last Updated</span>
                <span className="text-sm font-semibold text-[#111827]">
                  Dec 2025
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}