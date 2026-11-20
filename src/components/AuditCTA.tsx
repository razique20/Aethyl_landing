import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { LinkedInIcon, XIcon } from "./SocialIcons";
import { buttonVariants } from "./ui";
import { AUDIT_CTA, CONTACT } from "@/lib/site";

/** Closing call-to-action band: the free audit plus every contact channel. */
export default function AuditCTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <div className="rounded-2xl border bg-card px-6 py-14 text-center sm:px-12 sm:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-[-0.035em] text-balance sm:text-5xl">
            See what to automate first
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            In a free 30-minute audit we look at your tools, spreadsheets and
            manual steps, and give you a clear recommendation with a rough
            scope and timeline.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href={AUDIT_CTA.href} className={buttonVariants({ variant: "audit", size: "lg" })}>
              {AUDIT_CTA.label}
              <ArrowRight aria-hidden="true" />
            </Link>
            <a href={`mailto:${CONTACT.email}`} className={buttonVariants({ variant: "outline", size: "lg" })}>
              <Mail aria-hidden="true" />
              Email us
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a href={`mailto:${CONTACT.email}`} className="hover:text-foreground">
              {CONTACT.email}
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground">
              <LinkedInIcon className="size-3.5" /> LinkedIn
            </a>
            <a href={CONTACT.x} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground">
              <XIcon className="size-3.5" /> @aethylglobal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
