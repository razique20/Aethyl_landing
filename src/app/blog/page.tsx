import type { Metadata } from "next";
import { blogs } from "@/data/blogs";
import { BlogRow } from "@/components/BlogTeaser";
import { SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Journal — Guides for Growing Businesses",
  description:
    "Practical guides from Aethyl Global for growing businesses: custom dashboards, CRM development, mobile app costs, websites and business automation.",
  alternates: { canonical: "/blog" },
  openGraph: {
    url: "/blog",
    title: "Blog | Aethyl Global",
    description:
      "Practical guides for growing businesses from the Aethyl Global team.",
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
          title={<>The <em>journal</em></>}
          description="Practical notes for growing businesses, starting with dashboards, CRM, mobile apps, websites and automation."
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
