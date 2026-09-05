import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import ReadingProgress from "@/components/manifeste/ReadingProgress";
import QuestionsTOC from "@/components/testament/QuestionsTOC";
import AccordionItem from "@/components/testament/AccordionItem";
import FadeIn from "@/components/ui/FadeIn";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageMetadata, breadcrumbSchema } from "@/lib/seo";
import { QUESTIONS, questionToPlainText } from "@/lib/questions";

/* ── Metadata SEO ───────────────────────────────────────────────────────── */

export const metadata: Metadata = buildPageMetadata("/testament-ethique", {
  title: "Testament Éthique Numérique & Patrimoine Immatériel — 12 Questions",
  description:
    "Guide de référence sur le testament éthique numérique et le patrimoine immatériel : définition, souveraineté, valeur juridique, accès et transmission intergénérationnelle.",
  openGraph: {
    title:
      "12 Questions sur le Testament Éthique & le Patrimoine Immatériel | Aigyros",
    description:
      "Tout comprendre pour préserver et transmettre l'héritage immatériel à l'ère numérique.",
  },
});

/* ── JSON-LD : FAQPage schema.org ───────────────────────────────────────── */

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: QUESTIONS.map((q) => ({
    "@type": "Question",
    name: q.titre,
    acceptedAnswer: {
      "@type": "Answer",
      text: questionToPlainText(q),
    },
  })),
};

const testamentBreadcrumbSchema = breadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Testament Éthique", path: "/testament-ethique" },
]);

/* ── Page ───────────────────────────────────────────────────────────────── */

export default function TestamentEthiquePage() {
  return (
    <>
      {/* Barre de progression (réutilisée depuis /manifeste) */}
      <ReadingProgress />

      {/* JSON-LD FAQPage — Rich Snippets Google (valide dans le body) */}
      <JsonLd data={faqSchema} />
      <JsonLd data={testamentBreadcrumbSchema} />

      <div className="min-h-screen pt-28 pb-28">

        {/* ── En-tête ──────────────────────────────────────────────────── */}
        <header className="mx-auto max-w-6xl px-6 lg:px-10 mb-14">
          <FadeIn>
            <p className="text-sm uppercase tracking-[0.28em] text-or font-sans mb-2">
              Guide essentiel
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-creme leading-tight tracking-tight mb-4">
              12 Questions Essentielles
              <br />
              <span className="text-or">sur le Testament Éthique</span>
            </h1>
            <p className="text-lg text-creme/65 font-sans leading-relaxed max-w-2xl">
              Comprendre, préserver et transmettre l&apos;essentiel à l&apos;ère numérique.
            </p>
          </FadeIn>
        </header>

        {/* Séparateur */}
        <div className="mx-auto max-w-6xl px-6 lg:px-10 mb-14">
          <div
            className="h-px"
            style={{
              background:
                "linear-gradient(90deg, #c5a368 0%, rgba(197,163,104,0.15) 60%, transparent 100%)",
            }}
          />
        </div>

        {/* ── Contenu + Sidebar ────────────────────────────────────────── */}
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="flex gap-14 xl:gap-20 items-start">

            {/* ── Colonne principale ────────────────────────────────────── */}
            <main className="flex-1 min-w-0">

              {/* TOC mobile uniquement — la version desktop est dans l'aside */}
              <QuestionsTOC variant="mobile" />

              {/* ── Accordéon des 12 questions ────────────────────────── */}
              <section aria-label="Questions et réponses sur le testament éthique">
                {QUESTIONS.map((question, i) => (
                  <AccordionItem
                    key={question.ancre}
                    question={question}
                    defaultOpen={i === 0}
                  />
                ))}
              </section>

              {/* ── CTA final ─────────────────────────────────────────── */}
              <FadeIn>
                <div className="mt-16 border-t border-or/10 pt-14 section-alt -mx-6 px-6 lg:-mx-10 lg:px-10 pb-14">
                  <p className="text-xs uppercase tracking-[0.25em] text-or font-sans mb-4">
                    Prochaine étape
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl text-creme mb-4 leading-tight">
                    Prêt à structurer votre transmission&nbsp;?
                  </h2>
                  <p className="text-creme/60 font-sans leading-relaxed max-w-lg mb-8">
                    Découvrez comment Aigyros accompagne les familles et les
                    institutions dans la préservation souveraine de leur
                    patrimoine cognitif.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://aigyros.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-or text-noir font-sans text-sm tracking-[0.12em] uppercase px-8 py-3.5 hover:bg-cuivre hover:-translate-y-px transition-all duration-300"
                    >
                      Découvrir Aigyros
                      <ExternalLink size={13} />
                    </a>
                    <Link
                      href="/manifeste"
                      className="inline-flex items-center gap-2 border border-or/40 text-or/70 font-sans text-sm tracking-[0.12em] uppercase px-8 py-3.5 hover:border-or hover:text-or transition-all duration-300"
                    >
                      Lire le Manifeste
                    </Link>
                  </div>
                </div>
              </FadeIn>

              {/* ── Retour accueil ────────────────────────────────────── */}
              <div className="mt-14 flex justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 border border-or/40 text-or/70 font-sans text-sm tracking-wider px-6 py-3 hover:border-or hover:text-or transition-all duration-300"
                >
                  <ArrowLeft size={14} />
                  Retour à l&apos;accueil
                </Link>
              </div>
            </main>

            {/* ── Sidebar desktop ───────────────────────────────────────── */}
            <aside className="hidden lg:block w-56 xl:w-64 shrink-0">
              <QuestionsTOC variant="desktop" />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
