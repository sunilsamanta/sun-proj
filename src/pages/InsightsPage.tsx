import { useState } from "react";
import PageMeta from "../components/PageMeta";
import PageHeroMedia from "../components/PageHeroMedia";
import InsightCard from "../components/InsightCard";
import { insights, insightCategories } from "../data/insights";
import { site } from "../data/site";
import { pageBanners } from "../data/pageBanners";

type Filter = "All" | (typeof insightCategories)[number];

export default function InsightsPage() {
  const [active, setActive] = useState<Filter>("All");
  const filtered = active === "All" ? insights : insights.filter((i) => i.category === active);
  const filters: Filter[] = ["All", ...insightCategories];

  return (
    <>
      <PageMeta
        title="Insights on Search, AI & Digital Experience | Aum Web Solutions"
        description="Articles and posts on SEO, GEO, AEO, UX, AI, digital transformation and digital marketing from Aum Web Solutions — published on LinkedIn and curated here."
        path="/insights"
      />

      <section className="page-hero page-hero-photo" aria-labelledby="insights-title">
        <PageHeroMedia {...pageBanners.insights} />
        <div className="container">
          <span className="eyebrow">
            <span className="rule" aria-hidden="true"></span>
            Insights
          </span>
          <h1 className="line-reveal auto" id="insights-title">
            <span>Insights on Search, AI &amp; Digital Experience</span>
          </h1>
          <p className="section-lead mt-3">
            What I'm learning from the frontier — published as articles and posts on LinkedIn,
            and curated here with category filtering as the library grows.
          </p>
          <div className="hero-strip">
            <span>
              <i className="bi bi-linkedin" aria-hidden="true"></i>
              Follow on LinkedIn
            </span>
            <span>
              <i className="bi bi-broadcast" aria-hidden="true"></i>
              {insights.length} pieces published
            </span>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "2.5rem" }} aria-labelledby="insights-list-h">
        <div className="container">
          <h2 id="insights-list-h" className="visually-hidden">Insight articles</h2>
          <div className="filter-row" role="group" aria-label="Filter insights by category">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                className={`filter-btn ${active === f ? "active" : ""}`}
                aria-pressed={active === f}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <p aria-live="polite" style={{ fontSize: "0.82rem", color: "var(--muted)", marginTop: "-1.4rem", marginBottom: "2rem" }}>
            Showing {filtered.length} of {insights.length} {filtered.length === 1 ? "insight" : "insights"}
            {active !== "All" ? ` in ${active}` : ""}
          </p>

          <div className="row g-4">
            {filtered.map((ins, i) => (
              <div className="col-md-6 col-xl-4" key={ins.id}>
                <InsightCard insight={ins} delay={(i % 3) * 100} />
              </div>
            ))}
          </div>

          <div className="insights-note">
            <i className="bi bi-linkedin" aria-hidden="true"></i>
            <div>
              <strong style={{ color: "var(--heading)" }}>
                New insights are published on LinkedIn first.
              </strong>{" "}
              Articles and posts are added to this hub as they go live —{" "}
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                follow along on {site.linkedinLabel} <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>{" "}
              for the full stream.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
