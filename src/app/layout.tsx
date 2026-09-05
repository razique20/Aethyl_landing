import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.aethyl.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Aethyl | Best Website Development, Mobile App & CRM Agency in Dubai",
    template: "%s | Aethyl",
  },
  description:
    "Aethyl is the best web development agency in Dubai specializing in custom website development, mobile app development (React Native & Flutter), CRM systems, SaaS platforms, warehouse management dashboards, and AI-powered enterprise automation. Get a free quote today.",
  keywords: [
    "website development Dubai",
    "web development agency Dubai",
    "best agency near me",
    "mobile app development Dubai",
    "mobile app development UAE",
    "custom website development",
    "React Native app development",
    "Flutter app development",
    "CRM development Dubai",
    "custom CRM software",
    "SaaS platform development",
    "SaaS development company",
    "web design Dubai",
    "best web development company",
    "mobile application development cost",
    "enterprise software development",
    "AI automation Dubai",
    "Void AI agents",
    "warehouse dashboard development",
    "warehouse management software",
    "inventory management dashboard",
    "developer tools",
    "custom software development UAE",
    "landing page development",
    "e-commerce website development",
    "full stack development Dubai",
    "Next.js development",
    "React development",
  ],
  authors: [{ name: "Aethyl Global" }],
  creator: "Aethyl Global",
  publisher: "Aethyl Global",
  openGraph: {
    title: "Aethyl | Best Website Development, Mobile App & CRM Agency in Dubai",
    description:
      "Custom website development, mobile apps, SaaS platforms, warehouse dashboards, and AI-powered enterprise automation. Get a free quote today.",
    url: SITE_URL,
    siteName: "Aethyl",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aethyl — Best Website Development & Mobile App Agency in Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aethyl | Best Website Development, Mobile App & CRM Agency in Dubai",
    description:
      "Custom website development, mobile apps, SaaS platforms, warehouse dashboards, and AI-powered enterprise automation.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Aethyl Global",
    description:
      "Best web development agency in Dubai specializing in custom websites, mobile apps, CRM systems, SaaS platforms, warehouse dashboards, and AI automation.",
    url: SITE_URL,
    logo: `${SITE_URL}/logo-icon.svg`,
    sameAs: [
      "https://www.linkedin.com/company/aethyl",
      "https://twitter.com/aethyl",
      "https://github.com/aethyl-global",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "aethylglobal@gmail.com",
      telephone: "+971547400553",
      contactType: "sales",
      areaServed: ["AE", "SA", "IN", "US", "GB"],
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "AE",
    },
    foundingDate: "2024",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "10-50",
    },
    areaServed: [
      {
        "@type": "Country",
        name: "United Arab Emirates",
      },
      {
        "@type": "Country",
        name: "Saudi Arabia",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Aethyl Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Website Development",
            description: "High-performance custom websites built with Next.js, React, and modern frameworks.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile App Development",
            description: "Cross-platform mobile applications built with React Native and Flutter.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "CRM Development",
            description: "Custom CRM systems tailored to your business workflow.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SaaS Platform Development",
            description: "End-to-end SaaS product engineering from MVP to scale.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Automation",
            description: "Void AI agents for enterprise workflow automation.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Warehouse Dashboard Development",
            description: "Custom warehouse management dashboards to replace Excel-based operations.",
          },
        },
      ],
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Aethyl Global",
    url: SITE_URL,
    description:
      "Best web development agency in Dubai for custom websites, mobile apps, CRM, SaaS platforms, and warehouse dashboards.",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Aethyl Global",
    description:
      "Best web development agency in Dubai specializing in custom websites, mobile apps, and enterprise software.",
    url: SITE_URL,
    telephone: "+971547400553",
    email: "aethylglobal@gmail.com",
    image: `${SITE_URL}/logo-icon.svg`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "25.2048",
      longitude: "55.2708",
    },
    areaServed: ["Dubai", "Abu Dhabi", "Sharjah", "UAE", "Saudi Arabia", "India"],
    priceRange: "$$",
    openingHours: "Mo-Fr 09:00-18:00",
    sameAs: [
      "https://www.linkedin.com/company/aethyl",
      "https://twitter.com/aethyl",
      "https://github.com/aethyl-global",
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does website development cost in Dubai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Custom website development in Dubai starts from 1,500 AED for basic websites. SaaS platforms and complex web applications range from 15,000 to 75,000+ AED depending on features and complexity.",
        },
      },
      {
        "@type": "Question",
        name: "How much does it cost to build a mobile app in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mobile app development costs range from 15,000–30,000 AED for an MVP, 30,000–75,000 AED for mid-complexity apps, and 75,000–200,000+ AED for enterprise-grade applications. Cross-platform frameworks like React Native and Flutter help reduce costs.",
        },
      },
      {
        "@type": "Question",
        name: "What services does Aethyl offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text:      "Aethyl offers custom website development, mobile app development (React Native & Flutter), CRM system development, SaaS platform engineering, warehouse management dashboards, AI-powered enterprise automation with Void AI, and custom developer tools.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to build a custom website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A custom website typically takes 2–4 weeks for a standard business site, 4–8 weeks for a SaaS platform, and 6–10 weeks for a complex enterprise application. Timelines depend on project scope and requirements.",
        },
      },
      {
        "@type": "Question",
        name: "Do you build mobile apps for both iOS and Android?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we build cross-platform mobile applications using React Native and Flutter that run on both iOS and Android from a single codebase, reducing development time and cost by up to 40%.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best web development agency in Dubai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Aethyl Global is a leading web development agency in Dubai specializing in custom website development, mobile apps, SaaS platforms, and enterprise automation. We deliver MVPs in 2–4 weeks with transparent pricing starting from 1,500 AED.",
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="canonical" href={SITE_URL} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-black text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
