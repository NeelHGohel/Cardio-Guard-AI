"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import Card from "./../../components/Card";
import {
  BarChart3,
  TrendingUp,
  Activity,
  Heart,
  Droplets,
  Scale,
  AlertCircle,
} from "lucide-react";

const factors = [
  { name: "Blood Pressure", value: 85, color: "#EF4444", icon: Activity },
  { name: "Cholesterol", value: 70, color: "#F59E0B", icon: Droplets },
  { name: "Glucose", value: 60, color: "#4F46E5", icon: Heart },
  { name: "BMI", value: 65, color: "#22C55E", icon: Scale },
  { name: "Lifestyle", value: 50, color: "#38BDF8", icon: TrendingUp },
];

export default function InsightsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-blue-50 rounded-lg">
            <BarChart3 className="text-blue-400" size={28} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            Health Risk Factors Analysis
          </h2>
        </div>
        <p className="text-gray-600">
          Indicative contribution of different health factors toward
          cardiovascular risk based on dataset patterns
        </p>
      </div>

      {/* Chart Card */}
      <Card>
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Risk Factor Contribution
          </h3>
          <p className="text-sm text-gray-600">
            Relative importance of various health indicators in predicting
            cardiovascular risk
          </p>
        </div>

        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={factors}
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
          >
            <XAxis
              dataKey="name"
              angle={-45}
              textAnchor="end"
              height={100}
              tick={{ fill: "#6B7280", fontSize: 12 }}
            />
            <YAxis
              tick={{ fill: "#6B7280", fontSize: 12 }}
              label={{
                value: "Contribution Score",
                angle: -90,
                position: "insideLeft",
                style: { fill: "#6B7280" },
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              }}
              cursor={{ fill: "#F9FAFB" }}
            />
            <Bar dataKey="value" radius={[8, 8, 0, 0]}>
              {factors.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        <div className="mt-6 p-4 rounded-lg bg-amber-50 border border-amber-200">
          <div className="flex items-start gap-2">
            <AlertCircle
              className="text-amber-500 flex-shrink-0 mt-0.5"
              size={18}
            />
            <p className="text-sm text-amber-900">
              These values are indicative and based on statistical patterns in
              the training dataset. Individual risk factors may vary
              significantly between patients.
            </p>
          </div>
        </div>
      </Card>

      {/* Factor Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {factors.map((factor) => {
          const Icon = factor.icon;
          return (
            <Card key={factor.name}>
              <div className="flex items-start justify-between mb-3">
                <div
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: `${factor.color}15` }}
                >
                  <Icon style={{ color: factor.color }} size={24} />
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">
                    {factor.value}
                  </p>
                  <p className="text-xs text-gray-400">Importance Score</p>
                </div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">
                {factor.name}
              </h4>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div
                  className="h-2 rounded-full transition-all duration-500"
                  style={{
                    width: `${factor.value}%`,
                    backgroundColor: factor.color,
                  }}
                />
              </div>
            </Card>
          );
        })}
      </div>

      {/* Detailed Explanations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-red-50 rounded-lg">
              <Activity className="text-red-500" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Blood Pressure</h3>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            High blood pressure (hypertension) is the strongest predictor of
            cardiovascular risk in this model, contributing approximately 85% to
            overall risk assessment.
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span className="px-2 py-1 bg-red-50 text-red-500 rounded-md font-medium">
              Highest Impact
            </span>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-amber-100 rounded-lg">
              <Droplets className="text-amber-500" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900">
              Cholesterol Levels
            </h3>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            Serum cholesterol plays a significant role in cardiovascular health.
            Elevated levels contribute approximately 70% to risk prediction in
            the model.
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span className="px-2 py-1 bg-amber-100 text-amber-500 rounded-md font-medium">
              High Impact
            </span>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-50 rounded-lg">
              <Scale className="text-green-600" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900">
              Body Mass Index (BMI)
            </h3>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            BMI serves as an indicator of body composition and obesity. It
            contributes approximately 65% to cardiovascular risk assessment in
            the prediction model.
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span className="px-2 py-1 bg-green-50 text-green-600 rounded-md font-medium">
              Moderate Impact
            </span>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-50 rounded-lg">
              <Heart className="text-indigo-600" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Blood Glucose</h3>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            Fasting blood sugar levels affect heart health. Glucose contributes
            around 60% to risk assessment, with diabetes being a major
            cardiovascular risk factor.
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded-md font-medium">
              Moderate Impact
            </span>
          </div>
        </Card>
      </div>

      {/* Key Takeaways */}
      <Card>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-50 rounded-lg">
            <TrendingUp className="text-blue-400" size={24} />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Key Takeaways</h3>
        </div>

        <div className="space-y-3">
          <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50">
            <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
              1
            </div>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-900">
                Blood pressure
              </span>{" "}
              is the most critical factor in predicting cardiovascular risk in
              this dataset.
            </p>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50">
            <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
              2
            </div>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-900">
                Cholesterol and BMI
              </span>{" "}
              are also significant contributors that should be monitored
              regularly.
            </p>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50">
            <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
              3
            </div>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-900">
                Lifestyle factors
              </span>
              , while having lower individual scores, compound with other risk
              factors.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
