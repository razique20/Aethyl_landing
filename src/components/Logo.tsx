import Link from "next/link";

/** The "ag." wordmark, in the current ink colour (white on dark bands). */
export default function Logo({ size = 28 }: { size?: number }) {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center text-foreground" aria-label="Aethyl Global — home">
      <span
        className="font-light leading-none tracking-[-0.06em]"
        style={{ fontSize: size }}
        aria-hidden="true"
      >
        ag.
      </span>
    </Link>
  );
}
