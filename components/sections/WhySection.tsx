import { Brain, Scale, Share2, type LucideProps } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { POURQUOI } from "@/lib/content";

type IconName = (typeof POURQUOI)[number]["icone"];

const ICON_MAP: Record<IconName, React.ComponentType<LucideProps>> = {
  Brain,
  Scale,
  Share2,
};

export default function WhySection() {
  return (
    <section className="py-24 lg:py-36 section-alt">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-marine">
            L&apos;urgence de la transmission
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {POURQUOI.map((carte, i) => {
            const Icon = ICON_MAP[carte.icone];
            return (
              <FadeIn key={carte.titre} delay={i * 0.12}>
                <div className="text-center md:text-left">
                  <Icon
                    size={40}
                    strokeWidth={1.2}
                    className="text-marine mb-6 mx-auto md:mx-0 shrink-0"
                    aria-hidden="true"
                  />
                  <h3 className="font-serif text-xl text-marine mb-4">
                    {carte.titre}
                  </h3>
                  <p className="text-texte-muted leading-relaxed font-sans text-sm">
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
