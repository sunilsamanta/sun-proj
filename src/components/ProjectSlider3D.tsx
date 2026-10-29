import { useState, useEffect, useRef, useCallback, type TouchEvent, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { caseStudies } from "../data/caseStudies";
import { useMotion } from "./MotionContext";

/**
 * 3D Project Perspective Slider inspired by himanshuaswal.in
 * Features:
 * - 3D angled perspective on side cards (rotateY, scale, translate)
 * - Rounded white cards with pastel grid mockup hero and editorial bottom
 * - Swipe / drag gestures (mouse + touch)
 * - Click side cards to center
 * - Arrow buttons + live dot indicators
 * - Accessible keyboard navigation
 */
export default function ProjectSlider3D() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const { reduced } = useMotion();
  const autoplayOff = userPaused || reduced;
  const dragStartX = useRef<number | null>(null);
  const dragDeltaX = useRef<number>(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const total = caseStudies.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-advance every 5.5s; stops on hover, keyboard focus, drag, user pause or reduced motion
  useEffect(() => {
    if (autoplayOff || isHovered || hasFocus || isDragging) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(timer);
  }, [autoplayOff, isHovered, hasFocus, isDragging, nextSlide]);

  const goToSlide = (idx: number) => {
    setActiveIndex(idx);
  };

  // Keyboard navigation when slider is focused
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  };

  // Touch handlers
  const handleTouchStart = (e: TouchEvent) => {
    dragStartX.current = e.touches[0].clientX;
    dragDeltaX.current = 0;
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (dragStartX.current !== null) {
      dragDeltaX.current = e.touches[0].clientX - dragStartX.current;
    }
  };

  const handleTouchEnd = () => {
    if (Math.abs(dragDeltaX.current) > 50) {
      if (dragDeltaX.current > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    dragStartX.current = null;
    dragDeltaX.current = 0;
  };

  // Mouse drag handlers
  const handleMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragDeltaX.current = 0;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && dragStartX.current !== null) {
      dragDeltaX.current = e.clientX - dragStartX.current;
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      if (Math.abs(dragDeltaX.current) > 60) {
        if (dragDeltaX.current > 0) {
          prevSlide();
        } else {
          nextSlide();
        }
      }
      setIsDragging(false);
      dragStartX.current = null;
      dragDeltaX.current = 0;
    }
  };

  // Calculate circular offset for 3D positioning
  const getOffset = (index: number) => {
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section
      className="section-slider-3d"
      aria-roledescription="carousel"
      aria-labelledby="work-carousel-title"
      onKeyDown={handleKeyDown}
      onFocus={() => setHasFocus(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setHasFocus(false);
      }}
    >
      <div className="slider-backdrop-grid" aria-hidden="true"></div>
      <div className="slider-ambient-glow" aria-hidden="true"></div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Section Header with Controls */}
        <div className="slider-header d-flex flex-wrap align-items-end justify-content-between gap-3 mb-4">
          <div>
            <span className="eyebrow text-accent-light">
              <span className="rule" aria-hidden="true"></span>
              Selected Work · 05
            </span>
            <h2 className="slider-title" id="work-carousel-title">
              Before <span className="arrow-sym" aria-hidden="true">→</span>
              <span className="visually-hidden">, </span> Strategy{" "}
              <span className="arrow-sym" aria-hidden="true">→</span>
              <span className="visually-hidden">, </span> After{" "}
              <span className="arrow-sym" aria-hidden="true">→</span>
              <span className="visually-hidden">, </span> Results
            </h2>
            <p className="slider-lead mb-0">
              Transforming businesses from invisible to cited authorities across search and AI answer engines.
            </p>
          </div>

          <div className="slider-controls-group d-flex align-items-center gap-3">
            <div className="slider-counter" aria-hidden="true">
              <span className="active-num">{String(activeIndex + 1).padStart(2, "0")}</span>
              <span className="divider">/</span>
              <span className="total-num">{String(total).padStart(2, "0")}</span>
            </div>

            <div className="slider-nav-btns d-flex gap-2">
              <button
                type="button"
                className="slider-nav-btn"
                onClick={() => setUserPaused((v) => !v)}
                aria-pressed={autoplayOff}
                disabled={reduced}
                aria-label={autoplayOff ? "Play case study slideshow" : "Pause case study slideshow"}
              >
                <i className={`bi ${autoplayOff ? "bi-play-fill" : "bi-pause-fill"}`} aria-hidden="true"></i>
              </button>
              <button
                type="button"
                className="slider-nav-btn prev"
                onClick={prevSlide}
                aria-label="Previous case study"
              >
                <i className="bi bi-arrow-left" aria-hidden="true"></i>
              </button>
              <button
                type="button"
                className="slider-nav-btn next"
                onClick={nextSlide}
                aria-label="Next case study"
              >
                <i className="bi bi-arrow-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>

        {/* 3D Carousel Stage */}
        <div
          className="slider-stage-3d"
          ref={sliderRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            handleMouseUp();
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <div className="slider-cards-wrapper">
            {caseStudies.map((study, idx) => {
              const offset = getOffset(idx);
              const isActive = offset === 0;
              const isPrev = offset === -1;
              const isNext = offset === 1;
              const isVisible = Math.abs(offset) <= 1;

              let cardClass = "slider-card-3d";
              if (isActive) cardClass += " is-active";
              else if (isPrev) cardClass += " is-prev";
              else if (isNext) cardClass += " is-next";
              else cardClass += " is-hidden";

              return (
                <div
                  key={study.id}
                  className={cardClass}
                  onClick={() => {
                    if (!isActive) goToSlide(idx);
                  }}
                  style={{
                    "--offset": offset,
                    cursor: !isActive && isVisible ? "pointer" : "default",
                  } as React.CSSProperties}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${idx + 1} of ${total}: ${study.sliderSubtitle}`}
                  inert={!isActive}
                >
                  <article className="slider-card-inner">
                    {/* Project image banner */}
                    <div className="slider-card-banner slider-card-photo">
                      <img
                        className="slider-card-img"
                        src={study.sliderImage}
                        alt={study.sliderImageAlt}
                        loading={isActive ? "eager" : "lazy"}
                        decoding="async"
                        draggable={false}
                      />
                      <span className="slider-img-scrim" aria-hidden="true"></span>

                      {/* Header tags over image */}
                      <div className="banner-top-row d-flex justify-content-between align-items-center">
                        <div className="banner-tags d-flex flex-wrap gap-2">
                          {study.sliderTags.map((tag) => (
                            <span key={tag} className="banner-pill-tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="banner-badge-icon" aria-hidden="true">
                          <i className="bi bi-lightning-charge-fill"></i>
                        </span>
                      </div>

                      {/* Brand name pinned at the bottom of the image */}
                      <div className="banner-photo-brand">
                        <h3 className="banner-photo-heading">{study.sliderBrand}</h3>
                        <p className="banner-photo-quote">{study.sliderQuote}</p>
                      </div>
                    </div>

                    {/* Bottom Card Content */}
                    <div className="slider-card-body">
                      <div className="slider-card-meta d-flex align-items-center justify-content-between">
                        <div className="card-number-tag">
                          <span className="card-num">{String(idx + 1).padStart(2, "0")}</span>
                          <span className="card-sep" aria-hidden="true">/</span>
                          <span className="visually-hidden">, year </span>
                          <span className="card-year">{study.sliderYear}</span>
                        </div>
                        <span className="card-industry-badge">{study.industry}</span>
                      </div>

                      <h4 className="slider-card-title">
                        {study.sliderSubtitle}
                      </h4>

                      <p className="slider-card-desc">
                        {study.preview.strategy} — resulting in {study.preview.after.toLowerCase()}.
                      </p>

                      <div className="slider-card-footer d-flex align-items-center justify-content-between pt-3 mt-3 border-top">
                        <Link to={`/case-studies#${study.slug}`} className="slider-view-link">
                          <span>view case study</span>
                          <span className="visually-hidden">: {study.sliderSubtitle}</span>
                          <i className="bi bi-arrow-right ms-2" aria-hidden="true"></i>
                        </Link>

                        <div className="slider-mini-metrics d-flex gap-2">
                          {study.results.slice(0, 2).map((res) => (
                            <span key={res.label} className="slider-metric-pill">
                              <strong>{res.value}</strong>
                              <span className="visually-hidden"> {res.label}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Pagination Dots */}
        <div
          className="slider-dots-nav d-flex justify-content-center align-items-center gap-2 mt-4 pt-2"
          role="group"
          aria-label="Choose a case study"
        >
          {caseStudies.map((cs, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              className={`slider-dot-btn ${dotIdx === activeIndex ? "is-active" : ""}`}
              onClick={() => goToSlide(dotIdx)}
              aria-label={`Show case study ${dotIdx + 1}: ${cs.sliderSubtitle}`}
              aria-current={dotIdx === activeIndex ? "true" : undefined}
            >
              <span className="dot-inner" aria-hidden="true"></span>
            </button>
          ))}
        </div>

        {/* Announce slide changes only when the user is in control (not during autoplay) */}
        <p className="visually-hidden" aria-live={autoplayOff || hasFocus ? "polite" : "off"} aria-atomic="true">
          Case study {activeIndex + 1} of {total}: {caseStudies[activeIndex].sliderSubtitle}
        </p>

        {/* View all case studies CTA */}
        <div className="text-center mt-4">
          <Link to="/case-studies" className="btn btn-ghost btn-sm-cta">
            View All Case Studies ({total}) <i className="bi bi-arrow-right ms-1" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}

