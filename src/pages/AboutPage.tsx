import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import usePageMeta from "../hooks/usePageMeta";
import { getAppStoreUrl } from "../utils/appRedirect";

export default function AboutPage() {
  usePageMeta({
    title: "About Us | Maiaddy — Location Identity Infrastructure",
    description:
      "Building the foundation for how the world references place. Maiaddy develops loccodes — a universal location reference system for Nigeria.",
    canonical: "https://maiaddy.com/about",
    ogTitle: "About Us | Maiaddy — Location Identity Infrastructure",
    ogDescription:
      "Building the foundation for how the world references place. Maiaddy develops loccodes — a universal location reference system for Nigeria.",
    ogUrl: "https://maiaddy.com/about",
  });

  return (
    <PageTransition>
      <main id="main">
        {/* Hero Section */}
        <section className="about-hero bg-dark">
          <div className="grid-pattern" />
          <div className="radial-glow" />

          <div style={{ position: "relative", maxWidth: 800, margin: "0 auto" }}>
            <div className="badge">
              <span className="dot" />
              <span>Location Identity Infrastructure</span>
            </div>
            <h1 style={{ fontStyle: "italic", fontFamily: "var(--font-display)" }}>
              About Maiaddy
            </h1>
            <p
              style={{
                fontSize: "1.2rem",
                maxWidth: 580,
                margin: "0 auto",
                color: "rgba(255,255,255,0.8)",
              }}
            >
              Building the foundation for how the world references place.
            </p>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="section-video">
          <div className="video-overlay" />
          <div className="wrap video-content">
            <div>
              <h2 style={{ fontStyle: "italic" }}>Who We Are</h2>
            </div>
            <div>
              <p>
                Maiaddy is a technology company focused on location identity. We
                develop loccodes&mdash;a universal reference system that gives every
                place in Nigeria a clear, consistent identity.
              </p>
              <p>
                We work at the intersection of physical and digital infrastructure.
                Our team brings together expertise in geospatial technology, data
                systems, and emerging market contexts to solve one of the most
                persistent challenges in global development: the lack of reliable
                location identifiers.
              </p>
              <p>
                Founded with the belief that location clarity should be a public
                good, we build tools that make place referenceable for
                everyone&mdash;from individuals sharing directions to institutions
                managing complex logistics.
              </p>
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section className="section-video">
          <div className="video-overlay" />
          <div className="wrap video-content">
            <div>
              <h2 style={{ fontStyle: "italic" }}>How We Work</h2>
            </div>
            <div>
              <p style={{ fontSize: "1.1rem", color: "#ffffff" }}>
                We believe infrastructure should be neutral, reliable, and
                accessible. This shapes how we build and who we serve.
              </p>

              <div style={{ marginTop: "2rem" }}>
                <div className="numbered-item">
                  <span className="num">01</span>
                  <div>
                    <h3>Open Standards</h3>
                    <p>
                      We document and share our specifications, enabling broad
                      adoption and integration across platforms and sectors.
                    </p>
                  </div>
                </div>

                <div className="numbered-item">
                  <span className="num">02</span>
                  <div>
                    <h3>Cross-Sector Collaboration</h3>
                    <p>
                      We work with logistics providers, financial institutions,
                      government agencies, and technology platforms&mdash;ensuring
                      loccodes serve diverse needs without fragmentation.
                    </p>
                  </div>
                </div>

                <div className="numbered-item">
                  <span className="num">03</span>
                  <div>
                    <h3>Long-Term Thinking</h3>
                    <p>
                      Location identity infrastructure must outlast individual
                      products or companies. We design for permanence, with
                      stability and backward compatibility as core requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Where We Focus Section */}
        <section className="section-video">
          <div className="video-overlay" />
          <div className="wrap video-content">
            <div>
              <h2 style={{ fontStyle: "italic" }}>Where We Focus</h2>
            </div>
            <div>
              <p style={{ fontSize: "1.1rem", color: "#ffffff" }}>
                We concentrate on emerging markets, where the gap between physical
                reality and digital systems is most acute.
              </p>
              <p>
                Across Nigeria, rapid urbanization has outpaced formal addressing
                infrastructure. Millions of people live and work in places that
                digital systems struggle to identify. This isn't a temporary
                problem&mdash;it's a structural gap that limits economic opportunity
                and service delivery.
              </p>
              <p>
                We build for these contexts specifically. Our technology accounts
                for informal settlements, inconsistent addressing standards, and the
                reality that places evolve faster than traditional systems can map
                them. By creating a reference layer that works regardless of formal
                infrastructure, we help close the gap between physical and digital
                economies.
              </p>
              <div className="quote-card">
                <p>
                  &ldquo;Our goal is to make location reference as reliable in Lagos
                  or Kaduna as it is in London or New York&mdash;not by imposing
                  foreign systems, but by building infrastructure that respects
                  local context while providing global consistency.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do (capabilities) Section */}
        <section className="section-video">
          <div className="video-overlay" />
          <div className="wrap video-content">
            <div>
              <h2 style={{ fontStyle: "italic" }}>What We Do</h2>
            </div>
            <div>
              <p>
                We create and maintain the loccode system: a standardized way to
                identify any physical location with a unique, human-friendly code.
                Loccodes work everywhere&mdash;whether a place has a formal street
                address or not.
              </p>

              <div className="capabilities-grid">
                <div className="cap-card">
                  <div className="cap-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx={12} cy={12} r={10} />
                      <line x1={2} y1={12} x2={22} y2={12} />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <h3>Universal Coverage</h3>
                  <p>
                    Loccodes work across formal and informal addressing
                    environments, from dense urban centers to rapidly developing
                    areas.
                  </p>
                </div>

                <div className="cap-card">
                  <div className="cap-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx={9} cy={7} r={4} />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3>Human-First Design</h3>
                  <p>
                    Codes are designed to be spoken, written, and
                    remembered—bridging the gap between how people and systems
                    describe place.
                  </p>
                </div>

                <div className="cap-card">
                  <div className="cap-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <ellipse cx={12} cy={5} rx={9} ry={3} />
                      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                    </svg>
                  </div>
                  <h3>System-Ready</h3>
                  <p>
                    Built to integrate seamlessly into databases, logistics
                    platforms, financial systems, and government infrastructure.
                  </p>
                </div>

                <div className="cap-card">
                  <div className="cap-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <h3>Built to Last</h3>
                  <p>
                    Stability is core to our design. Loccodes persist over time,
                    ensuring long-term reliability for critical systems.
                  </p>
                </div>
              </div>

              <p>
                We provide the infrastructure that allows businesses, governments,
                and individuals to reference location with certainty. Our technology
                serves logistics companies ensuring deliveries reach their
                destination, financial institutions verifying customer locations,
                emergency services responding to calls, and urban planners building
                for the future.
              </p>
            </div>
          </div>
        </section>

        {/* Our Commitment Section */}
        <section className="text-section">
          <div className="wrap" style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ fontStyle: "italic", marginBottom: "1.5rem" }}>
              Our Commitment
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#ffffff" }}>
              We are committed to building infrastructure that serves the public
              interest. This means maintaining the integrity of the loccode system,
              ensuring it remains free from political or commercial capture, and
              prioritizing reliability over rapid growth.
            </p>
            <p>
              We do not sell personal location data. We do not build surveillance
              tools. We create reference systems that help people and organizations
              coordinate more effectively&mdash;nothing more.
            </p>
            <p>
              Location is fundamental to how society functions. It deserves
              infrastructure built with the same care as the systems we rely on for
              communication, identity, and commerce.
            </p>
          </div>
        </section>

        {/* Work With Us CTA Section */}
        <section
          style={{
            position: "relative",
            background: "var(--prussian)",
            padding: "6rem var(--s3)",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          <div className="grid-pattern" />
          <div className="radial-glow" />

          <div style={{ position: "relative", maxWidth: 700, margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                marginBottom: "1rem",
              }}
            >
              Work With Us
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                color: "rgba(255,255,255,0.8)",
                marginBottom: "2.2rem",
              }}
            >
              Whether you&apos;re integrating loccodes into your platform or
              exploring partnership opportunities, we&apos;d like to hear from you.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a className="btn btn-primary" href="mailto:hello@maiaddy.com">
                Contact Us
              </a>
              <a
                className="btn btn-ghost js-get-loccode"
                href={getAppStoreUrl()}
                target="_blank"
                rel="noopener noreferrer"
                style={{ borderColor: "rgba(255,255,255,0.25)", color: "#fff" }}
              >
                Get Your Loccode
              </a>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
