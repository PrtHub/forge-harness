export default function Stats() {
  return (
    <div className="bg-ink-900 px-0 py-0 max-w-none">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-20 lg:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-ink-600 border border-ink-600 mt-18">
          <div className="bg-ink-900 py-12 px-9 text-center reveal">
            <div className="font-cinzel text-[52px] font-black text-ember-500 leading-none mb-2 tracking-tighter">
              90
            </div>
            <div className="font-cinzel text-[10px] tracking-[0.3em] uppercase text-text-dim">
              Days to Tempered Steel
            </div>
          </div>
          <div className="bg-ink-900 py-12 px-9 text-center reveal reveal-delay-1">
            <div className="font-cinzel text-[52px] font-black text-ember-500 leading-none mb-2 tracking-tighter">
              0
            </div>
            <div className="font-cinzel text-[10px] tracking-[0.3em] uppercase text-text-dim">
              Data Leaves Your Device
            </div>
          </div>
          <div className="bg-ink-900 py-12 px-9 text-center reveal reveal-delay-2">
            <div className="font-cinzel text-[52px] font-black text-ember-500 leading-none mb-2 tracking-tighter">
              5
            </div>
            <div className="font-cinzel text-[10px] tracking-[0.3em] uppercase text-text-dim">
              Archetype Protocols
            </div>
          </div>
          <div className="bg-ink-900 py-12 px-9 text-center reveal reveal-delay-3">
            <div className="font-cinzel text-[52px] font-black text-ember-500 leading-none mb-2 tracking-tighter">
              365
            </div>
            <div className="font-cinzel text-[10px] tracking-[0.3em] uppercase text-text-dim">
              Day Ultimate Milestone
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
