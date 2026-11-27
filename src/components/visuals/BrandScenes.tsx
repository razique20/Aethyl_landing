import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AUDIT_CTA } from "@/lib/site";
import { cn } from "@/components/ui";

/* Brand illustrations in fixed brand colours, so they look the same inside
   any theme band. */
const BLUE = "#1b34c0";
const DEEP = "#0b1450";
const LIME = "#d4ff3f";
const PAPER = "#f4f1ea";

const agenda = [
  "How your business runs today",
  "Where you need help most",
  "What to tackle first, with a rough budget",
];

/**
 * The free call, pictured: a video call window with the agenda. The whole
 * card links to the booking page, so the image itself is a call to action.
 */
export function CallCard({ className }: { className?: string }) {
  return (
    <Link
      href={AUDIT_CTA.href}
      aria-label={AUDIT_CTA.label}
      className={cn(
        "group block border border-white/15 bg-ink text-white shadow-[12px_12px_0_0_#0b1450] transition-transform duration-500 ease-out-expo hover:-translate-y-1",
        className
      )}
    >
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <span className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-white/70">
          <span className="relative flex size-2">
            <span className="absolute inset-0 animate-ping bg-lime opacity-60 motion-reduce:hidden" />
            <span className="relative size-2 bg-lime" />
          </span>
          Video call
        </span>
        <span className="text-[12px] tabular-nums text-white/60">30:00 · Free</span>
      </div>

      {/* Two participant tiles */}
      <div className="grid grid-cols-2 gap-px bg-white/10">
        <div className="relative aspect-[4/3] overflow-hidden bg-blue">
          <svg viewBox="0 0 160 120" aria-hidden="true" className="absolute inset-0 size-full">
            <polygon points="70,120 160,30 160,120" fill={DEEP} />
            <rect x="62" y="30" width="36" height="36" fill={PAPER} />
            <rect x="44" y="74" width="72" height="46" fill={PAPER} />
          </svg>
          <span className="absolute bottom-2 left-2 bg-ink/80 px-2 py-1 text-[11px] font-medium">You</span>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden bg-[#121214]">
          <svg viewBox="0 0 160 120" aria-hidden="true" className="absolute inset-0 size-full">
            <rect x="62" y="30" width="36" height="36" fill={BLUE} />
            <rect x="44" y="74" width="72" height="46" fill={BLUE} />
            <rect x="112" y="14" width="14" height="14" fill={LIME} />
          </svg>
          <span className="absolute bottom-2 left-2 bg-ink/80 px-2 py-1 text-[11px] font-medium">Aethyl Global</span>
        </div>
      </div>

      {/* Agenda */}
      <div className="p-4 sm:p-5">
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/50">Agenda</p>
        <ol className="mt-3 space-y-2.5">
          {agenda.map((item, i) => (
            <li key={item} className="flex gap-3 text-[14px] leading-snug text-white/85">
              <span className="tabular-nums text-white/40">0{i + 1}</span>
              {item}
            </li>
          ))}
        </ol>
      </div>

      {/* Controls + join */}
      <div className="flex items-center justify-between gap-3 border-t border-white/10 px-4 py-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-6 bg-white/10" />
          <span className="size-6 bg-white/10" />
          <span className="size-6 bg-white/10" />
        </span>
        <span className="flex items-center gap-2 bg-lime px-3 py-2 text-[13px] font-medium text-ink">
          Pick a time
          <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

/**
 * "One partner" diagram for the About section: your business, one point of
 * contact, four services. Stacks vertically on phones.
 */
export function OnePartnerMap({ className }: { className?: string }) {
  const services: { name: string; partner?: boolean }[] = [
    { name: "Software" },
    { name: "Marketing" },
    { name: "Accounting", partner: true },
    { name: "Tax", partner: true },
  ];
  return (
    <figure className={cn("grid items-stretch gap-0 md:grid-cols-[1fr_56px_1fr_56px_1.4fr]", className)}>
      <div className="flex flex-col justify-between gap-6 border border-foreground bg-card p-5">
        <span className="label">You</span>
        <span className="font-display text-2xl uppercase leading-none">Your business</span>
      </div>

      <Connector />

      <div className="theme-dark flex flex-col justify-between gap-6 p-5">
        <span className="label flex items-center gap-2">
          <span className="mark !size-2" aria-hidden="true" />
          One point of contact
        </span>
        <span className="font-display text-2xl uppercase leading-none">Aethyl Global</span>
      </div>

      <Connector />

      <ul className="grid grid-cols-2 gap-px border border-foreground bg-foreground">
        {services.map((s, i) => (
          <li
            key={s.name}
            className={cn(
              "flex flex-col justify-between gap-4 p-4",
              s.name === "Software" ? "theme-blue" : "bg-card"
            )}
          >
            <span className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
              0{i + 1}
              {s.partner && " · With partners"}
            </span>
            <span className="font-display text-lg uppercase leading-none">{s.name}</span>
          </li>
        ))}
      </ul>
      <figcaption className="sr-only">
        Your business works with Aethyl Global as one point of contact for software,
        marketing, accounting and tax. Accounting and tax are delivered with partners.
      </figcaption>
    </figure>
  );
}

/** A thick rule with an arrowhead: vertical on phones, horizontal from md. */
function Connector() {
  return (
    <div aria-hidden="true" className="flex h-10 items-center justify-center md:h-auto">
      <span className="relative block h-full w-1 bg-foreground md:h-1 md:w-full">
        <span className="absolute -bottom-1 left-1/2 size-0 -translate-x-1/2 border-x-[7px] border-t-[9px] border-x-transparent border-t-foreground md:-right-1 md:bottom-auto md:left-auto md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:border-y-[7px] md:border-l-[9px] md:border-r-0 md:border-y-transparent md:border-l-foreground" />
      </span>
    </div>
  );
}
