import Link from "next/link";
import Footer from "@/components/Footer";
import SEOHeader from "@/components/SEOHeader";
import { CONTENT_DATABASE } from "@/lib/content";

export const metadata = {
  title: "Studies & Science — Forge",
  description: "Browse the peer-reviewed neurobiological reports and scientific studies regarding dopamine receptor recovery and habit tracking.",
};

export default function StudiesIndexPage() {
  const studies = CONTENT_DATABASE.filter((item) => item.category === "studies");

  return (
    <div className="bg-ink-950 min-h-screen text-text-primary selection:bg-ember-600 selection:text-white-hot flex flex-col font-spectral">
      <SEOHeader category="Resources" categoryLink="/resources" />

      <main className="flex-1 px-6 py-16 max-w-[900px] mx-auto w-full">
        {/* Intro */}
        <div className="mb-12">
          <p className="font-cinzel text-[10px] tracking-[0.4em] uppercase text-ember-600 mb-3">
            Clinical Data
          </p>
          <h1 className="font-cinzel text-3xl md:text-4xl font-black tracking-tight text-text-primary mb-5">
            Science & Studies
          </h1>
          <p className="text-base font-light text-text-muted leading-relaxed max-w-[580px]">
            Scientific evidence exploring lateral eye movement, receptor desensitization, and physical relocation benefits on urge recovery.
          </p>
        </div>

        {/* Studies List */}
        <div className="space-y-6">
          {studies.map((study) => (
            <Link
              key={study.slug}
              href={`/studies/${study.slug}`}
              className="bg-ink-900 border border-ink-700 p-8 hover:border-ember-600 hover:bg-ink-800 transition-all duration-300 group no-underline block"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-text-dim mb-3 uppercase font-cinzel tracking-wider">
                <span>{study.publishDate}</span>
                <span className="w-1 h-1 rounded-full bg-ink-600" />
                <span className="text-ember-500">{study.readTime}</span>
              </div>
              <h2 className="font-cinzel text-xl font-bold text-text-primary mb-3 group-hover:text-ember-400 transition-colors">
                {study.title}
              </h2>
              <p className="text-sm font-light text-text-muted leading-relaxed mb-4">
                {study.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] uppercase tracking-widest font-cinzel px-2 py-0.5 bg-ink-950 border border-ink-700 text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="font-cinzel text-xs text-ember-500 group-hover:text-ember-400 font-bold uppercase tracking-widest flex items-center gap-1.5 mt-2">
                Open Clinical Review →
              </span>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
