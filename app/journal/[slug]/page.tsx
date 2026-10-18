import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Markdown from "@/components/journal/Markdown";
import ReadingProgress from "@/components/manifeste/ReadingProgress";
import JsonLd from "@/components/seo/JsonLd";
import {
  JOURNAL_PATH,
  JOURNAL_RSS_PATH,
  JOURNAL_TITLE,
  articlePath,
  formatJournalDate,
  getPublishedArticle,
  getPublishedArticles,
  readingMinutes,
} from "@/lib/journal";
import { articleSchema, breadcrumbSchema, buildPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getPublishedArticles().map((article) => ({ slug: article.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(
  props: PageProps<"/journal/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getPublishedArticle(slug);
  if (!article) return {};

  const path = articlePath(article.slug);

  return buildPageMetadata(path, {
    title: article.title,
    description: article.description,
    keywords: [article.keyword],
    authors: [{ name: "Aigyros", url: "https://aigyros.com" }],
    alternates: {
      types: {
        "application/rss+xml": [
          { url: JOURNAL_RSS_PATH, title: `${JOURNAL_TITLE} (RSS)` },
        ],
      },
    },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      modifiedTime: article.date,
      authors: ["Aigyros"],
      section: article.type,
      tags: [article.keyword, article.type],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  });
}

export default async function JournalArticlePage(
  props: PageProps<"/journal/[slug]">
) {
  const { slug } = await props.params;
  const article = getPublishedArticle(slug);
  if (!article) notFound();

  const path = articlePath(article.slug);
  const minutes = readingMinutes(article.body);

  return (
    <>
      <ReadingProgress />
      <JsonLd
        data={articleSchema({
          headline: article.title,
          description: article.description,
          path,
          datePublished: article.date,
          section: article.type,
          keywords: article.keyword,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Journal", path: JOURNAL_PATH },
          { name: article.title, path },
        ])}
      />

      <div className="min-h-screen pt-28 pb-28">
        <article className="mx-auto max-w-3xl px-6 lg:px-8 py-16">
          <header className="mb-12">
            <Link
              href={JOURNAL_PATH}
              className="inline-flex items-center gap-2 text-xs tracking-[0.16em] uppercase font-sans text-creme/45 hover:text-creme transition-colors mb-8"
            >
              <ArrowLeft size={13} aria-hidden="true" />
              Journal
            </Link>

            <p className="text-sm uppercase tracking-[0.28em] text-or font-sans mb-4">
              {article.type}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-creme leading-tight mb-5">
              {article.title}
            </h1>
            <p className="font-sans text-sm text-creme/50">
              <time dateTime={article.date}>{formatJournalDate(article.date)}</time>
              <span className="mx-2 text-creme/25" aria-hidden="true">
                ·
              </span>
              {minutes} min de lecture
            </p>

            {article.mention ? (
              <p className="mt-8 font-sans text-sm italic text-creme/60 leading-relaxed border-l-2 border-or/30 pl-4">
                {article.mention}
              </p>
            ) : null}
          </header>

          <div
            className="h-px mb-12"
            style={{
              background:
                "linear-gradient(90deg, rgba(27,45,79,0.35) 0%, rgba(27,45,79,0.08) 70%, transparent 100%)",
            }}
          />

          <Markdown source={article.body} />

          <footer className="mt-16 pt-10 border-t border-or/15">
            <p className="text-xs tracking-[0.22em] uppercase font-sans text-creme/45 mb-5">
              Pour aller plus loin
            </p>
            <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-x-8 gap-y-3" role="list">
              <li>
                <Link
                  href="/manifeste"
                  className="font-sans text-sm text-creme/75 underline underline-offset-4 decoration-creme/25 hover:decoration-creme transition-colors"
                >
                  Lire le Manifeste
                </Link>
              </li>
              <li>
                <Link
                  href="/glossaire"
                  className="font-sans text-sm text-creme/75 underline underline-offset-4 decoration-creme/25 hover:decoration-creme transition-colors"
                >
                  Consulter le glossaire
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-sans text-sm text-creme/75 underline underline-offset-4 decoration-creme/25 hover:decoration-creme transition-colors"
                >
                  Écrire
                </Link>
              </li>
            </ul>
          </footer>
        </article>
      </div>
    </>
  );
}
