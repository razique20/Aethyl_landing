import Link from "next/link";

/** The "ag." wordmark, always white. */
export default function Logo({ size = 28 }: { size?: number }) {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center text-white" aria-label="Aethyl Global — home">
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
