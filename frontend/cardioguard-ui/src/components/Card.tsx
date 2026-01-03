export default function Card({
  title,
  children,
  className = "",
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md ${className}`}
    >
      {title && (
        <h3 className="text-lg font-semibold text-[#111827] mb-4">{title}</h3>
      )}
      {children}
    </div>
  );
}
