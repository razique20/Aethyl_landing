"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Network, Users, DollarSign, ArrowRightLeft } from "lucide-react";

const steps = [
  {
    icon: Network,
    title: "Partner Integration",
    description: "Partners connect to the Offrion API to manage high-value deals.",
  },
  {
    icon: ArrowRightLeft,
    title: "Distribution",
    description: "Deals are dynamically distributed across various API endpoints.",
  },
  {
    icon: Users,
    title: "User Claims",
    description: "End-users claim deals through partner interfaces, secured by Aethyl.",
  },
  {
    icon: DollarSign,
    title: "Commissions",
    description: "Partners instantly claim their commission on every successful deal.",
  },
];

export default function Ecosystem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ecosystem" className="relative py-24 md:py-40 px-6 bg-black">
      <div ref={ref} className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="apple-heading mb-8 text-white">
              The Offrion <br />
              <span className="gradient-text">Engine.</span>
            </h2>
            <p className="text-lg text-apple-gray mb-12 md:mb-16 leading-relaxed font-medium">
              Offrion is the premier implementation of our Deal Architecture, 
              monetizing every transaction through automated commissions.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary-bg flex items-center justify-center mb-6 group-hover:bg-apple-blue transition-colors duration-500">
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-sm text-apple-gray leading-snug font-normal">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-secondary-bg rounded-[32px] md:rounded-[40px] p-8 md:p-12 border border-white/5 relative z-10 overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between mb-8 md:mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-apple-blue flex items-center justify-center shadow-lg shadow-apple-blue/20">
                    <span className="text-white font-bold text-[10px] md:text-xs uppercase tracking-tighter">Off</span>
                  </div>
                  <div className="text-base md:text-lg font-semibold text-white tracking-tight">Portal</div>
                </div>
              </div>

              <div className="space-y-3 md:space-y-4">
                {[
                  { user: "Claim #8293", amount: "+$2,500.00" },
                  { user: "Claim #1043", amount: "+$850.50" },
                  { user: "Claim #4421", amount: "+$1,200.00" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="text-sm md:text-base text-white font-medium tracking-tight">{item.user}</div>
                    <div className="text-sm md:text-base font-bold text-apple-blue tracking-tight">{item.amount}</div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 md:mt-12 p-6 md:p-8 rounded-2xl md:rounded-[32px] bg-black border border-white/5">
                <div className="text-[10px] md:text-sm text-apple-gray mb-1 md:mb-2 font-medium uppercase tracking-widest">Total Pool</div>
                <div className="text-2xl md:text-4xl font-bold text-white tracking-tighter">$142,580</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

