import React from "react";

export default function Card({
  title,
  children,
  className = "",
  action,
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className={`card-premium p-6 ${className}`}>
      {(title || action) && (
        <div className="flex items-center justify-between mb-6">
          {title && (
            <h3 className="text-lg font-bold text-slate-800 tracking-tight">{title}</h3>
          )}
          {action && <div>{action}</div>}
        </div>
      )}
      <div className="relative">{children}</div>
    </div>
  );
}
