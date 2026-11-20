import Link from "next/link";
import { buttonVariants } from "@/components/ui";
import { services } from "@/data/services";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-page max-w-xl text-center">
        <p className="font-mono text-sm text-subtle">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.035em]">Page not found</h1>
        <p className="mt-4 text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist. Try one of these instead:
        </p>
        <ul className="mt-8 flex flex-wrap justify-center gap-2">
          {services.map((s) => (
            <li key={s.slug}>
              <Link href={`/services/${s.slug}`} className={buttonVariants({ variant: "outline", size: "sm" })}>
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/" className={buttonVariants({ variant: "link", className: "mt-8" })}>
          Back to home
        </Link>
      </div>
    </section>
  );
}
