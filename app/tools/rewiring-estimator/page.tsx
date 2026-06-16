import SEOHeader from "@/components/SEOHeader";
import Footer from "@/components/Footer";
import RewiringEstimator from "./RewiringEstimator";

export const metadata = {
  title: "Brain Rewiring Timeline Estimator — Forge",
  description: "Calculate your personalized cognitive recovery phases, dopamine receptor upregulation milestones, and neuroplastic brain rewiring timeline.",
  keywords: [
    "brain rewiring calculator",
    "porn reboot timeline",
    "dopamine recovery timeline",
    "deltafosb clearance time",
    "prefrontal cortex recovery",
    "neuroplasticity calendar",
    "pmo recovery schedule"
  ],
};

export default function RewiringEstimatorPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Brain Rewiring Timeline Estimator",
    "url": "https://forgeharness.pro/tools/rewiring-estimator",
    "description": "Calculate your personalized cognitive recovery phases, dopamine receptor upregulation milestones, and neuroplastic brain rewiring timeline.",
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
              Neuroplasticity Projection
            </p>
            <h1 className="font-cinzel text-3xl md:text-4xl font-black tracking-tight text-text-primary mb-4">
              Brain Rewiring Estimator
            </h1>
            <p className="text-sm font-light text-text-muted max-w-[500px] mx-auto leading-relaxed">
              Input your historical consumption habits to project your physiological recovery milestones, synaptic adjustments, and DeltaFosB clearance rate.
            </p>
          </div>

          <RewiringEstimator />
        </main>

        <Footer />
      </div>
    </>
  );
}
