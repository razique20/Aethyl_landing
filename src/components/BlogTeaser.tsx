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
      className="group grid gap-2 py-6 sm:grid-cols-[140px_1fr_auto] sm:items-baseline sm:gap-8"
    >
      <time dateTime={blog.date} className="text-sm text-subtle">
        {formatDate(blog.date)}
      </time>
      <div>
        <Heading className="text-lg font-medium tracking-tight group-hover:underline group-hover:underline-offset-4">
          {blog.title}
        </Heading>
        <p className="mt-1.5 line-clamp-2 text-[15px] leading-relaxed text-muted-foreground">{blog.excerpt}</p>
      </div>
      <span className="hidden text-sm text-subtle sm:block">{blog.readTime}</span>
    </Link>
  );
}

export default function BlogTeaser({
  title = "Guides for planning your next system",
  slugs,
}: {
  title?: string;
  slugs?: string[];
}) {
  const posts = slugs
    ? slugs.map((s) => blogs.find((b) => b.slug === s)).filter((b): b is Blog => !!b)
    : [...blogs].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading title={title} />
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-teal underline-offset-4 hover:underline">
            All articles <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <ul className="mt-10 divide-y border-y">
          {posts.map((b) => (
            <li key={b.slug}>
              <BlogRow blog={b} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
