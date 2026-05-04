"use client";

import { memo, useEffect, useState } from "react";

function CountdownTimer({ minutes = 18 }) {
  const [secondsLeft, setSecondsLeft] = useState(minutes * 60);

  useEffect(() => {
    const id = setInterval(() => setSecondsLeft((value) => Math.max(0, value - 1)), 1000);
    return () => clearInterval(id);
  }, []);

  const minutesLeft = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const seconds = String(secondsLeft % 60).padStart(2, "0");

  return (
    <div className="rounded-full bg-rose-50 px-4 py-2 text-sm font-bold text-rose-700 dark:bg-rose-950 dark:text-rose-100">
      Offer window: {minutesLeft}:{seconds}
    </div>
  );
}

export default memo(CountdownTimer);

