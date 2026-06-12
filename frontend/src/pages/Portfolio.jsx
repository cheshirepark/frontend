import React, { useState } from "react";
import useSEO from "../hooks/useSEO";

export default function Portfolio() {
  useSEO({
    title: "Portfolio",
    description:
      "Our portfolio is unparalleled in the industry and offers our shareholders exposure to some of the best mines in Nigeria.",
  });

  // Track which active mining property is currently focused in the overlay viewport
  const [activeAsset, setActiveAsset] = useState(null);

  // Structural asset registry structured around key regional mineral reserves
  const assetRegistry = [
    {
      id: "asset-1",
      name: "Omo Forest Concession",
      location: "Ogun Region, Nigeria",
      type: "Primary Gold & Bitumen",
      status: "Active Production",
      image:
        "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=600&auto=format&fit=crop",
      streamTerms:
        "100% Precious Metals Stream Acquisition rights on all primary base outputs.",
      reserveLife: "14.5 Years Estimated (Proven & Probable)",
      summary:
        "The Omo Forest operational hub leverages modern open-cast extraction mechanics paired alongside mechanized processing installations. The asset delivers high-purity yield profiles while maintaining tight integration with regional ESG environmental protection frameworks.",
    },
    {
      id: "asset-2",
      name: "Jos Plateau Deep Reserves",
      location: "Plateau State, Nigeria",
      type: "Cassiterite & Columbite",
      status: "Expansion Stage",
      image:
        "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=600&auto=format&fit=crop",
      streamTerms: "85% Fixed-Rate downstream contract allocation matrix.",
      reserveLife: "22.0 Years Estimated Tier-1 Lifespan",
      summary:
        "Jos Deep serves as a foundational base-metal asset undergoing extensive sub-surface modern infrastructure development. Our technical exploration services group recently mapped expanded geological veins, multiplying long-term asset valuation metrics.",
    },
    {
      id: "asset-3",
      name: "Ilesha Gold Field Complex",
      location: "Osun Region, Nigeria",
      type: "High-Grade Orogenic Gold",
      status: "Active Production",
      image:
        "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=600&auto=format&fit=crop",
      streamTerms: "Fixed USD corporate streaming option framework.",
      reserveLife: "11.2 Years (Active Continuous Drill Updates)",
      summary:
        "The Ilesha complex stands as a premier flagship low-cost processing project. Utilizing strict zero-harm safety controls alongside localized artisan recruitment initiatives, it serves as our highest-margin asset yielding protected cash-flow metrics.",
    },
    {
      id: "asset-4",
      name: "Abakaliki Basin Project",
      location: "Ebonyi State, Nigeria",
      type: "Lead-Zinc & Silver Stream",
      status: "Milling Optimization",
      image:
        "https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?q=80&w=600&auto=format&fit=crop",
      streamTerms: "Variable commodity pricing matrix tier option protections.",
      reserveLife: "18.7 Years Verified Exploration Vector",
      summary:
        "Abakaliki coordinates extensive localized milling and processing logistics frameworks. Operating under complete accountability oversight, the basin asset processes regional output arrays to maximize commercial purity parameters smoothly.",
    },
  ];

  return (
    <div className="w-full bg-mining-alabaster font-sans">
      {/* NEW: FULL-WIDTH HERO INTRODUCTION BACKGROUND BANNER */}
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat py-28 px-6 md:px-12 bg-mining-obsidian"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1652294576306-e46550895c61?q=80&w=1600&auto=format&fit=crop')`,
        }}
      >
        {/* Dark High-Contrast Mask Layer to Shield Text Legibility */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Banner Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto text-center md:text-left">
          <span className="text-xs uppercase tracking-[0.25em] text-mining-gold font-bold block mb-3">
            Asset Operations
          </span>
          <h1 className="font-serif text-3xl md:text-5xl text-white tracking-tight mb-4 max-w-3xl">
            Our Production Portfolio
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl">
            Cheshire Park Resources Ltd controls an institutional portfolio of
            low-cost, long-life assets strategically anchored within highly
            stable West African resource corridors.
          </p>
        </div>
      </section>

      {/* CORE ASSET CONTENT REGISTRY GRID */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        {/* Authoritative 4-Column Asset Directory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {assetRegistry.map((asset) => (
            <div
              key={asset.id}
              onClick={() => setActiveAsset(asset)}
              className="group cursor-pointer bg-white border border-slate-200 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-slate-300"
            >
              <div>
                {/* Visual Image Window (Locked 16:10 Ratio for Landscapes) */}
                <div className="w-full aspect-[16/10] bg-slate-100 overflow-hidden relative border-b border-slate-100">
                  <div className="absolute inset-0 bg-mining-obsidian/10 opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-10 mix-blend-multiply" />
                  <img
                    src={asset.image}
                    alt={asset.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  {/* Absolute Badge for Operational Status */}
                  <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs text-[9px] uppercase tracking-wider font-bold text-mining-obsidian px-2 py-0.5 z-20 shadow-xs">
                    {asset.status}
                  </span>
                </div>

                {/* Text Content Block */}
                <div className="p-5 space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-mining-gold">
                    {asset.location}
                  </span>
                  <h2 className="font-serif text-lg text-mining-obsidian font-bold group-hover:text-mining-gold transition-colors duration-200 leading-snug">
                    {asset.name}
                  </h2>
                  <p className="text-xs text-slate-500 font-medium pt-1">
                    {asset.type}
                  </p>
                </div>
              </div>

              {/* View Execution Trigger Footer */}
              <div className="p-5 pt-0">
                <span className="text-[10px] uppercase tracking-widest text-mining-obsidian font-bold group-hover:text-mining-gold inline-flex items-center transition-colors">
                  View Asset Specifications{" "}
                  <span className="ml-1 transform group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP SPECIFICATIONS OVERLAY MODAL */}
      {activeAsset && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Glass Backdrop Shield Layer */}
          <div
            onClick={() => setActiveAsset(null)}
            className="absolute inset-0 bg-mining-abyss/80 backdrop-blur-sm transition-opacity duration-300"
          />

          {/* Modal Panel Container */}
          <div className="relative w-full max-w-4xl bg-white shadow-2xl overflow-hidden max-h-[90vh] md:max-h-none overflow-y-auto z-50 grid grid-cols-1 md:grid-cols-12 border border-slate-800 rounded-none">
            {/* Absolute Close Target Anchor */}
            <button
              onClick={() => setActiveAsset(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-mining-obsidian p-2 bg-slate-50 hover:bg-slate-100 transition-all z-50"
              aria-label="Close Specifications"
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

            {/* Modal Left Column: Asset Landscape Frame (Spans 5/12 Columns) */}
            <div className="md:col-span-5 w-full bg-slate-200 h-64 md:h-full relative">
              <img
                src={activeAsset.image}
                alt={activeAsset.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mining-abyss/40 to-transparent pointer-events-none" />
            </div>

            {/* Modal Right Column: Technical Core Breakdown (Spans 7/12 Columns) */}
            <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center bg-white">
              {/* Header Titles */}
              <div className="space-y-1 pb-4 border-b border-slate-100">
                <span className="text-[10px] uppercase tracking-[0.2em] text-mining-gold font-bold block">
                  {activeAsset.location} • {activeAsset.status}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-mining-obsidian font-bold tracking-tight">
                  {activeAsset.name}
                </h3>
                <p className="text-xs uppercase tracking-wider font-semibold text-mining-ash mt-1">
                  Primary Classification:{" "}
                  <span className="text-mining-obsidian font-bold">
                    {activeAsset.type}
                  </span>
                </p>
              </div>

              {/* Data Specifications Sub-Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-5 my-1 bg-slate-50 px-4 border border-slate-100">
                <div>
                  <span className="text-[10px] text-mining-ash uppercase tracking-wider font-bold block">
                    Streaming Arrangement
                  </span>
                  <p className="text-xs font-medium text-slate-700 mt-0.5 leading-relaxed">
                    {activeAsset.streamTerms}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] text-mining-ash uppercase tracking-wider font-bold block">
                    Reserve Horizon
                  </span>
                  <p className="text-xs font-medium text-slate-700 mt-0.5 leading-relaxed">
                    {activeAsset.reserveLife}
                  </p>
                </div>
              </div>

              {/* Comprehensive Summary Text */}
              <div className="text-slate-600 text-xs md:text-sm leading-relaxed pt-2">
                <p>{activeAsset.summary}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
