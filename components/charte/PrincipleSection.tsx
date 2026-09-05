"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Feather,
  EyeOff,
  Hourglass,
  type LucideProps,
} from "lucide-react";
import type { PrincipeCharte, PrincipeIcon } from "@/lib/charte";

const ICON_MAP: Record<PrincipeIcon, React.ComponentType<LucideProps>> = {
  ShieldCheck,
  Feather,
  EyeOff,
  Hourglass,
};

interface PrincipleSectionProps {
  principe: PrincipeCharte;
}

/**
 * Slide plein écran pour un principe de la Charte.
 * Numéro en filigrane centré + contenu animé à l'entrée dans le viewport.
 */
export default function PrincipleSection({ principe }: PrincipleSectionProps) {
  const Icon = ICON_MAP[principe.icone];

  return (
    <section
      id={principe.id}
      aria-labelledby={`${principe.id}-title`}
      className="relative h-dvh w-full shrink-0 snap-start snap-always flex flex-col md:flex-row items-center justify-center px-8 md:px-24 overflow-hidden"
    >
      {/* Numéro en filigrane — will-change pour fluidité au scroll */}
      <span
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[12rem] sm:text-[20rem] md:text-[30rem] font-bold text-or opacity-[0.03] pointer-events-none z-0 select-none will-change-transform"
        aria-hidden="true"
      >
        {principe.numero}
      </span>

      {/* Contenu principal */}
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 w-full max-w-4xl"
      >
        <Icon
          size={40}
          strokeWidth={1.2}
          className="text-or mb-6"
          aria-hidden="true"
        />

        <p className="text-xs uppercase tracking-[0.28em] text-or font-sans mb-4">
          {principe.label}
        </p>

        <h2
          id={`${principe.id}-title`}
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-creme mb-6 leading-tight"
        >
          {principe.titre}
        </h2>

        <p className="font-sans text-lg sm:text-xl md:text-2xl italic text-or/90 mb-8 max-w-3xl leading-snug">
          {principe.citation}
        </p>

        <p className="font-sans text-base sm:text-lg text-creme/75 leading-relaxed max-w-2xl">
          {principe.texte}
        </p>
      </motion.div>
    </section>
  );
}
