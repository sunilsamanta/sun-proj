export interface NavLinkItem {
  label: string;
  to: string;
}

export const site = {
  brand: "Aum Web Solutions",
  brandAcronym: "Aum",
  brandExpansion: "Web Solutions",
  tagline: "SEO • GEO • AEO • UX • Digital Transformation",
  description:
    "Aum Web Solutions — 25+ years of digital experience. Digital visibility consulting across SEO, GEO, AEO, UX optimization, content strategy, digital marketing and digital transformation.",
  email: "hello@aumwebsolutions.com",
  linkedin: "https://www.linkedin.com/",
  linkedinLabel: "LinkedIn",
  base: "https://www.aumwebsolutions.com",
  disclaimer:
    "Aum Web Solutions is an independent digital consulting and web solutions practice specializing in SEO, GEO, AEO, UX, content strategy and digital transformation. All third-party trademarks referenced remain the property of their respective owners.",
  consultant: {
    name: "Daniel Hart",
    initials: "DH",
    role: "Founder & Digital Visibility Consultant",
  },
};

export const nav: NavLinkItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Audit", to: "/audit" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Insights", to: "/insights" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

/** Items shown inside the Services dropdown submenu. */
export interface SubNavItem {
  label: string;
  to: string;
  icon: string;
}

export const servicesSubmenu: SubNavItem[] = [
  { label: "WordPress Design", to: "/services/wordpress-design", icon: "bi-wordpress" },
  { label: "IT Consulting", to: "/services/it-consulting", icon: "bi-hdd-network" },
  {
    label: "Mobile Application Development",
    to: "/services/mobile-app-development",
    icon: "bi-phone",
  },
  { label: "Interaction Design", to: "/services/interaction-design", icon: "bi-cursor-fill" },
  { label: "Brand Marketing", to: "/services/brand-marketing", icon: "bi-award" },
  { label: "Search Engine Optimization (SEO)", to: "/services/seo", icon: "bi-search" },
  { label: "Web Design/SPA", to: "/services/web-design-spa", icon: "bi-window-stack" },
  { label: "Social Media Marketing", to: "/services/social-media-marketing", icon: "bi-share-fill" },
  { label: "Digital Marketing", to: "/services/digital-marketing", icon: "bi-megaphone" },
  {
    label: "User Experience Design (UED)",
    to: "/services/user-experience-design",
    icon: "bi-hand-index-thumb",
  },
];

export const marqueeItems = [
  "SEO",
  "GEO",
  "AEO",
  "UX Optimization",
  "Content Strategy",
  "Digital Marketing",
  "Digital Transformation",
  "AI-Powered Search",
];

export interface WhyUsItem {
  icon: string;
  title: string;
  text: string;
}

export const whyUs: WhyUsItem[] = [
  {
    icon: "bi-award-fill",
    title: "25+ Years Experience",
    text: "Two and a half decades across search, UX, content and transformation — through every shift in how the web is found.",
  },
  {
    icon: "bi-search",
    title: "SEO • GEO • AEO Expertise",
    text: "Fluency across the full spectrum of visibility: classic rankings, generative engines and answer systems — not just one.",
  },
  {
    icon: "bi-signpost-2-fill",
    title: "Digital Strategy",
    text: "Visibility work anchored in business goals, markets and positioning — so effort compounds into revenue, not vanity metrics.",
  },
  {
    icon: "bi-hand-index-thumb",
    title: "User-Centric UX",
    text: "Experiences designed around real users — accessible, fast, intuitive — because machines reward what humans trust.",
  },
  {
    icon: "bi-cpu-fill",
    title: "AI-Ready Digital Presence",
    text: "Structured entities, clear answers and machine-readable content that make your brand quotable by AI platforms.",
  },
];

export interface ProcessStep {
  num: string;
  title: string;
  text: string;
}

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Discover",
    text: "Stakeholder conversations, business goals and a full visibility baseline across search engines, AI platforms and your digital touchpoints.",
  },
  {
    num: "02",
    title: "Analyze",
    text: "Technical, content and AI-visibility audits — mapping how search engines and generative engines currently understand your brand.",
  },
  {
    num: "03",
    title: "Optimize",
    text: "SEO, GEO and AEO corrections, UX improvements, content architecture and structured data — prioritized by business impact.",
  },
  {
    num: "04",
    title: "Grow",
    text: "Measurement, iteration and compounding visibility across search, AI answers, social and referral channels. Quarter after quarter.",
  },
];

export interface EraItem {
  period: string;
  label: string;
  icon: string;
  text: string;
  now?: boolean;
}

