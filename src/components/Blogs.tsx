"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { blogs } from "@/data/blogs";

export default function Blogs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 380;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="blog" className="relative py-24 sm:py-32 md:py-40 bg-cloud overflow-hidden">
      <div ref={ref} className="max-w-[1240px] w-full mx-auto px-6">
        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <div className="eyebrow mb-6">In the field</div>
            <h2 className="framer-subheading text-ink mb-3">
              Latest insights.
            </h2>
            <p className="text-base text-corporate-gray max-w-md leading-relaxed">
              Notes on networks, automation, and building software that keeps
              running long after launch.
            </p>
          </div>

          {/* Scroll arrows */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-11 h-11 rounded-full border border-ink/15 flex items-center justify-center text-ink/50 hover:text-ink hover:border-ink/40 transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-11 h-11 rounded-full border border-ink/15 flex items-center justify-center text-ink/50 hover:text-ink hover:border-ink/40 transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Scroller */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {blogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="flex-none w-[min(340px,80vw)] snap-start group card p-6 sm:p-7 block"
              >
                {/* Tag */}
                <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-[11px] font-semibold tracking-wide mb-5">
                  {blog.tag}
                </span>

                {/* Title */}
                <h3 className="text-[16px] font-bold text-ink mb-3 leading-snug tracking-[-0.02em] group-hover:text-accent transition-colors duration-300">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[13px] text-corporate-gray leading-relaxed mb-6 line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-ink/[0.08]">
                  <div className="flex items-center gap-3 text-[11px] text-corporate-gray">
                    <span>
                      {new Date(blog.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                      })}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-ink/20" />
                    <span>{blog.readTime}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-ink/30 group-hover:text-accent transition-colors duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
