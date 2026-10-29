import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { prefersReducedMotion } from "./Reveal";

/** Scrolls to top on route change; to the hash target when navigating to an anchor. */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const t = window.setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({
            behavior: prefersReducedMotion() ? "auto" : "smooth",
            block: "start",
          });
          return;
        }
        window.scrollTo({ top: 0, behavior: "auto" });
      }, 60);
      return () => window.clearTimeout(t);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}
