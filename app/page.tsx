import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ConceptSection from "@/components/sections/ConceptSection";
import WhySection from "@/components/sections/WhySection";
import FoundationsSection from "@/components/sections/FoundationsSection";
import ResourcesSection from "@/components/sections/ResourcesSection";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageMetadata, definedTermSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("/", {
  title: {
    absolute:
      "Patrimoine Cognitif & Immatériel | Référence, Manifeste & Testament Éthique",
  },
  description:
    "La référence francophone sur le patrimoine cognitif et le patrimoine immatériel : définitions canoniques, manifeste fondateur, charte de transmission souveraine et guide du testament éthique numérique.",
  openGraph: {
    title:
      "Patrimoine Cognitif & Immatériel | Référence & Expertise | Aigyros",
    description:
      "Structurer, préserver et transmettre l'héritage immatériel à l'ère numérique. Manifeste, charte et ressources d'expertise.",
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
