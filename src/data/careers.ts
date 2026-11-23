export interface Role {
  slug: string;
  title: string;
  team: string;
  type: string;
  location: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
}

/** Open roles. Add, edit or remove entries here; the careers page updates itself. */
export const roles: Role[] = [
  {
    slug: "full-stack-engineer",
    title: "Full-stack Engineer",
    team: "Engineering",
    type: "Full-time",
    location: "Remote",
    summary:
      "Build dashboards, CRM systems and mobile apps for growing businesses, from first sketch to launch: frontend, backend and admin panel.",
    responsibilities: [
      "Build web apps and APIs with Next.js, React, Node.js and PostgreSQL",
      "Turn a client's way of working into clear data models and screens",
      "Ship working software every week and talk directly with clients",
      "Support and improve systems after launch",
    ],
    requirements: [
      "Solid experience with TypeScript, React and a backend framework",
      "Comfortable designing databases and REST APIs",
      "Production apps you can show us: links, repos or case studies",
      "Clear written English and good remote working habits",
    ],
  },
  {
    slug: "graphic-designer",
    title: "Graphic Designer",
    team: "Design",
    type: "Full-time",
    location: "Remote",
    summary:
      "Shape how our clients' software and brands look: interfaces, brand assets, marketing visuals and presentations.",
    responsibilities: [
      "Design UI screens, dashboards and app flows in Figma",
      "Create brand identities, social graphics and marketing material",
      "Work with engineers so designs ship as intended",
      "Keep design systems tidy and consistent across projects",
    ],
    requirements: [
      "A strong portfolio covering UI and brand or graphic work",
      "Fluent in Figma; Adobe Illustrator and Photoshop a plus",
      "A good eye for typography, layout and detail",
      "Able to explain design decisions to clients",
    ],
  },
  {
    slug: "automation-specialist",
    title: "Automation Specialist",
    team: "Automation",
    type: "Full-time",
    location: "Remote",
    summary:
      "Find the repetitive work in a client's business and automate it with integrations, workflows and AI agents.",
    responsibilities: [
      "Map client processes and spot what to automate first",
      "Build workflows and integrations between business tools and APIs",
      "Set up AI agents with logging and human approval steps",
      "Document automations and train client teams to use them",
    ],
    requirements: [
      "Hands-on experience with tools like n8n, Make or Zapier",
      "Comfortable with APIs, webhooks and some scripting (JavaScript or Python)",
      "Experience working with LLM APIs is a strong plus",
      "Methodical, with an eye for edge cases and data quality",
    ],
  },
];

export function getRoleBySlug(slug: string): Role | undefined {
  return roles.find((r) => r.slug === slug);
}
