"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "How much does website development cost in Dubai?",
    answer:
      "Custom website development in Dubai starts from 1,500 AED for basic business websites. SaaS platforms and complex web applications range from 15,000 to 75,000+ AED depending on features, integrations, and complexity. We offer transparent pricing with no hidden fees.",
  },
  {
    question: "How much does it cost to build a mobile app in 2026?",
    answer:
      "Mobile app development costs range from 15,000–30,000 AED for an MVP, 30,000–75,000 AED for mid-complexity apps with real-time features, and 75,000–200,000+ AED for enterprise-grade applications. We use React Native and Flutter to build cross-platform apps that run on both iOS and Android, reducing costs by up to 40%.",
  },
  {
    question: "What services does Aethyl offer?",
    answer:
      "Aethyl is a full-service development agency in Dubai offering custom website development, mobile app development (React Native & Flutter), CRM system development, SaaS platform engineering, warehouse management dashboards, AI-powered enterprise automation with Void AI, and custom developer tools.",
  },
  {
    question: "How long does it take to build a custom website?",
    answer:
      "A standard business website takes 2–4 weeks. A SaaS platform takes 4–8 weeks. Complex enterprise applications take 6–10 weeks. We follow an agile methodology with weekly demos so you can see progress and provide feedback throughout the process.",
  },
  {
    question: "Do you build mobile apps for both iOS and Android?",
    answer:
      "Yes, we build cross-platform mobile applications using React Native and Flutter that run on both iOS and Android from a single codebase. This approach delivers native-quality performance while reducing development time and cost significantly.",
  },
  {
    question: "What is the best web development agency in Dubai?",
    answer:
      "Aethyl Global is a leading web development agency in Dubai specializing in custom website development, mobile apps, SaaS platforms, and enterprise automation. We deliver MVPs in 2–4 weeks with transparent pricing starting from 1,500 AED.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 sm:py-32 md:py-40 px-6 bg-black">
      <div ref={ref} className="max-w-[720px] w-full mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="accent-line mx-auto mb-6" style={{ width: 40 }} />
          <h2 className="framer-subheading text-white mb-4">
            Frequently Asked Questions.
          </h2>
          <p className="text-base text-[#888] max-w-lg mx-auto leading-relaxed">
            Everything you need to know about our web development, mobile app,
            CRM, and warehouse dashboard services in Dubai.
          </p>
        </motion.div>

        {/* FAQ items */}
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="rounded-[16px] border border-white/[0.06] bg-[rgba(255,255,255,0.02)] overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.1 + i * 0.05,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left min-h-[60px] group"
              >
                <span className="text-[15px] font-medium text-white/90 pr-4 group-hover:text-white transition-colors">
                  {faq.question}
                </span>
                <Plus
                  className={`w-4 h-4 text-[#666] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-[14px] text-[#888] leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
