"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Send,
  CheckCircle,
  Smartphone,
  Zap,
  Cpu,
  Code,
  Layout,
  Wrench,
  Phone,
  LayoutDashboard,
} from "lucide-react";

const serviceOptions = [
  { icon: Smartphone, label: "Mobile Application" },
  { icon: Zap, label: "Instant Settlement" },
  { icon: Cpu, label: "Void AI Agents" },
  { icon: Code, label: "SaaS Platform" },
  { icon: Layout, label: "Custom Website" },
  { icon: LayoutDashboard, label: "Warehouse Dashboard" },
  { icon: Wrench, label: "Developer Tools" },
];

const budgetRanges = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
];

export default function QuoteForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (label: string) => {
    setSelectedServices((prev) =>
      prev.includes(label)
        ? prev.filter((s) => s !== label)
        : [...prev, label]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set("services", selectedServices.join(", "));

    try {
      const res = await fetch("https://formspree.io/f/xqpklprd", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        window.location.href = "/thank-you";
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch {
      alert("Something went wrong. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="quote"
      className="relative py-16 sm:py-24 md:py-40 px-5 sm:px-6 bg-secondary-bg overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.04] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #00C9A7 0%, transparent 70%)",
        }}
      />

      <div ref={ref} className="max-w-6xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="accent-line mb-8" style={{ width: 40 }} />
            <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-bold leading-[1.05] tracking-[-0.02em] text-white mb-6">
              Get a Project Quote.
            </h2>
            <p className="text-base md:text-lg text-corporate-gray leading-relaxed mb-10 max-w-md">
              Tell us about your project and we&apos;ll get back to you within 24
              hours with a tailored proposal.
            </p>

            {/* Benefits */}
            <div className="space-y-5">
              {[
                {
                  title: "Free consultation",
                  desc: "30-minute call to scope your project with our engineering team.",
                },
                {
                  title: "Transparent pricing",
                  desc: "No hidden fees. Fixed-price or retainer — your choice.",
                },
                {
                  title: "Rapid delivery",
                  desc: "MVPs in 2–4 weeks. Full platforms in 6–10 weeks.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
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
                    <CheckCircle className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">
                      {item.title}
                    </p>
                    <p className="text-xs text-corporate-gray leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {submitted ? (
              <div className="rounded-3xl border border-white/[0.06] bg-black p-12 text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Quote Requested!
                </h3>
                <p className="text-sm text-corporate-gray max-w-sm mx-auto">
                  We&apos;ll review your project details and get back to you within 24
                  hours with a custom proposal.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl sm:rounded-3xl border border-white/[0.06] bg-black p-6 sm:p-8 md:p-10 space-y-5 sm:space-y-6"
              >
                {/* Name & Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-medium text-corporate-gray uppercase tracking-widest mb-2">
                      Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder:text-corporate-gray/50 focus:outline-none focus:border-accent/50 transition-colors min-h-[48px]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-corporate-gray uppercase tracking-widest mb-2">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="john@company.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder:text-corporate-gray/50 focus:outline-none focus:border-accent/50 transition-colors min-h-[48px]"
                    />
                  </div>
                </div>

                {/* Company & Phone row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-medium text-corporate-gray uppercase tracking-widest mb-2">
                      Company
                    </label>
                    <input
                      name="company"
                      type="text"
                      placeholder="Acme Inc."
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder:text-corporate-gray/50 focus:outline-none focus:border-accent/50 transition-colors min-h-[48px]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-corporate-gray uppercase tracking-widest mb-2">
                      Phone
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder:text-corporate-gray/50 focus:outline-none focus:border-accent/50 transition-colors min-h-[48px]"
                    />
                  </div>
                </div>

                {/* Services */}
                <div>
                  <label className="block text-[11px] font-medium text-corporate-gray uppercase tracking-widest mb-3">
                    What do you need?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((service) => {
                      const Icon = service.icon;
                      const isSelected = selectedServices.includes(
                        service.label
                      );
                      return (
                        <button
                          key={service.label}
                          type="button"
                          onClick={() => toggleService(service.label)}
                          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-[12px] font-medium border transition-all duration-300 ${
                            isSelected
                              ? "bg-accent/10 border-accent/30 text-accent"
                              : "bg-white/[0.03] border-white/[0.08] text-corporate-gray hover:border-white/[0.15]"
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                          {service.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-[11px] font-medium text-corporate-gray uppercase tracking-widest mb-2">
                    Budget Range
                  </label>                    <select name="budget" className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-white focus:outline-none focus:border-accent/50 transition-colors appearance-none cursor-pointer min-h-[48px]">
                    <option value="" className="bg-black text-corporate-gray">
                      Select a range
                    </option>
                    {budgetRanges.map((range) => (
                      <option
                        key={range}
                        value={range}
                        className="bg-black text-white"
                      >
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Project details */}
                <div>
                  <label className="block text-[11px] font-medium text-corporate-gray uppercase tracking-widest mb-2">
                    Project Details
                  </label>
                  <textarea
                    name="details"
                    rows={4}
                    placeholder="Tell us about your project, goals, and timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder:text-corporate-gray/50 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full btn-accent py-4 text-[15px] font-semibold gap-2 disabled:opacity-50 min-h-[52px]"
                >
                  <Send className="w-4 h-4" />
                  {submitting ? "Submitting..." : "Submit Quote Request"}
                </button>

                <a
                  href="tel:+971547400553"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl border border-white/[0.12] bg-white/[0.03] text-[15px] font-semibold text-white hover:bg-white/[0.06] hover:border-white/[0.2] transition-all duration-300 min-h-[52px]"
                >
                  <Phone className="w-4 h-4" />
                  Call Us: +971 54 740 0553
                </a>

                <p className="text-[11px] text-corporate-gray text-center">
                  We typically respond within 24 hours. No spam, ever.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
