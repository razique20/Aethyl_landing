"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Logo from "./Logo";
import { buttonVariants, cn } from "./ui";
import { services } from "@/data/services";
import { AUDIT_CTA, CONTACT } from "@/lib/site";

const links = [
  { label: "Studio", href: "/#studio" },
  { label: "Process", href: "/#process" },
  { label: "Journal", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  // Home opens on a dark hero, so the bar starts dark and turns light on scroll.
  const overHero = pathname === "/" && !scrolled && !open;

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (href: string) =>
    cn(
      "link-draw py-1 text-[14px] transition-colors hover:text-foreground",
      pathname === href ? "text-foreground" : "text-muted-foreground"
    );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[background-color,border-color,color] duration-500",
        overHero
          ? "theme-dark border-b border-transparent !bg-transparent"
          : scrolled || open
            ? "border-b border-border bg-background/85 backdrop-blur-xl"
            : "border-b border-transparent bg-background"
      )}
    >
      <div className="container-page flex h-[72px] items-center gap-8">
        <Logo />

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {/* Services menu: opens on hover or keyboard focus, no JS needed */}
            <li className="group relative">
              <Link href="/services" className={linkClass("/services")}>
                Services
              </Link>
              <div className="invisible absolute -left-5 top-full pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <ul className="w-[340px] rounded-xl border bg-popover p-2 shadow-xl shadow-black/[0.08]">
                  {services.map((s, i) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="flex items-baseline gap-4 rounded-lg px-3 py-3 transition-colors hover:bg-accent"
                      >
                        <span className="text-[11px] tabular-nums text-subtle">0{i + 1}</span>
                        <span>
                          <span className="font-display block text-xl leading-tight">{s.name}</span>
                          <span className="mt-1 block text-[13px] leading-snug text-muted-foreground">
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

        <div className="ml-auto flex items-center gap-3">
          <Link href={AUDIT_CTA.href} className={buttonVariants({ variant: "audit", size: "sm" })}>
            <span className="sm:hidden">Free audit</span>
            <span className="hidden sm:inline">{AUDIT_CTA.label}</span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 items-center gap-2 rounded-full border border-input px-4 text-[13px] text-foreground md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-[72px] overflow-y-auto bg-background md:hidden">
          <nav aria-label="Mobile" className="container-page flex min-h-full flex-col py-8">
            <ul>
              {[{ label: "Services", href: "/services" }, ...links].map((l, i) => (
                <li key={l.href} className="rise border-b" style={{ animationDelay: `${i * 60}ms` }}>
                  <Link href={l.href} className="flex items-baseline justify-between py-4">
                    <span className="font-display text-[40px] leading-none">{l.label}</span>
                    <span className="text-[11px] tabular-nums text-subtle">0{i + 1}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="label mt-10">Services</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-[15px] text-muted-foreground">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-10">
              <Link
                href={AUDIT_CTA.href}
                className={buttonVariants({ variant: "audit", size: "lg", className: "w-full" })}
              >
                {AUDIT_CTA.label}
                <ArrowRight aria-hidden="true" />
              </Link>
              <a href={`mailto:${CONTACT.email}`} className="mt-4 block text-center text-sm text-muted-foreground">
                {CONTACT.email}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
