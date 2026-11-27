import { SectionLabel } from "@/components/ui";

const regions = ["Middle East", "India", "Europe", "Americas"];

const principles = [
  {
    title: "One point of contact",
    text: "One team coordinates the work, so you are not managing a developer, an agency and an accountant on your own.",
  },
  {
    title: "Partners where it counts",
    text: "Accounting and tax are delivered with trusted partners. We coordinate the work and stay your point of contact.",
  },
  {
    title: "We stay on",
    text: "We support what we deliver and adjust it as your business grows, instead of handing it over and leaving.",
  },
];

export default function About() {
  return (
    <section id="about" className="theme-light py-24 sm:py-32">
      <div className="container-page">
        <SectionLabel index="02" className="mb-10">
          About
        </SectionLabel>

        <h2 data-reveal className="font-display max-w-5xl text-[30px] uppercase leading-[1.02] text-balance sm:text-5xl lg:text-[60px]">
          A business services company for growing businesses.{" "}
          <em>Software, marketing, accounting and tax, with one partner to call.</em>
        </h2>

        <div className="mt-16 grid gap-12 border-t pt-10 md:grid-cols-[1fr_2fr] md:gap-16">
          <div data-reveal>
            <p className="label">Clients across</p>
            <ul className="mt-5 space-y-1">
              {regions.map((r) => (
                <li key={r} className="font-display text-3xl uppercase leading-tight">
                  {r}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-muted-foreground">
              Our team works remotely, so location is never a limit.
            </p>
          </div>

          <ol className="grid gap-10 sm:grid-cols-3 sm:gap-8">
            {principles.map((p, i) => (
              <li key={p.title} data-reveal data-reveal-delay={i * 100} className="border-t-4 border-foreground pt-5">
                <span className="text-[13px] tabular-nums text-subtle">0{i + 1}</span>
                <h3 className="mt-4 text-lg font-medium leading-snug">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
