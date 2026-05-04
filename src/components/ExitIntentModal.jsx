"use client";

import { useEffect, useState } from "react";
import EmailSubmitForm from "./EmailSubmitForm";

export default function ExitIntentModal() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onMouseLeave = (event) => {
      if (event.clientY <= 0 && !dismissed) setVisible(true);
    };
    document.addEventListener("mouseleave", onMouseLeave);
    return () => document.removeEventListener("mouseleave", onMouseLeave);
  }, [dismissed]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/50 p-4">
      <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-2xl dark:bg-slate-900">
        <button className="float-right text-sm font-semibold text-slate-500" type="button" onClick={() => { setVisible(false); setDismissed(true); }}>Close</button>
        <h2 className="mb-2 text-2xl font-black">Before you go</h2>
        <p className="mb-5 text-slate-600 dark:text-slate-300">Get the sample health offer checklist by email.</p>
        <EmailSubmitForm />
      </div>
    </div>
  );
}

