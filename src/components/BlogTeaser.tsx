import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogs, type Blog } from "@/data/blogs";
import { SectionHeading } from "./ui";

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

/** A single row in a shadcn-style list of posts. */
export function BlogRow({ blog, headingLevel = "h3" }: { blog: Blog; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="group grid gap-2 py-8 sm:grid-cols-[150px_1fr_auto] sm:items-baseline sm:gap-10"
    >
      <time dateTime={blog.date} className="text-sm text-subtle">
        {formatDate(blog.date)}
      </time>
      <div>
        <Heading className="font-display text-[22px] leading-[1.15] text-balance transition-colors group-hover:text-muted-foreground sm:text-[26px]">
          {blog.title}
        </Heading>
        <p className="mt-3 max-w-2xl line-clamp-2 text-[15px] leading-relaxed text-muted-foreground">{blog.excerpt}</p>
      </div>
      <span className="hidden text-sm text-subtle sm:block">{blog.readTime}</span>
    </Link>
  );
}

export default function BlogTeaser({
  title = "Notes for growing businesses",
  slugs,
  index,
}: {
  title?: React.ReactNode;
  slugs?: string[];
  index?: string;
}) {
  const posts = slugs
    ? slugs.map((s) => blogs.find((b) => b.slug === s)).filter((b): b is Blog => !!b)
    : [...blogs].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section className="border-t py-24 sm:py-32">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading title={title} label="Journal" index={index} />
          <Link href="/blog" className="link-draw inline-flex items-center gap-2 self-start text-[15px] sm:self-auto">
            All articles <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <ul className="mt-14 divide-y border-y">
          {posts.map((b) => (
            <li key={b.slug} data-reveal>
              <BlogRow blog={b} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
