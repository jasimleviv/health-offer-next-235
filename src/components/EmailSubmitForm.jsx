"use client";

import { useState } from "react";

export default function EmailSubmitForm({ buttonText = "Send my guide" }) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return <p className="rounded-lg bg-emerald-50 p-4 text-sm font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-100">Guide reserved. Check the next sample step.</p>;
  }

  return (
    <form
      className="grid gap-3 sm:grid-cols-[1fr_auto]"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <input className="h-12 rounded-lg border border-slate-200 px-4 outline-none ring-emerald-500 focus:ring-2 dark:border-slate-700 dark:bg-slate-950" type="email" placeholder="Email address" required />
      <button className="h-12 rounded-lg bg-emerald-600 px-5 font-bold text-white shadow-md transition hover:bg-emerald-700" type="submit">{buttonText}</button>
    </form>
  );
}

