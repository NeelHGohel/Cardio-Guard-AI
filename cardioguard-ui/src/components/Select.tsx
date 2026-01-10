import React from "react";
import { ChevronDown, AlertCircle } from "lucide-react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    icon?: React.ReactNode;
    options: { value: string | number; label: string }[];
    error?: string;
    helperText?: string;
}

export default function Select({
    label,
    icon,
    options,
    value,
    error,
    helperText,
    className = "",
    ...props
}: SelectProps) {
    const [isFocused, setIsFocused] = React.useState(false);

    return (
        <div className={`w-full group ${className}`}>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5 ml-1">
                {label} {props.required && <span className="text-red-500">*</span>}
            </label>

            <div className="relative">
                <div
                    className={`
                        absolute inset-0 rounded-xl transition-all duration-200 pointer-events-none
                        ${isFocused ? "bg-indigo-50 border-indigo-500 ring-2 ring-indigo-500/20" : "bg-white border-slate-200 group-hover:border-slate-300"}
                        border
                    `}
                />

                <div className="relative flex items-center h-12 px-3">
                    {icon && (
                        <div className={`mr-3 transition-colors ${isFocused ? "text-indigo-600" : "text-slate-400"}`}>
                            {icon}
                        </div>
                    )}

                    <select
                        {...props}
                        value={value}
                        onFocus={(e) => {
                            setIsFocused(true);
                            props.onFocus?.(e);
                        }}
                        onBlur={(e) => {
                            setIsFocused(false);
                            props.onBlur?.(e);
                        }}
                        className="w-full h-full bg-transparent border-none outline-none text-slate-900 font-medium appearance-none z-10 cursor-pointer"
                    >
                        {options.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select>

                    <ChevronDown
                        size={18}
                        className={`absolute right-3 pointer-events-none transition-transform duration-200 ${isFocused ? "rotate-180 text-indigo-600" : "text-slate-400"}`}
                    />
                </div>
            </div>

            {helperText && !error && (
                <p className="mt-1.5 ml-1 text-xs text-slate-500">{helperText}</p>
            )}

            {error && (
                <div className="flex items-center mt-1.5 ml-1 text-red-500 animate-slide-up">
                    <AlertCircle size={14} className="mr-1.5" />
                    <span className="text-xs font-medium">{error}</span>
                </div>
            )}
        </div>
    );
}
