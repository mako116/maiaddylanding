import { Link } from "react-router-dom";
import BracketFrame from "../components/BracketFrame";
import PageTransition from "../components/PageTransition";

export default function DevelopersPage() {
  return (
    <PageTransition>
      <main id="main">
        <section className="page-hero">
          <div className="wrap">
            <p className="breadcrumb">
              <Link to="/">Home</Link> / Developers
            </p>
            <p className="eyebrow">Free · Address verification API</p>
            <h1>
              Verified addresses,
              <br />
              <span className="grad-text">auto-filled.</span>
            </h1>
            <p className="lead" style={{ maxWidth: "56ch" }}>
              The Maiaddy API is free to use, and it does one thing well: it
              calls up addresses for verification. Add a loccode field to your
              address form, and let your customers pick their exact address from
              a dropdown instead of typing it out.
            </p>
            <div className="hero-ctas">
              <a className="btn btn-primary" href="/documentation/">
                View API Reference
              </a>
              <a className="btn btn-ghost" href="mailto:hello@maiaddy.com">
                Talk to Our Team
              </a>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap split">
            <div>
              <h2>How it works</h2>
              <ul className="check-list">
                <li>
                  A customer enters their street's loccode into your address
                  field.
                </li>
                <li>
                  The API returns every address registered on that street.
                </li>
                <li>
                  They select their specific address from the dropdown.
                </li>
                <li>
                  Your form auto-fills with a verified, standardized address, no
                  manual entry, no ambiguity.
                </li>
              </ul>
            </div>
            <div>
              <BracketFrame>
                <div className="code-block">
                  <pre style={{ margin: 0, whiteSpace: "pre-wrap" }}>
                    <span className="c1">POST</span> /v1/loccodes/lookup{"\n"}
                    {"{\n"}
                    {"  "}
                    <span className="c3">"loccode"</span>:{" "}
                    <span className="c2">"LA8A 1FU"</span>
                    {"\n"}
                    {"}\n\n"}
                    <span className="c1">200 OK</span>
                    {"\n"}
                    {"{\n"}
                    {"  "}
                    <span className="c3">"street"</span>:{" "}
                    <span className="c2">"Admiralty Way"</span>,{"\n"}
                    {"  "}
                    <span className="c3">"addresses"</span>: [{"\n"}
                    {"    "}
                    {"{ "}
                    <span className="c3">"id"</span>:{" "}
                    <span className="c2">"a1"</span>,{" "}
                    <span className="c3">"label"</span>:{" "}
                    <span className="c2">"12B, Admiralty Way"</span>
                    {" },"}
                    {"\n"}
                    {"    "}
                    {"{ "}
                    <span className="c3">"id"</span>:{" "}
                    <span className="c2">"a2"</span>,{" "}
                    <span className="c3">"label"</span>:{" "}
                    <span className="c2">"14, Admiralty Way"</span>
                    {" }"}
                    {"\n"}
                    {"  ]\n}"}
                  </pre>
                </div>
              </BracketFrame>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <p className="eyebrow">Quick links</p>
            <h2>Documentation</h2>
            <div className="card-grid">
              <div
                className="persona-card"
                style={{ "--accent": "var(--primary)" } as React.CSSProperties}
              >
                <h3>API Reference</h3>
                <p>
                  Endpoints, request/response shapes, and status codes.
                </p>
                <a href="/documentation/">Read docs →</a>
              </div>
              <div
                className="persona-card"
                style={
                  { "--accent": "var(--primary-light)" } as React.CSSProperties
                }
              >
                <h3>Authentication</h3>
                <p>How to request and use your free API key.</p>
                <a href="/documentation/">Read docs →</a>
              </div>
              <div
                className="persona-card"
                style={
                  { "--accent": "var(--primary-deep)" } as React.CSSProperties
                }
              >
                <h3>Rate limits</h3>
                <p>Current limits for free usage at scale.</p>
                <a href="/documentation/">Read docs →</a>
              </div>
              <div
                className="persona-card"
                style={{ "--accent": "var(--teal)" } as React.CSSProperties}
              >
                <h3>Integration guides</h3>
                <p>Drop-in examples for checkout and KYC forms.</p>
                <a href="/documentation/">Read docs →</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="cta-band">
              <h2>Start verifying addresses today.</h2>
              <p>
                No cost to integrate. Add a loccode field and let your users do
                the rest.
              </p>
              <div
                className="hero-ctas"
                style={{ justifyContent: "center" }}
              >
                <a className="btn btn-on-dark" href="/documentation/">
                  View API Docs
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
