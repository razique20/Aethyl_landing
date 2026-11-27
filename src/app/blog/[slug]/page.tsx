import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { blogs, getBlogBySlug } from "@/data/blogs";
import { BlogRow } from "@/components/BlogTeaser";
import { Badge, buttonVariants } from "@/components/ui";
import JsonLd from "@/components/JsonLd";
import { AUDIT_CTA, SITE_NAME, SITE_URL } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return {};
  const path = `/blog/${slug}`;

  return {
    title: blog.seoTitle ? { absolute: blog.seoTitle } : blog.title,
    description: blog.excerpt,
    alternates: { canonical: path },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: path,
      type: "article",
      publishedTime: blog.date,
      authors: [blog.author],
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

  const url = `${SITE_URL}/blog/${slug}`;
  const displayDate = new Date(blog.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const related = [
    ...blogs.filter((b) => b.slug !== slug && b.tag === blog.tag),
    ...blogs.filter((b) => b.slug !== slug && b.tag !== blog.tag),
  ].slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt,
    datePublished: blog.date,
    dateModified: blog.date,
    mainEntityOfPage: url,
    image: `${SITE_URL}${blog.image}`,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: blog.title, item: url },
    ],
  };

  return (
    <>
      <article className="container-page max-w-3xl pb-20 pt-10 sm:pt-14">
        <Link href="/blog" className={buttonVariants({ variant: "ghost", size: "sm", className: "-ml-3 mb-10" })}>
          <ArrowLeft aria-hidden="true" />
          All articles
        </Link>

        <header className="mb-10">
          <Badge>{blog.tag}</Badge>
          <h1 className="font-display mt-6 text-[34px] leading-[1.04] text-balance sm:text-5xl">
            {blog.title}
          </h1>
          <p className="mt-5 text-sm text-subtle">
            <time dateTime={blog.date}>{displayDate}</time> · {blog.readTime} · {blog.author}
          </p>
        </header>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={blog.image}
          alt={`Illustration for the article: ${blog.title}`}
          width={1200}
          height={630}
          className="mb-12 h-auto w-full border"
        />

        <div className="prose-article">
          {blog.content.map((block, i) =>
            block.type === "heading" ? <h2 key={i}>{block.text}</h2> : <p key={i}>{withLinks(block.text)}</p>
          )}
        </div>

        <aside className="theme-blue cut-tr mt-16 p-6 sm:p-8">
          <h2 className="font-display text-2xl uppercase">Planning something <em>similar?</em></h2>
          <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
            Book a free 30-minute call with our team. We&apos;ll look at how you work
            today and tell you what&apos;s worth doing first.
          </p>
          <Link href={AUDIT_CTA.href} className={buttonVariants({ className: "mt-5" })}>
            {AUDIT_CTA.label}
            <ArrowRight aria-hidden="true" />
          </Link>
        </aside>
      </article>

      {related.length > 0 && (
        <section className="pb-20">
          <div className="container-page max-w-3xl">
            <h2 className="label">Related articles</h2>
            <ul className="mt-4 divide-y border-y">
              {related.map((b) => (
                <li key={b.slug}>
                  <BlogRow blog={b} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <JsonLd data={[articleJsonLd, breadcrumbJsonLd]} />
    </>
  );
}

/** Renders inline [text](/internal-path) links in a paragraph as <Link>s. */
function withLinks(text: string) {
  const parts: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;
  let last = 0;
  for (const m of text.matchAll(re)) {
    const i = m.index ?? 0;
    if (i > last) parts.push(text.slice(last, i));
    parts.push(
      <Link key={i} href={m[2]} className="text-foreground underline underline-offset-4 hover:text-lime">
        {m[1]}
      </Link>
    );
    last = i + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}
