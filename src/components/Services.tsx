"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Code2, Blocks, Webhook, Lock, Zap } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Escrow API",
    description:
      "Non-custodial smart escrow with multi-signature releases, milestone-based payments, and automated dispute handling. One API call to secure any transaction.",
    tag: "Core Product",
    color: "text-neon-blue",
    borderColor: "group-hover:border-neon-blue/30",
  },
  {
    icon: Blocks,
    title: "Multi-Chain Settlement",
    description:
      "Settle across Ethereum, Polygon, Solana, and more. Our unified abstraction layer handles routing, gas optimization, and finality — seamlessly.",
    tag: "Infrastructure",
    color: "text-neon-purple",
    borderColor: "group-hover:border-neon-purple/30",
  },
  {
    icon: Code2,
    title: "Developer SDK",
    description:
      "TypeScript-first SDK with React hooks, REST & GraphQL APIs, webhooks, and sandbox environments. Build production-ready integrations in hours.",
    tag: "Developer Tools",
    color: "text-neon-green",
    borderColor: "group-hover:border-neon-green/30",
  },
  {
    icon: Lock,
    title: "Identity & KYC",
    description:
      "On-chain identity verification with privacy-preserving zero-knowledge proofs. Comply with regulations without compromising user sovereignty.",
    tag: "Compliance",
    color: "text-neon-pink",
    borderColor: "group-hover:border-neon-pink/30",
  },
  {
    icon: Webhook,
    title: "Webhooks & Events",
    description:
      "Real-time event streaming for every transaction state change. Integrate with your existing systems using reliable, ordered webhook delivery.",
    tag: "Integration",
    color: "text-neon-blue",
    borderColor: "group-hover:border-neon-blue/30",
  },
  {
    icon: Zap,
    title: "Instant Payouts",
    description:
      "Fiat off-ramps and crypto payouts in 180+ countries. Automated treasury management with configurable settlement windows.",
    tag: "Payments",
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
            Products & Services
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            The <span className="gradient-text">Complete Stack</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Everything you need to build trustless, secure, and scalable digital
            commerce — from escrow to settlement.
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
              escrow.ts
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
              <span className="text-gray-300"> escrow = </span>
              <span className="text-neon-purple">await</span>
              <span className="text-neon-blue"> Aethyl</span>
              <span className="text-gray-300">.escrow.</span>
              <span className="text-neon-blue">create</span>
              <span className="text-gray-300">({"{"}</span>
              {"\n"}
              <span className="text-gray-300">{"  "}amount: </span>
              <span className="text-neon-green">5000</span>
              <span className="text-gray-300">,</span>
              {"\n"}
              <span className="text-gray-300">{"  "}currency: </span>
              <span className="text-neon-green">&apos;USDC&apos;</span>
              <span className="text-gray-300">,</span>
              {"\n"}
              <span className="text-gray-300">{"  "}chain: </span>
              <span className="text-neon-green">&apos;polygon&apos;</span>
              <span className="text-gray-300">,</span>
              {"\n"}
              <span className="text-gray-300">{"  "}milestones: [</span>
              <span className="text-neon-green">&apos;design&apos;</span>
              <span className="text-gray-300">, </span>
              <span className="text-neon-green">&apos;development&apos;</span>
              <span className="text-gray-300">, </span>
              <span className="text-neon-green">&apos;delivery&apos;</span>
              <span className="text-gray-300">],</span>
              {"\n"}
              <span className="text-gray-300">{"})"}</span>
              {"\n\n"}
              <span className="text-gray-500">
                {"// "}Secure, trustless, 3 lines of code ✨
              </span>
            </code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
