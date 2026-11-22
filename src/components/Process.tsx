import { SectionHeading } from "./ui";
import { processSteps } from "@/data/services";

export default function Process({ index = "03" }: { index?: string }) {
  return (
    <section id="process" className="border-t py-24 sm:py-32">
      <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            label="Process"
            index={index}
            title={
              <>
                How a project <em>runs</em>
              </>
            }
            description="No long discovery phase. A free audit, a fixed quote, then working software you can use within weeks."
          />
        </div>

        <ol className="border-t">
          {processSteps.map((step, i) => (
            <li
              key={step.title}
              data-reveal
              data-reveal-delay={i * 80}
              className="grid grid-cols-[72px_1fr] gap-4 border-b py-9 sm:grid-cols-[120px_1fr]"
            >
              <span className="font-display text-5xl leading-none text-subtle sm:text-6xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-3xl leading-tight">{step.title}</h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
