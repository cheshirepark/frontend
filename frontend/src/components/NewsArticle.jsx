import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import useSEO from "../hooks/useSEO";

// Adjust this import to match your project's Sanity client initialization file
import { client } from "../sanityClient";

// Initialize the image URL builder engine
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

// Custom components renderer to parse nested body data seamlessly
const portableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-8 space-y-2">
          <img
            src={urlFor(value).width(800).fit("max").url()}
            alt={value.alt || "Article graphic"}
            className="w-full h-auto border border-slate-100 object-cover"
          />
          {value.caption && (
            <figcaption className="text-xs text-mining-ash italic font-sans px-2 border-l-2 border-mining-gold">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="font-serif text-xl md:text-2xl text-mining-obsidian tracking-tight pt-4 font-bold">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-serif text-lg text-mining-obsidian tracking-tight pt-3 font-semibold">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-slate-700 text-sm md:text-base leading-relaxed">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-mining-gold pl-4 my-6 italic text-mining-obsidian font-serif text-base md:text-lg bg-slate-50/50 p-4">
        {children}
      </blockquote>
    ),
  },
};

export default function NewsArticle() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Synchronize SEO tracking title dynamically once data resolves
  useSEO({ title: article ? article.title : "Loading Disclosure..." });

  useEffect(() => {
    setLoading(true);
    setError(false);

    // GROQ query matching the active URL parameter to the unique document slug
    const query = `*[_type == "news" && slug.current == $slug][0]{
      title,
      publishedAt,
      category,
      featured,
      mainImage,
      excerpt,
      body
    }`;

    client
      .fetch(query, { slug })
      .then((data) => {
        if (!data) {
          setError(true);
        } else {
          setArticle(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Sanity Fetch Pipeline Failure:", err);
        setError(true);
        setLoading(false);
      });
  }, [slug]);

  // Format the publication date cleanly
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  // Loading Skeleton State
  if (loading) {
    return (
      <div className="w-full bg-mining-alabaster py-24 px-6 text-center font-mono text-xs text-mining-ash animate-pulse">
        Polling infrastructure data nodes...
      </div>
    );
  }

  // Fallback Error / 404 Missing State
  if (error || !article) {
    return (
      <div className="w-full bg-mining-alabaster py-24 px-6 text-center font-sans">
        <p className="text-sm text-rose-600 font-bold mb-4">
          Specified official document could not be located.
        </p>
        <Link
          to="/news"
          className="text-xs text-mining-ash underline hover:text-mining-gold transition-colors"
        >
          Return to Media Centre
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-mining-alabaster py-24 px-6 md:px-12 font-sans selection:bg-amber-100">
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
            <span>{article.category || "Official Disclosure"}</span>
            <span className="text-slate-300">•</span>
            <span className="text-mining-ash font-mono">
              {formatDate(article.publishedAt)}
            </span>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl text-mining-obsidian tracking-tight leading-tight font-bold">
            {article.title}
          </h1>

          {article.excerpt && (
            <p className="text-slate-500 font-serif italic text-sm md:text-base pt-1 leading-relaxed border-l-2 border-slate-200 pl-3">
              {article.excerpt}
            </p>
          )}
        </div>

        {/* Dynamic Cover Graphic Asset */}
        {article.mainImage && (
          <div className="w-full aspect-[21/10] overflow-hidden bg-slate-50 border border-slate-100 mb-10 shadow-inner">
            <img
              src={urlFor(article.mainImage).width(1200).fit("max").url()}
              alt={article.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
        )}

        {/* Article Body Content Zone via Portable Text Engine */}
        <div className="space-y-6 font-normal">
          {article.body ? (
            <PortableText
              value={article.body}
              components={portableTextComponents}
            />
          ) : (
            <p className="text-xs text-mining-ash font-mono italic">
              No core text content has been drafted for this document layout
              placeholder.
            </p>
          )}
        </div>

        {/* Institutional Sign-off Block */}
        <div className="mt-16 pt-8 border-t border-slate-100 text-xs text-mining-ash space-y-1">
          <p className="font-bold text-mining-obsidian uppercase tracking-wider">
            Investor Relations Contact Desk
          </p>
          <p className="Cheshire Park Resources Ltd Office Administration"></p>
          <p>Liaison Coordinates: investors@cheshireparkresources.com</p>
        </div>
      </div>
    </div>
  );
}
