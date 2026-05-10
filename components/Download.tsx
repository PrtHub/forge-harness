import Link from "next/link";

export default function Download() {
  return (
    <section id="download" className="text-center py-36 px-6 md:px-12 bg-ink-950 relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(59,31,0,0.4)_0%,transparent_60%)] before:pointer-events-none max-w-none">
      <div className="relative z-10">
        <p className="font-cinzel text-[11px] tracking-[0.35em] uppercase text-ember-600 mb-6 reveal">Available Now</p>
        <h2 className="font-cinzel text-[36px] md:text-[5vw] lg:text-[64px] font-bold leading-tight text-text-primary mb-6 max-w-[700px] mx-auto reveal">The harness begins<br />when you do.</h2>
        <p className="text-lg font-light text-text-muted mb-13 italic reveal">Local-only. No account. No exposure. Just the work.</p>
        <div className="flex gap-5 justify-center flex-wrap reveal">
          <Link href="#store-link-ios" className="flex items-center gap-3.5 px-7 py-4 border border-ink-500 bg-ink-800 text-text-primary no-underline hover:border-ember-600 hover:bg-ink-700 transition-all duration-300 cursor-pointer" id="store-btn-appstore">
            <svg className="w-7 h-7 opacity-70" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.5 14.5c0-3.5-2.9-5.3-2.9-5.3s0.3-3.6-3.6-3.6c-1.2 0-2.1 0.4-2.8 1C10.5 5.9 9.2 5.5 7.9 6c-2.5 1-3.4 3.8-3.4 3.8s-2.5 2-1.5 6.5c0.8 3.7 3.2 5.7 4.8 6.2 0.8 0.3 1.5 0.1 2-0.3l0.2-0.2c0.4-0.4 1-0.6 1.6-0.6h0.8c0.6 0 1.2 0.2 1.6 0.6l0.2 0.2c0.5 0.4 1.2 0.6 2 0.3 1.6-0.5 4-2.5 4.8-6.2C21 17.3 20.5 14.5 20.5 14.5z"
                fill="#e8e4dc"
                opacity="0.7"
              />
              <path
                d="M14 5.5 L14 2 L11 4"
                stroke="#e8e4dc"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.5"
              />
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
