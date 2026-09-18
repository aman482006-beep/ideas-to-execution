export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: 'leadership' | 'investment' | 'operations';
  location: 'Mumbai' | 'Bangalore';
  bio?: string;
  shortBio?: string;
  quote?: string;
  focus?: string[];
  playbook?: string[];
  careerMilestones?: { year?: string; title: string; detail: string }[];
  signatureBets?: string[];
  education?: string[];
  linkedin?: string;
  featured: boolean;
  type: 'gp' | 'investment' | 'operations';
  photo?: string;
}

export const generalPartners: TeamMember[] = [
  {
    id: "vikram-chachra",
    name: "Vikram Chachra",
    role: "General Partner & CIO",
    department: "leadership",
    location: "Mumbai",
    featured: true,
    type: 'gp',
    photo: "https://framerusercontent.com/images/qZbEhvJg8OOBkZ8xtBy3Pt3blpg.png",
    quote: "We back founders at day zero when conventional consensus says it is impossible. If you are building foundational rails that strip friction from finance for 500 million Indians, we move in days, not quarters.",
    shortBio: "Founding Partner at 8i Ventures backing category-defining fintech, commerce rails, and AI platforms.",
    focus: ["Fintech Rails", "Payment Aggregation", "Embedded Credit", "Cross-Border Banking", "SaaS & AI"],
    playbook: [
      "Regulatory & RBI compliance strategy for fintech infrastructure",
      "Banking & NBFC co-lending institutional partnerships",
      "Early cap table hygiene and institutional governance",
      "Direct syndicate pipeline to global Tier-1 Series A/B leads"
    ],
    bio: "Vikram Chachra is Founding Partner at 8i Ventures, where he backs founders who strip friction out of finance for consumers and small businesses. A builder first, Vikram co-founded SNAZ Commerce in 1999—raising $18 million for one of the earliest mobile-payments plays—then led sales at More Magic Solutions and helped scale Snapfish to its $300 million cash exit to HP. Returning to India, he co-launched Eight Capital, the country’s first turnaround fund, before turning his focus to seed investing.\n\nSignature early bets include Slice, M2P, Signzy, Easebuzz, and CarWale. Vikram holds an MBA from NYU Stern, a PM&IR from XLRI, and a commerce degree from SRCC.",
    careerMilestones: [
      { year: "1999", title: "Co-founded SNAZ Commerce", detail: "Raised $18M for pioneering mobile payments infrastructure in Silicon Valley" },
      { year: "2005", title: "Scaled Snapfish to $300M Exit", detail: "Built global growth through HP cash acquisition" },
      { year: "2008", title: "Co-launched Eight Capital", detail: "Pioneered India’s first dedicated special situations turnaround fund" },
      { year: "2019", title: "Founded 8i Ventures", detail: "Institutional seed conviction fund backing Slice, M2P, Signzy, Easebuzz" }
    ],
    signatureBets: ["Slice", "M2P", "Signzy", "Easebuzz", "CarWale"],
    education: ["MBA, NYU Stern", "PM&IR, XLRI", "B.Com, SRCC"],
    linkedin: "https://www.linkedin.com/in/vikramchachra/"
  },
  {
    id: "vishwanath-v",
    name: "Vishwanath V",
    role: "General Partner",
    department: "leadership",
    location: "Bangalore",
    featured: true,
    type: 'gp',
    photo: "https://framerusercontent.com/images/ieSdD7VQaN9EO4B1ZzlBjSC0fg.png",
    quote: "Brand without unit economics is charity. Economics without brand is a commodity. We partner with founders who master both to build enduring consumer monopolies across India.",
    shortBio: "20 years of brand-building and scale-up muscle spanning Unilever P&L leadership to venture capital.",
    focus: ["Consumer Brands", "Specialty F&B", "Omnichannel D2C", "Retail Distribution", "Commerce Tech"],
    playbook: [
      "Nationwide retail & Modern Trade channel distribution architecture",
      "Brand narrative crafting and consumer customer lifetime value (LTV) maximization",
      "Unit economics auditing and supply-chain scale-up",
      "Executive talent recruitment for scale-stage marketing & operations"
    ],
    bio: "Vishy brings two decades of consumer-brand muscle to 8i Ventures. After earning his MBA from IIM Ahmedabad, he spent nine years at Hindustan Unilever, running the $300 million Popular Soaps portfolio with full P&L ownership across sales, marketing, and supply-chain.\n\nHe then shifted to high-growth digital commerce, first as Marketing Director at Urban Ladder (Sequoia-backed Series C) and later as Chief Marketing Officer at fashion marketplace Voonik, shepherding the company through its $100 million scale-up phase. Vishy now channels that operator depth into backing India’s next wave of consumer and commerce disruptors—helping founders translate sharp brand narratives into profitable, nationwide distribution.",
    careerMilestones: [
      { year: "2003", title: "Hindustan Unilever", detail: "9 years managing $300M P&L across sales, marketing & national supply-chain" },
      { year: "2013", title: "Marketing Director, Urban Ladder", detail: "Spearheaded brand scale & customer acquisition during Sequoia-backed Series C" },
      { year: "2016", title: "CMO, Voonik", detail: "Led nationwide user acquisition and marketing through $100M GMV phase" },
      { year: "2020", title: "Partner, 8i Ventures", detail: "Channels brand & distribution playbook to early-stage consumer founders" }
    ],
    signatureBets: ["Blue Tokai", "BobaBhai", "BBetter", "Naagin"],
    education: ["MBA, IIM Ahmedabad", "B.Tech, IIT Madras"],
    linkedin: "https://www.linkedin.com/in/vishwanathv/"
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: "rohan-sharma",
    name: "Rohan Sharma",
    role: "Principal",
    department: "investment",
    location: "Mumbai",
    featured: false,
    type: 'investment',
    photo: "https://framerusercontent.com/images/PZxtCxuh7ZRtFWNGhvT8xpa2goI.jpeg",
    shortBio: "Leads investment origination, thesis formulation, and cross-border financial infrastructure diligence.",
    focus: ["Fintech Infra", "B2B SaaS", "Origami Deal Pipeline", "Thesis Evaluation"],
    linkedin: "https://www.linkedin.com/in/rohan-sharma-8i/"
  },
  {
    id: "akshay-wadhwani",
    name: "Akshay Wadhwani",
    role: "Associate",
    department: "investment",
    location: "Mumbai",
    featured: false,
    type: 'investment',
    photo: "https://framerusercontent.com/images/4lmmGAqlYhQ1v6hLT2IagSPdfk.jpeg",
    shortBio: "Focuses on financial modeling, competitive moat analysis, and founder thesis stress-testing.",
    focus: ["Financial Modeling", "Due Diligence", "Embedded Lending", "Market Research"],
    linkedin: "https://www.linkedin.com/in/akshay-wadhwani/"
  },
  {
    id: "yug-shah",
    name: "Yug Shah",
    role: "Associate",
    department: "investment",
    location: "Mumbai",
    featured: false,
    type: 'investment',
    photo: "https://framerusercontent.com/images/iSxa29YkqdGaHQGDI0zN6N2j3k.webp",
    shortBio: "Drives research across consumer tech, early distribution models, and category-creator startups.",
    focus: ["Consumer Tech", "Early Velocity", "Origami Evaluation", "Founder Outreach"],
    linkedin: "https://www.linkedin.com/in/yug-shah/"
  },
  {
    id: "priya-vohera",
    name: "Priya Vohera",
    role: "Associate",
    department: "investment",
    location: "Bangalore",
    featured: false,
    type: 'investment',
    photo: "https://framerusercontent.com/images/efKZqKnqniZtoy37Mq4yGwUqK8.jpg",
    shortBio: "Evaluates seed deal flow, founder networks, and customer acquisition metrics across Bangalore & NCR.",
    focus: ["Seed Pipeline", "Portfolio Growth", "Ecosystem Outreach", "Founder Sourcing"],
    linkedin: "https://www.linkedin.com/in/priya-vohera/"
  },
  {
    id: "devansh-purswani",
    name: "Devansh Purswani",
    role: "Analyst",
    department: "investment",
    location: "Mumbai",
    featured: false,
    type: 'investment',
    photo: "https://framerusercontent.com/images/ZLPsWHAdN19pCrG2hQKcBHsPznY.jpg",
    shortBio: "Specializes in quantitative market research, competitive benchmarking, and industry telemetry.",
    focus: ["Market Telemetry", "Competitive Mapping", "Data Analytics", "Sector Deep Dives"],
    linkedin: "https://www.linkedin.com/in/devansh-purswani/"
  },
  {
    id: "muskaan-khilnani",
    name: "Muskaan Khilnani",
    role: "Assistant Manager",
    department: "operations",
    location: "Mumbai",
    featured: false,
    type: 'operations',
    photo: "https://framerusercontent.com/images/UaUWwRP1VJwn9WKpMIWJf7nuq4.png",
    shortBio: "Oversees LP relations, investor reporting infrastructure, and portfolio onboarding operational rails.",
    focus: ["Investor Relations", "Founder Onboarding", "Platform Operations", "Reporting Rails"],
    linkedin: "https://www.linkedin.com/in/muskaan-khilnani/"
  },
  {
    id: "divya-anchan",
    name: "Divya Anchan",
    role: "Assistant Manager",
    department: "operations",
    location: "Mumbai",
    featured: false,
    type: 'operations',
    photo: "https://framerusercontent.com/images/REFlOtrJ3R01GuamOpf32IsznU.jpg",
    shortBio: "Manages regulatory compliance filings, LP operational agreements, and governance workflows.",
    focus: ["Regulatory Filings", "SEBI Compliance", "LP Governance", "Fund Administration"],
    linkedin: "https://www.linkedin.com/in/divya-anchan/"
  },
  {
    id: "pallavi",
    name: "Pallavi",
    role: "Finance Consultant",
    department: "operations",
    location: "Mumbai",
    featured: false,
    type: 'operations',
    photo: "https://framerusercontent.com/images/5P0eN6qtSxQg8Lrk6rw2GR9e7eI.jpg",
    shortBio: "Directs fund accounting, institutional audit compliance, portfolio valuations, and statutory reporting.",
    focus: ["Fund Accounting", "Audit Compliance", "Portfolio Valuations", "Tax Governance"],
    linkedin: "https://www.linkedin.com/in/pallavi-finance/"
  }
];

export const teamPageIntro = {
  heading: "The Team Behind the Conviction",
  tagline: "OPERATORS TURNED INVESTORS",
  description: "Our success is powered by our dedicated team, whose operational depth, founder empathy, and rigorous conviction drive our achievements and portfolio velocity.",
  narrativeLead: "We are operators turned investors who’ve built businesses in India and Silicon Valley. We don’t run bureaucratic committees. We roll up our sleeves and sit in the trenches with founders from Day Zero."
};

export const operatorMetrics = [
  { value: "2", label: "General Partners", detail: "25+ years operating depth across US & India" },
  { value: "$300M+", label: "Operating P&L Managed", detail: "Real executive ownership before venture capital" },
  { value: "1st", label: "Institutional Cheque", detail: "Early conviction in Slice, M2P, Blue Tokai, Easebuzz" },
  { value: "30-Day", label: "Origami Speed SLA", detail: "From pitch submission to capital wired in bank" }
];
