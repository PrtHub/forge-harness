import Link from "next/link";

export default function Download() {
  return (
    <section id="download" className="text-center py-36 px-6 md:px-12 bg-ink-950 relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(59,31,0,0.4)_0%,transparent_60%)] before:pointer-events-none max-w-none">
      <div className="relative z-10">
        <p className="font-cinzel text-[11px] tracking-[0.35em] uppercase text-ember-600 mb-6 reveal">Available Now</p>
        <h2 className="font-cinzel text-[36px] md:text-[5vw] lg:text-[64px] font-bold leading-tight text-text-primary mb-6 max-w-[700px] mx-auto reveal">The harness begins<br />when you do.</h2>
        <p className="text-lg font-light text-text-muted mb-13 italic reveal">Conquer the cycle of temptation, relapses, and fractures. Local-only. No account. No exposure. Just the work.</p>
        <div className="flex gap-5 justify-center flex-wrap reveal">
          <Link href="https://apps.apple.com/us/app/forge-iron-mind-discipline/id6767904744" className="flex items-center gap-3.5 px-7 py-4 border border-ink-500 bg-ink-800 text-text-primary no-underline hover:border-ember-600 hover:bg-ink-700 transition-all duration-300 cursor-pointer" id="store-btn-appstore">
            <svg className="w-7 h-7 opacity-70" viewBox="0 0 24 24" fill="#e8e4dc" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.2.67-2.92 1.49-.62.7-1.16 1.84-1.01 2.96 1.12.09 2.26-.58 2.94-1.39" />
            </svg>
            <div className="text-left">
              <span className="font-cinzel text-[9px] tracking-widest uppercase text-text-muted block">Download on the</span>
              <span className="font-cinzel text-base font-bold tracking-wider block mt-[2px]">App Store</span>
            </div>
          </Link>
          <Link href="#store-link-android" className="flex items-center gap-3.5 px-7 py-4 border border-ink-500 bg-ink-800 text-text-primary no-underline hover:border-ember-600 hover:bg-ink-700 transition-all duration-300 cursor-pointer" id="store-btn-googleplay">
            <svg className="w-7 h-7 opacity-70" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 5.2 L15.5 14 L4 22.8 C3.4 22.4 3 21.8 3 21V7C3 6.2 3.4 5.6 4 5.2Z" fill="#e8e4dc" opacity="0.5" />
              <path d="M4 5.2 L15.5 14 L19 10.6 L7 4C6.1 3.5 5.1 3.6 4 4.2" fill="#e8e4dc" opacity="0.65" />
              <path d="M4 22.8 L15.5 14 L19 17.4 L7 24C6.1 24.5 5.1 24.4 4 23.8" fill="#e8e4dc" opacity="0.55" />
              <path d="M19 10.6 L23.5 13 C24.2 13.4 24.5 13.7 24.5 14 C24.5 14.3 24.2 14.6 23.5 15 L19 17.4 L15.5 14 Z" fill="#e8e4dc" opacity="0.7" />
            </svg>
            <div className="text-left">
              <span className="font-cinzel text-[9px] tracking-widest uppercase text-text-muted block">Get it on</span>
              <span className="font-cinzel text-base font-bold tracking-wider block mt-[2px]">Google Play</span>
            </div>
          </Link>
        </div>
        <p className="mt-7 text-xs text-text-dim italic reveal">Free to download. No trials. No ads. Privacy is the brand.</p>
      </div>
    </section>
  );
}
