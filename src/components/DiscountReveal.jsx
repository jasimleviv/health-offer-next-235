"use client";

import { useState } from "react";

export default function DiscountReveal({ label = "Reveal 35% sample discount" }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950">
      <button className="w-full rounded-lg bg-amber-500 px-5 py-3 font-bold text-white transition hover:bg-amber-600" type="button" onClick={() => setOpen(true)}>
        {open ? "CPA35-WELLNESS" : label}
      </button>
      {open && <p className="mt-3 text-sm font-semibold text-amber-900 dark:text-amber-100">Use this fake code in the demo checkout flow.</p>}
    </div>
  );
}

