import { useEffect, useState, type CSSProperties } from "react";
import { useInView } from "./Reveal";
import { useMotion } from "./MotionContext";

const QUERIES = [
  "How do I get my brand cited by AI search?",
  "What is GEO — and why does it matter?",
  "Who leads in digital visibility consulting?",
];

function useTypedQuery() {
  const [text, setText] = useState("");
  const { reduced } = useMotion();

  useEffect(() => {
    if (reduced) {
      setText(QUERIES[0]);
      return;
    }
    let timeout = 0;
    let qi = 0;
    let pos = 0;
    let deleting = false;

    const tick = () => {
      const current = QUERIES[qi];
      let wait = 42;
      if (!deleting) {
        pos += 1;
        setText(current.slice(0, pos));
        if (pos >= current.length) {
          deleting = true;
          wait = 2400;
        }
      } else {
        pos -= 1;
        setText(current.slice(0, pos));
        if (pos <= 0) {
          deleting = false;
          qi = (qi + 1) % QUERIES.length;
          wait = 520;
        } else {
          wait = 18;
        }
      }
      timeout = window.setTimeout(tick, wait);
    };

    timeout = window.setTimeout(tick, 700);
    return () => window.clearTimeout(timeout);
  }, [reduced]);

  return text;
}

/**
 * Hero visual: a live "AI search console" showing a query being typed,
 * your brand scored and cited by a generative engine, competitors below.
 */
export default function AIVisual() {
  const typed = useTypedQuery();
  const { ref, inView } = useInView<HTMLDivElement>(0.25);

  return (
    <div
      ref={ref}
      className={`ai-visual ${inView ? "inview" : ""}`}
      role="img"
      aria-label="Illustration of an AI search engine answering a query about your brand: your brand is shown as the top cited source with a 92 out of 100 visibility score, while competitors rank lower."
    >
      <div className="ai-ring r1" aria-hidden="true"></div>
      <div className="ai-ring r2" aria-hidden="true"></div>
      <div className="ai-ring r3" aria-hidden="true"></div>
      <div className="ai-node n1" aria-hidden="true"></div>
      <div className="ai-node n2" aria-hidden="true"></div>
      <div className="ai-node n3" aria-hidden="true"></div>

      <div className="ai-console" aria-hidden="true">
        <div className="ai-console-bar">
          <span className="cdot a"></span>
          <span className="cdot"></span>
          <span className="cdot"></span>
          <span className="ai-console-title">ai-search</span>
          <span className="live-pill">
            <i className="bi bi-lightning-charge-fill"></i> LIVE
          </span>
        </div>

        <div className="ai-field">
          <i className="bi bi-search"></i>
          <span className="typed">{typed}</span>
          <span className="caret"></span>
        </div>

        <div className="ai-result win">
          <div className="ai-result-top">
            <span className="ai-result-badge">Cited</span>
            <strong>Your Brand</strong>
            <span className="ai-score">92/100</span>
          </div>
          <div className="ai-scorebar">
            <span style={{ "--score": "92%" } as CSSProperties}></span>
          </div>
          <div className="ai-cites">
            <span className="cite">
              <i className="bi bi-check2"></i>
              yourbrand.com
            </span>
            <span className="cite">
              <i className="bi bi-check2"></i>
              linkedin.com/in/…
            </span>
            <span className="cite">
              <i className="bi bi-check2"></i>
              industry-report.ai
            </span>
          </div>
        </div>

        <div className="ai-result">
          <div className="ai-result-top">
            <span className="ai-result-badge" style={{ background: "#8496A8" }}>
              #2
            </span>
            <strong style={{ opacity: 0.55 }}>competitor-a</strong>
            <span className="ai-score" style={{ color: "#8496A8" }}>
              61/100
            </span>
          </div>
        </div>

        <div className="ai-others">
          <i className="bi bi-info-circle"></i>
          <span>
            Also generated from: <b>4 sources</b> · your brand referenced <b>3×</b>
          </span>
        </div>
      </div>

      <span className="ai-chip c1" aria-hidden="true">
        <i className="bi bi-search"></i> SEO · Top 3
      </span>
      <span className="ai-chip c2" aria-hidden="true">
        <i className="bi bi-robot"></i> GEO · 92/100
      </span>
      <span className="ai-chip c3" aria-hidden="true">
        <i className="bi bi-chat-square-text"></i> AEO · Featured
      </span>
    </div>
  );
}
