"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What is Aethyl Global?",
    answer:
      "Aethyl Global is an operating system company. We build the networks businesses connect through, the automation that runs them, and the software our clients already depend on — as one platform with one integration. Void AI, the Offrion engine and our operations dashboards are products we run, not one-off projects.",
  },
  {
    question: "What can I build on Aethyl?",
    answer:
      "Three systems. Networks — connect partners, platforms and marketplaces through Offrion so offers distribute and commissions settle automatically. Automation — Void AI agents that run scheduling, data entry, routing and reporting. Existing products — dashboards, CRM, SaaS platforms and mobile apps built and operated on the same operating system.",
  },
  {
    question: "Do I have to take the whole platform?",
    answer:
      "No. Each system is adopted separately, so you can start with one. Aethyl runs one onboarding, one automation layer and one product catalogue across all of them, so adding a second system is an API enablement rather than a second integration — and it is packaged as one program on one agreement.",
  },
  {
    question: "How does the Offrion network layer work?",
    answer:
      "Partners integrate the Offrion API once. Deals are distributed dynamically across every connected endpoint, end-users claim them through your own interface with Aethyl securing the flow, and each partner claims its commission the moment a deal completes.",
  },
  {
    question: "How does Void AI automation work?",
    answer:
      "Void AI agents operate inside your existing tools with sub-100ms responses powered by Groq LPU. Every action is bounded by your policy, logged for review, and can require human approval — so automation accelerates the work without taking the decision away from you.",
  },
  {
    question: "How do I get started?",
    answer:
      "Talk to our team, see a live demo of the platform, then start with a scoped rollout. Typical first deployments — a network integration, an automation workflow or a product build — go live in 2 to 4 weeks, with larger platforms shipping in 6 to 10 weeks.",
  },
  {
    question: "Where is Aethyl Global based?",
    answer:
      "Aethyl Global operates from Dubai, United Arab Emirates, and works with clients across the Middle East, India, Europe and the Americas across every time zone. Contact us at aethylglobal@gmail.com or +971 54 740 0553.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32 md:py-40 px-6 bg-cloud">
      <div ref={ref} className="max-w-[900px] w-full mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="eyebrow mb-6">FAQ</div>
          <h2 className="framer-subheading text-ink mb-4">
            Frequently asked
            <br />
            <span className="display-italic">questions.</span>
          </h2>
          <p className="text-base text-corporate-gray max-w-lg leading-relaxed">
            Everything you need to know about the Aethyl Global operating
            system, its network and its automation layers.
          </p>
        </motion.div>

        {/* FAQ items */}
        <div className="border-t border-ink/10">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="border-b border-ink/10"
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
                className="w-full flex items-center justify-between gap-6 py-6 text-left min-h-[64px] group"
              >
                <span className="flex items-baseline gap-5 sm:gap-8">
                  <span className="eyebrow shrink-0 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[16px] sm:text-[18px] font-bold text-ink tracking-[-0.02em] group-hover:text-accent transition-colors">
                    {faq.question}
                  </span>
                </span>
                <Plus
                  className={`w-5 h-5 text-ink/40 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-45 text-accent" : ""
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
                    <p className="pb-7 pl-[52px] sm:pl-[76px] pr-8 text-[15px] text-corporate-gray leading-relaxed">
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
