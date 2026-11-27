import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionLabel, buttonVariants } from "./ui";
import { AUDIT_CTA, CONTACT } from "@/lib/site";
import { CallCard } from "./visuals/BrandScenes";

/** Closing call to action: a royal blue block with a diagonal top edge. */
export default function AuditCTA() {
  return (
    <section className="theme-blue slant-top relative isolate overflow-hidden pb-24 pt-32 sm:pb-36 sm:pt-48">
      {/* Background photo: a video call (Unsplash, free licence), toned into
          the brand blue so it reads as texture behind the type. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/images/video-call.jpg"
          alt=""
          fill
          sizes="100vw"
          quality={65}
          className="object-cover object-[65%_center] opacity-50 mix-blend-multiply grayscale"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#1b34c0_0%,rgba(27,52,192,0.88)_45%,rgba(27,52,192,0.55)_100%)] max-lg:bg-[rgba(27,52,192,0.68)]" />
      </div>
      <div className="container-page">
        <SectionLabel className="mb-10">Free 30-minute call</SectionLabel>
        <h2 data-reveal className="font-display max-w-[14ch] text-[44px] uppercase leading-[0.95] text-balance sm:text-7xl lg:text-[104px]">
          Tell us what your business needs.
        </h2>

        <div className="mt-14 grid gap-12 border-t pt-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div data-reveal className="flex flex-col">
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              One call covers software, marketing, accounting and tax. We look at how
              your business runs and tell you what to tackle first. No cost, no
              obligation.
            </p>
            <Link
              href={AUDIT_CTA.href}
              className={buttonVariants({ size: "lg", className: "mt-8 w-full sm:w-auto sm:self-start" })}
            >
              {AUDIT_CTA.label}
              <ArrowRight aria-hidden="true" />
            </Link>
            <p className="label mt-10 lg:mt-auto">Prefer email?</p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="link-draw mt-3 inline-block self-start break-all text-2xl font-medium sm:text-3xl"
            >
              {CONTACT.email}
            </a>
          </div>
          <div data-reveal data-reveal-delay={120} className="lg:pl-4">
            <CallCard className="mx-auto max-w-md lg:max-w-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
