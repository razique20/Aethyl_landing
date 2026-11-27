import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui";
import { AUDIT_CTA } from "@/lib/site";

/**
 * Full-bleed photo band mid-page: a short prompt to book the free call for
 * visitors who are convinced before they reach the end of the page.
 */
export default function PhotoBand() {
  return (
    <section className="theme-dark relative isolate overflow-hidden border-t">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        {/* Dark workspace with code on screen (Unsplash, free licence). */}
        <Image
          src="/images/software.jpg"
          alt=""
          fill
          sizes="100vw"
          quality={70}
          className="object-cover object-[60%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,11,0.92)_0%,rgba(10,10,11,0.7)_50%,rgba(11,20,80,0.45)_100%)] max-md:bg-[rgba(10,10,11,0.62)]" />
      </div>

      <div className="container-page py-24 sm:py-32 lg:py-40">
        <p data-reveal className="label flex items-center gap-3">
          <span className="mark !size-2" aria-hidden="true" />
          Not sure where to start?
        </p>
        <h2
          data-reveal
          className="font-display mt-8 max-w-[16ch] text-[36px] uppercase leading-[0.98] text-balance sm:text-6xl lg:text-[72px]"
        >
          One call. Four services. <em>A clear next step.</em>
        </h2>
        <div data-reveal className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
          <Link href={AUDIT_CTA.href} className={buttonVariants({ variant: "audit", size: "lg", className: "w-full sm:w-auto" })}>
            {AUDIT_CTA.label}
            <ArrowRight aria-hidden="true" />
          </Link>
          <p className="text-[15px] text-muted-foreground">30 minutes · Free · No obligation</p>
        </div>
      </div>
    </section>
  );
}
