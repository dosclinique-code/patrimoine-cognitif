import type { Metadata } from "next";
import Link from "next/link";
import { Download, ArrowLeft } from "lucide-react";
import ReadingProgress from "@/components/manifeste/ReadingProgress";
import TableOfContents from "@/components/manifeste/TableOfContents";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageMetadata, articleSchema, breadcrumbSchema } from "@/lib/seo";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = buildPageMetadata("/manifeste", {
  title: "Manifeste du Patrimoine Cognitif & Immatériel",
  description:
    "Document fondateur : définitions canoniques du patrimoine cognitif et du patrimoine immatériel, souveraineté mémorielle et testament éthique numérique — 31 août 2026.",
  openGraph: {
    title: "Manifeste du Patrimoine Cognitif & Immatériel | Aigyros",
    description:
      "Le document de référence qui pose les définitions canoniques du patrimoine cognitif, du patrimoine immatériel et du testament éthique numérique.",
    type: "article",
  },
});

const manifesteArticleSchema = articleSchema({
  headline: "Manifeste pour le Patrimoine Cognitif",
  description:
    "Document fondateur posant les définitions canoniques du patrimoine cognitif et du testament éthique numérique.",
  path: "/manifeste",
  datePublished: "2026-08-31",
});

const manifesteBreadcrumbSchema = breadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Manifeste", path: "/manifeste" },
]);

/* ── Composants typographiques locaux ───────────────────────────────────── */

function SectionTitle({
  id,
  label,
  title,
}: {
  id: string;
  label: string;
  title: string;
}) {
  return (
    <div id={id} className="mt-16 mb-8 scroll-mt-28">
      <p className="text-xs tracking-[0.25em] text-or/60 uppercase font-sans mb-3">
        {label}
      </p>
      <h2 className="font-serif text-3xl md:text-4xl text-creme leading-tight">
        {title}
      </h2>
    </div>
  );
}

function SubTitle({ id, title }: { id: string; title: string }) {
  return (
    <h3
      id={id}
      className="font-serif text-2xl text-or mt-12 mb-5 scroll-mt-28"
    >
      {title}
    </h3>
  );
}

function Blockquote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-2 border-or bg-or/5 pl-6 pr-4 py-5 my-8 rounded-sm">
      <p className="font-serif text-xl text-creme italic leading-relaxed">
        {children}
      </p>
    </blockquote>
  );
}

function Para({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={["text-lg text-creme/80 leading-relaxed font-sans mb-6", className].filter(Boolean).join(" ")}>
      {children}
    </p>
  );
}

/* ── Page ───────────────────────────────────────────────────────────────── */

