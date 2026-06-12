import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
export default function Header() {
  // Mobile drawer open state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Core navigation targets
  const navLinks = [
    { label: "About Us", href: "/about" },
    { label: "Portfolio & Assets", href: "/portfolio" },
    { label: "Investors", href: "/investors" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "News & Media", href: "/news" },
  ];

  // Metal pricing state managed dynamically
  const [metalPrices, setMetalPrices] = useState([
    { symbol: "GOLD", price: "$2,345.20", change: "+0.45%" },
    { symbol: "SILVER", price: "$29.15", change: "-1.12%" },
    { symbol: "LEAD", price: "$2,180.00", change: "+0.18%" },
  ]);

  // Handle live data pulling on component mount
  useEffect(() => {
    async function fetchMarketData() {
      try {
        // Example with GoldAPI.io (Register for a free API key on their site)
        // const response = await fetch('https://www.goldapi.io/api/XAU/USD', {
        //   headers: { 'x-access-token': 'YOUR_GOLDAPI_KEY_HERE' }
        // });
        // const data = await response.json();
        // Set state values dynamically based on API output schema here...
      } catch (error) {
        console.error("Market data feed unavailable:", error);
      }
    }

    fetchMarketData();
  }, []);

  return (
    <header className="w-full border-b border-slate-200 bg-white sticky top-0 z-50 font-sans">
      {/* Top Utility Bar: Metal Prices */}
      <div className="w-full bg-mining-abyss text-white text-[11px] font-medium tracking-wider py-2 px-6 md:px-12 flex justify-between items-center border-b border-slate-800">
        <div className="hidden sm:flex items-center space-x-2 text-mining-ash">
          <span>MARKET DATA (DELAYED 20 MIN)</span>
          <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
          <span className="text-white">USD / TROY OZ</span>
        </div>

        {/* Prices Container (Top Right Aligned) */}
        <div className="flex items-center space-x-6 ml-auto sm:ml-0">
          {metalPrices.map((metal) => (
            <div key={metal.symbol} className="flex items-center space-x-1.5">
              <span className="text-mining-ash">{metal.symbol}:</span>
              <span className="font-mono text-slate-200">{metal.price}</span>
              <span
                className={`font-mono text-[10px] ${
                  metal.change.startsWith("+")
                    ? "text-emerald-400"
                    : "text-rose-400"
                }`}
              >
                {metal.change}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between relative bg-white">
        {/* Logo Left - Cleaned up for Cheshire Park Resources */}
        <a href="/" className="flex items-center h-full group z-50">
          <img
            src={logo} // Adjust path based on your exact file location
            alt="Cheshire Park Resources Ltd Logo"
            className="h-12 md:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.01]"
          />
        </a>

        {/* Desktop Navigation Elements Right */}
        <nav className="hidden lg:flex items-center space-x-8 h-full">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase font-semibold tracking-widest text-slate-600 hover:text-mining-gold transition-colors duration-200 h-full flex items-center border-b-2 border-transparent hover:border-mining-gold pt-0.5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Interactive Hamburger Toggle Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-mining-obsidian p-2 focus:outline-none z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
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

      {/* Mobile Drawer Menu Overlays */}
      <div
        className={`absolute top-28 left-0 w-full bg-white border-b border-slate-200 shadow-xl lg:hidden transform transition-all duration-300 ease-in-out z-40 ${
          isMenuOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-4 invisible pointer-events-none"
        }`}
      >
        <nav className="flex flex-col py-6 px-8 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-xs uppercase font-bold tracking-wider text-slate-700 hover:text-mining-gold transition-colors duration-150 py-2 border-b border-slate-50"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
