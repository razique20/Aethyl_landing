import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aethyl — Next-Gen Web3 Infrastructure",
  description:
    "Aethyl provides cutting-edge Web3 and blockchain infrastructure including escrow APIs, decentralized solutions, and developer tools for the future of digital commerce.",
  keywords: [
    "Web3",
    "blockchain",
    "escrow",
    "API",
    "decentralized",
    "infrastructure",
    "developer tools",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-black text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
