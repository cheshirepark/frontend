import React from "react";
import useSEO from "../hooks/useSEO";

export default function Contact() {
  useSEO({
    title: "Contact",
    description: "Connect with Cheshire Park Resources",
  });

  return (
    <div className="w-full bg-mining-alabaster py-24 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Institutional Section Intro Heading */}
        <div className="text-center md:text-left mb-16 max-w-2xl border-b border-slate-200 pb-8">
          <span className="text-xs uppercase tracking-[0.25em] text-mining-gold font-bold block mb-3">
            Connect With Us
          </span>
          <h1 className="font-serif text-3xl md:text-4xl text-mining-obsidian tracking-tight mb-4">
            Contact Channels & Liaison Offices
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            Reach our regional stakeholders, corporate treasury, or media
            coordination departments directly via our administrative networks.
          </p>
        </div>

        {/* 2-Column Corporate Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT AREA: Corporate Coordinates (Spans 5/12 Columns) */}
          <div className="lg:col-span-5 space-y-10">
            {/* Core Address Block */}
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-widest text-mining-obsidian font-bold border-b border-slate-200 pb-2">
                Headquarters Liaison
              </h3>
              <address className="not-italic text-sm text-slate-600 space-y-1.5 leading-relaxed">
                <p className="text-mining-obsidian font-semibold">
                  Cheshire Park Resources Ltd
                </p>
                <p>Kingsway Road, Ikoyi Liaison Office,</p>
                <p>Lagos, Nigeria</p>
              </address>
            </div>

            {/* Direct Media and Relations Directory */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-widest text-mining-obsidian font-bold border-b border-slate-200 pb-2">
                Operational Directories
              </h3>

              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-xs font-bold text-mining-obsidian uppercase tracking-wider">
                    General & Operations Management
                  </p>
                  <p className="text-slate-600 mt-0.5">
                    info@cheshireparkresources.com
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold text-mining-obsidian uppercase tracking-wider">
                    Investor & Stream Relations
                  </p>
                  <p className="text-slate-600 mt-0.5">
                    investors@cheshireparkresources.com
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold text-mining-obsidian uppercase tracking-wider">
                    Media & Regulatory Disclosures
                  </p>
                  <p className="text-slate-600 mt-0.5">
                    media@cheshireparkresources.com
                  </p>
                </div>
              </div>
            </div>

            {/* Note on Security and Documentation */}
            <div className="p-5 bg-slate-100 border-l-2 border-mining-gold text-xs text-slate-600 leading-relaxed">
              <span className="font-bold text-mining-obsidian block uppercase tracking-wider mb-1">
                Notice to Institutional Stakeholders
              </span>
              Unsolicited joint-venture pitches, land asset concession deeds, or
              structural documentation submissions must undergo technical
              validation before pipeline logging.
            </div>
          </div>

          {/* RIGHT AREA: Formspree Implementation Framework (Spans 7/12 Columns) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 p-8 md:p-10 shadow-sm">
            <h3 className="font-serif text-xl text-mining-obsidian font-bold mb-2">
              Submit an Official Inquiry
            </h3>
            <p className="text-slate-500 text-xs mb-8">
              Required documentation fields are marked with an asterisk (*).
              Your query will automatically route to the corresponding
              department desk.
            </p>

            {/* Formspree Form Tag */}
            <form
              action="https://formspree.io/f/xgobkyag" // <--- Update this hash string
              method="POST"
              className="space-y-6"
            >
              {/* Full Name Field Row */}
              <div className="flex flex-col space-y-1.5">
                <label
                  htmlFor="name"
                  className="text-xs uppercase font-bold tracking-wider text-slate-600"
                >
                  Full Name <span className="text-mining-gold">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-mining-obsidian focus:outline-none focus:border-mining-gold focus:bg-white transition-all rounded-none"
                  placeholder="e.g. Alexander Vance"
                />
              </div>

              {/* Grid split for email and entity categorization */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email Address */}
                <div className="flex flex-col space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs uppercase font-bold tracking-wider text-slate-600"
                  >
                    Corporate Email Address{" "}
                    <span className="text-mining-gold">*</span>
                  </label>
                  <input
                    type="email"
                    name="_replyto"
                    id="email"
                    required
                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-mining-obsidian focus:outline-none focus:border-mining-gold focus:bg-white transition-all rounded-none"
                    placeholder="name@firm.com"
                  />
                </div>

                {/* Inquiry Intent Categorization dropdown */}
                <div className="flex flex-col space-y-1.5">
                  <label
                    htmlFor="inquiry-type"
                    className="text-xs uppercase font-bold tracking-wider text-slate-600"
                  >
                    Inquiry Designation{" "}
                    <span className="text-mining-gold">*</span>
                  </label>
                  <select
                    name="inquiry_type"
                    id="inquiry-type"
                    required
                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-600 focus:outline-none focus:border-mining-gold focus:bg-white transition-all rounded-none appearance-none"
                  >
                    <option value="general">General Corporate Inquiry</option>
                    <option value="investors">
                      Investor Relations & Streaming
                    </option>
                    <option value="media">Media & Press Communications</option>
                    <option value="sustainability">
                      ESG & Community Validation
                    </option>
                  </select>
                </div>
              </div>

              {/* Message Payload Text Area */}
              <div className="flex flex-col space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs uppercase font-bold tracking-wider text-slate-600"
                >
                  Message Details <span className="text-mining-gold">*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  required
                  className="w-full bg-slate-50 border border-slate-200 p-4 text-sm text-mining-obsidian focus:outline-none focus:border-mining-gold focus:bg-white transition-all rounded-none resize-none"
                  placeholder="Please clarify details regarding your request or asset proposal..."
                />
              </div>

              {/* Formspree Anti-Spam HoneyPot Configuration */}
              <input type="text" name="_gotcha" className="hidden" />

              {/* Formspree Custom Redirect Configuration (Optional) */}
              {/* <input type="hidden" name="_next" value="https://yourdomain.com/about/contact/thanks" /> */}

              {/* Submission Execution Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-mining-obsidian hover:bg-mining-gold text-white font-bold text-xs uppercase tracking-widest px-8 py-4 transition-colors duration-200 cursor-pointer rounded-none"
                >
                  Transmit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
