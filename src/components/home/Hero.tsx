import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DashboardPreview from "@/components/visuals/DashboardPreview";
import { buttonVariants } from "@/components/ui";
import { AUDIT_CTA } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-page pt-16 text-center sm:pt-24">
        <h1 className="mx-auto max-w-4xl text-[40px] font-semibold leading-[1.05] tracking-[-0.045em] text-balance sm:text-6xl lg:text-7xl">
          Software shaped around how your team actually works
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty sm:text-xl">
          Aethyl Global is a software studio building{" "}
          <strong className="font-medium text-foreground">custom dashboards</strong>,{" "}
          <strong className="font-medium text-foreground">CRM systems</strong>,{" "}
          <strong className="font-medium text-foreground">mobile apps</strong> and{" "}
          <strong className="font-medium text-foreground">automation</strong> for growing
          businesses, so your people spend their hours on the business instead of
          repetitive tasks.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href={AUDIT_CTA.href} className={buttonVariants({ variant: "audit", size: "lg" })}>
            {AUDIT_CTA.label}
            <ArrowRight aria-hidden="true" />
          </Link>
          <Link href="#services" className={buttonVariants({ variant: "outline", size: "lg" })}>
            Explore services
          </Link>
        </div>
        <p className="mt-4 text-[13px] text-subtle">
          Free · 30 minutes · No obligation · Clients worldwide
        </p>
      </div>

      {/* Product preview, fading into the page like Framer's hero shots */}
      <div className="container-page relative mt-16 sm:mt-20">
        <div className="[mask-image:linear-gradient(to_bottom,black_60%,transparent)]">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}
