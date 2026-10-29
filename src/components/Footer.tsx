import { Link } from "react-router-dom";
import Logo from "./Logo";
import { MotionToggle } from "./MotionContext";
import { nav, site } from "../data/site";
import { services } from "../data/services";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer pt-5" style={{ paddingBottom: "2rem" }}>
      <div className="container">
        <div className="footer-cta">
          <div>
            <h3>Get Your Free AI Search Visibility Audit</h3>
            <p>
              See how your brand appears in search engines and AI-powered answers — and what to
              fix first. No obligation.
            </p>
          </div>
          <Link to="/audit" className="btn btn-brand">
            Request My Audit <i className="bi bi-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>

        <div className="footer-grid">
          <div className="footer-col">
            <Link to="/" className="logo-link mb-3" aria-label={`${site.brand} — Home`}>
              <Logo dark />
            </Link>
            <p className="mt-3">
              <strong>{site.brand}</strong> — digital consulting and visibility expertise across
              SEO, GEO, AEO, UX, content strategy and digital transformation, backed by 25+ years
              of digital experience.
            </p>
          </div>

          <div className="footer-col">
            <h2 className="h5" style={{ marginBottom: "1.15rem" }}>
              Navigate
            </h2>
            <ul className="footer-links">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>
                    <i className="bi bi-arrow-right" aria-hidden="true"></i>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h2 className="h5" style={{ marginBottom: "1.15rem" }}>
              Services
            </h2>
            <ul className="footer-links">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`}>
                    <i className="bi bi-arrow-right" aria-hidden="true"></i>
                    {s.fullName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h2 className="h5" style={{ marginBottom: "1.15rem" }}>
              Contact
            </h2>
            <ul className="footer-contact p-0" style={{ listStyle: "none" }}>
              <li>
                <i className="bi bi-envelope" aria-hidden="true"></i>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <i className="bi bi-linkedin" aria-hidden="true"></i>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                  {site.linkedinLabel} — articles &amp; visibility insights
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <i className="bi bi-geo-alt" aria-hidden="true"></i>
                <span>Remote-first · Working worldwide</span>
              </li>
              <li>
                <i className="bi bi-stopwatch" aria-hidden="true"></i>
                <span>Typical response: within 1 business day</span>
              </li>
              <li>
                <i className="bi bi-chat-dots" aria-hidden="true"></i>
                <Link to="/contact">Send us a message →</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Notice */}
        <div className="footer-disclaimer">
          <p className="mb-0">
            <i className="bi bi-shield-check me-1" aria-hidden="true"></i>
            <strong>Legal Notice:</strong> {site.brand} is an independent digital consulting and web
            solutions practice specializing in SEO, GEO, AEO, UX, content strategy and digital
            transformation. All third-party trademarks, service marks and trade names referenced on
            this website remain the intellectual property of their respective owners.
          </p>
        </div>

        <div className="footer-bottom">
          <span>
            © {year} {site.brand}. All rights reserved.
          </span>
          <span className="credits">
            Photography: <a href="https://www.pexels.com/" target="_blank" rel="noopener noreferrer">Pexels<span className="visually-hidden"> (opens in a new tab)</span></a> contributors
          </span>
          <span className="disciplines">
            <b>SEO</b> · <b>GEO</b> · <b>AEO</b> · UX · Content · Transformation
          </span>
          <span className="d-flex flex-wrap align-items-center gap-3">
            <Link to="/accessibility" className="footer-a11y-link">
              <i className="bi bi-universal-access-circle" aria-hidden="true"></i> Accessibility
            </Link>
            <MotionToggle className="on-dark" />
          </span>
          <a
            href="#top"
            className="back-top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              document.querySelector<HTMLElement>(".skip-link")?.focus({ preventScroll: true });
            }}
          >
            Back to top <i className="bi bi-arrow-up" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
