"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useCallback } from "react";
import { Network, Users, DollarSign, ArrowRightLeft } from "lucide-react";

const steps = [
  {
    icon: Network,
    title: "Partner Integration",
    description: "Partners connect to the Offrion API to manage high-value deals.",
    color: "#6c5ce7",
  },
  {
    icon: ArrowRightLeft,
    title: "Distribution",
    description: "Deals are dynamically distributed across various API endpoints.",
    color: "#4f46e5",
  },
  {
    icon: Users,
    title: "User Claims",
    description: "End-users claim deals through partner interfaces, secured by Aethyl.",
    color: "#818cf8",
  },
  {
    icon: DollarSign,
    title: "Commissions",
    description: "Partners instantly claim their commission on every successful deal.",
    color: "#10b981",
  },
];

function StepCard({
  step,
  index,
  isInView,
}: {
  step: typeof steps[0];
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

  const Icon = step.icon;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="spotlight-card group rounded-[20px] border border-white/[0.06] bg-[rgba(255,255,255,0.02)] p-7 transition-all duration-500 hover:border-white/[0.12] hover:bg-[rgba(255,255,255,0.04)]"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: 0.2 + index * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-all duration-500"
        style={{ background: `${step.color}12` }}
      >
        <Icon className="w-5 h-5" style={{ color: step.color }} />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">
        {step.title}
      </h3>
      <p className="text-[14px] text-[#888] leading-relaxed">
        {step.description}
      </p>
    </motion.div>
  );
}

export default function Ecosystem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ecosystem" className="relative py-24 sm:py-32 md:py-40 px-6 bg-[#0a0a0a]">
      <div ref={ref} className="max-w-[1200px] w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="framer-subheading mb-6 text-white">
              The Offrion{" "}
              <br />
              <span className="gradient-text">Engine.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#888] mb-10 leading-relaxed">
              Offrion is the premier implementation of our Deal Architecture,
              monetizing every transaction through automated commissions.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {steps.map((step, index) => (
                <StepCard
                  key={step.title}
                  step={step}
                  index={index}
                  isInView={isInView}
                />
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:aethylglobal@gmail.com?subject=Free%20Demo%20Request%20-%20Offrion%20Engine&body=Hello,%0A%0AI%20am%20interested%20in%20a%20free%20demo%20of%20Offrion%20Engine.%20Please%20share%20more%20details%20and%20schedule%20a%20demo%20at%20your%20earliest%20convenience.%0A%0AName:%20%0ACompany:%20%0AWebsite:%20%0ANotes:%20%0A"
                className="btn-primary px-8 py-3.5 text-[15px]"
              >
                Free Demo
              </a>
              <a
                href="mailto:aethylglobal@gmail.com?subject=Investment%20or%20Partnership%20Opportunity%20-%20Offrion%20Engine&body=Hello,%0A%0AI%20am%20interested%20in%20exploring%20investment%20or%20partnership%20opportunities%20with%20Offrion.%20I%20would%20like%20to%20discuss%20how%20we%20can%20work%20together.%0A%0AName:%20%0ACompany:%20%0ARole:%20%0AInvestment%20Interest:%20%0ANotes:%20%0A"
                className="btn-secondary px-8 py-3.5 text-[15px]"
              >
                Investor / Partner
              </a>
            </div>
          </motion.div>

          {/* Visual side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="rounded-[24px] border border-white/[0.06] relative z-10 overflow-hidden shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/offrion-showcase.png"
                alt="Offrion API Showcase - Interactive deal cards and generated code"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
