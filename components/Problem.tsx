export default function Problem() {
  return (
    <section className="bg-ink-900 px-0 py-0 max-w-none">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        <div className="px-6 md:px-16 py-20 lg:py-24 flex flex-col justify-center lg:border-r border-ink-600">
          <p className="font-cinzel text-[10px] tracking-[0.4em] uppercase text-ember-600 mb-5">The Problem</p>
          <div className="w-12 h-px bg-ember-600 my-10"></div>
          <p className="text-[26px] md:text-[3.5vw] lg:text-[44px] font-light leading-tight text-text-primary italic mb-9 reveal">
            "Most apps keep you focused on what you're escaping. That's the wrong direction."
          </p>
          <p className="text-base font-light text-text-muted leading-relaxed max-w-[380px] reveal reveal-delay-1">
            Shame mechanics don't work on men who've already tried willpower. The framing is broken. Forge inverts it.
          </p>
        </div>
        <div className="px-6 md:px-16 py-20 lg:py-24 flex flex-col justify-center">
          <div className="flex flex-col gap-0">
            <div className="py-7 border-b border-ink-600 grid grid-cols-[32px_1fr] gap-5 items-start first:border-t reveal">
              <span className="font-cinzel text-[11px] text-ember-600 pt-[3px]">01</span>
              <div>
                <p className="font-cinzel text-base font-semibold text-text-primary mb-2 tracking-wider">The Old Frame</p>
                <p className="text-sm font-light text-text-muted leading-relaxed">
                  Disease. Shame. Willpower. You fight the urge and lose, then carry the failure. The cycle compounds.
                </p>
              </div>
            </div>
            <div className="py-7 border-b border-ink-600 grid grid-cols-[32px_1fr] gap-5 items-start reveal reveal-delay-1">
              <span className="font-cinzel text-[11px] text-ember-600 pt-[3px]">02</span>
              <div>
                <p className="font-cinzel text-base font-semibold text-text-primary mb-2 tracking-wider">The Forge Frame</p>
                <p className="text-sm font-light text-text-muted leading-relaxed">
                  Urges are energy. Pressure is fuel. You don't suppress — you redirect. Every urge harvested makes the blade harder.
                </p>
              </div>
            </div>
            <div className="py-7 border-b border-ink-600 grid grid-cols-[32px_1fr] gap-5 items-start reveal reveal-delay-2">
              <span className="font-cinzel text-[11px] text-ember-600 pt-[3px]">03</span>
              <div>
                <p className="font-cinzel text-base font-semibold text-text-primary mb-2 tracking-wider">Identity First</p>
                <p className="text-sm font-light text-text-muted leading-relaxed">
                  You don't become the man who quit. You become the man who forged himself. The discipline proves the identity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
