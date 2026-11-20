import { SectionHeading } from "./ui";
import { processSteps } from "@/data/services";

export default function Process() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          title="How a project runs"
          description="No long discovery phase. A free audit, a fixed quote, then working software you can use within weeks."
        />
        <ol className="mt-12 grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <li key={step.title} className="bg-background p-6">
              <span className="font-mono text-xs text-subtle">Step {i + 1}</span>
              <h3 className="mt-3 text-base font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
