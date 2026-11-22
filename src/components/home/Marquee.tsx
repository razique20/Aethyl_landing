const words = [
  "Dashboards",
  "CRM systems",
  "Mobile apps",
  "Automation",
  "Admin panels",
  "Integrations",
  "AI agents",
  "Internal tools",
];

/** Slow keyword band in serif italic. Decorative; the list is also in the services section. */
export default function Marquee() {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {words.map((w) => (
        <li key={w} className="font-display flex items-center whitespace-nowrap text-5xl italic text-muted-foreground sm:text-7xl">
          <span className="px-6 sm:px-10">{w}</span>
          <span className="text-2xl not-italic text-subtle sm:text-3xl" aria-hidden="true">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-label="What we build" className="overflow-hidden border-y py-8 sm:py-10">
      <div className="marquee marquee-slow">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}
