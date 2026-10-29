import { useState } from "react";
import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import PageHeroMedia from "../components/PageHeroMedia";
import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
import AuditForm from "../components/AuditForm";
import ProcessSection from "../components/ProcessSection";
import { analyzeItems, auditSteps, faqs, site } from "../data/site";
import { pageBanners } from "../data/pageBanners";

const FAQ_IMAGE =
  "https://images.pexels.com/photos/7689734/pexels-photo-7689734.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=740&h=520&q=76";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

function FaqList() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="faq-list">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div className="faq-item" key={f.q}>
            <h3 className="h6">
              <button
                type="button"
                className="faq-q"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-btn-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                {f.q}
                <i className="bi bi-plus-lg" aria-hidden="true"></i>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-btn-${i}`}
              className={`faq-a ${isOpen ? "open" : ""}`}
              inert={!isOpen}
            >
              <p>{f.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function AuditPage() {
  return (
    <>
      <PageMeta
        title="Free AI Search Visibility Audit | Aum Web Solutions"
        description="How visible is your brand in AI-powered search? Get a free, prioritized audit of your SEO, GEO, AEO and digital authority from Aum Web Solutions — delivered within 3–5 business days."
        path="/audit"
        jsonLd={faqJsonLd}
      />

      {/* ---------- Hero ---------- */}
      <section className="page-hero page-hero-photo dark" aria-labelledby="audit-title">
        <PageHeroMedia {...pageBanners.audit} />
        <div className="container">
          <span className="eyebrow">
            <span className="dot-live" aria-hidden="true"></span>
            Free AI Search Visibility Audit
          </span>
          <h1 className="line-reveal auto" id="audit-title">
            <span>How Visible Is Your Brand in AI-Powered Search?</span>
          </h1>
          <p className="section-lead mt-3">
            Discover how your business appears across modern search and AI-powered discovery
            experiences — and what to fix first.
          </p>
          <div className="hero-strip">
            <span><i className="bi bi-shield-check" aria-hidden="true"></i>No obligation, no pressure</span>
            <span><i className="bi bi-stopwatch" aria-hidden="true"></i>Report in 3–5 business days</span>
            <span><i className="bi bi-list-check" aria-hidden="true"></i>Prioritized, actionable insights</span>
          </div>
        </div>
      </section>

      {/* ---------- Form + what we analyze ---------- */}
      <section className="section" aria-label="Request your audit">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-6">
              <SectionTitle
                eyebrow="What we analyze"
                title="Eight dimensions of modern visibility"
                lead="Not a scorecard for its own sake — a map of where your brand is understood, and where the biggest gains hide."
              />
              <div className="analyze-grid">
                {analyzeItems.map((item, i) => (
                  <Reveal key={item.title} delay={(i % 4) * 80}>
                    <div className="analyze-item">
                      <i className={`bi ${item.icon}`} aria-hidden="true"></i>
                      <div>
                        <strong>{item.title}</strong>
                        <span>{item.text}</span>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={200}>
                <div className="d-flex gap-3 mt-4 p-3 rounded" style={{ background: "#fff", border: "1px solid var(--line)" }}>
                  <i className="bi bi-shield-lock-fill" style={{ color: "#077173", fontSize: "1.4rem" }} aria-hidden="true"></i>
                  <p className="mb-0" style={{ fontSize: "0.86rem", color: "var(--muted)" }}>
                    <strong style={{ color: "var(--heading)" }}>Your data stays yours.</strong>{" "}
                    Details are used only to prepare your audit — no newsletters, no lists, no
                    third-party sharing. Trust is the first thing an audit measures.
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="col-lg-6">
              <div className="sticky-col">
                <AuditForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section className="section" style={{ background: "#fff", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }} aria-label="How the audit works">
        <div className="container">
          <ProcessSection
            eyebrow="How it works"
            title="From URL to insight report"
            lead="A deliberately simple process. You submit, we dig, you get clarity."
            steps={auditSteps}
          />
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="section">
        <div className="container">
          <div className="row g-4 g-lg-5 align-items-start">
            {/* Left: accordion */}
            <div className="col-lg-7">
              <SectionTitle
                eyebrow="FAQ"
                title="Questions, answered"
                className="mb-4"
              />
              <Reveal>
                <FaqList />
              </Reveal>
              <Reveal delay={150}>
                <p className="mt-4 mb-0" style={{ fontSize: "0.92rem", color: "var(--muted)" }}>
                  Prefer to talk it through first?{" "}
                  <a href={`mailto:${site.email}`}>
                    Start a conversation <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
                  </a>{" "}
                  — a 15-minute call, zero pitch.
                </p>
              </Reveal>
            </div>

            {/* Right: supporting image + audit CTA */}
            <div className="col-lg-5">
              <Reveal delay={120}>
                <figure className="faq-side">
                  <img
                    src={FAQ_IMAGE}
                    alt="A friendly customer support consultant on a headset helping a client, representing answered questions about the visibility audit."
                    width="740"
                    height="520"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption className="faq-side-card">
                    <span className="faq-side-badge" aria-hidden="true">
                      <i className="bi bi-chat-dots-fill"></i>
                    </span>
                    <strong>Still have a question?</strong>
                    <span>Get a straight answer — no jargon, no sales script.</span>
                    <Link to="/contact" className="btn btn-brand btn-sm-cta">
                      Ask us anything
                      <i className="bi bi-arrow-right" aria-hidden="true"></i>
                    </Link>
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
