"use client";

import { Suspense, useMemo } from "react";
import Link from "next/link";
import ArticleGrid from "@/src/components/ArticleGrid";
import ImagePlaceholder from "@/src/components/ImagePlaceholder";
import OfferCard from "@/src/components/OfferCard";
import SEO from "@/src/components/SEO";
import TestimonialCarousel from "@/src/components/TestimonialCarousel";
import SiteShell from "@/src/layouts/SiteShell";
import { fakeData, healthCategories } from "@/src/data/fakeData";

export default function HomePage() {
  const featured = useMemo(() => fakeData.filter((item) => item.trending).slice(0, 6), []);

  return (
    <SiteShell>
      <SEO title="VitalCPA Health Offers" description="Massive Real health CPA content system with 500 generated pages." />
      <main>
        <section className="bg-white dark:bg-slate-900">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-wide text-emerald-600">Health CPA content engine</p>
              <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl">500 Real wellness pages with conversion-ready offer flows.</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                Browse category hubs, article funnels, review pages, comparison pages, and reusable offer widgets.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link className="rounded-lg bg-emerald-600 px-5 py-3 font-black text-white shadow-lg transition hover:bg-emerald-700" href="/category/weight-loss">Explore categories</Link>
                <Link className="rounded-lg border border-slate-200 px-5 py-3 font-black transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800" href="/offers/email-submit">View offers</Link>
              </div>
            </div>
            <ImagePlaceholder label="Modern health offer dashboard" height={390} />
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-4 py-8">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {healthCategories.map((category) => (
              <Link key={category.slug} className="rounded-lg border border-slate-200 bg-white p-4 font-bold shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 dark:border-slate-700 dark:bg-slate-900" href={`/category/${category.slug}`}>
                {category.label}
                <span className="mt-1 block text-sm font-semibold text-slate-500">{category.count} pages</span>
              </Link>
            ))}
          </div>
        </section>
        <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 lg:grid-cols-[1fr_360px]">
          <div>
            <h2 className="mb-5 text-2xl font-black">Trending health funnels</h2>
            <ArticleGrid articles={featured} />
          </div>
          <div className="space-y-5">
            <Suspense fallback={<div className="rounded-lg bg-white p-5 dark:bg-slate-900">Loading offer...</div>}>
              <OfferCard article={fakeData[0]} />
            </Suspense>
            <TestimonialCarousel />
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
