import React, { useState } from "react";

export default function SustainabilityTopics() {
  const [activeTopic, setActiveTopic] = useState(null);

  const topics = [
    {
      title: "Community Relations",
      desc: "Building resilient relationships through engagement.",
      full: "We foster mutual respect and long-term prosperity in the regions where we operate by investing in local infrastructure, education, and economic development.",
    },
    {
      title: "Human Capital",
      desc: "Prioritizing employee development and retention.",
      full: "Our strategy focuses on identifying, training, and empowering talent at all levels, ensuring a diverse and inclusive workplace that drives innovation.",
    },
    {
      title: "Human Rights",
      desc: "Upholding global standards of dignity.",
      full: "We are committed to respecting and protecting the human rights of all stakeholders, aligned with international standards and internal supply chain audits.",
    },
    {
      title: "Health, Safety & Well-being",
      desc: "Zero-harm operational philosophy.",
      full: "Safety is our license to operate. We implement rigorous site protocols and comprehensive wellness programs to ensure our people and partners return home safely.",
    },
    {
      title: "Climate Change & Energy",
      desc: "Decarbonizing our energy value chain.",
      full: "We actively integrate low-carbon energy solutions and track emission intensity across our portfolio to align with global climate targets.",
    },
    {
      title: "Water Stewardship & Waste",
      desc: "Managing our physical footprint.",
      full: "We deploy advanced circular water management systems and zero-waste initiatives to protect and conserve local water tables and land ecosystems.",
    },
    {
      title: "Business Conduct",
      desc: "Operating with absolute transparency.",
      full: "Integrity is the bedrock of our business. We enforce strict compliance frameworks across every jurisdiction to prevent corruption and ensure ethical governance.",
    },
  ];

  return (
    <div className="w-full bg-white py-20 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-mining-obsidian font-bold mb-12">
          Sustainability Topics
        </h2>

        {/* Topic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTopic(topic)}
              className="text-left border border-slate-200 p-8 hover:border-mining-gold hover:shadow-lg transition-all duration-300 group"
            >
              <h3 className="text-mining-obsidian font-bold font-serif text-xl mb-3 group-hover:text-mining-gold">
                {topic.title}
              </h3>
              <p className="text-sm text-mining-ash leading-relaxed mb-6">
                {topic.desc}
              </p>
              <span className="text-[10px] font-bold uppercase tracking-widest text-mining-gold border-b border-mining-gold pb-1">
                View Full Disclosure
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {activeTopic && (
        <div className="fixed inset-0 bg-mining-obsidian/60 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white max-w-2xl w-full p-8 md:p-12 relative shadow-2xl animate-fadeIn">
            <button
              onClick={() => setActiveTopic(null)}
              className="absolute top-6 right-6 text-mining-ash hover:text-mining-obsidian text-2xl"
            >
              ×
            </button>
            <h3 className="font-serif text-3xl text-mining-obsidian font-bold mb-6">
              {activeTopic.title}
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              {activeTopic.full}
            </p>
            <button
              onClick={() => setActiveTopic(null)}
              className="bg-mining-gold text-white px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-mining-obsidian transition-colors"
            >
              Close Disclosure
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
