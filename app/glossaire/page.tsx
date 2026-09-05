import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import JsonLd from "@/components/seo/JsonLd";
import { GLOSSAIRE } from "@/lib/glossaire";
import {
  buildPageMetadata,
  breadcrumbSchema,
  definedTermSetSchema,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("/glossaire", {
  title: "Glossaire du Patrimoine Cognitif & Immatériel",
  description:
    "Définitions de référence : patrimoine cognitif, patrimoine immatériel, testament éthique numérique, transmission souveraine, souveraineté mémorielle et héritage immatériel.",
  openGraph: {
    title: "Glossaire Patrimoine Cognitif & Immatériel | Aigyros",
    description:
      "Les termes essentiels du patrimoine cognitif et de la transmission immatérielles, définis avec rigueur.",
  },
});

const glossaireSchema = definedTermSetSchema(
  GLOSSAIRE.map((entry) => ({
    name: entry.terme,
    description: entry.definition,
  }))
);

const breadcrumb = breadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Glossaire", path: "/glossaire" },
]);

export default function GlossairePage() {
  return (
    <>
      <JsonLd data={glossaireSchema} />
      <JsonLd data={breadcrumb} />
      <div className="min-h-screen pt-28 pb-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16">
          <FadeIn className="mb-14 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.28em] text-or font-sans mb-2">
              Référence terminologique
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-creme leading-tight mb-4">
              Glossaire du patrimoine cognitif &amp; immatériel
            </h1>
            <p className="font-sans text-lg text-creme/65 leading-relaxed">
              Définitions canoniques pour comprendre, structurer et transmettre
              l&apos;héritage immatériel à l&apos;ère numérique.
            </p>
          </FadeIn>

          {/* Sommaire alphabétique */}
          <FadeIn delay={0.05} className="mb-12">
            <nav aria-label="Sommaire du glossaire">
              <ul className="flex flex-wrap gap-2">
                {GLOSSAIRE.map((entry) => (
                  <li key={entry.slug}>
                    <a
                      href={`#${entry.slug}`}
                      className="inline-block text-xs tracking-wider uppercase font-sans text-creme/45 border border-or/15 px-3 py-1.5 rounded-sm hover:text-or hover:border-or/40 transition-colors"
                    >
                      {entry.terme}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </FadeIn>

          {/* Entrées */}
          <dl className="space-y-8">
            {GLOSSAIRE.map((entry, i) => (
              <FadeIn key={entry.slug} delay={0.04 * i}>
                <div
                  id={entry.slug}
                  className="card-surface p-6 md:p-8 scroll-mt-28"
                >
                  <dt className="font-serif text-2xl text-or mb-3">
                    {entry.terme}
                  </dt>
                  <dd className="text-creme/75 font-sans leading-relaxed">
                    {entry.definition}
                    {entry.lien && (
                      <Link
                        href={entry.lien.href}
                        className="inline-flex items-center gap-1 mt-4 text-or text-sm tracking-wider underline underline-offset-4 hover:text-or/70 transition-colors"
                      >
                        {entry.lien.label}
                        <ArrowUpRight size={13} />
                      </Link>
                    )}
                  </dd>
                </div>
              </FadeIn>
            ))}
          </dl>

          <FadeIn delay={0.2} className="mt-16 pt-10 border-t border-or/10">
            <p className="text-creme/45 font-sans text-sm leading-relaxed">
              Ce glossaire s&apos;appuie sur le{" "}
              <Link href="/manifeste" className="text-or/70 hover:text-or underline underline-offset-2">
                Manifeste du Patrimoine Cognitif
              </Link>{" "}
              et la{" "}
              <Link href="/charte" className="text-or/70 hover:text-or underline underline-offset-2">
                Charte de la Transmission Souveraine
              </Link>
              . Pour aller plus loin, consultez les{" "}
              <Link href="/testament-ethique" className="text-or/70 hover:text-or underline underline-offset-2">
                12 questions essentielles
              </Link>
              .
            </p>
          </FadeIn>
        </div>
      </div>
    </>
  );
}
