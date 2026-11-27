import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui";
import { pillars } from "@/data/services";
import { AUDIT_CTA, CONTACT } from "@/lib/site";

export default function Hero() {
  return (
    // Dark blue background (the one gradient the brand allows). Slides up
    // under the transparent navbar (72px) so the bar sits on top of it.
    <section className="theme-dark relative -mt-[72px] overflow-hidden bg-[linear-gradient(165deg,#0a0a0b_0%,#0a0a0b_38%,#0b1450_100%)] pt-[72px]">
      {/* Diagonal royal blue block, flat */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-[46%] w-[78%] bg-blue [clip-path:polygon(38%_100%,100%_8%,100%_100%)] sm:w-[62%] lg:h-[62%] lg:w-[48%]"
      />

      <div className="container-page relative pt-14 sm:pt-20">
        <div className="rise label flex flex-wrap items-center justify-between gap-3 border-b pb-5">
          <span className="flex items-center gap-3">
            <span className="mark !size-2" aria-hidden="true" />
            Aethyl Global — Business services
          </span>
          <span className="hidden sm:inline">{CONTACT.regions}</span>
        </div>

        <h1
          className="rise font-display mt-12 max-w-[15ch] text-[40px] uppercase leading-[0.95] text-balance sm:mt-16 sm:text-[64px] lg:text-[88px]"
          style={{ animationDelay: "120ms" }}
        >
          Every service a growing business needs.{" "}
          <span className="inline-flex items-baseline gap-[0.18em] text-white">
            One partner.
            <span className="mark !size-[0.32em]" aria-hidden="true" />
          </span>
        </h1>

        <div
          className="rise mt-10 grid gap-8 sm:mt-14 md:grid-cols-[1.2fr_1fr] md:items-end"
          style={{ animationDelay: "260ms" }}
        >
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty sm:text-xl">
            <span className="text-foreground">Software</span>,{" "}
            <span className="text-foreground">marketing</span>,{" "}
            <span className="text-foreground">accounting</span> and{" "}
            <span className="text-foreground">tax</span> for growing businesses, with one
            point of contact instead of four separate firms.
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

      {/* The four pillars, as a flat strip at the foot of the hero */}
      <nav aria-label="Service pillars" className="container-page relative mt-16 pb-10 sm:mt-24 sm:pb-14">
        <ol className="rise grid grid-cols-2 border-l border-t md:grid-cols-4" style={{ animationDelay: "380ms" }}>
          {pillars.map((p, i) => (
            <li key={p.id} className="border-b border-r">
              <Link
                href={`/services#${p.id}`}
                className="group flex h-full flex-col justify-between gap-8 bg-background/70 p-4 backdrop-blur-sm transition-colors hover:bg-background sm:p-6"
              >
                <span className="text-[13px] tabular-nums text-muted-foreground">0{i + 1}</span>
                <span className="flex items-end justify-between gap-2">
                  <span className="font-display text-[17px] uppercase leading-none sm:text-2xl xl:text-[28px]">{p.name}</span>
                  <ArrowRight
                    className="size-4 shrink-0 text-muted-foreground transition-[color,transform] duration-300 group-hover:translate-x-1 group-hover:text-lime"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </section>
  );
}
