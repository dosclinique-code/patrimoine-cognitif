import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { PRINCIPES } from "@/lib/content";

export default function FoundationsSection() {
  return (
    <section className="py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Titre */}
        <FadeIn className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-creme">
            Les 4 principes de la Charte
          </h2>
        </FadeIn>

        {/* Grille 2×2 */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {PRINCIPES.map((principe, i) => (
            <FadeIn key={principe.numero} delay={(i % 2) * 0.12 + Math.floor(i / 2) * 0.08}>
              <article className="card-surface p-8 h-full relative overflow-hidden">
                {/* Numéro en filigrane */}
                <span
                  className="font-serif text-7xl font-bold text-or leading-none select-none absolute top-4 right-6"
                  style={{ opacity: 0.1 }}
                  aria-hidden="true"
                >
                  {principe.numero}
                </span>

                <h3 className="font-serif text-2xl text-creme mb-4 relative">
                  {principe.titre}
                </h3>

                <p className="text-creme/55 leading-relaxed font-sans text-sm relative">
                  {principe.texte}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* CTA vers la Charte complète */}
        <FadeIn delay={0.2} className="flex justify-center mt-16">
          <Link
            href="/charte"
            className={[
              "border border-or text-or font-sans text-sm tracking-[0.18em] uppercase rounded-sm",
              "px-8 py-3.5",
              "hover:bg-or hover:text-noir hover:-translate-y-px",
              "transition-all duration-300",
            ].join(" ")}
          >
            Consulter la Charte complète
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
