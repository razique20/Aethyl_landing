"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useCallback } from "react";
import { Bot, Share2, LayoutDashboard, Smartphone, Boxes, Wrench, ArrowRight } from "lucide-react";

const offerings = [
  {
    icon: Bot,
    title: "Void AI",
    description:
      "Autonomous agents for scheduling, data entry, customer routing and reporting — the automation layer of the Aethyl operating system.",
    tags: ["AI Agents", "Groq LPU", "Sub-100ms"],
    color: "#6d5ae6",
  },
  {
    icon: Share2,
    title: "Offrion Engine",
    description:
      "The deal network: partners integrate once, offers distribute across endpoints, users claim them and commissions settle instantly.",
    tags: ["Deal Network", "API", "Commissions"],
    color: "#0fa968",
  },
  {
    icon: LayoutDashboard,
    title: "Operations Dashboards",
    description:
      "Warehouse, inventory and operational dashboards replacing Excel-based workflows with real-time tracking and analytics.",
    tags: ["Real-time", "Inventory", "Analytics"],
    color: "#17b9d4",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Apps",
    description:
      "Production websites, React Native and Flutter apps, shipped fast on the same platform your network and automation live on.",
    tags: ["Next.js", "React Native", "Flutter"],
    color: "#0ea5e9",
  },
  {
    icon: Boxes,
    title: "CRM & SaaS Platforms",
    description:
      "Auth, billing, dashboards and APIs for platforms that need to scale — engineered as long-lived products, not one-off builds.",
    tags: ["TypeScript", "PostgreSQL", "Billing"],
    color: "#0fa968",
  },
  {
    icon: Wrench,
    title: "Developer Tools",
    description:
      "SDKs, REST APIs and CLI tooling that plug Aethyl into the systems your team already runs, without a migration.",
    tags: ["REST APIs", "SDKs", "Webhooks"],
    color: "#6d5ae6",
  },
];

function OfferingCard({
  offering,
  index,
  isInView,
}: {
  offering: typeof offerings[0];
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

  const Icon = offering.icon;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="spotlight-card card group p-7 sm:p-8 flex flex-col h-full"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: (index % 3) * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="flex items-center gap-4 mb-5">
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-500"
          style={{ background: `${offering.color}1A` }}
        >
          <Icon className="w-5 h-5" style={{ color: offering.color }} />
        </div>
        <h3 className="text-lg font-bold text-ink tracking-[-0.02em]">
          {offering.title}
        </h3>
      </div>

      <p className="text-[14px] text-corporate-gray leading-relaxed mb-6 flex-1">
        {offering.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2">
        {offering.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1.5 rounded-full bg-ink/[0.04] border border-ink/[0.08] text-[11px] text-corporate-gray font-medium tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function WhatWeBuild() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="whatwbuild" className="relative py-24 sm:py-32 md:py-40 px-6 bg-white">
      <div ref={ref} className="max-w-[1240px] w-full mx-auto">
        {/* Section header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 sm:mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="max-w-[640px]">
            <div className="eyebrow mb-6">The catalogue</div>
            <h2 className="framer-subheading text-ink mb-5">
              One integration,
              <br />
              <span className="display-italic">a growing catalogue.</span>
            </h2>
            <p className="text-base sm:text-lg text-corporate-gray leading-relaxed">
              Everything Aethyl Global already operates, composable by default.
              Scope your next system into the package you have — no
              re-integration, no second contract.
            </p>
          </div>
          <a href="#quote" className="btn-secondary shrink-0 self-start sm:self-auto">
            See all modules
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Offering cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {offerings.map((offering, index) => (
            <OfferingCard
              key={offering.title}
              offering={offering}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
