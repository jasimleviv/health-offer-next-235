"use client";

import Link from "next/link";
import DarkModeToggle from "@/src/components/DarkModeToggle";
import SocialProofToast from "@/src/components/SocialProofToast";
import { healthCategories } from "@/src/data/fakeData";

export default function SiteShell({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
      <header className="sticky top-0 z-30 border-b border-emerald-100 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <Link className="text-lg font-black text-emerald-700 dark:text-emerald-300" href="/">
            VitalCPA
          </Link>
          <nav className="hidden items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-300 lg:flex">
            {healthCategories.slice(0, 5).map((category) => (
              <Link key={category.slug} className="hover:text-emerald-600" href={`/category/${category.slug}`}>
                {category.label}
              </Link>
            ))}
            <Link className="hover:text-emerald-600" href="/offers/email-submit">Offers</Link>
            <Link className="hover:text-emerald-600" href="/admin">Admin</Link>
          </nav>
          <DarkModeToggle />
        </div>
      </header>
      {children}
      <footer className="border-t border-slate-200 bg-white px-4 py-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
        Fake health CPA demo data. Informational layout only.
      </footer>
      <SocialProofToast />
    </div>
  );
}
