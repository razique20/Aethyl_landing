"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { AUDIT_CTA } from "@/lib/site";
import { cn } from "./ui";

/**
 * Phones only: a floating "free call" button that slides in once the visitor
 * has scrolled past the first screen, and steps aside near the page end
 * (where the full CTA and footer are) and on the contact page itself.
 */
export default function MobileCTA() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const fromBottom = document.documentElement.scrollHeight - (y + window.innerHeight);
      setShow(y > window.innerHeight * 0.8 && fromBottom > 1100);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  if (pathname === AUDIT_CTA.href || pathname === "/thank-you") return null;

  return (
    <Link
      href={AUDIT_CTA.href}
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
      className={cn(
        "fixed bottom-4 right-4 z-40 inline-flex h-12 items-center gap-2 bg-blue pl-5 pr-4 text-[14px] font-medium text-white transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-95 md:hidden",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-24 opacity-0"
      )}
    >
      {AUDIT_CTA.short}
      <ArrowRight className="size-4" aria-hidden="true" />
    </Link>
  );
}
