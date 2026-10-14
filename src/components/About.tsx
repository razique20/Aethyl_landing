"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useCallback } from "react";
import { Layers, Network, Zap } from "lucide-react";

const pillars = [
  {
    icon: Layers,
    title: "One operating system",
    description:
      "Aethyl Global is not a development agency. We are an operating system company: the network layer, the automation layer and the software layer run as one platform, under one contract, with one integration.",
    color: "#0fa968",
  },
  {
    icon: Network,
    title: "Networks we build",
    description:
      "Partner endpoints, marketplaces and platforms connected through the Offrion network — deals distributed across APIs, claimed by end users and settled with commissions paid out automatically.",
    color: "#17b9d4",
  },
  {
    icon: Zap,
    title: "Automation we run",
    description:
      "Void AI agents operate the busywork around the clock — scheduling, data entry, routing and reporting — with sub-100ms responses on Groq LPU, plugged straight into the systems you already use.",
    color: "#6d5ae6",
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
      className="spotlight-card card group p-8 sm:p-10"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.12,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-all duration-500"
        style={{ background: `${pillar.color}1A` }}
      >
        <Icon className="w-5 h-5" style={{ color: pillar.color }} />
      </div>

      <h3 className="text-xl font-bold text-ink mb-3 tracking-[-0.02em]">
        {pillar.title}
      </h3>
      <p className="text-[14px] text-corporate-gray leading-relaxed">
        {pillar.description}
      </p>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 sm:py-32 md:py-40 px-6 bg-white">
      <div ref={ref} className="max-w-[1240px] w-full mx-auto">
        {/* Section header */}
        <motion.div
          className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-16 items-end mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <div className="eyebrow mb-6">About Aethyl Global</div>
            <h2 className="framer-subheading text-ink">
              Not an agency.
              <br />
              <span className="display-italic">An operating system.</span>
            </h2>
          </div>
          <p className="text-base sm:text-[17px] text-corporate-gray leading-relaxed max-w-xl">
            We used to ship websites and apps. Today Aethyl Global builds the
            networks businesses connect through, the automation that keeps them
            running, and the products we already operate — Void AI, the Offrion
            deal engine, and the dashboards our clients run their days on.
          </p>
        </motion.div>

        {/* Pillar cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
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
