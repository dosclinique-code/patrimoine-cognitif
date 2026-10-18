# Patrimoine-Cognitif.fr

Site institutionnel dédié au **Patrimoine Cognitif** et au **Testament Éthique Numérique**, initiative d'[Aigyros](https://aigyros.com).

## Stack technique

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4**
- **Framer Motion** — animations
- **Lucide React** — icônes (imports nommés, tree-shaking)

## Installation

```bash
npm install
```

Copier les variables d'environnement :

```bash
cp .env.example .env.local
```

## Développement

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Production

```bash
npm run build
npm start
```

Le **sitemap** (`/sitemap.xml`) et le **robots.txt** sont générés automatiquement par Next.js à partir de `app/sitemap.ts` et `app/robots.ts` — aucune étape post-build requise.

## Variables d'environnement

| Variable | Description | Exemple |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL canonique du site (SEO, sitemap) | `https://www.patrimoine-cognitif.fr` |

## Structure des pages

| Route | Description |
|---|---|
| `/` | Page d'accueil |
| `/manifeste` | Manifeste fondateur |
| `/testament-ethique` | 12 questions (FAQ + JSON-LD) |
| `/charte` | 4 principes (scroll snap) |
| `/journal` | Journal — textes publiés (titre, date, type, extrait) |
| `/journal/[slug]` | Article du Journal |
| `/journal/rss.xml` | Flux RSS du Journal (alias : `/feed.xml`) |
| `/contact` | Contact par e-mail |

## SEO

- Métadonnées globales dans `lib/metadata.ts`
- Image Open Graph générée via `app/opengraph-image.tsx`
- Schema.org `Organization` (layout) + `FAQPage` (`/testament-ethique`)
- Sitemap et robots.txt dynamiques

Pour tester le JSON-LD FAQ : [Google Rich Results Test](https://search.google.com/test/rich-results)

## Déploiement

### Vercel (recommandé)

1. Pousser le repo sur GitHub
2. Importer le projet sur [vercel.com](https://vercel.com)
3. Configurer les variables d'environnement
4. Déployer — le build Next.js génère automatiquement sitemap et OG image

### OVHcloud / VPS

```bash
npm run build
npm start
# ou via PM2 : pm2 start npm --name patrimoine-cognitif -- start
```

Configurer un reverse proxy (Nginx) avec HTTPS et pointer le domaine `patrimoine-cognitif.fr`.

## Contenu éditorial

Les fichiers sources de contenu se trouvent à la racine :

- `SPEC.md`
- `CONTENT_MANIFESTE.md`
- `CONTENT_12_QUESTIONS.md`
- `CONTENT_CHARTE.md`

Les textes structurés pour le code sont dans `lib/` (`content.ts`, `questions.ts`, `charte.ts`).

### Ajouter un article au Journal

Créer un fichier `content/journal/mon-slug.md` (le nom du fichier est l’URL). Frontmatter minimal :

```yaml
---
title: "Titre entre 30 et 60 caractères"
description: "Meta description entre 120 et 160 caractères, reprise comme extrait dans la liste."
date: 2027-04-19
type: Histoire
draft: true
keyword: "mot-clé principal"
mention: "Histoire inspirée de situations réelles. Les personnages et les lieux sont fictifs."
---
```

`type` vaut `Histoire`, `Guide`, `Réflexion` ou `Actualité`. La mention est obligatoire pour une histoire, omise sinon. Le corps est du Markdown : paragraphes, titres `##`, listes, liens `[Manifeste](/manifeste#definition-patrimoine)`.

Un article n’est public que si `draft` est `false` **et** si `date` est atteinte ou passée, en heure de Paris. Tant qu’il est masqué, il n’apparaît pas sur `/journal`, dans le flux RSS ni dans le sitemap. Au moment de publier, le corps doit contenir au moins un lien vers le Manifeste, le glossaire, la Charte ou le testament éthique.
