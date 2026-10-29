export interface Insight {
  id: string;
  category: InsightCategory;
  title: string;
  excerpt: string;
  date: string; // ISO
  readTime: string;
  url: string; // LinkedIn article / post URL
}

export type InsightCategory =
  | "SEO"
  | "GEO"
  | "AEO"
  | "UX"
  | "AI"
  | "Digital Transformation"
  | "Digital Marketing";

export const insightCategories: InsightCategory[] = [
  "SEO",
  "GEO",
  "AEO",
  "UX",
  "AI",
  "Digital Transformation",
  "Digital Marketing",
];

/*
  Add new LinkedIn articles/posts here — newest first.
  The Insights page and home preview pick them up automatically,
  including category filters and per-category cover art.
*/

export const insights: Insight[] = [
  {
    id: "ins-08",
    category: "GEO",
    title: "GEO Is the New SEO — Optimizing for Generative Search",
    excerpt:
      "Generative engines don't rank, they synthesize. What that changes about where visibility comes from — and the three levers that actually move brand citation in AI answers.",
    date: "2026-02-02",
    readTime: "8 min read",
    url: "https://www.linkedin.com/",
  },
  {
    id: "ins-07",
    category: "GEO",
    title: "Entity Clarity: Making Your Brand Machine-Readable",
    excerpt:
      "Before an AI can recommend you, it has to understand who you are. A practical framework for consolidating the entity signals that make a brand unambiguous to machines.",
    date: "2026-01-28",
    readTime: "7 min read",
    url: "https://www.linkedin.com/",
  },
  {
    id: "ins-06",
    category: "AEO",
    title: "Answer Engine Optimization: Getting Cited, Not Just Ranked",
    excerpt:
      "Featured snippets, AI overviews and voice answers all draw from the same pool: quotable, structured content. How to build the answer layer engines can lift with confidence.",
    date: "2026-01-18",
    readTime: "9 min read",
    url: "https://www.linkedin.com/",
  },
  {
    id: "ins-05",
    category: "AI",
    title: "How AI Assistants Decide Which Brands to Recommend",
    excerpt:
      "Credibility, consensus, quotability. Inside the heuristics that decide which brands surface in a generated answer — and how to influence each one ethically.",
    date: "2026-01-05",
    readTime: "10 min read",
    url: "https://www.linkedin.com/",
  },
  {
    id: "ins-04",
    category: "Digital Marketing",
    title: "LinkedIn Is a Search Engine. Most Brands Don't Optimize It.",
    excerpt:
      "Professionals ask the feed like they used to ask Google. What it takes to make your company page and posts discoverable in both human feeds and AI answers.",
    date: "2025-12-16",
    readTime: "6 min read",
    url: "https://www.linkedin.com/",
  },
  {
    id: "ins-03",
    category: "SEO",
    title: "Technical SEO in the AI Era: What Still Moves Rankings",
    excerpt:
      "Not everything changed. Crawling, indexing, structured data and site architecture remain the plumbing of every visibility channel — including the AI ones. What to keep, fix or retire.",
    date: "2025-12-10",
    readTime: "8 min read",
    url: "https://www.linkedin.com/",
  },
  {
    id: "ins-02",
    category: "UX",
    title: "UX Signals Are Replacing Clicks — What That Means for Visibility",
    excerpt:
      "As more answers happen without a click, behavioral quality signals gain weight. Why fast, accessible, low-friction experiences are a ranking asset — not just a conversion one.",
    date: "2025-11-21",
    readTime: "7 min read",
    url: "https://www.linkedin.com/",
  },
  {
    id: "ins-01",
    category: "Digital Transformation",
    title: "Transformation Starts With Discovery, Not Tools",
    excerpt:
      "Most digital transformation programs buy tools before they understand the journey. Twenty-five years of shipping changes, distilled into the discovery sequence that actually works.",
    date: "2025-11-04",
    readTime: "6 min read",
    url: "https://www.linkedin.com/",
  },
];
