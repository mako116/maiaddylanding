import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BracketFrame from "../components/BracketFrame";
import LoccodeChip from "../components/LoccodeChip";
import FaqItem from "../components/FaqItem";
import PageTransition from "../components/PageTransition";

const HOME_FAQS = [
  {
    q: "What is a loccode?",
    a: "A loccode is a short, unique code assigned to every street in Nigeria, giving it a single, stable reference. Notable standalone places, like the National Assembly Complex or the National Theatre, get their own loccode too. It replaces long written directions with something as simple as LA8A 1FU.",
  },
  {
    q: "How is a loccode different from a regular street address?",
    a: "A loccode works even when a street has no formal name or numbering at all. Traditional addresses depend on named streets, numbered buildings, and postal infrastructure that many parts of Nigeria don't have; a loccode is generated directly from the street itself, so every street can have one, with individual addresses registered underneath it.",
  },
  {
    q: "Who created the loccode system?",
    a: "Loccodes were created and are maintained by Maiaddy, a Nigerian location-identity infrastructure company. Maiaddy documents and shares the specification publicly to support broad adoption across logistics, finance, government, and technology platforms.",
  },
  {
    q: "How do I get a loccode for my home or business?",
    a: "You can find your street's loccode through the Maiaddy app, available on the Google Play Store. Open the app, confirm your location, and it shows you the loccode for your street, so you can register your specific address under it and share the combined reference.",
  },
  {
    q: "Is Maiaddy the same as what3words or Google Plus Codes?",
    a: "Maiaddy's loccode serves a similar purpose, giving any place a shareable, unique reference, but it's purpose-built for Nigeria's addressing environment, including informal settlements and rapidly changing urban areas.",
  },
  {
    q: "Can businesses integrate loccodes into their own systems?",
    a: "Yes. Maiaddy offers a free API so logistics companies, e-commerce platforms, banks, and other businesses can add a loccode field to their address forms, so customers can select their exact address from a dropdown and auto-fill the rest.",
  },
  {
    q: "Is Maiaddy free to use?",
    a: "Yes. The Maiaddy app is free for individuals to find and share their loccode, and the API businesses use to verify and standardize addresses is also free to integrate.",
  },
];

const cardStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
};

