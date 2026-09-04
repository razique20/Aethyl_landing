"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const locations = [
  {
    city: "Dubai",
    country: "United Arab Emirates",
    description: "Our headquarters in the heart of Dubai's tech district.",
  },
  {
    city: "Abu Dhabi",
    country: "United Arab Emirates",
    description: "Serving enterprises across the UAE capital.",
  },
  {
    city: "Remote",
    country: "Global",
    description: "Working with clients worldwide across all time zones.",
  },
];

const contactDetails = [
  { icon: Phone, label: "Phone", value: "+971 54 740 0553", href: "tel:+971547400553" },
  { icon: Mail, label: "Email", value: "aethylglobal@gmail.com", href: "mailto:aethylglobal@gmail.com" },
  { icon: Clock, label: "Hours", value: "Mon–Fri 9:00 AM – 6:00 PM (GST)", href: "#" },
];

export default function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-16 sm:py-24 md:py-40 px-5 sm:px-6 bg-secondary-bg">
      <div ref={ref} className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Location info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="accent-line mb-8" style={{ width: 40 }} />
            <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-bold leading-[1.05] tracking-[-0.02em] text-white mb-6">
              Web Development Agency in Dubai.
            </h2>
            <p className="text-base md:text-lg text-corporate-gray leading-relaxed mb-10 max-w-md">
              Aethyl Technologies is a full-service web development agency based
              in Dubai, UAE. We serve clients across the Middle East, India, and
              globally — delivering custom websites, mobile apps, and enterprise
              software.
            </p>

            {/* Locations */}
            <div className="space-y-6 mb-12">
              {locations.map((location, i) => (
                <motion.div
                  key={location.city}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: 0.3 + i * 0.1,
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">
                      {location.city}, {location.country}
                    </p>
                    <p className="text-xs text-corporate-gray leading-relaxed">
                      {location.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="rounded-2xl sm:rounded-3xl border border-white/[0.06] bg-black p-6 sm:p-8 md:p-10">
              <h3 className="text-lg font-bold text-white mb-8">
                Get in Touch
              </h3>

              <div className="space-y-5 sm:space-y-6">
                {contactDetails.map((detail, i) => {
                  const Icon = detail.icon;
                  return (
                    <motion.a
                      key={detail.label}
                      href={detail.href}
                      className="flex items-center gap-4 group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        delay: 0.4 + i * 0.1,
                        duration: 0.7,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center flex-shrink-0 group-hover:border-accent/30 transition-colors">
                        <Icon className="w-4 h-4 text-white/60 group-hover:text-accent transition-colors" />
                      </div>
                      <div>
                        <p className="text-[11px] text-corporate-gray uppercase tracking-widest mb-1">
                          {detail.label}
                        </p>
                        <p className="text-sm text-white font-medium">
                          {detail.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Keywords */}
              <div className="mt-10 pt-8 border-t border-white/[0.06]">
                <p className="text-[11px] text-corporate-gray uppercase tracking-widest mb-4">
                  Our Services
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Website Development Dubai",
                    "Mobile App Development",
                    "CRM Development",
                    "SaaS Platforms",
                    "AI Automation",
                    "Custom Software",
                  ].map((keyword) => (
                    <span
                      key={keyword}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[11px] text-corporate-gray font-medium"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
