import { notFound } from "next/navigation";
import { CONTENT_DATABASE } from "@/lib/content";
import SEOLayout from "@/components/SEOLayout";
import SEOHeader from "@/components/SEOHeader";
import MarkdownContent from "@/components/MarkdownContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CONTENT_DATABASE.filter((item) => item.category === "habits").map((item) => ({
    slug: item.slug,
    }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const habit = CONTENT_DATABASE.find((item) => item.slug === slug && item.category === "habits");

  if (!habit) return {};

  return {
    title: `${habit.title} — Forge Habit`,
    description: habit.description,
    openGraph: {
      title: `${habit.title} — Forge Habit`,
      description: habit.description,
      type: "article",
      publishedTime: habit.publishDate,
      tags: habit.tags,
    },
  };
}

export default async function HabitPage({ params }: Props) {
  const { slug } = await params;
  const habit = CONTENT_DATABASE.find((item) => item.slug === slug && item.category === "habits");

  if (!habit) {
    notFound();
  }

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": habit.title,
    "description": habit.description,
    "publisher": {
      "@type": "Organization",
      "name": "Forge Harness Protocol",
    },
  };

  return (
    <>
      {/* Schema.org HowTo structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <SEOHeader category="Habits" categoryLink="/habits" />

      <SEOLayout
        title={habit.title}
        description={habit.description}
        publishDate={habit.publishDate}
        readTime={habit.readTime}
        tags={habit.tags}
      >
        <MarkdownContent content={habit.content} />
      </SEOLayout>
    </>
  );
}