export default function ManifestePage() {
  return (
    <>
      <JsonLd data={manifesteArticleSchema} />
      <JsonLd data={manifesteBreadcrumbSchema} />
      {/* Barre de progression de lecture (fixed top) */}
      <ReadingProgress />

      {/* Bouton PDF — desktop uniquement, fixed */}
      <div className="hidden lg:block fixed top-24 right-8 z-40">
        <a
          href="#"
          className="flex items-center gap-2 bg-or/10 border border-or/30 text-or text-xs tracking-[0.18em] uppercase font-sans px-4 py-2.5 hover:bg-or/20 transition-colors duration-300"
          aria-label="Télécharger le Manifeste en PDF (prochainement)"
        >
          <Download size={13} />
          Télécharger le PDF
        </a>
      </div>

      <div className="min-h-screen pt-28 pb-28">
        {/* ── En-tête du document ─────────────────────────────────────── */}
        <header className="mx-auto max-w-6xl px-6 lg:px-10 mb-14">
          <p className="text-sm uppercase tracking-[0.28em] text-or font-sans mb-2">
            Manifeste fondateur
          </p>
          <p className="text-sm text-creme/50 font-sans mb-12">
            31 août 2026
          </p>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-creme leading-tight tracking-tight mb-6">
            Manifeste pour le{" "}
            <span className="text-or">Patrimoine Cognitif</span>
          </h1>

          <p className="text-xl text-creme/65 font-sans leading-relaxed max-w-2xl">
            Défense de la transmission et de la souveraineté mémorielle
            à l&apos;ère de l&apos;Intelligence Artificielle
          </p>
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

        {/* ── Contenu + sidebar ────────────────────────────────────────── */}
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="flex gap-14 xl:gap-20 items-start">

            {/* ── Colonne principale ────────────────────────────────────── */}
            <article className="flex-1 min-w-0">

              {/* Sommaire mobile uniquement — la version desktop est dans l'aside */}
              <TableOfContents variant="mobile" />

              {/* ── PRÉAMBULE ─────────────────────────────────────────── */}
              <FadeIn>
                <section id="preambule" className="scroll-mt-28">
                  <h2 className="font-serif text-3xl text-creme mb-8">
                    Préambule
                  </h2>

                  <Para>
                    À l&apos;heure où l&apos;humanité génère des volumes de données
                    sans précédent, nous faisons face à un paradoxe historique :
                    nous laissons des traces, mais nous ne transmettons plus de
                    sens. L&apos;accumulation de fichiers, de messages et de médias
                    numériques constitue une &ldquo;empreinte digitale&rdquo; passive,
                    souvent chaotique et définitivement perdue lors de la
                    disparition de son auteur.
                  </Para>

                  <Para>
                    Face à l&apos;émergence de solutions commerciales qui tentent de
                    monétiser le deuil par l&apos;illusion d&apos;une présence
                    artificielle, il devient urgent de redéfinir les cadres de
                    la transmission. Ce manifeste pose les fondements canoniques
                    de deux concepts majeurs pour les décennies à venir : le{" "}
                    <strong className="text-creme font-semibold">
                      Patrimoine Cognitif
                    </strong>{" "}
                    et le{" "}
                    <strong className="text-creme font-semibold">
                      Testament Éthique Numérique
                    </strong>
                    .
                  </Para>
                </section>
              </FadeIn>

              {/* ── SECTION I ─────────────────────────────────────────── */}
              <FadeIn delay={0.05}>
                <section id="definition-patrimoine" className="scroll-mt-28">
                  <SectionTitle
                    id="definition-patrimoine"
                    label="I. Définition canonique"
                    title="Le Patrimoine Cognitif"
                  />

                  <Para>
                    Le patrimoine cognitif ne doit pas être confondu avec
                    l&apos;archivage numérique classique.
                  </Para>

                  <p className="text-xs tracking-[0.22em] text-or/60 uppercase font-sans mb-3">
                    Définition canonique
                  </p>
                  <Blockquote>
                    Le patrimoine cognitif désigne l&apos;ensemble structuré,
                    souverain et perpétuellement interrogeable des connaissances,
                    des processus de décision, des valeurs et des réflexions
                    d&apos;un individu, d&apos;une famille ou d&apos;une institution. Il est
                    préservé via des systèmes d&apos;intelligence artificielle locaux
                    et sécurisés, permettant aux générations futures
                    d&apos;interroger non pas une &ldquo;copie&rdquo; de l&apos;individu, mais la
                    synthèse vivante de son intellect et de son héritage moral.
                  </Blockquote>

                  <Para>
                    Contrairement aux archives statiques (PDF, photos, vidéos),
                    le patrimoine cognitif est{" "}
                    <em className="text-creme/90">actif et relationnel</em>. Il
                    permet à un descendant, cinquante ans après la disparition
                    d&apos;un aïeul, d&apos;interroger son raisonnement face à une crise
                    économique, sa philosophie face à l&apos;éducation, ou la genèse
                    de ses choix stratégiques. Le patrimoine cognitif transforme
                    la mémoire subie en sagesse transmissible.
                  </Para>
                </section>
              </FadeIn>

              {/* ── SECTION II ────────────────────────────────────────── */}
              <FadeIn delay={0.05}>
                <section id="definition-testament" className="scroll-mt-28">
                  <SectionTitle
                    id="definition-testament"
                    label="II. Définition canonique"
                    title="Le Testament Éthique Numérique"
                  />

                  <Para>
                    Historiquement, le testament éthique (
                    <em className="text-creme/70">ethical will</em>) est un
                    document spirituel ou moral par lequel un individu transmet
                    ses valeurs, ses leçons de vie et ses bénédictions à sa
                    descendance, en complément de son testament matériel.
                  </Para>

                  <p className="text-xs tracking-[0.22em] text-or/60 uppercase font-sans mb-3">
                    Définition canonique
                  </p>
                  <Blockquote>
                    Le testament éthique numérique est la modélisation
                    interactive des principes moraux, des directives de
                    transmission et des leçons de vie d&apos;un individu. Rendu
                    accessible par une interface d&apos;intelligence artificielle
                    souveraine, il dépasse le simple document textuel pour offrir
                    aux héritiers un guide de réflexion contextuel, respectueux
                    et non intrusif.
                  </Blockquote>

                  <Para>
                    Le testament éthique numérique n&apos;a pas pour vocation de
                    &ldquo;ressusciter&rdquo; un défunt ni de simuler une conversation
                    banale. Il est un phare moral. Il répond aux questions de
                    fond sur les valeurs familiales, l&apos;histoire d&apos;une lignée ou
                    les principes de gestion d&apos;un patrimoine, en respectant la
                    dignité de la transmission.
                  </Para>
                </section>
              </FadeIn>

              {/* ── SECTION III ───────────────────────────────────────── */}
              <FadeIn delay={0.05}>
                <section id="charte" className="scroll-mt-28">
                  <SectionTitle
                    id="charte"
                    label="III. La Charte"
                    title="La Charte de la Transmission Souveraine"
                  />

                  <Para>
                    La constitution d&apos;un patrimoine cognitif exige une rigueur
                    absolue. Toute solution technologique prétendant offrir ce
                    service doit se soumettre à quatre principes fondamentaux,
                    sous peine de trahir la mémoire qu&apos;elle prétend servir.
                  </Para>

                  {/* Principe 1 */}
                  <div id="principe-1" className="scroll-mt-28">
                    <SubTitle
                      id="principe-1"
                      title="1. Le Principe de Souveraineté et d'Air-Gap"
                    />
                    <Para>
                      La mémoire d&apos;une lignée ou d&apos;une institution ne peut être
                      hébergée sur des serveurs cloud mutualisés, soumis aux lois
                      extraterritoriales ou aux failles de sécurité des GAFAM.
                      Le patrimoine cognitif exige une architecture{" "}
                      <em className="text-creme/90">air-gap</em> (déconnectée
                      des réseaux publics) ou un chiffrement de bout en bout
                      dont les clés sont détenues exclusivement par le
                      constituant ou son mandataire de confiance.
                    </Para>
                  </div>

                  {/* Principe 2 */}
                  <div id="principe-2" className="scroll-mt-28">
                    <SubTitle
                      id="principe-2"
                      title="2. Le Principe de Sobriété et de Dignité"
                    />
                    <Para>
                      La transmission n&apos;est pas un divertissement. Elle exige une
                      interface sobre, élégante, dénuée de gamification, de
                      publicités ou de biais émotionnels artificiels. La
                      technologie doit s&apos;effacer devant la gravité du propos.
                      L&apos;intelligence artificielle au service du patrimoine
                      cognitif doit être un outil de clarification, jamais un
                      simulateur d&apos;émotions.
                    </Para>
                  </div>

                  {/* Principe 3 */}
                  <div id="principe-3" className="scroll-mt-28">
                    <SubTitle
                      id="principe-3"
                      title="3. Le Principe de Non-Marchandisation de la Mémoire"
                    />
                    <Para>
                      Les données constituant le patrimoine cognitif sont
                      inaliénables. Elles ne peuvent, en aucun cas, être
                      utilisées pour l&apos;entraînement de modèles d&apos;IA généraux,
                      ni être monétisées, ni être transformées en produit
                      statistique. Le deuil et la mémoire ne sont pas des
                      métriques exploitables.
                    </Para>
                  </div>

                  {/* Principe 4 */}
                  <div id="principe-4" className="scroll-mt-28">
                    <SubTitle
                      id="principe-4"
                      title="4. Le Principe de Pérennité Matérielle"
                    />
                    <Para>
                      Un patrimoine cognitif doit survivre à l&apos;entreprise qui
                      l&apos;héberge. L&apos;architecture technique doit garantir
                      l&apos;exportabilité des données dans des formats ouverts et
                      pérennes, assurant que la mémoire puisse être physiquement
                      transférée et lue par les générations futures,
                      indépendamment de la pérennité commerciale du fournisseur
                      initial.
                    </Para>
                  </div>
                </section>
              </FadeIn>

              {/* ── CONCLUSION ────────────────────────────────────────── */}
              <FadeIn delay={0.05}>
                <section
                  id="conclusion"
                  className="scroll-mt-28 border-t border-or/15 pt-14 mt-16"
                >
                  <h2 className="font-serif text-3xl text-creme mb-8">
                    Conclusion
                  </h2>

                  <Para className="font-serif text-xl italic text-creme/90">
                    Transmettre, ce n&apos;est pas stocker. C&apos;est donner du sens.
                  </Para>

                  <Para>
                    À l&apos;ère de l&apos;intelligence artificielle, la véritable
                    richesse n&apos;est plus dans la capacité à générer du contenu,
                    mais dans la capacité à préserver l&apos;intégrité, la
                    souveraineté et la profondeur de la pensée humaine. Le
                    patrimoine cognitif est le dernier rempart de la transmission
                    authentique.
                  </Para>

                  {/* Signature */}
                  <p className="mt-10 text-sm text-creme/40 font-sans text-right leading-relaxed">
                    Rédigé le 31 août 2026.
                    <br />
                    <span className="text-or/60">
                      Premier signataire et gardien de cette charte&nbsp;: Aigyros.
                    </span>
                  </p>
                </section>
              </FadeIn>

              {/* ── Bouton retour ─────────────────────────────────────── */}
              <div className="mt-16 flex justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 border border-or/40 text-or/70 font-sans text-sm tracking-wider px-6 py-3 hover:border-or hover:text-or transition-all duration-300"
                >
                  <ArrowLeft size={14} />
                  Retour à l&apos;accueil
                </Link>
              </div>
            </article>

            {/* ── Sidebar desktop ───────────────────────────────────────── */}
            <aside className="hidden lg:block w-56 xl:w-64 shrink-0">
              <TableOfContents variant="desktop" />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
