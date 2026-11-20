import Link from "next/link";
import Logo from "./Logo";
import { LinkedInIcon, XIcon } from "./SocialIcons";
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
    title: "Company",
    links: [
      { label: "Products", href: "/#products" },
      { label: "Void AI", href: "https://void.aethyl.com" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { label: CONTACT.email, href: `mailto:${CONTACT.email}` },
      { label: "LinkedIn", href: CONTACT.linkedin },
      { label: "X / Twitter", href: CONTACT.x },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A software studio building custom dashboards, CRM, mobile apps and
              automation for growing businesses around the world.
            </p>
            <div className="mt-5 flex gap-2">
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Aethyl Global on LinkedIn"
                className="flex size-9 items-center justify-center rounded-md border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <LinkedInIcon className="size-4" />
              </a>
              <a
                href={CONTACT.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Aethyl Global on X"
                className="flex size-9 items-center justify-center rounded-md border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <XIcon className="size-4" />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h2 className="mb-4 text-sm font-medium">{col.title}</h2>
              <ul className="space-y-2.5 text-sm">
                {col.links.map((l) => {
                  const cls = "break-all text-muted-foreground transition-colors hover:text-foreground";
                  const internal = l.href.startsWith("/");
                  return (
                    <li key={l.href}>
                      {internal ? (
                        <Link href={l.href} className={cls}>
                          {l.label}
                        </Link>
                      ) : (
                        <a
                          href={l.href}
                          {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className={cls}
                        >
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

        <div className="mt-12 flex flex-col gap-2 border-t pt-6 text-[13px] text-subtle sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Aethyl Global</p>
          <p>Remote · {CONTACT.regions}</p>
        </div>
      </div>
    </footer>
  );
}
