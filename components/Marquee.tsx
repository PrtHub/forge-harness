export default function Marquee() {
  const items = [
    "The Strike",
    "The Crucible",
    "The Oracle",
    "Energy Sublimation",
    "90 Days to Tempered Steel",
    "No Backend · No Sync · No Exposure",
  ];

  // Double items to create seamless endless scrolling
  const marqueeItems = [...items, ...items];

  return (
    <div className="border-t border-b border-ink-600 py-4.5 overflow-hidden relative bg-ink-950">
      <div className="flex gap-0 animate-marquee-scroll whitespace-nowrap w-max">
        {marqueeItems.map((item, idx) => (
          <span key={idx} className="font-cinzel text-[11px] tracking-[0.3em] uppercase text-text-dim px-12 select-none">
            <span className="text-ember-600 mr-12">⚡</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
