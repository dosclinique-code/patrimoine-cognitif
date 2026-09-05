/**
 * Composant JSON-LD réutilisable.
 * Google accepte le JSON-LD dans le body ; Next.js App Router
 * ne permet pas d'injecter facilement des scripts dans <head> depuis une page.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
