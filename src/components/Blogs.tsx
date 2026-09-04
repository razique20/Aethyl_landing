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
    <section id="blog" className="relative py-24 md:py-40 bg-black overflow-hidden">
      <div ref={ref} className="max-w-7xl w-full mx-auto px-6">
        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <div className="accent-line mb-8" style={{ width: 40 }} />
            <h2 className="corp-heading text-white mb-4">
              Latest Insights.
            </h2>
            <p className="text-base text-corporate-gray max-w-md leading-relaxed">
              Thoughts on web development, mobile apps, AI automation, and building products that scale.
            </p>
          </div>

          {/* Scroll arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
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
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {blogs.map((blog, i) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="flex-none w-[340px] snap-start group rounded-3xl border border-white/[0.06] bg-secondary-bg p-8 transition-all duration-500 hover:bg-[#1d1d1f] hover:border-white/[0.12] cursor-pointer block"
              >
                {/* Tag */}
                <span className="inline-block px-3 py-1 rounded-lg bg-accent/10 text-accent text-[11px] font-semibold tracking-wide mb-5">
                  {blog.tag}
                </span>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-3 leading-snug tracking-tight group-hover:text-accent transition-colors duration-300">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-corporate-gray leading-relaxed mb-6 line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-5 border-t border-white/[0.06]">
                  <div className="flex items-center gap-3 text-[11px] text-corporate-gray">
                    <span>{blog.date}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>{blog.readTime}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-accent transition-colors duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Hide scrollbar via style */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
