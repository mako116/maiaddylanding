import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import usePageMeta from "../hooks/usePageMeta";

export default function FintechPage() {
  usePageMeta({
    title: "Fintech & KYC Address Verification | Maiaddy Loccode",
    description:
      "Standardize customer address verification for Nigerian banks and fintechs. Free API for instant, auditable proof of address during onboarding.",
    canonical: "https://maiaddy.com/solutions/fintech.html",
    ogTitle: "Fintech & KYC Address Verification | Maiaddy Loccode",
    ogDescription:
      "Standardize customer address verification for Nigerian banks and fintechs. Free API for instant, auditable proof of address during onboarding.",
    ogUrl: "https://maiaddy.com/solutions/fintech.html",
  });

  return (
    <PageTransition>
      <main id="main">
        <section className="page-hero">
          <div className="wrap">
            <p className="breadcrumb">
              <Link to="/">Home</Link> / Solutions / Location verification you can rely on.
            </p>
            <p className="eyebrow" style={{ color: "var(--primary-deep)" }}>
              Fintech &amp; KYC
            </p>
            <h1>Location verification you can rely on.</h1>
            <p className="lead" style={{ maxWidth: "58ch" }}>
              Address verification is a compliance requirement, but in markets
              where addresses are informal or inconsistent, it's also a genuine
              operational headache.
            </p>
            <div className="hero-ctas">
              <a className="btn btn-primary" href="mailto:hello@maiaddy.com">
                Talk to Our Team
              </a>
              <Link className="btn btn-ghost" to="/developers">
                View API Docs
              </Link>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap split">
            <div
              className="panel"
              style={{ borderTop: "4px solid var(--primary-deep)" }}
            >
              <h2>The problem</h2>
              <p>
                Every street in Nigeria has a loccode; a customer enters theirs,
                selects their specific address from the addresses listed on that
                street, and the field auto-fills with a verified, standardized
                record.
              </p>
            </div>
            <div className="panel dark">
              <h2>What you get</h2>
              <ul className="check-list" style={{ color: "#fff" }}>
                <li>
                  A consistent, auditable address reference for every customer
                </li>
                <li>
                  Standardized records across every branch, agent, and system
                  you operate
                </li>
                <li>Free API integration for KYC and onboarding flows</li>
                <li>
                  Built for banks, microfinance, and other regulated businesses
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="cta-band">
              <h2>Ready to standardize your addresses?</h2>
              <p>
                Integrate the free Maiaddy API and start verifying addresses in
                your own forms.
              </p>
              <div
                className="hero-ctas"
                style={{ justifyContent: "center" }}
              >
                <Link className="btn btn-on-dark" to="/developers">
                  View API Docs
                </Link>
                <a
                  className="btn btn-ghost"
                  style={{
                    borderColor: "rgba(255,255,255,.5)",
                    color: "#fff",
                  }}
                  href="mailto:hello@maiaddy.com"
                >
                  Talk to Our Team
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
