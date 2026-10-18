import fs from "node:fs";
import path from "node:path";
import { SITE_NAME, SITE_URL } from "@/lib/site";

/**
 * Journal — un fichier Markdown par article, dans `content/journal`.
 *
 * Pour publier :
 * 1. Rédiger le corps en Markdown (liens internes vers le Manifeste ou le glossaire).
 * 2. Garder le titre entre 30 et 60 caractères, la description entre 120 et 160.
 * 3. Passer `draft` à false. Si `date` est encore future (fuseau Europe/Paris),
 *    l'article reste masqué jusqu'à ce jour.
 *
 * Les textes non publiés n'entrent ni dans /journal, ni dans le flux RSS, ni dans le sitemap.
 */

const JOURNAL_DIR = path.join(process.cwd(), "content", "journal");

export const JOURNAL_TYPES = ["Histoire", "Guide", "Réflexion", "Actualité"] as const;
export type JournalType = (typeof JOURNAL_TYPES)[number];

export const FICTION_MENTION =
  "Histoire inspirée de situations réelles. Les personnages et les lieux sont fictifs.";

export const JOURNAL_PATH = "/journal";
export const JOURNAL_RSS_PATH = "/journal/rss.xml";
export const JOURNAL_FEED_PATH = "/feed.xml";

export const JOURNAL_TITLE = "Journal du patrimoine cognitif";
export const JOURNAL_DESCRIPTION =
  "Un texte toutes les deux semaines pour comprendre pourquoi sauvegarder son patrimoine cognitif, au-delà de l'archive et du stockage.";

export type JournalArticle = {
  slug: string;
  title: string;
  description: string;
  date: string;
  type: JournalType;
  draft: boolean;
  keyword: string;
  mention?: string;
  body: string;
};

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

let cache: JournalArticle[] | null = null;

export function parisISODate(now = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Paris",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

export function isPublished(
  article: Pick<JournalArticle, "draft" | "date">,
  now = new Date()
): boolean {
  if (article.draft) return false;
  return article.date <= parisISODate(now);
}

export function formatJournalDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

export function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function readingMinutes(text: string): number {
  return Math.max(1, Math.round(countWords(text) / 220));
}

export function journalDateToDate(isoDate: string): Date {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day));
}

export function getAllArticles(): JournalArticle[] {
  if (process.env.NODE_ENV === "production" && cache) return cache;
  const articles = loadArticles();
  if (process.env.NODE_ENV === "production") cache = articles;
  return articles;
}

export function getPublishedArticles(now = new Date()): JournalArticle[] {
  return getAllArticles()
    .filter((article) => isPublished(article, now))
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.slug.localeCompare(b.slug, "fr")));
}

export function getPublishedArticle(slug: string, now = new Date()): JournalArticle | undefined {
  return getPublishedArticles(now).find((article) => article.slug === slug);
}

export function articlePath(slug: string): string {
  return `${JOURNAL_PATH}/${slug}`;
}

export function buildJournalRss(now = new Date()): string {
  const articles = getPublishedArticles(now);
  const self = `${SITE_URL}${JOURNAL_RSS_PATH}`;
  const items = articles
    .map((article) => {
      const url = `${SITE_URL}${articlePath(article.slug)}`;
      return [
        "    <item>",
        `      <title>${escapeXml(article.title)}</title>`,
        `      <link>${escapeXml(url)}</link>`,
        `      <guid isPermaLink="true">${escapeXml(url)}</guid>`,
        `      <pubDate>${escapeXml(rfc822(article.date))}</pubDate>`,
        `      <description>${escapeXml(article.description)}</description>`,
        `      <category>${escapeXml(article.type)}</category>`,
        "    </item>",
      ].join("\n");
    })
    .join("\n");

  const lastBuild = articles[0] ? rfc822(articles[0].date) : new Date().toUTCString();

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "  <channel>",
    `    <title>${escapeXml(`${JOURNAL_TITLE} — ${SITE_NAME}`)}</title>`,
    `    <link>${escapeXml(`${SITE_URL}${JOURNAL_PATH}`)}</link>`,
    `    <description>${escapeXml(JOURNAL_DESCRIPTION)}</description>`,
    "    <language>fr-FR</language>",
    `    <lastBuildDate>${escapeXml(lastBuild)}</lastBuildDate>`,
    `    <atom:link href="${escapeXml(self)}" rel="self" type="application/rss+xml"/>`,
    items,
    "  </channel>",
    "</rss>",
    "",
  ].join("\n");
}

