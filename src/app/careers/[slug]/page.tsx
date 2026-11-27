import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { SectionLabel, buttonVariants } from "@/components/ui";
import { getRoleBySlug, roles } from "@/data/careers";
import { applyHref } from "@/lib/apply";
import { CONTACT, SITE_NAME, SITE_URL } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return roles.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const role = getRoleBySlug(slug);
  if (!role) return {};
  const path = `/careers/${role.slug}`;
  return {
    title: `${role.title} — Remote Job`,
    description: `${role.summary} ${role.type}, ${role.location}. Email your CV to apply.`,
    alternates: { canonical: path },
    openGraph: {
      url: path,
      title: `${role.title} | Careers at ${SITE_NAME}`,
      description: role.summary,
    },
  };
}

export default async function RolePage({ params }: Props) {
  const { slug } = await params;
  const role = getRoleBySlug(slug);
  if (!role) notFound();

  const others = roles.filter((r) => r.slug !== role.slug);
  const apply = applyHref(role.title);

  const channels = [
    { icon: Mail, label: "Email your CV", value: CONTACT.email, href: apply, external: false },
  ];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Careers", item: `${SITE_URL}/careers` },
      { "@type": "ListItem", position: 3, name: role.title, item: `${SITE_URL}/careers/${role.slug}` },
    ],
  };

  return (
    <>
      <section className="pb-14 pt-10 sm:pb-20 sm:pt-14">
        <div className="container-page">
          <Link
            href="/careers"
            className="rise inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All roles
          </Link>

          <SectionLabel className="rise mt-12">Careers — {role.team}</SectionLabel>
          <h1
            className="rise font-display mt-6 text-[40px] uppercase leading-[0.95] text-balance sm:text-6xl lg:text-[80px]"
            style={{ animationDelay: "100ms" }}
          >
            {role.title}
          </h1>
          <div className="rise mt-6 flex flex-wrap gap-2" style={{ animationDelay: "160ms" }}>
            {[role.team, role.type, role.location].map((t) => (
              <span key={t} className="border px-2.5 py-1 text-[13px] text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
          <p
            className="rise mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty sm:text-xl"
            style={{ animationDelay: "220ms" }}
          >
            {role.summary}
          </p>
          <a
            href={apply}
            className={buttonVariants({ size: "lg", className: "rise mt-10 w-full sm:w-auto" })}
            style={{ animationDelay: "280ms" }}
          >
            <Mail aria-hidden="true" />
            Email your CV
          </a>
        </div>
      </section>

      <section className="border-t bg-soft py-16 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div className="space-y-14">
            {[
              { heading: "What you'll do", items: role.responsibilities },
              { heading: "What you bring", items: role.requirements },
            ].map((col) => (
              <div key={col.heading} data-reveal>
                <h2 className="font-display text-2xl uppercase sm:text-3xl">{col.heading}</h2>
                <ul className="mt-6 border-t">
                  {col.items.map((item) => (
                    <li key={item} className="flex gap-4 border-b py-4 text-[16px] leading-relaxed">
                      <span className="text-subtle" aria-hidden="true">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div data-reveal>
              <h2 className="font-display text-2xl uppercase sm:text-3xl">How to apply</h2>
              <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-muted-foreground">
                Email your CV to{" "}
                <a href={apply} className="link-draw text-foreground">
                  {CONTACT.email}
                </a>{" "}
                with &ldquo;{role.title}&rdquo; in the subject, plus a link to your portfolio,
                GitHub or LinkedIn. We read every application and reply within a few working days.
              </p>
            </div>
          </div>

          {/* Apply card: sticky beside the details on desktop */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="border bg-card p-6 sm:p-8">
              <p className="label">Apply for this role</p>
              <p className="font-display mt-4 text-2xl uppercase leading-tight">{role.title}</p>
              <a href={apply} className={buttonVariants({ size: "lg", className: "mt-6 w-full" })}>
                <Mail aria-hidden="true" />
                Email your CV
              </a>

              <p className="label mt-8">Connect with us</p>
              <ul className="mt-3 divide-y border-y">
                {channels.map(({ icon: Icon, label, value, href, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="flex items-center gap-3 py-4 text-sm transition-colors hover:text-muted-foreground active:opacity-60"
                    >
                      <Icon className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                      <span className="w-28 shrink-0 text-muted-foreground">{label}</span>
                      <span className="min-w-0 truncate font-medium">{value}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t py-16 sm:py-24">
        <div className="container-page">
          <h2 className="label mb-5">Other open roles</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {others.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/careers/${r.slug}`}
                  className="group flex items-center justify-between border bg-card px-6 py-5 transition-[border-color,transform] hover:border-input active:scale-[0.98]"
                >
                  <span>
                    <span className="font-display block text-xl uppercase">{r.title}</span>
                    <span className="mt-1 block text-[13px] text-muted-foreground">
                      {r.type} · {r.location}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="size-5 text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <JsonLd data={[breadcrumbJsonLd]} />
    </>
  );
}
