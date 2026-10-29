import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  const location = useLocation();
  const firstRender = useRef(true);

  /*
   * WCAG 2.4.3 Focus Order / 4.1.3 Status Messages:
   * on client-side route changes, move focus to the new page's <h1>
   * so keyboard and screen-reader users land at the start of the new content.
   */
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (location.hash) return; // anchor navigation handles its own scroll target
    const t = window.setTimeout(() => {
      const heading =
        document.querySelector<HTMLElement>("#main h1") ??
        document.querySelector<HTMLElement>("#main");
      if (!heading) return;
      if (!heading.hasAttribute("tabindex")) heading.setAttribute("tabindex", "-1");
      heading.focus({ preventScroll: true });
    }, 80);
    return () => window.clearTimeout(t);
  }, [location.pathname, location.hash]);

  return (
    <div id="top">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <ScrollToTop />
      <Header />
      <main id="main" tabIndex={-1} className="page-enter" key={location.pathname}>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}
