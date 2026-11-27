export type ServiceIconKey =
  | "dashboard"
  | "crm"
  | "mobile"
  | "automation"
  | "marketing"
  | "accounting"
  | "tax";

export interface Service {
  slug: string;
  icon: ServiceIconKey;
  /** The pillar this page sits under (breadcrumb, label). */
  pillar: PillarId;
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
  /** Optional tag row under "The approach" (technology, channels). */
  stack?: string[];
  stackLabel?: string;
  /** Shown under the intro when the work is delivered with partners. */
  partnerNote?: string;
  faqs: { q: string; a: string }[];
  relatedPosts: string[];
}

export const services: Service[] = [
  {
    slug: "custom-dashboards",
    icon: "dashboard",
    pillar: "software",
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
    pillar: "software",
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
      "We build custom CRMs around your actual pipeline: the stages you use, the fields you need, and the channels your customers reach you on — so adoption comes naturally. For many teams that means a small business CRM that does exactly what they need and nothing they don't.",
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
    pillar: "software",
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
      "Our iOS and Android app development is cross-platform, using React Native or Flutter, which means one codebase for both stores, a faster first release and lower ongoing maintenance.",
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
    pillar: "software",
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
      "We automate those processes with workflow automation software and AI agents — practical AI automation for business, with every action logged and approval steps wherever you want a person to decide.",
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

/**
 * Pages for the marketing, accounting and tax pillars. Same template as the
 * software service pages. Accounting and tax are delivered with partners:
 * never claim in-house accountants or registered tax agents.
 */
export const pillarServices: Service[] = [
  {
    slug: "marketing",
    icon: "marketing",
    pillar: "marketing",
    name: "Marketing",
    metaTitle: "Marketing Services for Growing Businesses",
    metaDescription:
      "Social media management, content and design, brand development and lead generation for growing businesses, from one business services partner.",
    h1: "Marketing services for growing businesses",
    summary:
      "Social media, content, brand and lead generation, planned around what you sell and who you sell to.",
    highlights: [
      "Social media management",
      "Content, design and brand",
      "Lead generation into your inbox or CRM",
    ],
    intro: [
      "Most growing businesses know they should post more, look more consistent and follow up on enquiries faster. The problem is time: marketing gets squeezed between everything else.",
      "We take on the day-to-day marketing work: planning and publishing your social media, producing content and design, shaping your brand, and setting up lead generation so new enquiries reach you and get followed up.",
      "Because we also build software, your website, CRM and marketing work together instead of in separate silos, with one partner for software, marketing, accounting and tax.",
    ],
    deliverables: [
      {
        title: "Social media management",
        text: "A monthly content plan, posts written and designed for your channels, and scheduled publishing, so your accounts stay active without you chasing it.",
      },
      {
        title: "Content and design",
        text: "Graphics, short videos, carousels, landing pages and sales material in one consistent style that matches your brand.",
      },
      {
        title: "Brand development",
        text: "A clear brand: logo refinements, colours, type and tone of voice, with simple guidelines your team and suppliers can follow.",
      },
      {
        title: "Lead generation",
        text: "Campaigns, landing pages and enquiry forms that capture leads and send them straight to your inbox or CRM, so none slip through.",
      },
    ],
    goodFit: [
      "Your social accounts go quiet when the team gets busy",
      "Your brand looks different on every channel",
      "Enquiries come in, but nobody tracks where they came from",
    ],
    stack: ["Instagram", "LinkedIn", "Facebook", "TikTok", "Google Business Profile"],
    stackLabel: "Typical channels",
    faqs: [
      {
        q: "What does social media management include?",
        a: "Planning a monthly content calendar, writing and designing posts, scheduling them on your channels and reviewing what worked each month. We agree the channels and posting frequency with you before we start.",
      },
      {
        q: "Can you connect marketing to our website and CRM?",
        a: "Yes. Because we also build software, we can send leads from forms and campaigns straight into your CRM or inbox, and build the landing pages your campaigns point to.",
      },
      {
        q: "Where do we start if our marketing is all over the place?",
        a: "Start with the free 30-minute call. We look at your channels, your brand and how enquiries reach you, then recommend the one or two things to fix first, with a rough budget.",
      },
    ],
    relatedPosts: ["custom-websites-vs-templates", "custom-crm-development"],
  },
  {
    slug: "accounting",
    icon: "accounting",
    pillar: "accounting",
    name: "Accounting",
    metaTitle: "Accounting Services for Small Business",
    metaDescription:
      "Bookkeeping, monthly financial reporting and payroll support for small businesses, delivered with trusted accounting partners. One point of contact.",
    h1: "Accounting services for small business",
    summary:
      "Bookkeeping, monthly reports and payroll support, delivered with trusted partners and coordinated by us.",
    highlights: ["Bookkeeping", "Monthly financial reporting", "Payroll support"],
    partnerNote: "Delivered with trusted accounting partners",
    intro: [
      "Accounts that are behind make every decision harder. You don't know your real margins, payroll becomes a monthly scramble, and year-end turns into a hunt for receipts.",
      "Our accounting services for small business are delivered with trusted accounting partners. We coordinate the work and stay your point of contact, so you deal with one team instead of chasing an outside firm.",
      "Because we also build software, we can connect your books to the tools you already use, so less is typed in by hand and your reports arrive on time.",
    ],
    deliverables: [
      {
        title: "Bookkeeping",
        text: "Sales, expenses and bank transactions recorded and reconciled every month, so your books stay up to date.",
      },
      {
        title: "Monthly financial reporting",
        text: "A profit and loss statement, balance sheet and cash position each month, explained in plain language you can act on.",
      },
      {
        title: "Payroll support",
        text: "Monthly payroll calculations and records prepared on time, so your team is paid correctly.",
      },
      {
        title: "One point of contact",
        text: "Questions about your accounts go to one team, who coordinate with the accountants and come back with an answer.",
      },
    ],
    goodFit: [
      "Your bookkeeping is months behind",
      "You only find out how the business did at year-end",
      "Payroll takes up the owner's time every month",
    ],
    faqs: [
      {
        q: "Do you do the accounting work yourselves?",
        a: "Accounting services are delivered with trusted accounting partners. We coordinate the work, connect it to your systems where useful, and stay your single point of contact.",
      },
      {
        q: "Can you take over from our current bookkeeper?",
        a: "Yes. We review where your books stand today, agree a handover plan and catch up any backlog before moving to a regular monthly routine.",
      },
      {
        q: "What do we need to send each month?",
        a: "Usually bank statements or bank feed access, sales and purchase invoices, receipts and any payroll changes. We agree a simple checklist so you know exactly what to send.",
      },
    ],
    relatedPosts: ["outsourced-accounting-and-tax-for-small-business"],
  },
  {
    slug: "tax",
    icon: "tax",
    pillar: "tax",
    name: "Tax",
    metaTitle: "UAE Corporate Tax & VAT Advisory Services",
    metaDescription:
      "UAE corporate tax and VAT registration, filing and compliance support, delivered with trusted tax partners and coordinated by one point of contact.",
    h1: "UAE corporate tax and VAT services",
    summary:
      "Corporate tax and VAT registration, filing and compliance support, delivered with trusted tax partners.",
    highlights: [
      "Corporate tax registration and filing",
      "VAT registration and filing",
      "Compliance support",
    ],
    partnerNote: "Delivered with trusted tax partners",
    intro: [
      "UAE corporate tax and VAT bring registrations, returns and deadlines that a growing business cannot afford to miss. Keeping track of them while running the business is hard.",
      "Our tax advisory services are delivered with trusted tax partners. We coordinate registration, filing and compliance work, keep track of deadlines with you, and stay your point of contact throughout.",
      "Tax work is only as good as the records behind it, so we make sure your bookkeeping gives your returns accurate, up-to-date numbers.",
    ],
    deliverables: [
      {
        title: "Corporate tax registration and filing",
        text: "Support with registering your business for UAE corporate tax, then preparing and filing returns on time.",
      },
      {
        title: "VAT registration and filing",
        text: "Help working out whether you need to register for VAT, then registration and regular VAT returns.",
      },
      {
        title: "Compliance support",
        text: "Guidance on the records to keep and the deadlines that apply to your business, so you stay compliant as you grow.",
      },
      {
        title: "Connected to your books",
        text: "Returns are prepared from up-to-date bookkeeping, not a last-minute rush to pull numbers together.",
      },
    ],
    goodFit: [
      "You're not sure whether you need to register for corporate tax or VAT",
      "Tax deadlines keep catching you by surprise",
      "Your records aren't ready when a return is due",
    ],
    faqs: [
      {
        q: "Who does the tax work?",
        a: "Tax services are delivered with trusted tax partners. We coordinate the work and remain your point of contact throughout.",
      },
      {
        q: "Does my business need to register for UAE corporate tax?",
        a: "Most businesses operating in the UAE fall within the corporate tax regime, but what applies depends on your structure and activities. Our tax partners review your situation and confirm what you need to do.",
      },
      {
        q: "Can you help with VAT returns as well as registration?",
        a: "Yes. Alongside registration, we coordinate regular VAT return preparation and filing with our tax partners, based on your up-to-date records.",
      },
    ],
    relatedPosts: ["outsourced-accounting-and-tax-for-small-business"],
  },
];

/** Every page under /services/[slug]. */
export const allServices: Service[] = [...services, ...pillarServices];

export function getServiceBySlug(slug: string): Service | undefined {
  return allServices.find((s) => s.slug === slug);
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
  /** The pillar's own page, when it has one. */
  href?: string;
  /** Shown as a note when the work is delivered with partners. */
  partnerNote?: string;
}

export const pillars: Pillar[] = [
  {
    id: "software",
    name: "Software",
    description:
      "Business software development built around how your team works: custom CRMs, dashboards, mobile apps and AI automation, supported after launch.",
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
    href: "/services/marketing",
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
    href: "/services/accounting",
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
    href: "/services/tax",
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
