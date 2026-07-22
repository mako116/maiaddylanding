import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function SiteFooter() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Link className="foot-brand" to="/">
              <Logo fill="#FFFFFF" ring="#6FA5F6" />
              <span>maiaddy</span>
            </Link>
            <p className="foot-desc">
              Maiaddy is a Nigerian location-identity infrastructure company. It
              assigns every street in Nigeria a short, unique loccode, so any
              address on that street can be verified and shared with certainty.
            </p>
            <div className="foot-socials">
              <a
                href="https://www.instagram.com/maiaddyhq?igsh=MWF5ejY1d3FiMXNodQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="social-box"
                aria-label="Instagram"
              >
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1={17.5} y1={6.5} x2={17.51} y2={6.5} />
                </svg>
              </a>
              <a
                href="https://x.com/maiaddyhq?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="social-box"
                aria-label="X (Twitter)"
              >
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/maiaddy/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-box"
                aria-label="LinkedIn"
              >
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/1DGdYZp9oS/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="social-box"
                aria-label="Facebook"
              >
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@maiaddyhq?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="social-box"
                aria-label="TikTok"
              >
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.65 6.34 6.34 0 0 0 9.35 22a6.33 6.33 0 0 0 6.33-6.33V9.18a8.16 8.16 0 0 0 4.91 1.6v-3.6a4.85 4.85 0 0 1-1-.49z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4>Solutions</h4>
            <ul>
              <li>
                <Link className="foot-link" to="/logistics">
                  Logistics &amp; Delivery
                </Link>
              </li>
              <li>
                <Link className="foot-link" to="/ecommerce">
                  E-commerce
                </Link>
              </li>
              <li>
                <Link className="foot-link" to="/fintech">
                  Fintech &amp; KYC
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Developers</h4>
            <ul>
              <li>
                <Link className="foot-link" to="/developers">
                  API Overview
                </Link>
              </li>
              <li>
                <a href="/documentation/">Documentation</a>
              </li>
              {/* <li>
                <a href="/llms.txt" target="_blank" rel="noopener noreferrer">
                  llms.txt
                </a>
              </li> */}
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <Link className="foot-link" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="foot-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="foot-link" to="/community">
                  Community
                </Link>
              </li>
              <li>
                <Link className="foot-link" to="/faq">
                  FAQ
                </Link>
              </li>
              <li>
                <a href="mailto:hello@maiaddy.com">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Maiaddy. Every street, verified.</span>
          <span>Aba, Abia State, Nigeria</span>
        </div>
      </div>
    </footer>
  );
}
