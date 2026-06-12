import React, { useState } from "react";

export default function CorporatePolicies() {
  const [activeValue, setActiveValue] = useState(0);

  // Core values drawn from institutional streaming frameworks
  const corporateValues = [
    {
      id: "integrity",
      title: "Integrity",
      tagline:
        "Honest operations and total accountability at every operational tier.",
      description:
        "We are strictly guided by our Code of Business Conduct and Ethics at every level of our enterprise hierarchy. We maintain absolute transparency, accuracy, and compliance across all commercial transactions, sovereign regulatory relationships, and streaming agreements.",
    },
    {
      id: "sustainability",
      title: "Sustainability",
      tagline:
        "Long-term value generation from economic, social, and environmental perspectives.",
      description:
        "We firmly believe that financial resilience cannot be decoupled from environmental stewardship. Our decision-making infrastructure implements rigorous double-materiality metrics to monitor and lower the footprint of our production value chain.",
    },
    {
      id: "safety",
      title: "Safety",
      tagline:
        "Ensuring an uncompromised standard of physical health and well-being.",
      description:
        "We operate under the fundamental benchmark that everyone must return home safe and healthy each day. This mindset extends from our corporate offices to the physical job sites managed by our global operational and mining partners.",
    },
    {
      id: "respect",
      title: "Respect",
      tagline:
        "Honoring cultural integrity, human rights, and environmental limits.",
      description:
        "We approach every commercial asset evaluation and regional integration with deep respect for local community stakeholders, indigenous land designations, and the localized ecosystems surrounding our investment portfolio.",
    },
    {
      id: "accountability",
      title: "Accountability",
      tagline:
        "Taking complete ownership of choices to unlock operational excellence.",
      description:
        "We accept absolute ownership over our investment footprints and capital allocation strategies. This strict layer of internal accountability forms the foundation for reliable stakeholder disclosure and top-tier execution.",
    },
  ];

  // Concrete documents that tie to the values above
  const policyDocuments = [
    { name: "Code of Business Conduct and Ethics", category: "Governance" },
    { name: "Climate Change & Environmental Policy", category: "Environment" },
    { name: "Human Rights and Labor Standards Policy", category: "Social" },
    { name: "Partner & Supplier Code of Conduct", category: "Governance" },
    { name: "Community Investment & Inclusion Guidelines", category: "Social" },
    {
      name: "Health, Safety and Workplace Wellness Policy",
      category: "Health",
    },
  ];

  return (
    <div className="w-full bg-mining-alabaster py-20 px-6 md:px-12 font-sans border-t border-slate-200">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Heading Panel */}
        <div className="max-w-3xl space-y-4">
          <p className="text-[10px] uppercase tracking-widest font-bold text-mining-gold font-mono">
            Institutional Commitments
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-mining-obsidian tracking-tight font-bold">
            Our Values & Policy Framework
          </h2>
          <p className="text-sm md:text-base text-mining-ash leading-relaxed">
            We partner exclusively with asset operators and field teams who
            share our structural dedication to transparent governance and
            responsible resource management. Our everyday decisions are anchored
            by these core operational foundations.
          </p>
        </div>

        {/* Interactive Values Component Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white border border-slate-200 p-6 md:p-10 shadow-sm rounded-sm">
          {/* Left Hand Controller Rail */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible border-b lg:border-b-0 lg:border-r border-slate-100 pb-4 lg:pb-0 lg:pr-6 gap-2 snap-x scrollbar-thin">
            {corporateValues.map((val, idx) => (
              <button
                key={val.id}
                onClick={() => setActiveValue(idx)}
                className={`w-full text-left px-4 py-3.5 text-xs uppercase tracking-wider font-bold transition-all duration-150 rounded-sm whitespace-nowrap lg:whitespace-normal snap-start border-l-2 ${
                  activeValue === idx
                    ? "bg-slate-50 text-mining-gold border-mining-gold"
                    : "text-mining-ash border-transparent hover:text-mining-obsidian hover:bg-slate-50/50"
                }`}
              >
                {val.title}
              </button>
            ))}
          </div>

          {/* Right Hand Dynamic Reading Area */}
          <div className="lg:col-span-8 flex flex-col justify-center lg:pl-8 py-4 min-h-[220px]">
            <div className="space-y-4 animate-fadeIn">
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest px-2.5 py-1 bg-amber-50 text-mining-gold rounded-sm inline-block">
                Core Pillar {activeValue + 1}
              </span>
              <h3 className="font-serif text-2xl text-mining-obsidian font-bold tracking-tight">
                {corporateValues[activeValue].title}
              </h3>
              <p className="text-sm text-mining-obsidian font-semibold leading-snug">
                {corporateValues[activeValue].tagline}
              </p>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl">
                {corporateValues[activeValue].description}
              </p>
            </div>
          </div>
        </div>

        {/* Policy Documents Grid */}
        <div className="space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <h4 className="font-serif text-xl text-mining-obsidian font-bold tracking-tight">
              Governing Corporate Policies
            </h4>
            <p className="text-xs text-mining-ash mt-1">
              Clickable formal mandates applied across our direct entities and
              asset due-diligence protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {policyDocuments.map((doc, index) => (
              <div
                key={index}
                className="group border border-slate-200 bg-white p-5 hover:border-mining-gold hover:shadow-md transition-all duration-200 flex flex-col justify-between items-start rounded-sm cursor-pointer"
              >
                <div className="space-y-2 w-full">
                  <span className="text-[9px] uppercase font-mono font-bold tracking-wider text-mining-ash bg-slate-100 px-2 py-0.5 rounded-sm">
                    {doc.category}
                  </span>
                  <h5 className="text-xs font-bold text-mining-obsidian tracking-wide group-hover:text-mining-gold transition-colors pt-1">
                    {doc.name}
                  </h5>
                </div>
                <div className="w-full flex justify-end items-center text-[10px] font-bold text-mining-gold uppercase tracking-widest pt-4 opacity-70 group-hover:opacity-100 transition-opacity">
                  View Document →
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
