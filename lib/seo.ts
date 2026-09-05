import type { Metadata } from "next";
import { MANIFESTE } from "./content";
import { OG_IMAGE_PATH, SITE_NAME, SITE_URL } from "./site";

/** Termes cibles pour le référencement thématique */
export const SEO_KEYWORDS = [
  "patrimoine cognitif",
  "patrimoine immatériel",
  "transmission immatérielle",
  "testament éthique numérique",
  "testament éthique",
  "souveraineté mémorielle",
  "transmission intergénérationnelle",
  "héritage immatériel",
  "mémoire numérique",
  "transmission souveraine",
  "Aigyros",
] as const;

export const DEFAULT_DESCRIPTION =
  "Référence francophone sur le patrimoine cognitif et le patrimoine immatériel : définitions, manifeste, charte de transmission souveraine et testament éthique numérique par Aigyros.";

export const DEFAULT_TITLE =
  "Patrimoine Cognitif & Immatériel | Référence & Expertise";

type BreadcrumbItem = { name: string; path: string };

/** Métadonnées de page avec URL canonique et Open Graph cohérents */
export function buildPageMetadata(path: string, partial: Metadata): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;

  return {
    ...partial,
    alternates: {
      canonical: url,
      ...partial.alternates,
    },
    openGraph: {
      url,
      siteName: SITE_NAME,
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: OG_IMAGE_PATH,
          width: 1200,
          height: 630,
          alt: "Patrimoine Cognitif — Transmission souveraine par Aigyros",
        },
      ],
      ...partial.openGraph,
    },
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? SITE_URL : `${SITE_URL}${item.path}`,
    })),
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Référence d'expertise sur le patrimoine cognitif, le patrimoine immatériel et la transmission souveraine à l'ère numérique.",
  knowsAbout: [
    "Patrimoine cognitif",
    "Patrimoine immatériel",
    "Testament éthique numérique",
    "Transmission intergénérationnelle",
    "Souveraineté mémorielle",
  ],
  parentOrganization: {
    "@type": "Organization",
    name: "Aigyros",
    url: "https://aigyros.com",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  inLanguage: "fr-FR",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export const definedTermSchema = {
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  name: "Patrimoine cognitif",
  description: MANIFESTE.definitionCanonique,
    inDefinedTermSet: {
    "@type": "DefinedTermSet",
    name: "Patrimoine cognitif et patrimoine immatériel",
    url: `${SITE_URL}/glossaire`,
  },
};

export function articleSchema({
  headline,
  description,
  path,
  datePublished,
}: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished,
    dateModified: datePublished,
    author: {
      "@type": "Organization",
      name: "Aigyros",
      url: "https://aigyros.com",
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${path}`,
    },
    inLanguage: "fr-FR",
    about: ["Patrimoine cognitif", "Patrimoine immatériel", "Transmission souveraine"],
  };
}

export function definedTermSetSchema(
  terms: { name: string; description: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Glossaire du patrimoine cognitif et immatériel",
    description:
      "Définitions de référence sur le patrimoine cognitif, le patrimoine immatériel et la transmission souveraine.",
    url: `${SITE_URL}/glossaire`,
    inLanguage: "fr-FR",
    hasDefinedTerm: terms.map((term) => ({
      "@type": "DefinedTerm",
      name: term.name,
      description: term.description,
    })),
  };
}
