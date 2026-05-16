"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Layers } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To provide the world's most secure and automated transaction infrastructure, enabling businesses to bridge the gap between traditional commerce and digital evolution.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "A global economy where high-value transactions are executed with mathematical certainty — independent of borders, bureaucracy, or doubt.",
  },
  {
    icon: Layers,
    title: "Core Offerings",
    description:
      "Deals Architecture for complex workflows, Escrow APIs for secure settlement, and the VOID AI platform for autonomous neural operations.",
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
          <h2 className="apple-heading mb-8 text-white">
            Building the Trust Layer.
          </h2>
          <p className="text-lg text-apple-gray max-w-2xl mx-auto leading-relaxed font-medium">
            We&apos;re engineering the foundational infrastructure that powers secure,
            transparent, and scalable global commerce.
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


