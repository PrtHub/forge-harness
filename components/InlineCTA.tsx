"use client";

import Link from "next/link";

export default function InlineCTA() {
  return (
    <div className="my-10 bg-ink-900 border border-ink-600 p-6 md:p-8 relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_100%,rgba(255,107,26,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="relative z-10">
        <h4 className="font-cinzel text-sm font-bold text-text-primary tracking-wider uppercase mb-1.5">
          Put this into practice
        </h4>
        <p className="text-xs text-text-muted font-light max-w-[420px] leading-relaxed mb-0">
          Willpower is not enough. Automate the friction by utilizing Severity Mode and physical lockout protocols.
        </p>
      </div>
      <Link
        href="https://apps.apple.com/us/app/forge-iron-mind-discipline/id6767904744"
        className="relative z-10 inline-flex items-center gap-2 px-5 py-3 bg-ember-500 text-ink-950 font-cinzel text-[11px] tracking-[0.15em] uppercase no-underline font-bold transition-all duration-300 hover:shadow-ember-500/35 hover:-translate-y-px whitespace-nowrap"
      >
        FORGE YOUR WILL
      </Link>
    </div>
  );
}
