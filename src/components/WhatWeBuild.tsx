"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Layout, Wrench, ArrowRight } from "lucide-react";

const offerings = [
  {
    icon: Layout,
    title: "Custom Websites",
    description:
      "High-performance, pixel-perfect websites built with modern frameworks. From corporate presence to interactive showcases — engineered for conversion.",
    tags: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    icon: Code,
    title: "SaaS Platforms",
    description:
      "End-to-end product engineering for SaaS startups and enterprises. Auth, billing, dashboards, APIs — the full stack, delivered fast.",
    tags: ["TypeScript", "PostgreSQL", "Stripe"],
  },
  {
    icon: Wrench,
    title: "Developer Tools",
    description:
      "Custom SDKs, APIs, and CLI tools that accelerate your team. Built to integrate seamlessly with your existing infrastructure.",
    tags: ["REST APIs", "SDKs", "Automation"],
  },
];

export default function WhatWeBuild() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="whatwbuild" className="relative py-20 sm:py-32 md:py-40 px-5 sm:px-6 bg-black">
      <div ref={ref} className="max-w-7xl w-full mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-32"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="accent-line mx-auto mb-8" style={{ width: 40 }} />
          <h2 className="corp-heading mb-8 text-white">
            What We Build.
          </h2>
          <p className="text-lg text-apple-gray max-w-2xl mx-auto leading-relaxed font-medium">
            Beyond infrastructure — we ship production-ready digital products.
            From first commit to launch day.
          </p>
        </motion.div>

        {/* Offering cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {offerings.map((offering, index) => {
            const Icon = offering.icon;
            return (
              <motion.div
                key={offering.title}
                className="group relative bg-secondary-bg rounded-2xl sm:rounded-[32px] p-7 sm:p-10 md:p-12 transition-all duration-700 hover:bg-[#1d1d1f] border border-white/[0.04]"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: index * 0.15,
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-black flex items-center justify-center mb-5 sm:mb-8 group-hover:bg-accent transition-colors duration-500">
                  <Icon className="w-5 h-5 text-white transition-transform duration-500 group-hover:scale-110" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">
                  {offering.title}
                </h3>
                <p className="text-sm text-apple-gray leading-snug font-normal mb-8">
                  {offering.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {offering.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-lg bg-black/60 border border-white/[0.06] text-[11px] text-apple-gray font-medium tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-sm text-apple-gray mb-6">
            Have a project in mind? We&apos;ll scope it, build it, and launch it.
          </p>
          <a
            href="#contact"
            className="btn-accent px-8 py-3.5 text-sm font-semibold gap-2"
          >
            Start a Project
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
