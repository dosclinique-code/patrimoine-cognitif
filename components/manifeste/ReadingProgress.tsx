"use client";

import { motion, useScroll } from "framer-motion";

/**
 * Barre de progression de lecture.
 * Utilise scaleX + transformOrigin pour de meilleures performances GPU
 * (pas de re-layout, uniquement une transformation composite).
 */
export default function ReadingProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "0% 50%",
      }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-or z-[60] pointer-events-none"
      aria-hidden="true"
    />
  );
}
