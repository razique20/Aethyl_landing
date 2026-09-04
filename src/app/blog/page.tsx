import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { blogs } from "@/data/blogs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Expert insights on custom website development, mobile apps, CRM systems, SaaS platforms, and AI-powered enterprise automation.",
  alternates: {
    canonical: "https://www.aethyl.com/blog",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Nav */}
      <nav className="w-full px-6 py-5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold text-white tracking-tight hover:text-apple-gray transition-colors">
            Aethyl
          </Link>
          <Link href="/" className="text-[12px] font-medium text-white/60 hover:text-white transition-colors uppercase tracking-wide">
            Home
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-32">
        {/* Header */}
        <div className="mb-20">
          <div className="accent-line mb-8" style={{ width: 40 }} />
          <h1 className="corp-heading text-white mb-6">Blog.</h1>
          <p className="text-lg text-corporate-gray max-w-xl leading-relaxed">
            Thoughts on web development, mobile apps, AI automation, and
            building products that scale.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog) => {
            const displayDate = new Date(blog.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
            });
            return (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="group rounded-3xl border border-white/[0.06] bg-secondary-bg p-10 transition-all duration-500 hover:bg-[#1d1d1f] hover:border-white/[0.12]"
            >
              <span className="inline-block px-3 py-1 rounded-lg bg-accent/10 text-accent text-[11px] font-semibold tracking-wide mb-5">
                {blog.tag}
              </span>
              <h2 className="text-xl font-semibold text-white mb-3 leading-snug tracking-tight group-hover:text-accent transition-colors duration-300">
                {blog.title}
              </h2>
              <p className="text-sm text-corporate-gray leading-relaxed mb-8">
                {blog.excerpt}
              </p>
              <div className="flex items-center justify-between pt-5 border-t border-white/[0.06]">
                <div className="flex items-center gap-3 text-[11px] text-corporate-gray">
                  <span>{displayDate}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span>{blog.readTime}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span>{blog.author}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-accent transition-colors duration-300" />
              </div>
            </Link>
          );
          })}
        </div>
      </div>
    </main>
  );
}
