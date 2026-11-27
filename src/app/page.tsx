import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Pillars from "@/components/Pillars";
import About from "@/components/home/About";
import Process from "@/components/Process";
import Marquee from "@/components/home/Marquee";
import BlogTeaser from "@/components/BlogTeaser";
import FAQList, { faqJsonLd } from "@/components/FAQList";
import AuditCTA from "@/components/AuditCTA";
import { SectionHeading } from "@/components/ui";
import JsonLd from "@/components/JsonLd";
import { pillars, services } from "@/data/services";
import { AREA_SERVED, CONTACT, SAME_AS, SITE_NAME, SITE_URL } from "@/lib/site";

const TITLE = "Software, Marketing, Accounting & Tax for Growing Businesses | Aethyl Global";
const DESCRIPTION =
  "Every service a growing business needs. One partner. Aethyl Global brings software, marketing, accounting and tax together for businesses across the Middle East, India, Europe and the Americas.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: TITLE,
    description:
      "Software, marketing, accounting and tax for growing businesses, with one point of contact. Book a free 30-minute call.",
  },
};

const faqs = [
  {
    q: "What does Aethyl Global do?",
    a: "Aethyl Global is a business services company. We help growing businesses with software, marketing, accounting and tax, so they can work with one partner instead of several.",
  },
  {
    q: "Do you do the accounting and tax work yourselves?",
    a: "Accounting and tax services are delivered with trusted accounting and tax partners. We coordinate the work and stay your point of contact throughout.",
  },
  {
    q: "Which tax services do you cover?",
    a: "UAE corporate tax and VAT: registration, filing and compliance support, delivered with our trusted tax partners.",
  },
  {
    q: "What happens in the free 30-minute call?",
    a: "We talk through how your business runs today and where you need help, then recommend what to tackle first, with a rough scope and budget range. There is no cost and no obligation.",
  },
  {
    q: "Where are your clients, and where is your team?",
    a: "We work with clients across the Middle East, India, Europe and the Americas. Our team works remotely, over video calls and shared tools, in your time zone where it matters.",
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
  areaServed: AREA_SERVED,
  sameAs: SAME_AS,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Business services",
    itemListElement: pillars.map((p) => ({
      "@type": "OfferCatalog",
      name: p.name,
      description: p.description,
      itemListElement:
        p.id === "software"
          ? services.map((s) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: s.h1,
                description: s.metaDescription,
                url: `${SITE_URL}/services/${s.slug}`,
              },
            }))
          : p.items.map((item) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: item.label },
            })),
    })),
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Pillars />
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
                  Questions, <em>answered.</em>
                </>
              }
              description={
                <>
                  Something else on your mind?{" "}
                  <a href={`mailto:${CONTACT.email}`} className="link-draw text-foreground">
                    Email us
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
