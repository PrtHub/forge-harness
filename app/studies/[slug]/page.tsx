import { notFound } from "next/navigation";
import { CONTENT_DATABASE } from "@/lib/content";
import SEOLayout from "@/components/SEOLayout";
import SEOHeader from "@/components/SEOHeader";
import MarkdownContent from "@/components/MarkdownContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CONTENT_DATABASE.filter((item) => item.category === "studies").map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const study = CONTENT_DATABASE.find((item) => item.slug === slug && item.category === "studies");

  if (!study) return {};

  return {
    title: `${study.title} — Forge Science`,
    description: study.description,
    openGraph: {
      title: `${study.title} — Forge Science`,
      description: study.description,
      type: "article",
      publishedTime: study.publishDate,
      tags: study.tags,
    },
  };
}

export default async function StudyPage({ params }: Props) {
  const { slug } = await params;
  const study = CONTENT_DATABASE.find((item) => item.slug === slug && item.category === "studies");

  if (!study) {
    notFound();
  }

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "headline": study.title,
    "description": study.description,
    "datePublished": study.publishDate,
    "author": {
      "@type": "Organization",
      "name": "Forge Harness Protocol",
    },
  };

  return (
    <>
      {/* Schema.org scholarly article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <SEOHeader category="Studies" categoryLink="/studies" />

      <SEOLayout
        title={study.title}
        description={study.description}
        publishDate={study.publishDate}
        readTime={study.readTime}
        tags={study.tags}
      >
        <MarkdownContent content={study.content} />
      </SEOLayout>
    </>
  );
}
