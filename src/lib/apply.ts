import { CONTACT } from "./site";

/** mailto link for a job application, with the role in the subject and a short template. */
export function applyHref(roleTitle?: string) {
  const subject = roleTitle ? `Application — ${roleTitle}` : "Open application";
  const body = [
    "Hi Aethyl Global team,",
    "",
    roleTitle ? `I'd like to apply for the ${roleTitle} role. My CV is attached.` : "I'd like to be considered for future roles. My CV is attached.",
    "",
    "Name:",
    "Location / time zone:",
    "Portfolio, GitHub or LinkedIn:",
    "",
    "A little about me:",
    "",
  ].join("\n");
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
