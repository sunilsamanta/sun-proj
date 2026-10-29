import type { ReactNode } from "react";
import type { Insight, InsightCategory } from "../data/insights";
import Reveal from "./Reveal";

const CATEGORY_COLORS: Record<InsightCategory, string> = {
  SEO: "#056492",
  GEO: "#0787AE",
  AEO: "#E4AF49",
  UX: "#4E8FA8",
  AI: "#077173",
  "Digital Transformation": "#053358",
  "Digital Marketing": "#C9902F",
};function hashSeed(str: string): number {
  let h = 7;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) % 9973;
  return h;
}

function makeRng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

/**
 * Deterministic abstract cover art per article (SVG, no images needed).
 * Four pattern families: radar rings, node networks, waveforms, grids.
 */
function ArticleThumb({ insight }: { insight: Insight }) {
  const seed = hashSeed(insight.id);
  const rng = makeRng(seed);
  const color = CATEGORY_COLORS[insight.category];
  const pattern = seed % 4;
  const w = 640;
  const h = 360;

  let art: ReactNode = null;

  if (pattern === 0) {
    // radar rings
    const cx = w * (0.35 + rng() * 0.3);
    const cy = h * (0.35 + rng() * 0.3);
    art = (
      <>
        {[70, 110, 150, 195].map((r) => (
          <circle key={r} cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeOpacity={0.5 - r / 500} strokeWidth="1.4" />
        ))}
        <line x1={cx - 230} y1={cy} x2={cx + 230} y2={cy} stroke={color} strokeOpacity="0.25" />
        <line x1={cx} y1={cy - 230} x2={cx} y2={cy + 230} stroke={color} strokeOpacity="0.25" />
        <circle cx={cx} cy={cy} r="7" fill={color} />
        <circle cx={cx + 120} cy={cy - 70} r="5" fill={color} fillOpacity="0.85" />
      </>
    );
  } else if (pattern === 1) {
    // node network
    const pts = Array.from({ length: 9 }, () => ({
      x: 60 + rng() * (w - 120),
      y: 50 + rng() * (h - 100),
    }));
    art = (
      <>
        {pts.map((p, i) =>
          pts
            .slice(i + 1)
            .slice(0, 2)
            .map((q, j) => (
              <line key={`${i}-${j}`} x1={p.x} y1={p.y} x2={q.x} y2={q.y} stroke={color} strokeOpacity="0.35" strokeWidth="1.2" />
            ))
        )}
        {pts.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={i % 3 === 0 ? 7 : 4} fill={color} fillOpacity={i % 3 === 0 ? 1 : 0.6} />
        ))}
      </>
    );
  } else if (pattern === 2) {
    // waveform
    const bars = Array.from({ length: 34 }, () => 40 + rng() * (h - 120));
    art = (
      <>
        <line x1="0" y1={h / 2} x2={w} y2={h / 2} stroke={color} strokeOpacity="0.3" />
        {bars.map((b, i) => (
          <rect key={i} x={20 + i * 18} y={(h - b) / 2} width="7" height={b} rx="3.5" fill={color} fillOpacity={0.35 + (b / (h - 120)) * 0.65} />
        ))}
      </>
    );
  } else {
    // highlighted grid
    const cols = 8;
    const rows = 5;
    const cw = w / cols;
    const ch = h / rows;
    art = (
      <>
        {Array.from({ length: cols * rows }, (_, i) => {
          const x = i % cols;
          const y = Math.floor(i / cols);
          const lit = rng() > 0.82;
          return (
            <rect
              key={i}
              x={x * cw + cw / 2 - 9}
              y={y * ch + ch / 2 - 9}
              width="18"
              height="18"
              rx="4"
              fill={lit ? color : "none"}
              stroke={color}
              strokeOpacity={lit ? 0 : 0.22}
            />
          );
        })}
      </>
    );
  }

  return (
    <svg viewBox={`0 0 ${w} ${h}`} aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id={`glow-${insight.id}`} cx="75%" cy="20%" r="80%">
          <stop offset="0%" stopColor={color} stopOpacity="0.22" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width={w} height={h} fill="#04243A" />
      <rect width={w} height={h} fill={`url(#glow-${insight.id})`} />
      {art}
    </svg>
  );
}

interface InsightCardProps {
  insight: Insight;
  delay?: number;
}

export default function InsightCard({ insight, delay = 0 }: InsightCardProps) {
  const date = new Date(insight.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Reveal delay={delay} className="h-100">
      <article className="card-insight">
        <div className="insight-thumb">
          <ArticleThumb insight={insight} />
        </div>
        <div className="insight-body">
          <span className="insight-chip">{insight.category}</span>
          <h3>{insight.title}</h3>
          <p>{insight.excerpt}</p>
          <div className="insight-meta">
            <span>
              <i className="bi bi-calendar3" aria-hidden="true"></i> {date}
            </span>
            <span>
              <i className="bi bi-clock" aria-hidden="true"></i> {insight.readTime}
            </span>
            <span>
              <i className="bi bi-linkedin" aria-hidden="true"></i> LinkedIn
            </span>
          </div>
          <a
            href={insight.url}
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-btn"
            aria-label={`Read on LinkedIn: ${insight.title} (opens in a new tab)`}
          >
            <i className="bi bi-linkedin" aria-hidden="true"></i>
            Read on LinkedIn
          </a>
        </div>
      </article>
    </Reveal>
  );
}
