import Link from "next/link";
import { BookOpen, HelpCircle, Scale, Library, ArrowRight, type LucideProps } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { RESSOURCES } from "@/lib/content";

type IconName = (typeof RESSOURCES)[number]["icone"];

const ICON_MAP: Record<IconName, React.ComponentType<LucideProps>> = {
  BookOpen,
  HelpCircle,
  Scale,
  Library,
};

export default function ResourcesSection() {
  return (
    <section className="py-24 lg:py-36 section-alt">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Titre */}
        <FadeIn className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-creme">
            Ressources
          </h2>
        </FadeIn>

        {/* 3 cartes — liens vers les pages internes */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {RESSOURCES.map((ressource, i) => {
            const Icon = ICON_MAP[ressource.icone];
            return (
              <FadeIn key={ressource.titre} delay={i * 0.12}>
                <Link
                  href={ressource.href}
                  className="group flex flex-col card-surface p-8 h-full hover:-translate-y-1"
                >
                  <Icon
                    size={36}
                    strokeWidth={1.2}
                    className="text-or mb-5 shrink-0"
                    aria-hidden="true"
                  />

                  <h3 className="font-serif text-xl text-creme mb-3">
                    {ressource.titre}
                  </h3>

                  <p className="text-creme/55 leading-relaxed font-sans text-sm flex-1 mb-6">
                    {ressource.description}
                  </p>

                  <span className="inline-flex items-center gap-2 text-or text-xs tracking-wider uppercase font-sans group-hover:gap-3 transition-all duration-300">
                    {ressource.cta}
                    <ArrowRight size={12} />
                  </span>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
