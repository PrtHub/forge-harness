"use client";

export default function TrustManifest() {
  return (
    <section className="px-6 md:px-12 py-24 lg:py-30 max-w-[1200px] mx-auto reveal">
      <div className="bg-ink-900 border border-ink-600 p-8 md:p-16 relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_60%_60%_at_10%_20%,rgba(255,107,26,0.06)_0%,transparent_60%)] before:pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-12 items-center relative z-10">
          <div className="flex justify-center">
            <div className="relative flex items-center justify-center w-36 h-36 bg-[radial-gradient(circle_at_center,rgba(255,107,26,0.16)_0%,transparent_75%)] rounded-full animate-glow-pulse">
              <svg className="w-20 h-20 fill-none" viewBox="0 0 64 64" stroke="currentColor" style={{ color: "var(--color-ember-500)" }}>
                {/* Shackle */}
                <path
                  d="M22 28V18C22 12.48 26.48 8 32 8C37.52 8 42 12.48 42 18V28"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Body */}
                <rect
                  x="14"
                  y="26"
                  width="36"
                  height="28"
                  rx="4"
                  fill="var(--color-ink-950)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Keyhole */}
                <circle cx="32" cy="37" r="3.5" fill="var(--color-white-hot)" />
                <path d="M32 40.5V46" stroke="var(--color-white-hot)" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <div>
            <p className="font-cinzel text-[10px] tracking-[0.4em] uppercase text-ember-600 mb-4">
              Local Sovereignty
            </p>
            <h2 className="font-cinzel text-2xl md:text-[3vw] lg:text-[38px] font-bold leading-tight text-text-primary mb-5">
              Your progress is local. Always.
            </h2>
            <p className="text-base font-light text-text-muted leading-relaxed mb-10 max-w-[720px]">
              Forge is completely serverless. We believe personal recovery and extreme discipline require absolute, uncompromised data sovereignty. No accounts to leak. No central servers to track you.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-ink-600 pt-10">
              <div>
                <h3 className="font-cinzel text-xs tracking-widest uppercase text-text-primary mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-ember-500" />
                  No Accounts
                </h3>
                <p className="text-[13px] font-light text-text-muted leading-relaxed">
                  No email forms, no phone registration, and no password managers. You enter the crucible instantly without a trail.
                </p>
              </div>
              <div>
                <h3 className="font-cinzel text-xs tracking-widest uppercase text-text-primary mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-ember-500" />
                  Zero Cloud
                </h3>
                <p className="text-[13px] font-light text-text-muted leading-relaxed">
                  All urge data, timers, journals, and autopsies are encrypted and saved strictly on your local physical device.
                </p>
              </div>
              <div>
                <h3 className="font-cinzel text-xs tracking-widest uppercase text-text-primary mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-ember-500" />
                  No Trackers
                </h3>
                <p className="text-[13px] font-light text-text-muted leading-relaxed">
                  Zero third-party analytics scripts, zero cloud telemetry, and zero remote tracking. Extreme privacy is the brand.
                </p>
              </div>
            </div>
            
            <p className="mt-10 text-[13px] font-light text-text-dim italic border-t border-ink-700/50 pt-6">
              🔒 If you lose your device, your data is gone forever—and that is exactly how private discipline ought to be.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
