"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-24 md:py-40 px-6">
      <div ref={ref} className="max-w-5xl w-full mx-auto">
        <motion.div
          className="relative bg-secondary-bg rounded-[32px] md:rounded-[2.5rem] p-10 md:p-24 text-center overflow-hidden border border-white/5"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Background radial accent */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full opacity-[0.05]"
              style={{
                background: "radial-gradient(circle, #0071e3 0%, transparent 70%)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>

          <div className="relative z-10">
            <h2 className="apple-heading mb-8 text-white">
              Ready to Build <br className="hidden sm:block" /> the Future?
            </h2>

            <p className="text-base md:text-lg text-apple-gray max-w-xl mx-auto mb-12 leading-relaxed">
              Join thousands of businesses architecting the future of global
              commerce with Aethyl and VOID. Start building today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <a
                href="#"
                className="btn-pill bg-white text-black text-base px-8 py-4 font-semibold hover:bg-white/90 w-full sm:w-auto"
              >
                <span className="flex items-center justify-center gap-2">
                  Start Building
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
              <a
                href="#"
                className="btn-pill border border-white/10 text-white text-base px-8 py-4 font-semibold hover:bg-white/5 w-full sm:w-auto"
              >
                Talk to Sales
              </a>
            </div>

            {/* Trust signals */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[10px] text-apple-gray font-medium tracking-widest uppercase">
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-apple-blue" />
                SOC 2 Compliant
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-apple-blue" />
                99.9% SLA
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-apple-blue" />
                Free Sandbox
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


