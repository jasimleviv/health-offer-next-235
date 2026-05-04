"use client";

import { useTheme } from "@/src/context/ThemeContext";

const modeSequence = ["system", "dark", "light"];

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const nextTheme = modeSequence[(modeSequence.indexOf(theme) + 1) % modeSequence.length];

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme)}
      aria-label={`Theme mode: ${theme}. Switch to ${nextTheme}.`}
      title={`Theme: ${theme}`}
      className="fixed bottom-4 left-4 z-50 grid h-9 w-9 place-items-center rounded-full border border-slate-300 bg-white/70 text-slate-800 opacity-50 shadow-lg backdrop-blur transition hover:opacity-90 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:border-slate-600 dark:bg-slate-950/70 dark:text-slate-100"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.9 13.5A8.5 8.5 0 1 1 10.5 3.1 7 7 0 0 0 20.9 13.5Z" />
      </svg>
    </button>
  );
}
