import { memo } from "react";

function ImagePlaceholder({ label = "Health image", height = 240, width = "100%", className = "" }) {
  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-lg border border-emerald-100 bg-[linear-gradient(135deg,#ecfdf5,#dbeafe_55%,#fff7ed)] text-center shadow-sm dark:border-slate-700 dark:bg-[linear-gradient(135deg,#052e2b,#172554_55%,#431407)] ${className}`}
      style={{ height, width }}
      role="img"
      aria-label={label}
    >
      <div className="px-5">
        <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-white/80 shadow-inner dark:bg-white/10" />
        <p className="text-sm font-bold uppercase tracking-wide text-emerald-800 dark:text-emerald-100">{label}</p>
      </div>
    </div>
  );
}

export default memo(ImagePlaceholder);

