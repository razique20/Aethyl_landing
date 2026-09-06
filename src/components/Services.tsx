"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useCallback } from "react";
import { Shield, Zap, Cpu, LayoutDashboard } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Custom Website Development",
    description:
      "High-performance custom websites built with Next.js, React, and Tailwind CSS. From business sites to enterprise platforms — engineered for conversion and SEO.",
    color: "#6c5ce7",
  },
  {
    icon: Zap,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications built with React Native and Flutter. iOS and Android from a single codebase — faster delivery, lower cost.",
    color: "#06b6d4",
  },
  {
    icon: Cpu,
    title: "AI-Powered Automation",
    description:
      "Void AI agents for enterprise workflow automation. Autonomous scheduling, data entry, and customer routing — powered by Groq LPU for sub-100ms execution.",
    color: "#8b5cf6",
  },
  {
    icon: LayoutDashboard,
    title: "Warehouse Dashboard Systems",
    description:
      "Custom warehouse management dashboards for businesses transitioning from Excel. Real-time inventory tracking, order management, and operational analytics.",
    color: "#10b981",
  },
];

function ServiceCard({
  service,
  index,
  isInView,
}: {
  service: typeof services[0];
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

  const Icon = service.icon;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="spotlight-card group relative rounded-[20px] border border-white/[0.06] bg-[rgba(255,255,255,0.02)] p-8 sm:p-10 transition-all duration-500 hover:border-white/[0.12] hover:bg-[rgba(255,255,255,0.04)] flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500"
        style={{ background: `${service.color}12` }}
      >
        <Icon className="w-6 h-6" style={{ color: service.color }} />
      </div>
      <h3 className="text-lg font-semibold text-white tracking-tight mb-3">
        {service.title}
      </h3>
      <p className="text-[14px] text-[#888] leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-24 sm:py-32 md:py-40 px-6 bg-black">
      <div ref={ref} className="max-w-[1200px] w-full mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="accent-line mx-auto mb-6" style={{ width: 40 }} />
          <h2 className="framer-subheading text-white mb-5">
            Our Development Services.
          </h2>
          <p className="text-base text-[#888] max-w-2xl mx-auto leading-relaxed">
            Full-service web development, mobile app development, and AI
            automation — serving clients in Dubai, UAE, and globally.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Code snippet preview */}
        <motion.div
          className="mt-16 rounded-[20px] border border-white/[0.06] bg-[rgba(255,255,255,0.02)] p-8 sm:p-10 overflow-hidden relative"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
            </div>
            <span className="ml-2 text-xs text-[#666] font-mono tracking-widest uppercase">
              Aethyl.js
            </span>
          </div>
          <pre className="text-sm sm:text-base font-mono overflow-x-auto leading-relaxed">
            <code className="text-white/80">
              <span className="text-accent">const</span>
              <span className="text-white"> deal = </span>
              <span className="text-accent">await</span>
              <span className="text-white"> Aethyl.deals.create({"{"}</span>
              {"\n"}
              <span className="text-white">{"  "}type: </span>
              <span className="text-[#888]">&apos;cross_border_trade&apos;</span>
              <span className="text-white">,</span>
              {"\n"}
              <span className="text-white">{"  "}escrow: {"{"} amount: </span>
              <span className="text-white font-bold">250000</span>
              <span className="text-white">, currency: </span>
              <span className="text-[#888]">&apos;USD&apos;</span>
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
