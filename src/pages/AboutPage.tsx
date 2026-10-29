import PageMeta from "../components/PageMeta";
import PageHeroMedia from "../components/PageHeroMedia";
import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import TestimonialSection from "../components/TestimonialSection";
import CTASection from "../components/CTASection";
import { site } from "../data/site";
import { pageBanners } from "../data/pageBanners";

const TIMELINE = [
  {
    years: "2000 — 2006",
    era: "Foundations",
    icon: "bi-globe-americas",
    title: "Digital Strategy",
    text: "The early web, early e-commerce, early enterprise portals. Learning what it takes to make digital an actual business channel instead of a brochure — and building the strategy muscle that everything else stands on.",
  },
  {
    years: "2005 — 2013",
    era: "Search & Visibility",
    icon: "bi-search",
    title: "Search & Visibility",
    text: "Full-time in search from its formative years: technical foundations, on-page craft, link ecosystems, and the first algorithm upheavals. SEO became less a tactic and more a discipline of earning trust with machines.",
  },
  {
    years: "2010 — 2018",
    era: "Experience",
    icon: "bi-cursor",
    title: "UX & Digital Experience",
    text: "The mobile web, responsive design, the rise of behavioral signals. Deep work in information architecture, accessibility and conversion — because visibility is wasted when the experience lets users down.",
  },
  {
    years: "2014 — 2022",
    era: "Content",
    icon: "bi-journal-text",
    title: "Content Strategy",
    text: "Content moved from filler to fuel. Building editorial systems, thought-leadership programs and content architectures that serve readers, search engines and sales teams simultaneously.",
  },
  {
    years: "2016 — 2024",
    era: "Transformation",
    icon: "bi-arrow-repeat",
    title: "Digital Transformation",
    text: "Leading digital transformation programs: operating models, measurement, team capability and the unglamorous governance that decides whether transformation compounds or decays.",
  },
  {
    years: "2023 — Present",
    era: "AI Era",
    icon: "bi-robot",
    title: "AI-Powered Search",
    text: "The frontier: GEO and AEO — how generative engines understand, compare and cite brands. Applying 25 years of visibility principles to the layer where search is heading next.",
  },
];

const CREDENTIALS = [
  "Full-funnel digital strategy & positioning",
  "SEO & search visibility since 2005",
  "GEO & AEO — the AI-answer layer",
  "UX audits & conversion optimization",
  "Content & thought-leadership systems",
  "Digital transformation programs",
];

