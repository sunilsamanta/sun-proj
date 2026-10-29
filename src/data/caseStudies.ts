export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  strategy: string;
  solution: string;
  before: string[];
  after: string[];
  results: { value: string; label: string }[];
  preview: { before: string; strategy: string; after: string };
  /* Attributes for the 3D perspective slider (inspired by himanshuaswal.in) */
  sliderBrand: string;
  sliderTags: string[];
  sliderQuote: string;
  sliderYear: string;
  sliderSubtitle: string;
  sliderAccentColor: string;
  sliderGradient: string;
  sliderMockupType: "ai-search" | "ecommerce-dashboard" | "authority-network" | "fintech-matrix";
  sliderImage: string;
  sliderImageAlt: string;
}

const shot = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=560&q=76`;

/*
  NOTE: The engagements below use anonymized, illustrative placeholder data.
  Replace each entry with client-approved results before publishing.
*/

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-1",
    slug: "b2b-saas-ai-citations",
    title: "From buried to recommended",
    client: "B2B SaaS platform (anonymized)",
    industry: "B2B SaaS",
    challenge:
      "A well-built product that the new search era simply couldn't find. The brand was absent from AI-generated answers, ranked beyond page two for core commercial terms, and its entity presence across the web was fragmented across old domains, directories and social profiles.",
    strategy:
      "A full visibility program in three layers: entity consolidation to give engines one unambiguous version of the company, GEO-led content architecture built around the questions AI assistants actually ask, and AEO pages engineered to be quotable in answers.",
    solution:
      "Structured data across site and profiles, a citable product-category hub, 40+ question-led pages, third-party presence on the directories and reviews engines cross-reference, and a measurement protocol tracking AI answer citations monthly across four platforms.",
    before: [
      "Not cited in any of 40 tested AI prompts",
      "Ranking beyond top 30 for core commercial terms",
      "Brand entity fragmented across 6+ conflicting sources",
    ],
    after: [
      "Cited in the top answer for 22 of 40 tracked prompts",
      "Top-10 rankings for 78% of tracked terms",
      "Single, consistent entity profile across search, LLMs and directories",
    ],
    results: [
      { value: "22/40", label: "AI prompts with brand citation" },
      { value: "+38%", label: "Organic visibility index (illustrative)" },
      { value: "94%", label: "Brand SERP coverage" },
    ],
    preview: {
      before: "Invisible in AI answers, top-30+ rankings",
      strategy: "Entity clarity + GEO content + AEO question pages",
      after: "Cited in 22 of 40 tracked AI answers",
    },
    sliderBrand: "CLOUDSCALE AI",
    sliderTags: ["B2B SaaS", "GEO Citations", "Entity Setup"],
    sliderQuote: '"Invisible in AI answers to #1 cited source in 22 of 40 tracked prompts."',
    sliderYear: "2026",
    sliderSubtitle: "AI Citation Engine — CloudScale SaaS",
    sliderAccentColor: "#056492",
    sliderGradient: "linear-gradient(135deg, #EAF2F8 0%, #DCEBF3 50%, #F6EDD8 100%)",
    sliderMockupType: "ai-search",
    sliderImage: shot(3184292),
    sliderImageAlt: "A dummy SaaS analytics dashboard on a laptop screen, representing the CloudScale AI citation engine project.",
  },
  {
    id: "cs-2",
    slug: "ecommerce-answer-layer",
    title: "An e-commerce site that answers",
    client: "E-commerce / D2C brand (anonymized)",
    industry: "E-commerce",
    challenge:
      "Product discovery was fragmenting: shoppers increasingly asked AI assistants for recommendations instead of browsing category pages. The site had no answer layer, thin product content, and mobile UX friction that burned the traffic it did earn.",
    strategy:
      "Reposition the catalog as an authority on the category itself: an AEO-first content layer on top of every product cluster, comparison and gifting pages written to be quoted, and a UX program attacking the top friction points end to end.",
    solution:
      "120 product clusters rewritten with structured FAQs and schema, comparison hubs mapping buyer questions to products, mobile speed and navigation rebuilt, and social proof consolidated into citable formats.",
    before: [
      "Zero presence in AI shopping recommendations",
      "Thin, spec-only product content",
      "High mobile drop-off at checkout",
    ],
    after: [
      "Brand surfaced in category recommendation answers",
      "FAQ and comparison layer across 120 product clusters",
      "Streamlined mobile journey with reduced abandonment",
    ],
    results: [
      { value: "120", label: "Product clusters with answer layer" },
      { value: "+21%", label: "Conversion rate (illustrative)" },
      { value: "−18%", label: "Bounce rate on key funnels (illustrative)" },
    ],
    preview: {
      before: "No AI presence, thin content, mobile friction",
      strategy: "AEO-first product content + UX rebuild",
      after: "Recommended in category AI answers",
    },
    sliderBrand: "OMNICART D2C",
    sliderTags: ["E-Commerce", "AEO Architecture", "Mobile UX"],
    sliderQuote: '"Shoppers ask AI for answers — we built the catalog that gets recommended."',
    sliderYear: "2026",
    sliderSubtitle: "Answer Layer Rebuild — OmniCart D2C",
    sliderAccentColor: "#0787AE",
    sliderGradient: "linear-gradient(135deg, #e0f2fe 0%, #FBF4E3 50%, #ede9fe 100%)",
    sliderMockupType: "ecommerce-dashboard",
    sliderImage: shot(230544),
    sliderImageAlt: "A dummy e-commerce product page shown on a laptop, representing the OmniCart D2C answer-layer rebuild project.",
  },
  {
    id: "cs-3",
    slug: "professional-services-authority",
    title: "Local authority, national AI reach",
    client: "Professional services firm (anonymized)",
    industry: "Professional Services",
    challenge:
      "A trusted local firm with strong word of mouth — but no digital footprint AI assistants could verify. For national-level queries, the firm was effectively invisible, and competitors with weaker credentials were being recommended instead.",
    strategy:
      "Build the digital evidence trail that generative engines need to recommend with confidence: consolidated entity and credentials, a national thought-leadership content program on LinkedIn and the site, and structured expertise pages for each practice area.",
    solution:
      "Entity and credentials consolidation, 30+ expertise and case pages with structured data, a weekly LinkedIn thought-leadership cadence feeding citable expertise, and presence on the professional directories engines cross-reference.",
    before: [
      "Recommended against by AI for national queries",
      "Credentials scattered, entity signals weak",
      "No citable thought leadership anywhere",
    ],
    after: [
      "Credible, citable entity across search and AI",
      "Consistent expertise layer across 3 practice areas",
      "LinkedIn content regularly cited in professional answers",
    ],
    results: [
      { value: "3×", label: "Expertise coverage (illustrative)" },
      { value: "Weekly", label: "Citable thought-leadership cadence" },
      { value: "1", label: "Consolidated, verified entity" },
    ],
    preview: {
      before: "Invisible to AI for national queries",
      strategy: "Entity consolidation + thought leadership",
      after: "Credible, citable national authority",
    },
    sliderBrand: "APEX ADVISORY",
    sliderTags: ["Consulting", "Entity Authority", "Thought Leadership"],
    sliderQuote: '"From zero AI recognition to 3× national expertise coverage."',
    sliderYear: "2026",
    sliderSubtitle: "National Entity Authority — Apex Advisory",
    sliderAccentColor: "#077173",
    sliderGradient: "linear-gradient(135deg, #FBF4E3 0%, #e0e7ff 50%, #fef3c7 100%)",
    sliderMockupType: "authority-network",
    sliderImage: shot(3182812),
    sliderImageAlt: "A dummy consulting brand website on a tablet, representing the Apex Advisory national authority project.",
  },
  {
    id: "cs-4",
    slug: "fintech-visibility-matrix",
    title: "AI compliance & trusted search",
    client: "Fintech infrastructure platform (anonymized)",
    industry: "FinTech",
    challenge:
      "Complex financial queries triggered AI hallucinations and inaccurate vendor summaries. The client needed a machine-readable documentation and answer architecture so generative models cite their API security and compliance accurately.",
    strategy:
      "Deploy an entity-level knowledge graph, structured API documentation with machine-parsable schema, and direct question answering on regulatory compliance benchmarks.",
    solution:
      "Structured documentation architecture, machine-readable LLM endpoint indexing, verified compliance badges, and automated hallucination monitoring.",
    before: [
      "Incorrect security specifications generated by AI",
      "Missing from fintech comparison queries",
      "Zero structured answer snippets",
    ],
    after: [
      "100% accurate AI citations on compliance queries",
      "Top featured snippet for 34 financial API terms",
      "Verified entity status across all major AI engines",
    ],
    results: [
      { value: "100%", label: "Accuracy in AI citations" },
      { value: "34", label: "Featured snippets won" },
      { value: "+44%", label: "Qualified enterprise leads" },
    ],
    preview: {
      before: "AI hallucinations & zero snippet coverage",
      strategy: "Knowledge graph + schema API docs",
      after: "100% accurate AI citations & 34 snippets",
    },
    sliderBrand: "FINTECH MATRIX",
    sliderTags: ["FinTech", "AI Compliance", "Knowledge Graph"],
    sliderQuote: '"Tackling AI hallucinations by feeding generative engines verifiable truth."',
    sliderYear: "2026",
    sliderSubtitle: "Trusted AI Search Layer — FinTech Matrix",
    sliderAccentColor: "#E4AF49",
    sliderGradient: "linear-gradient(135deg, #F6EFDC 0%, #E4EFF6 50%, #E8F1F8 100%)",
    sliderMockupType: "fintech-matrix",
    sliderImage: shot(6801648),
    sliderImageAlt: "A dummy fintech dashboard with charts on a screen, representing the FinTech Matrix trusted AI search project.",
  },
];
