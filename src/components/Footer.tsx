"use client";

const footerLinks = {
  Platform: [
    { label: "Void AI System", href: "#void" },
    { label: "Offrion Deals", href: "#ecosystem" },
    { label: "Enterprise OS", href: "#services" },
    { label: "Mobile Application", href: "#services" },
  ],
  Solutions: [
    { label: "Custom SaaS", href: "#services" },
    { label: "Landing Platforms", href: "#usecases" },
    { label: "Developer Tools", href: "#services" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative pt-24 md:pt-32 pb-8 px-6 border-t border-border bg-secondary-bg">
      <div className="max-w-7xl w-full mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
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
            © {new Date().getFullYear()} Aethyl Technologies. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
