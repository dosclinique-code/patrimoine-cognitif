import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/** Généré automatiquement par Next.js à /robots.txt */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
