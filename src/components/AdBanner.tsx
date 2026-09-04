"use client";

import { useState } from "react";
import { X, ArrowRight } from "lucide-react";

export default function AdBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative w-full bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 border-b border-accent/20">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 py-3 px-6 text-center">
        <p className="text-sm font-medium text-white">
          🔥 Custom Websites starting at just{" "}
          <span className="font-bold text-accent">1,500 AED</span>
        </p>
        <a
          href="#quote"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-white transition-colors"
        >
          Get Started
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
          aria-label="Close banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
