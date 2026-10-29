import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import Scramble from "../components/Scramble";
import AIVisual from "../components/AIVisual";
import HeroBgSlider from "../components/HeroBgSlider";
import Marquee from "../components/Marquee";
import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
import ServiceCard from "../components/ServiceCard";
import StatsSection from "../components/StatsSection";
import ProcessSection from "../components/ProcessSection";
import ProjectSlider3D from "../components/ProjectSlider3D";
import InsightCard from "../components/InsightCard";
import BlogCard from "../components/BlogCard";
import CTASection from "../components/CTASection";
import { services } from "../data/services";
import { insights } from "../data/insights";
import { blogPosts } from "../data/blog";
import { processSteps, eras } from "../data/site";

const HERO_SUB = ["SEO", "GEO", "AEO", "UX", "Digital Transformation"];

export default function HomePage() {
  return (
    <>
      <PageMeta
        title="Aum Web Solutions — SEO, GEO & AEO Consulting"
        description="Aum Web Solutions — 25+ years of digital experience. SEO, GEO, AEO, UX, content strategy and digital transformation — making your brand visible across search engines and AI-powered answers."
        path="/"
      />

      {/* ---------- Hero (real-photo background slider behind) ---------- */}
      <section className="hero hero-dark" aria-labelledby="hero-title">
        <HeroBgSlider />
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="eyebrow">
                <span className="dot-live" aria-hidden="true"></span>
                Aum Web Solutions · 25+ Years in Digital
              </span>
              <h1 className="hero-title" id="hero-title">
                <span className="d-block hero-title-line">
                  <Scramble text="AI-Powered" />
                </span>
                <span className="d-block hero-title-line">
                  <span className="accent-word">
                    <Scramble text="Digital Visibility" startDelay={380} />
                  </span>
                </span>
              </h1>
              <p className="hero-sub" aria-label="SEO, GEO, AEO, UX, Digital Transformation">
                {HERO_SUB.map((item, i) => (
                  <span key={item} className="d-inline-flex align-items-center gap-2">
                    {i > 0 && (
                      <span className="sep" aria-hidden="true">
                        ●
                      </span>
                    )}
                    {item}
                  </span>
                ))}
              </p>
              <p className="hero-text">
                Helping businesses become more visible, discoverable, and valuable across search
                engines, AI-powered platforms, and digital experiences.
              </p>
              <div className="hero-ctas">
                <Link to="/audit" className="btn btn-brand btn-lg-cta">
                  Get Free AI Visibility Audit
                  <i className="bi bi-arrow-right" aria-hidden="true"></i>
                </Link>
                <Link to="/services" className="btn btn-ghost btn-lg-cta">
                  Explore Services
                </Link>
              </div>
              <div className="hero-trust">
                <span>
                  <i className="bi bi-patch-check-fill" aria-hidden="true"></i>
                  25+ years across every era of search
                </span>
                <span>
                  <i className="bi bi-patch-check-fill" aria-hidden="true"></i>
                  AI &amp; traditional search, combined
                </span>
                <span>
                  <i className="bi bi-patch-check-fill" aria-hidden="true"></i>
                  Strategy through execution
                </span>
              </div>
            </div>
            <div className="col-lg-6">
              <AIVisual />
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* ---------- Expertise ---------- */}
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="01 · Expertise"
            title="Transforming Digital Visibility into Business Growth"
            lead="Six disciplines, one outcome: a brand that is found, understood and chosen — by humans, by search engines, and by AI."
          />
          <div className="row g-4">
            {services.map((s, i) => (
              <div className="col-md-6 col-xl-4" key={s.slug}>
                <ServiceCard service={s} delay={(i % 3) * 100} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Why us ---------- */}
      <StatsSection />

      {/* ---------- AI search ---------- */}
      <section className="section section-dark">
        <div className="container">
          <SectionTitle
            eyebrow="03 · The shift"
            title="Is Your Brand Ready for AI-Powered Search?"
            lead="Search is evolving fast. Questions are increasingly answered before a single click — by AI assistants and generative engines that synthesize an answer and cite a handful of sources. If your brand isn't understood, it isn't recommended."
          />
          <div className="era-grid">
            {eras.map((era, i) => (
              <Reveal key={era.label} delay={i * 120} className="h-100">
                <div className={`era-card h-100 ${era.now ? "now" : ""}`}>
                  <span className="period">{era.period}</span>
                  <div className="d-flex justify-content-between align-items-start mt-2">
                    <i className={`bi ${era.icon}`} aria-hidden="true"></i>
                    {era.now && (
                      <span className="dot-live" aria-label="Current era"></span>
                    )}
                  </div>
                  <h3>{era.label}</h3>
                  <p>{era.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-5">
              <Link to="/audit" className="btn btn-brand btn-lg-cta">
                Check Your AI Visibility — Free
                <i className="bi bi-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section className="section" aria-label="Working process">
        <div className="container">
          <ProcessSection
            eyebrow="04 · Process"
            title="A proven path from invisible to indispensable"
            lead="No black boxes. A clear sequence with deliverables at every stage."
            steps={processSteps}
          />
        </div>
      </section>

      {/* ---------- 3D Project Slider (inspired by himanshuaswal.in) ---------- */}
      <ProjectSlider3D />

      {/* ---------- Insights preview ---------- */}
      <section className="section" style={{ paddingTop: 0 }} aria-label="Latest insights">
        <div className="container">
          <div className="d-flex flex-wrap align-items-end justify-content-between gap-3 mb-5">
            <SectionTitle
              eyebrow="06 · Insights"
              title="Recent thinking from LinkedIn"
              className="mb-0"
            />
            <Reveal delay={150}>
              <Link to="/insights" className="btn btn-line">
                View All Insights
                <i className="bi bi-arrow-right" aria-hidden="true"></i>
              </Link>
            </Reveal>
          </div>
          <div className="row g-4">
            {insights.slice(0, 3).map((ins, i) => (
              <div className="col-md-6 col-xl-4" key={ins.id}>
                <InsightCard insight={ins} delay={i * 110} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Blog preview ---------- */}
      <section className="section" style={{ paddingTop: 0 }} aria-label="From the blog">
        <div className="container">
          <div className="d-flex flex-wrap align-items-end justify-content-between gap-3 mb-5">
            <SectionTitle
              eyebrow="07 · Blog"
              title="Playbooks from the frontier of search"
              className="mb-0"
            />
            <Reveal delay={150}>
              <Link to="/blog" className="btn btn-line">
                Visit the Blog
                <i className="bi bi-arrow-right" aria-hidden="true"></i>
              </Link>
            </Reveal>
          </div>
          <div className="row g-4">
            {blogPosts.slice(0, 3).map((post, i) => (
              <div className="col-md-6 col-xl-4" key={post.id}>
                <BlogCard post={post} delay={i * 110} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Final CTA ---------- */}
      <CTASection
        eyebrow="Final step"
        title="Make Your Digital Presence AI-Ready"
        text="Let's build a digital presence that is easier to find, understand, trust, and engage with."
        primary={{ label: "Start a Conversation", to: "/contact", icon: "bi-chat-dots-fill" }}
        secondary={{ label: "Get the Free Audit", to: "/audit" }}
      />
    </>
  );
}
