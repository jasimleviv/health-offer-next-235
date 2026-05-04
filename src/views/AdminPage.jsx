"use client";

import SEO from "@/src/components/SEO";
import SiteShell from "@/src/layouts/SiteShell";
import { fakeData, offerTypes } from "@/src/data/fakeData";

export default function AdminPage() {
  const conversions = 18472;
  const leads = 64219;
  const bars = offerTypes.map((type, index) => ({
    type,
    value: 54 + index * 11,
    pages: fakeData.filter((item) => item.offerType === type).length,
  }));

  return (
    <SiteShell>
      <SEO title="Admin Mock Panel" description="Fake health CPA dashboard." />
      <main className="mx-auto max-w-7xl px-4 py-8">
        <h1 className="mb-6 text-4xl font-black">Admin mock panel</h1>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-slate-900"><p className="text-sm font-bold text-slate-500">Total pages</p><b className="text-4xl">{fakeData.length}</b></div>
          <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-slate-900"><p className="text-sm font-bold text-slate-500">Fake conversions</p><b className="text-4xl">{conversions.toLocaleString()}</b></div>
          <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-slate-900"><p className="text-sm font-bold text-slate-500">Fake leads</p><b className="text-4xl">{leads.toLocaleString()}</b></div>
        </div>
        <section className="mt-8 rounded-lg bg-white p-6 shadow-sm dark:bg-slate-900">
          <h2 className="mb-5 text-2xl font-black">Offer performance</h2>
          <div className="space-y-4">
            {bars.map((bar) => (
              <div key={bar.type}>
                <div className="mb-2 flex justify-between text-sm font-bold capitalize">
                  <span>{bar.type.replaceAll("-", " ")}</span>
                  <span>{bar.pages} pages / {bar.value}% EPC index</span>
                </div>
                <div className="h-4 rounded-full bg-slate-100 dark:bg-slate-800">
                  <div className="h-4 rounded-full bg-emerald-500" style={{ width: `${bar.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}

