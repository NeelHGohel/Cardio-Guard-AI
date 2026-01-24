import React from "react";
import { Trophy, TrendingUp, Award, CheckCircle, BarChart3, Zap, Target } from "lucide-react";

type ModelRow = {
  model: string;
  normal: number;
  kfold: number;
  hyper: number;
};

const modelData: ModelRow[] = [
  {
    model: "Decision Tree",
    normal: 0.618724424,
    kfold: 0.614086,
    hyper: 0.725771035,
  },
  {
    model: "Gradient Boosting",
    normal: 0.727218285,
    kfold: 0.729653,
    hyper: 0.728116579,
  },
  {
    model: "K Neighbors Classifier",
    normal: 0.658598663,
    kfold: 0.663942,
    hyper: 0.705060385,
  },
  {
    model: "Logistic Regression",
    normal: 0.720530991,
    kfold: 0.723784,
    hyper: 0.720281465,
  },
];

export default function ModelComparePage() {
  // Find the best score for each column to highlight
  const bestNormal = Math.max(...modelData.map(m => m.normal));
  const bestKfold = Math.max(...modelData.map(m => m.kfold));
  const bestHyper = Math.max(...modelData.map(m => m.hyper));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 border border-indigo-200 mb-4">
            <BarChart3 className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-medium text-indigo-700">Model Evaluation</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            ML Model Performance Comparison
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive evaluation across multiple validation strategies to identify the optimal algorithm
          </p>
        </div>

        {/* Winner Announcement Card */}
        <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 border-2 border-emerald-300 shadow-xl">
          <div className="flex items-center gap-4 mb-3">
            <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Champion Model Selected</h3>
              <p className="text-sm text-emerald-700">Highest performing algorithm across all validation methods</p>
            </div>
          </div>
          <div className="pl-16">
            <p className="text-2xl font-bold text-emerald-600 mb-2">Gradient Boosting</p>
            <p className="text-sm text-gray-700">
              Achieved superior performance with <span className="font-semibold text-emerald-600">72.97%</span> accuracy and demonstrated exceptional consistency across validation techniques.
            </p>
          </div>
        </div>

        {/* Performance Table */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
          <div className="p-6 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-indigo-100">
                <Target className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Accuracy Metrics</h2>
                <p className="text-sm text-gray-600">Performance across three validation strategies</p>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-gray-700">Model</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-sm font-semibold text-gray-700">Normal</span>
                      <span className="text-xs text-gray-500 mt-1">Baseline</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-sm font-semibold text-gray-700">K-Fold CV</span>
                      <span className="text-xs text-gray-500 mt-1">Cross-Validation</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-sm font-semibold text-gray-700">Hyper-Tuned</span>
                      <span className="text-xs text-gray-500 mt-1">Optimized</span>
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody>
                {modelData.map((row, idx) => {
                  const isSelected = row.model === "Gradient Boosting";

                  return (
                    <tr
                      key={idx}
                      className={`border-b border-gray-100 transition-all duration-200 ${
                        isSelected
                          ? "bg-gradient-to-r from-emerald-50 to-green-50"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          {isSelected && (
                            <div className="p-1.5 rounded-lg bg-emerald-100">
                              <Award className="w-4 h-4 text-emerald-600" />
                            </div>
                          )}
                          <div>
                            <div className="flex items-center gap-2">
                              <span className={`font-semibold ${
                                isSelected ? "text-emerald-700" : "text-gray-900"
                              }`}>
                                {row.model}
                              </span>
                              {isSelected && (
                                <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-600 text-white">
                                  Selected
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex flex-col items-center">
                          <span className={`text-lg font-semibold ${
                            row.normal === bestNormal ? "text-indigo-600" : "text-gray-700"
                          }`}>
                            {(row.normal * 100).toFixed(2)}%
                          </span>
                          {row.normal === bestNormal && (
                            <span className="text-xs text-indigo-600 mt-1">Best</span>
                          )}
                        </div>
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex flex-col items-center">
                          <span className={`text-lg font-semibold ${
                            row.kfold === bestKfold ? "text-cyan-600" : "text-gray-700"
                          }`}>
                            {(row.kfold * 100).toFixed(2)}%
                          </span>
                          {row.kfold === bestKfold && (
                            <span className="text-xs text-cyan-600 mt-1">Best</span>
                          )}
                        </div>
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex flex-col items-center">
                          <span className={`text-lg font-semibold ${
                            row.hyper === bestHyper ? "text-purple-600" : "text-gray-700"
                          }`}>
                            {(row.hyper * 100).toFixed(2)}%
                          </span>
                          {row.hyper === bestHyper && (
                            <span className="text-xs text-purple-600 mt-1">Best</span>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Justification Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-indigo-500">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Highest Accuracy</h3>
            </div>
            <p className="text-sm text-gray-700">
              Consistently achieved top performance across all validation methods, demonstrating superior predictive capability.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-50 to-cyan-100 border border-cyan-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-cyan-500">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Strong Generalization</h3>
            </div>
            <p className="text-sm text-gray-700">
              K-Fold cross-validation results confirm the model generalizes exceptionally well to unseen data.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-purple-500">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Robust Tuning</h3>
            </div>
            <p className="text-sm text-gray-700">
              Maintained stable performance after hyper-parameter optimization, indicating resilience and reliability.
            </p>
          </div>
        </div>

        {/* Technical Details */}
        <div className="mt-8 p-6 rounded-2xl bg-white border border-gray-200 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <div className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
            Selection Methodology
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <p className="font-medium text-gray-900 mb-2">Evaluation Criteria:</p>
              <ul className="space-y-1 text-gray-600">
                <li>• Baseline accuracy on holdout set</li>
                <li>• 5-fold cross-validation consistency</li>
                <li>• Post-optimization performance</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-gray-900 mb-2">Decision Factors:</p>
              <ul className="space-y-1 text-gray-600">
                <li>• Minimal variance across folds</li>
                <li>• Resistance to overfitting</li>
                <li>• Production deployment stability</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}