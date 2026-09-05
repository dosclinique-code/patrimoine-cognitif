import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { MANIFESTE } from "@/lib/content";

export default function ConceptSection() {
  return (
    <section className="py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Titre */}
        <FadeIn className="mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-creme max-w-xl leading-tight">
            Qu&apos;est-ce que le patrimoine cognitif&nbsp;?
          </h2>
          <p className="mt-4 text-creme/50 font-sans max-w-xl">
            Définition de référence et lien avec le patrimoine immatériel
          </p>
        </FadeIn>

        {/* Grille 2 colonnes */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Colonne gauche — Définition canonique */}
          <FadeIn delay={0.1}>
            <p className="text-lg text-creme/80 leading-relaxed font-sans">
              {MANIFESTE.definitionCanonique}
            </p>
            <p className="mt-6 text-creme/55 leading-relaxed font-sans">
              {MANIFESTE.complement}
            </p>
            <h3 className="mt-10 font-serif text-2xl text-or">
              Patrimoine cognitif et patrimoine immatériel
            </h3>
            <p className="mt-4 text-creme/55 leading-relaxed font-sans">
              {MANIFESTE.lienImmaterial}
            </p>
            <Link
              href="/manifeste"
              className="inline-flex items-center gap-1.5 mt-8 text-or text-sm tracking-wider font-sans underline underline-offset-4 hover:text-or/70 transition-colors duration-300"
            >
              Lire la définition complète
              <ArrowUpRight size={14} />
            </Link>
            <Link
              href="/glossaire"
              className="inline-flex items-center gap-1.5 mt-4 text-creme/45 text-sm tracking-wider font-sans hover:text-or transition-colors duration-300"
            >
              Consulter le glossaire
              <ArrowUpRight size={14} />
            </Link>
          </FadeIn>

          {/* Colonne droite — Citation mise en valeur */}
          <FadeIn delay={0.2} direction="right">
            <div className="h-full flex items-center">
              <figure className="card-surface p-8 md:p-10 w-full">
                <blockquote>
                  <p className="font-serif text-2xl md:text-3xl text-or italic leading-snug">
                    &ldquo;{MANIFESTE.citation}&rdquo;
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-[10px] tracking-[0.25em] text-creme/35 uppercase font-sans">
                  {MANIFESTE.source}
                </figcaption>
              </figure>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
