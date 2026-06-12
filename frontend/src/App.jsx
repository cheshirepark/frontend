import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

//Components
import ScrollToTop from "./components/ScrollToTop";
import NewsArticle from "./components/NewsArticle";
import CorporatePolicies from "./components/CorporatePolicies";
import SustainabilityTopics from "./components/SustainabilityTopics";

//Pages
import Home from "./pages/Home";
import Sustainability from "./pages/Sustainability";
import Portfolio from "./pages/Portfolio";
import News from "./pages/News";
import Investors from "./pages/Investors";
import About from "./pages/About";
import Leadership from "./pages/Leadership";
import Contact from "./pages/Contact";
import LegalHub from "./pages/LegalHub";

const BusinessModel = () => (
  <div className="py-32 text-center text-xs uppercase tracking-widest font-sans font-semibold">
    Our Business Model Workspace
  </div>
);

const Governance = () => (
  <div className="py-32 text-center text-xs uppercase tracking-widest font-sans font-semibold">
    Corporate Governance Frameworks
  </div>
);

const EventsPresentations = () => (
  <div className="py-32 text-center text-xs uppercase tracking-widest font-sans font-semibold">
    Events & Presentations Archive Workspace
  </div>
);
const FinancialsFilings = () => (
  <div className="py-32 text-center text-xs uppercase tracking-widest font-sans font-semibold">
    Financial Reports & Regulatory Filings Workspace
  </div>
);
const ShareholderInfo = () => (
  <div className="py-32 text-center text-xs uppercase tracking-widest font-sans font-semibold">
    Shareholder Structure & Capital Information
  </div>
);

const StrategyGoals = () => (
  <div className="py-32 text-center text-xs uppercase tracking-widest font-sans font-semibold">
    Sustainability Strategy Frameworks & 2030 Goals
  </div>
);

const ReportingPortal = () => (
  <div className="py-32 text-center text-xs uppercase tracking-widest font-sans font-semibold">
    ESG Reporting Index & Disclosure Document Portal
  </div>
);

export default function App() {
  const [showBanner, setShowBanner] = useState(false);

  // Check localStorage on mount to determine if the first-time banner is required
  useEffect(() => {
    const consentToken = localStorage.getItem("cpr_cookie_consent");
    if (!consentToken) {
      setShowBanner(true);
    }
  }, []);

  const handleCookieAcceptance = (type) => {
    localStorage.setItem("cpr_cookie_consent", type);
    setShowBanner(false);
  };

  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/legal" element={<LegalHub />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<NewsArticle />} />

            {/* NEW: Investors Namespace Sub-Routing Ecosystem */}
            <Route path="/investors" element={<Investors />} />
            <Route
              path="/investors/events-presentations"
              element={<EventsPresentations />}
            />
            <Route
              path="/investors/financial-reports"
              element={<FinancialsFilings />}
            />
            <Route
              path="/investors/shareholder-information"
              element={<ShareholderInfo />}
            />

            {/* Main Corporate Overview /About Root */}
            <Route path="/about" element={<About />} />

            {/* Context Sub-Routes neatly following the /about/ namespace */}
            <Route path="/about/business-model" element={<BusinessModel />} />
            <Route path="/about/leadership" element={<Leadership />} />
            <Route path="/about/governance" element={<Governance />} />
            <Route path="/about/contact" element={<Contact />} />

            {/* {Sustainability}*/}
            <Route path="/sustainability" element={<Sustainability />} />
            <Route
              path="/sustainability/topics"
              element={<SustainabilityTopics />}
            />
            <Route path="/sustainability/goals" element={<StrategyGoals />} />
            <Route
              path="/sustainability/policies"
              element={<CorporatePolicies />}
            />
            <Route
              path="/sustainability/reporting"
              element={<ReportingPortal />}
            />
          </Routes>
        </main>
        <Footer />
      </Router>

      {/* ================= FIRST-TIME COOKIE BANNER BANNER ================= */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 w-full bg-slate-900 border-t border-slate-800 shadow-2xl z-40 p-6 md:py-8 md:px-12 transform transition-all duration-500 ease-in-out">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-amber-500">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 009 11V7a2 2 0 00-2-2H6a2 2 0 00-2 2v3.891c0 2.946.755 5.823 2.15 8.414m7.415-10.39a13.916 13.916 0 00-2.15-8.414m0 0A13.917 13.917 0 0115 11v4a2 2 0 002 2h1a2 2 0 002-2v-3.891c0-2.946-.755-5.823-2.15-8.414M6 5.5A2.5 2.5 0 018.5 3h7A2.5 2.5 0 0118 5.5V7H6V5.5z"
                  />
                </svg>
                <span className="text-[11px] font-mono tracking-widest font-bold uppercase">
                  Privacy Preference Configuration
                </span>
              </div>
              <h4 className="text-white text-lg font-serif">
                We respect your data sovereignty
              </h4>
              <p className="text-slate-400 text-xs max-w-3xl leading-relaxed">
                We use cookies to enhance internal presentation layout
                performance, store preference configurations, and map cached
                server telemetry data. Review our{" "}
                <button
                  onClick={() => setActiveModalKey("cookie")}
                  className="text-amber-500 underline font-medium hover:text-amber-400 cursor-pointer focus:outline-none"
                >
                  Cookie Policy
                </button>{" "}
                for full strategic matrices.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <button
                onClick={() => handleCookieAcceptance("essential")}
                className="px-5 py-2.5 text-xs uppercase font-bold tracking-wider text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 transition-colors cursor-pointer text-center"
              >
                Essential Only
              </button>
              <button
                onClick={() => handleCookieAcceptance("all")}
                className="px-6 py-2.5 text-xs uppercase font-bold tracking-wider bg-amber-500 text-slate-950 hover:bg-amber-400 transition-colors cursor-pointer text-center"
              >
                Accept All Strategy
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
