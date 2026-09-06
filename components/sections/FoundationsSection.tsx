import Link from "next/link";
import { Shield, Heart, Ban, HardDrive, type LucideProps } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { PRINCIPES } from "@/lib/content";

const PRINCIPE_ICONS: React.ComponentType<LucideProps>[] = [
  Shield,
  Heart,
  Ban,
  HardDrive,
];

export default function FoundationsSection() {
  return (
    <section className="py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-marine">
            Les 4 principes de la Charte
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-16">
          {PRINCIPES.map((principe, i) => {
            const Icon = PRINCIPE_ICONS[i];
            return (
              <FadeIn key={principe.numero} delay={i * 0.08}>
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-14 h-14 rounded-full border border-bordure flex items-center justify-center">
                    <Icon
                      size={24}
                      strokeWidth={1.2}
                      className="text-marine"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-serif text-base text-marine leading-snug">
                    {principe.titre}
                  </h3>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {PRINCIPES.map((principe, i) => (
            <FadeIn key={principe.numero} delay={i * 0.06}>
              <article className="card-surface p-8 h-full">
                <span
                  className="font-serif text-5xl font-bold text-marine leading-none select-none block mb-4"
                  style={{ opacity: 0.08 }}
                  aria-hidden="true"
                >
                  {principe.numero}
                </span>
                <p className="text-texte-muted leading-relaxed font-sans text-sm">
                  {principe.texte}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2} className="flex justify-center mt-16">
          <Link
            href="/charte"
            className={[
              "border border-marine text-marine font-sans text-sm tracking-[0.12em] uppercase rounded-md",
              "px-8 py-3.5",
              "hover:bg-marine hover:text-blanc hover:-translate-y-px",
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
