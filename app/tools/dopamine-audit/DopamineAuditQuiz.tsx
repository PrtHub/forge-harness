"use client";

import { useState } from "react";
import Link from "next/link";

interface Question {
  id: number;
  text: string;
  subText: string;
  options: {
    text: string;
    points: number;
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Morning Stimulation Index",
    subText: "When you wake up, how long before you check your phone, social media, or other digital feeds?",
    options: [
      { text: "Over 60 minutes. I prioritize sunlight, movement, or hydration first.", points: 10 },
      { text: "30 to 60 minutes. I usually get dressed or have breakfast first.", points: 7 },
      { text: "5 to 30 minutes. I check it while lying in bed or brushing my teeth.", points: 3 },
      { text: "Within 5 minutes. It is the first action I take.", points: 0 },
    ],
  },
  {
    id: 2,
    text: "Digital Multi-tasking Density",
    subText: "How often do you watch videos, play games, or scroll while eating, walking, or performing daily chores?",
    options: [
      { text: "Rarely or never. I prefer to eat in silence, walk with my thoughts, or listen to the environment.", points: 10 },
      { text: "Occasionally. Sometimes I listen to podcasts or music during routine chores.", points: 7 },
      { text: "Frequently. I almost always need a YouTube video, stream, or podcast to do anything.", points: 3 },
      { text: "Constantly. I run multiple screens/audio feeds simultaneously and feel anxious in silence.", points: 0 },
    ],
  },
  {
    id: 3,
    text: "Boredom and Solitude Tolerance",
    subText: "If forced to stand in a queue or wait for 10 minutes without access to a device, what is your internal state?",
    options: [
      { text: "Calm and observant. I reflect, breathe, or observe the surroundings easily.", points: 10 },
      { text: "Slightly restless. I might pat my pockets but can manage without issue.", points: 7 },
      { text: "Anxious or irritable. I feel a strong compulsion to check anything or fidget.", points: 3 },
      { text: "Unbearable. I will find any distraction, even reading random signs, to avoid empty space.", points: 0 },
    ],
  },
  {
    id: 4,
    text: "Deep Focus Endurance",
    subText: "When working on a difficult, non-novel cognitive task (e.g., studying, coding, writing), how long can you work before checking a tab, phone, or feed?",
    options: [
      { text: "60+ minutes without distraction.", points: 10 },
      { text: "30 to 60 minutes.", points: 7 },
      { text: "10 to 30 minutes.", points: 3 },
      { text: "Under 10 minutes. I constantly micro-tab-switch or pick up my phone.", points: 0 },
    ],
  },
  {
    id: 5,
    text: "High-Stimulus Entertainment Habits",
    subText: "How frequently do you engage in high-dopamine adult entertainment (pornography, erotic content, or dating app scrolling)?",
    options: [
      { text: "Never or clean (abstinent). I redirect this energy entirely.", points: 10 },
      { text: "Infrequently (1-2 times a month).", points: 7 },
      { text: "Regularly (2-4 times a week).", points: 3 },
      { text: "Compulsively (Daily or multiple times a day).", points: 0 },
    ],
  },
  {
    id: 6,
    text: "Task Procrastination Frequency",
    subText: "When faced with a challenging goal, how often do you delay it by seeking 'productive distraction' (e.g., organizing files, checking emails, browsing research)?",
    options: [
      { text: "Seldom. I tackle the highest priority, hardest task first.", points: 10 },
      { text: "Sometimes. I drift but catch myself and redirect back to the primary challenge.", points: 7 },
      { text: "Frequently. I spend hours on trivial tasks to avoid the primary creative block.", points: 3 },
      { text: "Almost always. I get paralyzed by the effort and end up in consumption loops.", points: 0 },
    ],
  },
  {
    id: 7,
    text: "Afternoon Energy and Drive",
    subText: "Do you experience a significant motivation crash or intense 'brain fog' in the afternoon?",
    options: [
      { text: "No. My energy is stable, and my focus remains sharp throughout the day.", points: 10 },
      { text: "Mildly. A temporary dip, but I recover quickly with light movement or water.", points: 7 },
      { text: "Frequently. I feel depleted and rely on heavy caffeine, sugar, or quick feeds to push through.", points: 3 },
      { text: "Chronically. Severe brain fog, low drive, and total inability to perform cognitive work.", points: 0 },
    ],
  },
  {
    id: 8,
    text: "Compulsive Notification & Feeds Checking",
    subText: "How often do you check email, stock charts, social apps, or analytics without a specific reason or notification?",
    options: [
      { text: "Structured. I check them at designated times (twice a day) or keep notifications off.", points: 10 },
      { text: "Moderately. A few times during work breaks.", points: 7 },
      { text: "Frequently. Dozens of times a day, often unconsciously unlocking my phone.", points: 3 },
      { text: "Constantly. It is an automatic muscular tick; I check feeds every few minutes.", points: 0 },
    ],
  },
  {
    id: 9,
    text: "Sleep Hygiene and Screentime",
    subText: "What is your device usage pattern in the 60 minutes before going to sleep?",
    options: [
      { text: "Strictly device-free. I read physical books, journal, or practice breathwork in low light.", points: 10 },
      { text: "Light usage. I set alarms and put the phone on do-not-disturb away from bed.", points: 7 },
      { text: "In bed usage. I scroll or text in bed before shutting my eyes.", points: 3 },
      { text: "High stimulation. I watch videos or scroll feeds until I fall asleep with the screen on.", points: 0 },
    ],
  },
  {
    id: 10,
    text: "Delayed Gratification Orientation",
    subText: "When you achieve a goal or finish a hard work block, how do you celebrate or recharge?",
    options: [
      { text: "Active rest. I walk, sleep, exercise, or have a conversation without high digital input.", points: 10 },
      { text: "Moderate treat. A good meal, a short call, or reading.", points: 7 },
      { text: "Digital reward. I jump straight into video games, social scrolling, or video streaming.", points: 3 },
      { text: "Binge trigger. The completion of work triggers an immediate binge of high-stimulus media.", points: 0 },
    ],
  },
];

