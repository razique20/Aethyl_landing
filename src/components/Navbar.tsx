"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Platform", href: "#services" },
  { label: "Products", href: "#whatwbuild" },
  { label: "Automation", href: "#void" },
  { label: "Network", href: "#ecosystem" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Announcement bar */}
      <div className="w-full bg-accent-blue text-white text-[11px] sm:text-[12px] font-medium tracking-wide text-center px-4 py-2">
        Aethyl Global is now the operating system for networks &amp;
        automation.{" "}
        <a href="#contact" className="underline underline-offset-2 hover:opacity-80 transition-opacity">
          Talk to us
        </a>
      </div>

      <motion.nav
        style={{ top: scrolled ? 0 : 36 }}
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2" : "py-3 sm:py-4"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div
            className={`flex items-center justify-between rounded-[28px] px-5 sm:px-7 py-3 transition-all duration-500 ${
              scrolled
                ? "bg-ink shadow-[0_10px_40px_-20px_rgba(11,13,14,0.6)]"
                : "bg-ink"
            }`}
          >
            {/* Logo */}
            <a href="#hero" className="flex items-baseline gap-2 shrink-0">
              <span className="text-[16px] font-extrabold text-white tracking-[-0.02em] uppercase">
                Aethyl
              </span>
              <span className="text-[9px] font-medium text-white/50 uppercase tracking-[0.2em] hidden sm:inline">
                Global
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-[13px] font-medium text-white/70 hover:text-white transition-colors duration-300 rounded-full hover:bg-white/10"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA + Mobile */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="#contact"
                className="hidden sm:inline-flex btn-secondary text-white text-[11px] px-5 py-2.5"
              >
                Talk to us
              </a>
              <a
                href="#quote"
                className="hidden sm:inline-flex btn-mint text-[11px] px-5 py-2.5"
              >
                Get Started
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden text-white w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-ink flex flex-col items-center justify-center gap-8 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-3xl font-semibold text-white/60 hover:text-white transition-colors py-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#quote"
              onClick={() => setMobileOpen(false)}
              className="btn-mint text-xs px-8 py-4 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              Get Started
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
