import Footer from "@/components/Footer";
import SEOHeader from "@/components/SEOHeader";
import Link from "next/link";

export const metadata = {
  title: "The Recovery Arsenal & Blocker Directory — Forge",
  description: "Configure system-wide filters, read behavioral literature, and deploy accountability gates. A multi-layered recovery guide.",
};

const DIAGNOSTIC_TOOLS = [
  {
    title: "Urge Opportunity Cost",
    desc: "Calculate lifetime hours and estimated financial potential lost in compulsive urge loops, and see what you reclaim in 90 days.",
    link: "/tools/urge-calculator",
    cta: "Launch Calculator",
  },
  {
    title: "Dopamine Baseline Audit",
    desc: "Audit your digital habit loops, measure receptor downregulation, and receive personalized neuro-recovery guidelines.",
    link: "/tools/dopamine-audit",
    cta: "Start Audit Quiz",
  },
  {
    title: "Screen Friction Architect",
    desc: "Design a bulletproof focus environment. Audit your phone configurations, notifications, and web triggers.",
    link: "/tools/friction-architect",
    cta: "Plan Friction Settings",
  },
  {
    title: "Brain Rewiring Estimator",
    desc: "Project your physiological recovery milestones, receptor upregulation checkpoints, and DeltaFosB clearance timeline.",
    link: "/tools/rewiring-estimator",
    cta: "Project Timeline",
  },
];

const CORE_TRIAD = [
  {
    name: "NextDNS",
    type: "DNS Filter",
    rating: "10/10 - Absolute Network Barrier",
    recommendedSetup: "Install at the router and device level, enable safe search, and lock the admin profile.",
    link: "https://nextdns.io",
    summary: "Prevents access to adult domains before they reach your device's browser by acting as a network-level sinkhole.",
    details: "NextDNS acts as a secure firewall that intercepts queries to adult websites and blocks them at the server level. By configuring it on your home router, you block adult content on all connected devices, including gaming consoles and smart TVs. This eliminates the vulnerability of simply opening a private browser tab.",
  },
  {
    name: "Cold Turkey Blocker",
    type: "OS Lockout",
    rating: "9.5/10 - Un-bypassable App Block",
    recommendedSetup: "Set up a strict blocker schedule, disable extension removals, and use random text password lockouts.",
    link: "https://getcoldturkey.com",
    summary: "The toughest system blocker for Windows and macOS. Prevents bypasses, program removals, or registry overrides.",
    details: "Unlike native browser extensions that can be disabled in two clicks, Cold Turkey locks itself into the operating system's files. Once active, it cannot be uninstalled, terminated via Task Manager, or bypassed by changing system clocks. It forces you to wait out the locked block period, protecting you during critical windows.",
  },
  {
    name: "Your Brain on Porn",
    type: "Literature",
    rating: "9/10 - Cognitive Restructuring",
    recommendedSetup: "Read one chapter every morning before accessing digital screens to reinforce recovery goals.",
    link: "https://www.yourbrainonporn.com",
    summary: "Gary Wilson's foundational research explaining how hyper-stimulation downregulates dopamine pathways.",
    details: "This book is the scientific handbook of recovery. It breaks down the clinical trials and neurobiology of digital desensitization. Understanding the physiological mechanics of rebooting—like D2 receptor downregulation and DeltaFosB accumulation—shifts your mindset from emotional guilt to objective, scientific recovery.",
  },
];

const SOFTWARE_BLOCKERS = [
  {
    name: "Opal App (iOS & Android)",
    purpose: "Mobile App & Screen Time Lockout",
    frictionLevel: "High Friction (Local VPN Gate)",
    description: "Opal uses local VPN configurations to monitor and restrict app access on your phone. Its 'Strict Mode' prevents you from cancelling a block session once it has started, forcing you to remain offline during your scheduled focus blocks.",
    setupTip: "Set up automatic schedules for high-risk hours (e.g., 9:00 PM to 6:00 AM) and delegate the override passcode to a partner.",
    link: "https://opal.so",
  },
  {
    name: "Freedom.to",
    purpose: "Cross-Platform Synchronization",
    frictionLevel: "Moderate to High Friction",
    description: "Freedom allows you to block websites and apps across all your devices simultaneously (Mac, Windows, iOS, Android, and Chrome). You can create custom block lists and schedules that sync automatically, ensuring your entire digital space is protected.",
    setupTip: "Use the 'Locked Mode' to prevent editing lists or disabling schedules while a session is currently running.",
    link: "https://freedom.to",
  },
  {
    name: "Pi-hole",
    purpose: "Network-Wide Hardware Filter",
    frictionLevel: "Absolute Barrier (Requires Raspberry Pi)",
    description: "A Pi-hole is a physical DNS sinkhole device that connects to your home network router. It blocks all adult content and trackers at the hardware level, ensuring that no device connected to your network can load restricted domains.",
    setupTip: "Use pre-configured blocklists (such as StevenBlack lists) and change the router admin password to a randomized string held by a trusted contact.",
    link: "https://pi-hole.net",
  },
];

