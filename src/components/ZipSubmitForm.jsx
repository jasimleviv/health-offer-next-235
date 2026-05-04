"use client";

import { useState } from "react";

export default function ZipSubmitForm({ buttonText = "Check my area" }) {
  const [zip, setZip] = useState("");
  const [done, setDone] = useState(false);

  return (
    <form
      className="grid gap-3 sm:grid-cols-[150px_1fr]"
      onSubmit={(event) => {
        event.preventDefault();
        setDone(true);
      }}
    >
      <input className="h-12 rounded-lg border border-slate-200 px-4 outline-none ring-emerald-500 focus:ring-2 dark:border-slate-700 dark:bg-slate-950" value={zip} onChange={(event) => setZip(event.target.value.replace(/\D/g, "").slice(0, 5))} placeholder="ZIP code" required />
      <button className="h-12 rounded-lg bg-teal-600 px-5 font-bold text-white shadow-md transition hover:bg-teal-700" type="submit">{done ? "Sample matches found" : buttonText}</button>
    </form>
  );
}

