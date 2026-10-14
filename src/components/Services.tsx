"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useCallback } from "react";
import { Network, Zap, Boxes, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Network,
    eyebrow: "Networks",
    title: "Build the network layer",
    description:
      "Connect partners, platforms and marketplaces into one deal network. Offrion distributes offers across your API endpoints, end users claim them through your interface, and every commission settles automatically.",
    color: "#17b9d4",
  },
  {
    icon: Zap,
    eyebrow: "Automation",
    title: "Automate the operations",
    description:
      "Void AI agents run the repetitive work end to end — scheduling, data entry, customer routing, reconciliation and reporting — on Groq LPU inference with sub-100ms responses and human-in-the-loop controls.",
    color: "#0fa968",
  },
  {
    icon: Boxes,
    eyebrow: "Existing products",
    title: "Run what already works",
    description:
      "Dashboards, CRM, SaaS platforms and mobile apps we already build and operate — warehouse management, inventory analytics and enterprise tooling, delivered on the same operating system.",
    color: "#6d5ae6",
  },
];

function ServiceCard({
  service,
  index,
  isInView,
}: {
  service: typeof services[0];
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

  const Icon = service.icon;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="spotlight-card card group p-8 sm:p-10 flex flex-col"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-7 transition-all duration-500"
        style={{ background: `${service.color}1A` }}
      >
        <Icon className="w-6 h-6" style={{ color: service.color }} />
      </div>

      <div className="eyebrow mb-3">{service.eyebrow}</div>
      <h3 className="text-[22px] sm:text-2xl font-bold text-ink tracking-[-0.03em] mb-4 leading-tight">
        {service.title}
      </h3>
      <p className="text-[14px] sm:text-[15px] text-corporate-gray leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-24 sm:py-32 md:py-40 px-6 bg-cloud">
      <div ref={ref} className="max-w-[1240px] w-full mx-auto">
        <motion.div
          className="max-w-[760px] mb-14 sm:mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="eyebrow mb-6">What you can build</div>
          <h2 className="framer-subheading text-ink mb-6">
            Three systems.
            <br />
            <span className="display-italic">One integration.</span>
          </h2>
          <p className="text-base sm:text-lg text-corporate-gray leading-relaxed">
            Take the network, the automation, or the software you run today.
            Start with one, add the others as an API enablement — never a second
            integration, never a second contract.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Code snippet preview */}
        <motion.div
          className="mt-12 sm:mt-16 rounded-[28px] border border-ink/10 bg-ink p-8 sm:p-10 overflow-hidden relative"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-between gap-3 mb-8 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-white/15" />
                <div className="w-3 h-3 rounded-full bg-white/15" />
                <div className="w-3 h-3 rounded-full bg-white/15" />
              </div>
              <span className="ml-2 text-xs text-white/40 font-mono tracking-widest uppercase">
                aethyl.js
              </span>
            </div>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-mint">
              One API · every module
            </span>
          </div>
          <pre className="text-sm sm:text-base font-mono overflow-x-auto leading-relaxed">
            <code className="text-white/80">
              <span className="text-mint">const</span>
              <span className="text-white"> network = </span>
              <span className="text-mint">await</span>
              <span className="text-white"> Aethyl.connect({"{"}</span>
              {"\n"}
              <span className="text-white">{"  "}modules: [</span>
              <span className="text-white/60">&apos;network&apos;</span>
              <span className="text-white">, </span>
              <span className="text-white/60">&apos;automation&apos;</span>
              <span className="text-white">, </span>
              <span className="text-white/60">&apos;products&apos;</span>
              <span className="text-white">],</span>
              {"\n"}
              <span className="text-white">{"  "}automation: </span>
              <span className="text-white/60">&apos;void-ai&apos;</span>
              <span className="text-white">,</span>
              {"\n"}
              <span className="text-white">{"  "}settlement: {"{"} mode: </span>
              <span className="text-white/60">&apos;instant&apos;</span>
              <span className="text-white"> {"}"}</span>
              {"\n"}
              <span className="text-white">{"})"}</span>
            </code>
          </pre>
          <div className="mt-8">
            <a
              href="#quote"
              className="btn-mint text-[11px] px-6 py-3"
            >
              Request API Access
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
