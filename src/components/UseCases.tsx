"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShoppingCart, Briefcase, Smartphone, Globe } from "lucide-react";

const useCases = [
  {
    icon: ShoppingCart,
    title: "Marketplaces",
    description:
      "Power buyer-seller transactions with built-in escrow, automated releases on delivery confirmation, and dispute arbitration. From luxury goods to digital assets.",
    features: ["Milestone payments", "Buyer protection", "Seller verification"],
    color: "from-neon-blue to-cyan-400",
  },
  {
    icon: Briefcase,
    title: "Freelance Platforms",
    description:
      "Secure project-based payments with milestone escrow, timesheet verification, and automatic fund release. Protect both clients and freelancers.",
    features: [
      "Smart milestones",
      "Auto time-tracking",
      "Multi-currency payout",
    ],
    color: "from-neon-purple to-violet-400",
  },
  {
    icon: Smartphone,
    title: "Service Apps",
    description:
      "Enable trust in on-demand services with real-time payment holds, service completion triggers, and instant settlement for gig workers.",
    features: ["Real-time holds", "Geo-verified completion", "Instant payouts"],
    color: "from-neon-pink to-rose-400",
  },
  {
    icon: Globe,
    title: "Cross-Border Commerce",
    description:
      "Eliminate intermediaries in international trade with multi-chain settlement, currency conversion, and compliance-ready documentation.",
    features: ["Multi-chain", "Fiat off-ramps", "Trade compliance"],
    color: "from-amber-400 to-orange-500",
  },
];

export default function UseCases() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="usecases" className="relative py-32 px-6">
      <div className="section-divider mb-32" />

      <div ref={ref} className="max-w-6xl w-full mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm uppercase tracking-[0.3em] text-neon-pink mb-4 block font-medium">
            Use Cases
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Built for{" "}
            <span className="gradient-text">Every Platform</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re building the next marketplace, freelance hub, or
            on-demand service — Aethyl scales with your ambition.
          </p>
        </motion.div>

        {/* Use case cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={useCase.title}
                className="group relative glass rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:translate-y-[-4px]"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.12, duration: 0.6 }}
              >
                {/* Gradient blur background */}
                <div
                  className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${useCase.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700`}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center opacity-80`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {useCase.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 leading-relaxed text-sm mb-6">
                    {useCase.description}
                  </p>

                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-2">
                    {useCase.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-3 py-1.5 rounded-full glass text-gray-300 font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
