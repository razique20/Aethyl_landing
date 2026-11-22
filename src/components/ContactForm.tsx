"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { buttonVariants } from "./ui";
import { CONTACT } from "@/lib/site";

const FORM_ENDPOINT = "https://formspree.io/f/xqpklprd";

const needs = [
  "Custom dashboard",
  "CRM",
  "Mobile app",
  "Automation / AI agents",
  "Website or web app",
  "Not sure yet",
];

const field =
  "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const label = "mb-2 block text-sm font-medium";

/**
 * Posts to Formspree. With JavaScript it submits via fetch and routes to
 * /thank-you; without it, the native form POST still works.
 */
export default function ContactForm({ defaultNeed }: { defaultNeed?: string }) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const data = new FormData(e.currentTarget);
    data.set("needs", data.getAll("need").join(", "));
    data.delete("need");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Request failed");
      router.push("/thank-you");
    } catch {
      setError(`Something went wrong. Please try again, or email ${CONTACT.email}.`);
      setSubmitting(false);
    }
  }

  return (
    <form
      action={FORM_ENDPOINT}
      method="POST"
      onSubmit={handleSubmit}
      className="rounded-xl border bg-card p-6 sm:p-8"
    >
      <input type="hidden" name="_subject" value="Free 30-minute audit request — aethyl.com" />

      <div className="mb-6">
        <h2 className="font-display text-3xl">Book your free <em>audit</em></h2>
        <p className="mt-1 text-sm text-muted-foreground">
          We&apos;ll reply within one working day to schedule a time.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={label}>Name</label>
          <input id="cf-name" name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="cf-company" className={label}>Company</label>
          <input id="cf-company" name="company" autoComplete="organization" className={field} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cf-email" className={label}>Work email</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={field}
          />
        </div>

        <fieldset className="sm:col-span-2">
          <legend className={label}>What do you need help with?</legend>
          <div className="flex flex-wrap gap-2">
            {needs.map((need) => (
              <label
                key={need}
                className="cursor-pointer rounded-full border border-input px-3 py-1.5 text-[13px] text-muted-foreground transition-colors hover:bg-accent has-checked:border-teal has-checked:bg-teal/10 has-checked:text-teal has-focus-visible:ring-2 has-focus-visible:ring-ring"
              >
                <input
                  type="checkbox"
                  name="need"
                  value={need}
                  defaultChecked={need === defaultNeed}
                  className="sr-only"
                />
                {need}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="sm:col-span-2">
          <label htmlFor="cf-message" className={label}>What would you like to improve?</label>
          <textarea
            id="cf-message"
            name="message"
            rows={4}
            placeholder="e.g. We track stock in Excel across two warehouses and want a live dashboard."
            className={`${field} h-auto min-h-[110px] resize-y`}
          />
        </div>
      </div>

      {error && (
        <p role="alert" className="mt-5 rounded-md border border-amber/40 px-3 py-2 text-sm text-amber">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className={buttonVariants({ variant: "audit", size: "lg", className: "mt-6 w-full" })}
      >
        {submitting ? "Sending…" : "Book my free 30-minute audit"}
      </button>
      <p className="mt-3 text-center text-xs text-subtle">No cost, no obligation, no spam.</p>
    </form>
  );
}
