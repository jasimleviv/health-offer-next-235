"use client";

import { useState } from "react";
import Link from "next/link";
import DarkModeToggle from "@/src/components/DarkModeToggle";
import SocialProofToast from "@/src/components/SocialProofToast";
import { healthCategories } from "@/src/data/fakeData";

export default function SiteShell({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    ...healthCategories.slice(0, 5).map((category) => ({
      href: `/category/${category.slug}`,
      label: category.label,
    })),
    { href: "/offers/email-submit", label: "Offers" },
    { href: "/admin", label: "Admin" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
      <header className="sticky top-0 z-30 border-b border-emerald-100 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <Link className="text-lg font-black text-emerald-700 dark:text-emerald-300" href="/">
            VitalCPA
          </Link>
          <nav className="hidden items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-300 lg:flex">
            {navLinks.map((link) => (
              <Link key={link.href} className="hover:text-emerald-600" href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800 lg:hidden"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <path d="M6 6 18 18" />
                  <path d="m18 6-12 12" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-emerald-100 px-4 py-3 text-sm font-bold text-slate-700 dark:border-slate-800 dark:text-slate-200 lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} className="rounded-lg px-3 py-2 hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-slate-800 dark:hover:text-emerald-300" href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>
      <DarkModeToggle />
      {children}
      <footer className="border-t border-slate-200 bg-white px-4 py-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
        Real health CPA demo data. Informational layout only.
      </footer>
      <SocialProofToast />
    </div>
  );
}
