import type { CSSProperties } from "react";
import type { PageBanner } from "../data/pageBanners";

/** Shared photographic layer for primary page heroes. */
export default function PageHeroMedia({ image, alt, position }: PageBanner) {
  return (
    <div className="page-hero-media">
      <img
        src={image}
        alt={alt}
        fetchPriority="high"
        decoding="async"
        style={{ objectPosition: position ?? "center" } as CSSProperties}
      />
      <span className="page-hero-scrim" aria-hidden="true"></span>
      <span className="page-hero-photo-grid" aria-hidden="true"></span>
    </div>
  );
}