import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { SectionLabel, buttonVariants } from "@/components/ui";
import { roles } from "@/data/careers";
import { applyHref } from "@/lib/apply";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers — Remote Jobs at a Software Studio",
  description:
    "Join Aethyl Global, a remote software studio. Open roles: Full-stack Engineer, Graphic Designer and Automation Specialist. Email your CV to apply.",
  alternates: { canonical: "/careers" },
  openGraph: {
    url: "/careers",
    title: "Careers | Aethyl Global",
    description:
      "Remote roles at Aethyl Global: Full-stack Engineer, Graphic Designer and Automation Specialist.",
  },
};

const perks = [
  { title: "Fully remote", text: "Work from anywhere. Our team and clients span the Middle East, India, Europe and the Americas." },
  { title: "Real impact", text: "You ship software that businesses use every day, and see the impact on how they work." },
  { title: "Small, senior team", text: "No layers of process. You talk to clients, own your work and learn across the whole stack." },
];

export default function CareersPage() {
  return (
    <>
      <section className="pb-16 pt-16 sm:pb-24 sm:pt-24">
        <div className="container-page">
          <SectionLabel className="rise mb-8">Careers</SectionLabel>
          <h1
            className="rise font-display max-w-4xl text-[52px] leading-[0.95] text-balance sm:text-7xl lg:text-[96px]"
            style={{ animationDelay: "100ms" }}
          >
            Build what&apos;s <em>next</em> with us
          </h1>
          <p
            className="rise mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty"
            style={{ animationDelay: "200ms" }}
          >
            We&apos;re a remote software studio building dashboards, CRM systems, mobile
            apps and automation for growing businesses.
          </p>
        </div>
      </section>

      <section id="roles" className="border-t bg-soft py-20 sm:py-28">
        <div className="container-page">
          <h2 className="font-display mb-10 text-4xl sm:text-5xl">
            Open <em>roles</em>
          </h2>

          <ul className="space-y-3">
            {roles.map((role, i) => (
              <li key={role.slug} data-reveal data-reveal-delay={i * 80}>
                <Link
                  href={`/careers/${role.slug}`}
                  className="group flex items-start gap-4 rounded-2xl border bg-card p-6 transition-[border-color,transform] duration-300 hover:border-input active:scale-[0.98] sm:items-center sm:gap-6 sm:p-8"
                >
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-[32px] leading-tight transition-colors group-hover:text-muted-foreground sm:text-4xl">
                      {role.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
                      {role.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {[role.team, role.type, role.location].map((t) => (
                        <span key={t} className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full border transition-colors group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
                    <ArrowUpRight className="size-5" aria-hidden="true" />
                    <span className="sr-only">View role</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t py-20 sm:py-28">
        <div className="container-page">
          <h2 data-reveal className="font-display text-4xl sm:text-5xl">
            Why <em>Aethyl</em>
          </h2>
          <ol className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8">
            {perks.map((p, i) => (
              <li key={p.title} data-reveal data-reveal-delay={i * 100}>
                <span className="text-[13px] tabular-nums text-subtle">0{i + 1}</span>
                <h3 className="mt-4 text-lg font-medium">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="theme-dark py-20 sm:py-28">
        <div className="container-page">
          <h2 data-reveal className="font-display max-w-3xl text-5xl leading-[1] sm:text-7xl">
            Don&apos;t see your <em>role?</em>
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            We&apos;re always glad to hear from talented people. Email your CV and tell us
            what you&apos;d like to work on.
          </p>
          <a href={applyHref()} className={buttonVariants({ size: "lg", className: "mt-10 w-full sm:w-auto" })}>
            <Mail aria-hidden="true" />
            Email your CV to {CONTACT.email}
          </a>
        </div>
      </section>
    </>
  );
}
