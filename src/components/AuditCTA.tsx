import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionLabel, buttonVariants } from "./ui";
import { AUDIT_CTA, CONTACT } from "@/lib/site";

/** Closing call to action: a royal blue block with a diagonal top edge. */
export default function AuditCTA() {
  return (
    <section className="theme-blue slant-top pb-24 pt-32 sm:pb-36 sm:pt-48">
      <div className="container-page">
        <SectionLabel className="mb-10">Free 30-minute call</SectionLabel>
        <h2 data-reveal className="font-display max-w-[14ch] text-[44px] uppercase leading-[0.95] text-balance sm:text-7xl lg:text-[104px]">
          Tell us what your business needs.
        </h2>

        <div data-reveal className="mt-14 grid gap-10 border-t pt-10 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              One call covers software, marketing, accounting and tax. We look at how
              your business runs and tell you what to tackle first. No cost, no
              obligation.
            </p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="link-draw mt-8 inline-block break-all text-2xl font-medium sm:text-3xl"
            >
              {CONTACT.email}
            </a>
          </div>
          <div className="flex md:justify-end">
            <Link href={AUDIT_CTA.href} className={buttonVariants({ size: "lg", className: "w-full sm:w-auto" })}>
              {AUDIT_CTA.label}
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
