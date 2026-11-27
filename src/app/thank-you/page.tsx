import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui";
import { CONTACT } from "@/lib/site";

// Intentionally noindex: a post-form confirmation page has no search value.
// It is NOT disallowed in robots.txt, so Google can crawl it and see this tag.
export const metadata: Metadata = {
  title: "Thank you",
  robots: { index: false, follow: true },
};

export default function ThankYou() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-page max-w-lg text-center">
        <h1 className="font-display text-5xl uppercase leading-none">Thanks. We&apos;ve <em>got it.</em></h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          We&apos;ll reply within one working day to schedule your free 30-minute
          call. Need us sooner? Email{" "}
          <a href={`mailto:${CONTACT.email}`} className="break-all text-foreground underline underline-offset-4">
            {CONTACT.email}
          </a>
          .
        </p>
        <Link href="/" className={buttonVariants({ variant: "outline", className: "mt-8" })}>
          Back to home
        </Link>
      </div>
    </section>
  );
}
