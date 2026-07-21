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

export default function App() {
  const location = useLocation();

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
        </Routes>
      </AnimatePresence>
      <SiteFooter />
    </>
  );
}
