import { SectionLabel } from "@/components/ui";

const regions = ["Middle East", "India", "Europe", "Americas"];

const principles = [
  {
    title: "We start with how you operate",
    text: "Before any code, we learn how your team actually works, then shape the software around it.",
  },
  {
    title: "First sketch to launch",
    text: "Design, app, backend and admin panel: one team takes the whole project from idea to live.",
  },
  {
    title: "We stay on after launch",
    text: "We support and improve what we build, so the software keeps up as your business grows.",
  },
];

export default function About() {
  return (
    <section id="studio" className="border-t bg-soft py-24 sm:py-32">
      <div className="container-page">
        <SectionLabel index="02" className="mb-10" >
          The studio
        </SectionLabel>

        <h2 data-reveal className="font-display max-w-5xl text-[34px] leading-[1.12] text-balance sm:text-5xl lg:text-[64px]">
          A software studio for growing businesses. <em>We learn how your team works,</em>{" "}
          then build the system around it, and stay on long after launch.
        </h2>

        <div className="mt-16 grid gap-12 border-t pt-10 md:grid-cols-[1fr_2fr] md:gap-16">
          <div data-reveal>
            <p className="label">Clients across</p>
            <ul className="mt-5 space-y-2">
              {regions.map((r) => (
                <li key={r} className="font-display text-3xl leading-tight">
                  {r}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-muted-foreground">
              Our teams work remotely, so location is never a limit.
            </p>
          </div>

          <ol className="grid gap-10 sm:grid-cols-3 sm:gap-8">
            {principles.map((p, i) => (
              <li key={p.title} data-reveal data-reveal-delay={i * 100}>
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
