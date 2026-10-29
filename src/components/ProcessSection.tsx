import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import type { ProcessStep } from "../data/site";

interface ProcessSectionProps {
  eyebrow: string;
  title: string;
  lead?: string;
  steps: ProcessStep[];
}

/** Four-step process strip (used on Home and the Audit page). */
export default function ProcessSection({ eyebrow, title, lead, steps }: ProcessSectionProps) {
  return (
    <div>
      <SectionTitle eyebrow={eyebrow} title={title} lead={lead} className="mb-4" />
      <div className="process-grid">
        {steps.map((step, i) => (
          <Reveal key={step.num} delay={i * 110}>
            <div className="process-step h-100">
              <div className="process-num" aria-hidden="true">
                {step.num}
              </div>
              <h3>
                {step.title}
                <span className="visually-hidden">, step {i + 1} of {steps.length}</span>
              </h3>
              <p>{step.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
