import { cn } from "@/components/ui";
import type { ServiceIconKey } from "@/data/services";

/* Small, illustrative UI fragments for each service tile. Decorative only. */

function ChartVisual() {
  const line = [30, 42, 38, 55, 50, 64, 60, 72, 69, 84];
  const max = 100;
  const pts = line.map((v, i) => `${(i / (line.length - 1)) * 100},${max - v}`).join(" ");
  return (
    <div className="grid h-full grid-cols-3 gap-3">
      <div className="col-span-2 rounded-lg border bg-card p-3">
        <div className="flex items-baseline justify-between">
          <span className="text-[11px] text-subtle">Revenue</span>
          <span className="text-[11px] text-lime">+18%</span>
        </div>
        <div className="mt-1 text-[15px] font-semibold">$486,200</div>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="mt-2 h-20 w-full">
          <polyline
            points={pts}
            fill="none"
            stroke="var(--color-lime)"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
      <div className="flex flex-col gap-3">
        {[
          ["Margin", "31.4%"],
          ["Returns", "1.2%"],
        ].map(([k, v]) => (
          <div key={k} className="flex-1 rounded-lg border bg-card p-3">
            <div className="text-[11px] text-subtle">{k}</div>
            <div className="mt-1 text-[15px] font-semibold">{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PipelineVisual() {
  const cols = [
    { name: "New", items: ["Fit-out quote", "Fleet tracking"] },
    { name: "Proposal", items: ["Clinic booking"] },
    { name: "Won", items: ["Retail POS"] },
  ];
  return (
    <div className="grid h-full grid-cols-3 gap-2">
      {cols.map((c) => (
        <div key={c.name} className="rounded-lg border bg-card p-2">
          <div className="mb-2 flex items-center justify-between px-1 text-[11px] text-subtle">
            {c.name}
            <span>{c.items.length}</span>
          </div>
          <div className="space-y-1.5">
            {c.items.map((it) => (
              <div
                key={it}
                className={cn(
                  "rounded-md border bg-background px-2 py-1.5 text-[11px]",
                  c.name === "Won" && "border-lime/40"
                )}
              >
                {it}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function PhoneVisual() {
  const slots = [
    ["09:30", "Consultation"],
    ["11:00", "Follow-up"],
    ["14:15", "New patient"],
  ];
  return (
    <div className="flex h-full items-start justify-center">
      <div className="w-44 rounded-[26px] border-4 border-accent bg-card p-3 pb-0">
        <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-accent" />
        <div className="text-[13px] font-semibold">Bookings</div>
        <div className="mb-2 text-[10px] text-subtle">Today · 3 appointments</div>
        <div className="space-y-1.5 pb-3">
          {slots.map(([t, n], i) => (
            <div
              key={t}
              className={cn(
                "flex items-center justify-between rounded-md border px-2 py-1.5 text-[10px]",
                i === 0 && "border-lime/40 bg-lime/5"
              )}
            >
              <span>{n}</span>
              <span className="text-subtle">{t}</span>
            </div>
          ))}
          <div className="rounded-md bg-primary py-1.5 text-center text-[10px] font-medium text-primary-foreground">
            Book appointment
          </div>
        </div>
      </div>
    </div>
  );
}

function FlowVisual() {
  const steps = [
    { title: "New order", meta: "Website / email" },
    { title: "AI agent", meta: "Validate & enrich" },
    { title: "Approval", meta: "Over $10k" },
    { title: "ERP + invoice", meta: "Created" },
  ];
  return (
    <div className="flex h-full flex-col items-stretch justify-center gap-2 sm:flex-row sm:items-center sm:gap-0">
      {steps.map((s, i) => (
        <div key={s.title} className="flex flex-1 items-center sm:flex-row">
          <div
            className={cn(
              "w-full rounded-lg border bg-card px-3 py-2.5",
              i === 1 && "border-lime/40"
            )}
          >
            <div className="text-[12px] font-medium">{s.title}</div>
            <div className="text-[10px] text-subtle">{s.meta}</div>
          </div>
          {i < steps.length - 1 && (
            <div className="hidden h-px w-4 shrink-0 bg-input sm:block" aria-hidden="true" />
          )}
        </div>
      ))}
    </div>
  );
}

export default function ServiceVisual({ name }: { name: ServiceIconKey }) {
  const map = {
    dashboard: ChartVisual,
    crm: PipelineVisual,
    mobile: PhoneVisual,
    automation: FlowVisual,
  } as const;
  const V = map[name];
  return (
    <div aria-hidden="true" className="h-full">
      <V />
    </div>
  );
}
