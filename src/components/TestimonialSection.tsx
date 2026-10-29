import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { testimonials } from "../data/site";

export default function TestimonialSection() {
  return (
    <section className="section" aria-label="Testimonials">
      <div className="container">
        <SectionTitle
          eyebrow="Voices"
          title="What engagements feel like"
          center
          className="mb-4"
        />
        <div className="row g-4">
          {testimonials.map((t, i) => (
            <div className="col-md-4" key={t.role}>
              <Reveal delay={i * 110} className="h-100">
                <figure className="t-card mb-0">
                  <i className="bi bi-quote" aria-hidden="true"></i>
                  <blockquote className="t-quote mb-0">{t.quote}</blockquote>
                  <figcaption className="t-author">
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          ))}
        </div>
        <p className="t-note">
          Illustrative quotes shown for layout — replaced with approved client feedback on
          publication.
        </p>
      </div>
    </section>
  );
}
