import React from "react";
import useSEO from "../hooks/useSEO";

export default function BusinessModel() {
  useSEO({
    title: "Our Business Model",
    description:
      "The core goal, vision, and mission driving Cheshire Park Resources Ltd.",
  });

  return (
    <div className="w-full bg-mining-alabaster font-sans text-mining-obsidian min-h-screen py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Page Header */}
        <div className="border-b border-slate-200 pb-8 space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-mining-gold font-bold font-mono">
            Corporate Governance
          </span>
          <h1 className="font-serif text-3xl md:text-4xl text-mining-obsidian tracking-tight font-bold">
            Business Model
          </h1>
        </div>

        {/* 1. OUR GOAL */}
        <div className="bg-white border border-slate-200 p-8 md:p-10 shadow-sm hover:border-mining-gold transition-colors duration-200 flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl pointer-events-none" />
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-mining-gold mb-3 block">
            Our Goal
          </span>
          <h2 className="text-slate-700 text-base md:text-lg leading-relaxed font-serif">
            To build a smarter, more efficient, and responsible mining company that creates lasting value from mineral resources.
          </h2>
        </div>

        {/* 2. VISION & MISSION GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Our Vision */}
          <div className="bg-white border border-slate-200 p-8 md:p-10 shadow-sm hover:border-mining-gold transition-colors duration-200 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-mining-gold rounded-full" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-mining-gold">
                  Our Vision
                </span>
              </div>
              <p className="text-slate-700 text-base md:text-lg leading-relaxed font-serif">
                To become a leading modern mining company by combining innovation, technology, operational excellence, and responsible mining practices to unlock the value of mineral resources and contribute to sustainable economic development.
              </p>
            </div>
          </div>

          {/* Our Mission */}
          <div className="bg-white border border-slate-200 p-8 md:p-10 shadow-sm hover:border-mining-gold transition-colors duration-200 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-mining-gold rounded-full" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-mining-gold">
                  Our Mission
                </span>
              </div>
              <p className="text-slate-700 text-base md:text-lg leading-relaxed font-serif">
                To responsibly explore, develop, and produce mineral resources using modern technology and innovative mining techniques while creating lasting value for our people, communities, partners, and stakeholders.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
