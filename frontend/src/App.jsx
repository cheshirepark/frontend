import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

//Components
import ScrollToTop from "./components/ScrollToTop";
import NewsArticle from "./components/NewsArticle";

//Pages
import Home from "./pages/Home";
import Sustainability from "./pages/Sustainability";
import Portfolio from "./pages/Portfolio";
import News from "./pages/News";
import Investors from "./pages/Investors";
import About from "./pages/About";
import Leadership from "./pages/Leadership";
import Contact from "./pages/Contact";

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

const SustainabilityTopics = () => (
  <div className="py-32 text-center text-xs uppercase tracking-widest font-sans font-semibold">
    Material Sustainability Topics & Impact Metrics
  </div>
);
const StrategyGoals = () => (
  <div className="py-32 text-center text-xs uppercase tracking-widest font-sans font-semibold">
    Sustainability Strategy Frameworks & 2030 Goals
  </div>
);
const PoliciesCommitments = () => (
  <div className="py-32 text-center text-xs uppercase tracking-widest font-sans font-semibold">
    Corporate Policies, Human Rights & ESG Commitments
  </div>
);
const ReportingPortal = () => (
  <div className="py-32 text-center text-xs uppercase tracking-widest font-sans font-semibold">
    ESG Reporting Index & Disclosure Document Portal
  </div>
);

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/portfolio" element={<Portfolio />} />
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
              element={<PoliciesCommitments />}
            />
            <Route
              path="/sustainability/reporting"
              element={<ReportingPortal />}
            />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}
