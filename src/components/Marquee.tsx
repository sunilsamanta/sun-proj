import { marqueeItems } from "../data/site";

/**
 * Decorative discipline ticker (hidden from assistive tech — the same disciplines are in the hero text).
 * Pauses on hover and freezes when motion is reduced (WCAG 2.2.2).
 */
export default function Marquee() {
  const items = (key: string) => (
    <div className="marquee-group" key={key}>
      {marqueeItems.map((item) => (
        <span className="marquee-item" key={item}>
          {item}
          <span className="diamond" aria-hidden="true">
            ◆
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items("a")}
        {items("b")}
      </div>
    </div>
  );
}
