"use client";

import Link from "next/link";
import { ReactNode } from "react";
import Footer from "./Footer";

interface SEOLayoutProps {
  title: string;
  description: string;
  publishDate: string;
  readTime: string;
  tags: string[];
  children: ReactNode;
}

export default function SEOLayout({
  title,
  description,
  publishDate,
  readTime,
  tags,
  children,
}: SEOLayoutProps) {
  return (
    <div className="bg-ink-950 min-h-screen text-text-primary selection:bg-ember-600 selection:text-white-hot flex flex-col font-spectral">
      <main className="flex-1 px-6 py-16 max-w-[900px] mx-auto w-full">
        {/* Breadcrumb / Category info */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-text-muted mb-8 uppercase font-cinzel tracking-widest">
          <span>{publishDate}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-ember-600" />
          <span className="text-ember-500">{readTime}</span>
        </div>

        {/* Title */}
        <h1 className="font-cinzel text-3xl md:text-5xl font-black leading-[1.15] text-text-primary tracking-tight mb-6">
          {title}
        </h1>

        {/* Description intro */}
        <p className="text-xl font-light text-text-muted leading-relaxed mb-12 border-l-2 border-ember-500 pl-6 italic">
          "{description}"
        </p>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-12 items-start">
          {/* Main Content Area */}
          <article className="prose prose-invert max-w-none text-text-primary leading-relaxed text-[17px] font-light space-y-6">
            {children}
          </article>

          {/* Sidebar */}
          <aside className="space-y-8 lg:sticky lg:top-28">
            {/* Metadata Card */}
            <div className="bg-ink-900 border border-ink-700 p-6">
              <h3 className="font-cinzel text-xs font-bold text-text-primary tracking-widest uppercase mb-4">
                Core Focus
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-wider font-cinzel px-2.5 py-1 bg-ink-800 border border-ink-600 text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Shield Manifesto Box */}
            <div className="bg-[linear-gradient(135deg,var(--color-ember-900)_0%,var(--color-ink-900)_80%)] border border-ember-900/60 p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-[radial-gradient(circle_at_top_right,rgba(255,107,26,0.12)_0%,transparent_70%)]" />
              <h3 className="font-cinzel text-xs font-bold text-ember-400 tracking-widest uppercase mb-3">
                Local Sovereignty
              </h3>
              <p className="text-xs text-text-muted leading-relaxed font-light mb-0">
                Forge maintains no accounts or cloud logs. Your path remains strictly local and encrypted on your physical device.
              </p>
            </div>
          </aside>
        </div>

        {/* Conversion callout block at the bottom */}
        <div className="mt-20 border-t border-ink-800 pt-16">
          <div className="bg-ink-900 border border-ink-600 p-8 md:p-12 relative overflow-hidden text-center max-w-[760px] mx-auto">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_120%,rgba(255,107,26,0.08)_0%,transparent_70%)] pointer-events-none" />
            <p className="font-cinzel text-[10px] tracking-[0.35em] uppercase text-ember-500 mb-4">
              Forge · The Harness Protocol
            </p>
            <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-text-primary mb-5 tracking-wide">
              Turn Urges Into Willpower
            </h2>
            <p className="text-sm font-light text-text-muted leading-relaxed mb-8 max-w-[480px] mx-auto">
              Stop fighting baseline urges with willpower alone. Download the local-first discipline harness today and enter the crucible.
            </p>
            <Link
              href="https://apps.apple.com/us/app/forge-iron-mind-discipline/id6767904744"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-ember-500 text-ink-950 font-cinzel text-xs tracking-[0.18em] uppercase no-underline font-bold transition-all duration-300 hover:shadow-ember-500/35 hover:-translate-y-px"
            >
              FORGE YOUR WILL NOW
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
