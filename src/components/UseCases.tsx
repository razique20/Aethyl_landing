"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useCallback } from "react";
import { ShoppingCart, Briefcase, Smartphone, Globe } from "lucide-react";

const useCases = [
  {
    icon: Globe,
    title: "Global Logistics",
    description:
      "Automate cross-border transactions with non-custodial smart escrow triggered by real-world events.",
    color: "#6c5ce7",
  },
  {
    icon: Briefcase,
    title: "Real Estate & M&A",
    description:
      "Secure high-value asset transfers with multi-signature releases and conditional holds.",
    color: "#4f46e5",
  },
  {
    icon: Smartphone,
    title: "Gig Economy",
    description:
      "Power freelance platforms with milestone-based rewards and instant global payouts.",
    color: "#06b6d4",
  },
  {
    icon: ShoppingCart,
    title: "Marketplaces",
    description:
      "Enable trustless commerce for luxury goods with built-in buyer-seller protection.",
    color: "#8b5cf6",
  },
];

function UseCaseCard({
  useCase,
  index,
  isInView,
}: {
  useCase: typeof useCases[0];
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

  const Icon = useCase.icon;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="spotlight-card group relative rounded-[20px] border border-white/[0.06] bg-[rgba(255,255,255,0.02)] p-7 sm:p-8 transition-all duration-500 hover:border-white/[0.12] hover:bg-[rgba(255,255,255,0.04)]"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-6 transition-all duration-500"
        style={{ background: `${useCase.color}12` }}
      >
        <Icon className="w-5 h-5" style={{ color: useCase.color }} />
      </div>
      <h3 className="text-lg font-semibold text-white tracking-tight mb-2">
        {useCase.title}
      </h3>
      <p className="text-[14px] text-[#888] leading-relaxed">
        {useCase.description}
      </p>
    </motion.div>
  );
}

export default function UseCases() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="usecases" className="relative py-24 sm:py-32 md:py-40 px-6 bg-[#0a0a0a]">
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
            Built for Every Platform.
          </h2>
          <p className="text-base text-[#888] max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re building the next marketplace or
            on-demand service — Aethyl scales with your ambition.
          </p>
        </motion.div>

        {/* Use case cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={useCase.title}
              useCase={useCase}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
