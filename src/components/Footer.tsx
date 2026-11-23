import Link from "next/link";
import Logo from "./Logo";
import { services } from "@/data/services";
import { CONTACT } from "@/lib/site";

const columns = [
  {
    title: "Services",
    links: [
      ...services.map((s) => ({ label: s.name, href: `/services/${s.slug}` })),
      { label: "All services", href: "/services" },
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "About", href: "/#studio" },
      { label: "Process", href: "/#process" },
      { label: "Journal", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Elsewhere",
    links: [
      { label: "LinkedIn", href: CONTACT.linkedin },
      { label: "X / Twitter", href: CONTACT.x },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="overflow-hidden border-t">
      <div className="container-page pt-16 sm:pt-20">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="font-display mt-6 max-w-sm text-[28px] leading-[1.15]">
              Software shaped around how your team <em>actually</em> works.
            </p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="link-draw mt-6 inline-block break-all text-[15px] text-foreground"
            >
              {CONTACT.email}
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h2 className="label mb-5">{col.title}</h2>
              <ul className="space-y-3 text-[15px]">
                {col.links.map((l) => {
                  const cls = "link-draw text-muted-foreground transition-colors hover:text-foreground";
                  return (
                    <li key={l.href}>
                      {l.href.startsWith("/") ? (
                        <Link href={l.href} className={cls}>
                          {l.label}
                        </Link>
                      ) : (
                        <a href={l.href} target="_blank" rel="noopener noreferrer" className={cls}>
                          {l.label}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t pt-6 text-[13px] text-subtle sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Aethyl Global. All rights reserved.</p>
          <p>Remote studio · {CONTACT.regions}</p>
        </div>
      </div>

      {/* Oversized wordmark, cropped by the page edge */}
      <p
        aria-hidden="true"
        className="font-display pointer-events-none mt-6 select-none whitespace-nowrap text-center text-[17.5vw] leading-[0.78] text-foreground/[0.06]"
      >
        Aethyl Global
      </p>
    </footer>
  );
}
