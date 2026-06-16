"use client";

import { useState } from "react";
import Link from "next/link";

interface Milestone {
  phase: string;
  title: string;
  durationLabel: (years: number, freq: number) => string;
  state: string;
  symptoms: string;
  action: string;
  science: string;
}

const MILESTONES: Milestone[] = [
  {
    phase: "Phase 1",
    title: "Neurotransmitter Stabilization",
    durationLabel: () => "Days 1 – 7",
    state: "Severe dopamine deficit state. Receptors are highly downregulated, and synaptic clefts crave high-volume stimulus.",
    symptoms: "Intense cravings, irritability, restless energy, attention fragmentation, and insomnia.",
    action: "Run Crucible Protocols. Walk 200 steps when urges spike, take cold showers, and keep devices strictly outside the bedroom.",
    science: "Studies demonstrate that initial withdrawal triggers autonomic stress responses, dropping baseline dopamine levels below normal set-points."
  },
  {
    phase: "Phase 2",
    title: "Receptor Upregulation",
    durationLabel: (years, freq) => {
      const days = Math.round(14 + (years * 1) + (freq * 0.5));
      return `Days 8 – ${days}`;
    },
    state: "D2 dopamine receptor density begins to multiply to adjust to the lower stimulation baseline.",
    symptoms: "Fluctuating motivation, temporary flatline (low libido/drive), followed by sudden surges of clarity and physical energy.",
    action: "Establish morning habit stacking. Replace digital browsing with high-friction physical tasks (e.g., strength training, reading).",
    science: "PET scans reveal that dopamine receptor availability begins returning to healthy control levels within 3 to 4 weeks of digital stimulus abstinence."
  },
  {
    phase: "Phase 3",
    title: "DeltaFosB Clearance",
    durationLabel: (years, freq) => {
      const start = Math.round(15 + (years * 1) + (freq * 0.5));
      const end = Math.round(60 + (years * 2) + (freq * 1.5));
      return `Days ${start} – ${end}`;
    },
    state: "DeltaFosB—the transcription factor that acts as the molecular 'addiction switch' in the nucleus accumbens—begins its decay cycle.",
    symptoms: "Significant drop in automatic cue-reactivity. Relapses transition from 'compulsive ticks' to deliberate choices. Sleep patterns normalize.",
    action: "Engage in creative crafts. Build, write, or code. Use local-first tracking to measure consistency without validation feeds.",
    science: "Molecular research by Dr. Eric Nestler indicates DeltaFosB is highly stable but undergoes complete degradation after 8 to 12 weeks of clean redirection."
  },
  {
    phase: "Phase 4",
    title: "Cortical Consolidation",
    durationLabel: (years, freq) => {
      const start = Math.round(61 + (years * 2) + (freq * 1.5));
      return `Days ${start}+`;
    },
    state: "Prefrontal cortex gray matter thickens, restoring top-down executive command and cognitive self-control.",
    symptoms: "High solitude tolerance, deep concentration capacity, low vulnerability to instant triggers, and an identity shift to a Free Operator.",
    action: "Maintain the baseline. Teach redirection principles to others. Leverage your restored attention span for hard career goals.",
    science: "Structural MRI investigations indicate significant gray matter volume increases in the prefrontal cortex after 90 days of cognitive behavioral training."
  }
];

