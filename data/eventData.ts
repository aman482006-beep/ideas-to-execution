export interface EventTrack {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
}

export interface EventRule {
  title: string;
  detail: string;
}

export const eventMeta = {
  title: "8i Founders' Day",
  theme: "Built to Last",
  tagline: "One day for founders 8i has backed — and the ones it might back next.",
  date: "Saturday, 28 November 2026",
  time: "9:30 AM – 8:30 PM",
  location: "Bengaluru",
  summary: "A curated founder community built around real problems, honest conversations, and useful introductions.",
  whyText: "This isn't another networking mixer. Founders will come together around the problems that become harder immediately after the first cheque — hiring, growth, compliance, unit economics, and the decisions that don't have obvious answers.",
  outcomeGoal: "Everyone should leave having solved one real problem and made three introductions.",
  prototypeLabel: "Prototype registration experience",
};

export const eventTracks: EventTrack[] = [
  {
    id: "money-compliance",
    title: "Money and compliance",
    subtitle: "Staying audit-ready as a fintech without slowing down.",
    description: "Navigating regulatory filings, banking rails, RBI hygiene, and institutional governance while maintaining high product velocity.",
    tag: "TRACK 01",
  },
  {
    id: "growth-payback",
    title: "Growth that pays back",
    subtitle: "Knowing when consumer growth turns profitable.",
    description: "Deconstructing modern trade distribution, customer lifetime value (LTV), brand moat defensibility, and sound unit economics.",
    tag: "TRACK 02",
  },
  {
    id: "first-25-hires",
    title: "The first 25 hires",
    subtitle: "Who to hire, when, and how to keep the culture.",
    description: "Recruiting key leaders, avoiding early executive turnover, setting compensation standards, and scaling without diluting builder DNA.",
    tag: "TRACK 03",
  },
];

export const eventRules: EventRule[] = [
  {
    title: "NO PITCHING",
    detail: "No fundraising presentations or vanity slides. We are in the room as operators and peers.",
  },
  {
    title: "NO SPONSORED TALKS",
    detail: "Every session is led by founders and practitioners who have navigated real P&Ls.",
  },
  {
    title: "BRING ONE REAL PROBLEM TO SOLVE",
    detail: "Come with a genuine challenge your startup faces. Leave with tactical solutions and three meaningful introductions.",
  },
];

export const audienceCohorts = [
  { label: "8i Portfolio Founders", note: "Slice, Blue Tokai, M2P, Easebuzz, Boba Bhai & portfolio leaders" },
  { label: "Origami Pipeline Founders", note: "Fast-moving early-stage builders evaluated under 30-day velocity" },
  { label: "Curated External Founders", note: "Selected Day Zero founders building enduring consumer & fintech infrastructure" },
  { label: "Operators & Domain Experts", note: "Battle-tested functional specialists across scale and regulation" },
];

export const popularSectors = [
  "Fintech & Payments",
  "Consumer Brands & D2C",
  "AI Infrastructure",
  "B2B SaaS",
  "Commerce & Supply Chain",
  "Developer Tools",
];
