import Image from "next/image";
import Link from "next/link";
import mark from "../../public/logo-mark.png";

/** The pillar mark followed by the AETHYL wordmark with GLOBAL in wide spacing. */
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
      <LogoMark className="size-[2em]" />
      <span className="font-display uppercase tracking-[-0.01em]">Aethyl</span>
      <span className="text-[0.42em] font-medium uppercase tracking-[0.42em]">Global</span>
    </span>
  );
}

/** The brand mark: four white pillars under a blue roof, on ink. */
export function LogoMark({ className }: { className?: string }) {
  return <Image src={mark} alt="" width={64} height={64} className={`block shrink-0 ${className ?? ""}`} />;
}
