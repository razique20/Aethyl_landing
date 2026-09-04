"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare } from "lucide-react";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-16 sm:py-28 md:py-40 bg-secondary-bg overflow-hidden">
      <div ref={ref} className="max-w-7xl w-full mx-auto px-6">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <motion.div
            className="accent-line mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 40 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.h2
            className="text-[36px] md:text-[56px] font-bold leading-[1.05] tracking-[-0.02em] text-white max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            From the teams using it.
          </motion.h2>
        </div>

        {/* Empty state — testimonials placeholder */}
        <motion.div
          className="flex flex-col items-center justify-center py-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-6">
            <MessageSquare className="w-7 h-7 text-white/20" />
          </div>
          <p className="text-lg font-medium text-white/50 mb-2">
            Testimonials coming soon.
          </p>
          <p className="text-sm text-corporate-gray max-w-sm">
            We&apos;re gathering feedback from teams building on Aethyl. Check back soon.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
