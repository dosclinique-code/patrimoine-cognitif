import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import LegalSection from "@/components/legal/LegalSection";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("/mentions-legales", {
  title: "Mentions légales",
  description:
    "Mentions légales du site Patrimoine-Cognitif.fr, initiative d'Aigyros dédiée au patrimoine cognitif et au patrimoine immatériel.",
  robots: { index: true, follow: true },
});

const breadcrumb = breadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Mentions légales", path: "/mentions-legales" },
]);

export default function MentionsLegalesPage() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <div className="min-h-screen pt-28 pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-16">
          <FadeIn className="mb-14">
            <p className="text-sm uppercase tracking-[0.28em] text-or font-sans mb-2">
              Informations légales
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-creme leading-tight mb-4">
              Mentions légales
            </h1>
            <p className="font-sans text-creme/50 text-sm">
              Dernière mise à jour : septembre 2026
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <LegalSection title="Éditeur du site">
              <p>
                Le site{" "}
                <strong className="text-creme/90">Patrimoine-Cognitif.fr</strong>{" "}
                est édité par{" "}
                <a
                  href="https://aigyros.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-or hover:text-or/70 underline underline-offset-2"
                >
                  Aigyros
                </a>
                , initiative dédiée à la souveraineté mémorielle, au patrimoine
                cognitif et à la transmission du patrimoine immatériel.
              </p>
              <p>
                Contact :{" "}
                <Link
                  href="mailto:contact@aigyros.com"
                  className="text-or hover:text-or/70 underline underline-offset-2"
                >
                  contact@aigyros.com
                </Link>
              </p>
            </LegalSection>

            <LegalSection title="Directeur de la publication">
              <p>
                Le directeur de la publication est le représentant légal
                d&apos;Aigyros, responsable du contenu éditorial publié sur ce
                site (manifeste, charte, glossaire et ressources associées).
              </p>
            </LegalSection>

            <LegalSection title="Hébergement">
              <p>
                Le site est hébergé en Europe, conformément aux exigences de
                souveraineté numérique portées par la Charte de la Transmission
                Souveraine. Les données de contact transmises via le formulaire
                sont traitées dans le respect du RGPD (voir{" "}
                <Link
                  href="/confidentialite"
                  className="text-or hover:text-or/70 underline underline-offset-2"
                >
                  politique de confidentialité
                </Link>
                ).
              </p>
            </LegalSection>

            <LegalSection title="Propriété intellectuelle">
              <p>
                L&apos;ensemble des contenus de ce site (textes, charte graphique,
                manifeste, définitions du glossaire, structure éditoriale) est
                protégé par le droit d&apos;auteur. Toute reproduction,
                représentation ou diffusion, totale ou partielle, sans
                autorisation écrite préalable d&apos;Aigyros est interdite.
              </p>
              <p>
                Les citations courtes à des fins d&apos;information, avec mention
                explicite de la source et un lien vers la page d&apos;origine,
                sont autorisées.
              </p>
            </LegalSection>

            <LegalSection title="Limitation de responsabilité">
              <p>
                Les contenus publiés sur Patrimoine-Cognitif.fr ont une vocation
                éditoriale et de référence conceptuelle. Ils ne constituent ni
                un conseil juridique, ni un conseil patrimonial personnalisé.
                Aigyros ne saurait être tenue responsable de l&apos;usage qui en
                serait fait sans accompagnement professionnel adapté.
              </p>
              <p>
                Aigyros s&apos;efforce d&apos;assurer l&apos;exactitude des
                informations diffusées ; toutefois, des erreurs ou omissions
                peuvent subsister. L&apos;utilisateur est invité à signaler toute
                inexactitude à{" "}
                <Link
                  href="mailto:contact@aigyros.com"
                  className="text-or hover:text-or/70 underline underline-offset-2"
                >
                  contact@aigyros.com
                </Link>
                .
              </p>
            </LegalSection>

            <LegalSection title="Liens hypertextes">
              <p>
                Ce site peut contenir des liens vers des sites tiers (notamment
                aigyros.com). Aigyros n&apos;exerce aucun contrôle sur ces sites
                et décline toute responsabilité quant à leur contenu.
              </p>
            </LegalSection>
          </FadeIn>
        </div>
      </div>
    </>
  );
}
