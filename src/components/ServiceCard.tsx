import { useState } from "react";
import { Link } from "react-router-dom";
import type { Service } from "../data/services";
import Reveal from "./Reveal";

interface ServiceCardProps {
  service: Service;
  delay?: number;
}

/**
 * Service card used in grids. Real banner photo + overlapping icon
 * + short description + link to the dedicated service page.
 */
export default function ServiceCard({ service, delay = 0 }: ServiceCardProps) {
  const [src, setSrc] = useState(service.banner);

  return (
    <Reveal delay={delay} className="h-100">
      <article className="card-service has-media">
        <Link to={`/services/${service.slug}`} className="card-media" tabIndex={-1} aria-hidden="true">
          <img
            src={src}
            alt=""
            width="880"
            height="440"
            loading="lazy"
            decoding="async"
            onError={() => setSrc(service.banner)}
          />
          <span className="card-media-scrim"></span>
        </Link>

        <div className="card-service-body">
          <span className="icon-tile" aria-hidden="true">
            <i className={`bi ${service.icon}`}></i>
          </span>
          <h3>
            <Link to={`/services/${service.slug}`}>{service.name}</Link>
          </h3>
          <p>{service.short}</p>
          <Link to={`/services/${service.slug}`} className="link-arrow">
            Learn More <i className="bi bi-arrow-right" aria-hidden="true"></i>
            <span className="visually-hidden"> about {service.fullName}</span>
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
