import logo from "../../assets/logo.png";
import React, { useState, useEffect } from "react";
import { client } from "../../sanityClient";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [metalPrices, setMetalPrices] = useState([
    { symbol: "GOLD", price: "$2,345.20", change: "+0.45%" },
    { symbol: "SILVER", price: "$29.15", change: "-1.12%" },
    { symbol: "LEAD", price: "$2,180.00", change: "+0.18%" },
  ]);

  const navLinks = [
    { label: "About Us", href: "/about" },
    { label: "Portfolio & Assets", href: "/portfolio" },
    { label: "Investors", href: "/investors" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "News & Media", href: "/news" },
  ];

  useEffect(() => {
    // Pull the cached document from Sanity
    async function getCachedMarketData() {
      try {
        const data = await client.fetch(`*[_type == "marketData"][0]`);
        if (data && data.prices) {
          setMetalPrices(data.prices);
        }
      } catch (error) {
        console.error(
          "Sanity cached market database unreachable, serving fallback parameters.",
          error,
        );
      }
    }
    getCachedMarketData();
  }, []);

  return (
    <header className="w-full border-b border-slate-200 bg-white sticky top-0 z-50 font-sans">
      <div className="w-full bg-mining-abyss text-white text-[11px] font-medium tracking-wider py-2 px-6 md:px-12 flex justify-between items-center border-b border-slate-800">
        <div className="hidden sm:flex items-center space-x-2 text-mining-ash">
          <span>MARKET DATA (SERVER CACHED DAILY)</span>
          <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
          <span className="text-white">USD / TROY OZ</span>
        </div>

        <div className="flex items-center space-x-6 ml-auto sm:ml-0">
          {metalPrices.map((metal) => (
            <div key={metal.symbol} className="flex items-center space-x-1.5">
              <span className="text-mining-ash">{metal.symbol}:</span>
              <span className="font-mono text-slate-200">{metal.price}</span>
              <span
                className={`font-mono text-[10px] ${metal.change.startsWith("+") ? "text-emerald-400" : "text-rose-400"}`}
              >
                {metal.change}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between relative bg-white">
        <a href="/" className="flex items-center h-full group z-50">
          <img
            src={logo}
            alt="Cheshire Park Resources Ltd Logo"
            className="h-12 md:h-14 w-auto object-contain"
          />
        </a>

        <nav className="hidden lg:flex items-center space-x-8 h-full">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase font-semibold tracking-widest text-slate-600 hover:text-mining-gold transition-colors duration-200 h-full flex items-center border-b-2 border-transparent hover:border-mining-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-mining-obsidian p-2 focus:outline-none z-50"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`absolute top-28 left-0 w-full bg-white border-b border-slate-200 shadow-xl lg:hidden transform transition-all duration-300 ease-in-out z-40 ${isMenuOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible pointer-events-none"}`}
      >
        <nav className="flex flex-col py-6 px-8 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-xs uppercase font-bold tracking-wider text-slate-700 hover:text-mining-gold py-2 border-b border-slate-50"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
