import SEOHeader from "@/components/SEOHeader";
import Footer from "@/components/Footer";
import DopamineAuditQuiz from "./DopamineAuditQuiz";

export const metadata = {
  title: "Dopamine Baseline Audit Quiz — Forge",
  description: "Audit your digital habit loops, measure your dopamine baseline score, check receptor downregulation, and get personalized recovery steps.",
  keywords: [
    "dopamine quiz",
    "dopamine baseline audit",
    "receptor sensitivity diagnostic",
    "dopamine receptor test",
    "dopamine detox quiz",
    "attention span test",
    "prefrontal cortex audit"
  ],
};

export default function DopamineAuditPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Dopamine Baseline Audit Quiz",
    "url": "https://forgeharness.pro/tools/dopamine-audit",
    "description": "Audit your digital habit loops, measure your dopamine baseline score, check receptor downregulation, and get personalized recovery steps.",
    "applicationCategory": "HealthApplication, EducationalApplication",
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
              Neurochemical Diagnostic
            </p>
            <h1 className="font-cinzel text-3xl md:text-4xl font-black tracking-tight text-text-primary mb-4">
              Dopamine Baseline Audit
            </h1>
            <p className="text-sm font-light text-text-muted max-w-[500px] mx-auto leading-relaxed">
              Measure your stimulation exposure and estimate prefrontal receptor sensitivity through a 10-point baseline evaluation.
            </p>
          </div>

          <DopamineAuditQuiz />
        </main>

        <Footer />
      </div>
    </>
  );
}
