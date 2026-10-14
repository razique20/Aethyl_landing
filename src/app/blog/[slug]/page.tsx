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
    title: `${blog.title} — Aethyl Global Blog`,
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
      siteName: "Aethyl Global",
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
      name: "Aethyl Global",
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
    <main className="min-h-screen bg-white text-ink">
      {/* Nav */}
      <nav className="w-full px-4 sm:px-6 py-4 sm:py-5 border-b border-ink/[0.08]">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
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

      <article className="max-w-3xl mx-auto px-5 sm:px-6 pt-10 sm:pt-16 pb-20 sm:pb-32">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-corporate-gray hover:text-ink transition-colors mb-10 sm:mb-16"
        >
          <ArrowLeft className="w-4 h-4" />
          All Articles
        </Link>

        {/* Meta */}
        <div className="mb-6 sm:mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-[11px] font-semibold tracking-wide mb-5">
            {blog.tag}
          </span>
          <div className="flex items-center gap-3 text-[12px] text-corporate-gray mb-6">
            <span>{displayDate}</span>
            <span className="w-1 h-1 rounded-full bg-ink/20" />
            <span>{blog.readTime}</span>
            <span className="w-1 h-1 rounded-full bg-ink/20" />
            <span>{blog.author}</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-8 sm:mb-12 rounded-xl sm:rounded-2xl overflow-hidden border border-ink/[0.08]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-auto"
          />
        </div>

        {/* Title */}
        <h1 className="text-[26px] sm:text-3xl md:text-[44px] font-extrabold text-ink leading-[1.05] tracking-[-0.03em] mb-8 sm:mb-12">
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
                className="text-xl font-bold text-ink mt-10 mb-4 tracking-[-0.02em]"
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
            <div className="mt-14 sm:mt-20 pt-8 sm:pt-12 border-t border-ink/[0.08]">
              <h2 className="text-xl font-bold text-ink mb-8 tracking-[-0.02em]">
                Related Articles
              </h2>
              <div className="grid gap-4">
                {related.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group card p-6"
                  >
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-accent/10 text-accent text-[10px] font-semibold tracking-wide mb-3">
                      {post.tag}
                    </span>
                    <h3 className="text-sm font-bold text-ink leading-snug group-hover:text-accent transition-colors duration-300 mb-2">
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
        <div className="mt-20 pt-12 border-t border-ink/[0.08] text-center">
          <p className="text-sm text-corporate-gray mb-6">
            Have a network to connect or an operation to automate? Let&apos;s
            talk.
          </p>
          <Link href="/#quote" className="btn-primary px-8 py-4 text-[11px]">
            Get Started
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
