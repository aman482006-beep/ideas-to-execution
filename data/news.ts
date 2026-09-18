export interface NewsItem {
  id: string;
  date: string;
  isoDate: string;
  category: 'News' | 'Insights';
  title: string;
  source: string;
  href?: string;
  featured?: boolean;
  summary?: string;
  readTime?: string;
}

export const newsItems: NewsItem[] = [
  {
    id: "news-m2p-12x-finextra",
    date: "Oct 18, 2024",
    isoDate: "2024-10-18",
    category: "News",
    title: "8i Ventures earns 12X return on full exit from M2P Fintech",
    source: "finextra.com",
    href: "https://www.finextra.com",
    featured: true,
    summary: "Early-stage conviction in India's API infrastructure leader yields a benchmark 12X return, demonstrating the compounding power of day-zero venture partnership.",
    readTime: "3 min read"
  },
  {
    id: "news-origami-2nd-edition-entrepreneur",
    date: "Nov 22, 2024",
    isoDate: "2024-11-22",
    category: "News",
    title: "8i Ventures Launches 2nd Edition of Pre-Seed Program Origami to Fuel Startup Ecosystem",
    source: "entrepreneur.com",
    href: "https://www.entrepreneur.com",
    featured: false,
    summary: "The firm opens applications for Origami 2.0, reinforcing its swift 7-14-30 day turnaround for early-stage founders seeking clean capital without delay.",
    readTime: "4 min read"
  },
  {
    id: "news-origami-preseed-siliconindia",
    date: "Nov 22, 2024",
    isoDate: "2024-11-22",
    category: "News",
    title: "8i Ventures unveils Pre-seed Funding program for Early-stage Entrepreneurs",
    source: "siliconindia.com",
    href: "https://www.siliconindia.com",
    featured: false,
    summary: "A transparent, milestone-driven framework designed to replace bureaucratic fundraising cycles with speed and operator conviction.",
    readTime: "3 min read"
  },
  {
    id: "news-m2p-exit-vccircle",
    date: "Oct 18, 2024",
    isoDate: "2024-10-18",
    category: "News",
    title: "8i Ventures fully exits M2P Fintech with stellar returns",
    source: "vccircle.com",
    href: "https://www.vccircle.com",
    featured: false,
    summary: "A comprehensive look into 8i's multi-year journey backing M2P from early API inception to becoming a backbone for 300+ global banks.",
    readTime: "4 min read"
  },
  {
    id: "news-transbnk-series-a-zeebiz",
    date: "Aug 21, 2024",
    isoDate: "2024-08-21",
    category: "News",
    title: "Fintech startup TransBnk raises $4 million Series A funding led by 8i Ventures",
    source: "zeebiz.com",
    href: "https://www.zeebiz.com",
    featured: false,
    summary: "Leading the Series A round in TransBnk to modernise corporate transaction banking and escrow rails across South Asia and the Middle East.",
    readTime: "3 min read"
  },
  {
    id: "news-fund-ii-first-close",
    date: "Jan 2, 2024",
    isoDate: "2024-01-02",
    category: "News",
    title: "8i Ventures raises $25 m in first close for second fund",
    source: "livemint.com",
    href: "https://www.livemint.com",
    featured: false,
    summary: "Fund II builds on Fund I's top-decile track record, expanding backing for fintech and consumer innovators across India and Southeast Asia.",
    readTime: "5 min read"
  },
  {
    id: "insight-day-zero-conviction",
    date: "Jan 15, 2025",
    isoDate: "2025-01-15",
    category: "Insights",
    title: "Belief Before Proof: Why the Most Enduring Companies Are Built from Day Zero",
    source: "8i Editorial",
    featured: false,
    summary: "When market signals are noisy, the only truth that holds is founder clarity and customer obsession. Our philosophy on early conviction.",
    readTime: "6 min read"
  },
  {
    id: "insight-fintech-infrastructure",
    date: "Dec 10, 2024",
    isoDate: "2024-12-10",
    category: "Insights",
    title: "Unbundling India's Banking Stack: From Transaction Rails to Autonomous Finance",
    source: "8i Research",
    featured: false,
    summary: "How embedded infrastructure, UPI growth, and real-time reconciliation are opening new multi-billion dollar opportunities for software operators.",
    readTime: "7 min read"
  }
];
