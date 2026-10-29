import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import PageHeroMedia from "../components/PageHeroMedia";
import BlogCard from "../components/BlogCard";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";
import { blogPosts, blogCategories, type BlogCategory } from "../data/blog";
import { site } from "../data/site";
import { pageBanners } from "../data/pageBanners";

type Filter = "All" | BlogCategory;
const PAGE_SIZE = 6;

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Aum Web Solutions Blog",
  description:
    "Articles on SEO, GEO, AEO, UX, AI, content strategy and digital marketing from Aum Web Solutions.",
  url: `${site.base}/blog`,
  blogPost: blogPosts.slice(0, 10).map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    description: p.excerpt,
    datePublished: p.date,
    author: { "@type": "Person", name: p.author },
    keywords: p.tags.join(", "),
  })),
};

export default function BlogPage() {
  const [active, setActive] = useState<Filter>("All");
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogPosts.filter((p) => {
      const matchCat = active === "All" || p.category === active;
      const matchQ =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchQ;
    });
  }, [active, query]);

  // The newest matching post becomes the editorial hero card
  const [featured, ...rest] = filtered;
  const shown = rest.slice(0, visible);

  const reset = (fn: () => void) => {
    fn();
    setVisible(PAGE_SIZE);
  };

  return (
    <>
      <PageMeta
        title="Blog — SEO, GEO, AEO & Digital Strategy Insights | Aum Web Solutions"
        description="Practical articles on SEO, GEO (Generative Engine Optimization), AEO, UX, AI search, content strategy and digital marketing — written from 25+ years of hands-on digital experience."
        path="/blog"
        jsonLd={blogJsonLd}
      />

      {/* ---------- Hero ---------- */}
      <section className="page-hero page-hero-photo" aria-labelledby="blog-title">
        <PageHeroMedia {...pageBanners.blog} />
        <div className="container">
          <span className="eyebrow">
            <span className="rule" aria-hidden="true"></span>
            Blog
          </span>
          <h1 className="line-reveal auto" id="blog-title">
            <span>Ideas for the New Era of Search</span>
          </h1>
          <p className="section-lead mt-3">
            Deep dives, playbooks and field notes on SEO, GEO, AEO, UX and AI-powered discovery —
            written from 25+ years of shipping digital work that had to perform.
          </p>
          <div className="hero-strip">
            <span>
              <i className="bi bi-journals" aria-hidden="true"></i>
              {blogPosts.length} articles published
            </span>
            <span>
              <i className="bi bi-tags" aria-hidden="true"></i>
              {blogCategories.length} topics
            </span>
            <span>
              <i className="bi bi-broadcast" aria-hidden="true"></i>
              New posts monthly
            </span>
          </div>
        </div>
      </section>

      {/* ---------- Filters + grid ---------- */}
      <section className="section" style={{ paddingTop: "2.5rem" }} aria-labelledby="blog-articles-h">
        <div className="container">
          <h2 id="blog-articles-h" className="visually-hidden">Blog articles</h2>
          {/* Toolbar */}
          <Reveal>
            <div className="blog-toolbar">
              <div className="filter-row mb-0" role="group" aria-label="Filter articles by category">
                {(["All", ...blogCategories] as Filter[]).map((f) => (
                  <button
                    key={f}
                    type="button"
                    className={`filter-btn ${active === f ? "active" : ""}`}
                    aria-pressed={active === f}
                    onClick={() => reset(() => setActive(f))}
                  >
                    {f}
                  </button>
                ))}
              </div>
              <div className="blog-search">
                <i className="bi bi-search" aria-hidden="true"></i>
                <label htmlFor="blog-search-input" className="visually-hidden">
                  Search articles
                </label>
                <input
                  id="blog-search-input"
                  type="search"
                  placeholder="Search articles…"
                  value={query}
                  onChange={(e) => reset(() => setQuery(e.target.value))}
                />
              </div>
            </div>
          </Reveal>

          <p
            aria-live="polite"
            style={{ fontSize: "0.85rem", color: "var(--muted)", margin: "1.25rem 0 2rem" }}
          >
            Showing {filtered.length} of {blogPosts.length}{" "}
            {filtered.length === 1 ? "article" : "articles"}
            {active !== "All" ? ` in ${active}` : ""}
            {query ? ` matching “${query}”` : ""}
          </p>

          {filtered.length === 0 ? (
            <Reveal>
              <div className="blog-empty">
                <i className="bi bi-search" aria-hidden="true"></i>
                <h3>No articles found</h3>
                <p>Try a different keyword or clear the filters to see everything.</p>
                <button
                  type="button"
                  className="btn btn-line"
                  onClick={() => reset(() => {
                    setActive("All");
                    setQuery("");
                  })}
                >
                  Clear filters
                </button>
              </div>
            </Reveal>
          ) : (
            <>
              {featured && <BlogCard post={featured} featured />}

              {shown.length > 0 && (
                <div className="row g-4 mt-1">
                  {shown.map((post, i) => (
                    <div className="col-md-6 col-xl-4" key={post.id}>
                      <BlogCard post={post} delay={(i % 3) * 100} />
                    </div>
                  ))}
                </div>
              )}

              {rest.length > visible && (
                <div className="text-center mt-5">
                  <button
                    type="button"
                    className="btn btn-line btn-lg-cta"
                    onClick={() => setVisible((v) => v + PAGE_SIZE)}
                  >
                    Load more articles
                    <i className="bi bi-arrow-down" aria-hidden="true"></i>
                  </button>
                </div>
              )}
            </>
          )}

          {/* Newsletter strip */}
          <Reveal delay={120}>
            <div className="blog-subscribe">
              <div>
                <h2 className="h3-like">Get new articles as they publish</h2>
                <p>
                  No newsletter spam — just a note when something genuinely useful goes live on
                  search, AI visibility and digital experience.
                </p>
              </div>
              <Link to="/contact" className="btn btn-brand">
                Subscribe via Contact <i className="bi bi-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="Put it into practice"
        title="Reading is good. Ranking is better."
        text="Every article here started as a real client problem. If one of them sounds like yours, let's talk about fixing it properly."
        primary={{ label: "Get My Free AI Visibility Audit", to: "/audit" }}
        secondary={{ label: "Start a Conversation", to: "/contact" }}
      />
    </>
  );
}
