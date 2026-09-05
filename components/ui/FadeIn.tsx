"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
  /** Déclencher l'animation une seule fois (true par défaut) */
  once?: boolean;
}

const OFFSETS: Record<Direction, { x: number; y: number }> = {
  up:    { x: 0,   y: 28  },
  down:  { x: 0,   y: -28 },
  left:  { x: -28, y: 0   },
  right: { x: 28,  y: 0   },
  none:  { x: 0,   y: 0   },
};

/**
 * Wrapper réutilisable pour les animations fade-in au scroll.
 * Utilise whileInView de framer-motion pour déclencher à l'entrée du viewport.
 */
export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className,
  once = true,
}: FadeInProps) {
  const { x, y } = OFFSETS[direction];

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.4, 0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
