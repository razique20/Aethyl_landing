import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { blogs } from "@/data/blogs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights from Aethyl Global on business networks, AI automation, dashboards, SaaS platforms and shipping software that keeps running.",
  alternates: {
    canonical: "https://www.aethyl.com/blog",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="w-full px-4 sm:px-6 py-4 sm:py-5 border-b border-ink/[0.08]">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-baseline gap-2">
            <span className="text-[16px] font-extrabold text-ink tracking-[-0.02em] uppercase">
              Aethyl
            </span>
            <span className="text-[9px] font-medium text-ink/50 uppercase tracking-[0.2em]">
              Global
            </span>
          </Link>
          <Link
            href="/"
            className="text-[12px] font-medium text-corporate-gray hover:text-ink transition-colors uppercase tracking-wide"
          >
            Home
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-5 sm:px-6 pt-10 sm:pt-16 pb-20 sm:pb-32">
        {/* Header */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="eyebrow mb-6">Insights</div>
          <h1 className="framer-subheading text-ink mb-4 sm:mb-6">Blog.</h1>
          <p className="text-base sm:text-lg text-corporate-gray max-w-xl leading-relaxed">
            Notes on networks, automation, and building software that keeps
            running long after launch.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
          {blogs.map((blog) => {
            const displayDate = new Date(blog.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
            });
            return (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="group card overflow-hidden"
              >
                <div className="h-40 sm:h-48 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 sm:p-8 md:p-10">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-[11px] font-semibold tracking-wide mb-5">
                    {blog.tag}
                  </span>
                  <h2 className="text-xl font-bold text-ink mb-3 leading-snug tracking-[-0.02em] group-hover:text-accent transition-colors duration-300">
                    {blog.title}
                  </h2>
                  <p className="text-sm text-corporate-gray leading-relaxed mb-5 sm:mb-6 md:mb-8">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-5 border-t border-ink/[0.08]">
                    <div className="flex items-center gap-3 text-[11px] text-corporate-gray">
                      <span>{displayDate}</span>
                      <span className="w-1 h-1 rounded-full bg-ink/20" />
                      <span>{blog.readTime}</span>
                      <span className="w-1 h-1 rounded-full bg-ink/20" />
                      <span>{blog.author}</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-ink/30 group-hover:text-accent transition-colors duration-300" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
