import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import LegalSection from "@/components/legal/LegalSection";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("/confidentialite", {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et protection des données personnelles (RGPD) du site Patrimoine-Cognitif.fr, initiative Aigyros.",
  robots: { index: true, follow: true },
});

const breadcrumb = breadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Politique de confidentialité", path: "/confidentialite" },
]);

export default function ConfidentialitePage() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <div className="min-h-screen pt-28 pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-16">
          <FadeIn className="mb-14">
            <p className="text-sm uppercase tracking-[0.28em] text-or font-sans mb-2">
              Protection des données
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-creme leading-tight mb-4">
              Politique de confidentialité
            </h1>
            <p className="font-sans text-creme/50 text-sm">
              Conforme au Règlement Général sur la Protection des Données (RGPD)
              · Dernière mise à jour : septembre 2026
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <LegalSection title="Responsable du traitement">
              <p>
                Le responsable du traitement des données collectées via ce site
                est{" "}
                <a
                  href="https://aigyros.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-or hover:text-or/70 underline underline-offset-2"
                >
                  Aigyros
                </a>
                , éditeur de Patrimoine-Cognitif.fr.
              </p>
              <p>
                Contact données personnelles :{" "}
                <Link
                  href="mailto:contact@aigyros.com"
                  className="text-or hover:text-or/70 underline underline-offset-2"
                >
                  contact@aigyros.com
                </Link>
              </p>
            </LegalSection>

            <LegalSection title="Données collectées">
              <p>
                Via le{" "}
                <Link
                  href="/contact"
                  className="text-or hover:text-or/70 underline underline-offset-2"
                >
                  formulaire de contact
                </Link>
                , nous collectons uniquement les données que vous choisissez de
                nous transmettre :
              </p>
              <ul className="list-disc pl-5 space-y-2 marker:text-or/50">
                <li>nom et prénom ;</li>
                <li>adresse e-mail ;</li>
                <li>contenu de votre message ;</li>
                <li>consentement explicite au traitement (case à cocher).</li>
              </ul>
              <p>
                Ce site ne recourt pas à Google Analytics ni à des traceurs
                publicitaires invasifs. Aucune revente de données n&apos;est
                effectuée.
              </p>
            </LegalSection>

            <LegalSection title="Finalités et base légale">
              <p>Les données sont traitées exclusivement pour :</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-or/50">
                <li>répondre à votre demande de contact ;</li>
                <li>
                  vous orienter, le cas échéant, vers un accompagnement Aigyros
                  en matière de patrimoine cognitif ;
                </li>
                <li>assurer le suivi de la relation initiée par votre message.</li>
              </ul>
              <p>
                La base légale du traitement est votre consentement (article 6.1.a
                du RGPD), recueilli via la case à cocher obligatoire du
                formulaire.
              </p>
            </LegalSection>

            <LegalSection title="Durée de conservation">
              <p>
                Les messages de contact sont conservés le temps nécessaire au
                traitement de votre demande, puis archivés ou supprimés au plus
                tard <strong className="text-creme/90">3 ans</strong> après le
                dernier échange, sauf obligation légale contraire.
              </p>
            </LegalSection>

            <LegalSection title="Destinataires et hébergement">
              <p>
                Vos données sont accessibles uniquement aux personnes habilitées
                au sein d&apos;Aigyros chargées du traitement des demandes.
                Elles ne sont ni vendues, ni cédées, ni utilisées pour
                l&apos;entraînement de modèles d&apos;intelligence artificielle
                généralistes.
              </p>
              <p>
                L&apos;hébergement et le traitement s&apos;effectuent en Europe,
                conformément aux principes de souveraineté mémorielle défendus
                sur ce site.
              </p>
            </LegalSection>

            <LegalSection title="Vos droits">
              <p>
                Conformément au RGPD, vous disposez des droits d&apos;accès, de
                rectification, d&apos;effacement, de limitation, d&apos;opposition
                et de portabilité sur vos données personnelles.
              </p>
              <p>
                Pour exercer ces droits, écrivez à{" "}
                <Link
                  href="mailto:contact@aigyros.com"
                  className="text-or hover:text-or/70 underline underline-offset-2"
                >
                  contact@aigyros.com
                </Link>
                . Vous pouvez également introduire une réclamation auprès de la
                CNIL (
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-or hover:text-or/70 underline underline-offset-2"
                >
                  www.cnil.fr
                </a>
                ).
              </p>
            </LegalSection>

            <LegalSection title="Cookies">
              <p>
                Ce site vise une sobriété technique maximale. Seuls des cookies
                strictement nécessaires au fonctionnement du site peuvent être
                déposés (session, préférences). Aucun bandeau cookie n&apos;est
                requis tant qu&apos;aucun traceur non essentiel n&apos;est
                activé.
              </p>
            </LegalSection>

            <LegalSection title="Sécurité">
              <p>
                Aigyros met en œuvre des mesures techniques et organisationnelles
                appropriées pour protéger vos données contre l&apos;accès non
                autorisé, la perte ou la divulgation. Les échanges via le
                formulaire de contact sont transmis de manière sécurisée.
              </p>
            </LegalSection>
          </FadeIn>
        </div>
      </div>
    </>
  );
}