const COGNITIVE_BOOKS = [
  {
    title: "Allen Carr's Easy Way to Quit Porn",
    author: "Allen Carr & John Dicey",
    focus: "Cognitive Restructuring & Urge Elimination",
    takeaway: "Traditional willpower fails because it leaves you feeling deprived. Carr's method focuses on dismantling the illusion of pleasure in compulsion. Once the brainwashing is undone, you feel free rather than restricted.",
    readingRoutine: "Read slowly without forcing yourself to quit immediately. Let the arguments settle in your subconscious.",
    link: "https://www.allencarr.com",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    focus: "Environment Design & Behavior Architecture",
    takeaway: "You do not rise to the level of your goals; you fall to the level of your systems. Clear explains how to manipulate cues, friction, and rewards to automate positive habits and make bad behaviors invisible.",
    readingRoutine: "Use the habit stacking formulas (e.g., 'After I check in on Forge, I will write my daily focus tasks').",
    link: "https://jamesclear.com/atomic-habits",
  },
  {
    title: "Dopamine Nation",
    author: "Dr. Anna Lembke",
    focus: "Neurobiology & Addiction Balance",
    takeaway: "The brain processes pleasure and pain in the same regions. Hyper-stimulation tips the balance toward pleasure, causing a compensatory rebound toward pain (withdrawal/cravings). Restoring balance requires a prolonged baseline reset.",
    readingRoutine: "Read to understand the physical discomfort of early withdrawal as a symptom of receptor recovery.",
    link: "https://www.annalembke.com",
  },
];

const COMMUNITY_NODES = [
  {
    name: "Emergency Panic Button",
    useCase: "Acute Trigger Deflection",
    impact: "Somatic State Reset",
    desc: "A web utility that instantly loads motivational quotes, recovery steps, and panic prompts when you are on the verge of a slip. It acts as an immediate cognitive pattern interrupter.",
    link: "https://emergency.nofap.com",
  },
  {
    name: "NoFap Community Forum",
    useCase: "Peer Accountability & Support",
    impact: "Identity Reinforcement",
    desc: "An anonymous online discussion forum with millions of members sharing their reboot timelines, recovery symptoms, and lifestyle upgrades. Ideal for breaking the isolation of behavioral recovery.",
    link: "https://forum.nofap.com",
  },
  {
    name: "Reboot Nation",
    useCase: "Educational Video Guides",
    impact: "Biological Education",
    desc: "A platform offering resources, video series, and forum support focused on reversing pornography-induced desensitization (PIED) and restoring real-world marital and relationship intimacy.",
    link: "https://www.rebootnation.org",
  },
];

