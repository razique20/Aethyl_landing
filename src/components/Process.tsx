import { SectionHeading } from "./ui";
import { processSteps } from "@/data/services";
import RailProgress from "./RailProgress";

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

        <div className="min-w-0">
          {/* Phones: swipeable step cards. Desktop: a numbered list. */}
          <ol
            id="process-rail"
            className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-4 px-4 pb-2 [scrollbar-width:none] lg:mx-0 lg:block lg:overflow-visible lg:border-t lg:p-0 [&::-webkit-scrollbar]:hidden"
          >
            {processSteps.map((step, i) => (
              <li
                key={step.title}
                data-reveal
                data-reveal-delay={i * 80}
                className="flex w-[80%] shrink-0 snap-start flex-col justify-between gap-10 rounded-2xl border bg-card p-6 sm:w-[55%] lg:grid lg:w-auto lg:grid-cols-[120px_1fr] lg:gap-4 lg:rounded-none lg:border-0 lg:border-b lg:bg-transparent lg:px-0 lg:py-9"
              >
                <span className="font-display text-6xl leading-none text-subtle">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-3xl leading-tight">{step.title}</h3>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <RailProgress railId="process-rail" count={processSteps.length} className="mt-5 lg:hidden" />
        </div>
      </div>
    </section>
  );
}
