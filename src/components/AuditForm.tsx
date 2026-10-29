import { useState, type FormEvent } from "react";
import { site } from "../data/site";

interface FormData {
  name: string;
  company: string;
  email: string;
  website: string;
  industry: string;
  service: string;
}

type Errors = Partial<Record<keyof FormData, string>>;

const INDUSTRIES = [
  "B2B SaaS",
  "E-commerce / Retail",
  "Professional Services",
  "Healthcare",
  "Education",
  "Financial Services",
  "Media & Publishing",
  "Manufacturing",
  "Other",
];

const INITIAL: FormData = {
  name: "",
  company: "",
  email: "",
  website: "",
  industry: "",
  service: "",
};

function validate(data: FormData): Errors {
  const errors: Errors = {};
  if (data.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!data.email.trim()) errors.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()))
    errors.email = "Please enter a valid email address, for example name@company.com.";
  if (!data.website.trim()) errors.website = "Please enter your website URL.";
  else {
    const url = data.website.trim();
    const withProto = /^https?:\/\//i.test(url) ? url : `https://${url}`;
    try {
      const parsed = new URL(withProto);
      if (!parsed.hostname.includes(".")) errors.website = "Please enter a valid website URL.";
    } catch {
      errors.website = "Please enter a valid website URL.";
    }
  }
  if (!data.industry) errors.industry = "Please select your industry.";
  return errors;
}

/** High-conversion audit request form with inline validation + success state. */
export default function AuditForm() {
  const [data, setData] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof FormData) => (e: { target: { value: string } }) => {
    setData((d) => ({ ...d, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(data);
    setErrors(errs);
    const firstKey = (Object.keys(errs) as (keyof FormData)[])[0];
    if (!firstKey) {
      setSubmitted(true);
      return;
    }
    // WCAG 3.3.1: move focus to the first field that needs attention
    window.setTimeout(() => document.getElementById(`audit-${firstKey}`)?.focus(), 0);
  };
  const errorCount = Object.values(errors).filter(Boolean).length;

  if (submitted) {
    return (
      <div className="form-card">
        <div className="success-panel" role="status" aria-live="polite">
          <div className="check-ring">
            <i className="bi bi-check-lg" aria-hidden="true"></i>
          </div>
          <h3>Audit request received</h3>
          <p>
            Thanks, {data.name.split(" ")[0] || "there"}. We're already pulling your visibility
            footprint across search and AI platforms.
          </p>
          <ol className="success-next">
            <li>
              <span className="n">01</span>
              <span>
                Visibility analysis runs across search engines and AI answer platforms.
              </span>
            </li>
            <li>
              <span className="n">02</span>
              <span>Gaps and quick wins are prioritized by impact and effort.</span>
            </li>
            <li>
              <span className="n">03</span>
              <span>
                Your report lands in your inbox within 3–5 business days
                {data.email ? ` at ${data.email}` : ""}.
              </span>
            </li>
          </ol>
          <p className="mt-3" style={{ fontSize: "0.82rem" }}>
            Prefer to talk first?{" "}
            <a href={`mailto:${site.email}`}>
              {site.email} <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={onSubmit} noValidate aria-labelledby="audit-form-title">
      <div className="form-card-head">
        <h3 id="audit-form-title">Request Your Free Audit</h3>
        <p>Two minutes to submit. A clear, prioritized report within 3–5 business days.</p>
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
        <p className="form-required-note">
          Fields marked <span aria-hidden="true">*</span>
          <span className="visually-hidden">with an asterisk</span> are required.
        </p>
        <div className="row g-3">
          <div className="col-sm-6">
            <label className="form-label" htmlFor="audit-name">
              Name <span aria-hidden="true">*</span>
            </label>
            <input
              id="audit-name"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              type="text"
              autoComplete="name"
              required
              value={data.name}
              onChange={set("name")}
              aria-invalid={errors.name ? true : undefined}
              aria-describedby={errors.name ? "audit-name-err" : undefined}
            />
            {errors.name && (
              <div className="invalid-feedback d-block" id="audit-name-err">
                {errors.name}
              </div>
            )}
          </div>
          <div className="col-sm-6">
            <label className="form-label" htmlFor="audit-company">
              Company
            </label>
            <input
              id="audit-company"
              className="form-control"
              type="text"
              autoComplete="organization"
              value={data.company}
              onChange={set("company")}
            />
          </div>
          <div className="col-12">
            <label className="form-label" htmlFor="audit-email">
              Email <span aria-hidden="true">*</span>
            </label>
            <input
              id="audit-email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              type="email"
              autoComplete="email"
              required
              value={data.email}
              onChange={set("email")}
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={errors.email ? "audit-email-err" : undefined}
            />
            {errors.email && (
              <div className="invalid-feedback d-block" id="audit-email-err">
                {errors.email}
              </div>
            )}
          </div>
          <div className="col-12">
            <label className="form-label" htmlFor="audit-website">
              Website URL <span aria-hidden="true">*</span>
            </label>
            <input
              id="audit-website"
              className={`form-control ${errors.website ? "is-invalid" : ""}`}
              type="text"
              inputMode="url"
              placeholder="yourcompany.com"
              autoComplete="url"
              required
              value={data.website}
              onChange={set("website")}
              aria-invalid={errors.website ? true : undefined}
              aria-describedby={errors.website ? "audit-website-err" : undefined}
            />
            {errors.website && (
              <div className="invalid-feedback d-block" id="audit-website-err">
                {errors.website}
              </div>
            )}
          </div>
          <div className="col-sm-6">
            <label className="form-label" htmlFor="audit-industry">
              Industry <span aria-hidden="true">*</span>
            </label>
            <select
              id="audit-industry"
              className={`form-select ${errors.industry ? "is-invalid" : ""}`}
              required
              value={data.industry}
              onChange={set("industry")}
              aria-invalid={errors.industry ? true : undefined}
              aria-describedby={errors.industry ? "audit-industry-err" : undefined}
            >
              <option value="">Select industry…</option>
              {INDUSTRIES.map((ind) => (
                <option key={ind} value={ind}>
                  {ind}
                </option>
              ))}
            </select>
            {errors.industry && (
              <div className="invalid-feedback d-block" id="audit-industry-err">
                {errors.industry}
              </div>
            )}
          </div>
          <div className="col-sm-6">
            <label className="form-label" htmlFor="audit-service">
              Main service / product
            </label>
            <input
              id="audit-service"
              className="form-control"
              type="text"
              placeholder="e.g. CRM software, skincare"
              value={data.service}
              onChange={set("service")}
            />
          </div>
          <div className="col-12 mt-4">
            <button type="submit" className="btn btn-brand btn-lg-cta w-100 justify-content-center">
              Get My Free AI Visibility Audit
              <i className="bi bi-arrow-right" aria-hidden="true"></i>
            </button>
            <p className="privacy-note">
              <i className="bi bi-shield-lock-fill" aria-hidden="true"></i>
              <span>
                Your details are used only to prepare your audit. No newsletters, no data
                sharing — and you can request deletion at any time.
              </span>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}
