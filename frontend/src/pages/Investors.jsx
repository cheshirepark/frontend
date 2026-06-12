import React from "react";
import useSEO from "../hooks/useSEO";

export default function Investors() {
  useSEO({
    title: "Investors",
    description:
      "Our Investor Centre provides the latest updates on Cheshire Park Resources’s financial results, shareholder information, regulatory filings, events and presentations.",
  });

  const investorBento = [
    {
      title: "Financial Reports & Filings",
      description:
        "Access our comprehensive library of annual balance sheets, quarterly regulatory disclosures, MD&A analysis statements, and transparent financial auditing updates.",
      href: "/investors/financial-reports",
      className: "md:col-span-2 bg-mining-obsidian text-white border-none",
      textClass: "text-slate-300",
      accent: "text-white",
    },
    {
      title: "Events & Presentations",
      description:
        "Review corporate slide decks, upcoming quarterly earnings call coordinates, asset site summaries, and webcasts engineered for institutional capital partners.",
      href: "/investors/events-presentations",
      className: "md:col-span-1 bg-white border border-slate-200",
      textClass: "text-slate-600",
      accent: "text-mining-obsidian",
    },
    {
      title: "Shareholder Information",
      description:
        "Examine our capital structure overview, transfer agent coordinates, share register distribution matrices, dividend history schedules, and key investor FAQ profiles.",
      href: "/investors/shareholder-information",
      className:
        "md:col-span-3 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200",
      textClass: "text-slate-600",
      accent: "text-mining-gold",
    },
  ];

  const now = new Date();
  const quarter = Math.floor(now.getMonth() / 3) + 1;
  const year = now.getFullYear();

  return (
    <div className="w-full bg-mining-alabaster font-sans">
      {/* NEW: FULL-WIDTH INVESTOR HUB BACKGROUND BANNER */}
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat py-28 px-6 md:px-12 bg-mining-obsidian"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1571624436279-b272aff752b5?q=80&w=1600&auto=format&fit=crop')`,
        }}
      >
        {/* Dark High-Contrast Mask Layer to Shield Text Legibility */}
        <div className="absolute inset-0 bg-black/70 z-0" />

        {/* Banner Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto text-center md:text-left">
          <span className="text-xs uppercase tracking-[0.25em] text-mining-gold font-bold block mb-3">
            Investor Relations
          </span>
          <h1 className="font-serif text-3xl md:text-5xl text-white tracking-tight mb-5 max-w-4xl leading-tight">
            Superior Capital Allocation, Delivering High-Margin Exposure to
            Tier-1 Mining Assets.
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl">
            Cheshire Park Resources Ltd provides public and institutional
            markets with a lower-risk vehicle for mineral streaming value
            accumulation. By anchoring baseline assets against strict
            multi-jurisdiction risk matrices, we generate consistent cash-flow
            options with protected corporate overhead metrics.
          </p>
        </div>
      </section>

      {/* 2. Macro Institutional Quick Stats Banner */}
      <section className="bg-mining-abyss text-white py-12 px-6 md:px-12 border-b border-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="border-l border-slate-800 pl-6">
            <span className="font-mono text-2xl font-bold text-white block">
              {`Q${quarter} ${year}`}
            </span>
            <span className="text-[10px] text-mining-ash uppercase tracking-widest font-semibold mt-1 block">
              Next Earnings Release
            </span>
          </div>
          <div className="border-l border-slate-800 pl-6">
            <span className="font-mono text-2xl font-bold text-white block">
              USD / NGN
            </span>
            <span className="text-[10px] text-mining-ash uppercase tracking-widest font-semibold mt-1 block">
              Reporting Standard
            </span>
          </div>
          <div className="border-l border-slate-800 pl-6">
            <span className="font-mono text-2xl font-bold text-mining-gold block">
              Stable
            </span>
            <span className="text-[10px] text-mining-ash uppercase tracking-widest font-semibold mt-1 block">
              Capitalization Framework
            </span>
          </div>
        </div>
      </section>

      {/* 3. The Investor 3-Unit Bento Navigation Directory */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="text-center md:text-left mb-12">
          <h2 className="text-xs uppercase tracking-widest text-mining-ash font-bold mb-2">
            Investor Hub Directory
          </h2>
          <p className="font-serif text-2xl text-mining-obsidian">
            Access performance tracking metrics, timelines, and disclosures.
          </p>
        </div>

        {/* Responsive layout grouping utilizing a 3-column system matching our object mappings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {investorBento.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className={`p-8 md:p-10 flex flex-col justify-between group transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 rounded-none ${item.className}`}
            >
              <div>
                <h3
                  className={`font-serif text-2xl mb-4 transition-colors duration-200 group-hover:text-mining-gold ${item.accent === "text-white" ? "text-white" : "text-mining-obsidian"}`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-xs leading-relaxed max-w-2xl ${item.textClass}`}
                >
                  {item.description}
                </p>
              </div>

              <div className="mt-12 flex items-center justify-between text-xs font-semibold tracking-wider uppercase">
                <span className="group-hover:underline">Explore Portal</span>
                <span className="transform translate-x-0 group-hover:translate-x-1.5 transition-transform duration-200">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
