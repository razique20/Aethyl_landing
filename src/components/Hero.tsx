"use client";

import { motion } from "framer-motion";
import { useRef, useCallback } from "react";
import {
  Smartphone,
  Zap,
  Cpu,
  Code,
  Layout,
  LayoutDashboard,
  ArrowRight,
} from "lucide-react";

const services = [
  { icon: Layout, label: "Custom Websites", color: "#6c5ce7" },
  { icon: Smartphone, label: "Mobile Apps", color: "#06b6d4" },
  { icon: Cpu, label: "Void AI Agents", color: "#8b5cf6" },
  { icon: Code, label: "SaaS Platforms", color: "#3b82f6" },
  { icon: LayoutDashboard, label: "Dashboards", color: "#10b981" },
  { icon: Zap, label: "Instant Settlement", color: "#f59e0b" },
];

function SpotlightCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  }, []);

  const Icon = service.icon;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="spotlight-card group relative rounded-2xl border border-white/[0.06] bg-[rgba(255,255,255,0.02)] p-5 sm:p-6 transition-all duration-500 hover:border-white/[0.12] hover:bg-[rgba(255,255,255,0.04)] cursor-default"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.6 + index * 0.08,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-500"
        style={{ background: `${service.color}15` }}
      >
        <Icon
          className="w-5 h-5 transition-colors duration-500"
          style={{ color: service.color }}
        />
      </div>
      <p className="text-[13px] font-medium text-[#ccc]">
        {service.label}
      </p>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[700px] h-[700px] rounded-full opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, #6c5ce7 0%, transparent 70%)",
            top: "10%",
            right: "-15%",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #4f46e5 0%, transparent 70%)",
            bottom: "5%",
            left: "-10%",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-6 pt-32 sm:pt-40 pb-20 sm:pb-32">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <motion.div
              className="pill-badge mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
              <span>Enterprise Infrastructure & Custom Development</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="framer-heading text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Build. Ship.{" "}
              <span className="gradient-text-purple">Scale.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-base sm:text-lg text-[#888] max-w-lg mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              The best web development agency in Dubai. We build custom websites,
              mobile applications, CRM systems, SaaS platforms, and warehouse
              management dashboards — engineered to power modern business.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <a
                href="#quote"
                className="btn-primary px-8 py-3.5 text-[15px] font-semibold"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="btn-secondary px-8 py-3.5 text-[15px] font-semibold"
              >
                Explore Services
              </a>
            </motion.div>
          </div>

          {/* Right: Bento Grid */}
          <motion.div
            className="grid grid-cols-2 gap-3"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {services.map((service, index) => (
              <SpotlightCard key={service.label} service={service} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
