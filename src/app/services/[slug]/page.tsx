import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import ServiceIcon from "@/components/ServiceIcon";
import ServiceVisual from "@/components/visuals/ServiceVisuals";
import Process from "@/components/Process";
import BlogTeaser from "@/components/BlogTeaser";
import FAQList, { faqJsonLd } from "@/components/FAQList";
import ContactPanel from "@/components/ContactPanel";
import JsonLd from "@/components/JsonLd";
import { Badge, SectionHeading, buttonVariants } from "@/components/ui";
import { getServiceBySlug, services } from "@/data/services";
import { AUDIT_CTA, SITE_NAME, SITE_URL } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  const path = `/services/${service.slug}`;
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      url: path,
      title: `${service.metaTitle} | ${SITE_NAME}`,
      description: service.metaDescription,
    },
  };
}

/** Pre-selects the matching option in the contact form. */
const formNeed: Record<string, string> = {
  "custom-dashboards": "Custom dashboard",
  "crm-development": "CRM",
  "mobile-app-development": "Mobile app",
  "business-automation": "Automation / AI agents",
};

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const url = `${SITE_URL}/services/${service.slug}`;
  const others = services.filter((s) => s.slug !== service.slug);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.h1,
    description: service.metaDescription,
    url,
    serviceType: service.name,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: ["Middle East", "India", "Europe", "North America", "South America"],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: service.name, item: url },
    ],
  };

  return (
    <>
      {/* Header */}
      <section className="pb-16 pt-10 sm:pb-24 sm:pt-14">
        <div className="container-page">
          <nav aria-label="Breadcrumb" className="mb-12 text-sm text-subtle">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li><Link href="/" className="hover:text-foreground">Home</Link></li>
              <li aria-hidden="true"><ChevronRight className="size-3.5" /></li>
              <li><Link href="/services" className="hover:text-foreground">Services</Link></li>
              <li aria-hidden="true"><ChevronRight className="size-3.5" /></li>
              <li className="text-muted-foreground" aria-current="page">{service.name}</li>
            </ol>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div>
              <Badge className="gap-1.5">
                <ServiceIcon name={service.icon} className="size-3.5 text-teal" />
                {service.name}
              </Badge>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-balance sm:text-6xl">
                {service.h1}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
                {service.intro[0]}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="#contact" className={buttonVariants({ variant: "audit", size: "lg" })}>
                  {AUDIT_CTA.label}
                  <ArrowRight aria-hidden="true" />
                </Link>
                <Link href="#what-we-build" className={buttonVariants({ variant: "outline", size: "lg" })}>
                  What we build
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border bg-card">
              <div className="flex h-10 items-center gap-2 border-b px-4">
                <span className="size-2.5 rounded-full bg-input" />
                <span className="size-2.5 rounded-full bg-input" />
                <span className="size-2.5 rounded-full bg-input" />
              </div>
              <div className={service.icon === "mobile" ? "h-72 overflow-hidden p-6 pb-0" : "h-72 p-6"}>
                <ServiceVisual name={service.icon} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem + good fit */}
      <section className="border-y bg-card/40 py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">The approach</h2>
            <div className="mt-4 space-y-4">
              {service.intro.slice(1).map((p) => (
                <p key={p} className="text-[17px] leading-relaxed text-muted-foreground">{p}</p>
              ))}
            </div>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Typical technology">
              {service.stack.map((t) => (
                <li key={t}><Badge>{t}</Badge></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">A good fit if…</h2>
            <ul className="mt-4 divide-y rounded-xl border bg-background">
              {service.goodFit.map((g) => (
                <li key={g} className="flex gap-3 px-4 py-3.5 text-[15px]">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section id="what-we-build" className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading title={`What we build`} description={service.summary} />
          <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border bg-border md:grid-cols-2">
            {service.deliverables.map((d) => (
              <li key={d.title} className="bg-background p-6 sm:p-8">
                <h3 className="text-lg font-semibold tracking-tight">{d.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{d.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="container-page"><div className="rule" /></div>
      <Process />

      <section className="py-20 sm:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <SectionHeading title={`${service.name}: FAQ`} />
          <FAQList faqs={service.faqs} />
        </div>
      </section>

      <BlogTeaser title="Related reading" slugs={service.relatedPosts} />

      {/* Other services */}
      <section className="pb-4">
        <div className="container-page">
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">Other services</h2>
          <ul className="grid gap-3 sm:grid-cols-3">
            {others.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex items-center justify-between rounded-lg border bg-card px-4 py-3.5 text-sm font-medium transition-colors hover:bg-accent"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <ServiceIcon name={s.icon} className="size-4 text-teal" />
                    {s.name}
                  </span>
                  <ArrowUpRight className="size-4 text-subtle group-hover:text-foreground" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactPanel heading={`Let’s scope your ${service.name.toLowerCase()} project`} defaultNeed={formNeed[service.slug]} />

      <JsonLd data={[serviceJsonLd, breadcrumbJsonLd, faqJsonLd(service.faqs)]} />
    </>
  );
}
