import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Badge, SectionHeading, buttonVariants } from "@/components/ui";

const offrionSteps = [
  "Partners connect once via API",
  "Deals distribute across every endpoint",
  "Customers claim through partner apps",
  "Commissions settle on completion",
];

export default function Products() {
  return (
    <section id="products" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          title="We run our own products, too"
          description="Alongside client work we build and operate our own platforms. The same engineering goes into what we deliver for you."
        />

        <div className="mt-12 overflow-hidden rounded-xl border bg-card">
          <div className="grid lg:grid-cols-[1fr_1.5fr]">
            <div className="flex flex-col p-6 sm:p-8">
              <Badge className="self-start">Automation</Badge>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">Void AI</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                AI agents that handle scheduling, data entry, customer routing
                and reporting inside the tools a business already uses. Every
                action is logged, with human approval where it matters.
              </p>
              <a
                href="https://void.aethyl.com"
                className={buttonVariants({ variant: "outline", className: "mt-6 self-start" })}
              >
                Visit void.aethyl.com
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
            <div className="border-t bg-background/60 p-4 pb-0 sm:p-6 sm:pb-0 lg:border-l lg:border-t-0">
              <Image
                src="/void-dashboard.png"
                alt="Void AI fleet overview dashboard"
                width={2924}
                height={1664}
                sizes="(min-width: 1024px) 640px, 100vw"
                className="h-auto w-full rounded-t-lg border border-b-0"
              />
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-6 rounded-xl border bg-card p-6 sm:p-8 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <Badge>Networks</Badge>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight">Offrion</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              A partner deal network: one API distributes offers across
              connected platforms and settles commissions automatically.
            </p>
          </div>
          <ol className="grid gap-3 self-center sm:grid-cols-2">
            {offrionSteps.map((step, i) => (
              <li key={step} className="flex items-start gap-3 rounded-lg border bg-background/60 p-3 text-sm">
                <span className="flex size-5 shrink-0 items-center justify-center rounded border font-mono text-[11px] text-subtle">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
