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
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.08]);

  return (
    <section id="contact" className="relative py-24 md:py-44 px-6 bg-background overflow-hidden">
      <div ref={containerRef} className="max-w-6xl w-full mx-auto">
        <motion.div
          ref={ref}
          className="relative rounded-3xl md:rounded-[2.5rem] p-10 md:p-24 text-center overflow-hidden border border-border"
          style={{
            background:
              "linear-gradient(135deg, rgba(161,0,255,0.08) 0%, rgba(17,17,24,0.9) 50%, rgba(161,0,255,0.04) 100%)",
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
              className="absolute w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, #00C9A7 0%, transparent 70%)",
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
              className="corp-heading mb-8 text-white max-w-3xl mx-auto"
              delay={0.2}
            />

            <motion.p
              className="text-base md:text-lg text-corporate-gray max-w-xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.8,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Join forward-thinking companies building on Aethyl&apos;s enterprise
              infrastructure. From autonomous AI to custom platforms — we make
              it happen.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 1,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <a
                href="mailto:aethylglobal@gmail.com"
                className="btn-accent text-base px-10 py-4 font-semibold w-full sm:w-auto"
              >
                <span className="flex items-center justify-center gap-2">
                  Start Building
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
              <a
                href="tel:+971547400553"
                className="btn-outline text-base px-10 py-4 font-semibold w-full sm:w-auto"
              >
                Talk to Sales
              </a>
            </motion.div>

            <motion.p
              className="text-xs text-corporate-gray mt-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              Or reach us directly at{' '}
              <a href="mailto:aethylglobal@gmail.com" className="text-white hover:text-accent transition-colors">
                aethylglobal@gmail.com
              </a>{' '}
              •{' '}
              <a href="tel:+971547400553" className="text-white hover:text-accent transition-colors">
                +971 547 400 553
              </a>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
