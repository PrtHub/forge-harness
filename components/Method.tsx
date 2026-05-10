export default function Method() {
  return (
    <section id="how" className="px-6 md:px-12 py-24 lg:py-30 max-w-[1200px] mx-auto">
      <p className="font-cinzel text-[10px] tracking-[0.4em] uppercase text-ember-600 mb-5 reveal">
        The Method
      </p>
      <h2 className="font-cinzel text-[32px] md:text-[4vw] lg:text-[54px] font-bold leading-tight text-text-primary mb-12 reveal">
        Three tools.
        <br />
        One forge.
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-ink-600 border border-ink-600 mt-18">
        <div className="bg-ink-900 px-10 py-14 transition-colors duration-500 relative overflow-hidden hover:bg-ink-800 before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[2px] before:bg-ember-500 before:scale-x-0 before:origin-left hover:before:scale-x-100 before:transition-transform before:duration-500 reveal">
          <svg className="w-12 h-12 mb-7 opacity-90" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="4" width="8" height="30" rx="2" fill="#FF6B1A" opacity="0.8" />
            <rect x="14" y="10" width="20" height="8" rx="2" fill="#FFAA66" opacity="0.6" />
            <path d="M18 34 L16 44 L24 40 L32 44 L30 34" fill="#3B1F00" stroke="#FF6B1A" strokeWidth="1" />
          </svg>
          <h3 className="font-cinzel text-xl font-bold text-text-primary mb-4 tracking-wider">The Strike</h3>
          <p className="text-sm font-light text-text-muted leading-relaxed mb-7">
            One intentional act each day. Strike the iron while it's hot. The double-haptic ritual marks another day forged, not another day survived.
          </p>
          <p className="font-cinzel text-[10px] tracking-[0.25em] uppercase text-ember-600 flex items-center gap-2 before:content-[''] before:w-5 before:h-px before:bg-ember-700">
            Daily ritual
          </p>
        </div>
        <div className="bg-ink-900 px-10 py-14 transition-colors duration-500 relative overflow-hidden hover:bg-ink-800 before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[2px] before:bg-ember-500 before:scale-x-0 before:origin-left hover:before:scale-x-100 before:transition-transform before:duration-500 reveal reveal-delay-1">
          <svg className="w-12 h-12 mb-7 opacity-90" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="18" stroke="#FF6B1A" strokeWidth="1.5" opacity="0.5" />
            <circle cx="24" cy="24" r="12" stroke="#FFAA66" strokeWidth="1" opacity="0.6" />
            <circle cx="24" cy="24" r="5" fill="#FF6B1A" opacity="0.9" />
            <path d="M24 6 L24 12" stroke="#FF6B1A" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
            <path d="M24 36 L24 42" stroke="#FF6B1A" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
            <path d="M6 24 L12 24" stroke="#FF6B1A" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
            <path d="M36 24 L42 24" stroke="#FF6B1A" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
          </svg>
          <h3 className="font-cinzel text-xl font-bold text-text-primary mb-4 tracking-wider">The Crucible</h3>
          <p className="text-sm font-light text-text-muted leading-relaxed mb-7">
            Urge hits — open Crucible. Three taps, ten seconds. Your archetype gets a protocol. Push-ups. Breathing cycles. Cold exposure. Movement. The energy is redirected, not repressed.
          </p>
          <p className="font-cinzel text-[10px] tracking-[0.25em] uppercase text-ember-600 flex items-center gap-2 before:content-[''] before:w-5 before:h-px before:bg-ember-700">
            Crisis protocol
          </p>
        </div>
        <div className="bg-ink-900 px-10 py-14 transition-colors duration-500 relative overflow-hidden hover:bg-ink-800 before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[2px] before:bg-ember-500 before:scale-x-0 before:origin-left hover:before:scale-x-100 before:transition-transform before:duration-500 reveal reveal-delay-2">
          <svg className="w-12 h-12 mb-7 opacity-90" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 36 L16 24 L24 28 L32 16 L40 20"
              stroke="#FF6B1A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              opacity="0.8"
            />
            <circle cx="40" cy="20" r="3" fill="#FFDA6A" opacity="0.9" />
            <path d="M8 40 L40 40" stroke="#3B3730" strokeWidth="1" />
            <path d="M8 36 L8 40" stroke="#3B3730" strokeWidth="1" />
            <rect x="12" y="30" width="4" height="10" rx="1" fill="#FF6B1A" opacity="0.3" />
            <rect x="20" y="26" width="4" height="14" rx="1" fill="#FF6B1A" opacity="0.5" />
            <rect x="28" y="20" width="4" height="20" rx="1" fill="#FF6B1A" opacity="0.7" />
          </svg>
          <h3 className="font-cinzel text-xl font-bold text-text-primary mb-4 tracking-wider">The Oracle</h3>
          <p className="text-sm font-light text-text-muted leading-relaxed mb-7">
            Predictive risk scoring built from your own patterns. The Oracle knows your high-risk windows, your triggers, your failure clusters — and warns you before they arrive.
          </p>
          <p className="font-cinzel text-[10px] tracking-[0.25em] uppercase text-ember-600 flex items-center gap-2 before:content-[''] before:w-5 before:h-px before:bg-ember-700">
            Pattern intelligence
          </p>
        </div>
      </div>
    </section>
  );
}
