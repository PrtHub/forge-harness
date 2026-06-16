import SEOHeader from "@/components/SEOHeader";
import Footer from "@/components/Footer";
import FrictionArchitect from "./FrictionArchitect";

export const metadata = {
  title: "Screen Friction Architect — Forge",
  description: "Design a bulletproof focus environment. Audit your phone settings, visual color profiles, and blockers to create a customized high-friction discipline setup.",
  keywords: [
    "screen friction planner",
    "phone setup blocker",
    "screentime lockout planner",
    "nextdns setup guide",
    "grayscale phone setting",
    "behavioral design tool",
    "digital quarantine checklist"
  ],
};

export default function FrictionArchitectPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Screen Friction Architect",
    "url": "https://forgeharness.pro/tools/friction-architect",
    "description": "Design a bulletproof focus environment. Audit your phone settings, visual color profiles, and blockers to create a customized high-friction discipline setup.",
    "applicationCategory": "HealthApplication, UtilitiesApplication",
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
              Environmental Design
            </p>
            <h1 className="font-cinzel text-3xl md:text-4xl font-black tracking-tight text-text-primary mb-4">
              Screen Friction Architect
            </h1>
            <p className="text-sm font-light text-text-muted max-w-[500px] mx-auto leading-relaxed">
              Configure physical and digital roadblocks on your devices to systematically disable impulsive, instant-gratification loops.
            </p>
          </div>

          <FrictionArchitect />
        </main>

        <Footer />
      </div>
    </>
  );
}