const PILLARS = [
  {
    icon: "bi-person-fill-check",
    title: "Human-Centered UX",
    text: "Experiences built around real behavior, accessibility and trust. If users don't understand you, no engine will either.",
  },
  {
    icon: "bi-cpu-fill",
    title: "Machine-Readable Content",
    text: "Entities, structured data and quotable answers — the raw material search engines and generative engines cite with confidence.",
  },
  {
    icon: "bi-graph-up-arrow",
    title: "Business-Driven Strategy",
    text: "Every visibility decision measured against pipeline, market and positioning — not vanity metrics or trend-chasing.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageMeta
        title="About — 25+ Years of Digital Experience | Aum Web Solutions"
        description="Daniel Hart, Founder of Aum Web Solutions — 25+ years of digital experience across SEO, UX, content, digital strategy and AI-powered search (GEO & AEO)."
        path="/about"
      />

      {/* ---------- Hero ---------- */}
      <section className="page-hero page-hero-photo" aria-labelledby="about-title">
        <PageHeroMedia {...pageBanners.about} />
        <div className="container">
          <span className="eyebrow">
            <span className="rule" aria-hidden="true"></span>
            About
          </span>
          <h1 className="line-reveal auto" id="about-title">
            <span>
              25+ Years of Digital Experience.
              <br />
              Built for the Next Era of Search.
            </span>
          </h1>
          <p className="section-lead mt-3">
            One consultant, the full arc: from the first blue links to generative answers. The
            people who have shipped through every era of the web know exactly where search is
            heading — and how to be found in it.
          </p>
          <div className="hero-strip">
            <span><i className="bi bi-signpost-2" aria-hidden="true"></i>Digital Strategy</span>
            <span><i className="bi bi-search" aria-hidden="true"></i>Search &amp; Visibility</span>
            <span><i className="bi bi-cursor" aria-hidden="true"></i>UX &amp; Experience</span>
            <span><i className="bi bi-journal-text" aria-hidden="true"></i>Content Strategy</span>
            <span><i className="bi bi-robot" aria-hidden="true"></i>AI-Powered Search</span>
          </div>
          <Reveal delay={200}>
            <div className="row g-4 mt-4">
              {[
                { value: 25, suffix: "+", label: "Years in digital" },
                { value: 3, suffix: "", label: "Eras of search mastered" },
                { value: 6, suffix: "", label: "Disciplines, one roadmap" },
              ].map((s) => (
                <div className="col-4" key={s.label}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: "2.2rem",
                      color: "#ffffff",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    <Counter value={s.value} />
                    {s.suffix}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#BECBD9" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- About the expert ---------- */}
      <section className="section" aria-labelledby="expert-title">
        <div className="container">
          <SectionTitle
            eyebrow="01 · About the expert"
            title="The person behind the work"
            className="mb-5"
          />
          <div className="about-cols">
            <Reveal>
              <div className="portrait-card">
                <div className="monogram" aria-hidden="true">
                  {site.consultant.initials}
                </div>
                <h3>{site.consultant.name}</h3>
                <p className="role mb-0">{site.consultant.role}</p>
                <ul className="portrait-facts p-0" style={{ listStyle: "none" }}>
                  <li>
                    <i className="bi bi-patch-check-fill" aria-hidden="true"></i>
                    25+ years shipping digital — strategy to execution
                  </li>
                  <li>
                    <i className="bi bi-patch-check-fill" aria-hidden="true"></i>
                    SEO from the early days · GEO &amp; AEO today
                  </li>
                  <li>
                    <i className="bi bi-patch-check-fill" aria-hidden="true"></i>
                    UX, content and transformation through the middle era
                  </li>
                  <li>
                    <i className="bi bi-patch-check-fill" aria-hidden="true"></i>
                    Remote-first · working with teams worldwide
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <h2 id="expert-title" className="h4 fw-bold mb-3">
                Two and a half decades of making brands findable
              </h2>
              <p>
                {site.consultant.name} has worked in digital for over 25 years — first as the web
                was earning its keep as a business channel, then as search became the dominant
                discovery layer, and now as generative AI is reshaping how the world finds
                answers. That arc matters: the consultants optimizing for AI answers today are
                the same people who built the foundations of search visibility yesterday.
              </p>
              <p>
                The practice spans the full stack of digital: strategy and positioning, SEO and
                search visibility, UX and digital experience, content and thought leadership,
                digital marketing and transformation programs. Each discipline has its own
                craft — the value is in how they compound when one experienced hand holds the
                whole map.
              </p>
              <p>
                Today the focus is the frontier: AI-powered search. Generative engines don't rank
                — they synthesize, compare and cite. Winning there takes the union of everything
                learned before: clean entities, quotable expertise, accessible experiences and
                content that both humans and machines can trust.
              </p>
              <ul className="cred-list" style={{ listStyle: "none" }}>
                {CREDENTIALS.map((c) => (
                  <li key={c}>
                    <i className="bi bi-check2-circle" aria-hidden="true"></i>
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Timeline ---------- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionTitle
            eyebrow="02 · Experience & expertise"
            title="The arc, era by era"
            lead="Eras overlap — they always do — but each one left a permanent layer of expertise."
            className="mb-4"
          />
          <div className="timeline" role="list" aria-label="Experience timeline">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.title} delay={i * 70}>
                <div className="tl-item" role="listitem">
                  <span className="tl-year">{t.years}</span>
                  <div className="tl-rail">
                    <span className="tl-dot">
                      <i className={`bi ${t.icon}`} aria-hidden="true"></i>
                    </span>
                  </div>
                  <div className="tl-content">
                    <span className="tl-era">{t.era}</span>
                    <h3>{t.title}</h3>
                    <p>{t.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Philosophy ---------- */}
      <section className="section section-dark">
        <div className="container">
          <SectionTitle eyebrow="03 · Philosophy" title="Digital Experience Meets Emerging Technology" />
          <p className="philosophy-quote">
            "The brands that win the next decade will be <em>experienced</em> by humans and{" "}
            <em>understood</em> by machines. Everything else is decoration."
          </p>
          <Reveal delay={150}>
            <p className="section-lead" style={{ marginTop: "1.4rem", maxWidth: "70ch" }}>
              Human-centered UX and emerging technology are not in tension — they're the same
              bet. Search engines reward what users trust; generative engines cite what is clear,
              consistent and verifiable. Combine UX, SEO, GEO, AEO, content and business strategy
              into one coherent system, and visibility stops being a tactic and becomes an asset
              that compounds.
            </p>
          </Reveal>
          <div className="pillar-grid">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 120} className="h-100">
                <div className="pillar h-100">
                  <i className={`bi ${p.icon}`} aria-hidden="true"></i>
                  <h4>{p.title}</h4>
                  <p>{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Testimonials ---------- */}
      <TestimonialSection />

      {/* ---------- CTA ---------- */}
      <CTASection
        eyebrow="Let's talk"
        title="Let's Discuss Your Digital Visibility"
        text="Wherever you are — invisible in AI answers, plateaued in classic search, or planning a transformation — the first conversation is where the roadmap starts."
        primary={{
          label: "Start a Conversation",
          to: "/contact",
          icon: "bi-chat-dots-fill",
        }}
        secondary={{ label: "Get the Free Audit", to: "/audit" }}
      />
    </>
  );
}
