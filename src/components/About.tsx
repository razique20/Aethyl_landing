"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useCallback } from "react";
import { Target, Eye, Layers } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To be the best web development agency in Dubai, delivering custom websites, mobile apps, and enterprise software that helps businesses scale faster and operate smarter.",
    color: "#6c5ce7",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "A global economy where every business has access to world-class digital infrastructure — custom websites, mobile applications, and AI automation — regardless of size or location.",
    color: "#4f46e5",
  },
  {
    icon: Layers,
    title: "What We Build",
    description:
      "Custom website development with Next.js and React, cross-platform mobile applications with React Native and Flutter, CRM systems, SaaS platforms, warehouse management dashboards, and Void AI-powered enterprise automation.",
    color: "#818cf8",
  },
];

function PillarCard({
  pillar,
  index,
  isInView,
}: {
  pillar: typeof pillars[0];
  index: number;
  isInView: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  }, []);

  const Icon = pillar.icon;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="spotlight-card group relative rounded-[20px] border border-white/[0.06] bg-[rgba(255,255,255,0.02)] p-8 sm:p-10 transition-all duration-500 hover:border-white/[0.12] hover:bg-[rgba(255,255,255,0.04)]"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.12,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-500"
        style={{ background: `${pillar.color}12` }}
      >
        <Icon className="w-5 h-5" style={{ color: pillar.color }} />
      </div>

      <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
        {pillar.title}
      </h3>
      <p className="text-[14px] text-[#888] leading-relaxed">
        {pillar.description}
      </p>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 sm:py-32 md:py-40 px-6 bg-black">
      <div ref={ref} className="max-w-[1200px] w-full mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="accent-line mx-auto mb-6" style={{ width: 40 }} />
          <h2 className="framer-subheading text-white mb-5">
            About Aethyl Global.
          </h2>
          <p className="text-base text-[#888] max-w-2xl mx-auto leading-relaxed">
            We are a leading web development agency in Dubai specializing in
            custom website development, mobile app development, CRM systems,
            warehouse management dashboards, and AI-powered enterprise automation.
          </p>
        </motion.div>

        {/* Pillar cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {pillars.map((pillar, index) => (
            <PillarCard
              key={pillar.title}
              pillar={pillar}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
