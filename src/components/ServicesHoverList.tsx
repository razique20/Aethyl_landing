"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "./ui";
import RailProgress from "./RailProgress";

interface Item {
  slug: string;
  name: string;
  summary: string;
  highlights: string[];
  mobile: boolean;
  visual: React.ReactNode;
}

export default function ServicesHoverList({ items }: { items: Item[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="mt-12 grid gap-12 sm:mt-16 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
      <div className="min-w-0">
        {/* Phones: a swipe rail of cards with previews. Desktop: an index list. */}
        <ol
          id="services-rail"
          className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-4 px-4 pb-2 [scrollbar-width:none] lg:mx-0 lg:block lg:overflow-visible lg:border-t lg:p-0 [&::-webkit-scrollbar]:hidden"
        >
          {items.map((s, i) => (
            <li
              key={s.slug}
              className="w-[86%] shrink-0 snap-start sm:w-[60%] lg:w-auto lg:border-b"
              data-reveal
              data-reveal-delay={i * 80}
            >
              <Link
                href={`/services/${s.slug}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group flex h-full flex-col overflow-hidden border bg-card transition-transform active:scale-[0.98] lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-baseline lg:gap-x-8 lg:overflow-visible lg:border-0 lg:bg-transparent lg:py-8 lg:active:scale-100"
              >
                <div
                  aria-hidden="true"
                  className={cn("h-52 border-b bg-soft p-4 lg:hidden", s.mobile && "overflow-hidden pb-0")}
                >
                  {s.visual}
                </div>
                <div className="flex flex-1 flex-col p-5 lg:contents">
                  <span className="text-[13px] tabular-nums text-subtle">({String(i + 1).padStart(2, "0")})</span>
                  <div className="mt-2 lg:mt-0">
                    <h3
                      className={cn(
                        "font-display text-[28px] uppercase leading-[1.02] transition-[color,transform] duration-500 ease-out sm:text-4xl",
                        active === i ? "text-foreground lg:translate-x-2" : "text-foreground lg:text-muted-foreground"
                      )}
                    >
                      {s.name}
                    </h3>
                    <span className="mt-3 block max-w-lg text-[15px] leading-relaxed text-muted-foreground">
                      {s.summary}
                    </span>
                    <span className="mt-4 flex flex-wrap gap-2">
                      {s.highlights.map((h) => (
                        <span key={h} className="border px-2.5 py-1 text-xs text-muted-foreground">
                          {h}
                        </span>
                      ))}
                    </span>
                  </div>
                  <span className="mt-auto flex items-center gap-2 pt-5 text-sm font-medium lg:mt-0 lg:pt-0">
                    <span className="lg:hidden">Explore</span>
                    <ArrowUpRight
                      className="size-5 text-subtle transition-[color,transform] duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ol>
        <RailProgress railId="services-rail" count={items.length} className="mt-5 lg:hidden" />
      </div>

      {/* Preview frame: desktop only, purely decorative */}
      <div className="hidden lg:block" aria-hidden="true">
        <div className="sticky top-28">
          <div className="relative aspect-[4/3.4] overflow-hidden border bg-card">
            <div className="flex h-10 items-center justify-between border-b px-4">
              <span className="flex gap-1.5">
                <span className="size-2.5 bg-input" />
                <span className="size-2.5 bg-input" />
                <span className="size-2.5 bg-lime" />
              </span>
              <span className="label">{items[active].name}</span>
            </div>
            {items.map((s, i) => (
              <div
                key={s.slug}
                className={cn(
                  "absolute inset-x-0 bottom-0 top-10 p-6 transition-[opacity,transform] duration-700 ease-out",
                  s.mobile && "pb-0",
                  active === i ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0"
                )}
              >
                {s.visual}
              </div>
            ))}
          </div>
          <p className="mt-4 text-[13px] text-subtle">Illustrative interface. Hover a service to preview.</p>
        </div>
      </div>
    </div>
  );
}
