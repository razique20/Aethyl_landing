"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="section-divider mb-32" />

      <div ref={ref} className="max-w-4xl w-full mx-auto">
        <motion.div
          className="relative glass rounded-3xl p-12 sm:p-16 text-center overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Background radial accent */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute w-[600px] h-[600px] rounded-full opacity-10"
              style={{
                background:
                  "radial-gradient(circle, rgba(0,212,255,0.3) 0%, rgba(168,85,247,0.15) 50%, transparent 70%)",
                top: "-200px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
          </div>

          <div className="relative z-10">
            <motion.span
              className="text-sm uppercase tracking-[0.3em] text-neon-blue mb-6 block font-medium"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              Get Started
            </motion.span>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Build the Future?
          </h2>

            <p className="text-lg text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
              Join thousands of developers building trustless commerce with
              Aethyl. Start with our free tier — no credit card required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-black overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink" />
                <span className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  Start Building
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white glass transition-all duration-300 hover:scale-105 neon-border"
              >
                Talk to Sales
              </a>
            </div>

            {/* Trust signals */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-green" />
                SOC 2 Compliant
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-green" />
                99.9% SLA
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-green" />
                Free Sandbox
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
