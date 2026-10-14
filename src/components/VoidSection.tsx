"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap } from "lucide-react";

export default function VoidSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="void"
      className="relative py-24 sm:py-32 md:py-40 px-6 bg-ink overflow-hidden text-white"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[140px] opacity-25" style={{ background: "radial-gradient(circle, #5df2ac 0%, transparent 70%)" }} />

      <div ref={ref} className="max-w-[1240px] w-full mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center">
          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pill-badge pill-badge-dark mb-8">
              <Zap className="w-3 h-3 text-mint" />
              <span className="text-mint font-semibold tracking-wide uppercase">
                Powered by Groq LPU
              </span>
            </div>

            <div className="eyebrow mb-5 text-white/40">Automation layer</div>

            <h2 className="framer-subheading mb-8 text-white">
              <span className="display-italic-mint">Void AI.</span>
              <br />
              The workforce that never clocks out.
            </h2>

            <p className="text-base sm:text-lg text-white/60 mb-10 leading-relaxed max-w-xl">
              Autonomous agents that run the repetitive half of your business —
              scheduling, data entry, customer routing, reconciliation and
              reporting — inside the systems you already use, with every action
              logged and bounded by your policy.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <div className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-[13px] font-medium">
                Sub-100ms Response
              </div>
              <div className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-[13px] font-medium">
                Omnichannel Ready
              </div>
              <div className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-[13px] font-medium">
                Human-in-the-loop
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:aethylglobal@gmail.com?subject=Free%20Demo%20Request%20-%20Void%20AI&body=Hello,%0A%0AI%20am%20interested%20in%20a%20free%20demo%20of%20Void%20AI.%20Please%20share%20more%20details%20and%20schedule%20a%20demo%20at%20your%20earliest%20convenience.%0A%0AName:%20%0ACompany:%20%0AWebsite:%20%0ANotes:%20%0A"
                className="btn-mint px-7 py-3.5"
              >
                Free Demo
              </a>
              <a
                href="mailto:aethylglobal@gmail.com?subject=Investment%20or%20Partnership%20Opportunity%20-%20Void%20AI&body=Hello,%0A%0AI%20am%20interested%20in%20exploring%20investment%20or%20partnership%20opportunities%20with%20Aethyl%20Global.%20I%20would%20like%20to%20discuss%20how%20we%20can%20work%20together.%0A%0AName:%20%0ACompany:%20%0ARole:%20%0AInvestment%20Interest:%20%0ANotes:%20%0A"
                className="btn-secondary text-white px-7 py-3.5"
              >
                Investor / Partner
              </a>
            </div>
          </motion.div>

          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="rounded-[24px] border border-white/10 relative z-10 overflow-hidden shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/void-dashboard.png"
                alt="Void AI Fleet Overview - Autonomous agent management dashboard"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
