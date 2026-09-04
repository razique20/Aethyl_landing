"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Layers } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To be the best web development agency in Dubai, delivering custom websites, mobile apps, and enterprise software that helps businesses scale faster and operate smarter.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "A global economy where every business has access to world-class digital infrastructure — custom websites, mobile applications, and AI automation — regardless of size or location.",
  },
  {
    icon: Layers,
    title: "What We Build",
    description:
      "Custom website development with Next.js and React, cross-platform mobile applications with React Native and Flutter, CRM systems, SaaS platforms, and Void AI-powered enterprise automation.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-40 px-6 bg-black">
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
            About Aethyl Technologies.
          </h2>
          <p className="text-lg text-apple-gray max-w-2xl mx-auto leading-relaxed font-medium">
            We are a leading web development agency in Dubai specializing in custom website development, mobile app development, CRM systems, and AI-powered enterprise automation.
          </p>
        </motion.div>

        {/* Pillar cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                className="group relative bg-secondary-bg rounded-[32px] p-12 transition-all duration-700 hover:bg-[#1d1d1f]"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center mb-8 group-hover:bg-apple-blue transition-colors duration-500"
                >
                  <Icon className="w-5 h-5 text-white transition-transform duration-500" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-sm text-apple-gray leading-snug font-normal">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


