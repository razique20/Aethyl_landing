"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "./ui";

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
    <div className="mt-16 grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
      <ol className="border-t">
        {items.map((s, i) => (
          <li key={s.slug} className="border-b" data-reveal data-reveal-delay={i * 80}>
            <Link
              href={`/services/${s.slug}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-5 py-8 sm:gap-x-8"
            >
              <span className="text-[13px] tabular-nums text-subtle">({String(i + 1).padStart(2, "0")})</span>
              <div>
                <h3
                  className={cn(
                    "font-display text-4xl leading-[1.05] transition-[color,transform] duration-500 ease-out sm:text-5xl",
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
                    <span key={h} className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
                      {h}
                    </span>
                  ))}
                </span>
              </div>
              <ArrowUpRight
                className="size-5 text-subtle transition-[color,transform] duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground"
                aria-hidden="true"
              />
            </Link>
          </li>
        ))}
      </ol>

      {/* Preview frame: desktop only, purely decorative */}
      <div className="hidden lg:block" aria-hidden="true">
        <div className="sticky top-28">
          <div className="relative aspect-[4/3.4] overflow-hidden rounded-xl border bg-card">
            <div className="flex h-10 items-center justify-between border-b px-4">
              <span className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-input" />
                <span className="size-2.5 rounded-full bg-input" />
                <span className="size-2.5 rounded-full bg-input" />
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
          <p className="mt-4 text-[13px] text-subtle">Hover a service to preview</p>
        </div>
      </div>
    </div>
  );
}
