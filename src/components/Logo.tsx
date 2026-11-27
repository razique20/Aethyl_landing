import Link from "next/link";

/** AETHYL wordmark with GLOBAL in wide spacing and the lime square mark. */
export default function Logo({ size = 22, className }: { size?: number; className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center text-foreground ${className ?? ""}`}
      aria-label="Aethyl Global — home"
    >
      <Wordmark size={size} />
    </Link>
  );
}

export function Wordmark({ size = 22 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-[0.4em] leading-none" style={{ fontSize: size }} aria-hidden="true">
      <span className="block size-[0.42em] bg-lime" />
      <span className="font-display uppercase tracking-[-0.01em]">Aethyl</span>
      <span className="text-[0.42em] font-medium uppercase tracking-[0.42em]">Global</span>
    </span>
  );
}
