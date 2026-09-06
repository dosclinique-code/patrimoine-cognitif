"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.45], [0, -40]);
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-blanc"
    >
      {/* Photo montagnes — droite, fondu vers le blanc */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0 will-change-transform"
        aria-hidden="true"
      >
        <Image
          src="/images/hero-mountains.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #ffffff 0%, #ffffff 35%, rgba(255,255,255,0.85) 55%, rgba(255,255,255,0.3) 80%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, transparent 30%, transparent 70%, rgba(255,255,255,0.6) 100%)",
          }}
        />
      </motion.div>

      {/* Contenu aligné à gauche */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-24"
      >
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-[10px] tracking-[0.35em] text-texte-muted uppercase font-sans mb-8"
        >
          Manifeste fondateur · 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
          className="font-serif text-5xl md:text-6xl lg:text-7xl text-marine leading-[1.08] tracking-tight mb-6 max-w-3xl"
        >
          Préserver l&apos;essentiel.
          <br />
          Transmettre l&apos;éternel.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
          className="text-xl text-texte-muted font-sans leading-relaxed max-w-xl mb-12"
        >
          Le patrimoine cognitif redéfinit la transmission à l&apos;ère
          numérique — valeurs, savoirs et mémoire structurés pour les
          générations futures.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.65, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 items-start"
        >
          <Link
            href="/manifeste"
            className={[
              "group flex items-center gap-2",
              "bg-marine text-blanc font-sans text-sm tracking-[0.08em] uppercase font-medium",
              "px-8 py-3.5 rounded-md",
              "hover:bg-marine-clair hover:-translate-y-px",
              "shadow-[0_4px_20px_rgba(27,45,79,0.18)]",
              "transition-all duration-300",
            ].join(" ")}
          >
            Découvrir le Manifeste
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <Link
            href="/testament-ethique"
            className={[
              "group flex items-center gap-2",
              "text-marine font-sans text-sm tracking-[0.08em] uppercase",
              "px-4 py-3.5",
              "hover:text-marine-clair",
              "transition-all duration-300",
            ].join(" ")}
          >
            Les 12 questions essentielles
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </motion.div>

      {/* Indicateur de scroll — droite, vertical */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-10 pointer-events-none hidden sm:flex"
        aria-hidden="true"
      >
        <motion.div
          style={{ opacity: scrollHintOpacity }}
          className="flex flex-col items-center gap-3"
        >
          <span
            className="text-[9px] tracking-[0.35em] text-texte-leger uppercase font-sans"
            style={{ writingMode: "vertical-rl" }}
          >
            Défiler
          </span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-marine/25 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
