"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import Logo, { LogoMark } from "./Logo";
import { buttonVariants, cn } from "./ui";
import { pillars } from "@/data/services";
import { AUDIT_CTA, CONTACT } from "@/lib/site";
import { haptic } from "@/lib/haptics";

const links = [
  { label: "About", href: "/#about" },
  { label: "Process", href: "/#process" },
  { label: "Journal", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const mobileLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  ...links,
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const progress = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  // Home opens on the hero, so the bar starts transparent and fills in on scroll.
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
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      // Mobile reading-progress line, updated without re-rendering.
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progress.current) progress.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    };
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
        // Phones: no bar at all, just floating square buttons.
        "max-md:border-b-0 max-md:!bg-transparent max-md:backdrop-blur-none",
        overHero
          ? "theme-dark border-b border-transparent !bg-transparent"
          : scrolled || open
            ? "border-b border-border bg-background/85 backdrop-blur-xl"
            : "border-b border-transparent bg-background"
      )}
    >
      <div
        ref={progress}
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-lime md:hidden"
      />
      <div className="container-page relative z-10 flex h-[72px] items-center gap-8">
        <Logo className="max-md:hidden" />
        <Link
          href="/"
          aria-label="Aethyl Global — home"
          className="relative flex size-12 items-center justify-center transition-transform active:scale-90 md:hidden"
        >
          <LogoMark className="size-10" />
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {/* Services menu: opens on hover or keyboard focus, no JS needed */}
            <li className="group relative">
              <Link href="/services" className={linkClass("/services")}>
                Services
              </Link>
              <div className="invisible absolute -left-5 top-full pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <ul className="w-[360px] border bg-popover p-2">
                  {pillars.map((p, i) => (
                    <li key={p.id}>
                      <Link
                        href={p.href ?? `/services#${p.id}`}
                        className="flex items-baseline gap-4 px-3 py-3 transition-colors hover:bg-accent"
                      >
                        <span className="text-[11px] tabular-nums text-subtle">0{i + 1}</span>
                        <span>
                          <span className="font-display block text-lg uppercase leading-tight">{p.name}</span>
                          <span className="mt-1 block text-[13px] leading-snug text-muted-foreground">
                            {p.items
                              .slice(0, 3)
                              .map((item) => item.label)
                              .join(", ")}
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
          <Link
            href={AUDIT_CTA.href}
            className={buttonVariants({ variant: "audit", size: "sm", className: "max-md:hidden" })}
          >
            {AUDIT_CTA.label}
          </Link>
          <button
            type="button"
            onClick={() => {
              haptic();
              setOpen((v) => !v);
            }}
            className="relative flex size-12 items-center justify-center bg-ink text-white ring-1 ring-white/15 transition-transform active:scale-90 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {/* Two-line burger that morphs into an X */}
            <span aria-hidden="true" className="relative block h-3 w-[18px]">
              <span
                className={cn(
                  "absolute left-0 h-[2px] w-full bg-current transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-[2px] w-full bg-current transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu: full-screen off-white sheet with oversized links */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        inert={!open}
        className={cn(
          "theme-light fixed inset-0 overflow-y-auto transition-[opacity,visibility] duration-500 md:hidden",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <nav aria-label="Mobile" className="flex min-h-full flex-col px-5 pb-8 pt-[96px]">
          <p className="label flex items-center gap-3">
            <span className="mark !size-2" aria-hidden="true" />
            Menu
          </p>
          <ul className="mt-5 border-t">
            {mobileLinks.map((l, i) => (
              <li
                key={l.href}
                className={cn(
                  "border-b transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                )}
                style={{ transitionDelay: open ? `${80 + i * 55}ms` : "0ms" }}
              >
                <Link
                  href={l.href}
                  onClick={() => {
                    haptic();
                    setOpen(false);
                  }}
                  className="group flex items-center justify-between py-4 active:opacity-60"
                >
                  <span className="font-display text-[40px] uppercase leading-none">{l.label}</span>
                  <ArrowUpRight
                    className={cn(
                      "size-6 transition-colors",
                      pathname === l.href ? "text-blue" : "text-input"
                    )}
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div
            className={cn(
              "mt-auto pt-10 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
              open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            )}
            style={{ transitionDelay: open ? "450ms" : "0ms" }}
          >
            <a
              href={`mailto:${CONTACT.email}`}
              className="mb-5 block text-center text-sm text-muted-foreground"
            >
              {CONTACT.email}
            </a>
            <Link
              href={AUDIT_CTA.href}
              onClick={() => setOpen(false)}
              className="flex h-14 w-full items-center justify-center gap-2 bg-blue text-[15px] font-medium text-white transition-transform active:scale-[0.97]"
            >
              {AUDIT_CTA.label}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
