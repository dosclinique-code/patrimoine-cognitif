import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { MANIFESTE } from "@/lib/content";

export default function ConceptSection() {
  return (
    <section className="py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn className="mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-marine max-w-xl leading-tight">
            Qu&apos;est-ce que le patrimoine cognitif&nbsp;?
          </h2>
          <p className="mt-4 text-texte-muted font-sans max-w-xl">
            Définition de référence et lien avec le patrimoine immatériel
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <FadeIn delay={0.1}>
            <p className="text-lg text-marine/85 leading-relaxed font-sans">
              {MANIFESTE.definitionCanonique}
            </p>
            <p className="mt-6 text-texte-muted leading-relaxed font-sans">
              {MANIFESTE.complement}
            </p>
            <h3 className="mt-10 font-serif text-2xl text-marine">
              Patrimoine cognitif et patrimoine immatériel
            </h3>
            <p className="mt-4 text-texte-muted leading-relaxed font-sans">
              {MANIFESTE.lienImmaterial}
            </p>
            <Link
              href="/manifeste"
              className="inline-flex items-center gap-1.5 mt-8 text-marine text-sm tracking-wider font-sans underline underline-offset-4 hover:text-marine-clair transition-colors duration-300"
            >
              Lire la définition complète
              <ArrowUpRight size={14} />
            </Link>
            <Link
              href="/glossaire"
              className="inline-flex items-center gap-1.5 mt-4 text-texte-muted text-sm tracking-wider font-sans hover:text-marine transition-colors duration-300"
            >
              Consulter le glossaire
              <ArrowUpRight size={14} />
            </Link>
          </FadeIn>

          <FadeIn delay={0.2} direction="right">
            <div className="h-full flex items-center">
              <figure className="bg-gris rounded-xl p-8 md:p-10 w-full relative">
                <span
                  className="font-serif text-7xl text-marine/10 leading-none absolute top-4 left-6 select-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <blockquote className="relative">
                  <p className="font-serif text-2xl md:text-3xl text-marine italic leading-snug pt-6">
                    &ldquo;{MANIFESTE.citation}&rdquo;
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-[10px] tracking-[0.25em] text-texte-leger uppercase font-sans">
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