export default function RewiringEstimator() {
  const [yearsActive, setYearsActive] = useState(5);
  const [weeklyFrequency, setWeeklyFrequency] = useState(7);
  const [activePhase, setActivePhase] = useState(0);

  // Dynamic calculations
  const acuteStabilizationDays = Math.round(7 + (yearsActive * 0.5));
  const fullReceptorUpregulationDays = Math.round(30 + (yearsActive * 1.5) + (weeklyFrequency * 1));
  const deltaFosbClearanceDays = Math.round(60 + (yearsActive * 2.5) + (weeklyFrequency * 1.5));

  return (
    <div className="space-y-12">
      {/* Configuration Card */}
      <div className="bg-ink-900 border border-ink-700 p-8 md:p-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_0%_0%,rgba(255,107,26,0.04)_0%,transparent_60%)] pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {/* Sliders */}
          <div className="space-y-8">
            <h3 className="font-cinzel text-xs uppercase tracking-widest text-text-primary font-bold border-b border-ink-800 pb-3">
              Configure Habit Profile
            </h3>

            {/* Years Slider */}
            <div>
              <div className="flex justify-between items-center mb-2.5">
                <label className="font-cinzel text-xs font-bold text-text-primary uppercase tracking-widest">
                  Years of Habit Loop
                </label>
                <span className="font-cinzel text-sm text-ember-500 font-bold">
                  {yearsActive} Years
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="15"
                value={yearsActive}
                onChange={(e) => setYearsActive(parseInt(e.target.value))}
                className="w-full h-1 bg-ink-700 rounded-lg appearance-none cursor-pointer accent-ember-500"
              />
              <p className="text-xs text-text-dim mt-1.5 italic">
                How many years have high-stimulation digital loops been active in your routine?
              </p>
            </div>

            {/* Frequency Slider */}
            <div>
              <div className="flex justify-between items-center mb-2.5">
                <label className="font-cinzel text-xs font-bold text-text-primary uppercase tracking-widest">
                  Weekly Trigger Frequency
                </label>
                <span className="font-cinzel text-sm text-ember-500 font-bold">
                  {weeklyFrequency} times / week
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="21"
                value={weeklyFrequency}
                onChange={(e) => setWeeklyFrequency(parseInt(e.target.value))}
                className="w-full h-1 bg-ink-700 rounded-lg appearance-none cursor-pointer accent-ember-500"
              />
              <p className="text-xs text-text-dim mt-1.5 italic">
                Estimate how many times a week you engage in high-stimulation loops.
              </p>
            </div>
          </div>

          {/* Core Metrics */}
          <div className="bg-ink-950 border border-ink-700 p-6 flex flex-col justify-between">
            <div>
              <p className="font-cinzel text-[9px] tracking-wider text-text-dim uppercase mb-5">
                Projected physiological timeline
              </p>

              <div className="space-y-5">
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-cinzel text-text-muted block mb-1">
                    Acute Stabilization
                  </span>
                  <span className="font-cinzel text-2xl font-black text-text-primary tracking-tight">
                    {acuteStabilizationDays} Days
                  </span>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-widest font-cinzel text-text-muted block mb-1">
                    Receptor Re-Sensitization
                  </span>
                  <span className="font-cinzel text-2xl font-black text-white-hot tracking-tight">
                    ~ {fullReceptorUpregulationDays} Days
                  </span>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-widest font-cinzel text-text-muted block mb-1">
                    Molecular DeltaFosB Clearance
                  </span>
                  <span className="font-cinzel text-2xl font-black text-ember-400 tracking-tight">
                    ~ {deltaFosbClearanceDays} Days
                  </span>
                </div>
              </div>
            </div>

            <p className="text-[10px] text-text-muted italic leading-relaxed border-t border-ink-800 pt-4 mt-4">
              *Estimates are calculated based on cellular downregulation kinetics and prefrontal plastic decay rates.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Timeline Hub */}
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="font-cinzel text-xs uppercase tracking-widest text-text-muted mb-2">
            Neuroplastic Phase Progression
          </h3>
          <p className="text-xs text-text-dim">
            Click on a phase block below to display recovery metrics, symptoms, and targeted protocols.
          </p>
        </div>

        {/* Phase Buttons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {MILESTONES.map((milestone, idx) => {
            const isActive = idx === activePhase;
            return (
              <button
                key={idx}
                onClick={() => setActivePhase(idx)}
                className={`p-4 border text-left rounded-none transition-all group cursor-pointer ${
                  isActive
                    ? "bg-ink-800 border-ember-500"
                    : "bg-ink-900 border-ink-800 hover:border-ember-500/50 hover:bg-ink-800"
                }`}
              >
                <span className="font-cinzel text-[9px] uppercase tracking-widest text-ember-500 block mb-1">
                  {milestone.phase}
                </span>
                <h4 className={`text-xs font-cinzel font-bold leading-snug mb-1 transition-colors ${
                  isActive ? "text-white-hot" : "text-text-primary group-hover:text-ember-400"
                }`}>
                  {milestone.title}
                </h4>
                <span className="text-[10px] text-text-muted font-bold block">
                  {milestone.durationLabel(yearsActive, weeklyFrequency)}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Phase Details Card */}
        <div className="bg-ink-900 border border-ink-700 p-6 md:p-8 relative overflow-hidden transition-all duration-300">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_100%_0%,rgba(255,107,26,0.02)_0%,transparent_60%)] pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="flex flex-wrap justify-between items-center gap-3 border-b border-ink-800 pb-4">
              <div>
                <span className="font-cinzel text-[10px] uppercase tracking-[0.2em] text-ember-500 block mb-1">
                  Active Timeline Segment
                </span>
                <h4 className="font-cinzel text-lg font-bold text-text-primary">
                  {MILESTONES[activePhase].title}
                </h4>
              </div>
              <span className="font-cinzel text-sm text-white-hot font-bold px-3 py-1 bg-ember-900/40 border border-ember-500/20">
                {MILESTONES[activePhase].durationLabel(yearsActive, weeklyFrequency)}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-4">
                <div>
                  <span className="font-cinzel text-[10px] uppercase tracking-wider text-text-muted block mb-1">
                    Physiological Receptor State
                  </span>
                  <p className="font-light text-text-primary leading-relaxed font-spectral">
                    {MILESTONES[activePhase].state}
                  </p>
                </div>

                <div>
                  <span className="font-cinzel text-[10px] uppercase tracking-wider text-text-muted block mb-1">
                    Expected Symptoms & Challenges
                  </span>
                  <p className="font-light text-text-muted leading-relaxed font-spectral">
                    {MILESTONES[activePhase].symptoms}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="font-cinzel text-[10px] uppercase tracking-wider text-ember-500 font-bold block mb-1">
                    Required Operator Protocol
                  </span>
                  <p className="font-light text-text-primary leading-relaxed font-spectral">
                    {MILESTONES[activePhase].action}
                  </p>
                </div>

                <div>
                  <span className="font-cinzel text-[10px] uppercase tracking-wider text-text-dim block mb-1">
                    Scientific Reference Data
                  </span>
                  <p className="font-light text-text-muted leading-relaxed italic text-xs font-spectral">
                    {MILESTONES[activePhase].science}
                  </p>
                </div>
              </div>
            </div>

            {/* Recommendations links based on active phase */}
            <div className="border-t border-ink-800 pt-5 mt-4 flex flex-wrap gap-4 items-center">
              <span className="text-[10px] font-cinzel uppercase text-text-dim tracking-wider">
                Recommended reading:
              </span>
              
              {activePhase === 0 && (
                <>
                  <Link href="/guides/severity-mode-guide" className="text-xs text-ember-500 hover:text-ember-400 no-underline font-bold uppercase tracking-wider">
                    Severity Mode Guide →
                  </Link>
                  <Link href="/habits/cold-shower-shock" className="text-xs text-ember-500 hover:text-ember-400 no-underline font-bold uppercase tracking-wider">
                    Cold Shower Habit →
                  </Link>
                </>
              )}
              {activePhase === 1 && (
                <>
                  <Link href="/guides/dopamine-detox-protocol" className="text-xs text-ember-500 hover:text-ember-400 no-underline font-bold uppercase tracking-wider">
                    Dopamine Detox Protocol →
                  </Link>
                  <Link href="/habits/habit-stacking-morning" className="text-xs text-ember-500 hover:text-ember-400 no-underline font-bold uppercase tracking-wider">
                    Morning Habit Stacking →
                  </Link>
                </>
              )}
              {activePhase === 2 && (
                <>
                  <Link href="/studies/delta-fosb-accumulation-compulsion" className="text-xs text-ember-500 hover:text-ember-400 no-underline font-bold uppercase tracking-wider">
                    DeltaFosB Study Review →
                  </Link>
                  <Link href="/guides/brain-rewiring-timeline" className="text-xs text-ember-500 hover:text-ember-400 no-underline font-bold uppercase tracking-wider">
                    Brain Rewiring Timeline →
                  </Link>
                </>
              )}
              {activePhase === 3 && (
                <>
                  <Link href="/guides/prefrontal-gym-executive" className="text-xs text-ember-500 hover:text-ember-400 no-underline font-bold uppercase tracking-wider">
                    Prefrontal Gym Guide →
                  </Link>
                  <Link href="/studies/mindfulness-prefrontal-thickness" className="text-xs text-ember-500 hover:text-ember-400 no-underline font-bold uppercase tracking-wider">
                    Cortical Thickness Study →
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Conversion Board */}
      <div className="bg-ink-900 border border-ink-600 p-8 md:p-12 relative overflow-hidden text-center max-w-[760px] mx-auto">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_120%,rgba(255,107,26,0.08)_0%,transparent_70%)] pointer-events-none" />
        <p className="font-cinzel text-[10px] tracking-[0.35em] uppercase text-ember-500 mb-4">
          Maintain the Timeline
        </p>
        <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-text-primary mb-4 tracking-wide">
          Sustain Your Neuroplastic Reset
        </h2>
        <p className="text-sm font-light text-text-muted leading-relaxed mb-8 max-w-[480px] mx-auto">
          Rebuilding neural pathways requires daily discipline. Use the local-first Forge application to track milestones offline, build mental toughness, and guarantee your progress.
        </p>
        <Link
          href="https://apps.apple.com/us/app/forge-iron-mind-discipline/id6767904744"
          className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-ember-500 text-ink-950 font-cinzel text-xs tracking-[0.18em] uppercase no-underline font-bold transition-all duration-300 hover:shadow-ember-500/35 hover:-translate-y-px"
        >
          ENTER THE CRUCIBLE & RESET
        </Link>
      </div>
    </div>
  );
}
