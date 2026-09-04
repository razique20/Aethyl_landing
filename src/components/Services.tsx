"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, Cpu } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Custom Website Development",
    description: "High-performance custom websites built with Next.js, React, and Tailwind CSS. From business sites to enterprise platforms — engineered for conversion and SEO.",
  },
  {
    icon: Zap,
    title: "Mobile App Development",
    description: "Cross-platform mobile applications built with React Native and Flutter. iOS and Android from a single codebase — faster delivery, lower cost.",
  },
  {
    icon: Cpu,
    title: "AI-Powered Automation",
    description: "Void AI agents for enterprise workflow automation. Autonomous scheduling, data entry, and customer routing — powered by Groq LPU for sub-100ms execution.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-20 sm:py-32 md:py-40 px-5 sm:px-6 bg-black">
      <div ref={ref} className="max-w-7xl w-full mx-auto">
        <motion.div
          className="text-center mb-32"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="accent-line mx-auto mb-8" style={{ width: 40 }} />
          <h2 className="corp-heading mb-8 text-white">
            Our Development Services.
          </h2>
          <p className="text-lg text-apple-gray max-w-2xl mx-auto leading-relaxed font-medium">
            Full-service web development, mobile app development, and AI automation — serving clients in Dubai, UAE, and globally.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-secondary-bg rounded-2xl sm:rounded-[32px] p-7 sm:p-10 md:p-12 flex flex-col items-center text-center group hover:bg-[#1d1d1f] transition-all duration-700"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-black flex items-center justify-center mb-5 sm:mb-8 group-hover:bg-apple-blue transition-colors duration-500">
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
          className="mt-20 sm:mt-24 md:mt-32 bg-secondary-bg rounded-2xl sm:rounded-[40px] p-6 sm:p-10 md:p-12 overflow-hidden relative group border border-white/5 shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-6 sm:mb-10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
            </div>
            <span className="ml-2 text-xs text-apple-gray font-mono tracking-widest uppercase">
              Aethyl.js
            </span>
          </div>
          <pre className="text-sm sm:text-base md:text-lg font-mono overflow-x-auto leading-relaxed">
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
