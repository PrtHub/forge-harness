"use client";

import Link from "next/link";

interface SEOHeaderProps {
  category?: string;
  categoryLink?: string;
}

export default function SEOHeader({ category, categoryLink }: SEOHeaderProps) {
  return (
    <header className="border-b border-ink-800 px-6 md:px-12 py-6 bg-ink-950/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-[900px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="font-cinzel font-bold text-xl tracking-[0.18em] text-ember-500 no-underline hover:text-ember-400 transition-colors duration-300"
          >
            FORGE
          </Link>
          {category && categoryLink && (
            <>
              <span className="text-text-dim font-cinzel text-xs font-semibold">/</span>
              <Link
                href={categoryLink}
                className="font-cinzel text-[10px] tracking-widest text-text-muted hover:text-ember-400 transition-colors duration-300 no-underline uppercase"
              >
                {category}
              </Link>
            </>
          )}
        </div>
        <Link
          href={categoryLink || "/resources"}
          className="font-cinzel text-[10px] tracking-[0.15em] text-text-muted hover:text-ember-300 uppercase transition-colors duration-300 no-underline"
        >
          ← Back
        </Link>
      </div>
    </header>
  );
}
