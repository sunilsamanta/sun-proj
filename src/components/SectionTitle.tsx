import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionTitleProps {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  center?: boolean;
  className?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  lead,
  center = false,
  className = "",
}: SectionTitleProps) {
  return (
    <Reveal>
      <div className={`section-head ${center ? "center" : ""} ${className}`}>
        <span className="eyebrow">
          <span className="rule" aria-hidden="true" />
          {eyebrow}
        </span>
        <h2 className="section-title">
          <span className="line-reveal">
            <span>{title}</span>
          </span>
        </h2>
        {lead ? <p className="section-lead">{lead}</p> : null}
      </div>
    </Reveal>
  );
}
