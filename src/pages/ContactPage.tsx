import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import PageHeroMedia from "../components/PageHeroMedia";
import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
import { site } from "../data/site";
import { services } from "../data/services";
import { pageBanners } from "../data/pageBanners";

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  interest: string;
  budget: string;
  message: string;
}

type Errors = Partial<Record<keyof FormData, string>>;

const INITIAL: FormData = {
  name: "",
  email: "",
  company: "",
  phone: "",
  interest: "",
  budget: "",
  message: "",
};

const BUDGETS = [
  "Under $2,000",
  "$2,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000+",
  "Not sure yet",
];

const REASONS = [
  {
    icon: "bi-search",
    title: "Free visibility audit",
    text: "A prioritized report on how you appear across search and AI answers.",
  },
  {
    icon: "bi-lightbulb",
    title: "Strategy consultation",
    text: "A 30-minute working session on your biggest visibility blocker.",
  },
  {
    icon: "bi-people",
    title: "Long-term partnership",
    text: "Ongoing SEO, GEO, AEO, content and UX programmes with clear KPIs.",
  },
];

const FAQS = [
  {
    q: "How quickly will I hear back?",
    a: "Within one business day, always from a human — never an automated sequence.",
  },
  {
    q: "Do you work with businesses outside your region?",
    a: "Yes. We're remote-first and currently work with teams across multiple time zones.",
  },
  {
    q: "What happens on the first call?",
    a: "Fifteen to thirty minutes: your goals, your current visibility, and whether we're genuinely the right fit. No pitch deck.",
  },
];

function validate(d: FormData): Errors {
  const e: Errors = {};
  if (d.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email.trim()))
    e.email = "Please enter a valid email address.";
  if (!d.interest) e.interest = "Please choose what you're interested in.";
  if (d.message.trim().length < 10)
    e.message = "Please tell us a little more (at least 10 characters).";
  return e;
}

