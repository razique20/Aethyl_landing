import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { blogs, getBlogBySlug } from "@/data/blogs";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return {};

  return {
    title: `${blog.title} — Aethyl Blog`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      publishedTime: blog.date,
      authors: [blog.author],
      siteName: "Aethyl",
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt,
    datePublished: blog.date,
    author: {
      "@type": "Organization",
      name: blog.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Aethyl",
    },
  };

  return (
    <main className="min-h-screen bg-black">
      {/* Nav */}
      <nav className="w-full px-6 py-5">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold text-white tracking-tight hover:text-apple-gray transition-colors">
            Aethyl
          </Link>
          <Link href="/" className="text-[12px] font-medium text-white/60 hover:text-white transition-colors uppercase tracking-wide">
            Home
          </Link>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-6 pt-16 pb-32">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-corporate-gray hover:text-white transition-colors mb-16"
        >
          <ArrowLeft className="w-4 h-4" />
          All Articles
        </Link>

        {/* Meta */}
        <div className="mb-10">
          <span className="inline-block px-3 py-1 rounded-lg bg-accent/10 text-accent text-[11px] font-semibold tracking-wide mb-5">
            {blog.tag}
          </span>
          <div className="flex items-center gap-3 text-[12px] text-corporate-gray mb-6">
            <span>{blog.date}</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>{blog.readTime}</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>{blog.author}</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-[44px] font-bold text-white leading-[1.1] tracking-[-0.02em] mb-12">
          {blog.title}
        </h1>

        {/* Divider */}
        <div className="accent-line mb-12" style={{ width: 40 }} />

        {/* Content */}
        <div className="space-y-6">
          {blog.content.map((paragraph, i) => (
            <p
              key={i}
              className="text-base text-corporate-gray leading-[1.8]"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 pt-12 border-t border-white/[0.06] text-center">
          <p className="text-sm text-corporate-gray mb-6">
            Have a project in mind? Let&apos;s talk.
          </p>
          <Link href="/#quote" className="btn-accent px-8 py-3.5 text-sm font-semibold">
            Get a Quote
          </Link>
        </div>
      </article>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
