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
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.35]);

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 md:py-36 px-6 bg-mint overflow-hidden text-ink"
    >
      <div ref={containerRef} className="max-w-[1240px] w-full mx-auto">
        <motion.div
          ref={ref}
          className="relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ scale: glowScale, opacity: glowOpacity }}
          >
            <div
              className="absolute w-[700px] h-[700px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.9) 0%, transparent 70%)",
                top: "50%",
                left: "60%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </motion.div>

          <div className="relative z-10 max-w-[840px]">
            <div className="eyebrow mb-6 text-ink/60">Let&apos;s talk</div>

            <AnimatedText
              text="Your operating system partner."
              as="h2"
              className="framer-subheading text-ink max-w-2xl mb-6"
              delay={0.2}
            />

            <motion.p
              className="text-sm sm:text-base text-ink/70 max-w-xl mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Bring us the network you want to connect, the operations you want
              to automate, or the software you want to run. Aethyl Global builds
              it on one platform — and keeps it running.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <a
                href="mailto:aethylglobal@gmail.com"
                className="btn-primary text-[11px] px-8 py-4 w-full sm:w-auto"
              >
                Talk to our team
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#quote"
                className="btn-secondary text-ink px-8 py-4 w-full sm:w-auto"
              >
                Request a demo
              </a>
            </motion.div>

            <motion.p
              className="text-xs text-ink/60 mt-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              Or reach us directly at{" "}
              <a
                href="mailto:aethylglobal@gmail.com"
                className="text-ink font-semibold underline underline-offset-2 hover:opacity-70 transition-opacity"
              >
                aethylglobal@gmail.com
              </a>{" "}
              •{" "}
              <a
                href="tel:+971547400553"
                className="text-ink font-semibold underline underline-offset-2 hover:opacity-70 transition-opacity"
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
