import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Rss } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import JsonLd from "@/components/seo/JsonLd";
import {
  JOURNAL_DESCRIPTION,
  JOURNAL_FEED_PATH,
  JOURNAL_PATH,
  JOURNAL_RSS_PATH,
  JOURNAL_TITLE,
  articlePath,
  formatJournalDate,
  getPublishedArticles,
} from "@/lib/journal";
import { buildPageMetadata, breadcrumbSchema } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata(JOURNAL_PATH, {
  title: JOURNAL_TITLE,
  description: JOURNAL_DESCRIPTION,
  alternates: {
    types: {
      "application/rss+xml": [
        { url: JOURNAL_RSS_PATH, title: `${JOURNAL_TITLE} (RSS)` },
      ],
    },
  },
  openGraph: {
    title: JOURNAL_TITLE,
    description: JOURNAL_DESCRIPTION,
    type: "website",
  },
});

export default function JournalPage() {
  const articles = getPublishedArticles();
  const breadcrumb = breadcrumbSchema([
    { name: "Accueil", path: "/" },
    { name: "Journal", path: JOURNAL_PATH },
  ]);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: JOURNAL_TITLE,
    description: JOURNAL_DESCRIPTION,
    url: `${SITE_URL}${JOURNAL_PATH}`,
    inLanguage: "fr-FR",
    publisher: { "@id": `${SITE_URL}/#organization` },
    blogPost: articles.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      description: article.description,
      datePublished: article.date,
      url: `${SITE_URL}${articlePath(article.slug)}`,
      articleSection: article.type,
    })),
  };

  return (
    <>
      <JsonLd data={blogSchema} />
      <JsonLd data={breadcrumb} />
      <div className="min-h-screen pt-28 pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-16">
          <FadeIn className="mb-14">
            <p className="text-sm uppercase tracking-[0.28em] text-or font-sans mb-2">
              Tous les quinze jours
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-creme leading-tight mb-4">
              Journal
            </h1>
            <p className="font-sans text-lg text-creme/65 leading-relaxed max-w-2xl">
              Pourquoi sauvegarder ce que l&apos;on a compris, décidé, tenu pour
              juste ? Un texte toutes les deux semaines — histoire, guide ou
              réflexion — pour distinguer l&apos;archive de la transmission.
            </p>
          </FadeIn>

          {articles.length === 0 ? (
            <p className="font-sans text-creme/60 leading-relaxed">
              Le prochain texte est en préparation.
            </p>
          ) : (
            <ol className="space-y-6">
              {articles.map((article, index) => (
                <li key={article.slug}>
                  <FadeIn delay={index * 0.05}>
                    <article className="card-surface p-6 md:p-8">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
                        <span className="text-[11px] tracking-[0.18em] uppercase font-sans text-creme/70 border border-or/20 px-2.5 py-1">
                          {article.type}
                        </span>
                        <time
                          dateTime={article.date}
                          className="text-sm text-creme/50 font-sans"
                        >
                          {formatJournalDate(article.date)}
                        </time>
                      </div>
                      <h2 className="font-serif text-2xl md:text-3xl text-creme leading-tight mb-3">
                        <Link
                          href={articlePath(article.slug)}
                          className="hover:text-marine-clair transition-colors duration-300"
                        >
                          {article.title}
                        </Link>
                      </h2>
                      <p className="text-creme/70 font-sans leading-relaxed mb-6">
                        {article.description}
                      </p>
                      <Link
                        href={articlePath(article.slug)}
                        className="inline-flex items-center gap-2 text-xs tracking-[0.14em] uppercase font-sans text-creme/70 hover:text-creme hover:gap-3 transition-all duration-300"
                      >
                        Lire l&apos;article
                        <ArrowRight size={13} aria-hidden="true" />
                      </Link>
                    </article>
                  </FadeIn>
                </li>
              ))}
            </ol>
          )}

          <FadeIn delay={0.1} className="mt-14 pt-8 border-t border-or/10">
            <a
              href={JOURNAL_RSS_PATH}
              className="inline-flex items-center gap-2 text-xs tracking-[0.14em] uppercase font-sans text-creme/45 hover:text-creme transition-colors"
            >
              <Rss size={14} aria-hidden="true" />
              Flux RSS
            </a>
            <p className="mt-3 text-xs text-creme/35 font-sans">
              Également disponible à l&apos;adresse {JOURNAL_FEED_PATH}.
            </p>
          </FadeIn>
        </div>
      </div>
    </>
  );
}
