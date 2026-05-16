"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShoppingCart, Briefcase, Smartphone, Globe } from "lucide-react";

const useCases = [
  {
    icon: Globe,
    title: "Global Logistics",
    description:
      "Automate cross-border transactions with non-custodial smart escrow triggered by real-world events.",
  },
  {
    icon: Briefcase,
    title: "Real Estate & M&A",
    description:
      "Secure high-value asset transfers with multi-signature releases and conditional holds.",
  },
  {
    icon: Smartphone,
    title: "Gig Economy",
    description:
      "Power freelance platforms with milestone-based rewards and instant global payouts.",
  },
  {
    icon: ShoppingCart,
    title: "Marketplaces",
    description:
      "Enable trustless commerce for luxury goods with built-in buyer-seller protection.",
  },
];

export default function UseCases() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="usecases" className="relative py-40 px-6 bg-secondary-bg">
      <div ref={ref} className="max-w-7xl w-full mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-32"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="apple-heading mb-8 text-white">
            Built for Every Platform.
          </h2>
          <p className="text-lg text-apple-gray max-w-2xl mx-auto leading-relaxed font-medium">
            Whether you&apos;re building the next marketplace or
            on-demand service — Aethyl scales with your ambition.
          </p>
        </motion.div>

        {/* Use case cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={useCase.title}
                className="group relative bg-black rounded-[32px] p-10 overflow-hidden transition-all duration-700 hover:bg-[#1d1d1f]"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-10 h-10 rounded-xl bg-[#1d1d1f] flex items-center justify-center mb-8 group-hover:bg-apple-blue transition-colors duration-500">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white tracking-tight mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-apple-gray leading-snug font-normal">
                    {useCase.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


