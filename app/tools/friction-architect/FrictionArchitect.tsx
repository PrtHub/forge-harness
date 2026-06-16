"use client";

import { useState } from "react";
import Link from "next/link";

interface Category {
  id: number;
  title: string;
  desc: string;
  options: {
    text: string;
    points: number;
    tip: string;
  }[];
}

const CATEGORIES: Category[] = [
  {
    id: 1,
    title: "Physical Charger Placement",
    desc: "Where does your phone charge overnight while you sleep?",
    options: [
      {
        text: "In bed or on my bedside table (within arm's reach).",
        points: 0,
        tip: "❌ Bedroom Phone Isolation: Relocate your charger to the hallway or kitchen. Never bring your device within arm's reach of your bed."
      },
      {
        text: "Across the room (requires standing up to reach).",
        points: 5,
        tip: "⚠️ Restrict Room Entry: While better, keeping the phone in the bedroom still causes pre-sleep visual cravings. Move it completely outside."
      },
      {
        text: "In another room (kitchen, hallway, or living space).",
        points: 15,
        tip: "✅ Perfect Physical Friction: Charging outside the sleep zone eliminates late-night and early-morning scrolling loops."
      }
    ]
  },
  {
    id: 2,
    title: "Visual Color Spectrum",
    desc: "How is your screen color configuration set up?",
    options: [
      {
        text: "Full, rich color mode (standard configuration).",
        points: 0,
        tip: "❌ Activate Hard Grayscale: Go to Settings -> Accessibility -> Display -> Color Filters. Turn on Grayscale to strip visual dopamine rewards."
      },
      {
        text: "Night Shift or warm color filter active during evening hours.",
        points: 5,
        tip: "⚠️ Go Full Grayscale: Warm lights reduce blue light sleep disruptions, but don't stop the visual appeal of high-contrast icons and media."
      },
      {
        text: "Permanent Grayscale (strictly monochrome screen).",
        points: 15,
        tip: "✅ Perfect Visual Friction: A grayscale screen strips the visual allure of feeds, rendering scrolling boring and inert."
      }
    ]
  },
  {
    id: 3,
    title: "Ambient Notifications Setup",
    desc: "Which notifications are allowed to wake your screen or display badges?",
    options: [
      {
        text: "All apps. Feeds, news, social media, and groups pop up in real-time.",
        points: 0,
        tip: "❌ Mute Ambient Feeds: Disable lock-screen banners and notification badges for all non-essential and social apps."
      },
      {
        text: "Messaging and direct communication apps only.",
        points: 5,
        tip: "⚠️ Tighten Alerts: Messaging is still a source of prompt triggers. Mute group threads and keep direct pings silent unless critical."
      },
      {
        text: "Strictly muted (Do Not Disturb, Focus Mode active, no badges).",
        points: 15,
        tip: "✅ Perfect Notification Friction: You control when to retrieve updates. No external notification can trigger an automatic phone unlock."
      }
    ]
  },
  {
    id: 4,
    title: "App Blockers & Filters",
    desc: "What digital barriers do you use to block adult media or distracting domains?",
    options: [
      {
        text: "No filters, blocks, or app blockers active on my phone.",
        points: 0,
        tip: "❌ Integrate NextDNS Profile: Set up a local-first encrypted DNS profile on your device to block adult/high-stimulus sites at the router level."
      },
      {
        text: "Basic app limits or native iOS Screen Time categories.",
        points: 5,
        tip: "⚠️ Upgrade Block Rigidity: Native limits are easily bypassed with a simple click. Install root-level profile blockers or custom host files."
      },
      {
        text: "Root-level DNS profiles (e.g. NextDNS / custom blocklists).",
        points: 15,
        tip: "✅ Perfect Filtering Friction: Domains are blocked before they ever resolve, preventing impulse overrides during weak moments."
      }
    ]
  },
  {
    id: 5,
    title: "Screen Time Passcode Ownership",
    desc: "Who knows the passcode to bypass your screen time restrictions?",
    options: [
      {
        text: "I do. I can enter it and override limits immediately.",
        points: 0,
        tip: "❌ Outsource Screentime Code: Write a randomized code on paper and hand it to a partner, or lock it in a physical delay-access locker."
      },
      {
        text: "I have it written down in a hidden file or note.",
        points: 5,
        tip: "⚠️ Eliminate Code Access: Keeping the bypass code accessible means you will grab it when willpower drops. Make it physically difficult."
      },
      {
        text: "A trusted friend/partner holds it, or it is locked in a delayed vault.",
        points: 15,
        tip: "✅ Perfect Passcode Friction: Bypassing limits is impossible without social accountability or a structured physical waiting period."
      }
    ]
  },
  {
    id: 6,
    title: "Mobile Browser Availability",
    desc: "Do you maintain fully open web browsers (Safari, Chrome) on your device?",
    options: [
      {
        text: "Yes, standard browsers are fully open and accessible.",
        points: 0,
        tip: "❌ Deactivate Mobile Browser: Disable Safari/Chrome entirely in restrictions. Shift all browser activities to stationary desktop machines."
      },
      {
        text: "Browsers are disabled entirely, or heavily restricted to whitelist-only.",
        points: 15,
        tip: "✅ Perfect Browser Friction: Disabling standard mobile browsers shuts down the primary portal for impulsive web grazing."
      }
    ]
  }
];

