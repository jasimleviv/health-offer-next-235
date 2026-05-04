"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/src/data/fakeData";

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((value) => (value + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);

  const testimonial = testimonials[index];

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <p className="text-sm font-black uppercase tracking-wide text-emerald-600">Reader signal</p>
      <p className="mt-3 text-lg font-bold leading-7">&quot;{testimonial.text}&quot;</p>
      <div className="mt-4 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
        <span>{testimonial.name}</span>
        <span>{testimonial.result}</span>
      </div>
    </div>
  );
}
