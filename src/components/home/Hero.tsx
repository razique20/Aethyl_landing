import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DashboardPreview from "@/components/visuals/DashboardPreview";
import { buttonVariants } from "@/components/ui";
import { AUDIT_CTA, CONTACT } from "@/lib/site";

export default function Hero() {
  return (
    // Dark band like revlient's cinematic hero; slides up under the
    // transparent navbar (72px) so the bar sits on top of it.
    <section className="theme-dark relative -mt-[72px] overflow-hidden pb-4 pt-[72px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_85%_10%,rgba(45,212,191,0.10),transparent_70%),radial-gradient(50%_40%_at_10%_100%,rgba(245,158,11,0.06),transparent_70%)]"
      />
      <div className="container-page relative pt-14 sm:pt-20">
        <div className="rise label flex flex-wrap items-center justify-between gap-3 border-b pb-5">
          <span>Aethyl Global — Software studio</span>
          <span className="hidden sm:inline">{CONTACT.regions}</span>
        </div>

        <h1
          className="rise font-display mt-12 text-[56px] leading-[0.92] text-balance sm:mt-16 sm:text-[96px] lg:text-[132px]"
          style={{ animationDelay: "120ms" }}
        >
          Software <em>shaped</em> around how your team works
        </h1>

        <div
          className="rise mt-12 grid gap-10 border-t pt-8 sm:mt-16 md:grid-cols-[1.2fr_1fr] md:items-end"
          style={{ animationDelay: "260ms" }}
        >
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty sm:text-xl">
            We design and build{" "}
            <span className="text-foreground">custom dashboards</span>,{" "}
            <span className="text-foreground">CRM systems</span>,{" "}
            <span className="text-foreground">mobile apps</span> and{" "}
            <span className="text-foreground">automation</span> for growing businesses,
            so your people spend their hours on the business, not on repetitive tasks.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <Link href={AUDIT_CTA.href} className={buttonVariants({ variant: "audit", size: "lg" })}>
              {AUDIT_CTA.label}
              <ArrowRight aria-hidden="true" />
            </Link>
            <Link href="#services" className={buttonVariants({ variant: "outline", size: "lg" })}>
              Our services
            </Link>
          </div>
        </div>
      </div>

      {/* Product preview, fading into the page */}
      <div className="container-page relative mt-20 sm:mt-24" data-reveal>
        <div className="[mask-image:linear-gradient(to_bottom,black_55%,transparent)]">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}
