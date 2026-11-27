import type { Metadata, Viewport } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SoundToggle from "@/components/SoundToggle";
import RevealObserver from "@/components/RevealObserver";
import MobileCTA from "@/components/MobileCTA";
import JsonLd from "@/components/JsonLd";
import { AREA_SERVED, COMPANY_DESCRIPTION, CONTACT, SAME_AS, SITE_NAME, SITE_URL } from "@/lib/site";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["400", "500"] });
const archivoBlack = Archivo_Black({ variable: "--font-archivo-black", subsets: ["latin"], weight: "400" });

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  colorScheme: "dark",
};

// Defaults only. Every page sets its own title, description and canonical
// (alternates.canonical) — never put a canonical here, or every child page
// inherits the homepage URL and Google treats it as a duplicate.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Software, Marketing, Accounting & Tax for Growing Businesses | Aethyl Global",
    template: "%s | Aethyl Global",
  },
  description: COMPANY_DESCRIPTION,
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
  logo: `${SITE_URL}/logo-mark.png`,
  email: CONTACT.email,
  sameAs: SAME_AS,
  description: COMPANY_DESCRIPTION,
  slogan: "Every service a growing business needs. One partner.",
  areaServed: AREA_SERVED,
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
      className={`${inter.variable} ${archivoBlack.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Marks JS as available so scroll-reveal can hide content until it animates in. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <SoundToggle className="fixed bottom-4 left-4 z-50 bg-background/85 backdrop-blur-md sm:bottom-6 sm:left-6" />
        <MobileCTA />
        <RevealObserver />
        <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
      </body>
    </html>
  );
}