export default function DopamineAuditQuiz() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const totalQuestions = QUESTIONS.length;
  const currentQuestion = QUESTIONS[currentIdx];

  const handleSelectOption = (points: number) => {
    const nextAnswers = [...answers];
    nextAnswers[currentIdx] = points;
    setAnswers(nextAnswers);

    if (currentIdx < totalQuestions - 1) {
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

  // Math calculations
  const totalScore = answers.reduce((sum, score) => sum + score, 0);

  // Result profiling
  let profiling = {
    title: "",
    desc: "",
    ratingColor: "",
    badgeColor: "",
    protocol: "",
    guides: [] as { title: string; link: string }[],
    habits: [] as { title: string; link: string }[],
  };

  if (totalScore >= 80) {
    profiling = {
      title: "Resilient Baseline",
      desc: "Your dopamine receptors maintain high sensitivity. You exhibit robust executive function, sharp cognitive control, and strong delay-gratification structures. Your risk of falling into impulsive urge loops is low, and your nervous system responds well to deep, slow focus.",
      ratingColor: "text-white-hot drop-shadow-[0_0_10px_rgba(255,218,106,0.3)]",
      badgeColor: "border-white-hot/30 text-white-hot bg-white-hot/5",
      protocol: "Optimization & High-Performance Output. Keep your morning offline protocols and scale your deep creative work.",
      guides: [
        { title: "Prefrontal Gym & Executive Control", link: "/guides/prefrontal-gym-executive" },
        { title: "Identity-Based Habits for Operators", link: "/guides/identity-based-habits-operator" }
      ],
      habits: [
        { title: "Compound Discipline & Its Impact", link: "/habits/compound-discipline-impact" }
      ]
    };
  } else if (totalScore >= 50) {
    profiling = {
      title: "Desensitized Baseline",
      desc: "You are experiencing moderate dopamine fatigue and receptor downregulation. Frequent ambient notifications, digital multitasking, and recurring minor urge loops are thinning your focus span. You can still muster high focus, but it requires significant mental friction and effort.",
      ratingColor: "text-ember-400 drop-shadow-[0_0_10px_rgba(255,140,68,0.3)]",
      badgeColor: "border-ember-500/30 text-ember-400 bg-ember-500/5",
      protocol: "Environmental Friction & Reset. Standardize structured workspaces, schedule tech-free breaks, and implement a digital quench to restore natural drive.",
      guides: [
        { title: "The Dopamine Detox Protocol", link: "/guides/dopamine-detox-protocol" }
      ],
      habits: [
        { title: "Friction-Based Phone Setup", link: "/habits/friction-based-phone-setup" },
        { title: "Riding the Craving Wave (Urge Surfing)", link: "/habits/riding-the-craving-wave" }
      ]
    };
  } else {
    profiling = {
      title: "Depleted Baseline",
      desc: "Your dopamine receptors are severely downregulated due to hyper-stimulation loops. Chronic brain fog, short attention loops, afternoon fatigue, and a constant craving for instant reward cycles dominate. In this state, cognitive willpower alone is highly likely to fail.",
      ratingColor: "text-red-500 drop-shadow-[0_0_10px_rgba(220,38,38,0.4)]",
      badgeColor: "border-red-500/30 text-red-400 bg-red-500/5",
      protocol: "Immediate Behavioral Intervention. Block instant cues. Shift from willpower to environmental lockout tools. Initiate a hard physical reset protocol immediately.",
      guides: [
        { title: "How to Quit Porn: Redirection Protocol", link: "/guides/how-to-quit-porn" },
        { title: "Severity Mode: The Science of Relocation", link: "/guides/severity-mode-guide" }
      ],
      habits: [
        { title: "The Quench Breathing Method", link: "/habits/the-quench-breathing-method" },
        { title: "Cold Shower Shock Protocol", link: "/habits/cold-shower-shock" }
      ]
    };
  }

  if (showResults) {
    return (
      <div className="bg-ink-900 border border-ink-700 p-8 md:p-12 relative overflow-hidden transition-all duration-500">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(255,107,26,0.03)_0%,transparent_60%)] pointer-events-none" />

        <div className="relative z-10 text-center max-w-[620px] mx-auto">
          <p className="font-cinzel text-[10px] tracking-[0.45em] text-text-muted uppercase mb-2">
            Diagnostic Complete
          </p>

          <div className="my-8">
            <span className="font-cinzel text-xs uppercase tracking-widest text-text-muted block mb-2">
              Dopamine Baseline Score
            </span>
            <div className="flex justify-center items-baseline gap-2">
              <span className={`font-cinzel text-6xl md:text-7xl font-black tracking-tighter ${profiling.ratingColor}`}>
                {totalScore}
              </span>
              <span className="font-cinzel text-xl text-text-dim">/ 100</span>
            </div>
            <div className={`mt-4 inline-block px-4 py-1.5 border text-xs uppercase tracking-widest font-cinzel font-bold ${profiling.badgeColor}`}>
              {profiling.title}
            </div>
          </div>

          <p className="text-sm md:text-base font-light text-text-muted leading-relaxed mb-10">
            {profiling.desc}
          </p>

          {/* Action Protocol */}
          <div className="bg-ink-950 border border-ink-800 p-6 text-left mb-10">
            <span className="font-cinzel text-[10px] uppercase tracking-wider text-ember-500 font-bold block mb-2">
              RECOMMENDED PROTOCOL
            </span>
            <p className="text-sm font-light text-text-primary leading-relaxed">
              {profiling.protocol}
            </p>
          </div>

          {/* Resources & Guides Recommendations */}
          <div className="text-left space-y-6 mb-12">
            <h3 className="font-cinzel text-xs uppercase tracking-widest text-text-primary font-bold border-b border-ink-800 pb-2.5">
              Personalized Recovery Materials
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {profiling.guides.map((g) => (
                <Link
                  key={g.link}
                  href={g.link}
                  className="bg-ink-950 border border-ink-800 p-5 hover:border-ember-500/50 hover:bg-ink-800 transition-all group no-underline block"
                >
                  <span className="text-[10px] font-cinzel text-ember-500 uppercase tracking-widest block mb-1">
                    Guide Article
                  </span>
                  <span className="text-sm text-text-primary group-hover:text-ember-400 font-medium transition-colors">
                    {g.title}
                  </span>
                  <span className="block text-xs text-text-muted mt-2 font-cinzel uppercase tracking-wider">
                    Read Guide →
                  </span>
                </Link>
              ))}

              {profiling.habits.map((h) => (
                <Link
                  key={h.link}
                  href={h.link}
                  className="bg-ink-950 border border-ink-800 p-5 hover:border-ember-500/50 hover:bg-ink-800 transition-all group no-underline block"
                >
                  <span className="text-[10px] font-cinzel text-amber-500 uppercase tracking-widest block mb-1">
                    Actionable Habit
                  </span>
                  <span className="text-sm text-text-primary group-hover:text-ember-400 font-medium transition-colors">
                    {h.title}
                  </span>
                  <span className="block text-xs text-text-muted mt-2 font-cinzel uppercase tracking-wider">
                    Learn Practice →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Sublimation App Promotion */}
          <div className="bg-ink-950 border border-ember-600/40 p-8 text-center relative overflow-hidden mb-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_120%,rgba(255,107,26,0.06)_0%,transparent_70%)] pointer-events-none" />
            <span className="font-cinzel text-[10px] tracking-[0.35em] text-ember-500 uppercase block mb-3">
              The Forge Integration
            </span>
            <h4 className="font-cinzel text-lg font-bold text-text-primary mb-3">
              Upregulate Receptors via Sublimation
            </h4>
            <p className="text-xs font-light text-text-muted leading-relaxed mb-6 max-w-[450px] mx-auto">
              Willpower degrades, but structured physical locks hold strong. Use Forge to automatically redirect focus loops into physical discipline and biometric accountability.
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
            Restart Diagnostic Audit
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
            Question {currentIdx + 1} of {totalQuestions}
          </span>
          <span>
            {Math.round(((currentIdx + 1) / totalQuestions) * 100)}% Complete
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-ink-950 h-1 mb-8 overflow-hidden">
          <div
            className="bg-ember-500 h-full transition-all duration-300 ease-out"
            style={{ width: `${((currentIdx + 1) / totalQuestions) * 100}%` }}
          />
        </div>

        {/* Question content */}
        <div className="mb-8 min-h-[120px]">
          <span className="font-cinzel text-[10px] tracking-widest text-text-dim uppercase block mb-1">
            Section {currentIdx + 1}
          </span>
          <h2 className="font-cinzel text-xl font-bold text-text-primary mb-3">
            {currentQuestion.text}
          </h2>
          <p className="text-sm font-light text-text-muted leading-relaxed">
            {currentQuestion.subText}
          </p>
        </div>

        {/* Option choices */}
        <div className="space-y-3.5 mb-8">
          {currentQuestion.options.map((opt, oIdx) => {
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
                  Select →
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
            ← Previous Question
          </button>
          
          <span className="text-[10px] font-cinzel uppercase text-text-dim tracking-wider">
            Operator Audit Mode
          </span>
        </div>
      </div>
    </div>
  );
}
