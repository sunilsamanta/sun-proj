import { Link } from "react-router-dom";
import type { Service } from "../data/services";

/**
 * Full-width photographic banner used at the top of every service page.
 * A heavy navy scrim guarantees the headline stays readable.
 */
export default function ServiceBanner({ service }: { service: Service }) {
  return (
    <section className="svc-banner" aria-labelledby="svc-title">
      <div className="svc-banner-media">
        <img src={service.banner} alt={service.bannerAlt} fetchPriority="high" decoding="async" />
        <span className="svc-banner-scrim" aria-hidden="true"></span>
        <span className="svc-banner-grid" aria-hidden="true"></span>
      </div>

      <div className="container svc-banner-inner">
        <nav className="svc-crumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <i className="bi bi-chevron-right" aria-hidden="true"></i>
          <Link to="/services">Services</Link>
          <i className="bi bi-chevron-right" aria-hidden="true"></i>
          <span aria-current="page">{service.name}</span>
        </nav>

        <div className="svc-banner-copy">
          <span className="svc-banner-icon" aria-hidden="true">
            <i className={`bi ${service.icon}`}></i>
          </span>
          <div>
            <span className="svc-eyebrow">{service.fullName}</span>
            <h1 id="svc-title">{service.name}</h1>
            <p className="svc-tagline">{service.tagline}</p>
          </div>
        </div>

        <div className="svc-banner-ctas">
          <Link to="/audit" className="btn btn-brand btn-lg-cta">
            Get Free AI Visibility Audit
            <i className="bi bi-arrow-right" aria-hidden="true"></i>
          </Link>
          <Link to="/contact" className="btn btn-ghost btn-lg-cta">
            Start a Conversation
          </Link>
        </div>
      </div>
    </section>
  );
}
