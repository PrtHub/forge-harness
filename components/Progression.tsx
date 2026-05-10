"use client";

import { useEffect } from "react";

export default function Progression() {
  useEffect(() => {
    // Staggered reveal animation on scroll for progression timeline
    const phaseNodes = document.querySelectorAll(".phase-node");
    const phaseObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const node = e.target as HTMLElement;
            node.style.opacity = "1";
            node.style.transform = "translateX(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    phaseNodes.forEach((node, i) => {
      const htmlNode = node as HTMLElement;
      htmlNode.style.opacity = "0";
      htmlNode.style.transform = "translateX(20px)";
      htmlNode.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
      phaseObserver.observe(htmlNode);
    });

    return () => phaseObserver.disconnect();
  }, []);

  return (
    <section id="phases" className="bg-ink-950 px-0 py-24 lg:py-30 max-w-none">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <p className="font-cinzel text-[10px] tracking-[0.4em] uppercase text-ember-600 mb-5 reveal">The Progression</p>
        <h2 className="font-cinzel text-[32px] md:text-[4vw] lg:text-[54px] font-bold leading-tight text-text-primary reveal">The iron knows<br />where you've been.</h2>
        <div className="flex gap-0 mt-18 overflow-x-auto pb-2 scrollbar-none">
          <div className="phase-node flex-1 min-w-[160px] py-8 px-6 border-l border-ink-600 relative cursor-default transition-colors duration-300 hover:bg-ember-500/4">
            <p className="font-cinzel text-[10px] tracking-[0.3em] uppercase text-text-dim mb-5">Day 1</p>
            <div className="w-2 h-2 rounded-full bg-ink-600 mb-4 transition-all duration-300 phase-dot"></div>
            <p className="font-cinzel text-sm font-semibold text-text-muted mb-2.5 tracking-wider">Iron Heat</p>
            <p className="text-[13px] font-light text-text-dim leading-relaxed">The hammer is falling. You're taking shape for the first time.</p>
          </div>
          <div className="phase-node flex-1 min-w-[160px] py-8 px-6 border-l border-ink-600 relative cursor-default transition-colors duration-300 hover:bg-ember-500/4 bg-ember-700/40 border-l-ember-600 active">
            <p className="font-cinzel text-[10px] tracking-[0.3em] uppercase text-ember-500 mb-5">Day 7</p>
            <div className="w-2 h-2 rounded-full bg-ember-500 shadow-[0_0_10px_rgba(255,107,26,0.6)] mb-4 transition-all duration-300 phase-dot"></div>
            <p className="font-cinzel text-sm font-semibold text-text-primary mb-2.5 tracking-wider">First Strike</p>
            <p className="text-[13px] font-light text-text-muted leading-relaxed">The iron holds heat now. The pattern is forming.</p>
          </div>
          <div className="phase-node flex-1 min-w-[160px] py-8 px-6 border-l border-ink-600 relative cursor-default transition-colors duration-300 hover:bg-ember-500/4">
            <p className="font-cinzel text-[10px] tracking-[0.3em] uppercase text-text-dim mb-5">Day 14</p>
            <div className="w-2 h-2 rounded-full bg-ink-600 mb-4 transition-all duration-300 phase-dot"></div>
            <p className="font-cinzel text-sm font-semibold text-text-muted mb-2.5 tracking-wider">The Shaping</p>
            <p className="text-[13px] font-light text-text-dim leading-relaxed">Repeated stress reveals structure. The edge begins.</p>
          </div>
          <div className="phase-node flex-1 min-w-[160px] py-8 px-6 border-l border-ink-600 relative cursor-default transition-colors duration-300 hover:bg-ember-500/4">
            <p className="font-cinzel text-[10px] tracking-[0.3em] uppercase text-text-dim mb-5">Day 30</p>
            <div className="w-2 h-2 rounded-full bg-ink-600 mb-4 transition-all duration-300 phase-dot"></div>
            <p className="font-cinzel text-sm font-semibold text-text-muted mb-2.5 tracking-wider">Hard Steel</p>
            <p className="text-[13px] font-light text-text-dim leading-relaxed">You've outlasted the first withdrawal cycle. This is real.</p>
          </div>
          <div className="phase-node flex-1 min-w-[160px] py-8 px-6 border-l border-ink-600 relative cursor-default transition-colors duration-300 hover:bg-ember-500/4">
            <p className="font-cinzel text-[10px] tracking-[0.3em] uppercase text-text-dim mb-5">Day 60</p>
            <div className="w-2 h-2 rounded-full bg-ink-600 mb-4 transition-all duration-300 phase-dot"></div>
            <p className="font-cinzel text-sm font-semibold text-text-muted mb-2.5 tracking-wider">The Quench</p>
            <p className="text-[13px] font-light text-text-dim leading-relaxed">Dopamine baselines reset. Clarity returns. Hold the line.</p>
          </div>
          <div className="phase-node flex-1 min-w-[160px] py-8 px-6 border-l border-ink-600 relative cursor-default transition-colors duration-300 hover:bg-ember-500/4">
            <p className="font-cinzel text-[10px] tracking-[0.3em] uppercase text-text-dim mb-5">Day 90</p>
            <div className="w-2 h-2 rounded-full bg-ink-600 mb-4 transition-all duration-300 phase-dot"></div>
            <p className="font-cinzel text-sm font-semibold text-text-muted mb-2.5 tracking-wider">Forge Complete</p>
            <p className="text-[13px] font-light text-text-dim leading-relaxed">The blade is finished. Now we see what you do with it.</p>
          </div>
          <div className="phase-node flex-1 min-w-[160px] py-8 px-6 border-l border-ink-600 last:border-r relative cursor-default transition-colors duration-300 hover:bg-ember-500/4">
            <p className="font-cinzel text-[10px] tracking-[0.3em] uppercase text-text-dim mb-5">Day 365</p>
            <div className="w-2 h-2 rounded-full bg-ink-600 mb-4 transition-all duration-300 phase-dot"></div>
            <p className="font-cinzel text-sm font-semibold text-text-muted mb-2.5 tracking-wider">Tempered Steel</p>
            <p className="text-[13px] font-light text-text-dim leading-relaxed">Mastery. The forge opened something that doesn't close again.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
