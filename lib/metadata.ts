import type { Metadata } from "next";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, SEO_KEYWORDS } from "./seo";
import { OG_IMAGE_PATH, SITE_NAME, SITE_URL } from "./site";

/** Métadonnées globales partagées — importées dans app/layout.tsx */
export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${DEFAULT_TITLE} | Aigyros`,
    template: "%s | Aigyros",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [...SEO_KEYWORDS],
  authors: [{ name: "Aigyros", url: "https://aigyros.com" }],
  creator: "Aigyros",
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `${DEFAULT_TITLE} | Aigyros`,
    description: DEFAULT_DESCRIPTION,
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "fr_FR",
    images: [
      {
        url: OG_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: "Patrimoine Cognitif — Référence en transmission immatérielle par Aigyros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${DEFAULT_TITLE} | Aigyros`,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE_PATH],
  },
  verification: {
    google: "bGV2pu0sY6dg9yDLvI8-Jfjtna6i9Bi-qIsm5S6UZkQ",
  },
};
