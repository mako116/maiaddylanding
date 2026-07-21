import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLink = (label: string, to: string) => (
    <li>
      <Link
        className={pathname === to ? "active" : ""}
        to={to}
        onClick={() => setMenuOpen(false)}
      >
        {label}
      </Link>
    </li>
  );

  return (
    <>
      <header className="site">
        <nav className="nav">
          <Link className="brand" to="/">
            <Logo />
            <span>maiaddy</span>
          </Link>

          {/* Desktop nav links (hidden on mobile via CSS) */}
          <ul className="nav-links-desktop">
            {navLink("Logistics", "/logistics")}
            {navLink("E-commerce", "/ecommerce")}
            {navLink("Fintech", "/fintech")}
            {navLink("Developers", "/developers")}
            {navLink("FAQ", "/faq")}
          </ul>

          <div className="nav-cta">
            <a className="btn btn-primary nav-cta-btn" href="#get-loccode">
              Get Your Loccode
            </a>
            <button
              className="hamburger-btn"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? (
                <X size={24} strokeWidth={2} />
              ) : (
                <Menu size={24} strokeWidth={2} />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay + sidebar — rendered via portal at document.body */}
      {createPortal(
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Dark overlay backdrop */}
              <motion.div
                className="mobile-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => setMenuOpen(false)}
              />
              {/* Slide-in sidebar */}
              <motion.div
                className="mobile-sidebar"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 28, stiffness: 300 }}
              >
                <div className="mobile-sidebar-header">
                  <Link className="brand" to="/" onClick={() => setMenuOpen(false)}>
                    <Logo />
                    <span>maiaddy</span>
                  </Link>
                  <button
                    className="mobile-close-btn"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <X size={22} strokeWidth={2} />
                  </button>
                </div>
                <ul className="mobile-nav-links">
                  {navLink("Logistics", "/logistics")}
                  {navLink("E-commerce", "/ecommerce")}
                  {navLink("Fintech", "/fintech")}
                  {navLink("Developers", "/developers")}
                  {navLink("FAQ", "/faq")}
                </ul>
                <div className="mobile-sidebar-cta">
                  <a
                    className="btn btn-primary"
                    href="#get-loccode"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    Get Your Loccode
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
