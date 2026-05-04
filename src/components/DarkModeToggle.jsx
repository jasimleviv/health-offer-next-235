"use client";

import { useTheme } from "@/src/context/ThemeContext";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="inline-flex rounded-full border border-slate-200 bg-white p-1 text-xs font-semibold shadow-sm dark:border-slate-700 dark:bg-slate-900">
      {["light", "dark", "system"].map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setTheme(option)}
          className={`rounded-full px-3 py-1.5 capitalize transition ${
            theme === option
              ? "bg-emerald-600 text-white shadow"
              : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

