import Card from "../components/Card";
import {
  Brain,
  ShieldCheck,
  Activity,
  TrendingUp,
  Users,
  AlertCircle,
  ArrowRight,
  Heart,
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Animated Hero Section with Project Name */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 p-12 text-white shadow-2xl">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Circles */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-white opacity-5 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl animate-float-slow"></div>

          {/* Floating Hearts */}
          <div className="absolute top-20 right-1/4 animate-float-heart">
            <Heart className="text-white opacity-20" size={32} />
          </div>
          <div className="absolute bottom-32 right-1/3 animate-float-heart-delayed">
            <Heart className="text-white opacity-15" size={24} />
          </div>
          <div className="absolute top-1/2 left-1/4 animate-float-heart-slow">
            <Heart className="text-white opacity-20" size={28} />
          </div>

          {/* Pulse Rings */}
          <div className="absolute top-1/2 right-20 w-24 h-24">
            <div className="absolute inset-0 rounded-full border-2 border-white opacity-30 animate-pulse-ring"></div>
            <div className="absolute inset-0 rounded-full border-2 border-white opacity-20 animate-pulse-ring-delayed"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Project Branding */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4 animate-fade-in">
              <div className="p-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl border border-white border-opacity-30 shadow-lg animate-pulse-glow">
                <Heart className="text-white" size={32} />
              </div>
              <div>
                <h2 className="text-5xl font-bold tracking-tight mb-1 animate-slide-up">
                  CardioGuard AI
                </h2>
                <div className="flex items-center gap-2 animate-slide-up-delayed">
                  <div className="h-px w-8 bg-white opacity-50"></div>
                  <p className="text-sm font-medium text-white opacity-90 tracking-wide uppercase">
                    AI-Powered Heart Health Prediction
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-3xl space-y-4 mb-8 animate-fade-in-delayed">
            <p className="text-xl font-medium text-white opacity-95 leading-relaxed">
              Advanced cardiovascular risk assessment powered by Gradient
              Boosting machine learning
            </p>
          </div>

          {/* CTA Button */}
          <Link
            href="/disclaimer"
            className="inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-base font-bold text-indigo-600 shadow-xl transition-all hover:shadow-2xl hover:scale-105 hover:bg-opacity-95 animate-bounce-in"
          >
            <Heart size={20} />
            Start Risk Assessment
            <ArrowRight size={20} />
          </Link>
        </div>

        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">
                ML Algorithm
              </p>
              <p className="text-2xl font-bold text-gray-900 mb-1">
                Gradient Boosting
              </p>
              <p className="text-xs text-gray-400">Advanced ensemble method</p>
            </div>
            <div className="p-3 bg-indigo-50 rounded-xl">
              <Brain className="text-indigo-600" size={24} />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">
                Model Accuracy
              </p>
              <p className="text-2xl font-bold text-gray-900 mb-1">72.82%</p>
              <p className="text-xs text-green-600 flex items-center gap-1">
                <TrendingUp size={12} />
                High precision
              </p>
            </div>
            <div className="p-3 bg-green-50 rounded-xl">
              <ShieldCheck className="text-green-600" size={24} />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">
                Risk Categories
              </p>
              <p className="text-2xl font-bold text-gray-900 mb-1">
                High / Low
              </p>
              <p className="text-xs text-gray-400">Binary classification</p>
            </div>
            <div className="p-3 bg-red-50 rounded-xl">
              <Activity className="text-red-500" size={24} />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">
                Total Predictions
              </p>
              <p className="text-2xl font-bold text-gray-900 mb-1">100+</p>
              <p className="text-xs text-gray-400">Last 30 days</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-xl">
              <Users className="text-blue-400" size={24} />
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
              className="flex items-center justify-between p-4 rounded-lg border border-gray-200 bg-gray-50 transition-all hover:border-indigo-600 hover:bg-white group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg border border-gray-200 group-hover:border-indigo-600 transition-all">
                  <Activity className="text-indigo-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    New Risk Assessment
                  </p>
                  <p className="text-sm text-gray-600">
                    Predict cardiovascular risk
                  </p>
                </div>
              </div>
              <ArrowRight
                className="text-gray-400 group-hover:text-indigo-600 transition-all"
                size={20}
              />
            </Link>

            <Link
              href="/model"
              className="flex items-center justify-between p-4 rounded-lg border border-gray-200 bg-gray-50 transition-all hover:border-indigo-600 hover:bg-white group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg border border-gray-200 group-hover:border-indigo-600 transition-all">
                  <Brain className="text-indigo-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    View Algorithm Details
                  </p>
                  <p className="text-sm text-gray-600">
                    Learn about the ML model
                  </p>
                </div>
              </div>
              <ArrowRight
                className="text-gray-400 group-hover:text-indigo-600 transition-all"
                size={20}
              />
            </Link>

            <Link
              href="/insights"
              className="flex items-center justify-between p-4 rounded-lg border border-gray-200 bg-gray-50 transition-all hover:border-indigo-600 hover:bg-white group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg border border-gray-200 group-hover:border-indigo-600 transition-all">
                  <TrendingUp className="text-indigo-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Data Insights</p>
                  <p className="text-sm text-gray-600">
                    Explore prediction patterns
                  </p>
                </div>
              </div>
              <ArrowRight
                className="text-gray-400 group-hover:text-indigo-600 transition-all"
                size={20}
              />
            </Link>
          </div>
        </Card>

        <Card title="System Information">
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-blue-50 border border-blue-200">
              <AlertCircle className="text-blue-400 mt-0.5" size={20} />
              <div>
                <p className="font-semibold text-gray-900 mb-1">
                  Model Version 2.1
                </p>
                <p className="text-sm text-gray-600">
                  Latest update includes improved feature engineering and
                  enhanced prediction accuracy.
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Training Dataset</span>
                <span className="text-sm font-semibold text-gray-900">
                  65k+ samples
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Features Used</span>
                <span className="text-sm font-semibold text-gray-900">
                  13 attributes
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Last Updated</span>
                <span className="text-sm font-semibold text-gray-900">
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

// export default function Page() {
//   return (
//     <div className="h-screen bg-red-500 text-white text-5xl flex items-center justify-center">
//       TAILWIND ACTIVE
//     </div>
//   );
// }
