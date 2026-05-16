"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, MessageSquare, ShieldAlert, FileText, Zap } from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "Neural Memory",
    description: "Persistent longitudinal context across multi-day conversations and channels.",
  },
  {
    icon: MessageSquare,
    title: "Mission Control",
    description: "Real-time Human-in-the-Loop takeover for high-stakes business environments.",
  },
  {
    icon: FileText,
    title: "Rapid Ingestion",
    description: "Train operatives in seconds using URLs, PDFs, DOCX, or CSVs.",
  },
  {
    icon: ShieldAlert,
    title: "System Guard",
    description: "Autonomous monitoring that alerts you via WhatsApp when anomalies are detected.",
  },
];

export default function VoidSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="void" className="relative py-40 px-6 bg-black overflow-hidden">
      {/* Background glow for VOID */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-apple-blue/5 rounded-full blur-[120px] opacity-50" />

      <div ref={ref} className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-apple-blue/10 border border-apple-blue/20 mb-8">
              <Zap className="w-3 h-3 text-apple-blue" />
              <span className="text-[10px] font-bold text-apple-blue tracking-widest uppercase">
                Powered by Groq LPU
              </span>
            </div>
            
            <h2 className="apple-heading mb-10 text-white">
              VOID: The Neural <br />
              <span className="text-apple-gray">Agency.</span>
            </h2>
            
            <p className="text-lg text-apple-gray mb-12 leading-relaxed font-medium">
              A high-fidelity AI operative platform designed for businesses that require 
              an invisible, infallible, and infinite workforce.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <div className="px-5 py-2.5 rounded-xl bg-secondary-bg border border-white/5 text-white text-xs font-medium">
                Sub-100ms Response
              </div>
              <div className="px-5 py-2.5 rounded-xl bg-secondary-bg border border-white/5 text-white text-xs font-medium">
                Omnichannel Ready
              </div>
            </div>

            <a
              href="#"
              className="btn-pill bg-white text-black px-8 py-3 hover:bg-white/90 text-sm"
            >
              Deploy Operative
            </a>
          </motion.div>

          {/* Grid side */}
          <div className="grid sm:grid-cols-2 gap-6">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                className="p-8 rounded-[32px] bg-secondary-bg border border-white/5 hover:bg-[#1d1d1f] transition-all duration-700 group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center mb-6 group-hover:bg-apple-blue transition-colors duration-500">
                  <cap.icon className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2 tracking-tight">{cap.title}</h3>
                <p className="text-xs text-apple-gray leading-snug font-normal">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
