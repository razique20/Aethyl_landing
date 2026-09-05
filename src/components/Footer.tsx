"use client";

const footerLinks = {
  Platform: [
    { label: "Void AI System", href: "https://void.aethyl.com", external: true },
    { label: "Offrion Deals", href: "#ecosystem", external: false },
    { label: "Enterprise OS", href: "#services", external: false },
    { label: "Mobile Application", href: "#services", external: false },
  ],
  Solutions: [
    { label: "Custom SaaS", href: "#services", external: false },
    { label: "Warehouse Dashboards", href: "#services", external: false },
    { label: "Landing Platforms", href: "#usecases", external: false },
    { label: "Developer Tools", href: "#services", external: false },
  ],
  Company: [
    { label: "About Us", href: "#about", external: false },
    { label: "Contact", href: "#contact", external: false },
  ],
};

export default function Footer() {
  return (
    <footer className="relative pt-16 sm:pt-24 md:pt-32 pb-8 px-5 sm:px-6 border-t border-border bg-secondary-bg">
      <div className="max-w-7xl w-full mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20">
          {/* Logo & description */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-6">
              <img src="/logo-icon.svg" alt="Aethyl" className="w-9 h-9" />
              <span className="text-lg font-bold text-white tracking-tight">
                Aethyl
              </span>
            </div>
            <p className="text-sm text-corporate-gray leading-relaxed mb-4 max-w-xs font-normal">
              The enterprise operating system for autonomous business
              infrastructure. Powered by Void AI and Offrion deal architecture.
            </p>

          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[11px] font-bold text-white uppercase tracking-widest mb-6">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-sm text-corporate-gray hover:text-white transition-colors duration-300 font-normal"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-corporate-gray font-medium">
            © {new Date().getFullYear()} Aethyl Global. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
