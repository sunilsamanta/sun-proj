import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import Reveal from "../components/Reveal";
import { MotionToggle } from "../components/MotionContext";
import { site } from "../data/site";

const MEASURES = [
  {
    icon: "bi-keyboard",
    title: "Keyboard accessible",
    text: "Every link, button, menu, carousel and form works with Tab, Shift+Tab, Enter, Space, Escape and arrow keys. A “Skip to main content” link is the first focusable element.",
  },
  {
    icon: "bi-bullseye",
    title: "Visible focus",
    text: "A high-contrast focus ring (cyan on light surfaces, gold on dark surfaces) shows exactly where keyboard focus is at all times.",
  },
  {
    icon: "bi-circle-half",
    title: "Colour contrast",
    text: "Body text and interface text meet at least 4.5:1 contrast; large headings and UI components meet at least 3:1. Colour is never the only way information is conveyed.",
  },
  {
    icon: "bi-pause-circle",
    title: "Motion control",
    text: "Carousels have pause controls and stop on hover or focus. A site-wide “Pause animations” switch freezes all non-essential motion, and your system’s reduced-motion setting is respected automatically.",
  },
  {
    icon: "bi-badge-cc",
    title: "Screen-reader support",
    text: "Semantic landmarks, a logical heading order, descriptive image alternatives, labelled form fields, live announcements for form errors and results, and focus moved to each new page’s heading.",
  },
  {
    icon: "bi-arrows-angle-expand",
    title: "Resize & reflow",
    text: "Content reflows to a single column at 320px width and remains usable when text is zoomed to 200% or text spacing is increased.",
  },
];

export default function AccessibilityPage() {
  return (
    <>
      <PageMeta
        title="Accessibility Statement | Aum Web Solutions"
        description="Aum Web Solutions is committed to digital accessibility and aims to conform to WCAG 2.2 Level AA. Learn about our accessibility features and how to request help."
        path="/accessibility"
      />

      <section className="page-hero" aria-labelledby="a11y-title">
        <div className="container">
          <span className="eyebrow">
            <span className="rule" aria-hidden="true"></span>
            Accessibility
          </span>
          <h1 id="a11y-title">Accessibility Statement</h1>
          <p className="section-lead mt-3">
            {site.brand} is committed to making this website usable by everyone, including people
            who use assistive technologies. We aim to conform to the{" "}
            <a
              href="https://www.w3.org/TR/WCAG22/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Web Content Accessibility Guidelines (WCAG) 2.2, Level AA
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
            .
          </p>
          <div className="mt-4">
            <MotionToggle />
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1rem" }} aria-labelledby="a11y-measures">
        <div className="container">
          <h2 className="section-title" id="a11y-measures">
            What we’ve built in
          </h2>
          <ul className="row g-4 mt-2 p-0" style={{ listStyle: "none" }}>
            {MEASURES.map((m, i) => (
              <li className="col-md-6 col-xl-4" key={m.title}>
                <Reveal delay={(i % 3) * 80} className="h-100">
                  <div className="a11y-card h-100">
                    <span className="icon-tile" aria-hidden="true">
                      <i className={`bi ${m.icon}`}></i>
                    </span>
                    <h3>{m.title}</h3>
                    <p>{m.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>

          <div className="row g-5 mt-3">
            <div className="col-lg-6">
              <h2 className="h4 fw-bold">Known limitations</h2>
              <ul className="a11y-list">
                <li>
                  Some stock photographs are supplied by third parties; descriptive alternative text
                  is provided, but fine visual detail inside photos may not be fully described.
                </li>
                <li>
                  Case-study figures on this site are illustrative placeholders and will be replaced
                  with verified results.
                </li>
                <li>
                  Links to LinkedIn and other external platforms lead to content we do not control.
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <h2 className="h4 fw-bold">Feedback & assistance</h2>
              <p>
                If you encounter a barrier, need information in an alternative format, or have a
                suggestion, please contact us. We aim to respond within two business days.
              </p>
              <ul className="a11y-list">
                <li>
                  Email: <a href={`mailto:${site.email}?subject=Accessibility feedback`}>{site.email}</a>
                </li>
                <li>
                  Contact form: <Link to="/contact">send us a message</Link>
                </li>
              </ul>
              <p className="small text-muted-strong mt-3">
                This statement was last reviewed in 2026 using keyboard-only testing, screen-reader
                checks and automated contrast analysis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
