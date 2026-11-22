import Link from "next/link";
import ServiceVisual from "./visuals/ServiceVisuals";
import ServicesHoverList from "./ServicesHoverList";
import { SectionHeading } from "./ui";
import { services } from "@/data/services";

/**
 * Editorial index of the four services. Rows on the left; on desktop the
 * hovered row's product preview shows in a sticky frame on the right.
 * Visuals are rendered here on the server and handed to the client list.
 */
export default function ServicesBento({ headingAs = "h2" }: { headingAs?: "h1" | "h2" }) {
  const items = services.map((s) => ({
    slug: s.slug,
    name: s.name,
    summary: s.summary,
    highlights: s.highlights,
    mobile: s.icon === "mobile",
    visual: <ServiceVisual name={s.icon} />,
  }));

  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            as={headingAs}
            label="Services"
            index="01"
            title={
              <>
                Four services, <em>one</em> studio
              </>
            }
          />
          <p data-reveal className="max-w-sm text-base leading-relaxed text-muted-foreground lg:pb-2">
            Every project goes from first sketch to launch, backend and admin panel
            included, and we stay on to support it.
          </p>
        </div>

        <ServicesHoverList items={items} />

        <p className="mt-10 text-[15px] text-muted-foreground" data-reveal>
          Also: company websites, SaaS platforms, internal tools and API integrations.{" "}
          <Link href="/contact" className="link-draw text-foreground">
            Tell us about your project
          </Link>
        </p>
      </div>
    </section>
  );
}
