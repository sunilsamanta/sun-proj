import PageMeta from "../components/PageMeta";
import PageHeroMedia from "../components/PageHeroMedia";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";
import { caseStudies } from "../data/caseStudies";
import { pageBanners } from "../data/pageBanners";

function CaseDetail({ study, index }: { study: (typeof caseStudies)[number]; index: number }) {
  return (
    <article className="case-detail" id={study.slug} aria-labelledby={`${study.id}-title`}>
      <Reveal>
        <header className="mb-4">
          <span className="case-id">
            <span className="num">Case {String(index + 1).padStart(2, "0")}</span> ·{" "}
            {study.industry}
          </span>
          <h3 id={`${study.id}-title`}>{study.title}</h3>
          <p className="client-line mb-0">{study.client}</p>
          <span className="badge-illus">
            <i className="bi bi-info-circle" aria-hidden="true"></i>
            Illustrative, anonymized data — structured for client-approved results
          </span>
        </header>
      </Reveal>

      <div className="row g-4 g-lg-5 align-items-start">
        <div className="col-lg-6">
          <Reveal delay={100}>
            <div className="case-steps">
              <div className="case-step">
                <h4>
                  <i className="bi bi-flag-fill" aria-hidden="true"></i> Challenge
                </h4>
                <p>{study.challenge}</p>
              </div>
              <div className="case-step">
                <h4>
                  <i className="bi bi-signpost-2-fill" aria-hidden="true"></i> Strategy
                </h4>
                <p>{study.strategy}</p>
              </div>
              <div className="case-step">
                <h4>
                  <i className="bi bi-gear-fill" aria-hidden="true"></i> Solution
                </h4>
                <p>{study.solution}</p>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="col-lg-6">
          <Reveal delay={220}>
            <div className="case-compare">
              <div className="ba-grid">
                <div className="ba-col ba-before">
                  <h5>Before</h5>
                  <ul>
                    {study.before.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="ba-arrow" aria-hidden="true">
                  <i className="bi bi-arrow-right"></i>
                </div>
                <div className="ba-col ba-after">
                  <h5>After</h5>
                  <ul>
                    {study.after.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="ba-results">
                {study.results.map((r) => (
                  <div className="ba-metric" key={r.label}>
                    <strong>{r.value}</strong>
                    <span>{r.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </article>
  );
}

export default function CaseStudiesPage() {
  return (
    <>
      <PageMeta
        title="Case Studies — Before, After & Results | Aum Web Solutions"
        description="How visibility programs run in practice at Aum Web Solutions: challenge, strategy, solution and measurable shift."
        path="/case-studies"
      />

      <section className="page-hero page-hero-photo" aria-labelledby="cs-title">
        <PageHeroMedia {...pageBanners.caseStudies} />
        <div className="container">
          <span className="eyebrow">
            <span className="rule" aria-hidden="true"></span>
            Case Studies
          </span>
          <h1 className="line-reveal auto" id="cs-title">
            <span>
              Before <span style={{ color: "var(--accent)" }} aria-hidden="true">→</span> After{" "}
              <span style={{ color: "var(--accent)" }} aria-hidden="true">→</span> Results
            </span>
          </h1>
          <p className="section-lead mt-3">
            Featured client engagements showing how visibility programs actually run: the
            challenge, the strategy, the solution — and the shift on the other side.
          </p>
          <p className="banner-note mb-0 mt-3" style={{ fontSize: "0.8rem", maxWidth: "70ch" }}>
            Note: client names and figures below are anonymized, illustrative placeholders,
            structured so each engagement can be replaced with approved, verified results.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "2rem" }} aria-labelledby="cs-list-h">
        <div className="container">
          <h2 id="cs-list-h" className="visually-hidden">Case study details</h2>
          {caseStudies.map((cs, i) => (
            <CaseDetail key={cs.id} study={cs} index={i} />
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Your turn"
        title="Your project could be the next case study"
        text="Every engagement above started with a single question: how visible are we, really? That's where we can start with you."
        primary={{
          label: "Discuss Your Project",
          to: "/contact",
          icon: "bi-chat-dots-fill",
        }}
        secondary={{ label: "Start With a Free Audit", to: "/audit" }}
      />
    </>
  );
}
