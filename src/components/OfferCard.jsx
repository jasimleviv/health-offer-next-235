import { memo } from "react";
import Link from "next/link";
import CountdownTimer from "./CountdownTimer";
import DiscountReveal from "./DiscountReveal";
import EmailSubmitForm from "./EmailSubmitForm";
import ZipSubmitForm from "./ZipSubmitForm";

function OfferCard({ article, offerType, compact = false }) {
  const type = offerType || article?.offerType || "email-submit";
  const title = article?.title || "Featured Health Offer";

  return (
    <section className="rounded-lg border border-emerald-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-wide text-emerald-600">{type.replaceAll("-", " ")}</p>
          <h3 className="mt-1 text-xl font-black text-slate-950 dark:text-white">{title}</h3>
        </div>
        {!compact && <CountdownTimer minutes={12} />}
      </div>
      <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
        Compare this fake CPA placement with low-friction entry, clear benefits, and a mobile-first action.
      </p>
      {type === "zip-submit" && <ZipSubmitForm />}
      {type === "discount-purchase" && <DiscountReveal />}
      {type === "win" && (
        <Link className="block rounded-lg bg-violet-600 px-5 py-3 text-center font-bold text-white transition hover:bg-violet-700" href="/offers/win">
          Enter sample giveaway
        </Link>
      )}
      {type === "email-submit" && <EmailSubmitForm buttonText={article?.ctaText || "Get the free guide"} />}
    </section>
  );
}

export default memo(OfferCard);
