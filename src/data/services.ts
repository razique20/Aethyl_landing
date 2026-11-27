export type ServiceIconKey = "dashboard" | "crm" | "mobile" | "automation";

export interface Service {
  slug: string;
  icon: ServiceIconKey;
  /** Short name used in nav, cards and breadcrumbs. */
  name: string;
  /** <title> (the layout template appends "| Aethyl Global"). */
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** One-line card summary on the homepage and /services. */
  summary: string;
  /** Three short bullets shown on cards. */
  highlights: string[];
  intro: string[];
  deliverables: { title: string; text: string }[];
  goodFit: string[];
  stack: string[];
  faqs: { q: string; a: string }[];
  relatedPosts: string[];
}

export const services: Service[] = [
  {
    slug: "custom-dashboards",
    icon: "dashboard",
    name: "Custom dashboards",
    metaTitle: "Custom Dashboard Development Services",
    metaDescription:
      "Custom business dashboard development. Replace Excel reports with live sales, inventory, warehouse and operations dashboards connected to the systems you already use.",
    h1: "Custom dashboard development",
    summary:
      "Live sales, inventory, warehouse and operations dashboards that replace the spreadsheets your team updates by hand.",
    highlights: [
      "Replace manual Excel reporting",
      "Connect your existing tools and databases",
      "Role-based views for managers and staff",
    ],
    intro: [
      "Most growing businesses run on spreadsheets that someone rebuilds every week. Numbers go stale, versions multiply, and decisions wait on whoever owns the file.",
      "We build custom dashboards that pull directly from the systems you already use — your POS, ERP, accounting software, Google Sheets or database — so the numbers are current every time someone opens them.",
    ],
    deliverables: [
      {
        title: "Operations & warehouse dashboards",
        text: "Stock levels, movements, orders and fulfilment status in one place, updated automatically instead of by hand.",
      },
      {
        title: "Sales & management reporting",
        text: "Revenue, pipeline and team performance views with the filters and date ranges your managers actually use.",
      },
      {
        title: "Data connections",
        text: "Integrations with your existing software, APIs and spreadsheets, so the dashboard reflects reality without double entry.",
      },
      {
        title: "Access control",
        text: "Separate views and permissions for owners, managers and staff, with secure sign-in.",
      },
    ],
    goodFit: [
      "You rebuild the same report in Excel every week or month",
      "Data lives in several tools that don't talk to each other",
      "Managers ask for numbers that take hours to pull together",
    ],
    stack: ["Next.js", "React", "PostgreSQL", "REST APIs", "Google Sheets API"],
    faqs: [
      {
        q: "Can the dashboard use data from our existing systems?",
        a: "Yes. We connect to the tools you already use — databases, accounting or POS software with an API, and spreadsheets — so you don't have to migrate before you see value.",
      },
      {
        q: "How long does a custom dashboard take to build?",
        a: "A first working version is typically live in 2 to 4 weeks, depending on how many data sources are involved. We confirm the timeline after the free call.",
      },
      {
        q: "Will it work on mobile?",
        a: "Yes. Dashboards are built as responsive web apps, so they work on desktop, tablet and phone without installing anything.",
      },
    ],
    relatedPosts: ["custom-crm-development", "saas-launch-playbook"],
  },
  {
    slug: "crm-development",
    icon: "crm",
    name: "CRM development",
    metaTitle: "Custom CRM Development Services",
    metaDescription:
      "Custom CRM development for growing businesses. A CRM built around your sales process — leads, follow-ups, WhatsApp and email, quotes and reporting — that your team will actually use.",
    h1: "Custom CRM development",
    summary:
      "A CRM shaped around how your team sells — leads, follow-ups, quotes and reporting without paying for features you never use.",
    highlights: [
      "Built around your sales process",
      "Lead capture from web, WhatsApp and email",
      "Automated follow-ups and reminders",
    ],
    intro: [
      "Off-the-shelf CRMs ask your team to change how they work. When the fit is poor, people go back to spreadsheets and WhatsApp threads, and the CRM becomes an expensive address book.",
      "We build custom CRMs around your actual pipeline: the stages you use, the fields you need, and the channels your customers reach you on — so adoption comes naturally.",
    ],
    deliverables: [
      {
        title: "Lead & pipeline management",
        text: "Your own stages, fields and ownership rules, with a clear view of every deal and what needs to happen next.",
      },
      {
        title: "Lead capture",
        text: "Leads flow in automatically from your website forms, landing pages and other channels instead of being copied by hand.",
      },
      {
        title: "Follow-ups & reminders",
        text: "Automated tasks and reminders so no enquiry is forgotten, with activity history on every contact.",
      },
      {
        title: "Quotes, reporting & integrations",
        text: "Quote generation, sales reports and connections to your accounting, email and other business tools.",
      },
    ],
    goodFit: [
      "Your sales process doesn't fit a generic CRM",
      "Leads are tracked across spreadsheets, inboxes and WhatsApp",
      "Per-seat CRM pricing is growing faster than your team",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "REST APIs", "Webhooks"],
    faqs: [
      {
        q: "Why build a custom CRM instead of using an existing one?",
        a: "A custom CRM fits your exact process, avoids per-seat licence costs as you grow, and can include workflows a generic tool can't. If an off-the-shelf CRM suits you better, we'll tell you during the free call.",
      },
      {
        q: "Can you migrate our existing customer data?",
        a: "Yes. We import contacts, deals and history from spreadsheets or your current CRM as part of the rollout.",
      },
      {
        q: "Can the CRM connect to WhatsApp and email?",
        a: "We can integrate email and messaging channels that provide an API, so conversations and leads are logged against the right contact.",
      },
    ],
    relatedPosts: ["custom-crm-development", "saas-launch-playbook"],
  },
  {
    slug: "mobile-app-development",
    icon: "mobile",
    name: "Mobile apps",
    metaTitle: "Mobile App Development — iOS & Android Apps",
    metaDescription:
      "Mobile app development for iOS and Android. Cross-platform apps built with React Native or Flutter, from first sketch to App Store and Google Play launch, backend and admin panel included.",
    h1: "Mobile app development",
    summary:
      "iOS and Android apps for your customers or your team, built cross-platform so you launch on both stores from one codebase.",
    highlights: [
      "iOS and Android from one codebase",
      "Customer apps and internal team apps",
      "App Store and Google Play launch",
    ],
    intro: [
      "Whether it's an app for your customers or a tool for your field team, a mobile app has to be fast, reliable and simple to use — or people stop opening it.",
      "We build cross-platform apps with React Native or Flutter, which means one codebase for iOS and Android, a faster first release and lower ongoing maintenance.",
    ],
    deliverables: [
      {
        title: "Customer-facing apps",
        text: "Booking, ordering, loyalty and account apps that connect to your existing systems and payment providers.",
      },
      {
        title: "Internal & field team apps",
        text: "Apps for drivers, technicians and sales staff — task lists, check-ins, photos, signatures and offline support.",
      },
      {
        title: "Backend & admin panel",
        text: "The APIs, database and admin dashboard behind the app, so your team can manage content and users.",
      },
      {
        title: "Store launch & updates",
        text: "App Store and Google Play submission, plus ongoing updates as the operating systems change.",
      },
    ],
    goodFit: [
      "Customers keep asking for an app",
      "Your field team works from paper forms or WhatsApp",
      "You need iOS and Android without paying for two separate builds",
    ],
    stack: ["React Native", "Flutter", "TypeScript", "Node.js", "PostgreSQL"],
    faqs: [
      {
        q: "How much does a mobile app cost?",
        a: "It depends on features, integrations and design. After the free 30-minute call we give you a scoped quote, and we can suggest a smaller first release to get to market sooner.",
      },
      {
        q: "React Native or Flutter — which do you use?",
        a: "Both. We recommend one based on your app's requirements and your team. Either way you get a single codebase for iOS and Android.",
      },
      {
        q: "Do you publish the app to the stores?",
        a: "Yes. We handle App Store and Google Play submission and can publish under your company's developer accounts.",
      },
    ],
    relatedPosts: ["mobile-app-development-cost-2026", "react-native-vs-flutter-2026"],
  },
  {
    slug: "business-automation",
    icon: "automation",
    name: "Automation",
    metaTitle: "Business Process Automation & AI Agents",
    metaDescription:
      "Business process automation for growing businesses. Automate data entry, reporting, scheduling and customer routing with workflows and AI agents that work inside the tools you already use.",
    h1: "Business process automation",
    summary:
      "Workflows and AI agents that take over data entry, reporting, scheduling and routing — so your team spends time on work that needs a person.",
    highlights: [
      "Automate repetitive data entry and reports",
      "AI agents with human approval steps",
      "Works with the tools you already use",
    ],
    intro: [
      "Every business has work that follows the same steps every time: copying data between systems, sending the same reports, routing enquiries, scheduling. It is slow, error-prone and rarely anyone's favourite job.",
      "We automate those processes with integrations and AI agents with every action logged and approval steps wherever you want a person to decide.",
    ],
    deliverables: [
      {
        title: "Workflow automation",
        text: "Connect your apps so data moves between them automatically — orders, invoices, leads, stock and status updates.",
      },
      {
        title: "Automated reporting",
        text: "Daily and weekly reports generated and delivered on schedule instead of compiled by hand.",
      },
      {
        title: "AI agents",
        text: "Agents that handle enquiries, data extraction and routing inside your existing tools, with human-in-the-loop controls.",
      },
      {
        title: "Monitoring & audit trail",
        text: "Every automated action is logged, so you can see what ran, when, and why.",
      },
    ],
    goodFit: [
      "Staff spend hours copying data between systems",
      "Reports are compiled manually every week",
      "Enquiries wait in an inbox until someone routes them",
    ],
    stack: ["AI agents", "REST APIs", "Webhooks", "Node.js", "PostgreSQL"],
    faqs: [
      {
        q: "What kinds of tasks can be automated?",
        a: "Anything rule-based and repeated: data entry between systems, report generation, invoice and order processing, appointment scheduling and enquiry routing. The free call identifies which ones save you the most time first.",
      },
      {
        q: "Is AI automation safe for our business data?",
        a: "Agents only get access to the systems and actions you approve, every action is logged, and sensitive steps can require a person to approve before anything happens.",
      },
    ],
    relatedPosts: ["cicd-pipelines-for-startups", "custom-crm-development"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/**
 * The four service pillars. Software is built by our own team; accounting and
 * tax are delivered with trusted partners (never claim in-house accountants
 * or registered tax agents).
 */
export type PillarId = "software" | "marketing" | "accounting" | "tax";

export interface Pillar {
  id: PillarId;
  name: string;
  description: string;
  items: { label: string; href?: string }[];
  /** Shown as a note when the work is delivered with partners. */
  partnerNote?: string;
}

export const pillars: Pillar[] = [
  {
    id: "software",
    name: "Software",
    description:
      "Custom software built around how your team works, from first sketch to launch, and supported after it.",
    items: [
      { label: "Custom dashboards", href: "/services/custom-dashboards" },
      { label: "CRM systems", href: "/services/crm-development" },
      { label: "Web development" },
      { label: "Mobile apps", href: "/services/mobile-app-development" },
      { label: "AI automation", href: "/services/business-automation" },
    ],
  },
  {
    id: "marketing",
    name: "Marketing",
    description:
      "Social media, content and brand work that keeps your business visible and brings in new enquiries.",
    items: [
      { label: "Social media management" },
      { label: "Content and design" },
      { label: "Brand development" },
      { label: "Lead generation" },
    ],
  },
  {
    id: "accounting",
    name: "Accounting",
    description:
      "Bookkeeping, monthly financial reporting and payroll support, delivered with trusted accounting partners.",
    items: [
      { label: "Bookkeeping" },
      { label: "Monthly financial reporting" },
      { label: "Payroll support" },
    ],
    partnerNote: "Delivered with trusted accounting partners",
  },
  {
    id: "tax",
    name: "Tax",
    description:
      "UAE corporate tax and VAT registration, filing and compliance support, delivered with trusted tax partners.",
    items: [
      { label: "Corporate tax registration and filing" },
      { label: "VAT registration and filing" },
      { label: "Compliance support" },
    ],
    partnerNote: "Delivered with trusted tax partners",
  },
];

export const processSteps = [
  {
    title: "Free 30-minute call",
    text: "We learn how your business runs today and where you need help: software, marketing, accounting or tax.",
  },
  {
    title: "Scope & quote",
    text: "A clear written scope, timeline and quote for the work, before any commitment.",
  },
  {
    title: "Delivery",
    text: "Software ships in weekly releases you can see. Accounting and tax work runs with our partners, coordinated by us.",
  },
  {
    title: "Ongoing support",
    text: "One point of contact for everything, and we stay on as your business grows.",
  },
];
