"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useCallback } from "react";
import { Share2, Bot, LayoutDashboard, Building2 } from "lucide-react";

const useCases = [
  {
    icon: Share2,
    title: "Networks & marketplaces",
    description:
      "Connect partners, sellers and platforms into one deal network with automated distribution and commission settlement.",
    color: "#17b9d4",
  },
  {
    icon: Bot,
    title: "AI & agentic platforms",
    description:
      "Ship agents that act inside your business — bounded by policy, sub-100ms, with every action logged.",
    color: "#6d5ae6",
  },
  {
    icon: LayoutDashboard,
    title: "Operations teams",
    description:
      "Replace Excel-based warehouse, inventory and back-office workflows with live dashboards and automated reporting.",
    color: "#0fa968",
  },
  {
    icon: Building2,
    title: "Enterprises scaling software",
    description:
      "Run CRM, SaaS products and internal tooling on one operating system, from MVP to multi-market rollout.",
    color: "#0ea5e9",
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
      className="spotlight-card card group p-7 sm:p-8 h-full"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center mb-6 transition-all duration-500"
        style={{ background: `${useCase.color}1A` }}
      >
        <Icon className="w-5 h-5" style={{ color: useCase.color }} />
      </div>
      <h3 className="text-lg font-bold text-ink tracking-[-0.02em] mb-2">
        {useCase.title}
      </h3>
      <p className="text-[14px] text-corporate-gray leading-relaxed">
        {useCase.description}
      </p>
    </motion.div>
  );
}

export default function UseCases() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="usecases" className="relative py-24 sm:py-32 md:py-40 px-6 bg-lavender">
      <div ref={ref} className="max-w-[1240px] w-full mx-auto">
        {/* Section header */}
        <motion.div
          className="max-w-[760px] mb-14 sm:mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="eyebrow mb-6">Who builds on Aethyl</div>
          <h2 className="framer-subheading text-ink mb-6">
            Built for every
            <br />
            <span className="display-italic">kind of operation.</span>
          </h2>
          <p className="text-base sm:text-lg text-corporate-gray leading-relaxed mb-8">
            Whether you&apos;re wiring up a partner network, automating a
            back office, or running software you already own — Aethyl Global
            scales with your ambition.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:aethylglobal@gmail.com?subject=Free%20Demo%20Request%20-%20Aethyl%20Global&body=Hello,%0A%0AI%20am%20interested%20in%20a%20free%20demo%20of%20the%20Aethyl%20Global%20operating%20system.%20Please%20share%20more%20details%20and%20schedule%20a%20demo%20at%20your%20earliest%20convenience.%0A%0AName:%20%0ACompany:%20%0AWebsite:%20%0ANotes:%20%0A"
              className="btn-primary px-7 py-3.5"
            >
              Free Demo
            </a>
            <a
              href="mailto:aethylglobal@gmail.com?subject=Investment%20or%20Partnership%20Opportunity%20-%20Aethyl%20Global&body=Hello,%0A%0AI%20am%20interested%20in%20exploring%20investment%20or%20partnership%20opportunities%20with%20Aethyl%20Global.%20I%20would%20like%20to%20discuss%20how%20we%20can%20work%20together.%0A%0AName:%20%0ACompany:%20%0ARole:%20%0AInvestment%20Interest:%20%0ANotes:%20%0A"
              className="btn-secondary px-7 py-3.5"
            >
              Investor / Partner
            </a>
          </div>
        </motion.div>

        {/* Use case cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
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
