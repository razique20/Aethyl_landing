"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";
import ServiceIcon from "./ServiceIcon";
import { buttonVariants, cn } from "./ui";
import { services } from "@/data/services";
import { AUDIT_CTA } from "@/lib/site";

const links = [
  { label: "Products", href: "/#products" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu on navigation (state reset during render).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = (href: string) =>
    cn(
      "rounded-md px-3 py-2 text-sm transition-colors hover:text-foreground",
      pathname === href ? "text-foreground" : "text-muted-foreground"
    );

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center gap-6">
        <Logo />

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center">
            {/* Services menu: opens on hover or keyboard focus, no JS needed */}
            <li className="group relative">
              <Link
                href="/services"
                className={cn(linkClass("/services"), "inline-flex items-center gap-1")}
              >
                Services
                <ChevronDown
                  className="size-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
                  aria-hidden="true"
                />
              </Link>
              <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <ul className="grid w-[520px] grid-cols-2 gap-1 rounded-xl border bg-popover p-2 shadow-2xl shadow-black/40">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="flex gap-3 rounded-lg p-3 transition-colors hover:bg-accent"
                      >
                        <ServiceIcon name={s.icon} className="mt-0.5 size-4 shrink-0 text-teal" />
                        <span>
                          <span className="block text-sm font-medium">{s.name}</span>
                          <span className="mt-1 line-clamp-2 block text-[13px] leading-snug text-muted-foreground">
                            {s.highlights[0]}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkClass(l.href)}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Link
            href={AUDIT_CTA.href}
            className={buttonVariants({ variant: "audit", size: "sm" })}
          >
            <span className="sm:hidden">Free audit</span>
            <span className="hidden sm:inline">{AUDIT_CTA.label}</span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={buttonVariants({ variant: "ghost", size: "sm", className: "md:hidden" })}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-background md:hidden">
          <nav aria-label="Mobile" className="container-page py-4">
            <p className="px-1 pb-2 pt-2 text-xs font-medium text-subtle">Services</p>
            <ul className="mb-4">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="flex items-center gap-3 rounded-md px-1 py-3 text-base"
                  >
                    <ServiceIcon name={s.icon} className="size-4 text-teal" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="border-t pt-2">
              {[{ label: "All services", href: "/services" }, ...links].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="block rounded-md px-1 py-3 text-base">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={AUDIT_CTA.href}
              className={buttonVariants({ variant: "audit", size: "lg", className: "mt-6 w-full" })}
            >
              {AUDIT_CTA.label}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
