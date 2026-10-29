import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

/**
 * Global motion preference (WCAG 2.2.2 Pause, Stop, Hide + 2.3.3 Animation from Interactions).
 * Defaults to the OS "reduce motion" setting and can be toggled by the user.
 * When reduced: carousels stop auto-advancing, marquees/floating elements freeze,
 * and decorative animations are disabled site-wide via the `reduce-motion` class.
 */
const STORAGE_KEY = "aum-reduce-motion";

interface MotionState {
  reduced: boolean;
  setReduced: (v: boolean) => void;
  toggle: () => void;
}

const MotionCtx = createContext<MotionState>({
  reduced: false,
  setReduced: () => {},
  toggle: () => {},
});

function initialPreference(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "1") return true;
    if (stored === "0") return false;
  } catch {
    /* storage unavailable — fall back to OS setting */
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function MotionProvider({ children }: { children: ReactNode }) {
  const [reduced, setReduced] = useState<boolean>(initialPreference);

  useEffect(() => {
    document.documentElement.classList.toggle("reduce-motion", reduced);
    try {
      window.localStorage.setItem(STORAGE_KEY, reduced ? "1" : "0");
    } catch {
      /* ignore */
    }
  }, [reduced]);

  return (
    <MotionCtx.Provider value={{ reduced, setReduced, toggle: () => setReduced((v) => !v) }}>
      {children}
    </MotionCtx.Provider>
  );
}

export const useMotion = () => useContext(MotionCtx);

/** Accessible toggle that pauses / resumes all non-essential motion. */
export function MotionToggle({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  const { reduced, toggle } = useMotion();
  return (
    <button
      type="button"
      className={`motion-toggle ${className}`}
      aria-pressed={reduced}
      onClick={toggle}
      title={reduced ? "Animations are paused" : "Pause all animations"}
    >
      <i className={`bi ${reduced ? "bi-play-circle" : "bi-pause-circle"}`} aria-hidden="true"></i>
      {compact ? (
        <span className="visually-hidden">{reduced ? "Resume animations" : "Pause animations"}</span>
      ) : (
        <span>{reduced ? "Resume animations" : "Pause animations"}</span>
      )}
    </button>
  );
}
