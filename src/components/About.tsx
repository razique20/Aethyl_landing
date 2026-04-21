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
    gradient: "from-neon-blue to-neon-green",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "A global economy where high-value transactions are executed with mathematical certainty — independent of borders, bureaucracy, or doubt.",
    gradient: "from-neon-purple to-neon-pink",
  },
  {
    icon: Layers,
    title: "Core Offerings",
    description:
      "Deals Architecture for complex workflows, Escrow APIs for secure settlement, and Blockchain Foundation for a unified global ledger.",
    gradient: "from-neon-pink to-neon-blue",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 px-6">
      <div className="section-divider mb-32" />

      <div ref={ref} className="max-w-6xl w-full mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm uppercase tracking-[0.3em] text-neon-blue mb-4 block font-medium">
            About Aethyl
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Building the Trust Layer
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We&apos;re engineering the foundational infrastructure that powers secure,
            transparent, and scalable Web3 commerce.
          </p>
        </motion.div>

        {/* Pillar cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                className="group relative glass rounded-2xl p-8 transition-all duration-500 hover:translate-y-[-8px]"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                {/* Top gradient border accent */}
                <div
                  className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-6 opacity-80 group-hover:opacity-100 transition-opacity`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
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
