"use client";

import { lazy, Suspense, useMemo } from "react";
import Link from "next/link";
import ArticleGrid from "@/src/components/ArticleGrid";
import ExitIntentModal from "@/src/components/ExitIntentModal";
import ImagePlaceholder from "@/src/components/ImagePlaceholder";
import OfferCard from "@/src/components/OfferCard";
import SEO from "@/src/components/SEO";
import StickyBottomCTA from "@/src/components/StickyBottomCTA";
import TestimonialCarousel from "@/src/components/TestimonialCarousel";
import SiteShell from "@/src/layouts/SiteShell";
import { getArticleBySlug, getRelatedArticles } from "@/src/data/fakeData";

const SpinWheelPopup = lazy(() => import("@/src/components/SpinWheelPopup"));

export default function ArticlePage({ slug }) {
  const article = useMemo(() => getArticleBySlug(slug), [slug]);

  if (!article) {
    return (
      <SiteShell>
        <main className="mx-auto max-w-3xl px-4 py-16">
          <h1 className="text-3xl font-black">Article not found</h1>
          <Link className="mt-5 inline-block rounded-lg bg-emerald-600 px-5 py-3 font-bold text-white" href="/">Return home</Link>
        </main>
      </SiteShell>
    );
  }

  const related = getRelatedArticles(article);

  return (
    <SiteShell>
      <SEO {...article.seo} canonical={`/article/${article.slug}`} />
      <main className="pb-20 md:pb-0">
        <article className="mx-auto grid max-w-7xl gap-8 px-4 py-8 lg:grid-cols-[1fr_340px]">
          <div>
            <div className="mb-6">
              <p className="text-sm font-black uppercase tracking-wide text-emerald-600">{article.category.replaceAll("-", " ")} / {article.offerType.replaceAll("-", " ")}</p>
              <h1 className="mt-3 text-4xl font-black leading-tight">{article.title}</h1>
              <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">{article.description}</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm font-bold text-slate-500">
                <span>{article.author}</span>
                <span>{article.publishDate}</span>
                <span>{article.rating} rating</span>
                {article.trending && <span className="text-rose-600">Trending now</span>}
              </div>
            </div>
            <ImagePlaceholder label={article.title} height={360} />
            <div className="mt-8 space-y-8">
              {article.contentBlocks.map((block, index) => (
                <div key={block.heading}>
                  <section className="rounded-lg bg-white p-6 shadow-sm dark:bg-slate-900">
                    <h2 className="text-2xl font-black">{block.heading}</h2>
                    <p className="mt-3 text-lg leading-8 text-slate-700 dark:text-slate-300">{block.body}</p>
                    {index === 1 && (
                      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                        {article.benefits.map((benefit) => (
                          <li key={benefit} className="rounded-lg bg-emerald-50 p-3 font-semibold text-emerald-900 dark:bg-emerald-950 dark:text-emerald-100">{benefit}</li>
                        ))}
                      </ul>
                    )}
                  </section>
                  {(index + 1) % 2 === 0 && <div className="mt-8"><OfferCard article={article} /></div>}
                </div>
              ))}
              <section className="rounded-lg bg-white p-6 shadow-sm dark:bg-slate-900">
                <h2 className="text-2xl font-black">FAQs</h2>
                <div className="mt-4 divide-y divide-slate-200 dark:divide-slate-700">
                  {article.faq.map((item) => (
                    <details key={item.question} className="py-4">
                      <summary className="cursor-pointer font-bold">{item.question}</summary>
                      <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{item.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            </div>
          </div>
          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <OfferCard article={article} compact />
            <TestimonialCarousel />
          </aside>
        </article>
        <section className="mx-auto max-w-7xl px-4 py-10">
          <h2 className="mb-5 text-2xl font-black">Related posts</h2>
          <ArticleGrid articles={related} />
        </section>
      </main>
      <StickyBottomCTA text={article.ctaText} href={`/offers/${article.offerType}`} />
      <ExitIntentModal />
      <Suspense fallback={null}>
        <SpinWheelPopup />
      </Suspense>
    </SiteShell>
  );
}
