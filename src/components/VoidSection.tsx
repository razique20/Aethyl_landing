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
      className="relative py-24 sm:py-32 md:py-40 px-6 bg-black overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] opacity-40" />

      <div ref={ref} className="max-w-[1200px] w-full mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center">
          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pill-badge mb-8">
              <Zap className="w-3 h-3 text-accent" />
              <span className="text-accent font-semibold tracking-wide uppercase">
                Powered by Groq LPU
              </span>
            </div>

            <h2 className="framer-subheading mb-8 text-white">
              VOID: The Neural{" "}
              <br />
              <span className="text-[#888]">Agency.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#888] mb-10 leading-relaxed">
              A high-fidelity AI operative platform designed for businesses that
              require an invisible, infallible, and infinite workforce.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <div className="px-5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white text-[13px] font-medium">
                Sub-100ms Response
              </div>
              <div className="px-5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white text-[13px] font-medium">
                Omnichannel Ready
              </div>
            </div>

            <a
              href="https://void.aethyl.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-3.5 text-[15px]"
            >
              Deploy Operative
            </a>
          </motion.div>

          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="rounded-[24px] border border-white/[0.06] relative z-10 overflow-hidden shadow-2xl">
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
