import type { Metadata } from "next";
import ServicesBento from "@/components/ServicesBento";
import Process from "@/components/Process";
import AuditCTA from "@/components/AuditCTA";

export const metadata: Metadata = {
  title: "Custom Software Development Services",
  description:
    "Custom dashboards, CRM development, mobile apps and business automation, from first sketch to launch and support. See what we build and book a free 30-minute audit.",
  alternates: { canonical: "/services" },
  openGraph: {
    url: "/services",
    title: "Custom Software Development Services | Aethyl Global",
    description:
      "Custom dashboards, CRM, mobile apps and automation, built around how your team works.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesBento headingAs="h1" />
      <Process index="02" />
      <AuditCTA />
    </>
  );
}
