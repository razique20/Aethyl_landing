"use client";

import { Globe, MessageCircle, Users, Send } from "lucide-react";

const footerLinks = {
  Platform: [
    { label: "Offrion", href: "#ecosystem" },
    { label: "VOID AI", href: "#void" },
    { label: "Escrow APIs", href: "#services" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Status Page", href: "#" },
  ],
  Company: [
    { label: "Contact", href: "#contact" },
    { label: "Careers", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const socialLinks = [
  { icon: Globe, href: "#", label: "Web" },
  { icon: Send, href: "#", label: "Telegram" },
];

export default function Footer() {
  return (
    <footer className="relative pt-32 pb-16 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl w-full mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-12 mb-24">
          {/* Logo & description */}
          <div className="col-span-2">
            <div className="text-xl font-semibold text-white mb-6 tracking-tight">Aethyl</div>
            <p className="text-xs text-apple-gray leading-relaxed mb-8 max-w-xs font-normal">
              The Global Operating System for autonomous, high-value commerce. 
              Powered by AI neural agencies and trustless settlement infrastructure.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-apple-gray hover:text-white transition-all duration-300 border border-white/5 bg-secondary-bg hover:bg-white/5"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-6">
                {category}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-apple-gray hover:text-white transition-colors duration-300 font-normal"
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
        <div className="pt-10 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[10px] text-apple-gray font-medium uppercase tracking-widest">
            © {new Date().getFullYear()} Aethyl. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-apple-blue animate-pulse" />
            <p className="text-[10px] text-apple-gray font-medium uppercase tracking-widest">
              Secured by Aethyl Network.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}


