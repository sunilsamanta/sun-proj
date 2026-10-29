import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import PageHeroMedia from "../components/PageHeroMedia";
import ServiceCard from "../components/ServiceCard";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";
import ProcessSection from "../components/ProcessSection";
import { services } from "../data/services";
import { processSteps } from "../data/site";
import { pageBanners } from "../data/pageBanners";

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Aum Web Solutions Services",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.fullName,
    url: `https://www.aumwebsolutions.com/services/${s.slug}`,
  })),
};

export default function ServicesPage() {
  return (
    <>
      <PageMeta
        title="Services — SEO, GEO, AEO, Design, Development & Marketing | Aum Web Solutions"
        description="Services designed for the new digital search era: SEO, GEO, AEO, WordPress design, web & mobile development, UX, IT consulting, content, social, brand and digital marketing."
        path="/services"
        jsonLd={serviceJsonLd}
      />

      {/* ---------- Hero ---------- */}
      <section className="page-hero page-hero-photo" aria-labelledby="services-title">
        <PageHeroMedia {...pageBanners.services} />
        <div className="container">
          <span className="eyebrow">
            <span className="rule" aria-hidden="true"></span>
            Services
          </span>
          <h1 className="line-reveal auto" id="services-title">
            <span>Services Designed for the New Digital Search Era</span>
          </h1>
          <p className="section-lead mt-3">
            Thirteen disciplines that compound into one outcome: a brand that is found in classic
            search, recommended by AI answers, and experienced by humans as the credible option.
          </p>
          <div className="hero-strip">
            <span>
              <i className="bi bi-grid-3x3-gap" aria-hidden="true"></i>
              {services.length} services
            </span>
            <span>
              <i className="bi bi-patch-check" aria-hidden="true"></i>
              25+ years of experience
            </span>
            <span>
              <i className="bi bi-robot" aria-hidden="true"></i>
              AI-search ready
            </span>
          </div>
        </div>
      </section>

      {/* ---------- Services grid ---------- */}
      <section className="section" style={{ paddingTop: "2.5rem" }} aria-labelledby="all-services-h">
        <div className="container">
          <h2 id="all-services-h" className="visually-hidden">All services</h2>
          <div className="row g-4">
            {services.map((s, i) => (
              <div className="col-md-6 col-xl-4" key={s.slug}>
                <ServiceCard service={s} delay={(i % 3) * 100} />
              </div>
            ))}
          </div>

          {/* Quick index */}
          <Reveal delay={120}>
            <div className="svc-index">
              <h2 className="h6" style={{ letterSpacing: "0.16em", textTransform: "uppercase", fontSize: "0.74rem", color: "var(--muted)" }}>
                Jump to a service
              </h2>
              <ul className="svc-index-list">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link to={`/services/${s.slug}`}>
                      <i className={`bi ${s.icon}`} aria-hidden="true"></i>
                      {s.fullName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section className="section" style={{ paddingTop: 0 }} aria-label="Our process">
        <div className="container">
          <ProcessSection
            eyebrow="Process"
            title="How every engagement runs"
            lead="No black boxes. A clear sequence with deliverables at every stage."
            steps={processSteps}
          />
        </div>
      </section>

      <CTASection
        eyebrow="Find your path"
        title="Find Your Fastest Path to Visibility"
        text="One audit tells you which of these disciplines will move your business first — and how they sequence together."
        primary={{ label: "Get My Free AI Visibility Audit", to: "/audit" }}
        secondary={{ label: "Start a Conversation", to: "/contact" }}
      />
    </>
  );
}
