"use client";

import { useEffect } from "react";

const upsertMeta = (selector, attrs) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, value));
};

export default function SEO({ title, description, canonical, ogImage }) {
  useEffect(() => {
    const url = canonical || window.location.href;
    document.title = title || "Health CPA Offers";
    upsertMeta('meta[name="description"]', { name: "description", content: description || "" });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title || "" });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: description || "" });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: url });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: ogImage || "/globe.svg" });

    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", url);
  }, [title, description, canonical, ogImage]);

  return null;
}

