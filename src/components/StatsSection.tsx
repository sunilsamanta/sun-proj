import Counter from "./Counter";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { whyUs } from "../data/site";

/** "Why us" band: sticky 25+ years block beside the five differentiators. */
export default function StatsSection() {
  return (
    <section className="section" aria-labelledby="why-us-title">
      <div className="container">
        <SectionTitle
          eyebrow="02 · Why us"
          title={
            <>
              Why teams choose to build with 25+ years behind them
            </>
          }
          lead="Visibility in the AI era compounds for brands that understand all three layers: the machine, the message, and the user."
          className="mb-4"
        />
        <h2 id="why-us-title" className="visually-hidden">
          25+ Years of Digital Experience
        </h2>

        <div className="stats-layout">
          <Reveal>
            <div className="stats-big">
              <div className="stats-num">
                <Counter value={25} />
                <span className="plus">+</span>
              </div>
              <h3>Years of Digital Experience</h3>
              <p>
                From the first era of search through responsive design, the mobile web, and now
                generative engines — every shift in how people find things, shipped and measured.
              </p>
              <div className="stats-since">
                <span className="dot-live" aria-hidden="true"></span>
                2000 — Present · 3 eras of search
              </div>
            </div>
          </Reveal>

          <div>
            {whyUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <div className="stat-row">
                  <span className="icon-tile" aria-hidden="true">
                    <i className={`bi ${item.icon}`}></i>
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
