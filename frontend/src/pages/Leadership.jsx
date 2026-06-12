import React, { useState } from "react";
import useSEO from "../hooks/useSEO";

export default function Leadership() {
  // Track which executive profile is currently pulled into the active modal focus window
  const [activeExec, setActiveExec] = useState(null);

  useSEO({
    title: "Leadership",
    description: "The brains behind Cheshire Park Resources",
  });

  // Initial corporate mock directory structured around industry archetypes
  const executiveRoster = [
    {
      id: "exec-1",
      name: "Olumide Cheshire-Park",
      role: "Managing Director & CEO",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
      bio: "Olumide brings over twenty-five years of project finance orchestration and primary resource exploration experience across sub-Saharan Africa. Prior to founding Cheshire Park Resources, he directed regional asset pipelines for institutional joint ventures, specializing in the deployment of sustainable processing logistics ecosystems and downstream supply chains.",
    },
    {
      id: "exec-2",
      name: "Marcus Vance",
      role: "Chief Financial Officer",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
      bio: "Marcus oversees global corporate treasury, capitalization strategies, and financial compliance audit reporting. With an extensive background in commodities streams, commercial risk assessment, and equity distribution matrices, he manages our capital structure to shield long-term investors from asset volatility.",
    },
    {
      id: "exec-3",
      name: "Dr. Amara Nwosu",
      role: "VP, Exploration & Technical Services",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
      bio: "Dr. Nwosu manages our core geological surveying teams, asset reserves validation, and primary technical due diligence pipelines. Holding a Ph.D. in Economic Geology, her advanced framework analytics optimize resource acquisition modeling while minimizing infrastructure environmental footprint yields.",
    },
    {
      id: "exec-4",
      name: "Tunde Bakare",
      role: "Director of Legal & Corporate Governance",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
      bio: "Tunde directs international regulatory compliance, operational concession protocols, and legal frameworks across all active jurisdictions. His governance team ensures absolute structural transparency, working directly alongside regional community boards to anchor our zero-harm social accountability covenants.",
    },
  ];

  return (
    <div className="w-full bg-mining-alabaster py-24 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Institutional Section Intro Heading */}
        <div className="text-center md:text-left mb-16 max-w-2xl border-b border-slate-200 pb-8">
          <span className="text-xs uppercase tracking-[0.25em] text-mining-gold font-bold block mb-3">
            Company Management
          </span>
          <h1 className="font-serif text-3xl md:text-4xl text-mining-obsidian tracking-tight mb-4">
            Leadership & Executive Council
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            Our operational steering committee balances decades of execution
            strategy, logistical expertise, and rigorous risk oversight to
            maximize asset value metrics safely.
          </p>
        </div>

        {/* 4-Column Roster Layout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {executiveRoster.map((exec) => (
            <div
              key={exec.id}
              onClick={() => setActiveExec(exec)}
              className="group cursor-pointer flex flex-col bg-white border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-md hover:border-slate-300"
            >
              {/* Profile Image Window */}
              <div className="w-full aspect-[4/5] bg-slate-100 overflow-hidden relative">
                <div className="absolute inset-0 bg-mining-obsidian/5 opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-10 mix-blend-multiply" />
                <img
                  src={exec.image}
                  alt={exec.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              {/* Identity Labels Pane */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg text-mining-obsidian font-bold leading-snug group-hover:text-mining-gold transition-colors duration-200">
                    {exec.name}
                  </h3>
                  <p className="text-[11px] uppercase tracking-wider font-semibold text-mining-ash mt-1.5">
                    {exec.role}
                  </p>
                </div>

                <span className="text-[10px] uppercase tracking-widest text-mining-gold font-bold mt-6 inline-flex items-center group-hover:underline">
                  Read Profile{" "}
                  <span className="ml-1 transform group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP INTERACTIVE MODAL OVERLAY */}
      {activeExec && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fade-in">
          {/* Dark Glass Backdrop Mask Dismiss Layer */}
          <div
            onClick={() => setActiveExec(null)}
            className="absolute inset-0 bg-mining-abyss/80 backdrop-blur-sm transition-opacity duration-300"
          />

          {/* Modal Architecture Panel Box */}
          <div className="relative w-full max-w-4xl bg-white shadow-2xl overflow-hidden max-h-[90vh] md:max-h-none overflow-y-auto z-50 grid grid-cols-1 md:grid-cols-12 border border-slate-800 rounded-none">
            {/* Close Toggle Target Float Top-Right */}
            <button
              onClick={() => setActiveExec(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-mining-obsidian p-2 bg-slate-50 hover:bg-slate-100 transition-all z-50"
              aria-label="Close Modal"
            >
              <svg
                className="w-5 h-5"
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

            {/* Modal Column Left: High Res Focus Image (Spans 5/12 Columns) */}
            <div className="md:col-span-5 w-full bg-slate-100 h-72 md:h-full relative">
              <img
                src={activeExec.image}
                alt={activeExec.name}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Modal Column Right: Deep Executive Profile Bio Text (Spans 7/12 Columns) */}
            <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center bg-white">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-mining-gold font-bold block mb-1">
                  Executive Management
                </span>
                <h2 className="font-serif text-2xl md:text-3xl text-mining-obsidian font-bold tracking-tight">
                  {activeExec.name}
                </h2>
                <p className="text-xs uppercase tracking-wider font-semibold text-mining-ash mt-2 pb-4 border-b border-slate-100">
                  {activeExec.role}
                </p>
              </div>

              {/* Dynamic Scrollable Paragraph Area */}
              <div className="mt-6 text-slate-600 text-sm md:text-base leading-relaxed space-y-4">
                <p>{activeExec.bio}</p>
                <p className="text-xs text-mining-ash italic pt-2">
                  Key Oversight Verticals: Capital Strategy Allocation,
                  Cross-Jurisdictional Auditing, Stakeholder Value Preservation.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
