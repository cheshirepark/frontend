import React from "react";
import { useParams, Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";

export default function NewsArticle() {
  // Pull the dynamic slug variable right out of the URL string
  const { slug } = useParams();
  const title = `News Article: ${slug}`;
  useSEO({ title });

  return (
    <div className="w-full bg-mining-alabaster py-24 px-6 md:px-12 font-sans">
      <div className="max-w-3xl mx-auto bg-white border border-slate-200 p-8 md:p-16 shadow-sm">
        {/* Back Anchor Control */}
        <Link
          to="/news"
          className="text-[10px] uppercase tracking-widest font-bold text-mining-ash hover:text-mining-gold inline-flex items-center gap-1.5 mb-10 transition-colors"
        >
          ← Back to Media Centre
        </Link>

        {/* Corporate Press Release Meta Header */}
        <div className="border-b border-slate-100 pb-6 mb-8 space-y-3">
          <div className="flex items-center space-x-3 text-[10px] uppercase tracking-widest font-bold text-mining-gold">
            <span>Official Disclosure</span>
            <span className="text-slate-300">•</span>
            <span className="text-mining-ash font-mono">Lagos, Nigeria</span>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl text-mining-obsidian tracking-tight leading-tight font-bold">
            Dynamic News Template Workspace
          </h1>

          <p className="text-xs text-mining-ash font-mono font-medium pt-1">
            Active Asset Reference URL Parameter:{" "}
            <span className="text-mining-gold font-bold">/news/{slug}</span>
          </p>
        </div>

        {/* Article Body Skeleton Text Content */}
        <div className="text-slate-700 text-sm md:text-base leading-relaxed space-y-6 font-normal">
          <p className="font-semibold text-mining-obsidian">
            This workspace template is currently listening for routing
            signatures via the React Router router tree network.
          </p>
          <p>
            When Sanity.io is initialized into the data engine tier, a localized
            query payload will pass the variable token{" "}
            <code className="bg-slate-100 px-1.5 py-0.5 font-mono text-xs text-rose-600 font-bold">
              "{slug}"
            </code>{" "}
            right into a GROQ request string. Sanity's global Content Delivery
            Network will instantly look up the matching document and return its
            full rich text arrays right into this container layout.
          </p>
          <p>
            This setup maintains absolute institutional layout stability while
            letting you write endless press updates, financial disclosures, and
            operational milestones from your hidden Sanity CMS dashboard
            context.
          </p>
        </div>

        {/* Institutional Sign-off Block */}
        <div className="mt-16 pt-8 border-t border-slate-100 text-xs text-mining-ash space-y-1">
          <p className="font-bold text-mining-obsidian uppercase tracking-wider">
            Investor Relations Contact Desk
          </p>
          <p>Cheshire Park Resources Ltd Office Administration</p>
          <p>Liaison Coordinates: investors@cheshireparkresources.com</p>
        </div>
      </div>
    </div>
  );
}
