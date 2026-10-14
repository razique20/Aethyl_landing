"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Send,
  CheckCircle,
  Share2,
  Zap,
  Cpu,
  Code,
  Layout,
  Wrench,
  Phone,
  LayoutDashboard,
} from "lucide-react";

const serviceOptions = [
  { icon: Share2, label: "Network Integration" },
  { icon: Cpu, label: "Void AI Agents" },
  { icon: Zap, label: "Automation Workflow" },
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Code, label: "SaaS Platform" },
  { icon: Layout, label: "Website" },
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
      className="relative py-24 sm:py-32 md:py-40 px-6 bg-white overflow-hidden"
    >
      <div ref={ref} className="max-w-[1240px] w-full mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-14 lg:gap-20 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="eyebrow mb-6">Get started</div>
            <h2 className="text-[28px] sm:text-[38px] md:text-[46px] font-extrabold leading-[1.02] tracking-[-0.035em] text-ink mb-5">
              Scope your rollout.
            </h2>
            <p className="text-base text-corporate-gray leading-relaxed mb-10 max-w-md">
              Tell us which system you need — the network, the automation, or
              the software you run today — and we&apos;ll come back within 24
              hours with a plan and a price.
            </p>

            {/* Benefits */}
            <div className="space-y-5">
              {[
                {
                  title: "Free consultation",
                  desc: "A 30-minute call to scope the rollout with our engineering team.",
                },
                {
                  title: "One agreement",
                  desc: "Every system you adopt is packaged on one program and one invoice.",
                },
                {
                  title: "Rapid delivery",
                  desc: "First deployments live in 2–4 weeks. Full platforms in 6–10 weeks.",
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
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink mb-1">
                      {item.title}
                    </p>
                    <p className="text-[13px] text-corporate-gray leading-relaxed">
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
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {submitted ? (
              <div className="card p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-ink mb-3">
                  Request received!
                </h3>
                <p className="text-sm text-corporate-gray max-w-sm mx-auto">
                  We&apos;ll review your details and get back to you within 24
                  hours with a rollout plan.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="card p-6 sm:p-8 space-y-5"
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
                      className="w-full px-4 py-3 rounded-xl bg-white border border-ink/10 text-sm text-ink placeholder:text-ink/35 focus:outline-none focus:border-accent transition-colors min-h-[48px]"
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
                      className="w-full px-4 py-3 rounded-xl bg-white border border-ink/10 text-sm text-ink placeholder:text-ink/35 focus:outline-none focus:border-accent transition-colors min-h-[48px]"
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
                      className="w-full px-4 py-3 rounded-xl bg-white border border-ink/10 text-sm text-ink placeholder:text-ink/35 focus:outline-none focus:border-accent transition-colors min-h-[48px]"
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
                      className="w-full px-4 py-3 rounded-xl bg-white border border-ink/10 text-sm text-ink placeholder:text-ink/35 focus:outline-none focus:border-accent transition-colors min-h-[48px]"
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
                          className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-[12px] font-medium border transition-all duration-300 ${
                            isSelected
                              ? "bg-accent/10 border-accent/40 text-accent"
                              : "bg-white border-ink/10 text-corporate-gray hover:border-ink/30"
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
                  </label>
                  <select
                    name="budget"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-ink/10 text-sm text-ink focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer min-h-[48px]"
                  >
                    <option value="" className="bg-white text-corporate-gray">
                      Select a range
                    </option>
                    {budgetRanges.map((range) => (
                      <option
                        key={range}
                        value={range}
                        className="bg-white text-ink"
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
                    placeholder="Which system do you need — network, automation or software? Tell us about your goals and timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-ink/10 text-sm text-ink placeholder:text-ink/35 focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full btn-primary py-4 text-[11px] font-semibold disabled:opacity-50 min-h-[52px]"
                >
                  <Send className="w-4 h-4" />
                  {submitting ? "Submitting..." : "Request a Rollout Plan"}
                </button>

                <a
                  href="tel:+971547400553"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-full border border-ink/15 bg-white text-[12px] font-semibold text-ink uppercase tracking-[0.08em] hover:bg-ink/[0.04] hover:border-ink/30 transition-all duration-300 min-h-[52px]"
                >
                  <Phone className="w-4 h-4" />
                  Call us: +971 54 740 0553
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
