import React from "react";
import { AlertCircle } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
    icon?: React.ReactNode;
    unit?: string;
    helperText?: string;
}

export default function Input({
    label,
    error,
    icon,
    unit,
    value,
    helperText,
    className = "",
    ...props
}: InputProps) {
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

                    <input
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
                        className="w-full h-full bg-transparent border-none outline-none text-slate-900 font-medium placeholder-slate-400 z-10"
                    />

                    {unit && (
                        <span className="text-sm font-semibold text-slate-400 pl-3 border-l border-slate-100 ml-2 h-6 flex items-center">
                            {unit}
                        </span>
                    )}
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
