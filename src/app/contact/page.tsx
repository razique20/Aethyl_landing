import type { Metadata } from "next";
import ContactPanel from "@/components/ContactPanel";

export const metadata: Metadata = {
  title: "Book a Free 30-Minute Audit — Contact Us",
  description:
    "Book a free 30-minute audit with Aethyl Global to see what to automate first. Email us, message us on LinkedIn or X, or send the form to discuss custom dashboards, CRM, mobile apps or business automation.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Book a Free 30-Minute Audit | Aethyl Global",
    description:
      "Talk to our team about dashboards, CRM, mobile apps or automation. Free, 30 minutes, no obligation.",
  },
};

export default function ContactPage() {
  return <ContactPanel heading="Book a free 30-minute audit" headingAs="h1" />;
}
