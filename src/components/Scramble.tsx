import { useEffect, useState } from "react";
import { prefersReducedMotion } from "./Reveal";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#/<>";

interface ScrambleProps {
  text: string;
  className?: string;
  startDelay?: number;
}

/** "Decode" animation: characters resolve from noise into the final text. */
export default function Scramble({ text, className, startDelay = 0 }: ScrambleProps) {
  const [out, setOut] = useState(text);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setOut(text);
      return;
    }
    let raf = 0;
    let frame = 0;
    const total = 30;
    const startedAt = performance.now() + startDelay;

    const tick = (now: number) => {
      if (now < startedAt) {
        setOut(
          text
            .split("")
            .map((c) => (c === " " ? " " : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
            .join("")
        );
        raf = requestAnimationFrame(tick);
        return;
      }
      frame += 1;
      const revealed = Math.floor((frame / total) * text.length);
      setOut(
        text
          .split("")
          .map((c, i) => {
            if (c === " ") return " ";
            if (i < revealed) return c;
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join("")
      );
      if (frame < total) raf = requestAnimationFrame(tick);
      else setOut(text);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [text, startDelay]);

  return (
    <span className={className}>
      <span className="visually-hidden">{text}</span>
      <span aria-hidden="true">{out}</span>
    </span>
  );
}
