import { GUIDES_DATA } from "./guides-data";
import { STUDIES_DATA } from "./studies-data";
import { HABITS_DATA } from "./habits-data";

export interface ContentItem {
  slug: string;
  title: string;
  description: string;
  category: "guides" | "studies" | "habits";
  publishDate: string;
  readTime: string;
  tags: string[];
  content: string; // Markdown formatted content
  schemaDescription: string;
}

export const CONTENT_DATABASE: ContentItem[] = [
  ...GUIDES_DATA,
  ...STUDIES_DATA,
  ...HABITS_DATA,
];
