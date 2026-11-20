import { CONTACT } from "@/lib/site";

const regions = ["Middle East", "India", "Europe", "Americas"];

const principles = [
  {
    title: "We start with how you operate",
    text: "Before any code, we learn how your team actually works, then shape the software around it.",
  },
  {
    title: "First sketch to launch",
    text: "Design, app, backend and admin panel: one team takes the whole project from idea to live.",
  },
  {
    title: "We stay on after launch",
    text: "We support and improve what we build, so the software keeps up as your business grows.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            A software studio for growing businesses
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Aethyl Global builds custom dashboards, CRM systems, mobile apps and
            automation so your people spend their hours on the business instead
            of repetitive tasks. Our teams work remotely, so location is never a
            limit.
          </p>
          <div className="mt-8">
            <p className="text-sm font-medium">Clients across</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {regions.map((r) => (
                <li key={r} className="rounded-md border px-3 py-1.5 text-sm text-muted-foreground">
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Want a free 30-minute audit to see what to automate first? Email{" "}
            <a href={`mailto:${CONTACT.email}`} className="text-teal underline-offset-4 hover:underline">
              {CONTACT.email}
            </a>
            .
          </p>
        </div>

        <ul className="divide-y self-start rounded-xl border bg-card">
          {principles.map((p, i) => (
            <li key={p.title} className="flex gap-5 p-6">
              <span className="font-mono text-xs leading-7 text-subtle">0{i + 1}</span>
              <div>
                <h3 className="text-base font-semibold">{p.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
