import type { MetadataRoute } from "next";
import { blogs } from "@/data/blogs";
import { services } from "@/data/services";
import { SITE_URL } from "@/lib/site";

// Bump when page content meaningfully changes.
const SITE_UPDATED = new Date("2026-11-20");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: SITE_UPDATED, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/services`, lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.9 },
    ...services.map((s) => ({
      url: `${SITE_URL}/services/${s.slug}`,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    { url: `${SITE_URL}/contact`, lastModified: SITE_UPDATED, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE_URL}/blog`, lastModified: SITE_UPDATED, changeFrequency: "weekly", priority: 0.7 },
    ...blogs.map((b) => ({
      url: `${SITE_URL}/blog/${b.slug}`,
      lastModified: new Date(b.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
