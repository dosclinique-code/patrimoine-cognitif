import type { Metadata } from "next";
import ChartePageClient from "@/components/charte/ChartePageClient";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("/charte", {
  title: "Charte de la Transmission Souveraine du Patrimoine Immatériel",
  description:
    "Les 4 principes fondateurs du patrimoine cognitif et du patrimoine immatériel : souveraineté, sobriété, non-marchandisation de la mémoire et pérennité matérielle.",
  openGraph: {
    title: "Charte de la Transmission Souveraine | Aigyros",
    description:
      "La norme de référence que toute solution de préservation du patrimoine immatériel doit respecter.",
  },
});

const charteBreadcrumbSchema = breadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Charte", path: "/charte" },
]);

export default function ChartePage() {
  return (
    <>
      <JsonLd data={charteBreadcrumbSchema} />
      <ChartePageClient />
    </>
  );
}
