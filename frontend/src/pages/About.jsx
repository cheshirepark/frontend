import React from "react";
import useSEO from "../hooks/useSEO";

export default function About() {
  const bentoItems = [
    {
      title: "Our Business Model",
      description:
        "Unlocking localized value ecosystems by investing in downstream infrastructure, primary asset streaming models, and regional processing frameworks.",
      href: "/about/business-model",
      className: "md:col-span-2 bg-mining-obsidian text-white border-none",
      textClass: "text-slate-300",
      accent: "text-white",
    },
    {
      title: "Leadership",
      description:
        "Steered by industry executives with decades of combined operations, asset management, and exploration history inside West African mineral fields.",
      href: "/about/leadership",
      className: "md:col-span-1 bg-white border border-slate-200",
      textClass: "text-slate-600",
      accent: "text-mining-obsidian",
    },
    // {
    //   title: "Governance",
    //   description:
    //     "Upholding absolute accountability through deep transparency standards, regulatory compliance boards, and zero-harm operational frameworks.",
    //   href: "/about/governance",
    //   className: "md:col-span-1 bg-white border border-slate-200",
    //   textClass: "text-slate-600",
    //   accent: "text-mining-obsidian",
    // },
    {
      title: "Contact",
      description:
        "Connect instantly with our investor relations desk, processing project stakeholders, or liaison office coordinates in Lagos and across operations hubs.",
      href: "/about/contact",
      className:
        "md:col-span-2 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200",
      textClass: "text-slate-600",
      accent: "text-mining-gold",
    },
  ];

  useSEO({
    title: "About",
    description:
      "Learn about the inner workings of Cheshire Park Resources and what makes us tick",
  });

  return (
    <div className="w-full font-sans bg-mining-alabaster">
      {/* NEW: FULL-WIDTH INTUITIVE CORPORATE PROFILE BANNER */}
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat py-28 px-6 md:px-12 bg-mining-obsidian"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1693774557231-e2be6c3594e8?q=80&w=1600&auto=format&fit=crop')`,
        }}
      >
        {/* Dark High-Contrast Mask Layer to Shield Text Legibility */}
        <div className="absolute inset-0 bg-black/70 z-0" />

        {/* Banner Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto text-center md:text-left">
          <span className="text-xs uppercase tracking-[0.25em] text-mining-gold font-bold block mb-3">
            Corporate Profile
          </span>
          <h1 className="font-serif text-3xl md:text-5xl text-white tracking-tight mb-5 max-w-4xl leading-tight">
            The Premier Natural Resources Vehicle, Creating Sustainable Value
            Across West Africa.
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl">
            At Cheshire Park Resources Ltd, we optimize resource acquisition
            portfolios with precision. By applying elite asset due diligence,
            global ESG principles, and downstream logistics coordination, we
            secure stable mineral processing values hidden within traditional
            mining models.
          </p>
        </div>
      </section>

      {/* 2. Key High-End Metric Indicators */}
      <section className="bg-mining-abyss text-white py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="border-l border-slate-800 pl-6">
            <span className="font-mono text-3xl font-bold text-mining-gold block">
              04
            </span>
            <span className="text-[10px] text-mining-ash uppercase tracking-widest font-semibold mt-1 block">
              Active Assets
            </span>
          </div>
          <div className="border-l border-slate-800 pl-6">
            <span className="font-mono text-3xl font-bold text-mining-gold block">
              Tier-1
            </span>
            <span className="text-[10px] text-mining-ash uppercase tracking-widest font-semibold mt-1 block">
              Jurisdiction Rating
            </span>
          </div>
          <div className="border-l border-slate-800 pl-6">
            <span className="font-mono text-3xl font-bold text-white block">
              100%
            </span>
            <span className="text-[10px] text-mining-ash uppercase tracking-widest font-semibold mt-1 block">
              HSE Zero-Harm Sync
            </span>
          </div>
          <div className="border-l border-slate-800 pl-6">
            <span className="font-mono text-3xl font-bold text-white block">
              2030
            </span>
            <span className="text-[10px] text-mining-ash uppercase tracking-widest font-semibold mt-1 block">
              Production Target Map
            </span>
          </div>
        </div>
      </section>

      {/* 3. The Bento Grid Navigation Framework */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="text-center md:text-left mb-12">
          <h2 className="text-xs uppercase tracking-widest text-mining-ash font-bold mb-2">
            Section Directory
          </h2>
          <p className="font-serif text-2xl text-mining-obsidian">
            Explore our corporate architecture and frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bentoItems.map((item) => (
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
                  className={`text-xs leading-relaxed max-w-xl ${item.textClass}`}
                >
                  {item.description}
                </p>
              </div>

              <div className="mt-12 flex items-center justify-between text-xs font-semibold tracking-wider uppercase">
                <span className="group-hover:underline">View Section</span>
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
