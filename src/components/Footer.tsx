"use client";

const footerLinks = {
  Platform: [
    { label: "Operating System", href: "#services", external: false },
    { label: "Network Layer", href: "#ecosystem", external: false },
    { label: "Automation Layer", href: "#void", external: false },
    { label: "Module Catalogue", href: "#whatwbuild", external: false },
  ],
  Products: [
    { label: "Void AI Agents", href: "#void", external: false },
    { label: "Offrion Engine", href: "#ecosystem", external: false },
    { label: "Operations Dashboards", href: "#whatwbuild", external: false },
    { label: "CRM, SaaS & Apps", href: "#whatwbuild", external: false },
  ],
  Company: [
    { label: "About Aethyl Global", href: "#about", external: false },
    { label: "Who builds on Aethyl", href: "#usecases", external: false },
    { label: "Insights", href: "#blog", external: false },
    { label: "FAQ", href: "#faq", external: false },
    { label: "Talk to us", href: "#contact", external: false },
  ],
};

export default function Footer() {
  return (
    <footer className="relative pt-16 sm:pt-24 pb-8 px-6 bg-ink text-white">
      <div className="max-w-[1240px] w-full mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 sm:gap-10 mb-12 sm:mb-16">
          {/* Logo & description */}
          <div className="col-span-2">
            <div className="flex items-baseline gap-2.5 mb-6">
              <span className="text-[17px] font-extrabold text-white tracking-[-0.02em] uppercase">
                Aethyl
              </span>
              <span className="text-[9px] font-medium text-white/50 uppercase tracking-[0.2em]">
                Global
              </span>
            </div>
            <p className="text-[32px] sm:text-[42px] font-extrabold leading-[0.98] tracking-[-0.04em] mb-6">
              Networks.
              <br />
              Automation.
              <br />
              <span className="display-italic-mint">Everything else.</span>
            </p>
            <p className="text-[13px] text-white/50 leading-relaxed max-w-xs">
              The operating system company behind Void AI, the Offrion deal
              network, and the software our clients run every day.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[11px] font-medium text-white/40 uppercase tracking-[0.2em] mb-5 font-mono">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-[13px] text-white/70 hover:text-mint transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <a
            href="mailto:aethylglobal@gmail.com"
            className="card-dark px-6 py-5 flex items-center justify-between group"
          >
            <span className="text-[13px] text-white/70 group-hover:text-white transition-colors">
              aethylglobal@gmail.com
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-mint">
              Email
            </span>
          </a>
          <a
            href="tel:+971547400553"
            className="card-dark px-6 py-5 flex items-center justify-between group"
          >
            <span className="text-[13px] text-white/70 group-hover:text-white transition-colors">
              +971 547 400 553
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-mint">
              Call
            </span>
          </a>
          <div className="card-dark px-6 py-5 flex items-center justify-between">
            <span className="text-[13px] text-white/70">Dubai, UAE</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-mint">
              HQ
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-white/40">
            © {new Date().getFullYear()} Aethyl Global. All rights reserved.
          </p>
          <p className="text-[12px] text-white/40 font-mono uppercase tracking-[0.18em]">
            Networks · Automation · Software
          </p>
        </div>
      </div>
    </footer>
  );
}
