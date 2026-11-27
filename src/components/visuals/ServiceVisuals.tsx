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

function CalendarVisual() {
  const days = [
    { d: "Mon", post: "Carousel", ch: "Instagram" },
    { d: "Tue", post: "Article", ch: "LinkedIn" },
    { d: "Wed", post: "Short video", ch: "TikTok" },
    { d: "Thu", post: "Offer post", ch: "Facebook" },
    { d: "Fri", post: "Enquiry form", ch: "Landing page" },
  ];
  return (
    <div className="flex h-full flex-col gap-2">
      <div className="flex items-center justify-between text-[11px] text-subtle">
        <span>Content plan · this week</span>
        <span className="text-lime">Scheduled</span>
      </div>
      <div className="grid flex-1 grid-cols-5 gap-2">
        {days.map((x, i) => (
          <div key={x.d} className={cn("flex flex-col border bg-card p-2", i === 4 && "border-lime/40")}>
            <span className="text-[10px] text-subtle">{x.d}</span>
            <div className={cn("mt-2 h-10 bg-primary/70", i === 4 && "bg-lime/80")} />
            <span className="mt-2 text-[10px] font-medium leading-tight">{x.post}</span>
            <span className="mt-auto pt-1 text-[9px] text-subtle">{x.ch}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ClosingVisual() {
  const tasks = [
    ["Bank transactions reconciled", true],
    ["Sales and purchase invoices recorded", true],
    ["Payroll prepared", true],
    ["Monthly report sent", false],
  ] as const;
  return (
    <div className="grid h-full grid-cols-[1.3fr_1fr] gap-3">
      <div className="border bg-card p-3">
        <div className="text-[11px] text-subtle">Month-end checklist</div>
        <ul className="mt-3 space-y-2">
          {tasks.map(([t, done]) => (
            <li key={t} className="flex items-center gap-2 text-[11px]">
              <span className={cn("size-3 shrink-0 border", done ? "border-lime bg-lime" : "border-input")} />
              <span className={done ? "text-muted-foreground" : ""}>{t}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col border bg-card p-3">
        <div className="text-[11px] text-subtle">Profit &amp; loss</div>
        {["Revenue", "Costs", "Profit"].map((k, i) => (
          <div key={k} className="mt-3">
            <div className="text-[10px] text-subtle">{k}</div>
            <div className={cn("mt-1 h-2", i === 2 ? "w-1/2 bg-lime" : i === 1 ? "w-2/3 bg-input" : "w-full bg-primary")} />
          </div>
        ))}
      </div>
    </div>
  );
}

function DeadlinesVisual() {
  const items = [
    { t: "Corporate tax registration", s: "Done", done: true },
    { t: "VAT registration", s: "Done", done: true },
    { t: "VAT return", s: "Filed", done: true },
    { t: "Corporate tax return", s: "Next deadline", done: false },
  ];
  return (
    <div className="flex h-full flex-col border bg-card p-3">
      <div className="flex items-center justify-between text-[11px] text-subtle">
        <span>Tax compliance</span>
        <span>With tax partners</span>
      </div>
      <ul className="mt-3 flex-1 divide-y border-y">
        {items.map((x) => (
          <li key={x.t} className="flex items-center justify-between gap-3 py-2.5 text-[11px]">
            <span className="flex items-center gap-2">
              <span className={cn("size-2 shrink-0", x.done ? "bg-input" : "bg-lime")} />
              {x.t}
            </span>
            <span className={x.done ? "text-subtle" : "text-lime"}>{x.s}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServiceVisual({ name }: { name: ServiceIconKey }) {
  const map = {
    dashboard: ChartVisual,
    crm: PipelineVisual,
    mobile: PhoneVisual,
    automation: FlowVisual,
    marketing: CalendarVisual,
    accounting: ClosingVisual,
    tax: DeadlinesVisual,
  } as const;
  const V = map[name];
  return (
    <div aria-hidden="true" className="h-full">
      <V />
    </div>
  );
}
