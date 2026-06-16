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
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.2.67-2.92 1.49-.62.7-1.16 1.84-1.01 2.96 1.12.09 2.26-.58 2.94-1.39" />
        </svg>
        <span>FORGE YOUR WILL</span>
      </Link>
    </div>
  );
}
