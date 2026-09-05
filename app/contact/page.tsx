import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Lock } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import ContactForm from "@/components/contact/ContactForm";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("/contact", {
  title: { absolute: "Contact Expert Patrimoine Cognitif & Immatériel" },
  description:
    "Échangez en toute confidentialité avec l'équipe Aigyros pour structurer votre patrimoine cognitif et votre transmission immatérielle. Hébergement souverain en Europe.",
  openGraph: {
    title: "Contact Expert Patrimoine Cognitif | Aigyros",
    description:
      "Patrimoine-Cognitif.fr est la référence Aigyros dédiée à la souveraineté mémorielle et au patrimoine immatériel.",
  },
});

const contactBreadcrumbSchema = breadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Contact", path: "/contact" },
]);

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactBreadcrumbSchema} />
      <div className="min-h-screen pt-28 pb-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16">

        {/* ── En-tête ──────────────────────────────────────────────────── */}
        <FadeIn className="mb-16 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.28em] text-or font-sans mb-2">
            Prise de contact
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-creme leading-tight mb-4">
            Échanger en toute confidentialité
          </h1>
          <p className="font-sans text-lg text-creme/65 leading-relaxed">
            Patrimoine-Cognitif.fr est une initiative d&apos;Aigyros, dédiée à
            la souveraineté mémorielle.
          </p>
        </FadeIn>

        {/* ── 2 colonnes — formulaire en premier sur mobile ─────────────── */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Colonne gauche : informations (2e sur mobile) */}
          <FadeIn delay={0.1} className="order-2 lg:order-1">
            <div className="lg:sticky lg:top-32 space-y-10">
              <p className="font-sans text-base text-creme/75 leading-relaxed">
                Nous accompagnons les familles, les institutions et les
                prescripteurs dans la structuration de leur transmission. Chaque
                échange est traité avec la plus stricte confidentialité.
              </p>

              {/* Bloc Siège */}
              <div className="flex gap-4">
                <MapPin
                  size={22}
                  strokeWidth={1.3}
                  className="text-or shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-serif text-lg text-creme mb-1">
                    Europe
                  </p>
                  <p className="font-sans text-sm text-creme/45 leading-relaxed">
                    Opérations et hébergement souverain en Europe.
                  </p>
                </div>
              </div>

              {/* Bloc Sécurité */}
              <div className="flex gap-4">
                <Lock
                  size={22}
                  strokeWidth={1.3}
                  className="text-or shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-serif text-lg text-creme mb-1">
                    Confidentialité absolue
                  </p>
                  <p className="font-sans text-sm text-creme/45 leading-relaxed">
                    Vos données de contact ne sont jamais partagées, vendues
                    ou utilisées à des fins de prospection.
                  </p>
                </div>
              </div>

              {/* Lien Aigyros */}
              <p className="text-xs tracking-wider text-creme/30 font-sans pt-4 border-t border-or/10">
                Initiative portée par{" "}
                <a
                  href="https://aigyros.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-or/60 hover:text-or transition-colors"
                >
                  Aigyros
                </a>
                {" "}— Premier signataire et gardien de la Charte de la
                Transmission Souveraine.
              </p>
            </div>
          </FadeIn>

          {/* Colonne droite : formulaire (1er sur mobile) */}
          <FadeIn delay={0.05} className="order-1 lg:order-2">
            <div className="card-surface p-6 md:p-8">
              <ContactForm />
            </div>

            <p className="text-sm text-creme/45 font-sans mt-8 text-center leading-relaxed">
              Pour une urgence ou une demande spécifique, vous pouvez également
              nous écrire directement à :{" "}
              <Link
                href="mailto:contact@aigyros.com"
                className="text-or/70 hover:text-or transition-colors underline underline-offset-2"
              >
                contact@aigyros.com
              </Link>
            </p>
          </FadeIn>
        </div>
      </div>
    </div>
    </>
  );
}
