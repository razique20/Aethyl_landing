"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Code2, Blocks, Webhook, Lock, Zap } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Escrow API",
    description:
      "The gold standard for secure, milestone-based payments. Protect any transaction with non-custodial smart escrow and automated dispute resolution.",
    tag: "Core Layer",
    color: "text-neon-blue",
    borderColor: "group-hover:border-neon-blue/30",
  },
  {
    icon: Code2,
    title: "Deals Architecture (Offrion)",
    description:
      "Powered by Offrion. Design complex transaction workflows where partners integrate APIs, distribute deals, and claim automated commissions on user claims.",
    tag: "Workflow",
    color: "text-neon-purple",
    borderColor: "group-hover:border-neon-purple/30",
  },
  {
    icon: Blocks,
    title: "Blockchain Foundation",
    description:
      "A unified abstraction layer connecting any chain or traditional ledger. Settle globally with optimized routing and instant finality.",
    tag: "Infrastructure",
    color: "text-neon-green",
    borderColor: "group-hover:border-neon-green/30",
  },
  {
    icon: Webhook,
    title: "Universal API",
    description:
      "A single integration point for all Aethyl services. Connect your existing ERP, CRM, or custom application in hours, not weeks.",
    tag: "Integration",
    color: "text-neon-pink",
    borderColor: "group-hover:border-neon-pink/30",
  },
  {
    icon: Zap,
    title: "Global Settlement",
    description:
      "Fiat off-ramps and multi-currency payouts in 190+ countries. Real-time liquidity management for cross-border commerce.",
    tag: "Payments",
    color: "text-neon-blue",
    borderColor: "group-hover:border-neon-blue/30",
  },
  {
    icon: Lock,
    title: "Future-Ready Apps",
    description:
      "Our modular system is building the next generation of vertical applications in Real Estate, Trade Finance, and beyond.",
    tag: "Ecosystem",
    color: "text-neon-purple",
    borderColor: "group-hover:border-neon-purple/30",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-32 px-6">
      <div className="section-divider mb-32" />

      <div ref={ref} className="max-w-6xl w-full mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm uppercase tracking-[0.3em] text-neon-purple mb-4 block font-medium">
            The Global Stack
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Comprehensive Digital Trust
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Everything you need to build, secure, and scale global commerce —
            from the underlying ledger to the final deal signature.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className={`group glass rounded-2xl p-8 transition-all duration-500 hover:translate-y-[-4px] border border-transparent ${service.borderColor}`}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <Icon className={`w-8 h-8 ${service.color}`} />
                  <span className="text-xs px-3 py-1 rounded-full glass text-gray-400 font-medium">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Code snippet preview */}
        <motion.div
          className="mt-20 glass rounded-2xl p-8 overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="ml-4 text-xs text-gray-500 font-mono">
              initialize_deal.ts
            </span>
          </div>
          <pre className="text-sm font-mono overflow-x-auto">
            <code>
              <span className="text-neon-purple">import</span>
              <span className="text-gray-300"> {"{ Aethyl }"} </span>
              <span className="text-neon-purple">from</span>
              <span className="text-neon-green"> &apos;@aethyl/sdk&apos;</span>
              {"\n\n"}
              <span className="text-neon-purple">const</span>
              <span className="text-gray-300"> deal = </span>
              <span className="text-neon-purple">await</span>
              <span className="text-neon-blue"> Aethyl</span>
              <span className="text-gray-300">.deals.</span>
              <span className="text-neon-blue">create</span>
              <span className="text-gray-300">({"{"}</span>
              {"\n"}
              <span className="text-gray-300">{"  "}type: </span>
              <span className="text-neon-green">&apos;cross_border_trade&apos;</span>
              <span className="text-gray-300">,</span>
              {"\n"}
              <span className="text-gray-300">{"  "}escrow: {"{"} amount: </span>
              <span className="text-neon-green">250000</span>
              <span className="text-gray-300">, currency: </span>
              <span className="text-neon-green">&apos;USD&apos;</span>
              <span className="text-gray-300"> {"}"},</span>
              {"\n"}
              <span className="text-gray-300">{"  "}settlement: </span>
              <span className="text-neon-green">&apos;hybrid_on_chain&apos;</span>
              <span className="text-gray-300">,</span>
              {"\n"}
              <span className="text-gray-300">{"  "}milestones: [</span>
              {"\n"}
              <span className="text-gray-300">{"    "}</span>
              <span className="text-neon-green">&apos;bill_of_lading_verified&apos;</span>
              <span className="text-gray-300">, </span>
              {"\n"}
              <span className="text-gray-300">{"    "}</span>
              <span className="text-neon-green">&apos;customs_clearance&apos;</span>
              <span className="text-gray-300">,</span>
              {"\n"}
              <span className="text-gray-300">{"    "}</span>
              <span className="text-neon-green">&apos;port_arrival&apos;</span>
              {"\n"}
              <span className="text-gray-300">{"  "}]</span>
              {"\n"}
              <span className="text-gray-300">{"})"}</span>
              {"\n\n"}
              <span className="text-gray-500">
                {"// "}Global commerce, architected in code 🌐
              </span>
            </code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
