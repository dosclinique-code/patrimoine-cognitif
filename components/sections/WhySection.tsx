import { Archive, Shield, MessageCircle, type LucideProps } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { POURQUOI } from "@/lib/content";

type IconName = (typeof POURQUOI)[number]["icone"];

const ICON_MAP: Record<IconName, React.ComponentType<LucideProps>> = {
  Archive,
  Shield,
  MessageCircle,
};

export default function WhySection() {
  return (
    <section className="py-24 lg:py-36 section-alt">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Titre */}
        <FadeIn className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-creme">
            L&apos;urgence de la transmission
          </h2>
        </FadeIn>

        {/* 3 cartes */}
        <div className="grid md:grid-cols-3 gap-8">
          {POURQUOI.map((carte, i) => {
            const Icon = ICON_MAP[carte.icone];
            return (
              <FadeIn key={carte.titre} delay={i * 0.12}>
                <div className="card-surface p-8 h-full flex flex-col">
                  <Icon
                    size={44}
                    strokeWidth={1.2}
                    className="text-or mb-6 shrink-0"
                    aria-hidden="true"
                  />
                  <h3 className="font-serif text-xl text-creme mb-4">
                    {carte.titre}
                  </h3>
                  <p className="text-creme/55 leading-relaxed font-sans text-sm flex-1">
                    {carte.texte}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
