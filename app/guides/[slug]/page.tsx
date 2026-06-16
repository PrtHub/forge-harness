import { notFound } from "next/navigation";
import { CONTENT_DATABASE } from "@/lib/content";
import SEOLayout from "@/components/SEOLayout";
import SEOHeader from "@/components/SEOHeader";
import MarkdownContent from "@/components/MarkdownContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CONTENT_DATABASE.filter((item) => item.category === "guides").map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const guide = CONTENT_DATABASE.find((item) => item.slug === slug && item.category === "guides");

  if (!guide) return {};

  return {
    title: `${guide.title} — Forge Guide`,
    description: guide.description,
    openGraph: {
      title: `${guide.title} — Forge Guide`,
      description: guide.description,
      type: "article",
      publishedTime: guide.publishDate,
      tags: guide.tags,
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = CONTENT_DATABASE.find((item) => item.slug === slug && item.category === "guides");

  if (!guide) {
    notFound();
  }

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": guide.title,
    "description": guide.description,
    "datePublished": guide.publishDate,
    "author": {
      "@type": "Organization",
      "name": "Forge Harness Protocol",
    },
  };

  return (
    <>
      {/* Schema.org Article Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <SEOHeader category="Guides" categoryLink="/guides" />

      <SEOLayout
        title={guide.title}
        description={guide.description}
        publishDate={guide.publishDate}
        readTime={guide.readTime}
        tags={guide.tags}
      >
        <MarkdownContent content={guide.content} />
      </SEOLayout>
    </>
  );
}
