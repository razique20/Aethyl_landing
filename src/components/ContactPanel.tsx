import { Mail } from "lucide-react";
import ContactForm from "./ContactForm";
import { SectionLabel } from "./ui";
import { CONTACT } from "@/lib/site";

const callCovers = [
  "How your business runs today, and where it gets stuck",
  "Where software, marketing, accounting or tax help would matter most",
  "What to tackle first, with a rough scope and budget range",
];

/** Form + contact details. Used on /contact and at the end of service pages. */
export default function ContactPanel({
  heading,
  headingAs = "h2",
  defaultNeed,
}: {
  heading: string;
  headingAs?: "h1" | "h2";
  defaultNeed?: string;
}) {
  const Heading = headingAs;
  return (
    <section id="contact" className="border-t py-24 sm:py-32">
      <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <SectionLabel className="mb-8">Contact</SectionLabel>
          <Heading className="font-display text-[38px] uppercase leading-[0.98] text-balance sm:text-6xl">
            {heading}
          </Heading>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            A free 30-minute video call about what your business needs. You leave
            with a clear recommendation, whether or not you work with us.
          </p>

          <h3 className="label mt-12">What we cover</h3>
          <ol className="mt-5 space-y-3">
            {callCovers.map((item, i) => (
              <li key={item} className="flex gap-3 text-[15px] text-muted-foreground">
                <span className="text-[13px] tabular-nums leading-6 text-subtle">0{i + 1}</span>
                {item}
              </li>
            ))}
          </ol>

          <h3 className="label mt-12">Prefer email?</h3>
          <a
            href={`mailto:${CONTACT.email}`}
            className="mt-5 flex items-center gap-3 border-y py-4 text-sm transition-colors hover:text-foreground"
          >
            <Mail className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            <span className="min-w-0 truncate font-medium">{CONTACT.email}</span>
          </a>
          <p className="mt-4 text-[13px] text-subtle">
            Remote team · Clients across {CONTACT.regions}
          </p>
        </div>

        <ContactForm defaultNeed={defaultNeed} />
      </div>
    </section>
  );
}
