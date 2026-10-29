export type BlogCategory =
  | "SEO"
  | "GEO"
  | "AEO"
  | "UX"
  | "AI"
  | "Content"
  | "Digital Marketing";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string; // ISO
  readTime: string;
  author: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  tags: string[];
}

export const blogCategories: BlogCategory[] = [
  "SEO",
  "GEO",
  "AEO",
  "UX",
  "AI",
  "Content",
  "Digital Marketing",
];

const cdn = (id: number, w = 880, h = 520) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}&q=74`;

/*
  Add new blog articles here — newest first.
  The Blog page picks them up automatically, including category filters,
  search, the featured hero card and the "load more" behaviour.
*/

export const blogPosts: BlogPost[] = [
  {
    id: "bp-09",
    slug: "geo-playbook-2026",
    title: "The GEO Playbook: How to Get Your Brand Cited by AI in 2026",
    excerpt:
      "Generative engines don't rank pages — they assemble answers. This playbook breaks down the three levers that actually move brand citation rates: entity clarity, quotable claims and third-party consensus.",
    category: "GEO",
    date: "2026-02-10",
    readTime: "11 min read",
    author: "Daniel Hart",
    image: cdn(16094043),
    imageAlt:
      "A professional working on a laptop running a generative AI assistant, illustrating AI-powered brand discovery.",
    featured: true,
    tags: ["Generative Search", "Entity SEO", "AI Citations"],
  },
  {
    id: "bp-08",
    slug: "technical-seo-checklist",
    title: "The Technical SEO Checklist That Still Matters in the AI Era",
    excerpt:
      "Crawling, indexing, structured data and Core Web Vitals remain the plumbing of every visibility channel — including the AI ones. Here's what to keep, what to fix and what to finally retire.",
    category: "SEO",
    date: "2026-02-03",
    readTime: "9 min read",
    author: "Daniel Hart",
    image: cdn(6986455),
    imageAlt: "A laptop displaying a live search engine results page during a technical SEO review.",
    tags: ["Technical SEO", "Core Web Vitals", "Schema"],
  },
  {
    id: "bp-07",
    slug: "answer-engine-optimization-guide",
    title: "Answer Engine Optimization: Winning the Zero-Click Result",
    excerpt:
      "Featured snippets, AI overviews and voice answers all draw from the same well: concise, structured, quotable content. A practical framework for building your answer layer.",
    category: "AEO",
    date: "2026-01-24",
    readTime: "8 min read",
    author: "Daniel Hart",
    image: cdn(4790255),
    imageAlt: "A smart speaker with an illuminated display, representing voice and answer engines.",
    tags: ["Featured Snippets", "Voice Search", "FAQ Schema"],
  },
  {
    id: "bp-06",
    slug: "ux-signals-ranking-factor",
    title: "Why UX Signals Are Quietly Becoming Your Biggest Ranking Asset",
    excerpt:
      "As more journeys end without a click, behavioural quality signals carry more weight. Speed, clarity and accessibility aren't just conversion levers — they're visibility levers.",
    category: "UX",
    date: "2026-01-15",
    readTime: "7 min read",
    author: "Daniel Hart",
    image: cdn(11813187),
    imageAlt: "A designer sketching a website landing page wireframe on a tablet with a stylus.",
    tags: ["Core Web Vitals", "Accessibility", "Conversion"],
  },
  {
    id: "bp-05",
    slug: "content-that-ai-quotes",
    title: "Writing Content That AI Actually Wants to Quote",
    excerpt:
      "Most content is written to be skimmed by humans. AI-citable content is written to be lifted verbatim. The structural differences are smaller — and more powerful — than you think.",
    category: "Content",
    date: "2026-01-08",
    readTime: "10 min read",
    author: "Daniel Hart",
    image: cdn(15635240),
    imageAlt: "An open planner with 'Content Strategy' handwritten on the page beside a keyboard.",
    tags: ["Editorial Systems", "Thought Leadership", "AI Content"],
  },
  {
    id: "bp-04",
    slug: "how-ai-picks-brands",
    title: "How AI Assistants Decide Which Brands to Recommend",
    excerpt:
      "Credibility, consensus and quotability. Inside the heuristics that determine which companies surface in a generated answer — and how to influence each one ethically.",
    category: "AI",
    date: "2025-12-20",
    readTime: "12 min read",
    author: "Daniel Hart",
    image: cdn(17489160),
    imageAlt: "Illuminated server racks in a data centre, representing AI model infrastructure.",
    tags: ["LLMs", "Brand Authority", "Trust Signals"],
  },
  {
    id: "bp-03",
    slug: "linkedin-as-search-engine",
    title: "LinkedIn Is a Search Engine — Most Brands Don't Optimize It",
    excerpt:
      "Professionals now query the feed the way they used to query Google. What it takes to make your company page and posts discoverable by humans and AI alike.",
    category: "Digital Marketing",
    date: "2025-12-11",
    readTime: "6 min read",
    author: "Daniel Hart",
    image: cdn(7693686),
    imageAlt: "A marketing team reviewing analytics dashboards on tablets during a strategy meeting.",
    tags: ["LinkedIn", "Social SEO", "B2B"],
  },
  {
    id: "bp-02",
    slug: "ecommerce-ai-shopping",
    title: "E-Commerce in the Age of AI Shopping Assistants",
    excerpt:
      "Shoppers increasingly ask an assistant instead of browsing a category page. What that means for product content, comparison pages and the future of the catalogue.",
    category: "GEO",
    date: "2025-11-28",
    readTime: "9 min read",
    author: "Daniel Hart",
    image: cdn(3861957),
    imageAlt: "A laptop displaying e-commerce performance analytics in a modern office.",
    tags: ["E-commerce", "Product Content", "AI Shopping"],
  },
  {
    id: "bp-01",
    slug: "digital-transformation-discovery",
    title: "Transformation Starts With Discovery, Not Tools",
    excerpt:
      "Most transformation programmes buy software before understanding the journey. Twenty-five years of shipping change, distilled into a discovery sequence that works.",
    category: "Digital Marketing",
    date: "2025-11-14",
    readTime: "7 min read",
    author: "Daniel Hart",
    image: cdn(7964413),
    imageAlt: "Business professionals collaborating in a modern conference room.",
    tags: ["Transformation", "Strategy", "Operating Model"],
  },
];
