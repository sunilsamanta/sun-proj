export interface Service {
  slug: string;
  name: string;
  fullName: string;
  icon: string;
  short: string;
  tagline: string;
  description: string;
  focus: string[];
  benefits: string[];
  deliverables: string[];
  /** Real photograph used as the page banner. */
  banner: string;
  bannerAlt: string;
}

const cdn = (id: number, w = 1600, h = 700) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}&q=76`;

const thumb = (id: number) => cdn(id, 880, 440);

/**
 * Every service below has its own detail page at /services/:slug.
 * Add a new service here and the card grid, navbar submenu,
 * footer links and detail route all pick it up automatically.
 */
export const services: Service[] = [
  {
    slug: "seo",
    name: "SEO",
    fullName: "Search Engine Optimization",
    icon: "bi-search",
    short: "Own the results that matter in Google and beyond — technically, editorially and strategically.",
    tagline: "Rank for what your buyers actually search",
    description:
      "The foundation of digital visibility. We combine technical rigour with editorial strategy so your site ranks, scales and stays resilient through algorithm updates — while feeding the structured data that AI engines now rely on.",
    focus: [
      "Technical SEO",
      "On-page SEO",
      "Keyword strategy",
      "Content optimization",
      "Search visibility",
      "Organic growth",
    ],
    benefits: ["Durable organic traffic", "Algorithm resilience", "Compounding keyword assets"],
    deliverables: [
      "Full technical & content audit",
      "Keyword and intent map",
      "Prioritised 90-day roadmap",
      "Monthly performance reporting",
    ],
    banner: cdn(6986455),
    bannerAlt:
      "A laptop on a desk displaying a live search engine results page, representing search engine optimization work.",
  },
  {
    slug: "geo",
    name: "GEO",
    fullName: "Generative Engine Optimization",
    icon: "bi-robot",
    short: "Get your brand chosen and cited by generative engines like ChatGPT, Perplexity and Gemini.",
    tagline: "Become the source AI engines cite",
    description:
      "Generative engines don't rank — they synthesize. GEO makes your brand the source they trust: clear entities, quotable claims, third-party validation and content structured for machine understanding rather than human skimming.",
    focus: [
      "AI search visibility",
      "Generative search",
      "Brand discoverability",
      "Entity optimization",
      "AI-readable content",
      "Digital authority",
    ],
    benefits: ["AI answer citations", "Entity-level brand clarity", "Future-proof discoverability"],
    deliverables: [
      "AI citation baseline across 4 engines",
      "Entity & knowledge-graph cleanup",
      "Quotable content architecture",
      "Citation tracking dashboard",
    ],
    banner: cdn(16094043),
    bannerAlt:
      "A professional working on a laptop running a generative AI chat assistant, representing generative engine optimization.",
  },
  {
    slug: "aeo",
    name: "AEO",
    fullName: "Answer Engine Optimization",
    icon: "bi-chat-square-text",
    short: "Structured, answer-first content that wins featured snippets, AI answers and voice search.",
    tagline: "Own the answer, not just the link",
    description:
      "Search increasingly answers before it links. AEO positions your content directly in the answer layer: question-led pages, concise quotable statements, structured markup and FAQ architectures that engines can lift with confidence.",
    focus: [
      "Question-based content",
      "Featured snippets",
      "FAQs",
      "Structured content",
      "Voice search",
      "Answer-focused optimization",
    ],
    benefits: ["Featured snippet wins", "Zero-click authority", "Voice & assistant reach"],
    deliverables: [
      "Question-gap analysis",
      "FAQ & schema implementation",
      "Snippet-targeted page rewrites",
      "Voice-search readiness review",
    ],
    banner: cdn(4790255),
    bannerAlt:
      "A smart speaker with an illuminated display on a desk, representing answer engines and voice search.",
  },
  {
    slug: "wordpress-design",
    name: "WordPress Design",
    fullName: "WordPress Design & Development",
    icon: "bi-wordpress",
    short: "Fast, secure, easy-to-manage WordPress builds that rank well and scale with your content.",
    tagline: "WordPress that earns its keep",
    description:
      "WordPress powers the web for a reason — when it's built properly. We design and engineer WordPress sites that load fast, stay secure, are genuinely simple for your team to update, and are structured for search and AI visibility from day one.",
    focus: [
      "Custom theme design",
      "Block / Gutenberg builds",
      "Speed & Core Web Vitals",
      "Security hardening",
      "Plugin architecture",
      "Editor training",
    ],
    benefits: ["Easy in-house editing", "Fast, stable performance", "SEO-ready structure"],
    deliverables: [
      "Design system & templates",
      "Custom theme build",
      "Migration & QA testing",
      "Editor walkthrough & docs",
    ],
    banner: thumb(34212988),
    bannerAlt:
      "A modern workspace with a website layout sketched on a tablet and code on a monitor, representing WordPress design and development.",
  },
  {
    slug: "web-design-spa",
    name: "Web Design/SPA",
    fullName: "Web Design & Single-Page Applications",
    icon: "bi-window-stack",
    short: "Modern, app-like web experiences in React — fast, accessible and built to convert.",
    tagline: "Web experiences that feel instant",
    description:
      "Single-page applications deliver the immediacy users now expect. We design and build React-based web experiences with clean information architecture, honest performance budgets and accessibility baked in — not bolted on afterwards.",
    focus: [
      "React / SPA architecture",
      "Information architecture",
      "Design systems",
      "Performance budgets",
      "Accessibility (WCAG)",
      "Progressive enhancement",
    ],
    benefits: ["App-like responsiveness", "Maintainable component library", "Accessible by default"],
    deliverables: [
      "UX flows & wireframes",
      "Component-based front-end build",
      "Performance & a11y audit",
      "Handover documentation",
    ],
    banner: thumb(6893334),
    bannerAlt:
      "A minimalist workspace with a laptop and notebooks on a white desk, representing modern web design work.",
  },
  {
    slug: "mobile-app-development",
    name: "Mobile Application Development",
    fullName: "Mobile Application Development",
    icon: "bi-phone",
    short: "Native-quality iOS and Android apps — from first prototype to store release and iteration.",
    tagline: "In people's pockets, for the right reasons",
    description:
      "A mobile app is a product commitment, not a checkbox. We help you validate the concept, design the core loops, build a release-ready application and put the analytics in place to keep improving it after launch.",
    focus: [
      "Product discovery",
      "iOS & Android development",
      "Cross-platform builds",
      "App store optimization",
      "Offline-first design",
      "Release & crash monitoring",
    ],
    benefits: ["Higher retention", "Store-ready quality", "Measured post-launch growth"],
    deliverables: [
      "Clickable prototype",
      "Production app build",
      "Store listing & ASO",
      "Analytics & crash reporting",
    ],
    banner: thumb(32021560),
    bannerAlt:
      "A smartphone displaying a modern mobile app interface, representing mobile application development.",
  },
  {
    slug: "user-experience-design",
    name: "User Experience Design (UED)",
    fullName: "User Experience & Conversion Design",
    icon: "bi-hand-index-thumb",
    short: "Fast, accessible, intuitive experiences that convert attention into trust — and trust into revenue.",
    tagline: "Design around how people actually behave",
    description:
      "Visibility is wasted if the experience disappoints. We restructure information architecture, simplify journeys and remove friction across devices — with accessibility as a default, not an afterthought. Better UX also strengthens the behavioural signals engines watch.",
    focus: [
      "User experience",
      "Conversion optimization",
      "Information architecture",
      "Responsive design",
      "Accessibility",
      "Usability testing",
    ],
    benefits: ["Higher conversion rates", "Lower bounce & abandonment", "WCAG-aligned experiences"],
    deliverables: [
      "UX & conversion audit",
      "Journey & IA redesign",
      "High-fidelity prototypes",
      "Usability test findings",
    ],
    banner: thumb(11813187),
    bannerAlt:
      "A designer sketching a website landing page layout on a tablet with a stylus, representing user experience design.",
  },
  {
    slug: "interaction-design",
    name: "Interaction Design",
    fullName: "Interaction & Micro-interaction Design",
    icon: "bi-cursor-fill",
    short: "Purposeful motion, feedback and state design that makes interfaces feel obvious and alive.",
    tagline: "Every tap answers back",
    description:
      "Interaction design is the difference between an interface that works and one that feels effortless. We define states, transitions, feedback and motion so users always know what just happened, what changed and what to do next — without a tutorial.",
    focus: [
      "Micro-interactions",
      "Motion & transition design",
      "Component states",
      "Gesture patterns",
      "Feedback & empty states",
      "Prototype validation",
    ],
    benefits: ["Fewer user errors", "Clearer task completion", "A product that feels premium"],
    deliverables: [
      "Interaction specification",
      "Motion & state library",
      "Interactive prototypes",
      "Developer handover notes",
    ],
    banner: thumb(4238491),
    bannerAlt:
      "A designer sketching interface flows on a tablet in a minimal studio, representing interaction design.",
  },
  {
    slug: "it-consulting",
    name: "IT Consulting",
    fullName: "IT & Digital Infrastructure Consulting",
    icon: "bi-hdd-network",
    short: "Practical architecture, hosting and platform decisions that keep your digital presence fast and safe.",
    tagline: "Technology decisions, de-risked",
    description:
      "The wrong hosting, stack or integration choice quietly taxes every marketing pound you spend. We give independent, vendor-neutral advice on architecture, performance, security and scaling — so your platform supports growth instead of fighting it.",
    focus: [
      "Architecture review",
      "Hosting & CDN strategy",
      "Performance engineering",
      "Security posture",
      "Integrations & APIs",
      "Cloud cost optimization",
    ],
    benefits: ["Lower infrastructure cost", "Fewer outages", "A platform ready to scale"],
    deliverables: [
      "Technical health check",
      "Architecture recommendations",
      "Security & backup plan",
      "Cost-reduction roadmap",
    ],
    banner: thumb(17323801),
    bannerAlt:
      "A modern server room with network equipment under blue illumination, representing IT and infrastructure consulting.",
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    fullName: "Integrated Digital Marketing",
    icon: "bi-megaphone",
    short: "Integrated campaigns that turn visibility into pipeline — paid, social and lifecycle working as one.",
    tagline: "Every channel pointing the same way",
    description:
      "Organic visibility compounds; paid accelerates. We integrate campaigns, social and conversion work so every channel reinforces the same message — and every unit of spend is measured against pipeline, not impressions.",
    focus: [
      "Digital campaigns",
      "Social media",
      "Content marketing",
      "Paid campaigns",
      "Lead generation",
      "Conversion optimization",
    ],
    benefits: ["Measurable pipeline impact", "Channel synergy", "Full-funnel accountability"],
    deliverables: [
      "Channel & funnel strategy",
      "Campaign calendar",
      "Landing page optimization",
      "Attribution reporting",
    ],
    banner: thumb(3183153),
    bannerAlt:
      "Colleagues analysing performance charts during a marketing planning meeting with laptops open.",
  },
  {
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    fullName: "Social Media Marketing",
    icon: "bi-share-fill",
    short: "Consistent, platform-native content systems that build audience and feed search visibility.",
    tagline: "Show up where your buyers scroll",
    description:
      "Social is now a discovery layer in its own right — and a strong signal source for AI engines. We build a repeatable content system: clear positioning, platform-native formats and a cadence your team can actually sustain.",
    focus: [
      "Content pillars",
      "LinkedIn strategy",
      "Short-form video",
      "Community management",
      "Social SEO",
      "Performance reporting",
    ],
    benefits: ["Consistent brand presence", "Owned audience growth", "Signals that support search"],
    deliverables: [
      "Platform strategy",
      "30-day content calendar",
      "Template & asset kit",
      "Monthly performance review",
    ],
    banner: thumb(8555677),
    bannerAlt:
      "A positive team presenting social and market analytics on screen during a business meeting.",
  },
  {
    slug: "brand-marketing",
    name: "Brand Marketing",
    fullName: "Brand Strategy & Marketing",
    icon: "bi-award",
    short: "Positioning, messaging and identity systems that make your brand the obvious choice.",
    tagline: "Be the brand they name first",
    description:
      "Engines and buyers both look for the brand that is easiest to describe and hardest to confuse. We sharpen positioning, messaging and visual identity so every touchpoint — site, social, sales deck — tells the same credible story.",
    focus: [
      "Positioning & messaging",
      "Brand architecture",
      "Visual identity",
      "Brand guidelines",
      "Category narrative",
      "Reputation signals",
    ],
    benefits: ["Clearer differentiation", "Higher perceived value", "Consistency across channels"],
    deliverables: [
      "Positioning workshop",
      "Messaging framework",
      "Visual identity refresh",
      "Brand guidelines document",
    ],
    banner: thumb(8353799),
    bannerAlt:
      "Colleagues discussing financial and brand charts during a corporate meeting in a modern office.",
  },
  {
    slug: "content-strategy",
    name: "Content Strategy",
    fullName: "Content & Thought Leadership",
    icon: "bi-journal-text",
    short: "Editorial systems that build authority for humans and machines alike — from website to LinkedIn.",
    tagline: "Content engines can quote",
    description:
      "Content is the raw material of every visibility channel: search, AI answers, social and sales. We design editorial systems that turn expertise into citable, evergreen assets — optimised for readers, engines and AI assistants in one pass.",
    focus: [
      "Content planning",
      "Thought leadership",
      "LinkedIn content",
      "Website content",
      "SEO content",
      "AI-search-friendly content",
    ],
    benefits: ["Citable brand expertise", "Consistent authority", "One content, many surfaces"],
    deliverables: [
      "Topic & keyword clusters",
      "Editorial calendar",
      "Content templates",
      "Refresh & pruning plan",
    ],
    banner: thumb(15635240),
    bannerAlt:
      "An open planner with Content Strategy handwritten on the page beside a keyboard, representing content planning.",
  },
];

export const getServiceBySlug = (slug?: string) =>
  services.find((s) => s.slug === slug);
