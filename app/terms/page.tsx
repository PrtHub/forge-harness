import Link from "next/link";

export const metadata = {
  title: "Terms of Service — Forge",
  description: "Terms of service and operator license agreements for Forge. Reclaim your discipline under the Harness Protocol.",
};

export default function TermsPage() {
  return (
    <div className="bg-ink-950 min-h-screen text-text-primary selection:bg-ember-600 selection:text-white-hot flex flex-col font-spectral">
      {/* Premium Header */}
      <header className="border-b border-ink-800 px-6 md:px-12 py-6 bg-ink-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-[900px] mx-auto flex justify-between items-center">
          <Link href="/" className="font-cinzel font-bold text-xl tracking-[0.18em] text-ember-500 no-underline hover:text-ember-400 transition-colors duration-300">
            FORGE
          </Link>
          <Link href="/" className="font-cinzel text-xs tracking-[0.15em] text-text-muted hover:text-ember-300 uppercase transition-colors duration-300 no-underline">
            ← Back to Anvil
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 py-20 max-w-[720px] mx-auto w-full leading-relaxed">
        <p className="font-cinzel text-[10px] tracking-[0.35em] uppercase text-ember-600 mb-4">
          The Harness Protocol
        </p>
        <h1 className="font-cinzel text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-12">
          Terms of Service
        </h1>

        <div className="space-y-10 text-text-muted font-light text-[17px]">
          <p className="text-xl italic text-text-primary font-normal leading-relaxed border-l-2 border-ember-500 pl-5 mb-10">
            "You are not a patient being managed. You are an operator working on something hard. Forge is your tool, but the discipline is yours to prove."
          </p>

          <section className="space-y-4">
            <h2 className="font-cinzel text-lg font-semibold text-text-primary tracking-wider uppercase">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing, initializing onboarding, or sealing the pledge inside the Forge application (the "Service"), you agree to be bound by these Terms of Service. If you do not accept these conditions, do not download or use the application.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-cinzel text-lg font-semibold text-text-primary tracking-wider uppercase">
              2. Operator Responsibility
            </h2>
            <p>
              The Forge application is built as an interactive habit-redirection tracking framework designed for personal discipline optimization. Forge is not a medical provider, does not offer clinical therapy, and does not treat psychiatric addictions. Use the Crucible protocols (such as physical exercises and breathing rituals) safely and within your physical capacities.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-cinzel text-lg font-semibold text-text-primary tracking-wider uppercase">
              3. Local-First License & Sandbox Security
            </h2>
            <p>
              Forge grants you a personal, revocable, non-exclusive, non-transferable license to execute the client software on your personal mobile devices. 
            </p>
            <p>
              Because Forge operates with a strictly **local-only privacy model**, we maintain no cloud synchronization. You accept sole responsibility for preserving your device backups. We carry no liability for data loss resulting from application deletion, device fracture, or operating system resets.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-cinzel text-lg font-semibold text-text-primary tracking-wider uppercase">
              4. Commitments & Subscription Terms
            </h2>
            <p>
              Access to core training tabs, the Oracle intelligence engine, and active Crucible protocols is restricted to active Operators subscribing to our 3-tier commitment plans:
            </p>
            <ul className="list-disc pl-6 space-y-2.5">
              <li>
                <strong className="text-text-primary font-normal">Annual Mastery</strong>: $47.99/year (includes a 3-Day Challenge trial, equivalent to only $4.00/mo).
              </li>
              <li>
                <strong className="text-text-primary font-normal">90-Day Reset</strong>: $17.99 per 3 months (equivalent to only $6.00/mo).
              </li>
              <li>
                <strong className="text-text-primary font-normal">Monthly Tactical</strong>: $7.99/month, cancel anytime.
              </li>
            </ul>
            <p>
              All purchases, billing, trials, and cancellations are handled securely through Apple App Store Connect and Google Play billing mechanisms. Subscriptions auto-renew unless cancelled at least 24 hours prior to the close of the current billing cycle.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-cinzel text-lg font-semibold text-text-primary tracking-wider uppercase">
              5. Intellectual Property
            </h2>
            <p>
              All application layouts, breathing designs, original SVG blade silhouettes (such as Norse Seax, Roman Gladius, Katana, etc.), custom vector interfaces, tactile sound patterns, brand marks, and copywriting are the exclusive property of the Harness Protocol. You may not extract or re-engineer code or design assets.
            </p>
          </section>

          <section className="space-y-4 border-t border-ink-700 pt-8 mt-12">
            <p className="text-xs text-text-dim uppercase tracking-wider font-cinzel">
              Last Updated: May 2026
            </p>
            <p className="text-xs text-text-dim italic">
              These terms are governed by the law of the operator's jurisdiction. Forge is a registered trade asset of Harness Protocol.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-ink-800 py-8 text-center bg-ink-950">
        <p className="font-cinzel text-[10px] tracking-widest text-text-dim uppercase">
          © 2026 FORGE · All Rights Reserved
        </p>
      </footer>
    </div>
  );
}
