import Link from "next/link";
import Footer from "@/components/Footer";
import SEOHeader from "@/components/SEOHeader";

export const metadata = {
  title: "Free Tools & Diagnostics — Forge",
  description: "Browse the Forge free diagnostic focus tools, auditing urge cost metrics and attention baselines.",
};

const TOOLS = [
  {
    title: "Urge Opportunity Cost Calculator",
    desc: "Calculate the exact lifetime hours and estimated financial potential lost in compulsive urge loops, and see what you reclaim in 90 days.",
    link: "/tools/urge-calculator",
    tag: "Time Auditer",
  },
  {
    title: "Dopamine Baseline Audit Quiz",
    desc: "Audit your stimulation receptors, calculate your dopamine baseline score, and receive personalized neuro-recovery guidelines.",
    link: "/tools/dopamine-audit",
    tag: "Dopamine Auditor",
  },
  {
    title: "Screen Friction Architect",
    desc: "Design a bulletproof focus environment. Audit your phone configurations, visual settings, and web access triggers to construct a high-friction setup.",
    link: "/tools/friction-architect",
    tag: "Friction Designer",
  },
  {
    title: "Brain Rewiring Timeline Estimator",
    desc: "Input your historical consumption habits to project your physiological recovery milestones, synaptic upregulation checkpoints, and DeltaFosB clearance timeline.",
    link: "/tools/rewiring-estimator",
    tag: "Neuroplasticity Tracker",
  },
];

export default function ToolsIndexPage() {
  return (
    <div className="bg-ink-950 min-h-screen text-text-primary selection:bg-ember-600 selection:text-white-hot flex flex-col font-spectral">
      <SEOHeader category="Resources" categoryLink="/resources" />

      <main className="flex-1 px-6 py-16 max-w-[900px] mx-auto w-full">
        {/* Intro */}
        <div className="mb-12">
          <p className="font-cinzel text-[10px] tracking-[0.4em] uppercase text-ember-600 mb-3">
            Operator Diagnostics
          </p>
          <h1 className="font-cinzel text-3xl md:text-4xl font-black tracking-tight text-text-primary mb-5">
            Free Interactive Tools
          </h1>
          <p className="text-base font-light text-text-muted leading-relaxed max-w-[580px]">
            Data-driven tools to audit your habits, measure distraction patterns, and quantify focus potential.
          </p>
        </div>

        {/* Tools List */}
        <div className="space-y-6">
          {TOOLS.map((tool) => (
            <Link
              key={tool.title}
              href={tool.link}
              className="bg-ink-900 border border-ink-700 p-8 hover:border-ember-600 hover:bg-ink-800 transition-all duration-300 group no-underline block"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-text-dim mb-3 uppercase font-cinzel tracking-wider">
                <span className="text-ember-500">{tool.tag}</span>
              </div>
              <h2 className="font-cinzel text-xl font-bold text-text-primary mb-3 group-hover:text-ember-400 transition-colors">
                {tool.title}
              </h2>
              <p className="text-sm font-light text-text-muted leading-relaxed mb-4">
                {tool.desc}
              </p>
              <span className="font-cinzel text-xs text-ember-500 group-hover:text-ember-400 font-bold uppercase tracking-widest flex items-center gap-1.5 mt-2">
                Launch Diagnostic Tool →
              </span>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
