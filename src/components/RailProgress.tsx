"use client";

import { useEffect, useState } from "react";
import { haptic } from "@/lib/haptics";
import { cn } from "./ui";

/**
 * Counter + dots for a horizontal swipe rail (phones). Finds the rail by id,
 * tracks which card is snapped, and lets dots jump to a card.
 */
export default function RailProgress({
  railId,
  count,
  className,
}: {
  railId: string;
  count: number;
  className?: string;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const rail = document.getElementById(railId);
    if (!rail) return;
    let last = 0;
    const onScroll = () => {
      const items = Array.from(rail.children) as HTMLElement[];
      const left = rail.scrollLeft + rail.clientWidth * 0.3;
      let i = items.findIndex((el) => el.offsetLeft + el.offsetWidth > left);
      if (rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 4) i = items.length - 1;
      i = Math.max(0, i);
      if (i !== last) {
        last = i;
        haptic(5);
      }
      setActive(i);
    };
    rail.addEventListener("scroll", onScroll, { passive: true });
    return () => rail.removeEventListener("scroll", onScroll);
  }, [railId]);

  const go = (i: number) => {
    const rail = document.getElementById(railId);
    const el = rail?.children[i] as HTMLElement | undefined;
    if (rail && el) rail.scrollTo({ left: el.offsetLeft - rail.offsetLeft - 16, behavior: "smooth" });
  };

  return (
    <div className={cn("flex items-center justify-between", className)}>
      <span className="text-[13px] tabular-nums text-subtle">
        <span className="text-foreground">{String(active + 1).padStart(2, "0")}</span> / {String(count).padStart(2, "0")}
      </span>
      <div className="flex items-center gap-1.5">
        {Array.from({ length: count }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => go(i)}
            aria-label={`Show item ${i + 1} of ${count}`}
            aria-current={active === i}
            className="flex h-6 items-center"
          >
            <span
              className={cn(
                "block h-1.5 rounded-full transition-all duration-500",
                active === i ? "w-6 bg-foreground" : "w-1.5 bg-input"
              )}
            />
          </button>
        ))}
      </div>
      <span className="label">Swipe →</span>
    </div>
  );
}
