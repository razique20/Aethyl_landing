import { Mail } from "lucide-react";
import ContactForm from "./ContactForm";
import { LinkedInIcon, XIcon } from "./SocialIcons";
import { CONTACT } from "@/lib/site";

const auditCovers = [
  "Your current tools, spreadsheets and bottlenecks",
  "What to build or automate first, and why",
  "A rough scope, timeline and budget range",
];

const channels = [
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}`, external: false },
  { icon: LinkedInIcon, label: "LinkedIn", value: "Aethyl Global", href: CONTACT.linkedin, external: true },
  { icon: XIcon, label: "X", value: "@aethylglobal", href: CONTACT.x, external: true },
];

/** Form + contact details. Used on /contact and at the end of service pages. */
export default function ContactPanel({
  heading,
  headingAs = "h2",
  defaultNeed,
}: {
  heading: string;
  headingAs?: "h1" | "h2";
  defaultNeed?: string;
}) {
  const Heading = headingAs;
  return (
    <section id="contact" className="border-t py-24 sm:py-32">
      <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <p className="label mb-8">Contact</p>
          <Heading className="font-display text-[48px] leading-[0.98] text-balance sm:text-7xl">
            {heading}
          </Heading>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            A free 30-minute video call to see what to automate first. You leave
            with a clear recommendation, whether or not you work with us.
          </p>

          <h3 className="label mt-12">What we cover</h3>
          <ol className="mt-5 space-y-3">
            {auditCovers.map((item, i) => (
              <li key={item} className="flex gap-3 text-[15px] text-muted-foreground">
                <span className="text-[13px] tabular-nums leading-6 text-subtle">0{i + 1}</span>
                {item}
              </li>
            ))}
          </ol>

          <h3 className="label mt-12">Prefer to message us?</h3>
          <ul className="mt-5 divide-y border-y">
            {channels.map(({ icon: Icon, label, value, href, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-3 py-4 text-sm transition-colors hover:text-foreground"
                >
                  <Icon className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                  <span className="w-20 text-muted-foreground">{label}</span>
                  <span className="min-w-0 truncate font-medium">{value}</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[13px] text-subtle">
            Remote team · Clients across {CONTACT.regions}
          </p>
        </div>

        <ContactForm defaultNeed={defaultNeed} />
      </div>
    </section>
  );
}
