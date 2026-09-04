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

  const canonicalUrl = `https://www.aethyl.com/blog/${slug}`;

  return {
    title: `${blog.title} — Aethyl Blog`,
    description: blog.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: canonicalUrl,
      type: "article",
      publishedTime: blog.date,
      authors: [blog.author],
      siteName: "Aethyl",
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image],
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

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.aethyl.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.aethyl.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: blog.title,
        item: `https://www.aethyl.com/blog/${slug}`,
      },
    ],
  };

  const displayDate = new Date(blog.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });

  return (
    <main className="min-h-screen bg-black">
      {/* Nav */}
      <nav className="w-full px-4 sm:px-6 py-4 sm:py-5">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold text-white tracking-tight hover:text-apple-gray transition-colors">
            Aethyl
          </Link>
          <Link href="/" className="text-[12px] font-medium text-white/60 hover:text-white transition-colors uppercase tracking-wide">
            Home
          </Link>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-5 sm:px-6 pt-10 sm:pt-16 pb-20 sm:pb-32">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-corporate-gray hover:text-white transition-colors mb-10 sm:mb-16"
        >
          <ArrowLeft className="w-4 h-4" />
          All Articles
        </Link>

        {/* Meta */}
        <div className="mb-6 sm:mb-10">
          <span className="inline-block px-3 py-1 rounded-lg bg-accent/10 text-accent text-[11px] font-semibold tracking-wide mb-5">
            {blog.tag}
          </span>
          <div className="flex items-center gap-3 text-[12px] text-corporate-gray mb-6">
            <span>{displayDate}</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>{blog.readTime}</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>{blog.author}</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-8 sm:mb-12 rounded-xl sm:rounded-2xl overflow-hidden border border-white/[0.06]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-auto"
          />
        </div>

        {/* Title */}
        <h1 className="text-[26px] sm:text-3xl md:text-[44px] font-bold text-white leading-[1.1] tracking-[-0.02em] mb-8 sm:mb-12">
          {blog.title}
        </h1>

        {/* Divider */}
        <div className="accent-line mb-8 sm:mb-12" style={{ width: 40 }} />

        {/* Content */}
        <div className="space-y-6">
          {blog.content.map((block, i) =>
            block.type === "heading" ? (
              <h2
                key={i}
                className="text-xl font-semibold text-white mt-10 mb-4"
              >
                {block.text}
              </h2>
            ) : (
              <p
                key={i}
                className="text-base text-corporate-gray leading-[1.8]"
              >
                {block.text}
              </p>
            )
          )}
        </div>

        {/* Related Posts */}
        {(() => {
          const sameTag = blogs.filter(
            (b) => b.slug !== slug && b.tag === blog.tag
          );
          const otherRecent = blogs.filter(
            (b) => b.slug !== slug && b.tag !== blog.tag
          );
          const related = [...sameTag, ...otherRecent].slice(0, 3);

          if (related.length === 0) return null;

          return (
            <div className="mt-14 sm:mt-20 pt-8 sm:pt-12 border-t border-white/[0.06]">
              <h2 className="text-xl font-semibold text-white mb-8">
                Related Articles
              </h2>
              <div className="grid gap-4">
                {related.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group rounded-2xl border border-white/[0.06] bg-secondary-bg p-6 transition-all duration-300 hover:bg-[#1d1d1f] hover:border-white/[0.12]"
                  >
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-accent/10 text-accent text-[10px] font-semibold tracking-wide mb-3">
                      {post.tag}
                    </span>
                    <h3 className="text-sm font-semibold text-white leading-snug group-hover:text-accent transition-colors duration-300 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-corporate-gray leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          );
        })()}

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </main>
  );
}
