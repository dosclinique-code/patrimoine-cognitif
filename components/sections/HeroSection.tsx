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



  const bgY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const contentOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);

  const contentY       = useTransform(scrollYProgress, [0, 0.45], [0, -40]);

  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);



  return (

    <section

      ref={ref}

      className="relative min-h-screen flex items-center overflow-hidden"

    >

      {/* ── Photo bibliothèque avec parallax ─────────────────────────────── */}

      <motion.div

        style={{ y: bgY }}

        className="absolute inset-0 z-0 will-change-transform scale-105"

        aria-hidden="true"

      >

        <Image

          src="/images/hero-library.jpg"

          alt="Bibliothèque patrimoniale — transmission du patrimoine cognitif et immatériel"

          fill

          priority

          className="object-cover object-center"

          sizes="100vw"

        />



        {/* Overlay vert forêt — fusionne l'image dans la palette */}

        <div className="absolute inset-0 bg-gradient-to-r from-noir/92 via-foret/78 to-foret/45" />

        <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/20 to-noir/50" />



        {/* Halo doré subtil en haut à gauche */}

        <div

          className="absolute inset-0"

          style={{

            background:

              "radial-gradient(ellipse 70% 50% at 15% 25%, rgba(197,163,104,0.07) 0%, transparent 60%)",

          }}

        />

      </motion.div>



      {/* Ligne décorative horizontale */}

      <div

        className="absolute z-10 left-0 right-0 h-px pointer-events-none"

        style={{

          top: "18%",

          background:

            "linear-gradient(90deg, transparent 0%, rgba(197,163,104,0.2) 20%, rgba(197,163,104,0.2) 60%, transparent 100%)",

        }}

        aria-hidden="true"

      />



      {/* ── Contenu aligné à gauche ──────────────────────────────────────── */}

      <motion.div

        style={{ opacity: contentOpacity, y: contentY }}

        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-24"

      >

        {/* Micro-label */}

        <motion.p

          initial={{ opacity: 0, y: 14 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}

          className="text-[10px] tracking-[0.35em] text-or/60 uppercase font-sans mb-8"

        >

          Manifeste fondateur · Référence patrimoine immatériel

        </motion.p>



        {/* Titre H1 */}

        <motion.h1

          initial={{ opacity: 0, y: 32 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.85, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}

          className="font-serif text-5xl md:text-6xl lg:text-7xl text-creme leading-[1.08] tracking-tight mb-6 max-w-3xl"

        >

          Préserver l&apos;essentiel.

          <br />

          <span className="text-or">Transmettre l&apos;éternel.</span>

        </motion.h1>



        {/* Sous-titre */}

        <motion.p

          initial={{ opacity: 0, y: 22 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}

          className="text-xl text-creme/65 font-sans leading-relaxed max-w-xl mb-12"

        >

          Le patrimoine cognitif structure et transmet l&apos;héritage
          immatériel — valeurs, savoirs et mémoire — à l&apos;ère numérique.

        </motion.p>



        {/* CTAs */}

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

              "bg-or text-noir font-sans text-sm tracking-[0.12em] uppercase font-medium",

              "px-8 py-3.5 rounded-sm",

              "hover:bg-cuivre hover:-translate-y-px",

              "shadow-[0_4px_24px_rgba(197,163,104,0.2)]",

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

              "border border-or/45 text-or/80 font-sans text-sm tracking-[0.12em] uppercase",

              "px-8 py-3.5 rounded-sm",

              "hover:border-or/70 hover:text-or hover:bg-or/5",

              "transition-all duration-300 hover:-translate-y-px",

            ].join(" ")}

          >

            Les 12 questions essentielles

          </Link>

        </motion.div>

      </motion.div>



      {/* ── Indicateur de scroll ─────────────────────────────────────────── */}

      <motion.div

        initial={{ opacity: 0 }}

        animate={{ opacity: 1 }}

        transition={{ delay: 1.4, duration: 0.8 }}

        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 pointer-events-none"

        aria-hidden="true"

      >

        <motion.div

          style={{ opacity: scrollHintOpacity }}

          className="flex flex-col items-center gap-2"

        >

          <span className="text-[9px] tracking-[0.35em] text-creme/25 uppercase font-sans">

            Défiler

          </span>

          <motion.div

            animate={{ y: [0, 7, 0] }}

            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}

            className="w-px h-9 bg-gradient-to-b from-or/35 to-transparent"

          />

        </motion.div>

      </motion.div>

    </section>

  );

}

