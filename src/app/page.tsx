import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ServicesBento from "@/components/ServicesBento";
import About from "@/components/home/About";
import Process from "@/components/Process";
import Marquee from "@/components/home/Marquee";
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
    a: "Aethyl Global is a software studio. We build custom dashboards, CRM systems, mobile apps and automation for growing businesses around the world.",
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
      <Marquee />
      <ServicesBento />
      <About />
      <Process />
      <section id="faq" className="border-t py-24 sm:py-32">
        <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              label="FAQ"
              index="04"
              title={
                <>
                  Questions, <em>answered</em>
                </>
              }
              description={
                <>
                  Something else on your mind?{" "}
                  <a href={`mailto:${CONTACT.email}`} className="link-draw text-foreground">
                    Ask the studio
                  </a>
                  .
                </>
              }
            />
          </div>
          <FAQList faqs={faqs} />
        </div>
      </section>
      <BlogTeaser index="05" />
      <AuditCTA />
      <JsonLd data={[businessJsonLd, faqJsonLd(faqs)]} />
    </>
  );
}
