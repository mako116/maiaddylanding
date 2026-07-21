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
              <li>
                <a href="/llms.txt">llms.txt</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <a href="/about.html">About</a>
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
          <span>Lagos, Nigeria</span>
        </div>
      </div>
    </footer>
  );
}
