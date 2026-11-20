import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ServicesBento from "@/components/ServicesBento";
import About from "@/components/home/About";
import Process from "@/components/Process";
import Products from "@/components/home/Products";
import BlogTeaser from "@/components/BlogTeaser";
import FAQList, { faqJsonLd } from "@/components/FAQList";
import AuditCTA from "@/components/AuditCTA";
import { SectionHeading } from "@/components/ui";
import JsonLd from "@/components/JsonLd";
import { services } from "@/data/services";
import { CONTACT, SAME_AS, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Custom Dashboards, CRM, Mobile Apps & Automation | Aethyl Global" },
  description:
    "Software studio building custom dashboards, CRM systems, mobile apps and automation for growing businesses worldwide. Book a free 30-minute audit to see what to automate first.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Custom Dashboards, CRM, Mobile Apps & Automation | Aethyl Global",
    description:
      "Software shaped around how your team works: dashboards, CRM, mobile apps and automation. Book a free 30-minute audit.",
  },
};

const faqs = [
  {
    q: "What does Aethyl Global do?",
    a: "Aethyl Global is a software studio. We build custom dashboards, CRM systems, mobile apps and automation for growing businesses around the world, and we run our own products, Void AI and Offrion.",
  },
  {
    q: "What happens in the free 30-minute audit?",
    a: "We review how your team currently works — tools, spreadsheets and manual steps — and recommend what to build or automate first, with a rough scope, timeline and budget range. There is no cost and no obligation.",
  },
  {
    q: "How long does a project take?",
    a: "First releases typically go live in 2 to 4 weeks. Larger platforms are delivered in stages, so you start using the system early and we build on it.",
  },
  {
    q: "Where are your clients, and where is your team?",
    a: "We work with clients across the Middle East, India, Europe and the Americas. Our teams work remotely, so location is never a limit: we work over video calls and shared tools, in your time zone where it matters.",
  },
  {
    q: "Do you support the system after launch?",
    a: "Yes. We take projects from first sketch to launch, backend and admin panel included, and then stay on to support and improve them, so you are never handed code and left on your own.",
  },
];

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#business`,
  name: SITE_NAME,
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image`,
  email: CONTACT.email,
  priceRange: "$$",
  areaServed: ["Middle East", "India", "Europe", "North America", "South America"],
  sameAs: SAME_AS,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.h1,
        description: s.metaDescription,
        url: `${SITE_URL}/services/${s.slug}`,
      },
    })),
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TechStrip />
      <ServicesBento />
      <div className="container-page"><div className="rule" /></div>
      <About />
      <div className="container-page"><div className="rule" /></div>
      <Process />
      <div className="container-page"><div className="rule" /></div>
      <Products />
      <section id="faq" className="py-20 sm:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <SectionHeading
            title="Questions, answered"
            description={
              <>
                Something else on your mind?{" "}
                <a href={`mailto:${CONTACT.email}`} className="text-teal underline-offset-4 hover:underline">
                  Email us
                </a>
                .
              </>
            }
          />
          <FAQList faqs={faqs} />
        </div>
      </section>
      <BlogTeaser />
      <AuditCTA />
      <JsonLd data={[businessJsonLd, faqJsonLd(faqs)]} />
    </>
  );
}

const stack = ["Next.js", "React", "React Native", "Flutter", "TypeScript", "Node.js", "PostgreSQL"];

function TechStrip() {
  return (
    <section aria-label="Technologies we build with" className="border-y py-8">
      <div className="container-page flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-subtle">Built with modern, proven technology</p>
        <ul className="flex flex-wrap justify-center gap-x-7 gap-y-2 text-[15px] font-medium text-muted-foreground">
          {stack.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
