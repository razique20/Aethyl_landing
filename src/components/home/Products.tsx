import { ArrowUpRight } from "lucide-react";
import { SectionHeading, buttonVariants } from "@/components/ui";
import LiveSiteFrame from "./LiveSiteFrame";

const offrionSteps = [
  "Partners connect once via API",
  "Deals distribute across every endpoint",
  "Customers claim through partner apps",
  "Commissions settle on completion",
];

export default function Products() {
  return (
    <section id="products" className="border-t bg-soft py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          label="Our own products"
          index="04"
          title={
            <>
              We run our <em>own</em> products, too
            </>
          }
          description="Alongside client work we build and operate our own platforms. The same engineering goes into what we deliver for you."
        />

        <article data-reveal className="mt-16 grid overflow-hidden rounded-xl border bg-card lg:grid-cols-[1fr_1.5fr]">
          <div className="flex flex-col p-8 sm:p-10">
            <p className="label">Automation</p>
            <h3 className="font-display mt-5 text-5xl leading-none">Void AI</h3>
            <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
              AI agents that handle scheduling, data entry, customer routing and
              reporting inside the tools a business already uses. Every action is
              logged, with human approval where it matters.
            </p>
            <a
              href="https://void.aethyl.com"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline", className: "mt-8 self-start" })}
            >
              Visit void.aethyl.com
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <div className="flex flex-col justify-end border-t bg-background/50 p-4 pb-0 sm:p-8 sm:pb-0 lg:border-l lg:border-t-0">
            <LiveSiteFrame url="https://void.aethyl.com" title="Void AI — live site" />
          </div>
        </article>

        <article data-reveal className="mt-4 grid overflow-hidden rounded-xl border bg-card lg:grid-cols-[1fr_1.5fr]">
          <div className="flex flex-col p-8 sm:p-10">
            <p className="label">Networks</p>
            <h3 className="font-display mt-5 text-5xl leading-none">Offrion</h3>
            <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
              A partner deal network: one API distributes offers across connected
              platforms and settles commissions automatically.
            </p>
            <ol className="mt-6 border-t">
              {offrionSteps.map((step, i) => (
                <li key={step} className="flex items-baseline gap-4 border-b py-3 text-[14px]">
                  <span className="text-[12px] tabular-nums text-subtle">0{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
            <a
              href="https://offrion-app.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline", className: "mt-8 self-start" })}
            >
              Visit Offrion
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <div className="flex flex-col justify-end border-t bg-background/50 p-4 pb-0 sm:p-8 sm:pb-0 lg:border-l lg:border-t-0">
            <LiveSiteFrame url="https://offrion-app.vercel.app/" title="Offrion — live site" />
          </div>
        </article>
      </div>
    </section>
  );
}
