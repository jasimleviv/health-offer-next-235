"use client";

import { useMemo, useState } from "react";
import ArticleGrid from "@/src/components/ArticleGrid";
import SEO from "@/src/components/SEO";
import SiteShell from "@/src/layouts/SiteShell";
import { getArticlesByCategory, healthCategories, offerTypes } from "@/src/data/fakeData";

const pageSize = 12;

export default function CategoryPage({ categorySlug }) {
  const [offerType, setOfferType] = useState("all");
  const [page, setPage] = useState(1);
  const category = healthCategories.find((item) => item.slug === categorySlug);
  const articles = useMemo(() => {
    const items = getArticlesByCategory(categorySlug);
    return offerType === "all" ? items : items.filter((item) => item.offerType === offerType);
  }, [categorySlug, offerType]);
  const totalPages = Math.max(1, Math.ceil(articles.length / pageSize));
  const pageArticles = articles.slice((page - 1) * pageSize, page * pageSize);

  return (
    <SiteShell>
      <SEO title={`${category?.label || "Category"} Health Offers`} description={`Browse ${category?.label || categorySlug} health CPA articles and offers.`} />
      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-6 rounded-lg bg-white p-6 shadow-sm dark:bg-slate-900">
          <p className="text-sm font-black uppercase tracking-wide text-emerald-600">Category hub</p>
          <h1 className="mt-2 text-3xl font-black">{category?.label || "Unknown Category"}</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">{articles.length} fake CPA pages available.</p>
        </div>
        <div className="mb-6 flex flex-wrap gap-2">
          {["all", ...offerTypes].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => {
                setOfferType(type);
                setPage(1);
              }}
              className={`rounded-full px-4 py-2 text-sm font-bold capitalize transition ${offerType === type ? "bg-emerald-600 text-white" : "bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"}`}
            >
              {type.replaceAll("-", " ")}
            </button>
          ))}
        </div>
        <ArticleGrid articles={pageArticles} />
        <div className="mt-8 flex items-center justify-center gap-3">
          <button className="rounded-lg border border-slate-200 px-4 py-2 font-bold disabled:opacity-40 dark:border-slate-700" disabled={page === 1} onClick={() => setPage((value) => value - 1)}>Previous</button>
          <span className="text-sm font-bold">Page {page} of {totalPages}</span>
          <button className="rounded-lg border border-slate-200 px-4 py-2 font-bold disabled:opacity-40 dark:border-slate-700" disabled={page === totalPages} onClick={() => setPage((value) => value + 1)}>Next</button>
        </div>
      </main>
    </SiteShell>
  );
}

