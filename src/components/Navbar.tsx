"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services", external: false },
  { label: "What We Build", href: "#whatwbuild", external: false },
  { label: "VOID", href: "#void", external: false },
  { label: "Contact", href: "#contact", external: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  useEffect(() => {
    let lastScroll = 0;
    const onScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 50);
      if (currentScroll > lastScroll && currentScroll > 100) {
        setBannerVisible(false);
      } else if (currentScroll < 50) {
        setBannerVisible(true);
      }
      lastScroll = currentScroll;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Ad Banner */}
      {bannerVisible && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 border-b border-accent/20">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-3 py-2.5 sm:py-3 px-10 sm:px-6 text-center">
            <p className="text-xs sm:text-sm font-medium text-white">
              🔥 Custom Websites starting at just{' '}
              <span className="font-bold text-accent">1,500 AED</span>
            </p>
            <a
              href="#quote"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-accent hover:text-white transition-colors"
            >
              Get Started
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => setBannerVisible(false)}
              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors p-2 -m-2"
              aria-label="Close banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <motion.nav
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-2xl py-3"
            : "bg-black/40 backdrop-blur-md py-4"
        }`}
        style={{ top: bannerVisible ? 44 : 0 }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="w-full flex items-center justify-between px-4 sm:px-8 md:px-12">
          {/* Logo / Name */}
          <div className="flex-none flex items-center gap-4">
            <a href="#hero" className="text-base sm:text-lg font-semibold text-white tracking-tight hover:text-apple-gray transition-colors">
              Aethyl
            </a>
            <span className="hidden xl:block text-[10px] uppercase tracking-[0.2em] text-apple-gray border-l border-white/10 pl-4 py-1">
              The Global Operating System.
            </span>
          </div>

          {/* Right Aligned Links */}
          <div className="flex items-center gap-10">
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="text-[12px] font-medium text-white/80 hover:text-white transition-colors duration-300 tracking-wide uppercase"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white w-11 h-11 flex items-center justify-center rounded-full"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-10 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >              {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                onClick={() => setMobileOpen(false)}
                className="text-2xl sm:text-3xl font-medium text-white/60 hover:text-white transition-colors py-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


