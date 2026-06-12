import React, { useState, useMemo } from "react";
import useSEO from "../hooks/useSEO";

export default function News() {
  useSEO({
    title: "News",
    description:
      "Keep up with us through our blog posts and various corporate news articles.",
  });

  // Input State Management for live filtering matrices
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("All");

  // Mock array structure replicating Sanity's raw payload output format
  const corporateNewsStream = [
    {
      _id: "news-1",
      title:
        "Cheshire Park Resources Ltd Secures Strategic Processing Site Extensions",
      date: "May 14, 2026",
      year: "2026",
      category: "Corporate Update",
      excerpt:
        "Operational pipelines expand across target industrial zones following structural due diligence validations by regional environmental compliance boards.",
    },
    {
      _id: "news-2",
      title:
        "Cheshire Park Appoints Dr. Amara Nwosu to Lead Technical Exploration Services",
      date: "March 08, 2026",
      year: "2026",
      category: "Management",
      excerpt:
        "Dr. Nwosu joins the executive steering committee to optimize geological asset reserves validation maps using high-precision eco-survey tools.",
    },
    {
      _id: "news-3",
      title:
        "Fourth Quarter 2025 Financial Statement Audits & Stream Distributions Complete",
      date: "January 22, 2026",
      year: "2026",
      category: "Financials",
      excerpt:
        "Corporate treasury logs high-margin exposure parameters with protected overhead metrics matching institutional investor expectations.",
    },
    {
      _id: "news-4",
      title:
        "Inaugural Sustainable Mining Framework Adopted in West African Concessions",
      date: "November 11, 2025",
      year: "2025",
      category: "Sustainability",
      excerpt:
        "Establishing a zero-harm operational covenant aligned directly with global ESG transparency metrics and regional community board initiatives.",
    },
    {
      _id: "news-5",
      title:
        "Cheshire Park Enters Long-Term Precious Metals Streaming Joint Venture",
      date: "August 04, 2025",
      year: "2025",
      category: "Streaming Agreements",
      excerpt:
        "Securing stable mineral downstream logistics processing pathways to insulate enterprise portfolio margins from transactional spot volatility.",
    },
  ];

  // 1. Compute dynamic list of active historical years available across documents
  const yearTimelineOptions = useMemo(() => {
    const years = new Set(corporateNewsStream.map((post) => post.year));
    return ["All", ...Array.from(years).sort((a, b) => b - a)];
  }, [corporateNewsStream]);

  // 2. Multi-threaded filtering algorithm matching both selected Year and search query lines
  const filteredNewsItems = useMemo(() => {
    return corporateNewsStream.filter((post) => {
      const matchesYear = selectedYear === "All" || post.year === selectedYear;

      const normalizedQuery = searchQuery.toLowerCase();
      const matchesSearch =
        post.title.toLowerCase().includes(normalizedQuery) ||
        post.excerpt.toLowerCase().includes(normalizedQuery) ||
        post.category.toLowerCase().includes(normalizedQuery);

      return matchesYear && matchesSearch;
    });
  }, [searchQuery, selectedYear, corporateNewsStream]);

  return (
    <div className="w-full bg-mining-alabaster font-sans">
      {/* NEW: FULL-WIDTH MEDIA HUB BACKGROUND BANNER */}
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat py-28 px-6 md:px-12 bg-mining-obsidian"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504711434969-e33886168f5c')`,
        }}
      >
        {/* Dark High-Contrast Mask Layer to Shield Text Legibility */}
        <div className="absolute inset-0 bg-black/65 z-0" />

        {/* Banner Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto text-center md:text-left">
          <span className="text-xs uppercase tracking-[0.25em] text-mining-gold font-bold block mb-3">
            Media Centre
          </span>
          <h1 className="font-serif text-3xl md:text-5xl text-white tracking-tight mb-4 max-w-3xl">
            News & Regulatory Disclosures
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl">
            Review public records, structural streaming announcements, financial
            quarters tracking logs, and official corporate declarations.
          </p>
        </div>
      </section>

      {/* SEARCH AND GRID DISCLOSURE ACTIONS ECOSYSTEM */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        {/* HIGH-END CONTROL STRIP (Search Box + Year Filter Row) */}
        <div className="bg-white border border-slate-200 p-4 md:p-6 mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Left Block: Clean Text Filtering Box */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search statements..."
              className="w-full bg-slate-50 border border-slate-200 pl-4 pr-10 py-2.5 text-xs text-mining-obsidian focus:outline-none focus:border-mining-gold focus:bg-white transition-all rounded-none placeholder-slate-400 font-medium tracking-wide"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
          </div>

          {/* Right Block: Interactive Horizontal Timeline Matrix */}
          <div className="flex items-center space-x-1 overflow-x-auto pb-1 md:pb-0">
            <span className="text-[10px] uppercase tracking-widest font-bold text-mining-ash mr-3 hidden sm:inline">
              Filter Year:
            </span>
            {yearTimelineOptions.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer rounded-none border ${
                  selectedYear === year
                    ? "bg-mining-obsidian border-mining-obsidian text-white"
                    : "bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-100"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* PRESS DISCLOSURE RESULTS INDEX LISTING */}
        {filteredNewsItems.length > 0 ? (
          <div className="space-y-4">
            {filteredNewsItems.map((post) => {
              const urlSlug = post.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, "");

              return (
                <article
                  key={post._id}
                  className="bg-white border border-slate-200 p-6 md:p-8 flex flex-col md:flex-row md:items-start md:justify-between gap-6 transition-all duration-200 hover:shadow-sm group"
                >
                  {/* Information Core Block */}
                  <div className="space-y-2 max-w-4xl">
                    <div className="flex items-center space-x-3 text-[10px] uppercase tracking-widest font-bold">
                      <span className="text-mining-gold">{post.category}</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-mining-ash font-mono">
                        {post.date}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg md:text-xl text-mining-obsidian group-hover:text-mining-gold transition-colors duration-200 leading-snug">
                      <a href={`/news/${urlSlug}`}>{post.title}</a>
                    </h3>

                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed pt-1">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Read Release Access Arrow Accent */}
                  <div className="pt-1 md:pt-4 self-end md:self-auto shrink-0">
                    <a
                      href={`/news/${urlSlug}`}
                      className="text-[10px] uppercase tracking-widest font-bold text-mining-obsidian group-hover:text-mining-gold inline-flex items-center gap-1.5 transition-colors"
                    >
                      View Release
                      <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                        →
                      </span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* Empty Search Fallback State Layout */
          <div className="text-center py-24 bg-white border border-slate-200">
            <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">
              No official disclosures matched your search parameter profiles.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedYear("All");
              }}
              className="mt-4 text-xs font-bold text-mining-gold uppercase tracking-wider underline hover:text-mining-obsidian"
            >
              Reset Query Matrix
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
