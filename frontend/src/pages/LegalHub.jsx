import React, { useState, useEffect } from "react";

const LEGAL_DOCUMENTS = {
  terms: {
    title: "Terms of Use",
    lastUpdated: "June 12, 2026",
    content:
      "Welcome to Cheshire Park Resources Ltd. By accessing our platform, you agree to comply with and be bound by these Terms of Use. Our services, content, and asset trackers are provided 'as is' for institutional and informational purposes. Unauthorized data extraction or malicious manipulation of our server cached metrics is strictly prohibited...",
  },
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "June 12, 2026",
    content:
      "Your privacy is paramount. This Privacy Policy details how we handle information. We do not track personal identifying information without explicit consent. For users interacting with our platform, analytical data is processed strictly to maintain state performance. We do not sell, rent, or distribute user metrics to third-party data brokers...",
  },
  cookie: {
    title: "Cookie Policy",
    lastUpdated: "June 12, 2026",
    content:
      "This platform utilizes cookies to optimize system presentation layer delivery and retain user preferences (such as your consent choices). Performance cookies help us monitor site speeds, while functional cookies store state preferences. You can adjust your specific parameters at any time via our operational dashboard hub...",
  },
};

export default function LegalHub() {
  const [activeModalKey, setActiveModalKey] = useState(null);

  const currentModalData = activeModalKey
    ? LEGAL_DOCUMENTS[activeModalKey]
    : null;

  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans py-20 px-6 md:px-12 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header Block */}
        <div className="text-center md:text-left mb-12 border-b border-slate-200 pb-8">
          <span className="text-xs uppercase tracking-[0.2em] text-amber-600 font-bold block mb-2">
            Compliance & Governance
          </span>
          <h1 className="text-3xl md:text-4xl font-serif text-slate-900 tracking-tight">
            Legal Framework & Policy Center
          </h1>
          <p className="text-slate-500 text-sm mt-2 max-w-xl">
            Review the structural agreements, operational disclosures, and data
            protection guidelines governing our platform.
          </p>
        </div>

        {/* Bento Menu Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bento Card: Terms of Use */}
          <div
            onClick={() => setActiveModalKey("terms")}
            className="md:col-span-2 bg-slate-900 text-white p-8 border border-slate-800 flex flex-col justify-between h-64 hover:border-amber-500 transition-all duration-300 cursor-pointer group shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] tracking-widest uppercase text-amber-500 font-mono font-bold">
                  Document 01 // Operations
                </span>
                <svg
                  className="w-5 h-5 text-slate-500 group-hover:text-amber-500 group-hover:translate-x-1 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-serif tracking-tight mb-2">
                Terms of Use
              </h2>
              <p className="text-slate-400 text-xs leading-relaxed line-clamp-3 max-w-md">
                Review the structural parameters, system governance rules, and
                user liabilities binding platform asset accessibility.
              </p>
            </div>
            <span className="text-[10px] font-mono text-slate-500">
              Last Modified: June 2026
            </span>
          </div>

          {/* Bento Card: Privacy Policy */}
          <div
            onClick={() => setActiveModalKey("privacy")}
            className="bg-white text-slate-900 p-8 border border-slate-200 flex flex-col justify-between h-64 hover:border-amber-500 transition-all duration-300 cursor-pointer group shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] tracking-widest uppercase text-slate-400 font-mono font-bold">
                  Document 02 // Security
                </span>
                <svg
                  className="w-5 h-5 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-serif tracking-tight mb-2">
                Privacy Policy
              </h2>
              <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                Understand exactly how we store data, handle transactional
                logging protocols, and protect platform identities.
              </p>
            </div>
            <span className="text-[10px] font-mono text-slate-400">
              Last Modified: June 2026
            </span>
          </div>

          {/* Bento Card: Cookie Policy */}
          <div
            onClick={() => setActiveModalKey("cookie")}
            className="bg-white text-slate-900 p-8 border border-slate-200 flex flex-col justify-between h-64 hover:border-amber-500 transition-all duration-300 cursor-pointer group shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] tracking-widest uppercase text-slate-400 font-mono font-bold">
                  Document 03 // Preferences
                </span>
                <svg
                  className="w-5 h-5 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-serif tracking-tight mb-2">
                Cookie Policy
              </h2>
              <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                Details regarding state retention, presentation optimization
                tokens, and browser cache performance layers.
              </p>
            </div>
            <span className="text-[10px] font-mono text-slate-400">
              Last Modified: June 2026
            </span>
          </div>

          {/* Bento Card: Interactive Widget Placeholder Card to complete Bento styling */}
          <div className="md:col-span-2 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/60 p-8 flex flex-col justify-between h-64">
            <div>
              <span className="text-[10px] tracking-widest uppercase text-amber-700 font-mono font-bold mb-2 block">
                Regulatory Compliance Status
              </span>
              <h2 className="text-lg font-serif text-slate-900 mb-1">
                Data Storage Architecture
              </h2>
              <p className="text-slate-600 text-xs leading-relaxed max-w-md">
                Our operations comply fully with global data sovereignty laws.
                Preference configuration parameters are captured exclusively
                client-side via secure local cache frameworks.
              </p>
            </div>
            <div className="flex items-center space-x-2 text-xs font-semibold text-amber-800">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span>All Systems Compliant</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MODAL OVERLAY LAYER ================= */}
      {currentModalData && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl border border-slate-200 shadow-2xl flex flex-col max-h-[85vh]">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-serif text-slate-900">
                  {currentModalData.title}
                </h3>
                <p className="text-[10px] font-mono text-slate-400 mt-0.5">
                  Last Updated: {currentModalData.lastUpdated}
                </p>
              </div>
              <button
                onClick={() => setActiveModalKey(null)}
                className="text-slate-400 hover:text-slate-900 p-1 cursor-pointer transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Content Window */}
            <div className="p-6 overflow-y-auto text-slate-600 text-sm leading-relaxed space-y-4">
              <p>{currentModalData.content}</p>
              <p className="text-xs bg-slate-50 p-4 border-l-2 border-slate-400 italic text-slate-500">
                This document serves as an active protocol declaration for
                Cheshire Park Resources Ltd. Continued usage of the site
                interface profiles registers full execution compliance
                agreement.
              </p>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setActiveModalKey(null)}
                className="px-5 py-2 text-xs uppercase font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Close Document
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
