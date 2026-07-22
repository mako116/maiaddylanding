import { useEffect } from "react";

interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
}

function setMeta(property: string, content: string, isName = false) {
  const attr = isName ? "name" : "property";
  let el = document.querySelector(`meta[${attr}="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function usePageMeta(meta: PageMeta) {
  useEffect(() => {
    document.title = meta.title;

    // Description
    setMeta("description", meta.description, true);

    // Canonical
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", meta.canonical);

    // OG tags
    setMeta("og:type", "website");
    setMeta("og:site_name", "Maiaddy");
    setMeta("og:title", meta.ogTitle ?? meta.title);
    setMeta("og:description", meta.ogDescription ?? meta.description);
    setMeta("og:url", meta.ogUrl ?? meta.canonical);
    setMeta(
      "og:image",
      meta.ogImage ?? "https://maiaddy.com/assets/og-image.png"
    );

    // Twitter
    setMeta("twitter:card", "summary_large_image", true);
    if (meta.twitterTitle) setMeta("twitter:title", meta.twitterTitle, true);
    if (meta.twitterDescription)
      setMeta("twitter:description", meta.twitterDescription, true);
  }, [meta]);
}
