import { useEffect, useState } from "react";
import { prefersReducedMotion, useInView } from "./Reveal";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

/** Number count-up when scrolled into view. Instant with reduced motion. */
export default function Counter({
  value,
  suffix = "",
  duration = 1400,
  className,
}: CounterProps) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion()) {
      setN(value);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      <span aria-hidden="true">
        {n}
        {suffix}
      </span>
      <span className="visually-hidden">
        {value}
        {suffix}
      </span>
    </span>
  );
}
