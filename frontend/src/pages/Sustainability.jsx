import React from "react";
import useSEO from "../hooks/useSEO";

export default function Sustainability() {
  useSEO({
    title: "Sustainability",
    description:
      "We operate with a clear purpose to create sustainable value for all of our stakeholders through responsible business practices.",
  });

  // Balanced 4-item bento grid mapping for ESG portal routes
  const sustainabilityBento = [
    {
      title: "Our Sustainability Topics",
      description:
        "Examine our material evaluation frameworks, localized ecosystem protection plans, water stewardship, and direct community integration protocols.",
      href: "/sustainability/topics",
      className: "md:col-span-2 bg-mining-obsidian text-white border-none",
      textClass: "text-slate-300",
      accent: "text-white",
    },
    // {
    //   title: "Strategy & Goals",
    //   description:
    //     "Review our structured roadmap to 2030, highlighting net-zero emissions tracking maps, risk mitigation paths, and zero-harm operational targets.",
    //   href: "/sustainability/strategy",
    //   className: "md:col-span-1 bg-white border border-slate-200",
    //   textClass: "text-slate-600",
    //   accent: "text-mining-obsidian",
    // },
    {
      title: "Policies & Commitments",
      description:
        "Access our strict institutional code of ethics, comprehensive human rights statements, health and safety policies, and international joint-venture governance protocols.",
      href: "/sustainability/policies",
      className: "md:col-span-1 bg-white border border-slate-200",
      textClass: "text-slate-600",
      accent: "text-mining-obsidian",
    },
    // {
    //   title: "Reporting & Disclosure Portal",
    //   description:
    //     "Download formal ESG performance data archives, annual asset transparency logs, Global Reporting Initiative (GRI) sheets, and verified safety statistics.",
    //   href: "/sustainability/reporting",
    //   className:
    //     "md:col-span-2 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200",
    //   textClass: "text-slate-600",
    //   accent: "text-mining-gold",
    // },
  ];

  return (
    <div className="w-full bg-mining-alabaster font-sans">
      {/* NEW: FULL-WIDTH SUSTAINABILITY HERO BACKGROUND BANNER */}
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat py-28 px-6 md:px-12 bg-mining-obsidian"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1609957920490-7ac36a24408c?q=80&w=1600&auto=format&fit=crop')`,
        }}
      >
        {/* Dark High-Contrast Mask Layer to Shield Text Legibility */}
        <div className="absolute inset-0 bg-black/65 z-0" />

        {/* Banner Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto text-center md:text-left">
          <span className="text-xs uppercase tracking-[0.25em] text-mining-gold font-bold block mb-3">
            ESG & Accountability
          </span>
          <h1 className="font-serif text-3xl md:text-5xl text-white tracking-tight mb-4 max-w-4xl">
            Sustainable Exploration, Preserving Long-Term Ecosystem Value.
          </h1>
        </div>
      </section>

      {/* 2. Asymmetric Dual-Column Approach Module */}
      <section className="bg-white py-24 px-6 md:px-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Industrial Site Visual Frame (Spans 5 Columns) */}
          <div className="lg:col-span-5 w-full">
            <div className="w-full h-80 lg:h-[400px] bg-slate-100 overflow-hidden border border-slate-200 shadow-sm relative group">
              <div className="absolute inset-0 bg-mining-obsidian/10 mix-blend-multiply z-10" />
              {/* Premium industrial open-cast site asset backdrop context */}
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.02]"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1626710507764-146db0a81e44?q=80&w=1740&auto=format&fit=crop')`,
                }}
              />
            </div>
          </div>

          {/* Right Column: Heading and Formal Content Block (Spans 7 Columns) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-1 text-center lg:text-left">
              <span className="text-[10px] uppercase tracking-[0.2em] text-mining-gold font-bold block">
                Framework Strategy
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-mining-obsidian tracking-tight font-bold">
                Our Approach to Sustainability
              </h2>
              <div className="w-12 h-[2px] bg-mining-gold mx-auto lg:mx-0 mt-3" />
            </div>

            <div className="text-slate-600 text-sm md:text-base space-y-4 leading-relaxed">
              <p>
                At Cheshire Park Resources Ltd, ESG excellence is intricately
                integrated straight into our core allocation business model. We
                firm believe that responsible resource acquisition requires
                rigorous accountability timelines, active asset stewardship, and
                robust risk mitigation profiles across all active West African
                operation hubs.
              </p>
              <p>
                By building deep structural alignments alongside our processing
                stakeholders and regional community boards, we preserve capital
                velocity while actively insulating long-term investor portfolios
                from operational and environmental liability exposure points.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 4-Item Sustainability Bento Matrix Directory */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="text-center md:text-left mb-12">
          <h3 className="text-xs uppercase tracking-widest text-mining-ash font-bold mb-2">
            Sustainability Hub
          </h3>
          <p className="font-serif text-2xl text-mining-obsidian">
            Explore our corporate strategy profiles and environmental standards.
          </p>
        </div>

        {/* 3-Column responsive layout system balancing the 4-item list map */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sustainabilityBento.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className={`p-8 md:p-10 flex flex-col justify-between group transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 rounded-none ${item.className}`}
            >
              <div>
                <h4
                  className={`font-serif text-xl mb-4 transition-colors duration-200 group-hover:text-mining-gold ${item.accent === "text-white" ? "text-white" : "text-mining-obsidian"}`}
                >
                  {item.title}
                </h4>
                <p
                  className={`text-xs leading-relaxed max-w-xl ${item.textClass}`}
                >
                  {item.description}
                </p>
              </div>

              <div className="mt-12 flex items-center justify-between text-xs font-semibold tracking-wider uppercase">
                <span className="group-hover:underline">Review Parameters</span>
                <span className="transform translate-x-0 group-hover:translate-x-1.5 transition-transform duration-200">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 4. Fine Print: Institutional Legal Disclosure Safe-Harbor */}
      <footer className="max-w-7xl mx-auto px-6 md:px-12 pb-16 pt-8 border-t border-slate-200">
        <p className="text-[11px] leading-relaxed text-slate-400 font-normal max-w-5xl">
          <span className="font-bold text-slate-500 uppercase tracking-wider block mb-1">
            Notes:
          </span>
          1. Statements made in this section contain forward-looking information
          and readers are cautioned that actual outcomes may vary. Please see
          “Cautionary Note Regarding Forward-Looking Statements” for material
          risks, assumptions and important disclosure associated with this
          information.
        </p>
      </footer>
    </div>
  );
}
