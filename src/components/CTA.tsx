"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import AnimatedText from "./AnimatedText";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });
  const glowScale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.1]);

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-24 md:py-40 px-6 bg-black overflow-hidden"
    >
      <div ref={containerRef} className="max-w-[1000px] w-full mx-auto">
        <motion.div
          ref={ref}
          className="relative rounded-[28px] p-10 sm:p-14 md:p-20 text-center overflow-hidden border border-white/[0.06]"
          style={{
            background:
              "linear-gradient(135deg, rgba(108,92,231,0.06) 0%, rgba(10,10,10,0.95) 50%, rgba(79,70,229,0.04) 100%)",
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ scale: glowScale, opacity: glowOpacity }}
          >
            <div
              className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full"
              style={{
                background: "radial-gradient(circle, #6c5ce7 0%, transparent 70%)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </motion.div>

          <div className="relative z-10">
            <motion.div
              className="accent-line mx-auto mb-8"
              initial={{ width: 0 }}
              animate={isInView ? { width: 40 } : {}}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />

            <AnimatedText
              text="Ready to Reinvent Your Business?"
              as="h2"
              className="framer-subheading text-white max-w-2xl mx-auto mb-6"
              delay={0.2}
            />

            <motion.p
              className="text-sm sm:text-base text-[#888] max-w-xl mx-auto mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Join forward-thinking companies building on Aethyl&apos;s enterprise
              infrastructure. From autonomous AI to custom platforms — we make
              it happen.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-3"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <a
                href="mailto:aethylglobal@gmail.com"
                className="btn-primary text-[15px] px-8 py-3.5 font-semibold w-full sm:w-auto"
              >
                Start Building
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+971547400553"
                className="btn-secondary text-[15px] px-8 py-3.5 font-semibold w-full sm:w-auto"
              >
                Talk to Sales
              </a>
            </motion.div>

            <motion.p
              className="text-xs text-[#666] mt-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              Or reach us directly at{" "}
              <a
                href="mailto:aethylglobal@gmail.com"
                className="text-white hover:text-accent transition-colors"
              >
                aethylglobal@gmail.com
              </a>{" "}
              •{" "}
              <a
                href="tel:+971547400553"
                className="text-white hover:text-accent transition-colors"
              >
                +971 547 400 553
              </a>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
