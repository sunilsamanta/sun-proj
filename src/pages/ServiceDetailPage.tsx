import { Link, Navigate, useParams } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import ServiceBanner from "../components/ServiceBanner";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";
import { getServiceBySlug, services } from "../data/services";
import { processSteps } from "../data/site";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/services" replace />;

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const num = services.findIndex((s) => s.slug === service.slug) + 1;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.fullName,
    serviceType: service.fullName,
    description: service.description,
    provider: { "@id": "https://www.aumwebsolutions.com/#org" },
    areaServed: "Worldwide",
    url: `https://www.aumwebsolutions.com/services/${service.slug}`,
  };

  return (
    <>
      <PageMeta
        title={`${service.name} — ${service.fullName} | Aum Web Solutions`}
        description={service.description}
        path={`/services/${service.slug}`}
        jsonLd={jsonLd}
      />

      <ServiceBanner service={service} />

      {/* ---------- Overview ---------- */}
      <section className="section" aria-labelledby="svc-overview">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <Reveal>
                <span className="eyebrow">
                  <span className="rule" aria-hidden="true"></span>
                  Service {String(num).padStart(2, "0")}
                </span>
                <h2 className="section-title" id="svc-overview">
                  Overview
                </h2>
                <p className="section-lead">{service.description}</p>
              </Reveal>

              <Reveal delay={120}>
                <h3 className="h6 fw-bold mt-4 mb-2" style={{ letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", fontSize: "0.78rem" }}>
                  What's included
                </h3>
                <ul className="svc-deliverables">
                  {service.deliverables.map((d) => (
                    <li key={d}>
                      <i className="bi bi-check2-circle" aria-hidden="true"></i>
                      {d}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div className="col-lg-5">
              <Reveal delay={160}>
                <div className="svc-side-card">
                  <h3>Focus areas</h3>
                  <ul className="focus-list single">
                    {service.focus.map((f) => (
                      <li key={f}>
                        <i className="bi bi-check2" aria-hidden="true"></i>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="svc-side-card dark">
                  <h3>Key benefits</h3>
                  <ul className="svc-benefit-list">
                    {service.benefits.map((b) => (
                      <li key={b}>
                        <i className="bi bi-stars" aria-hidden="true"></i>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link to="/audit" className="btn btn-brand btn-sm-cta mt-3">
                    Start with a free audit
                    <i className="bi bi-arrow-right" aria-hidden="true"></i>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section className="section section-dark" aria-labelledby="svc-process">
        <div className="container">
          <Reveal>
            <span className="eyebrow">
              <span className="rule" aria-hidden="true"></span>
              How we work
            </span>
            <h2 className="section-title" id="svc-process">
              From brief to measurable results
            </h2>
          </Reveal>
          <div className="process-grid">
            {processSteps.map((step, i) => (
              <Reveal key={step.num} delay={i * 110}>
                <div className="process-step h-100">
                  <div className="process-num" aria-hidden="true">
                    {step.num}
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Other services ---------- */}
      <section className="section" aria-labelledby="svc-others">
        <div className="container">
          <Reveal>
            <div className="d-flex flex-wrap align-items-end justify-content-between gap-3 mb-4">
              <div>
                <span className="eyebrow">
                  <span className="rule" aria-hidden="true"></span>
                  Keep exploring
                </span>
                <h2 className="section-title mb-0" id="svc-others">
                  Other services
                </h2>
              </div>
              <Link to="/services" className="btn btn-line">
                All services <i className="bi bi-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>
          </Reveal>
          <div className="row g-4">
            {others.map((s, i) => (
              <div className="col-md-4" key={s.slug}>
                <Reveal delay={i * 100} className="h-100">
                  <Link to={`/services/${s.slug}`} className="svc-mini-card">
                    <span className="svc-mini-media">
                      <img src={s.banner.replace("w=1600", "w=880")} alt="" loading="lazy" />
                    </span>
                    <span className="svc-mini-body">
                      <span className="svc-mini-icon" aria-hidden="true">
                        <i className={`bi ${s.icon}`}></i>
                      </span>
                      <strong>{s.name}</strong>
                      <span>{s.short}</span>
                      <span className="link-arrow">
                        Learn More <i className="bi bi-arrow-right" aria-hidden="true"></i>
                      </span>
                    </span>
                  </Link>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Next step"
        title={`Ready to talk about ${service.name}?`}
        text="Tell us where you are today and we'll map the fastest route to visible, measurable results."
        primary={{ label: "Start a Conversation", to: "/contact", icon: "bi-chat-dots-fill" }}
        secondary={{ label: "Get the Free Audit", to: "/audit" }}
      />
    </>
  );
}
