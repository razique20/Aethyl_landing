import { ChevronDown } from "lucide-react";

export interface FAQ {
  q: string;
  a: string;
}

/** shadcn-style accordion on native <details>: rendered in HTML, no JS needed. */
export default function FAQList({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className="border-t">
      {faqs.map((faq) => (
        <details key={faq.q} className="accordion border-b">
          <summary className="flex items-center justify-between gap-4 py-4 text-left">
            <h3 className="text-[15px] font-medium hover:underline hover:underline-offset-4">
              {faq.q}
            </h3>
            <ChevronDown
              className="accordion-chevron size-4 shrink-0 text-muted-foreground transition-transform duration-200"
              aria-hidden="true"
            />
          </summary>
          <p className="pb-5 pr-8 text-[15px] leading-relaxed text-muted-foreground">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}

export function faqJsonLd(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
