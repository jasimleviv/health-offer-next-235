"use client";

import ImagePlaceholder from "@/src/components/ImagePlaceholder";
import OfferCard from "@/src/components/OfferCard";
import SEO from "@/src/components/SEO";
import SiteShell from "@/src/layouts/SiteShell";
import { fakeData } from "@/src/data/fakeData";

export default function ReviewPageTemplate({ slug }) {
  const article = fakeData.find((item) => item.slug === slug) || fakeData[0];

  return (
    <SiteShell>
      <SEO title={`${article.title} Review`} description={`Review template for ${article.title}.`} />
      <main className="mx-auto grid max-w-7xl gap-8 px-4 py-8 lg:grid-cols-[1fr_360px]">
        <section className="rounded-lg bg-white p-6 shadow-sm dark:bg-slate-900">
          <p className="text-sm font-black uppercase tracking-wide text-emerald-600">Review template</p>
          <h1 className="mt-2 text-4xl font-black">{article.title} Review</h1>
          <ImagePlaceholder className="mt-6" label="Review hero" height={330} />
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-emerald-50 p-4 dark:bg-emerald-950"><b>Rating</b><span className="block text-2xl font-black">{article.rating}</span></div>
            <div className="rounded-lg bg-sky-50 p-4 dark:bg-sky-950"><b>Popularity</b><span className="block text-2xl font-black">{article.popularityScore}%</span></div>
            <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-950"><b>Offer</b><span className="block text-lg font-black capitalize">{article.offerType.replaceAll("-", " ")}</span></div>
          </div>
          <p className="mt-6 text-lg leading-8 text-slate-700 dark:text-slate-300">{article.description}</p>
        </section>
        <OfferCard article={article} />
      </main>
    </SiteShell>
  );
}

