import Footer from "@/components/Footer";
import SEOHeader from "@/components/SEOHeader";
import UrgeCalculator from "./UrgeCalculator";

export const metadata = {
  title: "Urge Opportunity Cost Calculator — Forge",
  description: "Calculate the exact lifetime hours and financial potential lost in compulsive urge loops, and see what focus you reclaim in 90 days.",
  keywords: [
    "urge calculator",
    "opportunity cost",
    "habit loop time calculator",
    "discipline tool",
    "quitting calculator",
    "pmo cost calculator",
    "dopamine recovery calculator"
  ],
};

export default function UrgeCalculatorPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Urge Opportunity Cost Calculator",
    "url": "https://forgeharness.pro/tools/urge-calculator",
    "description": "Calculate the exact lifetime hours and financial potential lost in compulsive urge loops, and see what focus you reclaim in 90 days.",
    "applicationCategory": "HealthApplication, BusinessApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript. Requires HTML5."
  };

  return (
    <>
      {/* Schema.org WebApplication Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <div className="bg-ink-950 min-h-screen text-text-primary selection:bg-ember-600 selection:text-white-hot flex flex-col font-spectral">
        <SEOHeader category="Tools" categoryLink="/tools" />

        <main className="flex-1 px-6 py-16 max-w-[800px] mx-auto w-full">
          {/* Intro */}
          <div className="text-center mb-12">
            <p className="font-cinzel text-[10px] tracking-[0.4em] uppercase text-ember-600 mb-3">
              Diagnostic Tool
            </p>
            <h1 className="font-cinzel text-3xl md:text-4xl font-black tracking-tight text-text-primary mb-4">
              Urge Opportunity Cost
            </h1>
            <p className="text-sm font-light text-text-muted max-w-[480px] mx-auto leading-relaxed">
              Quantify the lifetime focus, time, and financial potential lost in compulsive urge loops, and see what you can reclaim in 90 days.
            </p>
          </div>

          <UrgeCalculator />
        </main>

        <Footer />
      </div>
    </>
  );
}
