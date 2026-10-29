import { useCallback, useEffect, useRef, useState } from "react";
import { useMotion } from "./MotionContext";

const DURATION = 6000;

const cdn = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1920&h=1080&q=76`;

export const heroBgSlides = [
  {
    id: "ai-search",
    label: "AI Search Engines",
    image: cdn(30530406),
    alt: "Close-up of a generative AI chat interface on a laptop screen in low light, representing AI search engines.",
  },
  {
    id: "revenue",
    label: "Traffic Into Revenue",
    image: cdn(3183153),
    alt: "A business team analysing growth charts and analytics in a meeting, representing turning traffic into revenue.",
  },
  {
    id: "visibility",
    label: "AI-Powered Digital Visibility",
    image: cdn(17489160),
    alt: "Illuminated blue server racks in a modern data centre, representing AI-powered digital visibility infrastructure.",
  },
];

/**
 * Crossfading real-photo background for the hero section.
 * Subtle Ken Burns zoom per slide + a strong navy scrim keeps
 * the foreground text fully readable at all times.
 */
export default function HeroBgSlider() {
  const [active, setActive] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const { reduced } = useMotion();
  const paused = userPaused || reduced;
  const touchX = useRef<number | null>(null);
  const total = heroBgSlides.length;

  const go = useCallback(
    (dir: 1 | -1) => setActive((p) => (p + dir + total) % total),
    [total]
  );

  // Auto-advance only while not paused (WCAG 2.2.2 Pause, Stop, Hide)
  useEffect(() => {
    if (paused) return;
    const t = window.setTimeout(() => setActive((p) => (p + 1) % total), DURATION);
    return () => window.clearTimeout(t);
  }, [active, total, paused]);

  return (
    <>
      <div
        className="hero-bg"
        aria-hidden="true"
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const d = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(d) > 50) go(d > 0 ? -1 : 1);
          touchX.current = null;
        }}
      >
        {heroBgSlides.map((s, i) => (
          <div key={s.id} className={`hero-bg-slide ${i === active ? "is-active" : ""}`}>
            <img
              src={s.image}
              alt=""
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          </div>
        ))}
        <span className="hero-bg-scrim"></span>
        <span className="hero-bg-grid"></span>
      </div>

      {/* Prev / next arrows + swipe */}
      <button
        type="button"
        className="hero-bg-arrow prev"
        onClick={() => go(-1)}
        aria-label="Previous background image"
      >
        <i className="bi bi-chevron-left" aria-hidden="true"></i>
      </button>
      <button
        type="button"
        className="hero-bg-arrow next"
        onClick={() => go(1)}
        aria-label="Next background image"
      >
        <i className="bi bi-chevron-right" aria-hidden="true"></i>
      </button>

      {/* Slideshow controls: pause/play + theme buttons */}
      <div className="hero-bg-tabs" role="group" aria-label="Background slideshow controls">
        <button
          type="button"
          className="hero-bg-tab hero-bg-pause"
          aria-pressed={paused}
          onClick={() => setUserPaused((v) => !v)}
          disabled={reduced}
          title={reduced ? "Animations are paused site-wide" : undefined}
        >
          <i className={`bi ${paused ? "bi-play-fill" : "bi-pause-fill"}`} aria-hidden="true"></i>
          <span className="visually-hidden">
            {paused ? "Play background slideshow" : "Pause background slideshow"}
          </span>
        </button>
        {heroBgSlides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            aria-pressed={i === active}
            className={`hero-bg-tab ${i === active ? "is-active" : ""}`}
            onClick={() => setActive(i)}
          >
            <span className="hbt-dot" aria-hidden="true"></span>
            <span className="visually-hidden">Show background: </span>
            {s.label}
          </button>
        ))}
      </div>
    </>
  );
}
