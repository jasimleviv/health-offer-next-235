import Link from "next/link";

export default function StickyBottomCTA({ text = "View health offer", href = "/offers/email-submit" }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-emerald-100 bg-white/95 p-3 shadow-2xl backdrop-blur dark:border-slate-800 dark:bg-slate-950/95 md:hidden">
      <Link className="flex h-12 items-center justify-center rounded-lg bg-emerald-600 px-5 text-sm font-black text-white shadow-md" href={href}>
        {text}
      </Link>
    </div>
  );
}
