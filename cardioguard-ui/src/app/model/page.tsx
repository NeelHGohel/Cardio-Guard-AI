import Card from "@/components/Card";
import {
  Brain,
  Zap,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Shield,
  GitBranch,
  Target,
  Activity,
} from "lucide-react";

export default function ModelPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-[#EEF2FF] rounded-lg">
            <Brain className="text-[#4F46E5]" size={28} />
          </div>
          <h2 className="text-3xl font-bold text-[#111827]">
            Machine Learning Algorithm
          </h2>
        </div>
        <p className="text-[#6B7280]">
          Understanding the Gradient Boosting algorithm used for cardiovascular
          risk prediction
        </p>
      </div>

      {/* Algorithm Overview */}
      <div className="p-6 rounded-xl bg-gradient-to-br from-[#EEF2FF] to-[#E0E7FF] border border-[#C7D2FE]">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-white rounded-xl shadow-sm">
            <Zap className="text-[#4F46E5]" size={32} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#111827] mb-2">
              Gradient Boosting Classifier
            </h3>
            <p className="text-[#4B5563] leading-relaxed">
              An advanced ensemble machine learning technique that builds
              multiple decision trees sequentially, where each new tree focuses
              on correcting the errors made by previous trees. This iterative
              process results in a powerful predictive model.
            </p>
          </div>
        </div>
      </div>

      {/* How it Works */}
      <Card>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-[#F0F9FF] rounded-lg">
            <GitBranch className="text-[#38BDF8]" size={24} />
          </div>
          <h3 className="text-xl font-bold text-[#111827]">How It Works</h3>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-4 p-4 rounded-lg bg-[#F9FAFB] border-l-4 border-[#4F46E5]">
            <div className="w-8 h-8 bg-[#4F46E5] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
              1
            </div>
            <div>
              <h4 className="font-semibold text-[#111827] mb-1">
                Initial Weak Learner
              </h4>
              <p className="text-sm text-[#6B7280]">
                The algorithm starts with a simple decision tree that makes
                basic predictions on the training data.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-lg bg-[#F9FAFB] border-l-4 border-[#4F46E5]">
            <div className="w-8 h-8 bg-[#4F46E5] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
              2
            </div>
            <div>
              <h4 className="font-semibold text-[#111827] mb-1">
                Error Calculation
              </h4>
              <p className="text-sm text-[#6B7280]">
                The model identifies where predictions were incorrect and
                calculates the residual errors (differences between predicted
                and actual values).
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-lg bg-[#F9FAFB] border-l-4 border-[#4F46E5]">
            <div className="w-8 h-8 bg-[#4F46E5] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
              3
            </div>
            <div>
              <h4 className="font-semibold text-[#111827] mb-1">
                Sequential Tree Building
              </h4>
              <p className="text-sm text-[#6B7280]">
                A new decision tree is trained specifically to predict these
                errors, effectively learning from the mistakes of previous
                trees.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-lg bg-[#F9FAFB] border-l-4 border-[#4F46E5]">
            <div className="w-8 h-8 bg-[#4F46E5] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
              4
            </div>
            <div>
              <h4 className="font-semibold text-[#111827] mb-1">
                Iterative Improvement
              </h4>
              <p className="text-sm text-[#6B7280]">
                This process repeats, with each new tree correcting the residual
                errors of the combined ensemble, gradually improving overall
                accuracy.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-lg bg-[#F9FAFB] border-l-4 border-[#22C55E]">
            <div className="w-8 h-8 bg-[#22C55E] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
              5
            </div>
            <div>
              <h4 className="font-semibold text-[#111827] mb-1">
                Final Ensemble Prediction
              </h4>
              <p className="text-sm text-[#6B7280]">
                All trees vote together (weighted by their learning rate) to
                produce a final, highly accurate prediction for cardiovascular
                risk.
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Why Gradient Boosting */}
      <Card>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-[#ECFDF5] rounded-lg">
            <Target className="text-[#22C55E]" size={24} />
          </div>
          <h3 className="text-xl font-bold text-[#111827]">
            Why Gradient Boosting for Cardiovascular Risk?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 p-4 rounded-lg bg-[#ECFDF5] border border-[#A7F3D0]">
            <CheckCircle2
              className="text-[#22C55E] flex-shrink-0 mt-0.5"
              size={20}
            />
            <div>
              <p className="font-semibold text-[#111827] text-sm mb-1">
                Non-linear Relationships
              </p>
              <p className="text-xs text-[#6B7280]">
                Effectively captures complex, non-linear interactions between
                health factors
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-lg bg-[#ECFDF5] border border-[#A7F3D0]">
            <CheckCircle2
              className="text-[#22C55E] flex-shrink-0 mt-0.5"
              size={20}
            />
            <div>
              <p className="font-semibold text-[#111827] text-sm mb-1">
                Structured Data Performance
              </p>
              <p className="text-xs text-[#6B7280]">
                Excels with tabular medical datasets like patient health records
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-lg bg-[#ECFDF5] border border-[#A7F3D0]">
            <CheckCircle2
              className="text-[#22C55E] flex-shrink-0 mt-0.5"
              size={20}
            />
            <div>
              <p className="font-semibold text-[#111827] text-sm mb-1">
                Feature Interactions
              </p>
              <p className="text-xs text-[#6B7280]">
                Automatically detects and models complex interactions between
                variables
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-lg bg-[#ECFDF5] border border-[#A7F3D0]">
            <CheckCircle2
              className="text-[#22C55E] flex-shrink-0 mt-0.5"
              size={20}
            />
            <div>
              <p className="font-semibold text-[#111827] text-sm mb-1">
                Reduced Underfitting
              </p>
              <p className="text-xs text-[#6B7280]">
                Ensemble approach minimizes bias compared to single decision
                trees
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Strengths and Limitations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Strengths */}
        <Card>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-[#ECFDF5] rounded-lg">
              <TrendingUp className="text-[#22C55E]" size={24} />
            </div>
            <h3 className="text-xl font-bold text-[#111827]">Key Strengths</h3>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-[#F9FAFB]">
              <CheckCircle2
                className="text-[#22C55E] flex-shrink-0 mt-0.5"
                size={18}
              />
              <div>
                <p className="font-semibold text-[#111827] text-sm">
                  High Predictive Power
                </p>
                <p className="text-xs text-[#6B7280] mt-0.5">
                  Achieves superior accuracy on complex prediction tasks
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-[#F9FAFB]">
              <CheckCircle2
                className="text-[#22C55E] flex-shrink-0 mt-0.5"
                size={18}
              />
              <div>
                <p className="font-semibold text-[#111827] text-sm">
                  Clinical Data Optimization
                </p>
                <p className="text-xs text-[#6B7280] mt-0.5">
                  Specifically designed to handle tabular medical data
                  effectively
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-[#F9FAFB]">
              <CheckCircle2
                className="text-[#22C55E] flex-shrink-0 mt-0.5"
                size={18}
              />
              <div>
                <p className="font-semibold text-[#111827] text-sm">
                  Flexible Loss Functions
                </p>
                <p className="text-xs text-[#6B7280] mt-0.5">
                  Can optimize for various metrics beyond simple accuracy
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-[#F9FAFB]">
              <CheckCircle2
                className="text-[#22C55E] flex-shrink-0 mt-0.5"
                size={18}
              />
              <div>
                <p className="font-semibold text-[#111827] text-sm">
                  Handles Missing Data
                </p>
                <p className="text-xs text-[#6B7280] mt-0.5">
                  Robust to incomplete patient records and missing values
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Limitations */}
        <Card>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-[#FEF2F2] rounded-lg">
              <AlertTriangle className="text-[#EF4444]" size={24} />
            </div>
            <h3 className="text-xl font-bold text-[#111827]">Limitations</h3>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-[#F9FAFB]">
              <XCircle
                className="text-[#EF4444] flex-shrink-0 mt-0.5"
                size={18}
              />
              <div>
                <p className="font-semibold text-[#111827] text-sm">
                  Noise Sensitivity
                </p>
                <p className="text-xs text-[#6B7280] mt-0.5">
                  Can overfit to noisy or mislabeled data in the training set
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-[#F9FAFB]">
              <XCircle
                className="text-[#EF4444] flex-shrink-0 mt-0.5"
                size={18}
              />
              <div>
                <p className="font-semibold text-[#111827] text-sm">
                  Hyperparameter Tuning
                </p>
                <p className="text-xs text-[#6B7280] mt-0.5">
                  Requires careful optimization of learning rate, tree depth,
                  and iterations
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-[#F9FAFB]">
              <XCircle
                className="text-[#EF4444] flex-shrink-0 mt-0.5"
                size={18}
              />
              <div>
                <p className="font-semibold text-[#111827] text-sm">
                  Lower Interpretability
                </p>
                <p className="text-xs text-[#6B7280] mt-0.5">
                  Complex ensemble structure makes it harder to explain
                  predictions
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-[#F9FAFB]">
              <XCircle
                className="text-[#EF4444] flex-shrink-0 mt-0.5"
                size={18}
              />
              <div>
                <p className="font-semibold text-[#111827] text-sm">
                  Training Time
                </p>
                <p className="text-xs text-[#6B7280] mt-0.5">
                  Sequential nature means longer training compared to parallel
                  algorithms
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Model Specifications */}
      <Card>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-[#F0F9FF] rounded-lg">
            <Activity className="text-[#38BDF8]" size={24} />
          </div>
          <h3 className="text-xl font-bold text-[#111827]">
            Model Specifications
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] text-center">
            <p className="text-xs text-[#9CA3AF] mb-1">Accuracy</p>
            <p className="text-2xl font-bold text-[#111827]">72.82%</p>
          </div>

          <div className="p-4 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] text-center">
            <p className="text-xs text-[#9CA3AF] mb-1">Training Samples</p>
            <p className="text-2xl font-bold text-[#111827]">67K+</p>
          </div>

          <div className="p-4 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] text-center">
            <p className="text-xs text-[#9CA3AF] mb-1">Features</p>
            <p className="text-2xl font-bold text-[#111827]">13</p>
          </div>

          <div className="p-4 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] text-center">
            <p className="text-xs text-[#9CA3AF] mb-1">Classes</p>
            <p className="text-2xl font-bold text-[#111827]">2</p>
          </div>
        </div>
      </Card>

      {/* Ethical Considerations */}
      <div className="p-6 rounded-xl bg-gradient-to-br from-[#FEF2F2] to-[#FEE2E2] border-2 border-[#EF4444]">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-white rounded-xl shadow-sm">
            <Shield className="text-[#EF4444]" size={28} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#111827] mb-3">
              Ethical Considerations & Responsible Use
            </h3>
            <div className="space-y-2 text-[#4B5563]">
              <p className="leading-relaxed">
                This algorithm provides{" "}
                <span className="font-semibold">probabilistic predictions</span>{" "}
                based on historical patterns and should be used only as a{" "}
                <span className="font-semibold">supporting decision tool</span>,
                never as the sole basis for medical decisions.
              </p>
              <p className="leading-relaxed">
                Final medical diagnoses, treatment plans, and healthcare
                decisions must always be made by qualified healthcare
                professionals who can consider the complete clinical picture,
                patient history, and individual circumstances.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
