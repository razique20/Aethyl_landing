import Link from "next/link";
import { buttonVariants } from "@/components/ui";
import { services } from "@/data/services";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-page max-w-xl text-center">
        <p className="label">Error 404</p>
        <h1 className="font-display mt-5 text-6xl leading-none">Page <em>not found</em></h1>
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
