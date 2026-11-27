const words = [
  "Software",
  "Marketing",
  "Accounting",
  "Tax",
  "Dashboards",
  "CRM systems",
  "Mobile apps",
  "Social media",
  "Bookkeeping",
  "VAT",
];

/** Slow keyword band. Decorative; the same list is in the services section. */
export default function Marquee() {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {words.map((w) => (
        <li key={w} className="font-display flex items-center whitespace-nowrap text-4xl uppercase text-foreground sm:text-6xl">
          <span className="px-6 sm:px-10">{w}</span>
          <span className="mark !size-3 sm:!size-4" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-label="What we do" className="overflow-hidden border-y py-7 sm:py-9">
      <div className="marquee marquee-slow">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}