export function journalRssResponse(now = new Date()): Response {
  return new Response(buildJournalRss(now), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

function loadArticles(): JournalArticle[] {
  if (!fs.existsSync(JOURNAL_DIR)) return [];

  const files = fs
    .readdirSync(JOURNAL_DIR)
    .filter((name) => name.endsWith(".md") || name.endsWith(".mdx"));

  const articles = files.map((file) => parseArticleFile(file));
  const slugs = new Set<string>();

  for (const article of articles) {
    if (slugs.has(article.slug)) {
      throw new Error(`Slug de journal en double : ${article.slug}`);
    }
    slugs.add(article.slug);
    assertArticle(article);
  }

  return articles;
}

function parseArticleFile(file: string): JournalArticle {
  const raw = fs.readFileSync(path.join(JOURNAL_DIR, file), "utf8");
  const ext = path.extname(file);
  const slug = path.basename(file, ext);
  const { data, body } = parseFrontmatter(raw, file);

  const mention = typeof data.mention === "string" ? data.mention : undefined;

  return {
    slug,
    title: requireString(data, "title", file),
    description: requireString(data, "description", file),
    date: requireString(data, "date", file),
    type: requireString(data, "type", file) as JournalType,
    draft: requireBoolean(data, "draft", file),
    keyword: requireString(data, "keyword", file),
    mention,
    body: body.trim(),
  };
}

function assertArticle(article: JournalArticle): void {
  const where = article.slug;

  if (!SLUG_PATTERN.test(article.slug)) {
    throw new Error(`Slug invalide (${where}). Utiliser des minuscules et des tirets.`);
  }

  if (!DATE_PATTERN.test(article.date) || Number.isNaN(journalDateToDate(article.date).getTime())) {
    throw new Error(`Date invalide pour ${where} : ${article.date} (attendu : AAAA-MM-JJ).`);
  }

  if (!JOURNAL_TYPES.includes(article.type)) {
    throw new Error(
      `Type invalide pour ${where} : ${article.type}. Attendu : ${JOURNAL_TYPES.join(", ")}.`
    );
  }

  const titleLength = article.title.length;
  if (titleLength < 30 || titleLength > 60) {
    throw new Error(`Titre hors plage 30–60 caractères pour ${where} : ${titleLength}.`);
  }

  const descriptionLength = article.description.length;
  if (descriptionLength < 120 || descriptionLength > 160) {
    throw new Error(
      `Description hors plage 120–160 caractères pour ${where} : ${descriptionLength}.`
    );
  }

  if (!article.keyword.trim()) {
    throw new Error(`Mot-clé manquant pour ${where}.`);
  }

  if (article.type === "Histoire" && article.mention !== FICTION_MENTION) {
    throw new Error(
      `Les histoires doivent porter la mention exacte : « ${FICTION_MENTION} » (${where}).`
    );
  }

  if (!article.body) {
    throw new Error(`Corps vide pour ${where}.`);
  }

  if (isPublished(article) && !/\]\(\/(manifeste|glossaire|charte|testament-ethique)(?:[#)])/.test(article.body)) {
    throw new Error(
      `Lien interne manquant dans ${where} : renvoyer au Manifeste, au glossaire, à la Charte ou au testament éthique.`
    );
  }
}

function parseFrontmatter(
  raw: string,
  file: string
): { data: Record<string, string | boolean>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    throw new Error(`Frontmatter manquant dans ${file}.`);
  }

  const data: Record<string, string | boolean> = {};

  for (const line of match[1].split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const separator = line.indexOf(":");
    if (separator === -1) {
      throw new Error(`Ligne de frontmatter invalide dans ${file} : ${line}`);
    }

    const key = line.slice(0, separator).trim();
    let value = line.slice(separator + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (value === "true" || value === "false") {
      data[key] = value === "true";
    } else {
      data[key] = value;
    }
  }

  return { data, body: match[2] };
}

function requireString(
  data: Record<string, string | boolean>,
  key: string,
  file: string
): string {
  const value = data[key];
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`Champ « ${key} » manquant dans ${file}.`);
  }
  return value.trim();
}

function requireBoolean(
  data: Record<string, string | boolean>,
  key: string,
  file: string
): boolean {
  const value = data[key];
  if (typeof value !== "boolean") {
    throw new Error(`Champ « ${key} » booléen manquant dans ${file} (true ou false).`);
  }
  return value;
}

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function rfc822(isoDate: string): string {
  return journalDateToDate(isoDate).toUTCString();
}
