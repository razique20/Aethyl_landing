import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LinkedInIcon, XIcon } from "./SocialIcons";
import { SectionLabel, buttonVariants } from "./ui";
import { AUDIT_CTA, CONTACT } from "@/lib/site";

/** Closing call-to-action: the free audit plus every contact channel. */
export default function AuditCTA() {
  return (
    <section className="theme-dark py-24 sm:py-36">
      <div className="container-page">
        <SectionLabel className="mb-10">Free 30-minute audit</SectionLabel>
        <h2 data-reveal className="font-display text-[56px] leading-[0.95] text-balance sm:text-8xl lg:text-[124px]">
          Let&apos;s see what to <em>automate</em> first.
        </h2>

        <div data-reveal className="mt-14 grid gap-10 border-t pt-10 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              We look at your tools, spreadsheets and manual steps, and give you a
              clear recommendation with a rough scope and timeline. No cost, no
              obligation.
            </p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="font-display link-draw mt-8 inline-block break-all text-3xl sm:text-4xl"
            >
              {CONTACT.email}
            </a>
          </div>
          <div className="flex flex-col gap-6 md:items-end">
            <Link href={AUDIT_CTA.href} className={buttonVariants({ variant: "audit", size: "lg" })}>
              {AUDIT_CTA.label}
              <ArrowRight aria-hidden="true" />
            </Link>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-foreground">
                <LinkedInIcon className="size-3.5" /> LinkedIn
              </a>
              <a href={CONTACT.x} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-foreground">
                <XIcon className="size-3.5" /> @aethylglobal
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