export default function ResourcesPage() {
  return (
    <div className="bg-ink-950 min-h-screen text-text-primary selection:bg-ember-600 selection:text-white-hot flex flex-col font-spectral">
      <SEOHeader />

      <main className="flex-1 px-6 py-20 max-w-[1000px] mx-auto w-full">
        {/* Page Title */}
        <div className="text-center mb-20">
          <p className="font-cinzel text-xs tracking-[0.4em] uppercase text-ember-600 mb-4">
            Defensive Perimeter
          </p>
          <h1 className="font-cinzel text-4xl md:text-6xl font-black tracking-tight text-text-primary mb-6">
            The Recovery Arsenal
          </h1>
          <p className="text-lg md:text-xl font-light text-text-muted leading-relaxed max-w-[680px] mx-auto">
            Willpower is fragile. A structured digital environment is your perimeter shield. Below is the curated catalog of software blockers, clinical literature, and crisis nodes to automate your boundaries.
          </p>
        </div>

        {/* 0. Diagnostic Tools Section */}
        <section className="mb-24">
          <h2 className="font-cinzel text-xs tracking-[0.3em] uppercase text-ember-500 mb-8 border-b border-ink-800 pb-3 font-bold">
            Operator Diagnostics: Interactive Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DIAGNOSTIC_TOOLS.map((tool) => (
              <div
                key={tool.title}
                className="bg-ink-900 border border-ink-700 p-8 hover:border-ember-500 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-cinzel text-xl font-bold text-text-primary mb-3 group-hover:text-ember-400 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-sm font-light text-text-muted leading-relaxed mb-6">
                    {tool.desc}
                  </p>
                </div>
                <Link
                  href={tool.link}
                  className="font-cinzel text-xs text-ember-500 hover:text-ember-400 no-underline font-bold uppercase tracking-widest flex items-center gap-1.5"
                >
                  {tool.cta} →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* 1. Core Triad Section (Featured Tier) */}
        <section className="mb-24">
          <h2 className="font-cinzel text-xs tracking-[0.3em] uppercase text-ember-500 mb-8 border-b border-ink-800 pb-3 font-bold">
            The Core Triad: Bedrock Security
          </h2>
          <div className="space-y-8">
            {CORE_TRIAD.map((triad) => (
              <div
                key={triad.name}
                className="bg-ink-900 border border-ink-700 p-8 md:p-10 transition-all duration-300 hover:border-ember-600/50 hover:bg-ink-800/80 group flex flex-col md:flex-row gap-8 justify-between items-start"
              >
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] uppercase tracking-widest font-cinzel px-2.5 py-0.5 bg-ember-950/40 border border-ember-600/30 text-ember-400 font-bold">
                      {triad.type}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider font-cinzel text-text-dim">
                      {triad.rating}
                    </span>
                  </div>
                  <h3 className="font-cinzel text-2xl font-bold text-text-primary group-hover:text-ember-400 transition-colors">
                    {triad.name}
                  </h3>
                  <p className="text-text-muted text-base font-light leading-relaxed">
                    {triad.summary}
                  </p>
                  <p className="text-text-dim text-sm font-light leading-relaxed">
                    {triad.details}
                  </p>
                  <div className="pt-2">
                    <p className="text-xs font-light text-text-dim">
                      <strong className="text-text-primary uppercase tracking-wide font-cinzel text-[10px]">Setup Blueprint:</strong> {triad.recommendedSetup}
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-auto self-stretch flex items-end md:items-center">
                  <a
                    href={triad.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto text-center font-cinzel text-xs text-ember-500 hover:text-ember-400 border border-ember-600/30 hover:border-ember-500 py-3 px-6 bg-ink-950/60 transition-all no-underline font-bold tracking-widest uppercase hover:-translate-y-0.5"
                  >
                    Get Resource →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Layered Software Catalog */}
        <section className="mb-24">
          <h2 className="font-cinzel text-xs tracking-[0.3em] uppercase text-ember-500 mb-8 border-b border-ink-800 pb-3 font-bold">
            Layer 1: Hardcore Blocker Settings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SOFTWARE_BLOCKERS.map((blocker) => (
              <a
                key={blocker.name}
                href={blocker.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-ink-900 border border-ink-700 p-8 transition-all duration-300 hover:border-ember-600 hover:bg-ink-800 hover:-translate-y-0.5 group no-underline flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-[9px] uppercase tracking-wider font-cinzel text-text-dim">
                    <span>{blocker.purpose}</span>
                  </div>
                  <h3 className="font-cinzel text-lg font-bold text-text-primary group-hover:text-ember-400 transition-colors">
                    {blocker.name}
                  </h3>
                  <p className="text-xs font-light text-text-muted leading-relaxed">
                    {blocker.description}
                  </p>
                  <p className="text-[10px] text-text-dim font-light italic">
                    <strong className="text-text-primary uppercase tracking-wide font-cinzel text-[8px] not-italic">Setup:</strong> {blocker.setupTip}
                  </p>
                </div>
                <span className="font-cinzel text-xs text-text-dim group-hover:text-text-primary transition-colors flex items-center gap-1.5 uppercase tracking-wider mt-6 pt-4 border-t border-ink-800">
                  Configure Settings →
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* 3. Layered Cognitive Literature */}
        <section className="mb-24">
          <h2 className="font-cinzel text-xs tracking-[0.3em] uppercase text-ember-500 mb-8 border-b border-ink-800 pb-3 font-bold">
            Layer 2: Cognitive Restructuring (Literature)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COGNITIVE_BOOKS.map((book) => (
              <a
                key={book.title}
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-ink-900 border border-ink-700 p-8 transition-all duration-300 hover:border-ember-600 hover:bg-ink-800 hover:-translate-y-0.5 group no-underline flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-[9px] uppercase tracking-wider font-cinzel text-text-dim">
                    <span>{book.focus}</span>
                  </div>
                  <h3 className="font-cinzel text-lg font-bold text-text-primary group-hover:text-ember-400 transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-[10px] italic text-text-dim font-light">
                    By {book.author}
                  </p>
                  <p className="text-xs font-light text-text-muted leading-relaxed">
                    {book.takeaway}
                  </p>
                  <p className="text-[10px] text-text-dim font-light italic">
                    <strong className="text-text-primary uppercase tracking-wide font-cinzel text-[8px] not-italic">Routine:</strong> {book.readingRoutine}
                  </p>
                </div>
                <span className="font-cinzel text-xs text-text-dim group-hover:text-text-primary transition-colors flex items-center gap-1.5 uppercase tracking-wider mt-6 pt-4 border-t border-ink-800">
                  Get Literature →
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* 4. Support & Community Nodes */}
        <section className="mb-24">
          <h2 className="font-cinzel text-xs tracking-[0.3em] uppercase text-ember-500 mb-8 border-b border-ink-800 pb-3 font-bold">
            Layer 3: Support & Accountability Nodes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMMUNITY_NODES.map((node) => (
              <a
                key={node.name}
                href={node.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-ink-900 border border-ink-700 p-8 transition-all duration-300 hover:border-ember-600 hover:bg-ink-800 hover:-translate-y-0.5 group no-underline flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-[9px] uppercase tracking-wider font-cinzel text-text-dim">
                    <span>{node.useCase}</span>
                    <span className="text-ember-500 font-bold">{node.impact}</span>
                  </div>
                  <h3 className="font-cinzel text-lg font-bold text-text-primary group-hover:text-ember-400 transition-colors">
                    {node.name}
                  </h3>
                  <p className="text-xs font-light text-text-muted leading-relaxed">
                    {node.desc}
                  </p>
                </div>
                <span className="font-cinzel text-xs text-text-dim group-hover:text-text-primary transition-colors flex items-center gap-1.5 uppercase tracking-wider mt-6 pt-4 border-t border-ink-800">
                  Access Node →
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* 5. Integration Guide (FAQ/Workflow) */}
        <section className="bg-ink-900 border border-ink-700 p-8 md:p-12 mb-16">
          <h2 className="font-cinzel text-2xl font-bold text-text-primary mb-6 tracking-wide text-center">
            How to Layer Your Defensive Perimeter
          </h2>
          <p className="text-text-muted text-base font-light leading-relaxed mb-8 text-center max-w-[620px] mx-auto">
            Blockers alone are not a solution—they are a temporary boundary. Use this three-step blueprint to combine external friction with local behavior design:
          </p>
          <div className="space-y-8">
            <div className="flex gap-4">
              <span className="font-cinzel text-3xl font-bold text-ember-600 w-8">01</span>
              <div>
                <h3 className="font-cinzel text-base font-bold text-text-primary mb-2 uppercase tracking-wide">
                  Automate Digital Friction (Days 1–7)
                </h3>
                <p className="text-text-muted text-sm font-light leading-relaxed">
                  Before white-knuckling through willpower, configure NextDNS and Cold Turkey on your router and computers. Hand your screen restrictions passcodes to a trusted contact. Eliminate immediate browser access completely to protect yourself from impulsive decisions.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="font-cinzel text-3xl font-bold text-ember-600 w-8">02</span>
              <div>
                <h3 className="font-cinzel text-base font-bold text-text-primary mb-2 uppercase tracking-wide">
                  Re-sensitize Your Biology (Days 8–30)
                </h3>
                <p className="text-text-muted text-sm font-light leading-relaxed">
                  Start reading *Your Brain on Porn* and *Dopamine Nation* to build a biological understanding of cravings. Deploy cold showers and cyclic breathing whenever surges hit to discharge baseline tension.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="font-cinzel text-3xl font-bold text-ember-600 w-8">03</span>
              <div>
                <h3 className="font-cinzel text-base font-bold text-text-primary mb-2 uppercase tracking-wide">
                  Consolidate Identity (Days 31–90)
                </h3>
                <p className="text-text-muted text-sm font-light leading-relaxed">
                  Use the Forge local-first app to log checks daily, reinforcing your new identity as an Operator. Establish a weekly check-in with a shield partner to review goals and maintain accountability in real-world spaces.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
