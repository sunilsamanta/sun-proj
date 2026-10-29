import { Link } from "react-router-dom";
import Reveal from "./Reveal";

interface CTALink {
  label: string;
  to: string;
  icon?: string;
}

interface CTASectionProps {
  eyebrow?: string;
  title: string;
  text: string;
  primary: CTALink;
  secondary?: CTALink;
  id?: string;
}

export default function CTASection({
  eyebrow = "Next step",
  title,
  text,
  primary,
  secondary,
  id,
}: CTASectionProps) {
  return (
    <section className="cta-wrap" id={id} aria-label="Call to action">
      <div className="container">
        <Reveal>
          <div className="cta-band">
            <div className="cta-inner">
              <span className="eyebrow">
                <span className="rule" aria-hidden="true" />
                {eyebrow}
              </span>
              <h2>
                <span className="line-reveal">
                  <span>{title}</span>
                </span>
              </h2>
              <p>{text}</p>
              <div className="cta-actions">
                <Link to={primary.to} className="btn btn-brand btn-lg-cta">
                  {primary.label}
                  <i className={`bi ${primary.icon ?? "bi-arrow-right"}`} aria-hidden="true"></i>
                </Link>
                {secondary ? (
                  <Link to={secondary.to} className="btn btn-ghost btn-lg-cta">
                    {secondary.label}
                  </Link>
                ) : null}
              </div>
            </div>
            <i className="bi bi-arrow-right cta-arrow" aria-hidden="true"></i>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
