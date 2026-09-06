"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useCallback } from "react";
import { Code, Layout, Wrench, LayoutDashboard, ArrowRight } from "lucide-react";

const offerings = [
  {
    icon: Layout,
    title: "Custom Websites",
    description:
      "High-performance, pixel-perfect websites built with modern frameworks. From corporate presence to interactive showcases — engineered for conversion.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    color: "#6c5ce7",
  },
  {
    icon: Code,
    title: "SaaS Platforms",
    description:
      "End-to-end product engineering for SaaS startups and enterprises. Auth, billing, dashboards, APIs — the full stack, delivered fast.",
    tags: ["TypeScript", "PostgreSQL", "Stripe"],
    color: "#4f46e5",
  },
  {
    icon: LayoutDashboard,
    title: "Warehouse Dashboards",
    description:
      "Replace Excel-based warehouse management with real-time dashboards. Inventory tracking, order management, and operational analytics — custom-built for your workflow.",
    tags: ["Real-time Data", "Inventory", "Analytics"],
    color: "#10b981",
  },
  {
    icon: Wrench,
    title: "Developer Tools",
    description:
      "Custom SDKs, APIs, and CLI tools that accelerate your team. Built to integrate seamlessly with your existing infrastructure.",
    tags: ["REST APIs", "SDKs", "Automation"],
    color: "#8b5cf6",
  },
];

function OfferingCard({
  offering,
  index,
  isInView,
}: {
  offering: typeof offerings[0];
  index: number;
  isInView: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  }, []);

  const Icon = offering.icon;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="spotlight-card group relative rounded-[20px] border border-white/[0.06] bg-[rgba(255,255,255,0.02)] p-8 sm:p-10 transition-all duration-500 hover:border-white/[0.12] hover:bg-[rgba(255,255,255,0.04)]"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.12,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-500"
        style={{ background: `${offering.color}12` }}
      >
        <Icon className="w-5 h-5" style={{ color: offering.color }} />
      </div>

      <h3 className="text-lg font-semibold text-white mb-3 tracking-tight">
        {offering.title}
      </h3>
      <p className="text-[14px] text-[#888] leading-relaxed mb-6">
        {offering.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2">
        {offering.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[11px] text-[#999] font-medium tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function WhatWeBuild() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="whatwbuild" className="relative py-24 sm:py-32 md:py-40 px-6 bg-black">
      <div ref={ref} className="max-w-[1200px] w-full mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="accent-line mx-auto mb-6" style={{ width: 40 }} />
          <h2 className="framer-subheading text-white mb-5">
            What We Build.
          </h2>
          <p className="text-base text-[#888] max-w-2xl mx-auto leading-relaxed">
            Beyond infrastructure — we ship production-ready digital products.
            From first commit to launch day.
          </p>
        </motion.div>

        {/* Offering cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {offerings.map((offering, index) => (
            <OfferingCard
              key={offering.title}
              offering={offering}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-sm text-[#888] mb-6">
            Have a project in mind? We&apos;ll scope it, build it, and launch it.
          </p>
          <a
            href="#contact"
            className="btn-primary px-8 py-3.5 text-sm font-semibold"
          >
            Start a Project
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
