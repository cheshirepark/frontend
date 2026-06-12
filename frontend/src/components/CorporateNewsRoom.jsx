import React from "react";

// Example structured data type matching Sanity's output format
const sampleNews = [
  {
    id: "1",
    publishedAt: "June 04, 2026",
    category: "Corporate Update",
    title:
      "Strategic Partnership Finalized for Ultra-Modern Processing Facility Expansion",
    excerpt:
      "Agreement accelerates localized mineral refinement infrastructure investments aligned with national downstream processing frameworks.",
  },
  {
    id: "2",
    publishedAt: "May 20, 2026",
    category: "Sustainability",
    title:
      "Publishing Our 2025 Annual Environmental, Social, and Governance (ESG) Impact Assessment",
    excerpt:
      "Detailing our safe water access initiatives, community development investments, and absolute zero-harm site protocols across operational zones.",
  },
];

export default function CorporateNewsroom() {
  return (
    <section className="bg-white py-24 px-6 md:px-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-200">
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-600 font-bold block mb-2">
              Media & Announcements
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 tracking-tight">
              Latest Insights & Disclosures
            </h2>
          </div>
          <a
            href="/news"
            className="mt-4 md:mt-0 text-sm font-semibold text-slate-800 hover:text-amber-600 transition-colors duration-200 flex items-center group"
          >
            View All Press Releases
            <span className="transform group-hover:translate-x-1 transition-transform duration-200 ml-1">
              →
            </span>
          </a>
        </div>

        {/* News Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Featured Large Column */}
          <div className="lg:col-span-7 flex flex-col justify-between group cursor-pointer">
            <div>
              <div className="bg-slate-900 aspect-[16/10] w-full mb-6 overflow-hidden relative">
                {/* Fallback pattern graphic or Sanity Image placeholder */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="absolute bottom-0 left-0 bg-gradient-to-t from-slate-950 p-6 w-full">
                  <span className="inline-block bg-amber-600 text-[10px] uppercase tracking-wider text-white px-2 py-0.5 font-bold mb-3">
                    Featured Operations
                  </span>
                </div>
              </div>
              <span className="text-xs text-slate-500 block mb-2 font-medium">
                June 07, 2026
              </span>
              <h3 className="text-2xl font-serif text-slate-900 mb-4 group-hover:text-amber-600 transition-colors duration-200 leading-snug">
                Optimizing Secondary Asset Extractions to Build Resilient
                Regional Value Chains
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
                A thorough breakdown of technological implementations across our
                southwestern extraction points, showing enhanced yield metrics
                while reducing localized ecological footprints.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider group-hover:underline">
                Read Executive Overview
              </span>
            </div>
          </div>

          {/* Right Column Stacked List */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 divide-y divide-slate-200 lg:divide-y-0 lg:space-y-0">
            {sampleNews.map((item, index) => (
              <div
                key={item.id}
                className={`group cursor-pointer ${index !== 0 ? "lg:border-t lg:border-slate-200 lg:pt-8" : ""}`}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-xs text-slate-400 font-medium">
                    {item.publishedAt}
                  </span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-amber-600">
                    {item.category}
                  </span>
                </div>
                <h4 className="text-lg font-serif text-slate-900 mb-2 group-hover:text-amber-600 transition-colors duration-200 leading-snug">
                  {item.title}
                </h4>
                <p className="text-slate-600 text-xs line-clamp-2 leading-relaxed">
                  {item.excerpt}
                </p>
                <div className="mt-3 flex items-center text-xs font-semibold text-slate-800 group-hover:text-amber-600">
                  <span>View Release</span>
                  <span className="ml-1 opacity-0 group-hover:opacity-100 transform translate-x-[-4px] group-hover:translate-x-0 transition-all duration-200">
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
