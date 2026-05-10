export default function Pledge() {
  return (
    <section className="bg-[linear-gradient(135deg,var(--color-ember-900)_0%,var(--color-ink-900)_50%,var(--color-ink-950)_100%)] px-0 py-0 border-t border-t-ember-900 border-b border-b-ink-700 relative overflow-hidden before:content-[''] before:absolute before:top-[-100px] before:left-[-100px] before:w-[400px] before:h-[400px] before:bg-[radial-gradient(circle,rgba(255,107,26,0.08)_0%,transparent_70%)] max-w-none">
      <div className="py-24 px-6 md:px-12 max-w-[900px] mx-auto text-center relative z-10">
        <p className="font-cinzel text-[10px] tracking-[0.4em] uppercase text-ember-600 mb-9">The Harness Voice</p>
        <p className="text-[22px] md:text-[3.5vw] lg:text-[38px] font-light italic text-text-primary leading-relaxed mb-5 reveal">
          "The iron is only <strong className="font-semibold not-italic text-white-hot">cold once.</strong> Every hour you wait, it cools. Every urge you harvest, it heats. By day ninety, you will not recognize the man you were."
        </p>
        <p className="font-cinzel text-xs tracking-widest text-text-dim uppercase reveal reveal-delay-1">— Forge · The Operator's Pledge</p>
      </div>
    </section>
  );
}
