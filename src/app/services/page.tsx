import type { Metadata } from "next";
import Pillars from "@/components/Pillars";
import ServicesBento from "@/components/ServicesBento";
import Process from "@/components/Process";
import AuditCTA from "@/components/AuditCTA";

export const metadata: Metadata = {
  title: "Services — Software, Marketing, Accounting & Tax",
  description:
    "Software (dashboards, CRM, web, mobile apps, AI automation), marketing, accounting and UAE tax support for growing businesses, with one point of contact. Book a free 30-minute call.",
  alternates: { canonical: "/services" },
  openGraph: {
    url: "/services",
    title: "Services — Software, Marketing, Accounting & Tax | Aethyl Global",
    description:
      "Every service a growing business needs. One partner. Software, marketing, accounting and tax.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Pillars headingAs="h1" />
      <ServicesBento index="02" />
      <Process index="03" />
      <AuditCTA />
    </>
  );
}
