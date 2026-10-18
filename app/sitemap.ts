import type { MetadataRoute } from "next";
import {
  JOURNAL_PATH,
  articlePath,
  getPublishedArticles,
  journalDateToDate,
} from "@/lib/journal";
import { SITE_URL } from "@/lib/site";

/** Généré automatiquement par Next.js à /sitemap.xml */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const articles = getPublishedArticles();
  const journalLastModified = articles[0]
    ? journalDateToDate(articles[0].date)
    : lastModified;

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/glossaire`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/manifeste`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/testament-ethique`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/charte`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}${JOURNAL_PATH}`,
      lastModified: journalLastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...articles.map((article) => ({
      url: `${SITE_URL}${articlePath(article.slug)}`,
      lastModified: journalDateToDate(article.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    {
      url: `${SITE_URL}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/mentions-legales`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/confidentialite`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
