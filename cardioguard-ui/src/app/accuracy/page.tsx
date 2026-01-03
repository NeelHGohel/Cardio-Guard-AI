import Card from "@/components/Card";
import { 
  ShieldCheck, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2,
  XCircle,
  BarChart3,
  Target
} from "lucide-react";

export default function AccuracyPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-[#ECFDF5] rounded-lg">
            <ShieldCheck className="text-[#22C55E]" size={28} />
          </div>
          <h2 className="text-3xl font-bold text-[#111827]">
            Model Accuracy & Reliability
          </h2>
        </div>
        <p className="text-[#6B7280]">
          Performance metrics and interpretation guidelines for the CardioGuard AI prediction model
        </p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#ECFDF5] rounded-full mb-3">
              <Target className="text-[#22C55E]" size={24} />
            </div>
            <p className="text-sm font-medium text-[#6B7280] mb-1">
              Model Accuracy
            </p>
            <p className="text-4xl font-bold text-[#111827] mb-1">72.82%</p>
            <div className="flex items-center justify-center gap-1 text-xs text-[#22C55E]">
              <TrendingUp size={14} />
              <span>High Performance</span>
            </div>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#EEF2FF] rounded-full mb-3">
              <BarChart3 className="text-[#4F46E5]" size={24} />
            </div>
            <p className="text-sm font-medium text-[#6B7280] mb-1">
              Algorithm Used
            </p>
            <p className="text-xl font-bold text-[#111827] mb-1">
              Gradient Boosting
            </p>
            <p className="text-xs text-[#9CA3AF]">Ensemble learning method</p>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#FEF2F2] rounded-full mb-3">
              <AlertCircle className="text-[#EF4444]" size={24} />
            </div>
            <p className="text-sm font-medium text-[#6B7280] mb-1">
              Prediction Type
            </p>
            <p className="text-xl font-bold text-[#111827] mb-1">
              Binary Classification
            </p>
            <p className="text-xs text-[#9CA3AF]">High / Low Risk</p>
          </div>
        </Card>
      </div>

      {/* Accuracy Interpretation */}
      <Card>
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 bg-[#EEF2FF] rounded-xl">
            <ShieldCheck className="text-[#4F46E5]" size={28} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#111827] mb-2">
              Understanding Model Accuracy
            </h3>
            <p className="text-[#6B7280]">
              Learn how to interpret the 72.82% accuracy score and what it means for prediction reliability
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-[#F9FAFB] border-l-4 border-[#4F46E5]">
            <p className="text-[#111827] leading-relaxed">
              An accuracy of <span className="font-semibold text-[#4F46E5]">72.82%</span> means 
              the model correctly classified cardiovascular risk in approximately{" "}
              <span className="font-semibold">73 out of 100 cases</span> on previously 
              unseen test data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-[#ECFDF5] border border-[#A7F3D0]">
              <CheckCircle2 className="text-[#22C55E] mt-0.5 flex-shrink-0" size={20} />
              <div>
                <p className="font-semibold text-[#111827] mb-1">
                  Correctly Predicted
                </p>
                <p className="text-sm text-[#6B7280]">
                  ~73 cases accurately identified as high or low risk
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-[#FEF2F2] border border-[#FECACA]">
              <XCircle className="text-[#EF4444] mt-0.5 flex-shrink-0" size={20} />
              <div>
                <p className="font-semibold text-[#111827] mb-1">
                  Misclassified
                </p>
                <p className="text-sm text-[#6B7280]">
                  ~27 cases where predictions differed from actual outcomes
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Important Context */}
      <Card>
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 bg-[#FEF3C7] rounded-xl">
            <AlertCircle className="text-[#F59E0B]" size={28} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#111827] mb-2">
              Important Context About Medical AI
            </h3>
            <p className="text-[#6B7280]">
              Why 100% accuracy is unrealistic in healthcare machine learning
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-[#FFFBEB] border-l-4 border-[#F59E0B]">
            <p className="font-semibold text-[#111827] mb-2">
              Biological Variability & Data Limitations
            </p>
            <p className="text-[#6B7280] leading-relaxed">
              In healthcare-related machine learning, achieving 100% accuracy is 
              unrealistic due to biological variability, noisy data, measurement 
              limitations, and the complex nature of human physiology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-white border border-[#E5E7EB]">
              <div className="w-8 h-8 bg-[#FEF2F2] rounded-lg flex items-center justify-center mb-3">
                <span className="text-[#EF4444] font-bold">1</span>
              </div>
              <p className="font-semibold text-[#111827] mb-1 text-sm">
                Individual Variation
              </p>
              <p className="text-xs text-[#6B7280]">
                Each patient's physiology is unique
              </p>
            </div>

            <div className="p-4 rounded-lg bg-white border border-[#E5E7EB]">
              <div className="w-8 h-8 bg-[#FEF2F2] rounded-lg flex items-center justify-center mb-3">
                <span className="text-[#EF4444] font-bold">2</span>
              </div>
              <p className="font-semibold text-[#111827] mb-1 text-sm">
                Measurement Error
              </p>
              <p className="text-xs text-[#6B7280]">
                Medical data collection has inherent noise
              </p>
            </div>

            <div className="p-4 rounded-lg bg-white border border-[#E5E7EB]">
              <div className="w-8 h-8 bg-[#FEF2F2] rounded-lg flex items-center justify-center mb-3">
                <span className="text-[#EF4444] font-bold">3</span>
              </div>
              <p className="font-semibold text-[#111827] mb-1 text-sm">
                Unknown Factors
              </p>
              <p className="text-xs text-[#6B7280]">
                Some risk factors remain unmeasured
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Decision Support Notice */}
      <div className="p-6 rounded-xl bg-gradient-to-br from-[#EEF2FF] to-[#E0E7FF] border border-[#C7D2FE]">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-white rounded-xl shadow-sm">
            <ShieldCheck className="text-[#4F46E5]" size={24} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#111827] mb-2">
              Decision-Support System
            </h3>
            <p className="text-[#4B5563] leading-relaxed mb-3">
              CardioGuard AI is designed as a <span className="font-semibold">decision-support system</span> to 
              assist healthcare professionals, not as a standalone medical diagnostic tool.
            </p>
            <div className="flex items-start gap-2 text-sm text-[#6B7280]">
              <AlertCircle className="text-[#4F46E5] flex-shrink-0 mt-0.5" size={16} />
              <p>
                Always consult with qualified medical professionals for diagnosis, treatment, 
                and healthcare decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}