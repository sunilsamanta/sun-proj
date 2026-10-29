import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { MotionToggle } from "./MotionContext";
import { nav, servicesSubmenu, site } from "../data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [ddOpen, setDdOpen] = useState(false);
  const ddRef = useRef<HTMLLIElement | null>(null);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setOpen(false);
    setDdOpen(false);
    setMobileServices(false);
  }, [location.pathname, location.hash]);

  // Elevated header on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click / Escape
  useEffect(() => {
    if (!ddOpen) return;
    const onDown = (e: MouseEvent) => {
      if (ddRef.current && !ddRef.current.contains(e.target as Node)) setDdOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDdOpen(false);
        ddRef.current?.querySelector<HTMLButtonElement>(".nav-dd-trigger")?.focus();
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [ddOpen]);

  // Mobile menu: Escape closes and returns focus to the toggle button
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        document.querySelector<HTMLButtonElement>(".nav-toggle")?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const servicesActive = location.pathname.startsWith("/services");

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      {/* Utility bar */}
      <div className="topbar d-none d-lg-block">
        <div className="container d-flex align-items-center justify-content-between">
          <span>
            <i className="bi bi-broadcast" aria-hidden="true"></i>{" "}
            25+ years of digital experience — SEO • GEO • AEO • UX
          </span>
          <span className="d-flex align-items-center gap-3">
            <a href={`mailto:${site.email}`}>
              <i className="bi bi-envelope" aria-hidden="true"></i> {site.email}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in a new tab)"
            >
              <i className="bi bi-linkedin" aria-hidden="true"></i> LinkedIn
            </a>
            <MotionToggle className="on-dark" />
          </span>
        </div>
      </div>

      <div className="container nav-wrap">
        <div className="d-flex align-items-center justify-content-between gap-3">
          <Link to="/" className="logo-link" aria-label={`${site.brand} — Home`}>
            <Logo />
          </Link>

          {/* Desktop navigation */}
          <nav className="d-none d-lg-flex" aria-label="Primary navigation">
            <ul className="nav-links m-0 p-0" style={{ listStyle: "none" }}>
              {nav.map((item) =>
                item.to === "/services" ? (
                  <li
                    key={item.to}
                    className={`nav-dd ${ddOpen ? "open" : ""}`}
                    ref={ddRef}
                    onMouseEnter={() => setDdOpen(true)}
                    onMouseLeave={() => setDdOpen(false)}
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setDdOpen(false);
                    }}
                  >
                    <button
                      type="button"
                      className={`nav-link-x nav-dd-trigger ${servicesActive ? "active" : ""}`}
                      aria-current={servicesActive ? "page" : undefined}
                      aria-expanded={ddOpen}
                      aria-controls="services-submenu"
                      onClick={() => setDdOpen((v) => !v)}
                    >
                      {item.label}
                      <i
                        className={`bi bi-chevron-down dd-caret ${ddOpen ? "up" : ""}`}
                        aria-hidden="true"
                      ></i>
                    </button>

                    <div className="nav-dd-menu" id="services-submenu">
                      <div className="nav-dd-head">
                        <span>Our Services</span>
                        <Link to="/services">
                          View all services
                          <i className="bi bi-arrow-right" aria-hidden="true"></i>
                        </Link>
                      </div>
                      <ul className="nav-dd-list p-0" style={{ listStyle: "none" }} aria-label="Services">
                        {servicesSubmenu.map((s) => (
                          <li key={s.to}>
                            <Link to={s.to} className="nav-dd-item">
                              <span className="nav-dd-icon" aria-hidden="true">
                                <i className={`bi ${s.icon}`}></i>
                              </span>
                              <span className="nav-dd-label">{s.label}</span>
                              <i className="bi bi-arrow-right dd-go" aria-hidden="true"></i>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <div className="nav-dd-foot">
                        <span>Not sure what you need?</span>
                        <Link to="/audit" className="btn btn-brand btn-sm-cta">
                          Free AI Audit
                          <i className="bi bi-arrow-right" aria-hidden="true"></i>
                        </Link>
                      </div>
                    </div>
                  </li>
                ) : (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      className={({ isActive }) => `nav-link-x ${isActive ? "active" : ""}`}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="d-none d-lg-block">
            <Link to="/audit" className="btn btn-brand btn-sm-cta">
              Free AI Audit <i className="bi bi-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="nav-toggle d-lg-none"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <i className={`bi ${open ? "bi-x-lg" : "bi-list"}`} aria-hidden="true"></i>
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div id="mobile-nav" className={`mobile-nav d-lg-none ${open ? "open" : ""}`} inert={!open}>
        <div className="container mobile-nav-inner">
          <nav aria-label="Mobile navigation">
            <ul className="p-0" style={{ listStyle: "none" }}>
              {nav.map((item) =>
                item.to === "/services" ? (
                  <li key={item.to}>
                    <button
                      type="button"
                      className="mnav-link mnav-toggle"
                      aria-expanded={mobileServices}
                      aria-controls="mobile-services"
                      onClick={() => setMobileServices((v) => !v)}
                    >
                      <span className="d-flex align-items-center gap-2">
                        {item.label}
                        <span
                          className={`mnav-count ${mobileServices ? "open" : ""}`}
                          aria-hidden="true"
                        >
                          {servicesSubmenu.length}
                        </span>
                      </span>
                      <i
                        className={`bi ${mobileServices ? "bi-chevron-up" : "bi-chevron-down"}`}
                        aria-hidden="true"
                      ></i>
                    </button>

                    <div
                      id="mobile-services"
                      className={`mnav-sub ${mobileServices ? "open" : ""}`}
                      inert={!mobileServices}
                    >
                      <ul className="p-0" style={{ listStyle: "none" }}>
                        {servicesSubmenu.map((s) => (
                          <li key={s.to}>
                            <NavLink to={s.to} className="mnav-sublink">
                              <i className={`bi ${s.icon}`} aria-hidden="true"></i>
                              {s.label}
                            </NavLink>
                          </li>
                        ))}
                        <li>
                          <Link to="/services" className="mnav-sublink mnav-all">
                            View all services
                            <i className="bi bi-arrow-right" aria-hidden="true"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      className={({ isActive }) => `mnav-link ${isActive ? "active" : ""}`}
                    >
                      {item.label}
                      <i className="bi bi-arrow-right" aria-hidden="true"></i>
                    </NavLink>
                  </li>
                )
              )}
            </ul>
            <div className="d-grid mt-3">
              <Link to="/audit" className="btn btn-brand">
                Get Free AI Visibility Audit
                <i className="bi bi-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>
            <div className="mt-3">
              <MotionToggle />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
