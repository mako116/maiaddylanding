import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import usePageMeta from "../hooks/usePageMeta";
import { getAppStoreUrl } from "../utils/appRedirect";

const ARTICLES = [
  {
    tag: "Logistics",
    title: "Cutting Delivery Calls: How Riders Navigate 40% Faster in Aba & Lagos",
    desc: "Why traditional directions cost logistics fleets millions in burned fuel and driver phone calls — and how loccodes solve last-mile friction.",
    date: "July 20, 2026",
    read: "5 min read",
  },
  {
    tag: "Fintech & KYC",
    title: "Standardizing Address Verification for Nigerian Banks",
    desc: "How financial institutions use the Maiaddy free API to verify customer proof of address instantly during onboarding without physical agent visits.",
    date: "July 14, 2026",
    read: "4 min read",
  },
  {
    tag: "Engineering",
    title: "Designing Offline-First Address Resolution for Mobile Devices",
    desc: "A deep dive into our geospatial indexing algorithm that resolves street loccodes even when cellular connection drops to zero.",
    date: "June 28, 2026",
    read: "8 min read",
  },
  {
    tag: "E-Commerce",
    title: "Why 6-Character Loccodes Boost Checkout Conversions",
    desc: "Replacing long multi-line address text fields with auto-filling loccode dropdowns increases checkout completion rate by up to 28%.",
    date: "June 15, 2026",
    read: "6 min read",
  },
  {
    tag: "Community",
    title: "Street Ambassadors: Mapping Unnamed Alleys in Nigeria",
    desc: "How local community mapping ambassadors are bringing location identity to informal settlements across Abia and Lagos states.",
    date: "May 30, 2026",
    read: "4 min read",
  },
  {
    tag: "Product Release",
    title: "Maiaddy Mobile App v2.4 Released with One-Tap Loccode Share",
    desc: "Explore new features in the latest mobile update: instant WhatsApp sharing, saved favorite places, and improved offline rendering.",
    date: "May 18, 2026",
    read: "3 min read",
  },
];

export default function BlogPage() {
  usePageMeta({
    title: "Blog & Insights | Maiaddy Loccode",
    description:
      "Explore insights, product updates, engineering deep dives, and logistics case studies from Maiaddy — building Nigeria's location identity infrastructure.",
    canonical: "https://maiaddy.com/blog",
    ogTitle: "Blog & Insights | Maiaddy Loccode",
    ogDescription:
      "Explore insights, product updates, engineering deep dives, and logistics case studies from Maiaddy — building Nigeria's location identity infrastructure.",
    ogUrl: "https://maiaddy.com/blog",
  });

  return (
    <PageTransition>
      <main id="main">
        <section className="page-hero">
          <div className="wrap">
            <p className="breadcrumb">
              <Link to="/">Home</Link> / Company / Blog
            </p>
            <p className="eyebrow">Insights &amp; Product Stories</p>
            <h1>Building the address infrastructure for Nigeria.</h1>
            <p className="lead" style={{ maxWidth: "58ch" }}>
              Read how Maiaddy's loccode mobile app, geospatial algorithms, and
              API infrastructure are cutting failed deliveries, streamlining KYC,
              and connecting every street in Nigeria.
            </p>
          </div>
        </section>

        {/* Featured Story: How the Mobile App Works */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="featured-card">
              <div>
                <span className="tag">Product Deep Dive</span>
                <h2>
                  How the Maiaddy App Works: From GPS Coordinates to Verified
                  Loccodes
                </h2>
                <p>
                  Ever wondered how the Maiaddy mobile app assigns a short,
                  shareable 6-character code (like{" "}
                  <strong
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--primary-deep)",
                    }}
                  >
                    LA8A 1FU
                  </strong>
                  ) to any street in Nigeria — even without street signs or
                  numbers?
                </p>
                <p>
                  Our mobile app uses device positioning, street boundary
                  geofencing, and deterministic geospatial encoding so anyone can
                  get a reliable digital address in under 5 seconds.
                </p>
                <a
                  href="#how-app-works"
                  className="btn btn-primary"
                  style={{ marginTop: "0.5em" }}
                >
                  Read App Guide →
                </a>
              </div>
              <div
                style={{
                  background: "var(--bg)",
                  padding: "var(--s4)",
                  borderRadius: "var(--radius-md)",
                  border: "var(--border)",
                  textAlign: "center",
                }}
              >
                <p className="eyebrow" style={{ marginBottom: "0.5em" }}>
                  Inside the App
                </p>
                <div
                  className="loccode"
                  style={{ margin: "0.8em 0", fontSize: "1.1rem" }}
                >
                  <span className="ring" />
                  LA8A 1FU
                </div>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--ink-faint)",
                    margin: 0,
                  }}
                >
                  1 Street = 1 Loccode.
                  <br />
                  Doorstep verification made effortless.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* App Workflow Breakdown */}
        <section
          className="section"
          id="how-app-works"
          style={{
            background: "#ffffff",
            borderTop: "var(--border)",
            borderBottom: "var(--border)",
          }}
        >
          <div className="wrap">
            <p className="eyebrow">App Walkthrough</p>
            <h2>How the Maiaddy App Works Step-by-Step</h2>
            <p className="lead" style={{ maxWidth: "55ch" }}>
              Designed for simplicity, speed, and accuracy across
              low-connectivity and informal urban areas.
            </p>
            <div className="app-step-grid">
              <div className="app-step">
                <div className="step-num">01</div>
                <h3>Open &amp; Detect Location</h3>
                <p>
                  Open the free Maiaddy app on Android or iOS. The app
                  automatically detects your coordinates using high-precision GPS
                  positioning and maps it against street segment boundaries.
                </p>
              </div>
              <div className="app-step">
                <div className="step-num">02</div>
                <h3>Instant Loccode Generation</h3>
                <p>
                  Your street is immediately paired with its unique 6-character
                  loccode (e.g. <code>AB2B 4XY</code>). Every street in Nigeria
                  has a loccode, ensuring 100% geographic coverage.
                </p>
              </div>
              <div className="app-step">
                <div className="step-num">03</div>
                <h3>Save &amp; Share Your Address</h3>
                <p>
                  Add your building or unit details underneath the loccode. Share
                  your loccode with delivery drivers, e-commerce stores, or banks
                  for instant, unambiguous address verification.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Grid of Articles */}
        <section className="section">
          <div className="wrap">
            <p className="eyebrow">Latest Articles</p>
            <h2>Engineering, Logistics &amp; Case Studies</h2>
            <div className="blog-grid" style={{ marginTop: "var(--s4)" }}>
              {ARTICLES.map((article, i) => (
                <article className="blog-card" key={i}>
                  <div>
                    <span className="tag">{article.tag}</span>
                    <h3>{article.title}</h3>
                    <p>{article.desc}</p>
                  </div>
                  <div className="blog-meta">
                    <span>{article.date}</span>
                    <span>{article.read}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="cta-band">
              <h2>Get your street's loccode today.</h2>
              <p>
                Download the free Maiaddy mobile app or integrate the API into
                your platform.
              </p>
              <div
                className="hero-ctas"
                style={{ justifyContent: "center" }}
              >
                <a
                  className="btn btn-on-dark"
                  href={getAppStoreUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Your Loccode
                </a>
                <Link
                  className="btn btn-ghost"
                  style={{
                    borderColor: "rgba(255, 255, 255, 0.5)",
                    color: "#fff",
                  }}
                  to="/developers"
                >
                  View API Docs
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
