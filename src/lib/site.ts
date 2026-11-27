/** Canonical origin. Every canonical, sitemap and OG URL is built from this. */
export const SITE_URL = "https://www.aethyl.com";

export const SITE_NAME = "Aethyl Global";

export const TAGLINE = "Every service a growing business needs. One partner.";

/** One-sentence company description, reused in metadata and structured data. */
export const COMPANY_DESCRIPTION =
  "Aethyl Global is a business services company helping growing businesses with software, marketing, accounting and tax, serving clients across the Middle East, India, Europe and the Americas.";

export const AREA_SERVED = ["Middle East", "India", "Europe", "North America", "South America"];

/** Email is the only contact channel shown on the site. */
export const CONTACT = {
  email: "aethylglobal@gmail.com",
  regions: "Middle East · India · Europe · Americas",
  linkedin: "https://www.linkedin.com/company/aethyl",
  x: "https://x.com/aethylglobal",
} as const;

export const AUDIT_CTA = {
  label: "Book a free 30-minute call",
  short: "Free 30-min call",
  href: "/contact",
} as const;

export const SAME_AS = [
  "https://www.linkedin.com/company/aethyl",
  "https://x.com/aethylglobal",
  "https://github.com/aethyl-global",
];
