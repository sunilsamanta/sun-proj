import { Link } from "react-router-dom";
import type { CaseStudy } from "../data/caseStudies";
import Reveal from "./Reveal";

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
  delay?: number;
}

/** Compact Before → Strategy → After card used in the home preview. */
export default function CaseStudyCard({ study, index, delay = 0 }: CaseStudyCardProps) {
  return (
    <Reveal delay={delay} className="h-100">
      <div className="card-case">
        <span className="case-tag">
          <span className="num">{String(index + 1).padStart(2, "0")}</span>
          {study.industry}
        </span>
        <h3>{study.title}</h3>

        <div className="case-flow">
          <div className="flow-line before">
            <span className="k">Before</span>
            <span className="v">{study.preview.before}</span>
          </div>
          <div className="flow-line strategy">
            <span className="k">Strategy</span>
            <span className="v">{study.preview.strategy}</span>
          </div>
          <div className="flow-line after">
            <span className="k">After</span>
            <span className="v">{study.preview.after}</span>
          </div>
        </div>

        <div className="case-metrics">
          <span className="visually-hidden">Result highlights (illustrative): </span>
          {study.results.map((r) => (
            <span className="metric-chip" key={r.label}>
              <b>{r.value}</b> {r.label.split(" (")[0]}
            </span>
          ))}
        </div>

        <Link to={`/case-studies#${study.slug}`} className="link-arrow">
          View full case study <i className="bi bi-arrow-right" aria-hidden="true"></i>
        </Link>
      </div>
    </Reveal>
  );
}
