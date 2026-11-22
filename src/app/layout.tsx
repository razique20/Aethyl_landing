import type { Metadata, Viewport } from "next";
import { Figtree, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SoundToggle from "@/components/SoundToggle";
import RevealObserver from "@/components/RevealObserver";
import JsonLd from "@/components/JsonLd";
import { CONTACT, SAME_AS, SITE_NAME, SITE_URL } from "@/lib/site";

const figtree = Figtree({ variable: "--font-figtree", subsets: ["latin"] });
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

// Defaults only. Every page sets its own title, description and canonical
// (alternates.canonical) — never put a canonical here, or every child page
// inherits the homepage URL and Google treats it as a duplicate.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Custom Dashboards, CRM, Mobile Apps & Automation | Aethyl Global",
    template: "%s | Aethyl Global",
  },
  description:
    "Aethyl Global is a software studio building custom dashboards, CRM systems, mobile apps and automation for growing businesses around the world.",
  applicationName: SITE_NAME,
  verification: {
    google: "fKp-8EqALDkxPwe7Ds1cgwg6BGEWOoUNfEtkpCrS0-I",
  },
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  email: CONTACT.email,
  sameAs: SAME_AS,
  description:
    "Software studio building custom dashboards, CRM systems, mobile apps and automation for growing businesses worldwide.",
  areaServed: ["Middle East", "India", "Europe", "North America", "South America"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${instrumentSerif.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Marks JS as available so scroll-reveal can hide content until it animates in. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <SoundToggle className="fixed bottom-4 left-4 z-50 bg-background/85 shadow-sm backdrop-blur-md sm:bottom-6 sm:left-6" />
        <RevealObserver />
        <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
      </body>
    </html>
  );
}