export default function FrictionArchitect() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const totalSteps = CATEGORIES.length;
  const currentCategory = CATEGORIES[currentIdx];

  const handleSelectOption = (points: number) => {
    const nextAnswers = [...answers];
    nextAnswers[currentIdx] = points;
    setAnswers(nextAnswers);

    if (currentIdx < totalSteps - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setAnswers([]);
    setShowResults(false);
  };

  // Math: max score = 15 * 6 = 90
  const maxScore = 90;
  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  const percentage = Math.round((totalScore / maxScore) * 100);

  // Profile
  let profile = {
    title: "",
    desc: "",
    ratingColor: "",
    badgeColor: "",
    habits: [] as { title: string; link: string }[]
  };

  if (percentage >= 80) {
    profile = {
      title: "Bulletproof Fortress",
      desc: "Your environmental friction is exceptionally high. Your setup successfully protects your attention and prefrontal cortex by placing critical delays and barriers before impulsive triggers. This makes it structurally difficult to fail.",
      ratingColor: "text-white-hot drop-shadow-[0_0_10px_rgba(255,218,106,0.3)]",
      badgeColor: "border-white-hot/30 text-white-hot bg-white-hot/5",
      habits: [
        { title: "The Cost of Frictionless Access", link: "/habits/the-cost-of-frictionless-access" },
        { title: "Clean Workspace Setup", link: "/habits/clean-workspace-setup" }
      ]
    };
  } else if (percentage >= 50) {
    profile = {
      title: "Vulnerable Shield",
      desc: "You have implemented basic blockers, but critical loopholes remain. Easy workarounds exist, meaning that during moments of high stress, fatigue, or late-night vulnerability, your prefrontal cortex will bypass these weak limits.",
      ratingColor: "text-ember-400 drop-shadow-[0_0_10px_rgba(255,140,68,0.3)]",
      badgeColor: "border-ember-500/30 text-ember-400 bg-ember-500/5",
      habits: [
        { title: "Friction-Based Phone Setup", link: "/habits/friction-based-phone-setup" }
      ]
    };
  } else {
    profile = {
      title: "Open Gateway",
      desc: "Your device environment has zero functional barriers. Compulsive triggers are accessible in less than 3 seconds. Relying entirely on sheer willpower in this friction-free layout makes long-term habit change highly difficult.",
      ratingColor: "text-red-500 drop-shadow-[0_0_10px_rgba(220,38,38,0.4)]",
      badgeColor: "border-red-500/30 text-red-400 bg-red-500/5",
      habits: [
        { title: "Friction-Based Phone Setup", link: "/habits/friction-based-phone-setup" }
      ]
    };
  }

  // Generate actionable roadmap checklist based on scores < 15
  const checklistItems: string[] = [];
  CATEGORIES.forEach((cat, idx) => {
    const score = answers[idx];
    if (score < 15) {
      // Find the option selected and pull its specific tip or provide the warning
      const matchedOpt = cat.options.find(opt => opt.points === score);
      if (matchedOpt) {
        checklistItems.push(matchedOpt.tip);
      }
    }
  });

  if (showResults) {
    return (
      <div className="bg-ink-900 border border-ink-700 p-8 md:p-12 relative overflow-hidden transition-all duration-500">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(255,107,26,0.03)_0%,transparent_60%)] pointer-events-none" />

        <div className="relative z-10 text-center max-w-[620px] mx-auto">
          <p className="font-cinzel text-[10px] tracking-[0.45em] text-text-muted uppercase mb-2">
            Architecture Audit Complete
          </p>

          <div className="my-8">
            <span className="font-cinzel text-xs uppercase tracking-widest text-text-muted block mb-2">
              Friction Index Score
            </span>
            <div className="flex justify-center items-baseline gap-2">
              <span className={`font-cinzel text-6xl md:text-7xl font-black tracking-tighter ${profile.ratingColor}`}>
                {percentage}%
              </span>
            </div>
            <div className={`mt-4 inline-block px-4 py-1.5 border text-xs uppercase tracking-widest font-cinzel font-bold ${profile.badgeColor}`}>
              {profile.title}
            </div>
          </div>

          <p className="text-sm md:text-base font-light text-text-muted leading-relaxed mb-10">
            {profile.desc}
          </p>

          {/* Action Checklist */}
          {checklistItems.length > 0 ? (
            <div className="bg-ink-950 border border-ink-800 p-6 text-left mb-10">
              <span className="font-cinzel text-[10px] uppercase tracking-wider text-ember-500 font-bold block mb-4">
                ENVIRONMENTAL HARDENING ROADMAP
              </span>
              <ul className="space-y-4 text-xs md:text-sm font-light text-text-primary list-none pl-0">
                {checklistItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 border-b border-ink-900 pb-3 last:border-0 last:pb-0">
                    <span className="text-ember-500 shrink-0 font-bold mt-0.5">•</span>
                    <span className="leading-relaxed text-text-primary font-spectral">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="bg-ink-950 border border-white-hot/20 p-6 text-center mb-10">
              <span className="font-cinzel text-xs text-white-hot uppercase tracking-wider block mb-2">
                🔒 Environment Bulletproofed
              </span>
              <p className="text-xs font-light text-text-muted">
                Your device has no major friction loopholes. Maintain these configurations to protect your baseline drive.
              </p>
            </div>
          )}

          {/* Resources & Guides Recommendations */}
          <div className="text-left space-y-6 mb-12">
            <h3 className="font-cinzel text-xs uppercase tracking-widest text-text-primary font-bold border-b border-ink-800 pb-2.5">
              Related Environmental Habits
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {profile.habits.map((h) => (
                <Link
                  key={h.link}
                  href={h.link}
                  className="bg-ink-950 border border-ink-800 p-5 hover:border-ember-500/50 hover:bg-ink-800 transition-all group no-underline block"
                >
                  <span className="text-[10px] font-cinzel text-ember-500 uppercase tracking-widest block mb-1">
                    Environment Habit
                  </span>
                  <span className="text-sm text-text-primary group-hover:text-ember-400 font-medium transition-colors">
                    {h.title}
                  </span>
                  <span className="block text-xs text-text-muted mt-2 font-cinzel uppercase tracking-wider">
                    Learn Protocol →
                  </span>
                </Link>
              ))}
              
              <Link
                href="/guides/severity-mode-guide"
                className="bg-ink-950 border border-ink-800 p-5 hover:border-ember-500/50 hover:bg-ink-800 transition-all group no-underline block"
              >
                <span className="text-[10px] font-cinzel text-ember-500 uppercase tracking-widest block mb-1">
                  Neurological Guide
                </span>
                <span className="text-sm text-text-primary group-hover:text-ember-400 font-medium transition-colors">
                  Severity Mode: The Science of Relocation & Lockout
                </span>
                <span className="block text-xs text-text-muted mt-2 font-cinzel uppercase tracking-wider">
                  Read Science →
                </span>
              </Link>
            </div>
          </div>

          {/* Sublimation App Promotion */}
          <div className="bg-ink-950 border border-ember-600/40 p-8 text-center relative overflow-hidden mb-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_120%,rgba(255,107,26,0.06)_0%,transparent_70%)] pointer-events-none" />
            <span className="font-cinzel text-[10px] tracking-[0.35em] text-ember-500 uppercase block mb-3">
              The Forge Integration
            </span>
            <h4 className="font-cinzel text-lg font-bold text-text-primary mb-3">
              Outsource the Lock-Gate to Forge
            </h4>
            <p className="text-xs font-light text-text-muted leading-relaxed mb-6 max-w-[450px] mx-auto">
              Designing friction is the first step. The Forge application acts as a sovereign physical lock-gate—requiring steps and movement to unlock, ensuring you stick to your baseline quarantine.
            </p>
            <Link
              href="https://apps.apple.com/us/app/forge-iron-mind-discipline/id6767904744"
              className="inline-flex items-center gap-2 px-6 py-3 bg-ember-500 text-ink-950 font-cinzel text-[10px] tracking-widest uppercase no-underline font-bold transition-all duration-300 hover:shadow-ember-500/30 hover:-translate-y-px"
            >
              DOWNLOAD FORGE APP
            </Link>
          </div>

          {/* Restart Button */}
          <button
            onClick={handleRestart}
            className="text-xs font-cinzel text-text-muted hover:text-ember-400 uppercase tracking-widest transition-colors"
          >
            Re-Audit Environment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-ink-900 border border-ink-700 p-8 md:p-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_0%_0%,rgba(255,107,26,0.03)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10">
        {/* Progress header */}
        <div className="flex justify-between items-center text-xs font-cinzel uppercase tracking-wider text-text-muted mb-4">
          <span className="text-ember-500 font-bold">
            Audit Check {currentIdx + 1} of {totalSteps}
          </span>
          <span>
            {Math.round(((currentIdx + 1) / totalSteps) * 100)}% Analyzed
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-ink-950 h-1 mb-8 overflow-hidden">
          <div
            className="bg-ember-500 h-full transition-all duration-300 ease-out"
            style={{ width: `${((currentIdx + 1) / totalSteps) * 100}%` }}
          />
        </div>

        {/* Question content */}
        <div className="mb-8 min-h-[120px]">
          <span className="font-cinzel text-[10px] tracking-widest text-text-dim uppercase block mb-1">
            Environment Matrix
          </span>
          <h2 className="font-cinzel text-xl font-bold text-text-primary mb-3">
            {currentCategory.title}
          </h2>
          <p className="text-sm font-light text-text-muted leading-relaxed">
            {currentCategory.desc}
          </p>
        </div>

        {/* Option choices */}
        <div className="space-y-3.5 mb-8">
          {currentCategory.options.map((opt, oIdx) => {
            const letter = ["A", "B", "C", "D"][oIdx];
            return (
              <button
                key={oIdx}
                onClick={() => handleSelectOption(opt.points)}
                className="w-full text-left bg-ink-950 border border-ink-800 p-5 rounded-none hover:border-ember-500/60 hover:bg-ink-800 transition-all text-sm font-light leading-relaxed flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <span className="font-cinzel font-bold text-ember-500 group-hover:text-ember-400">
                    {letter}.
                  </span>
                  <span className="text-text-primary group-hover:text-white-hot transition-colors">
                    {opt.text}
                  </span>
                </div>
                <span className="text-text-dim group-hover:text-ember-400 transition-colors ml-4 text-xs font-cinzel">
                  Configure →
                </span>
              </button>
            );
          })}
        </div>

        {/* Bottom controls */}
        <div className="flex justify-between items-center border-t border-ink-800 pt-6">
          <button
            onClick={handleBack}
            disabled={currentIdx === 0}
            className={`text-xs font-cinzel uppercase tracking-widest transition-colors ${
              currentIdx === 0
                ? "text-text-dim cursor-not-allowed"
                : "text-text-muted hover:text-ember-400"
            }`}
          >
            ← Previous Parameter
          </button>
          
          <span className="text-[10px] font-cinzel uppercase text-text-dim tracking-wider">
            Friction Architect Mode
          </span>
        </div>
      </div>
    </div>
  );
}
