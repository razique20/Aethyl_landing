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
    default: "Aethyl Global | The Operating System for Networks & Automation",
    template: "%s | Aethyl Global",
  },
  description:
    "Aethyl Global is an operating system company. We build the networks businesses connect through, the automation that runs them, and the software they already depend on — Void AI agents, the Offrion deal network, operations dashboards, CRM, SaaS platforms and mobile apps. Get started today.",
  keywords: [
    "operating system company",
    "business network infrastructure",
    "network automation platform",
    "AI automation Dubai",
    "AI agents for business",
    "Void AI agents",
    "deal network API",
    "Offrion engine",
    "enterprise automation",
    "workflow automation",
    "partner network platform",
    "operations dashboard",
    "warehouse dashboard software",
    "inventory management dashboard",
    "CRM development",
    "SaaS platform development",
    "mobile app development",
    "custom software development",
    "developer tools",
    "Next.js development",
    "React development",
    "automation company Dubai",
    "technology company UAE",
    "enterprise software UAE",
  ],
  authors: [{ name: "Aethyl Global" }],
  creator: "Aethyl Global",
  publisher: "Aethyl Global",
  openGraph: {
    title: "Aethyl Global | The Operating System for Networks & Automation",
    description:
      "One platform for the networks you connect through, the automation that runs your business, and the software you already depend on.",
    url: SITE_URL,
    siteName: "Aethyl Global",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aethyl Global — Operating System for Networks & Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aethyl Global | The Operating System for Networks & Automation",
    description:
      "Networks, automation and the software you already run — one platform, one integration.",
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
      "Operating system company building business networks, AI automation and the software enterprises run on — including Void AI, the Offrion deal network, operations dashboards, CRM and SaaS platforms.",
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
      name: "Aethyl Global Systems",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Network Infrastructure",
            description:
              "Partner and platform networks built on the Offrion engine — offers distributed across endpoints with automatic commission settlement.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Automation",
            description:
              "Void AI agents for enterprise workflow automation — scheduling, data entry, routing and reporting with sub-100ms responses.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Operations Dashboards",
            description:
              "Real-time warehouse, inventory and operations dashboards replacing Excel-based workflows.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "CRM & SaaS Platforms",
            description:
              "End-to-end platform engineering from MVP to scale — auth, billing, dashboards and APIs.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web & Mobile Apps",
            description:
              "Production websites and cross-platform mobile applications built with Next.js, React Native and Flutter.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Developer Tools",
            description:
              "SDKs, REST APIs and tooling that connect Aethyl to the systems a business already runs.",
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
      "The operating system for networks, automation and the software businesses already run.",
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
      "Operating system company in Dubai building business networks, AI automation, dashboards and enterprise software.",
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
        name: "What is Aethyl Global?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Aethyl Global is an operating system company. We build the networks businesses connect through, the automation that runs them, and the software our clients already depend on — as one platform with one integration. Void AI, the Offrion engine and our operations dashboards are products we run, not one-off projects.",
        },
      },
      {
        "@type": "Question",
        name: "What can I build on Aethyl?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Three systems: networks that connect partners, platforms and marketplaces through Offrion; automation through Void AI agents; and the software you run today — dashboards, CRM, SaaS platforms and mobile apps — on the same operating system.",
        },
      },
      {
        "@type": "Question",
        name: "Do I have to take the whole platform?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Each system is adopted separately, so you can start with one. Aethyl runs one onboarding, one automation layer and one product catalogue across all of them, so adding a second system is an API enablement rather than a second integration.",
        },
      },
      {
        "@type": "Question",
        name: "How does the Offrion network layer work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Partners integrate the Offrion API once. Deals are distributed dynamically across every connected endpoint, end-users claim them through your own interface secured by Aethyl, and each partner claims its commission the moment a deal completes.",
        },
      },
      {
        "@type": "Question",
        name: "How does Void AI automation work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Void AI agents operate inside your existing tools with sub-100ms responses powered by Groq LPU. Every action is bounded by your policy, logged for review, and can require human approval.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get started?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Talk to our team, see a live demo, then start with a scoped rollout. Typical first deployments go live in 2 to 4 weeks, with larger platforms shipping in 6 to 10 weeks.",
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
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
