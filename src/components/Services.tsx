"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, Cpu } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Secure Escrow",
    description: "Enterprise-grade non-custodial escrow APIs with multi-signature security.",
  },
  {
    icon: Zap,
    title: "Instant Settlement",
    description: "Global payouts in seconds, not days. Automated and trustless.",
  },
  {
    icon: Cpu,
    title: "Neural AI Operatives",
    description: "Deploy autonomous VOID agents powered by Groq LPU for sub-100ms business logic execution.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-40 px-6 bg-black">
      <div ref={ref} className="max-w-7xl w-full mx-auto">
        <motion.div
          className="text-center mb-32"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="apple-heading mb-8 text-white">
            Architecture for Trust.
          </h2>
          <p className="text-lg text-apple-gray max-w-2xl mx-auto leading-relaxed font-medium">
            Powerful APIs and SDKs built for modern commerce.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-secondary-bg rounded-[32px] p-12 flex flex-col items-center text-center group hover:bg-[#1d1d1f] transition-all duration-700"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center mb-8 group-hover:bg-apple-blue transition-colors duration-500">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white tracking-tight mb-4">
                {service.title}
              </h3>
              <p className="text-sm text-apple-gray leading-snug font-normal">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Code snippet preview - Apple style */}
        <motion.div
          className="mt-32 bg-secondary-bg rounded-[40px] p-12 overflow-hidden relative group border border-white/5 shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
            </div>
            <span className="ml-2 text-xs text-apple-gray font-mono tracking-widest uppercase">
              Aethyl.js
            </span>
          </div>
          <pre className="text-lg font-mono overflow-x-auto leading-relaxed">
            <code className="text-white/80">
              <span className="text-apple-blue">const</span>
              <span className="text-white"> deal = </span>
              <span className="text-apple-blue">await</span>
              <span className="text-white"> Aethyl.deals.create({"{"}</span>
              {"\n"}
              <span className="text-white">{"  "}type: </span>
              <span className="text-apple-gray">&apos;cross_border_trade&apos;</span>
              <span className="text-white">,</span>
              {"\n"}
              <span className="text-white">{"  "}escrow: {"{"} amount: </span>
              <span className="text-white font-bold">250000</span>
              <span className="text-white">, currency: </span>
              <span className="text-apple-gray">&apos;USD&apos;</span>
              <span className="text-white"> {"}"}</span>
              {"\n"}
              <span className="text-white">{"})"}</span>
            </code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
