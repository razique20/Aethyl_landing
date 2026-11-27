import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RailProgress from "./RailProgress";
import { SectionHeading, cn } from "./ui";
import { pillars } from "@/data/services";

/**
 * The four service pillars. Software is the royal blue block; the others are
 * flat dark panels. Phones get a swipe rail, desktop a 2 x 2 grid.
 */
export default function Pillars({
  headingAs = "h2",
  index = "01",
}: {
  headingAs?: "h1" | "h2";
  index?: string;
}) {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            as={headingAs}
            label="Services"
            index={index}
            title={
              <>
                Four services. <em>One partner.</em>
              </>
            }
          />
          <p data-reveal className="max-w-sm text-base leading-relaxed text-muted-foreground lg:pb-2">
            Work with one team on the things a growing business needs, instead of
            managing a developer, an agency and an accountant separately.
          </p>
        </div>

        <ol
          id="pillars-rail"
          className="-mx-4 mt-12 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-4 px-4 pb-2 [scrollbar-width:none] sm:mt-16 lg:mx-0 lg:grid lg:grid-cols-2 lg:gap-px lg:overflow-visible lg:border lg:bg-border lg:p-0 [&::-webkit-scrollbar]:hidden"
        >
          {pillars.map((p, i) => {
            const featured = p.id === "software";
            return (
              <li
                key={p.id}
                id={p.id}
                data-reveal
                data-reveal-delay={i * 80}
                className={cn(
                  "flex w-[86%] shrink-0 snap-start scroll-mt-28 flex-col border p-6 sm:w-[60%] sm:p-8 lg:w-auto lg:border-0 lg:p-10",
                  featured ? "theme-blue cut-tr border-transparent" : "bg-card"
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[13px] tabular-nums text-muted-foreground">0{i + 1}</span>
                  {p.partnerNote && (
                    <span className="border border-input px-2.5 py-1 text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                      With partners
                    </span>
                  )}
                </div>
                <h3 className="font-display mt-10 text-[40px] uppercase leading-none sm:text-5xl lg:mt-16 lg:text-6xl">
                  {p.name}
                </h3>
                <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                  {p.description}
                </p>
                <ul className="mt-8 border-t">
                  {p.items.map((item) => (
                    <li key={item.label} className="border-b">
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="group flex items-center justify-between gap-4 py-3 text-[15px] font-medium"
                        >
                          {item.label}
                          <ArrowUpRight
                            className="size-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            aria-hidden="true"
                          />
                        </Link>
                      ) : (
                        <span className="block py-3 text-[15px]">{item.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
                {p.partnerNote && (
                  <p className="mt-auto flex items-center gap-2 pt-6 text-[13px] text-muted-foreground">
                    <span className="mark !size-1.5" aria-hidden="true" />
                    {p.partnerNote}
                  </p>
                )}
              </li>
            );
          })}
        </ol>
        <RailProgress railId="pillars-rail" count={pillars.length} className="mt-5 lg:hidden" />
      </div>
    </section>
  );
}
