"use client";

import { useEffect, useState, useCallback } from "react";
import { PRINCIPES_CHARTE } from "@/lib/charte";

interface ScrollDotsProps {
  scrollContainerRef: React.RefObject<HTMLElement | null>;
}

/**
 * Navigation par points — 4 bullets correspondant aux 4 principes.
 * IntersectionObserver avec root = conteneur scroll snap (pas la fenêtre).
 */
export default function ScrollDots({ scrollContainerRef }: ScrollDotsProps) {
  const [activeId, setActiveId] = useState<string>(PRINCIPES_CHARTE[0].id);

  useEffect(() => {
    const root = scrollContainerRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { root, threshold: [0.4, 0.6, 0.8] }
    );

    PRINCIPES_CHARTE.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [scrollContainerRef]);

  const scrollTo = useCallback(
    (id: string) => {
      const root = scrollContainerRef.current;
      const target = document.getElementById(id);
      if (!root || !target) return;
      root.scrollTo({ top: target.offsetTop, behavior: "smooth" });
    },
    [scrollContainerRef]
  );

  return (
    <nav
      className="fixed right-6 md:right-8 top-1/2 -translate-y-1/2 z-50 hidden sm:flex flex-col gap-3"
      aria-label="Navigation entre les principes"
    >
      {PRINCIPES_CHARTE.map((p, i) => {
        const isActive = activeId === p.id;
        return (
          <button
            key={p.id}
            onClick={() => scrollTo(p.id)}
            className={[
              "group relative flex items-center justify-center",
              "w-3 h-3 rounded-full transition-all duration-300",
              isActive
                ? "bg-or scale-110"
                : "border border-or/30 hover:border-or/60 bg-transparent",
            ].join(" ")}
            aria-label={`Aller au principe ${p.numero} : ${p.titre}`}
            aria-current={isActive ? "true" : undefined}
          >
            {/* Tooltip au hover (desktop) */}
            <span className="absolute right-5 whitespace-nowrap text-[10px] tracking-wider uppercase text-or/0 group-hover:text-or/70 font-sans transition-colors duration-200 pointer-events-none hidden md:block">
              {String(i + 1).padStart(2, "0")}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
