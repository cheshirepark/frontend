import React, { useState, useEffect } from "react";
import CorporateNewsRoom from "../components/CorporateNewsRoom";
import useSEO from "../hooks/useSEO";

// Reusable animated metric counter for institutional data accuracy
function MetricCounter({ targetValue, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Parse the target numeric digits cleanly out of incoming strings (e.g., "100" from "100%")
    const numericTarget = parseInt(
      targetValue.toString().replace(/[^0-9]/g, ""),
      10,
    );
    if (isNaN(numericTarget)) {
      setCount(targetValue);
      return;
    }

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      setCount(Math.floor(progress * numericTarget));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [targetValue, duration]);

  return (
    <span className="font-mono text-4xl md:text-5xl font-bold text-mining-gold block tracking-tight">
      {count}
      {suffix}
    </span>
  );
}

export default function Home() {
  useSEO({
    title: "Home",
    description:
      "The premium natural resources investment vehicle in West Africa. Delivering high-margin exposure to Tier-1 mining and processing assets.",
  });

  return (
    <div className="w-full bg-mining-alabaster font-sans overflow-x-hidden">
      {/* 1. HIGH-END INSTITUTIONAL HERO ECOSYSTEM */}
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat py-36 md:py-48 px-6 md:px-12 bg-mining-obsidian flex items-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523848309072-c199db53f137?q=80&w=1600&auto=format&fit=crop')`,
        }}
      >
        {/* Dark High-Contrast Technical Overlay Mask */}
        <div className="absolute inset-0 bg-black/70 z-0" />

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto w-full text-center md:text-left">
          <span className="text-xs uppercase tracking-[0.3em] text-mining-gold font-bold block mb-4 animate-pulse">
            Cheshire Park Resources Ltd
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl text-white tracking-tight leading-tight mb-6 max-w-5xl">
            Africa's Emerging Precious Metals Investment, Creating Sustainable
            Value.
          </h1>
          <p className="text-slate-300 text-sm md:text-lg leading-relaxed max-w-3xl font-normal">
            Our industry-leading financial, technical, and ESG due diligence
            practices help us unlock the value of precious metals buried within
            traditional mining companies across key regional concessions.
          </p>

          {/* Action Anchors */}
          <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="/about"
              className="px-6 py-3 text-xs uppercase tracking-wider font-bold bg-mining-gold text-mining-obsidian hover:bg-white transition-all duration-200 border border-mining-gold rounded-none"
            >
              Corporate Profile
            </a>
            <a
              href="/investors"
              className="px-6 py-3 text-xs uppercase tracking-wider font-bold border border-white text-white hover:bg-white hover:text-mining-obsidian transition-all duration-200 rounded-none"
            >
              Investor Centre
            </a>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-24 px-6 md:px-12 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          {/* Centered Heading Block */}
          <span className="text-xs uppercase tracking-[0.25em] text-mining-gold font-bold block mb-4">
            The Strategic Edge
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-mining-obsidian tracking-tight mb-6">
            Why Cheshire Park Resources
          </h2>
          <div className="w-12 h-[2px] bg-mining-gold mx-auto mb-8" />

          {/* Context Introduction Paragraph */}
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto mb-16">
            We operate with a clear purpose to create value for all of our
            stakeholders through sustainable and responsible business practices,
            and to provide our shareholders with exposure to low-risk precious
            metals production through:
          </p>

          {/* Value Pillars Layout Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              "High-quality portfolio of low-cost, long-life assets",
              "Significant organic growth opportunities and optionality",
              "Significant expansion and exploration potential",
              "Predictable costs with limited inflation exposure",
              "Leverage to commodity prices",
              "Progressive dividend policy",
              "Commitment to sustainability",
            ].map((pillar, index) => (
              <div
                key={index}
                className="p-6 bg-mining-alabaster border border-slate-100 flex items-start space-x-4 transition-all duration-200 hover:border-slate-200"
              >
                {/* Subtle Institutional Check Accent */}
                <span className="text-mining-gold font-bold text-sm shrink-0 pt-0.5">
                  ✓
                </span>
                <p className="text-mining-obsidian text-xs md:text-sm font-medium leading-relaxed">
                  {pillar}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FULL-WIDTH OPEN-CAST MINING LIVE DATA COUNTERS */}
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat py-24 px-6 md:px-12 bg-mining-obsidian"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=1600&auto=format&fit=crop')`,
        }}
      >
        {/* Deep Exposure Protection Mask Layer */}
        <div className="absolute inset-0 bg-mining-obsidian/85 z-0 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* Counter Matrix Columns */}
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center">
          {/* Column One: Operational Assets */}
          <div className="space-y-2 md:border-r md:border-slate-800 last:border-r-0 px-4">
            <div className="flex justify-center items-baseline text-mining-gold">
              <span className="font-mono text-2xl font-bold mr-0.5">0</span>
              <MetricCounter targetValue="4" />
            </div>
            <span className="text-xs text-mining-ash uppercase tracking-widest font-bold block pt-1">
              Active Tier-1 Streams
            </span>
            <p className="text-slate-400 text-xs max-w-xs mx-auto pt-2 leading-relaxed">
              Highly secure precious metal pipelines structured across
              productive West African fields.
            </p>
          </div>

          {/* Column Two: Performance Metric */}
          <div className="space-y-2 md:border-r md:border-slate-800 last:border-r-0 px-4">
            <div className="flex justify-center items-baseline text-mining-gold">
              <MetricCounter targetValue="100" suffix="%" />
            </div>
            <span className="text-xs text-mining-ash uppercase tracking-widest font-bold block pt-1">
              HSE Zero-Harm Alignment
            </span>
            <p className="text-slate-400 text-xs max-w-xs mx-auto pt-2 leading-relaxed">
              Absolute compliance timelines managed under active governance
              framework metrics.
            </p>
          </div>

          {/* Column Three: Long Term Target */}
          <div className="space-y-2 md:border-r md:border-slate-800 last:border-r-0 px-4">
            <div className="flex justify-center items-baseline text-white">
              <MetricCounter targetValue="2030" />
            </div>
            <span className="text-xs text-mining-ash uppercase tracking-widest font-bold block pt-1">
              Strategic Growth Map
            </span>
            <p className="text-slate-400 text-xs max-w-xs mx-auto pt-2 leading-relaxed">
              Target operational horizons built to buffer and sustain peak
              institutional capital margins.
            </p>
          </div>
        </div>
      </section>

      {/* 2. DYNAMIC CORPORATE NEWS STREAM INDEX COMPONENT */}
      <section className="w-full">
        <CorporateNewsRoom />
      </section>
    </div>
  );
}
