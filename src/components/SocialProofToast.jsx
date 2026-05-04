"use client";

import { useEffect, useState } from "react";

const names = ["Nina", "Chris", "Amara", "Ben", "Riley", "Sam"];
const actions = ["claimed a guide", "checked ZIP availability", "revealed a discount", "entered a wellness giveaway"];

export default function SocialProofToast() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((value) => value + 1);
        setVisible(true);
      }, 350);
    }, 6500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`fixed bottom-20 left-4 z-20 max-w-xs rounded-lg border border-slate-200 bg-white p-3 text-sm shadow-xl transition dark:border-slate-700 dark:bg-slate-900 ${visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}>
      <b>{names[index % names.length]}</b> just {actions[index % actions.length]}.
      <span className="ml-2 text-slate-500">Live demo</span>
    </div>
  );
}

