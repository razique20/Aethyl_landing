import type { Metadata } from "next";
import ContactPanel from "@/components/ContactPanel";

export const metadata: Metadata = {
  title: "Book a Free 30-Minute Call — Contact Us",
  description:
    "Book a free 30-minute call with Aethyl Global about software, marketing, accounting or tax for your business. Email aethylglobal@gmail.com or send the form.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Book a Free 30-Minute Call | Aethyl Global",
    description:
      "Talk to us about software, marketing, accounting or tax. Free, 30 minutes, no obligation.",
  },
};

export default function ContactPage() {
  return <ContactPanel heading="Book a free 30-minute call" headingAs="h1" />;
}
