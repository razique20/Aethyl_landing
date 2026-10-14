"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const locations = [
  {
    city: "Dubai",
    country: "United Arab Emirates",
    description: "Where Aethyl Global builds and operates the platform.",
  },
  {
    city: "Abu Dhabi",
    country: "United Arab Emirates",
    description: "Rollouts and on-site deployments across the UAE capital.",
  },
  {
    city: "Remote",
    country: "Global",
    description: "Networks, automation and products running in every time zone.",
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
    <section id="location" className="relative py-24 sm:py-32 md:py-40 px-6 bg-cloud">
      <div ref={ref} className="max-w-[1240px] w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
          {/* Left: Location info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="eyebrow mb-6">Where we are</div>
            <h2 className="text-[28px] sm:text-[38px] md:text-[46px] font-extrabold leading-[1.02] tracking-[-0.035em] text-ink mb-5">
              Built in Dubai.
              <br />
              <span className="display-italic">Running worldwide.</span>
            </h2>
            <p className="text-base text-corporate-gray leading-relaxed mb-10 max-w-md">
              Aethyl Global is an operating system company based in Dubai, UAE.
              We deploy networks, automation and software for clients across the
              Middle East, India, Europe and the Americas.
            </p>

            {/* Locations */}
            <div className="space-y-5">
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
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink mb-1">
                      {location.city}, {location.country}
                    </p>
                    <p className="text-[13px] text-corporate-gray leading-relaxed">
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
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="card p-7 sm:p-8 h-full">
              <h3 className="text-lg font-bold text-ink mb-7">
                Get in touch
              </h3>

              <div className="space-y-5">
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
                      <div className="w-10 h-10 rounded-full bg-ink/[0.04] border border-ink/10 flex items-center justify-center flex-shrink-0 group-hover:border-accent/50 transition-colors">
                        <Icon className="w-4 h-4 text-ink/50 group-hover:text-accent transition-colors" />
                      </div>
                      <div>
                        <p className="text-[11px] text-corporate-gray uppercase tracking-widest mb-1">
                          {detail.label}
                        </p>
                        <p className="text-sm text-ink font-medium">
                          {detail.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Keywords */}
              <div className="mt-8 pt-6 border-t border-ink/[0.08]">
                <p className="text-[11px] text-corporate-gray uppercase tracking-widest mb-4">
                  What we run
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Network Infrastructure",
                    "AI Automation",
                    "Void AI Agents",
                    "Offrion Deal Engine",
                    "Operations Dashboards",
                    "CRM & SaaS",
                    "Mobile Apps",
                  ].map((keyword) => (
                    <span
                      key={keyword}
                      className="px-3 py-1.5 rounded-full bg-white border border-ink/[0.08] text-[11px] text-corporate-gray font-medium"
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
