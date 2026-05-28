"use client";

import { useEffect } from "react";
import Link from "next/link";

const sparkData = [
  { x: "48%", y: "28%", tx: "-20px", ty: "-50px", dur: "3.2s", delay: "0s" },
  { x: "52%", y: "30%", tx: "18px", ty: "-45px", dur: "2.8s", delay: "0.6s" },
  { x: "45%", y: "35%", tx: "-28px", ty: "-60px", dur: "3.5s", delay: "1.2s" },
  { x: "55%", y: "32%", tx: "25px", ty: "-55px", dur: "2.5s", delay: "1.8s" },
  { x: "50%", y: "25%", tx: "-8px", ty: "-65px", dur: "4s", delay: "0.3s" },
  { x: "47%", y: "38%", tx: "30px", ty: "-40px", dur: "3s", delay: "2.1s" },
];

export default function Hero() {
  useEffect(() => {
    // Reveal all elements within hero immediately on mount
    const reveals = document.querySelectorAll(".hero .reveal");
    reveals.forEach((el) => {
      el.classList.add("visible");
    });
  }, []);

  return (
    <header className="min-h-screen relative flex items-center overflow-hidden hero">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_65%_50%,rgba(59,31,0,0.55)_0%,transparent_70%),radial-gradient(ellipse_30%_40%_at_65%_50%,rgba(255,107,26,0.12)_0%,transparent_60%)] bg-ink-950"></div>
      <div className="relative z-10 px-6 md:px-12 pt-[140px] pb-20 max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="reveal">
          <p className="font-cinzel text-[11px] tracking-[0.35em] uppercase text-ember-500 mb-7 flex items-center gap-3 before:content-[''] before:w-8 before:h-px before:bg-ember-600">
            Forge · The Harness Protocol
          </p>
          <h1 className="font-cinzel text-[44px] md:text-[6vw] lg:text-[76px] font-bold leading-[1.05] tracking-[-0.01em] text-text-primary mb-8">
            Don't fight
            <br />
            the urge.
            <br />
            <em className="not-italic text-ember-500">Harvest it.</em>
          </h1>
          <p className="text-xl font-light text-text-muted leading-relaxed mb-[52px] max-w-[500px]">
            Stop staring at a passive countdown timer. Forge is a science-backed, offline-first discipline harness designed to break free from compulsive digital loops and reclaim your focus by turning raw temptation into physical, game-like steel craft.
          </p>
          <div className="flex gap-5 flex-wrap items-center">
            <Link
              href="#download"
              className="inline-flex items-center gap-2.5 px-9 py-4.5 bg-ember-500 text-ink-950 font-cinzel text-[13px] tracking-[0.18em] uppercase no-underline font-bold transition-all duration-300 relative overflow-hidden shadow-lg hover:shadow-ember-500/35 hover:-translate-y-px group"
              id="hero-btn-download"
            >
              <span className="relative z-10 flex items-center gap-2">
                ENTER THE CRUCIBLE
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 7h8M8 4l3 3-3 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white-hot opacity-0 group-hover:opacity-15 transition-opacity duration-300" />
            </Link>
            <Link
              href="#how"
              className="font-cinzel text-xs tracking-[0.2em] uppercase text-text-muted hover:text-text-primary no-underline flex items-center gap-2 transition-colors duration-300"
              id="hero-btn-method"
            >
              EXPLORE THE PROTOCOLS
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M6 2v8M2 8l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex justify-center items-center relative">
          <div className="relative w-[280px] h-[520px] flex justify-center items-center">
            <div className="absolute inset-[-60px] bg-[radial-gradient(ellipse_at_center,rgba(255,107,26,0.18)_0%,rgba(255,107,26,0.06)_40%,transparent_70%)] animate-glow-pulse"></div>
            <div className="absolute inset-0 pointer-events-none">
              {sparkData.map((s, i) => (
                <div
                  key={i}
                  className="spark"
                  style={{
                    left: s.x,
                    top: s.y,
                    ["--tx" as any]: s.tx,
                    ["--ty" as any]: s.ty,
                    ["--dur" as any]: s.dur,
                    ["--delay" as any]: s.delay,
                  }}
                />
              ))}
            </div>
            <svg
              className="animate-blade-breathe"
              width="140"
              height="420"
              viewBox="0 0 140 420"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                filter: "drop-shadow(0 0 20px rgba(255,107,26,0.4)) drop-shadow(0 0 60px rgba(255,107,26,0.15))",
              }}
            >
              <defs>
                <linearGradient id="bladeBody" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#3B1F00" />
                  <stop offset="35%" stopColor="#FF6B1A" stopOpacity="0.8" />
                  <stop offset="55%" stopColor="#FFDA6A" stopOpacity="0.95" />
                  <stop offset="75%" stopColor="#FF8C44" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#23201a" />
                </linearGradient>
                <linearGradient id="bladeFade" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFDA6A" stopOpacity="0.3" />
                  <stop offset="40%" stopColor="#FF6B1A" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#3B1F00" />
                </linearGradient>
                <linearGradient id="edgeGlow" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#FF6B1A" stopOpacity="0" />
                  <stop offset="50%" stopColor="#FFDA6A" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#FF6B1A" stopOpacity="0" />
                </linearGradient>
                <filter id="bladeBlur">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
                </filter>
              </defs>
              {/* Blade shadow/aura */}
              <ellipse cx="70" cy="210" rx="28" ry="180" fill="#FF6B1A" fillOpacity="0.06" filter="url(#bladeBlur)" />
              {/* Main blade shape (two-sided taper) */}
              <path d="M70 10 L88 60 L96 180 L90 340 L70 390 L50 340 L44 180 L52 60 Z" fill="url(#bladeBody)" opacity="0.9" />
              {/* Center fuller groove */}
              <path d="M70 20 L74 80 L76 200 L74 350 L70 385" stroke="#FFDA6A" strokeWidth="0.7" strokeOpacity="0.35" />
              <path d="M70 20 L66 80 L64 200 L66 350 L70 385" stroke="#FF8C44" strokeWidth="0.4" strokeOpacity="0.2" />
              {/* Edge highlight */}
              <path d="M88 60 L96 180 L90 340 L70 390" stroke="url(#edgeGlow)" strokeWidth="1.5" fill="none" opacity="0.8" />
              <path d="M52 60 L44 180 L50 340 L70 390" stroke="url(#edgeGlow)" strokeWidth="0.8" fill="none" opacity="0.4" />
              {/* Crossguard */}
              <rect x="30" y="330" width="80" height="10" rx="2" fill="#2e2a22" stroke="#FF6B1A" strokeWidth="0.8" strokeOpacity="0.6" />
              <rect x="38" y="332" width="64" height="6" rx="1" fill="#23201a" />
              <line x1="70" y1="330" x2="70" y2="340" stroke="#FFDA6A" strokeWidth="0.8" strokeOpacity="0.5" />
              {/* Grip */}
              <rect x="58" y="340" width="24" height="60" rx="4" fill="#18160f" stroke="#3B3730" strokeWidth="1" />
              {/* Grip wrapping lines */}
              <line x1="58" y1="352" x2="82" y2="352" stroke="#2e2a22" strokeWidth="1.5" />
              <line x1="58" y1="362" x2="82" y2="362" stroke="#2e2a22" strokeWidth="1.5" />
              <line x1="58" y1="372" x2="82" y2="372" stroke="#2e2a22" strokeWidth="1.5" />
              <line x1="58" y1="382" x2="82" y2="382" stroke="#2e2a22" strokeWidth="1.5" />
              {/* Pommel */}
              <ellipse cx="70" cy="406" rx="16" ry="8" fill="#18160f" stroke="#FF6B1A" strokeWidth="0.8" strokeOpacity="0.4" />
              <ellipse cx="70" cy="406" rx="8" ry="4" fill="#3B1F00" />
              {/* Tip glow */}
              <circle cx="70" cy="14" r="6" fill="#FFDA6A" opacity="0.12" />
            </svg>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-center">
              <div className="font-cinzel text-[64px] font-black text-ember-500 leading-none opacity-15 tracking-[-0.02em]">
                90
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
