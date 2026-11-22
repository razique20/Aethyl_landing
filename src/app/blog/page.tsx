import type { Metadata } from "next";
import { blogs } from "@/data/blogs";
import { BlogRow } from "@/components/BlogTeaser";
import { SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Blog — Dashboards, CRM, Mobile Apps & Automation",
  description:
    "Practical guides from Aethyl Global on custom dashboards, CRM development, mobile app costs, business automation and building software that lasts.",
  alternates: { canonical: "/blog" },
  openGraph: {
    url: "/blog",
    title: "Blog | Aethyl Global",
    description:
      "Guides on custom dashboards, CRM, mobile apps and business automation from the Aethyl Global team.",
  },
};

export default function BlogPage() {
  const posts = [...blogs].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          as="h1"
          label="Journal"
          title={<>Notes from the <em>studio</em></>}
          description="Practical notes on dashboards, CRM, mobile apps and automation, and on building software that keeps running after launch."
        />
        <ul className="mt-12 divide-y border-y">
          {posts.map((b) => (
            <li key={b.slug}>
              <BlogRow blog={b} headingLevel="h2" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