export default function HomePage() {
  return (
    <PageTransition>
      <main id="main">
        {/* Hero */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <p className="eyebrow">
                Location identity infrastructure for Nigeria
              </p>
              <h1>
                Every street deserves
                <br />
                <span className="grad-text">an address.</span>
              </h1>
              <p className="lead">
                Maiaddy gives every street in Nigeria a unique, human-friendly
                loccode, so anyone, and any system, can find any address on it
                with certainty.
              </p>
              <div className="hero-ctas">
                <a className="btn btn-primary" href="#get-loccode">
                  Get Your Loccode
                </a>
                <a className="btn btn-ghost" href="#how-it-works">
                  See How It Works
                </a>
              </div>
            </div>
            <div>
              <BracketFrame>
                <div className="demo-card">
                  <div className="demo-row">
                    <span className="demo-old">
                      "3rd street after the roundabout, opposite the blue gate,
                      near the mango tree…"
                    </span>
                  </div>
                  <div
                    className="demo-row"
                    style={{ justifyContent: "center", padding: ".9em 0" }}
                  >
                    <span className="demo-arrow">becomes</span>
                  </div>
                  <div
                    className="demo-row"
                    style={{
                      justifyContent: "center",
                      borderBottom: "none",
                    }}
                  >
                    <LoccodeChip />
                  </div>
                </div>
              </BracketFrame>
            </div>
          </div>
        </section>

        {/* Problem / Solution */}
        <section className="section" id="how-it-works">
          <div className="wrap split">
            <div className="panel">
              <p className="eyebrow">The problem</p>
              <h2>
                Most digital systems assume every place already has a reliable
                address.
              </h2>
              <p>
                Across Nigeria, that assumption breaks down fast. The same
                location might be "opposite the blue gate," "behind the old
                market," or "near the mango tree" — different descriptions for
                one place. That's fine for a conversation. It's a serious problem
                for a delivery driver, a bank doing KYC, or an ambulance trying
                to find you at 2&nbsp;a.m.
              </p>
            </div>
            <div className="panel dark">
              <p
                className="eyebrow"
                style={{ color: "var(--primary-light)" }}
              >
                The solution
              </p>
              <h2>One street, one code, every address on it verifiable.</h2>
              <p>
                A loccode is a short, unique code assigned to every street in
                Nigeria — the core reference for any address on that street.
                Notable standalone places, like the National Assembly Complex,
                get their own loccode too. It's unique, human-usable,
                machine-readable, and built to stay stable over time.
              </p>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <p className="eyebrow">Who it's for</p>
            <h2>Built for the people who move Nigeria.</h2>
            <motion.div
              className="card-grid"
              variants={cardStagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div
                className="persona-card"
                style={{ "--accent": "var(--primary)" } as React.CSSProperties}
                variants={cardItem}
              >
                <h3>Logistics &amp; delivery</h3>
                <p>
                  Cut failed and delayed deliveries caused by unclear addresses.
                </p>
                <Link className="card-link" to="/logistics">
                  See how →
                </Link>
              </motion.div>
              <motion.div
                className="persona-card"
                style={
                  { "--accent": "var(--primary-light)" } as React.CSSProperties
                }
                variants={cardItem}
              >
                <h3>E-commerce</h3>
                <p>
                  Let customers check out with a code, not a paragraph of
                  directions.
                </p>
                <Link className="card-link" to="/ecommerce">
                  See how →
                </Link>
              </motion.div>
              <motion.div
                className="persona-card"
                style={
                  { "--accent": "var(--primary-deep)" } as React.CSSProperties
                }
                variants={cardItem}
              >
                <h3>Banks &amp; fintechs</h3>
                <p>
                  Verify customer address for KYC and compliance, consistently.
                </p>
                <Link className="card-link" to="/fintech">
                  See how →
                </Link>
              </motion.div>
              <motion.div
                className="persona-card"
                style={{ "--accent": "var(--teal)" } as React.CSSProperties}
                variants={cardItem}
              >
                <h3>Developers</h3>
                <p>
                  Integrate our free API to verify and standardize addresses.
                </p>
                <Link className="card-link" to="/developers">
                  See how →
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stat strip */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="stat-strip">
              <div className="stat">
                100%<span>of streets, mapped to a loccode</span>
              </div>
              <div className="stat">
                ₦0<span>cost to integrate the API</span>
              </div>
              <div className="stat">
                1<span>code per street, every time</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ preview */}
        <section className="section">
          <div className="wrap">
            <p className="eyebrow">Frequently asked</p>
            <h2>Questions about loccodes</h2>
            <div className="faq-list">
              {HOME_FAQS.map((item, i) => (
                <FaqItem key={i} q={item.q} a={item.a} />
              ))}
            </div>
            <p style={{ marginTop: "1.2rem" }}>
              <Link
                to="/faq"
                style={{
                  color: "var(--primary)",
                  fontWeight: 600,
                  fontSize: "1rem",
                  fontFamily: "var(--font-body)",
                }}
              >
                See the full FAQ →
              </Link>
            </p>
          </div>
        </section>

        {/* CTA band */}
        <section className="section">
          <div className="wrap">
            <div className="cta-band">
              <h2>Give your street an address.</h2>
              <p>
                Download the app to find your loccode, or integrate the free API
                to verify addresses at scale.
              </p>
              <div
                className="hero-ctas"
                style={{ justifyContent: "center" }}
              >
                <a className="btn btn-on-dark" href="#get-loccode">
                  Get Your Loccode
                </a>
                <Link
                  className="btn btn-ghost"
                  style={{
                    borderColor: "rgba(255,255,255,.5)",
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
