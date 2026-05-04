"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext(null);

const getSystemTheme = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() =>
    typeof window === "undefined" ? "system" : localStorage.getItem("health-theme") || "system",
  );
  const [systemTheme, setSystemTheme] = useState(() => getSystemTheme());
  const resolvedTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const updateSystemTheme = () => setSystemTheme(getSystemTheme());
    media.addEventListener("change", updateSystemTheme);
    return () => media.removeEventListener("change", updateSystemTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
  }, [resolvedTheme]);

  const updateTheme = (nextTheme) => {
    localStorage.setItem("health-theme", nextTheme);
    setTheme(nextTheme);
  };

  const value = useMemo(() => ({ theme, resolvedTheme, setTheme: updateTheme }), [theme, resolvedTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return context;
}
