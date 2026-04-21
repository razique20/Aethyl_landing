"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Network, Users, DollarSign, ArrowRightLeft } from "lucide-react";

const steps = [
  {
    icon: Network,
    title: "Partner Integration",
    description: "Partners connect to the Offrion API to list and manage high-value deals within their own platforms.",
    color: "text-neon-blue",
  },
  {
    icon: ArrowRightLeft,
    title: "Deal Distribution",
    description: "Deals are dynamically distributed across various API endpoints and consumer touchpoints.",
    color: "text-neon-purple",
  },
  {
    icon: Users,
    title: "User Claims",
    description: "End-users claim deals directly through partner interfaces, secured by Aethyl's underlying escrow.",
    color: "text-neon-pink",
  },
  {
    icon: DollarSign,
    title: "Automated Commission",
    description: "Partners instantly claim their commission on every successful deal claim, handled automatically by the system.",
    color: "text-neon-green",
  },
];

export default function Ecosystem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ecosystem" className="relative py-32 px-6 bg-black/40">
      <div className="section-divider mb-32" />

      <div ref={ref} className="max-w-6xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm uppercase tracking-[0.3em] text-neon-blue mb-4 block font-medium">
              Featured Platform
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Offrion: The Deal <br />
              <span className="gradient-text">Engine</span>
            </h2>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
              Offrion is the premier implementation of our Deal Architecture. It provides a 
              sophisticated ecosystem where partners can bridge commerce gaps, integrate powerful 
              deal logic, and monetize every transaction claim through automated commissions.
            </p>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  className="flex gap-6 items-start group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className={`mt-1 p-3 rounded-xl glass ${step.color} transition-transform group-hover:scale-110`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="glass rounded-3xl p-8 border-neon-blue/20 relative z-10">
              {/* Mockup visualization of a commission claim */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center">
                    <span className="text-neon-blue font-bold text-xs">OFF</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Offrion Partner Portal</div>
                    <div className="text-[10px] text-gray-500 font-mono underline opacity-50">api.offrion.com/v1/claims</div>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full glass text-[10px] text-neon-green font-mono border-neon-green/20">CONNECTED</div>
              </div>

              <div className="space-y-4">
                {[
                  { user: "User #8293", deal: "Luxury Real Estate", commission: "+$2,500.00", time: "2m ago" },
                  { user: "User #1043", deal: "Trade Logistics", commission: "+$850.50", time: "15m ago" },
                  { user: "User #4421", deal: "IP Licensing", commission: "+$1,200.00", time: "45m ago" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + (i * 0.1) }}
                  >
                    <div>
                      <div className="text-xs text-gray-400">{item.user}</div>
                      <div className="text-sm text-white font-medium">{item.deal}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-neon-green">{item.commission}</div>
                      <div className="text-[10px] text-gray-500">{item.time}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-blue/20">
                <div className="text-xs text-gray-400 mb-1">Total Commission Pool</div>
                <div className="text-2xl font-bold text-white">$142,580.<span className="text-gray-500">24</span></div>
              </div>
            </div>

            {/* Backglow decor */}
            <div className="absolute -inset-4 bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-pink/20 rounded-[40px] blur-3xl -z-10 opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
