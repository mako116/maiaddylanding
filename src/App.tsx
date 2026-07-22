import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import FaqPage from "./pages/FaqPage";
import DevelopersPage from "./pages/DevelopersPage";
import LogisticsPage from "./pages/LogisticsPage";
import EcommercePage from "./pages/EcommercePage";
import FintechPage from "./pages/FintechPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import CommunityPage from "./pages/CommunityPage";
import { getAppStoreUrl } from "./utils/appRedirect";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("a");
      if (link) {
        const text = (link.textContent || "").trim().toLowerCase();
        const href = (link.getAttribute("href") || "").toLowerCase();
        if (
          text.includes("get your loccode") ||
          text.includes("get loccode") ||
          href.includes("get-loccode") ||
          link.classList.contains("js-get-loccode")
        ) {
          link.href = getAppStoreUrl();
          link.target = "_blank";
          link.rel = "noopener noreferrer";
        }
      }
    };

    document.addEventListener("click", handleGlobalClick);
    return () => document.removeEventListener("click", handleGlobalClick);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollToTop />
      <SiteHeader />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/developers" element={<DevelopersPage />} />
          <Route path="/logistics" element={<LogisticsPage />} />
          <Route path="/ecommerce" element={<EcommercePage />} />
          <Route path="/fintech" element={<FintechPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/community" element={<CommunityPage />} />
        </Routes>
      </AnimatePresence>
      <SiteFooter />
    </>
  );
}
