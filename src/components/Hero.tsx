"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const stats = [
  { value: "3", label: "Core systems: network, automation, software" },
  { value: "24/7", label: "Autonomous operations with Void AI" },
  { value: "<100ms", label: "Void AI agent response time" },
  { value: "Global", label: "Built in Dubai, deployed worldwide" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white pt-[132px] sm:pt-[150px]"
    >
      {/* Background wash */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[900px] h-[900px] rounded-full opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(93,242,172,0.28) 0%, transparent 65%)",
            top: "-30%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(23,185,212,0.18) 0%, transparent 70%)",
            bottom: "-20%",
            right: "-10%",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1240px] w-full mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Copy */}
          <div>
          {/* Eyebrow */}
          <motion.div
            className="flex justify-start mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="pill-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
              Aethyl Global — Enterprise Operating System
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-[clamp(34px,4.6vw,58px)] leading-[1.02] font-extrabold tracking-[-0.035em] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="display-italic">Network-native</span>
            <br />
            infrastructure,
            <br />
            automation &amp; software.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-base sm:text-lg text-corporate-gray max-w-[520px] mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            Aethyl Global is an operating system company. We build the networks
            your business connects through, the automation that runs it, and the
            software you already depend on — one platform, one integration.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="#quote"
              className="btn-primary px-8 py-4"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#services"
              className="btn-secondary px-8 py-4"
            >
              Explore the Platform
            </a>
          </motion.div>
        </div>

        {/* Product visual */}
        <motion.div
          className="mt-4 sm:mt-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero-visual.jpg"
              alt="Watercolor wireframe sketches of website layouts"
              className="w-full h-auto mix-blend-multiply [filter:brightness(1.14)_contrast(1.06)] [-webkit-mask-image:radial-gradient(ellipse_62%_62%_at_50%_50%,_black_70%,_transparent_100%)] [mask-image:radial-gradient(ellipse_62%_62%_at_50%_50%,_black_70%,_transparent_100%)]"
            />
          </div>
        </motion.div>
        </div>
      </div>

      {/* Stats band */}
      <div className="mt-16 sm:mt-24 bg-ink text-white">
        <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              className="py-8 sm:py-10 px-2 sm:px-8 first:pl-0 flex flex-col justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-[28px] sm:text-[34px] font-extrabold tracking-[-0.03em] leading-none mb-2">
                {stat.value}
              </p>
              <p className="text-[12px] sm:text-[13px] text-white/60 leading-snug max-w-[200px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="max-w-[1240px] mx-auto px-6 py-4 border-t border-white/10 flex items-center gap-2 text-[11px] text-white/40 uppercase tracking-[0.18em] font-medium">
          <Calendar className="w-3.5 h-3.5" />
          Operating since 2024 · Dubai, UAE
        </div>
      </div>
    </section>
  );
}
