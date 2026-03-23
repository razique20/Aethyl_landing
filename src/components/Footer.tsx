"use client";

import { Globe, MessageCircle, Users, Send } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Escrow API", href: "#services" },
    { label: "SDK", href: "#services" },
    { label: "Documentation", href: "#" },
    { label: "Pricing", href: "#" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press Kit", href: "#" },
  ],
  Resources: [
    { label: "API Reference", href: "#" },
    { label: "Status Page", href: "#" },
    { label: "Changelog", href: "#" },
    { label: "Community", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Security", href: "#" },
  ],
};

const socialLinks = [
  { icon: MessageCircle, href: "#", label: "Twitter" },
  { icon: Globe, href: "#", label: "GitHub" },
  { icon: Users, href: "#", label: "LinkedIn" },
  { icon: Send, href: "#", label: "Telegram" },
];

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-6xl w-full mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-16">
          {/* Logo & description */}
          <div className="col-span-2 md:col-span-2">
            <div className="text-2xl font-bold gradient-text mb-4">Aethyl</div>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Next-gen Web3 infrastructure for secure, trustless digital
              commerce.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full glass flex items-center justify-center text-gray-400 hover:text-neon-blue transition-colors duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-neon-blue transition-colors duration-300"
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
        <div className="section-divider mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Aethyl. All rights reserved.
          </p>
          <p className="text-sm text-gray-600">
            Built with 🤍 for the decentralized future.
          </p>
        </div>
      </div>
    </footer>
  );
}
