import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import usePageMeta from "../hooks/usePageMeta";
import { getAppStoreUrl } from "../utils/appRedirect";

export default function CommunityPage() {
  usePageMeta({
    title: "Community | Maiaddy Loccode",
    description:
      "Join the Maiaddy Community — a movement of residents, mapping ambassadors, riders, and developers bringing digital location identity to every street in Nigeria.",
    canonical: "https://maiaddy.com/community",
    ogTitle: "Community | Maiaddy Loccode",
    ogDescription:
      "Join the Maiaddy Community — a movement of residents, mapping ambassadors, riders, and developers bringing digital location identity to every street in Nigeria.",
    ogUrl: "https://maiaddy.com/community",
  });

  return (
    <PageTransition>
      <main id="main">
        <section className="page-hero">
          <div className="wrap">
            <p className="breadcrumb">
              <Link to="/">Home</Link> / Company / Community
            </p>
            <p className="eyebrow">Location Identity Movement</p>
            <h1>
              Mapping every street.
              <br />
              <span className="grad-text">Empowering every neighborhood.</span>
            </h1>
            <p className="lead" style={{ maxWidth: "58ch" }}>
              Join thousands of residents, logistics drivers, local business
              owners, and developer ambassadors building Nigeria's open digital
              address system.
            </p>
            <div
              style={{
                display: "flex",
                gap: "var(--s2)",
                flexWrap: "wrap",
                marginTop: "var(--s3)",
              }}
            >
              <a
                className="btn btn-primary"
                href="mailto:hello@maiaddy.com"
              >
                Become an Ambassador
              </a>
              <a className="btn btn-ghost" href="#how-community-works">
                See How It Works
              </a>
            </div>
          </div>
        </section>

        {/* Stat Strip */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="stat-strip">
              <div className="stat">
                36<span>States &amp; FCT covered</span>
              </div>
              <div className="stat">
                10,000+<span>Verified street loccodes</span>
              </div>
              <div className="stat">
                500+<span>Active community ambassadors</span>
              </div>
            </div>
          </div>
        </section>

        {/* How Community & App Work Together */}
        <section className="section" id="how-community-works">
          <div className="wrap split">
            <div
              className="panel"
              style={{ borderTop: "4px solid var(--primary)" }}
            >
              <p className="eyebrow">Grassroots Impact</p>
              <h2>How the Community Powers Maiaddy</h2>
              <p>
                Addresses in Nigeria change rapidly as new neighborhoods expand
                and streets get paved. Instead of waiting for top-down municipal
                projects, the Maiaddy community uses the mobile app to verify
                street boundaries in real-time.
              </p>
              <p>
                When a resident or mapping ambassador registers a loccode through
                the app, they help put their entire neighborhood on the digital map
                for logistics drivers, emergency services, and e-commerce
                platforms.
              </p>
            </div>

            <div className="panel dark">
              <p className="eyebrow" style={{ color: "var(--primary-light)" }}>
                How the App Works for Members
              </p>
              <h2 style={{ color: "#fff" }}>
                3 Steps to Put Your Neighborhood on the Map
              </h2>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "1em",
                }}
              >
                <li
                  style={{
                    display: "flex",
                    gap: "0.8em",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontWeight: 700,
                      color: "var(--primary-light)",
                    }}
                  >
                    01.
                  </span>
                  <span>
                    <strong>Download the App:</strong> Open Maiaddy to
                    automatically locate your street segment via GPS.
                  </span>
                </li>
                <li
                  style={{
                    display: "flex",
                    gap: "0.8em",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontWeight: 700,
                      color: "var(--primary-light)",
                    }}
                  >
                    02.
                  </span>
                  <span>
                    <strong>Claim Your Loccode:</strong> Confirm your street's
                    6-character loccode and attach your house number.
                  </span>
                </li>
                <li
                  style={{
                    display: "flex",
                    gap: "0.8em",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontWeight: 700,
                      color: "var(--primary-light)",
                    }}
                  >
                    03.
                  </span>
                  <span>
                    <strong>Share with Neighbors:</strong> Help your local shops,
                    market stalls, and neighbors claim theirs so riders deliver
                    without calling.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Community Pillar Cards */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <p className="eyebrow">Community Guilds</p>
            <h2>Who makes up the Maiaddy network?</h2>
            <div className="card-grid" style={{ marginTop: "var(--s3)" }}>
              <div
                className="persona-card"
                style={
                  { "--accent": "var(--primary)" } as React.CSSProperties
                }
              >
                <h3>Mapping Ambassadors</h3>
                <p>
                  Local champions bringing loccode awareness to informal
                  settlements, markets, and residential estates.
                </p>
                <a href="mailto:hello@maiaddy.com">Join Guild →</a>
              </div>

              <div
                className="persona-card"
                style={
                  {
                    "--accent": "var(--primary-light)",
                  } as React.CSSProperties
                }
              >
                <h3>Logistics Driver Network</h3>
                <p>
                  Riders and fleet drivers providing real-time feedback on
                  doorstep accuracy and route clarity.
                </p>
                <Link to="/logistics">Explore Logistics →</Link>
              </div>

              <div
                className="persona-card"
                style={
                  {
                    "--accent": "var(--primary-deep)",
                  } as React.CSSProperties
                }
              >
                <h3>Developer Contributors</h3>
                <p>
                  Open-source builders developing checkout plugins, SDK wrappers,
                  and address validation integrations.
                </p>
                <Link to="/developers">View API →</Link>
              </div>

              <div
                className="persona-card"
                style={
                  { "--accent": "var(--teal)" } as React.CSSProperties
                }
              >
                <h3>Merchant Collective</h3>
                <p>
                  E-commerce sellers and local vendors displaying their loccode
                  badge so buyers find their storefront instantly.
                </p>
                <Link to="/ecommerce">Merchant Guide →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section">
          <div className="wrap">
            <p className="eyebrow">Frequently Asked</p>
            <h2>Community Questions</h2>
            <div className="faq-list">
              <CommunityFaqItem question="How do I become a Maiaddy Community Ambassador?">
                <p>
                  Anyone can become an ambassador! Simply download the Maiaddy
                  app, claim your street's loccode, and email us at{" "}
                  <a href="mailto:hello@maiaddy.com">hello@maiaddy.com</a> to
                  receive community toolkits and stickers for your area.
                </p>
              </CommunityFaqItem>

              <CommunityFaqItem question="Is the Maiaddy mobile app free for community members?">
                <p>
                  Yes, 100% free. Finding your street loccode, registering your
                  specific address, and sharing it with anyone will always be free
                  for individuals and small community businesses.
                </p>
              </CommunityFaqItem>

              <CommunityFaqItem question="How does Maiaddy verify community-submitted addresses?">
                <p>
                  Our geospatial engine combines satellite boundary data, GPS
                  precision checks, and consensus verification from nearby
                  registered loccodes to ensure complete accuracy.
                </p>
              </CommunityFaqItem>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="cta-band">
              <h2>Be part of Nigeria's open location revolution.</h2>
              <p>
                Download the free app or get involved as a community mapping
                ambassador today.
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
                <a
                  className="btn btn-ghost"
                  style={{
                    borderColor: "rgba(255, 255, 255, 0.5)",
                    color: "#fff",
                  }}
                  href="mailto:hello@maiaddy.com"
                >
                  Contact Community Team
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}

/* ── Inline FAQ component using native <details> to match HTML source ── */
function CommunityFaqItem({
  question,
  children,
}: {
  question: string;
  children: React.ReactNode;
}) {
  return (
    <details className="faq-item">
      <summary>{question}</summary>
      <div className="a">{children}</div>
    </details>
  );
}
