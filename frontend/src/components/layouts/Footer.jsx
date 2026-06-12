import React from "react";

export default function Footer() {
  const directoryData = [
    {
      title: "About Us",
      links: [
        { label: "Corporate Profile", href: "/about" },
        { label: "Leadership Team", href: "/about/leadership" },
        { label: "Business Model", href: "/about/business-model" },
      ],
    },
    {
      title: "Portfolio",
      links: [{ label: "Active Mine Operations", href: "/portfolio" }],
    },
    {
      title: "Investors & News",
      links: [
        { label: "Financial Statements", href: "/investors" },
        { label: "Press Releases", href: "/news" },
      ],
    },
    {
      title: "Sustainability",
      links: [
        { label: "Sustainability Topics", href: "/sustainability/topics" },
        { label: "Strategy and Goals", href: "/sustainability/strategy" },
        {
          label: "Reporting and Disclosures",
          href: "/sustainability/reporting",
        },
      ],
    },
  ];

  const socialMedia = [
    { name: "X", link: "#", icon: "" },
    { name: "Instagram", link: "#", icon: "" },
    { name: "LinkedIn", link: "#", icon: "" },
  ];
  return (
    <footer className="w-full bg-mining-obsidian text-slate-300 border-t border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* Main Grid Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left Block: Directory Content (Spans 9/12 Columns = 3/4 Width) */}
          <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-8">
            {directoryData.map((section) => (
              <div key={section.title} className="flex flex-col">
                <h4 className="text-xs uppercase tracking-widest text-white font-bold mb-4 border-b border-slate-800 pb-2">
                  {section.title}
                </h4>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-xs text-slate-400 hover:text-mining-gold transition-colors duration-150"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Block: Contacts & Socials (Spans 3/12 Columns = 1/4 Width) */}
          <div className="lg:col-span-3 flex flex-col border-t border-slate-800 pt-8 lg:border-t-0 lg:pt-0 lg:pl-6 lg:border-l lg:border-slate-800">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold mb-4 pb-2">
              Corporate Office
            </h4>
            <address className="not-italic text-xs text-slate-400 space-y-2 leading-relaxed">
              <p className="text-slate-300 font-medium">Headquarters Desk</p>
              <p>Ikoyi Liaison Office, Kingsway Road,</p>
              <p>Lagos, Nigeria</p>
              <p className="pt-2">
                <span className="text-white font-semibold">Email:</span>{" "}
                info@cheshireparkresources.com
              </p>
            </address>

            {/* Social Engagement Links */}
            <div className="mt-6">
              <h5 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-3">
                Connect With Us
              </h5>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="hover:text-atelier-tan transition-colors"
                >
                  {/* X/Twitter custom SVG */}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="hover:text-atelier-tan transition-colors"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm9.5 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="hover:text-atelier-tan transition-colors"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0.5 8h4V24h-4V8zm7 0h3.83v2.19h.05C11.91 8.93 13.6 8 15.7 8 20.08 8 21 10.88 21 14.62V24h-4v-8.12c0-1.94-.03-4.44-2.71-4.44-2.71 0-3.13 2.11-3.13 4.3V24h-4V8z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Legal Line */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-500 tracking-wide">
          <p>
            © {new Date().getFullYear()} Cheshire Park Resources. All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-slate-400">
              Privacy Policy
            </a>
            <a href="/about/contact" className="hover:text-slate-400">
              Contact Us
            </a>
            <a href="/terms" className="hover:text-slate-400">
              Terms of Use
            </a>
            <a href="/disclaimer" className="hover:text-slate-400">
              Regulatory Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
