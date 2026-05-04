"use client";

import Link from "next/link";
import DiscountReveal from "@/src/components/DiscountReveal";
import EmailSubmitForm from "@/src/components/EmailSubmitForm";
import OfferCard from "@/src/components/OfferCard";
import SEO from "@/src/components/SEO";
import ZipSubmitForm from "@/src/components/ZipSubmitForm";
import SiteShell from "@/src/layouts/SiteShell";
import { fakeData, getArticlesByOfferType, offerTypes } from "@/src/data/fakeData";

export default function OffersHubPage({ offerType = "email-submit" }) {
  const articles = getArticlesByOfferType(offerType);

  return (
    <SiteShell>
      <SEO title={`${offerType.replaceAll("-", " ")} Health Offers`} description="Health CPA offer hub with reusable email, ZIP, giveaway, and discount modules." />
      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-7 rounded-lg bg-white p-6 shadow-sm dark:bg-slate-900">
          <p className="text-sm font-black uppercase tracking-wide text-emerald-600">Offers hub</p>
          <h1 className="mt-2 text-3xl font-black capitalize">{offerType.replaceAll("-", " ")} offers</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">{articles.length} matching sample pages.</p>
        </div>
        <div className="mb-6 flex flex-wrap gap-2">
          {offerTypes.map((type) => (
            <Link key={type} className={`rounded-full px-4 py-2 text-sm font-bold capitalize ${type === offerType ? "bg-emerald-600 text-white" : "bg-white text-slate-600 dark:bg-slate-900 dark:text-slate-300"}`} href={`/offers/${type}`}>
              {type.replaceAll("-", " ")}
            </Link>
          ))}
        </div>
        <div className="grid gap-5 lg:grid-cols-4">
          <OfferCard offerType="email-submit" article={fakeData[0]} />
          <div className="rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
            <h2 className="mb-4 text-xl font-black">ZIP submit</h2>
            <ZipSubmitForm />
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
            <h2 className="mb-4 text-xl font-black">Win offer</h2>
            <Link className="block rounded-lg bg-violet-600 px-5 py-3 text-center font-bold text-white" href="/offers/win">Enter sample draw</Link>
          </div>
          <DiscountReveal />
        </div>
        <section className="mt-8 rounded-lg bg-white p-6 shadow-sm dark:bg-slate-900">
          <h2 className="mb-4 text-2xl font-black">Email submit offers</h2>
          <EmailSubmitForm />
        </section>
      </main>
    </SiteShell>
  );
}
