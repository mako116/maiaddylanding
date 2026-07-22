import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import usePageMeta from "../hooks/usePageMeta";

export default function EcommercePage() {
  usePageMeta({
    title: "E-commerce Checkout | Maiaddy Loccode",
    description:
      "Replace landmark descriptions with verified street loccodes at checkout. Maiaddy auto-fills customer addresses from a simple code, boosting e-commerce conversion.",
    canonical: "https://maiaddy.com/solutions/ecommerce.html",
    ogTitle: "E-commerce Checkout | Maiaddy Loccode",
    ogDescription:
      "Replace landmark descriptions with verified street loccodes at checkout. Maiaddy auto-fills customer addresses from a simple code, boosting e-commerce conversion.",
    ogUrl: "https://maiaddy.com/solutions/ecommerce.html",
  });

  return (
    <PageTransition>
      <main id="main">
        <section className="page-hero">
          <div className="wrap">
            <p className="breadcrumb">
              <Link to="/">Home</Link> / Solutions / A checkout field that actually works.
            </p>
            <p className="eyebrow" style={{ color: "var(--primary-light)" }}>
              E-commerce
            </p>
            <h1>A checkout field that actually works.</h1>
            <p className="lead" style={{ maxWidth: "58ch" }}>
              "Please add landmark, closest bus stop, and description of gate
              color" isn't a checkout experience — it's a workaround for a
              missing address system.
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
              style={{ borderTop: "4px solid var(--primary-light)" }}
            >
              <h2>The problem</h2>
              <p>
                Maiaddy replaces that entire block with one field: the
                customer's loccode. Because a loccode identifies a street,
                entering it pulls up every verified address on that street in a
                dropdown, the customer selects theirs, and the address section
                auto-fills.
              </p>
            </div>
            <div className="panel dark">
              <h2>What you get</h2>
              <ul className="check-list" style={{ color: "#fff" }}>
                <li>
                  Faster checkout, one field instead of a paragraph of
                  directions
                </li>
                <li>A verified, standardized address on every order</li>
                <li>Fewer return-to-sender and re-delivery costs</li>
                <li>
                  Free API integration, no cost to add to your checkout flow
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
