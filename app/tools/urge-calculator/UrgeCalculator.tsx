"use client";

import { useState } from "react";
import Link from "next/link";

export default function UrgeCalculator() {
  const [weeklyHours, setWeeklyHours] = useState(4);
  const [yearsStruggling, setYearsStruggling] = useState(5);
  const [hourlyValue, setHourlyValue] = useState(30);

  // Core Math
  const yearlyHours = weeklyHours * 52;
  const lifetimeHours = yearlyHours * yearsStruggling;
  const lifetimeDays = Math.round(lifetimeHours / 24);
  const lifetimeCost = lifetimeHours * hourlyValue;

  const ninetyDayReclaimHours = Math.round((weeklyHours / 7) * 90);
  const ninetyDayReclaimDays = (ninetyDayReclaimHours / 24).toFixed(1);

  return (
    <div className="space-y-12">
      {/* Calculator Card */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-8 bg-ink-900 border border-ink-700 p-8 md:p-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_0%_0%,rgba(255,107,26,0.04)_0%,transparent_60%)] pointer-events-none" />

        {/* Sliders Input Area */}
        <div className="space-y-8 relative z-10">
          {/* Input 1: Weekly Hours */}
          <div>
            <div className="flex justify-between items-center mb-2.5">
              <label className="font-cinzel text-xs font-bold text-text-primary uppercase tracking-widest">
                Weekly Hours Lost
              </label>
              <span className="font-cinzel text-sm text-ember-500 font-bold">
                {weeklyHours} hrs / week
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              value={weeklyHours}
              onChange={(e) => setWeeklyHours(parseInt(e.target.value))}
              className="w-full h-1 bg-ink-700 rounded-lg appearance-none cursor-pointer accent-ember-500"
            />
            <p className="text-xs text-text-dim mt-1.5 italic">
              Estimate hours spent thinking about, browsing, and executing urge cycles weekly.
            </p>
          </div>

          {/* Input 2: Years */}
          <div>
            <div className="flex justify-between items-center mb-2.5">
              <label className="font-cinzel text-xs font-bold text-text-primary uppercase tracking-widest">
                Years in the Loop
              </label>
              <span className="font-cinzel text-sm text-ember-500 font-bold">
                {yearsStruggling} years
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="15"
              value={yearsStruggling}
              onChange={(e) => setYearsStruggling(parseInt(e.target.value))}
              className="w-full h-1 bg-ink-700 rounded-lg appearance-none cursor-pointer accent-ember-500"
            />
            <p className="text-xs text-text-dim mt-1.5 italic">
              How many years has this habit been recurring in your routine?
            </p>
          </div>

          {/* Input 3: Hourly Focus Value */}
          <div>
            <div className="flex justify-between items-center mb-2.5">
              <label className="font-cinzel text-xs font-bold text-text-primary uppercase tracking-widest">
                Hourly Focus Value
              </label>
              <span className="font-cinzel text-sm text-ember-500 font-bold">
                ${hourlyValue} / hr
              </span>
            </div>
            <input
              type="range"
              min="15"
              max="150"
              step="5"
              value={hourlyValue}
              onChange={(e) => setHourlyValue(parseInt(e.target.value))}
              className="w-full h-1 bg-ink-700 rounded-lg appearance-none cursor-pointer accent-ember-500"
            />
            <p className="text-xs text-text-dim mt-1.5 italic">
              Estimate the dollar value of your active hourly focus and creative output.
            </p>
          </div>
        </div>

        {/* Results Sidebar Panel */}
        <div className="bg-ink-950 border border-ink-700 p-6 flex flex-col justify-between relative z-10 text-center md:text-left">
          <div>
            <p className="font-cinzel text-[9px] tracking-wider text-text-dim uppercase mb-4">
              Total Audit Results
            </p>
            
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-widest font-cinzel text-text-muted block mb-1">
                Lifetime Hours Lost
              </span>
              <span className="font-cinzel text-3xl font-black text-text-primary tracking-tight">
                {lifetimeHours.toLocaleString()}
              </span>
              <span className="text-xs text-text-muted block mt-1">
                ({lifetimeDays} full 24-hr days)
              </span>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-widest font-cinzel text-text-muted block mb-1">
                Opportunity Cost
              </span>
              <span className="font-cinzel text-3xl font-black text-white-hot tracking-tight">
                ${lifetimeCost.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="border-t border-ink-800 pt-6 mt-6">
            <span className="text-[9px] uppercase tracking-widest font-cinzel text-ember-500 block mb-1">
              90-Day Reclaim Potential
            </span>
            <span className="font-cinzel text-lg font-bold text-text-primary block">
              {ninetyDayReclaimHours} hrs ({ninetyDayReclaimDays} days)
            </span>
          </div>
        </div>
      </div>

      {/* Lead Capture card */}
      <div className="bg-ink-900 border border-ink-600 p-8 md:p-12 relative overflow-hidden text-center max-w-[760px] mx-auto">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_120%,rgba(255,107,26,0.08)_0%,transparent_70%)] pointer-events-none" />
        <p className="font-cinzel text-[10px] tracking-[0.35em] uppercase text-ember-500 mb-4">
          The Sublimation Solution
        </p>
        <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-text-primary mb-4 tracking-wide">
          Reclaim Your Focus Budget
        </h2>
        <p className="text-sm font-light text-text-muted leading-relaxed mb-8 max-w-[480px] mx-auto">
          These hours don't need to be deleted. By downloading Forge, you redirect this exact raw tension back into productive crafts, workouts, and real willpower.
        </p>
        <Link
          href="https://apps.apple.com/us/app/forge-iron-mind-discipline/id6767904744"
          className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-ember-500 text-ink-950 font-cinzel text-xs tracking-[0.18em] uppercase no-underline font-bold transition-all duration-300 hover:shadow-ember-500/35 hover:-translate-y-px"
        >
          ENTER THE CRUCIBLE & RECLAIM
        </Link>
      </div>
    </div>
  );
}
