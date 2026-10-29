import { Link } from "react-router-dom";
import type { BlogPost } from "../data/blog";
import Reveal from "./Reveal";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

interface BlogCardProps {
  post: BlogPost;
  delay?: number;
  /** Wide editorial layout used for the newest article. */
  featured?: boolean;
}

export default function BlogCard({ post, delay = 0, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <Reveal delay={delay}>
        <article className="blog-featured">
          <div className="bf-media">
            <img src={post.image} alt={post.imageAlt} loading="eager" decoding="async" />
            <span className="bf-scrim" aria-hidden="true"></span>
            <span className="bf-flag">
              <i className="bi bi-star-fill" aria-hidden="true"></i> Latest article
            </span>
          </div>
          <div className="bf-body">
            <div className="bf-meta">
              <span className="blog-chip">{post.category}</span>
              <span>
                <i className="bi bi-calendar3" aria-hidden="true"></i> {formatDate(post.date)}
              </span>
              <span>
                <i className="bi bi-clock" aria-hidden="true"></i> {post.readTime}
              </span>
            </div>
            <h3 className="bf-title">{post.title}</h3>
            <p className="bf-excerpt">{post.excerpt}</p>
            <div className="blog-tags">
              {post.tags.map((t) => (
                <span key={t} className="blog-tag">
                  #{t}
                </span>
              ))}
            </div>
            <Link to="/contact" className="btn btn-brand mt-4">
              Discuss this topic <i className="bi bi-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>
        </article>
      </Reveal>
    );
  }

  return (
    <Reveal delay={delay} className="h-100">
      <article className="blog-card">
        <div className="blog-media">
          <img src={post.image} alt={post.imageAlt} loading="lazy" decoding="async" />
          <span className="blog-chip floating">{post.category}</span>
        </div>
        <div className="blog-body">
          <div className="blog-meta">
            <span>
              <i className="bi bi-calendar3" aria-hidden="true"></i> {formatDate(post.date)}
            </span>
            <span>
              <i className="bi bi-clock" aria-hidden="true"></i> {post.readTime}
            </span>
          </div>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
          <div className="blog-foot">
            <span className="blog-author">
              <i className="bi bi-person-circle" aria-hidden="true"></i> {post.author}
            </span>
            <Link to="/contact" className="link-arrow">
              Read more <i className="bi bi-arrow-right" aria-hidden="true"></i>
              <span className="visually-hidden"> about {post.title}</span>
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
