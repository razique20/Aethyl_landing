export interface FAQ {
  q: string;
  a: string;
}

/** Numbered accordion on native <details>: rendered in HTML, no JS needed. */
export default function FAQList({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className="border-t">
      {faqs.map((faq, i) => (
        <details key={faq.q} className="accordion group border-b" data-reveal data-reveal-delay={i * 60}>
          <summary className="grid grid-cols-[40px_1fr_auto] items-baseline gap-3 py-6 text-left sm:grid-cols-[56px_1fr_auto]">
            <span className="text-[13px] tabular-nums text-subtle">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="font-display text-xl leading-snug transition-colors group-hover:text-muted-foreground sm:text-2xl">
              {faq.q}
            </h3>
            <span
              className="accordion-plus font-display text-3xl leading-none text-mark"
              aria-hidden="true"
            >
              +
            </span>
          </summary>
          <p className="pb-7 pl-[52px] pr-8 text-[15px] leading-relaxed text-muted-foreground sm:pl-[68px]">
            {faq.a}
          </p>
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
