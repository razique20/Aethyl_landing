"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Zap,
  Cpu,
  Code,
  Layout,
  Wrench,
  ArrowRight,
} from "lucide-react";

const services = [
  { icon: Smartphone, label: "Mobile Application" },
  { icon: Zap, label: "Instant Settlement" },
  { icon: Cpu, label: "Void AI Agents" },
  { icon: Code, label: "SaaS Platforms" },
  { icon: Layout, label: "Custom Websites" },
  { icon: Wrench, label: "Developer Tools" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] sm:min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full opacity-[0.06]"
          style={{
            background:
              "radial-gradient(circle, #00C9A7 0%, transparent 70%)",
            top: "20%",
            right: "-10%",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full opacity-[0.04]"
          style={{
            background:
              "radial-gradient(circle, #0071e3 0%, transparent 70%)",
            bottom: "10%",
            left: "-5%",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-5 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20 md:pt-40 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2.5 px-3 sm:px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-medium text-corporate-gray tracking-wide">
                Enterprise Infrastructure & Custom Development
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.02em] text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Build. Ship.{" "}
              <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
                Scale.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-base md:text-lg text-corporate-gray max-w-lg mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              The best web development agency in Dubai. We build custom websites,
              mobile applications, CRM systems, and SaaS platforms — engineered
              to power modern business.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10 sm:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <a
                href="#quote"
                className="btn-accent px-8 py-3.5 text-[15px] font-semibold gap-2 text-center"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="btn-outline px-8 py-3.5 text-[15px] font-semibold text-center"
              >
                Explore Services
              </a>
            </motion.div>

            {/* Trust line */}
            <motion.div
              className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] sm:text-[11px] text-corporate-gray font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-accent" />
                SOC 2 Ready
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-accent" />
                99.9% Uptime
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-accent" />
                Free Sandbox
              </span>
            </motion.div>
          </div>

          {/* Right: Service grid */}
          <motion.div
            className="grid grid-cols-2 gap-2.5 sm:gap-3"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.label}
                  className="group p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-500 cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.5 + index * 0.08,
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="w-9 h-9 rounded-xl bg-white/[0.06] flex items-center justify-center mb-2.5 sm:mb-3 group-hover:bg-accent/20 transition-colors duration-500">
                    <Icon className="w-4 h-4 text-corporate-gray group-hover:text-accent transition-colors duration-500" />
                  </div>
                  <p className="text-[12px] sm:text-[13px] font-medium text-white/80 tracking-tight">
                    {service.label}
                  </p>
                </motion.div>
              );
            })}

            {/* Stats card */}
            <motion.div
              className="col-span-2 p-4 sm:p-5 rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.03] to-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-corporate-gray font-medium uppercase tracking-widest mb-1">
                    Active Projects
                  </p>
                  <p className="text-2xl font-bold text-white">40+</p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] text-corporate-gray font-medium uppercase tracking-widest mb-1">
                    Response Time
                  </p>
                  <p className="text-2xl font-bold text-accent">&lt;100ms</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
