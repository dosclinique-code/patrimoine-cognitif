/** URL canonique du site — surchargeable via variable d'environnement */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://patrimoine-cognitif.fr";

export const SITE_NAME = "Patrimoine Cognitif";

/** Image Open Graph — générée via app/opengraph-image.tsx (remplaçable par /public/og-image.jpg) */
export const OG_IMAGE_PATH = "/opengraph-image";
