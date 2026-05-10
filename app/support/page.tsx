import Link from "next/link";

export const metadata = {
  title: "Operator Support — Forge",
  description: "Contact the operators or browse local troubleshooting protocols for Forge. Reclaim your discipline.",
};

export default function SupportPage() {
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
          Operator Support
        </h1>

        <div className="space-y-12">
          {/* Intro Card */}
          <div className="bg-ink-900 border border-ink-700 px-8 py-9 relative overflow-hidden">
            <p className="text-xl italic text-text-primary font-normal leading-relaxed mb-4">
              "We maintain no servers. We don't watch your log. If you are having trouble with your forge, file your diagnostic autopsy below or query the operator protocols."
            </p>
            <p className="text-sm font-light text-text-muted">
              Average Operator Response Window: <strong className="text-ember-500 font-semibold font-cinzel">UNDER 4 HOURS</strong>
            </p>
          </div>

          {/* Quick FAQ Accordion */}
          <section className="space-y-6">
            <h2 className="font-cinzel text-lg font-semibold text-text-primary tracking-wider uppercase border-b border-ink-800 pb-3">
              I. Operational FAQ
            </h2>

            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-cinzel text-sm font-bold text-text-primary tracking-wide">
                  How do I restore my purchases if I switch devices?
                </h3>
                <p className="text-sm font-light text-text-muted">
                  Forge is connected natively to Apple and Google Play billing securely via RevenueCat. To restore your Annual Mastery or 90-Day Reset plans, tap the settings cog on your Anvil dashboard, scroll down to Account, and click "Restore Purchases". This query syncs directly with your device's native App Store account status.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-cinzel text-sm font-bold text-text-primary tracking-wide">
                  Why can't I see my logs on other devices?
                </h3>
                <p className="text-sm font-light text-text-muted">
                  Because privacy is our brand, Forge holds a strict **local-only policy**. No databases are synced to external clouds, ensuring nobody (including the operators) can access or read your logs. Your diary remains secure, private, and fully sandboxed on your physical device.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-cinzel text-sm font-bold text-text-primary tracking-wide">
                  My daily Strike didn't register, how do I recount?
                </h3>
                <p className="text-sm font-light text-text-muted">
                  The Strike marks your commitment once per calendar day. If you missed a strike or your calendar timezone shifted, open Settings → Danger Zone and tap "Adjust Timeline" to calibrating your offset.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Core Operator */}
          <section className="space-y-6">
            <h2 className="font-cinzel text-lg font-semibold text-text-primary tracking-wider uppercase border-b border-ink-800 pb-3">
              II. File Diagnostic Ticket
            </h2>
            <p className="text-sm font-light text-text-muted">
              Need technical intervention or billing adjustments? File your inquiry directly to the operators:
            </p>

            <form action="mailto:operators@forgeharness.pro" method="get" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-cinzel text-[10px] tracking-wider text-text-muted uppercase block mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Operator name"
                    className="w-full bg-ink-900 border border-ink-700 px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-ember-500 transition-colors font-sans"
                  />
                </div>
                <div>
                  <label className="font-cinzel text-[10px] tracking-wider text-text-muted uppercase block mb-1.5">Operating System</label>
                  <select className="w-full bg-ink-900 border border-ink-700 px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-ember-500 transition-colors font-sans">
                    <option value="ios">iOS (Apple App Store)</option>
                    <option value="android">Android (Google Play)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-cinzel text-[10px] tracking-wider text-text-muted uppercase block mb-1.5">autopsy of your issue</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your technical difficulty in detail. If this is a billing query, please include your anonymous receipt ID."
                  className="w-full bg-ink-900 border border-ink-700 px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-ember-500 transition-colors font-sans"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-ember-500 text-ink-950 font-cinzel text-[11px] tracking-[0.2em] font-black uppercase py-4 hover:bg-ember-400 transition-colors duration-300"
              >
                Dispatch to Operators
              </button>
            </form>
          </section>

          <section className="space-y-4 border-t border-ink-700 pt-8 mt-12">
            <p className="text-xs text-text-dim uppercase tracking-wider font-cinzel">
              Emergency Operator Liaison
            </p>
            <p className="text-xs text-text-dim italic">
              Email support coordinates: <a href="mailto:operators@forgeharness.pro" className="text-ember-500 no-underline hover:underline">operators@forgeharness.pro</a>
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
