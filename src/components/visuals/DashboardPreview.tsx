import { cn } from "@/components/ui";

const kpis = [
  { label: "Orders today", value: "1,284", delta: "+12.4%" },
  { label: "Stock value", value: "$2.4M", delta: "+3.1%" },
  { label: "Low-stock SKUs", value: "18", delta: "−6" },
  { label: "On-time dispatch", value: "97.2%", delta: "+1.8%" },
];

const bars = [38, 52, 44, 61, 57, 72, 66, 80, 74, 88, 70, 92];
const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

const orders = [
  { id: "#4821", site: "North hub", items: 14, status: "Dispatched" },
  { id: "#4820", site: "Central", items: 3, status: "Picking" },
  { id: "#4819", site: "North hub", items: 27, status: "Dispatched" },
  { id: "#4818", site: "East hub", items: 9, status: "Awaiting stock" },
];

const nav = ["Overview", "Orders", "Inventory", "Warehouses", "Reports", "Settings"];

/** Illustrative operations dashboard, built in HTML (not a real client's data). */
export default function DashboardPreview({ className }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label="Example of a custom operations dashboard with order, stock and dispatch metrics"
      className={cn(
        "overflow-hidden rounded-xl border bg-card text-left shadow-2xl shadow-black/20",
        className
      )}
    >
      {/* Window bar */}
      <div className="flex h-10 items-center gap-2 border-b px-4">
        <span className="size-2.5 rounded-full bg-input" />
        <span className="size-2.5 rounded-full bg-input" />
        <span className="size-2.5 rounded-full bg-input" />
        <span className="mx-auto hidden rounded-md border px-3 py-0.5 text-[11px] text-subtle sm:block">
          ops.yourcompany.com
        </span>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden w-44 shrink-0 border-r p-3 md:block">
          <div className="mb-4 px-2 text-[13px] font-semibold">Operations</div>
          <ul className="space-y-0.5 text-[13px]">
            {nav.map((item, i) => (
              <li
                key={item}
                className={cn(
                  "rounded-md px-2 py-1.5",
                  i === 0 ? "bg-accent text-foreground" : "text-muted-foreground"
                )}
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>

        <div className="min-w-0 flex-1 p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <div className="text-[15px] font-semibold">Overview</div>
              <div className="text-[12px] text-subtle">Live · updated 2 min ago</div>
            </div>
            <div className="flex gap-1.5">
              <span className="rounded-md border px-2.5 py-1 text-[11px] text-muted-foreground">
                This month
              </span>
              <span className="hidden rounded-md bg-primary px-2.5 py-1 text-[11px] font-medium text-primary-foreground sm:inline">
                Export
              </span>
            </div>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {kpis.map((k) => (
              <div key={k.label} className="rounded-lg border p-3">
                <div className="text-[11px] text-subtle">{k.label}</div>
                <div className="mt-1 text-[17px] font-semibold tracking-tight">{k.value}</div>
                <div className="mt-0.5 text-[11px] text-teal">{k.delta}</div>
              </div>
            ))}
          </div>

          <div className="mt-3 grid gap-3 lg:grid-cols-[1.3fr_1fr]">
            {/* Chart */}
            <div className="rounded-lg border p-3">
              <div className="mb-3 text-[12px] font-medium">Orders by month</div>
              <div className="flex h-28 items-end gap-1.5">
                {bars.map((h, i) => (
                  <div key={i} className="flex h-full flex-1 flex-col items-center justify-end gap-1">
                    <div
                      className={cn(
                        "w-full shrink-0 rounded-[3px]",
                        i === bars.length - 1 ? "bg-teal" : "bg-foreground/15"
                      )}
                      style={{ height: `${h}%` }}
                    />
                    <span className="text-[9px] text-subtle">{months[i]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Table */}
            <div className="rounded-lg border p-3">
              <div className="mb-2 text-[12px] font-medium">Recent orders</div>
              <table className="w-full text-[11px]">
                <tbody>
                  {orders.map((o) => (
                    <tr key={o.id} className="border-t first:border-t-0">
                      <td className="py-1.5 font-medium">{o.id}</td>
                      <td className="py-1.5 text-muted-foreground">{o.site}</td>
                      <td className="py-1.5 text-right">
                        <span
                          className={cn(
                            "rounded px-1.5 py-0.5",
                            o.status === "Dispatched"
                              ? "bg-teal/10 text-teal"
                              : "bg-foreground/5 text-muted-foreground"
                          )}
                        >
                          {o.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
