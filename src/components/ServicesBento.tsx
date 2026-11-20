import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ServiceIcon from "./ServiceIcon";
import ServiceVisual from "./visuals/ServiceVisuals";
import { SectionHeading, cn } from "./ui";
import { services } from "@/data/services";

// Bento layout: wide / narrow, then narrow / wide.
const spans = ["md:col-span-4", "md:col-span-2", "md:col-span-2", "md:col-span-4"];

export default function ServicesBento({ headingAs = "h2" }: { headingAs?: "h1" | "h2" }) {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          as={headingAs}
          title="Four services, built around how you work"
          description="We take every project from first sketch to launch, backend and admin panel included, and stay on to support it. Start with the system that removes the most repetitive work."
        />

        <ul className="mt-12 grid gap-4 md:grid-cols-6">
          {services.map((s, i) => (
            <li key={s.slug} className={spans[i]}>
              <Link
                href={`/services/${s.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl border bg-card transition-colors hover:border-input"
              >
                <div className="p-6 pb-5">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                      <ServiceIcon name={s.icon} className="size-4 text-teal" />
                      {s.name}
                    </span>
                    <ArrowUpRight
                      className="size-4 text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {s.h1}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{s.summary}</p>
                </div>
                <div
                  className={cn(
                    "mt-auto h-48 border-t bg-background/60 p-4",
                    s.icon === "mobile" && "overflow-hidden pb-0"
                  )}
                >
                  <ServiceVisual name={s.icon} />
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm text-muted-foreground">
          Also: company websites, SaaS platforms, internal tools and API integrations.{" "}
          <Link href="/contact" className="text-teal underline-offset-4 hover:underline">
            Tell us about your project
          </Link>
        </p>
      </div>
    </section>
  );
}
