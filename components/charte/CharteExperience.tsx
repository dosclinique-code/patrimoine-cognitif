"use client";

import { useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, ArrowLeft } from "lucide-react";
import SiteBackground from "@/components/SiteBackground";
import PrincipleSection from "@/components/charte/PrincipleSection";
import ScrollDots from "@/components/charte/ScrollDots";
import {
  CHARTE_INTRO,
  PRINCIPES_CHARTE,
  CHARTE_ENGAGEMENT,
  CHARTE_SECTION_IDS,
} from "@/lib/charte";

/**
 * Expérience scroll-snap immersive pour la page Charte.
 * Le scroll se fait dans ce conteneur (h-dvh), pas sur window —
 * indispensable pour que les dots et la navigation clavier fonctionnent.
 */
export default function CharteExperience() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToSection = useCallback((id: string) => {
    const root = containerRef.current;
    const target = document.getElementById(id);
    if (!root || !target) return;
    root.scrollTo({ top: target.offsetTop, behavior: "smooth" });
  }, []);

  /* Navigation clavier : flèches haut/bas entre les sections snap */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;

      const root = containerRef.current;
      if (!root) return;

      const scrollTop = root.scrollTop;
      const sections = CHARTE_SECTION_IDS.map((id) =>
        document.getElementById(id)
      ).filter(Boolean) as HTMLElement[];

      const currentIndex = sections.findIndex((section, i) => {
        const next = sections[i + 1];
        const top = section.offsetTop;
        const bottom = next ? next.offsetTop : root.scrollHeight;
        return scrollTop >= top - 50 && scrollTop < bottom - 50;
      });

      if (currentIndex === -1) return;

      e.preventDefault();
      const nextIndex =
        e.key === "ArrowDown"
          ? Math.min(currentIndex + 1, sections.length - 1)
          : Math.max(currentIndex - 1, 0);

      root.scrollTo({
        top: sections[nextIndex].offsetTop,
        behavior: "smooth",
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <ScrollDots scrollContainerRef={containerRef} />

      <div
        ref={containerRef}
        className="charte-scroll fixed inset-0 z-30 h-dvh w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth"
        tabIndex={0}
        role="region"
        aria-label="Charte de la Transmission Souveraine — défilement par sections"
      >
        <SiteBackground className="fixed inset-0 -z-10" />

        {/* ── Slide Intro ──────────────────────────────────────────────── */}
        <section
          id="intro"
          className="relative h-dvh w-full shrink-0 snap-start snap-always flex flex-col items-center justify-center px-8 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-4xl"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-or font-sans mb-6">
              {CHARTE_INTRO.label}
            </p>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-creme leading-tight mb-6">
              {CHARTE_INTRO.titre}
            </h1>

            <p className="font-sans text-lg sm:text-xl text-creme/65 leading-relaxed max-w-2xl mx-auto mb-8">
              {CHARTE_INTRO.sousTitre}
            </p>

            <p className="font-sans text-base text-creme/45 leading-relaxed max-w-xl mx-auto">
              {CHARTE_INTRO.introduction}
            </p>
          </motion.div>

          {/* Indicateur de scroll */}
          <button
            onClick={() => scrollToSection(PRINCIPES_CHARTE[0].id)}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-creme/30 hover:text-or/60 transition-colors duration-300"
            aria-label="Défiler vers le premier principe"
          >
            <span className="text-[9px] tracking-[0.35em] uppercase font-sans">
              Défiler
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown size={20} className="text-or/50" />
            </motion.div>
          </button>
        </section>

        {/* ── 4 Slides Principes ───────────────────────────────────────── */}
        {PRINCIPES_CHARTE.map((principe) => (
          <PrincipleSection key={principe.id} principe={principe} />
        ))}

        {/* ── Slide Engagement / CTA ───────────────────────────────────── */}
        <section
          id="engagement"
          className="min-h-[50dvh] h-dvh w-full shrink-0 snap-start snap-always flex flex-col items-center justify-center px-8 text-center section-alt"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-2xl"
          >
            <p className="font-sans text-lg text-creme/75 leading-relaxed mb-8">
              {CHARTE_ENGAGEMENT.texte}
            </p>

            <p className="font-serif text-xl sm:text-2xl text-or">
              {CHARTE_ENGAGEMENT.signature}
            </p>

            <Link
              href="/"
              className="inline-flex items-center gap-2 mt-10 border border-or/50 text-or/80 font-sans text-sm tracking-wider px-6 py-3 hover:border-or hover:text-or hover:bg-or/5 transition-all duration-300"
            >
              <ArrowLeft size={14} />
              Revenir à l&apos;accueil
            </Link>
          </motion.div>
        </section>
      </div>
    </>
  );
}