export default function ContactPage() {
  const [data, setData] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set =
    (k: keyof FormData) =>
    (e: { target: { value: string } }) => {
      setData((d) => ({ ...d, [k]: e.target.value }));
      if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined }));
    };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(data);
    setErrors(errs);
    const firstKey = (Object.keys(errs) as (keyof FormData)[])[0];
    if (!firstKey) {
      setSent(true);
      return;
    }
    // WCAG 3.3.1: move focus to the first invalid field
    window.setTimeout(() => document.getElementById(`c-${firstKey}`)?.focus(), 0);
  };
  const errorCount = Object.values(errors).filter(Boolean).length;

  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Aum Web Solutions",
    url: `${site.base}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: site.brand,
      email: site.email,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: site.email,
        availableLanguage: ["English", "Hindi"],
      },
    },
  };

  return (
    <>
      <PageMeta
        title="Contact — Let's Talk Digital Visibility | Aum Web Solutions"
        description="Get in touch with Aum Web Solutions for SEO, GEO, AEO, UX, content strategy and digital transformation consulting. Response within one business day."
        path="/contact"
        jsonLd={contactJsonLd}
      />

      {/* ---------- Hero ---------- */}
      <section className="page-hero page-hero-photo dark" aria-labelledby="contact-title">
        <PageHeroMedia {...pageBanners.contact} />
        <div className="container">
          <span className="eyebrow">
            <span className="dot-live" aria-hidden="true"></span>
            Contact
          </span>
          <h1 className="line-reveal auto" id="contact-title">
            <span>Let's Build Your Digital Visibility</span>
          </h1>
          <p className="section-lead mt-3">
            Whether you're invisible in AI answers, plateaued in search, or planning a full
            transformation — the first conversation is where the roadmap starts.
          </p>
          <div className="hero-strip">
            <span>
              <i className="bi bi-stopwatch" aria-hidden="true"></i>Reply within 1 business day
            </span>
            <span>
              <i className="bi bi-shield-check" aria-hidden="true"></i>No obligation, no pitch deck
            </span>
            <span>
              <i className="bi bi-globe2" aria-hidden="true"></i>Remote-first, worldwide
            </span>
          </div>
        </div>
      </section>

      {/* ---------- Contact cards ---------- */}
      <section className="section-sm" aria-labelledby="contact-methods-h">
        <div className="container">
          <h2 id="contact-methods-h" className="visually-hidden">Ways to reach us</h2>
          <div className="row g-4">
            {[
              {
                icon: "bi-envelope-fill",
                label: "Email us",
                value: site.email,
                href: `mailto:${site.email}`,
                note: "Best for detailed briefs",
              },
              {
                icon: "bi-linkedin",
                label: "LinkedIn",
                value: "Connect & message",
                href: site.linkedin,
                note: "Best for quick questions",
                external: true,
              },
              {
                icon: "bi-calendar-check-fill",
                label: "Book a call",
                value: "30-min strategy session",
                href: `mailto:${site.email}?subject=Booking a strategy call`,
                note: "Best for scoping a project",
              },
            ].map((c, i) => (
              <div className="col-md-4" key={c.label}>
                <Reveal delay={i * 100} className="h-100">
                  <a
                    className="contact-card"
                    href={c.href}
                    {...(c.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    <span className="icon-tile" aria-hidden="true">
                      <i className={`bi ${c.icon}`}></i>
                    </span>
                    <h3>{c.label}</h3>
                    <strong>{c.value}</strong>
                    {c.external && <span className="visually-hidden"> (opens in a new tab)</span>}
                    <span className="cc-note">{c.note}</span>
                    <i className="bi bi-arrow-up-right cc-arrow" aria-hidden="true"></i>
                  </a>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Form + sidebar ---------- */}
      <section className="section" style={{ paddingTop: "1rem" }} aria-label="Contact form">
        <div className="container">
          <div className="row g-5 align-items-start">
            {/* Left: context */}
            <div className="col-lg-5">
              <SectionTitle
                eyebrow="Tell us about it"
                title="What can we help you with?"
                lead="The more context you share, the more specific our first reply can be."
              />

              <div className="reason-list">
                {REASONS.map((r, i) => (
                  <Reveal key={r.title} delay={i * 90}>
                    <div className="reason-item">
                      <span className="icon-tile" aria-hidden="true">
                        <i className={`bi ${r.icon}`}></i>
                      </span>
                      <div>
                        <h3>{r.title}</h3>
                        <p>{r.text}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={200}>
                <div className="contact-faq">
                  <h3>Quick answers</h3>
                  {FAQS.map((f) => (
                    <div className="cf-item" key={f.q}>
                      <strong>{f.q}</strong>
                      <p>{f.a}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right: form */}
            <div className="col-lg-7">
              <div className="sticky-col">
                {sent ? (
                  <div className="form-card">
                    <div className="success-panel" role="status" aria-live="polite">
                      <div className="check-ring">
                        <i className="bi bi-check-lg" aria-hidden="true"></i>
                      </div>
                      <h3>Message sent</h3>
                      <p>
                        Thanks, {data.name.split(" ")[0] || "there"} — your message is in. We reply
                        to every enquiry personally, usually within one business day.
                      </p>
                      <ol className="success-next">
                        <li>
                          <span className="n">01</span>
                          <span>We read your brief and review your current visibility.</span>
                        </li>
                        <li>
                          <span className="n">02</span>
                          <span>You get a personal reply with initial observations.</span>
                        </li>
                        <li>
                          <span className="n">03</span>
                          <span>If useful, we book a 30-minute call — zero pressure.</span>
                        </li>
                      </ol>
                      <div className="d-flex flex-wrap gap-2 justify-content-center mt-4">
                        <Link to="/audit" className="btn btn-brand">
                          Also get the free audit
                          <i className="bi bi-arrow-right" aria-hidden="true"></i>
                        </Link>
                        <button
                          type="button"
                          className="btn btn-line"
                          onClick={() => {
                            setData(INITIAL);
                            setSent(false);
                          }}
                        >
                          Send another message
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form className="form-card" onSubmit={onSubmit} noValidate aria-labelledby="contact-form-title">
                    <div className="form-card-head">
                      <h3 id="contact-form-title">Send a message</h3>
                      <p>Fields marked <span aria-hidden="true">*</span><span className="visually-hidden">with an asterisk</span> are required. We never share your details.</p>
                    </div>
                    <div className="form-body">
                      <div role="alert" aria-live="assertive">
                        {errorCount > 0 && (
                          <p className="form-error-summary">
                            <i className="bi bi-exclamation-triangle-fill" aria-hidden="true"></i>
                            Please correct {errorCount} {errorCount === 1 ? "field" : "fields"} highlighted below.
                          </p>
                        )}
                      </div>
                      <div className="row g-3">
                        <div className="col-sm-6">
                          <label className="form-label" htmlFor="c-name">
                            Name <span aria-hidden="true">*</span>
                          </label>
                          <input
                            id="c-name"
                            className={`form-control ${errors.name ? "is-invalid" : ""}`}
                            type="text"
                            autoComplete="name"
                            value={data.name}
                            onChange={set("name")}
                            required
                            aria-invalid={errors.name ? true : undefined}
                            aria-describedby={errors.name ? "c-name-err" : undefined}
                          />
                          {errors.name && (
                            <div className="invalid-feedback d-block" id="c-name-err">
                              {errors.name}
                            </div>
                          )}
                        </div>
                        <div className="col-sm-6">
                          <label className="form-label" htmlFor="c-email">
                            Email <span aria-hidden="true">*</span>
                          </label>
                          <input
                            id="c-email"
                            className={`form-control ${errors.email ? "is-invalid" : ""}`}
                            type="email"
                            autoComplete="email"
                            value={data.email}
                            onChange={set("email")}
                            required
                            aria-invalid={errors.email ? true : undefined}
                            aria-describedby={errors.email ? "c-email-err" : undefined}
                          />
                          {errors.email && (
                            <div className="invalid-feedback d-block" id="c-email-err">
                              {errors.email}
                            </div>
                          )}
                        </div>
                        <div className="col-sm-6">
                          <label className="form-label" htmlFor="c-company">
                            Company
                          </label>
                          <input
                            id="c-company"
                            className="form-control"
                            type="text"
                            autoComplete="organization"
                            value={data.company}
                            onChange={set("company")}
                          />
                        </div>
                        <div className="col-sm-6">
                          <label className="form-label" htmlFor="c-phone">
                            Phone
                          </label>
                          <input
                            id="c-phone"
                            className="form-control"
                            type="tel"
                            autoComplete="tel"
                            value={data.phone}
                            onChange={set("phone")}
                          />
                        </div>
                        <div className="col-sm-6">
                          <label className="form-label" htmlFor="c-interest">
                            I'm interested in <span aria-hidden="true">*</span>
                          </label>
                          <select
                            id="c-interest"
                            className={`form-select ${errors.interest ? "is-invalid" : ""}`}
                            value={data.interest}
                            onChange={set("interest")}
                            required
                            aria-invalid={errors.interest ? true : undefined}
                            aria-describedby={errors.interest ? "c-interest-err" : undefined}
                          >
                            <option value="">Select a service…</option>
                            {services.map((s) => (
                              <option key={s.slug} value={s.fullName}>
                                {s.name} — {s.fullName}
                              </option>
                            ))}
                            <option value="Free AI Visibility Audit">
                              Free AI Visibility Audit
                            </option>
                            <option value="Something else">Something else</option>
                          </select>
                          {errors.interest && (
                            <div className="invalid-feedback d-block" id="c-interest-err">
                              {errors.interest}
                            </div>
                          )}
                        </div>
                        <div className="col-sm-6">
                          <label className="form-label" htmlFor="c-budget">
                            Budget range
                          </label>
                          <select
                            id="c-budget"
                            className="form-select"
                            value={data.budget}
                            onChange={set("budget")}
                          >
                            <option value="">Prefer not to say</option>
                            {BUDGETS.map((b) => (
                              <option key={b} value={b}>
                                {b}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-12">
                          <label className="form-label" htmlFor="c-message">
                            How can we help? <span aria-hidden="true">*</span>
                          </label>
                          <textarea
                            id="c-message"
                            className={`form-control ${errors.message ? "is-invalid" : ""}`}
                            rows={5}
                            placeholder="Your goals, your website, and what's not working right now…"
                            value={data.message}
                            onChange={set("message")}
                            required
                            aria-invalid={errors.message ? true : undefined}
                            aria-describedby={errors.message ? "c-message-err" : undefined}
                          />
                          {errors.message && (
                            <div className="invalid-feedback d-block" id="c-message-err">
                              {errors.message}
                            </div>
                          )}
                        </div>
                        <div className="col-12 mt-4">
                          <button
                            type="submit"
                            className="btn btn-brand btn-lg-cta w-100 justify-content-center"
                          >
                            Send Message
                            <i className="bi bi-send-fill" aria-hidden="true"></i>
                          </button>
                          <p className="privacy-note">
                            <i className="bi bi-shield-lock-fill" aria-hidden="true"></i>
                            <span>
                              Your details are used only to reply to this enquiry. No newsletters,
                              no lists, no third-party sharing.
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
