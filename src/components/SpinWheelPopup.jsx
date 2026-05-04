"use client";

import { useEffect, useState } from "react";

export default function SpinWheelPopup() {
  const [visible, setVisible] = useState(false);
  const [spun, setSpun] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setVisible(true), 3500);
    return () => clearTimeout(id);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/50 p-4">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 text-center shadow-2xl dark:bg-slate-900">
        <button className="float-right text-slate-500" type="button" onClick={() => setVisible(false)}>Close</button>
        <div
          className={`mx-auto my-5 grid h-40 w-40 place-items-center rounded-full border-8 border-emerald-500 text-lg font-black text-emerald-900 transition duration-700 ${spun ? "rotate-180" : ""}`}
          style={{ background: "conic-gradient(from 0deg, #bbf7d0, #bfdbfe, #fde68a, #bbf7d0)" }}
        >
          {spun ? "15% OFF" : "SPIN"}
        </div>
        <button className="rounded-lg bg-emerald-600 px-5 py-3 font-bold text-white" type="button" onClick={() => setSpun(true)}>Try sample spin</button>
      </div>
    </div>
  );
}
