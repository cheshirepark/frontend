import React, { useState, useEffect } from "react";
import { client } from "../sanityClient";

export default function CorporateNewsRoom() {
  const [featuredArticle, setFeaturedArticle] = useState(null);
  const [standardArticles, setStandardArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function syncNewsstream() {
      try {
        // Query fetches the single primary active featured card + the two latest updates
        const query = `{
          "featured": *[_type == "news" && featured == true] | order(publishedAt desc)[0] {
            _id, title, "slug": slug.current, publishedAt, category, excerpt, "imageUrl": featuredImage.asset->url
          },
          "standard": *[_type == "news" && (featured != true || !defined(featured))] | order(publishedAt desc)[0..1] {
            _id, title, "slug": slug.current, publishedAt, category, excerpt
          }
        }`;

        const payload = await client.fetch(query);

        if (payload.featured) setFeaturedArticle(payload.featured);
        if (payload.standard) setStandardArticles(payload.standard);
      } catch (err) {
        console.error(
          "Error executing newsroom stream synchronization pipeline:",
          err,
        );
      } finally {
        setLoading(false);
      }
    }

    syncNewsstream();
  }, []);

  if (loading) {
    return (
      <div className="w-full py-24 text-center bg-white text-xs font-mono tracking-widest text-slate-400">
        SYNCHRONIZING SECURE DISCLOSURE ENGINE...
      </div>
    );
  }

  return (
    <section className="bg-white py-24 px-6 md:px-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-200">
          <div>
            <span className="text-xs uppercase tracking-widest text-mining-gold font-bold block mb-2">
              Media & Announcements
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-mining-obsidian tracking-tight">
              Latest Insights & Disclosures
            </h2>
          </div>
          <a
            href="/news"
            className="mt-4 md:mt-0 text-sm font-semibold text-mining-obsidian hover:text-mining-gold transition-colors duration-200 flex items-center group"
          >
            View All Press Releases
            <span className="transform group-hover:translate-x-1 transition-transform duration-200 ml-1">
              →
            </span>
          </a>
        </div>

        {/* News Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Featured Entry */}
          {featuredArticle ? (
            <div
              className="lg:col-span-7 flex flex-col justify-between group cursor-pointer"
              onClick={() =>
                (window.location.href = `/news/${featuredArticle.slug}`)
              }
            >
              <div>
                <div
                  className="bg-mining-obsidian aspect-[16/10] w-full mb-6 overflow-hidden relative bg-cover bg-center"
                  style={{
                    backgroundImage: featuredArticle.imageUrl
                      ? `url('${featuredArticle.imageUrl}')`
                      : "none",
                  }}
                >
                  {!featuredArticle.imageUrl && (
                    <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px]" />
                  )}
                  <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/80 p-6 w-full">
                    <span className="inline-block bg-mining-gold text-[10px] uppercase tracking-wider text-mining-obsidian px-2 py-0.5 font-bold mb-3">
                      Featured Operations
                    </span>
                  </div>
                </div>
                <span className="text-xs text-slate-500 block mb-2 font-medium">
                  {featuredArticle.publishedAt}
                </span>
                <h3 className="text-2xl font-serif text-mining-obsidian mb-4 group-hover:text-mining-gold transition-colors duration-200 leading-snug">
                  {featuredArticle.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
                  {featuredArticle.excerpt}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-mining-obsidian uppercase tracking-wider group-hover:underline">
                  Read Executive Overview
                </span>
              </div>
            </div>
          ) : (
            <div className="lg:col-span-7 text-xs font-mono text-slate-400 border border-dashed border-slate-200 p-8 flex items-center justify-center">
              No featured disclosure currently flagged in Sanity Engine.
            </div>
          )}

          {/* Right Column Stacked List */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 divide-y divide-slate-200 lg:divide-y-0 lg:space-y-0">
            {standardArticles.map((item, index) => (
              <div
                key={item._id}
                className={`group cursor-pointer ${index !== 0 ? "lg:border-t lg:border-slate-200 lg:pt-8" : ""}`}
                onClick={() => (window.location.href = `/news/${item.slug}`)}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-xs text-slate-400 font-medium">
                    {item.publishedAt}
                  </span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-mining-gold">
                    {item.category}
                  </span>
                </div>
                <h4 className="text-lg font-serif text-mining-obsidian mb-2 group-hover:text-mining-gold transition-colors duration-200 leading-snug">
                  {item.title}
                </h4>
                <p className="text-slate-600 text-xs line-clamp-2 leading-relaxed">
                  {item.excerpt}
                </p>
                <div className="mt-3 flex items-center text-xs font-semibold text-mining-obsidian group-hover:text-mining-gold">
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
