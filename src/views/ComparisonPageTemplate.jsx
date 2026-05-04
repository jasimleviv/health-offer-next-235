"use client";

import Link from "next/link";
import OfferCard from "@/src/components/OfferCard";
import SEO from "@/src/components/SEO";
import SiteShell from "@/src/layouts/SiteShell";
import { fakeData } from "@/src/data/fakeData";

export default function ComparisonPageTemplate({ categorySlug = "weight-loss" }) {
  const items = fakeData.filter((item) => item.category === categorySlug).slice(0, 4);

  return (
    <SiteShell>
      <SEO title={`${categorySlug.replaceAll("-", " ")} Offer Comparison`} description="Comparison template for fake health CPA offers." />
      <main className="mx-auto max-w-7xl px-4 py-8">
        <h1 className="mb-6 text-4xl font-black capitalize">{categorySlug.replaceAll("-", " ")} comparison</h1>
        <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
          <table className="w-full min-w-[760px] text-left">
            <thead className="bg-slate-100 dark:bg-slate-800">
              <tr>
                <th className="p-4">Offer</th>
                <th className="p-4">Type</th>
                <th className="p-4">Rating</th>
                <th className="p-4">Popularity</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-t border-slate-200 dark:border-slate-700">
                  <td className="p-4 font-bold">{item.title}</td>
                  <td className="p-4 capitalize">{item.offerType.replaceAll("-", " ")}</td>
                  <td className="p-4">{item.rating}</td>
                  <td className="p-4">{item.popularityScore}%</td>
                  <td className="p-4"><Link className="font-bold text-emerald-600" href={`/article/${item.slug}`}>Read</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {items.slice(0, 2).map((item) => <OfferCard key={item.id} article={item} />)}
        </div>
      </main>
    </SiteShell>
  );
}
