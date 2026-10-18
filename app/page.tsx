import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ConceptSection from "@/components/sections/ConceptSection";
import WhySection from "@/components/sections/WhySection";
import FoundationsSection from "@/components/sections/FoundationsSection";
import ResourcesSection from "@/components/sections/ResourcesSection";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageMetadata, definedTermSchema } from "@/lib/seo";
import { OG_IMAGE_PATH } from "@/lib/site";

const HOME_TITLE = "Patrimoine Cognitif & Immatériel : Manifeste et Charte";
const HOME_DESCRIPTION =
  "La référence francophone du patrimoine cognitif : définitions, manifeste fondateur, charte de transmission et guide du testament éthique numérique.";

export const metadata: Metadata = buildPageMetadata("/", {
  title: { absolute: HOME_TITLE },
  description: HOME_DESCRIPTION,
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [OG_IMAGE_PATH],
  },
});

export default function Home() {
  return (
    <>
      <JsonLd data={definedTermSchema} />
      <HeroSection />
      <ConceptSection />
      <WhySection />
      <FoundationsSection />
      <ResourcesSection />
    </>
  );
}