export const eras: EraItem[] = [
  {
    period: "2004 — 2019",
    label: "Blue Links",
    icon: "bi-list-ol",
    text: "Ten links per page. Rank, click, convert. Search was a discipline with a clear scoreboard — and visibility meant owning page one.",
  },
  {
    period: "2019 — 2024",
    label: "Answer Boxes",
    icon: "bi-chat-square-dots",
    text: "Featured snippets, knowledge panels and zero-click results began answering directly on the results page — before you ever clicked.",
  },
  {
    period: "2025 — now",
    label: "AI Answers",
    icon: "bi-robot",
    text: "Generative engines synthesize answers and cite a handful of sources. Visibility now means being understood, chosen and cited.",
    now: true,
  },
];

export interface AnalyzeItem {
  icon: string;
  title: string;
  text: string;
}

export const analyzeItems: AnalyzeItem[] = [
  {
    icon: "bi-search",
    title: "SEO Foundation",
    text: "Indexing, crawl health, technical signals and current organic positioning.",
  },
  {
    icon: "bi-robot",
    title: "GEO Readiness",
    text: "How generative engines perceive, summarize and potentially cite your brand.",
  },
  {
    icon: "bi-chat-square-text",
    title: "AEO Opportunities",
    text: "Answer coverage, question gaps and featured-snippet potential.",
  },
  {
    icon: "bi-file-earmark-text",
    title: "Content Visibility",
    text: "Depth, structure and freshness of the content engines actually reference.",
  },
  {
    icon: "bi-quote",
    title: "Brand Mentions",
    text: "Where you're mentioned, misstated or missing across the wider web.",
  },
  {
    icon: "bi-badge-check",
    title: "Digital Authority",
    text: "Entity clarity, consistency and third-party validation of your brand.",
  },
  {
    icon: "bi-ui-checks",
    title: "UX & Website Experience",
    text: "Speed, accessibility, architecture and how visitors actually behave.",
  },
  {
    icon: "bi-cpu-fill",
    title: "AI Search Readiness",
    text: "Machine-readability: structured data, llms.txt signals and citable answers.",
  },
];

export interface AuditStep {
  num: string;
  title: string;
  text: string;
}

export const auditSteps: AuditStep[] = [
  {
    num: "01",
    title: "Submit Website",
    text: "Tell us who you are and where you operate. Two minutes, no preparation needed.",
  },
  {
    num: "02",
    title: "Analyze Visibility",
    text: "We map your footprint across search engines, AI answer platforms and the wider web.",
  },
  {
    num: "03",
    title: "Identify Opportunities",
    text: "Gaps, quick wins and strategic plays — ranked by impact and effort.",
  },
  {
    num: "04",
    title: "Receive Insights",
    text: "A clear, prioritized report with a 30-60-90 day path. No obligation, no pressure.",
  },
];

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: "What is Aum Web Solutions?",
    a: "Aum Web Solutions is an independent digital consulting and web solutions practice specializing in modern search visibility: SEO, GEO (Generative Engine Optimization), AEO (Answer Engine Optimization), UX, and digital transformation — backed by 25+ years of digital experience.",
  },
  {
    q: "What exactly is an AI visibility audit?",
    a: "A structured analysis of how your business appears across modern discovery surfaces: classic search engine results, featured snippets, and AI-powered answer platforms. We assess how well your brand is understood, mentioned and cited — and where it falls short.",
  },
  {
    q: "How is GEO different from traditional SEO?",
    a: "SEO optimizes for rankings in link-based results. GEO — Generative Engine Optimization — optimizes for how AI systems synthesize, compare and cite brands when generating answers. It focuses on entity clarity, quotable content and digital authority across sources.",
  },
  {
    q: "What will I actually receive?",
    a: "A concise, prioritized report: a visibility snapshot across search and AI platforms, the gaps that matter most, quick wins you can act on immediately, and a recommended 30-60-90 day roadmap. You keep it regardless of anything else.",
  },
  {
    q: "Is the audit really free? What's the catch?",
    a: "Yes, genuinely free, with no obligation. It's how we work: we invest in understanding your situation first. If we're a fit, a conversation naturally follows — if not, you still walk away with a clearer picture of your digital visibility.",
  },
  {
    q: "How long does it take, and what do you need from me?",
    a: "Most audits are delivered within 3–5 business days. We need your website URL, your industry and main product or service. A short 15-minute intro call helps us calibrate — but it's entirely optional.",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "For the first time, our brand is something both people and AI answers can actually understand. Visibility followed — and the pipeline felt it within a quarter.",
    name: "Head of Marketing",
    role: "B2B SaaS (anonymized)",
  },
  {
    quote:
      "The audit alone was worth more than a year of guesswork. Priorities, gaps, roadmap — laid out in a way our whole leadership team could act on.",
    name: "Founder",
    role: "E-commerce (anonymized)",
  },
  {
    quote:
      "Twenty-five years of experience isn't a badge here — it's why nothing surprises us. Every recommendation was grounded, practical and measured.",
    name: "COO",
    role: "Professional Services (anonymized)",
  },
];
