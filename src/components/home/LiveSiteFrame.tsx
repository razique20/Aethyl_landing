"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const VIEWPORT_W = 1280;
const VIEWPORT_H = 800;

/**
 * A live, scaled-down embed of another site inside a browser-style frame.
 * The page renders at desktop width and is scaled to fit, so visitors see
 * the real desktop layout rather than a cramped mobile one.
 */
export default function LiveSiteFrame({ url, title }: { url: string; title: string }) {
  const box = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);
  const [loaded, setLoaded] = useState(false);
  const host = new URL(url).host;

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / VIEWPORT_W));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="overflow-hidden rounded-t-lg border border-b-0 bg-card shadow-xl shadow-black/[0.06]">
      <div className="flex h-10 items-center gap-3 border-b px-4">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-input" />
          <span className="size-2.5 rounded-full bg-input" />
          <span className="size-2.5 rounded-full bg-input" />
        </span>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="group mx-auto inline-flex min-w-0 items-center gap-1.5 rounded-full bg-muted px-4 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <span className="truncate">{host}</span>
          <ArrowUpRight className="size-3 shrink-0 transition-transform group-hover:-translate-y-px group-hover:translate-x-px" aria-hidden="true" />
        </a>
        <span className="w-[42px]" aria-hidden="true" />
      </div>

      <div
        ref={box}
        className="relative overflow-hidden bg-background"
        style={{ aspectRatio: `${VIEWPORT_W} / ${VIEWPORT_H}` }}
      >
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center text-sm text-subtle">
            Loading {host}…
          </div>
        )}
        <iframe
          src={url}
          title={title}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute left-0 top-0 origin-top-left border-0 transition-opacity duration-500"
          style={{
            width: VIEWPORT_W,
            height: VIEWPORT_H,
            transform: `scale(${scale})`,
            opacity: loaded ? 1 : 0,
          }}
        />
      </div>
    </div>
  );
}
