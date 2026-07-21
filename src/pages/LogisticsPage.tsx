import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

export default function LogisticsPage() {
  return (
    <PageTransition>
      <main id="main">
        <section className="page-hero">
          <div className="wrap">
            <p className="breadcrumb">
              <Link to="/">Home</Link> / Solutions / Logistics
            </p>
            <p className="eyebrow" style={{ color: "var(--primary)" }}>
              Logistics &amp; delivery
            </p>
            <h1>Deliver with certainty, not directions.</h1>
            <p className="lead" style={{ maxWidth: "58ch" }}>
              Failed and delayed deliveries in Nigeria are rarely about distance
              — they're about address ambiguity. A rider can spend twenty minutes
              calling a customer for directions that a code could deliver
              instantly.
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
              style={{ borderTop: "4px solid var(--primary)" }}
            >
              <h2>The problem</h2>
              <p>
                Every street in Nigeria has a loccode, and every address on that
                street sits under it, so a rider gets a single, unambiguous
                reference that your ops team, riders, and systems can all trust.
              </p>
            </div>
            <div className="panel dark">
              <h2>What you get</h2>
              <ul className="check-list" style={{ color: "#fff" }}>
                <li>
                  A verifiable, standardized address for every customer, pulled
                  straight from their street's loccode
                </li>
                <li>
                  Free API access to attach loccodes and addresses to orders,
                  riders, and route planning
                </li>
                <li>
                  Fewer failed-delivery calls, less fuel burned on wrong turns,
                  faster resolution
                </li>
                <li>
                  Built for courier companies, last-mile delivery fleets, and
                  e-commerce logistics
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
