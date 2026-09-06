"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronDown } from "lucide-react";

type Section = {
  readonly id: string;
  readonly label: string;
  readonly sub: boolean;
};

const SECTIONS: Section[] = [
  { id: "preambule",            label: "Préambule",                         sub: false },
  { id: "definition-patrimoine", label: "I. Le Patrimoine Cognitif",        sub: false },
  { id: "definition-testament",  label: "II. Le Testament Éthique Numérique", sub: false },
  { id: "charte",               label: "III. La Charte de la Transmission", sub: false },
  { id: "principe-1",           label: "1. Souveraineté et Air-Gap",        sub: true  },
  { id: "principe-2",           label: "2. Sobriété et Dignité",            sub: true  },
  { id: "principe-3",           label: "3. Non-Marchandisation",            sub: true  },
  { id: "principe-4",           label: "4. Pérennité Matérielle",           sub: true  },
  { id: "conclusion",           label: "Conclusion",                        sub: false },
];

/**
 * Sommaire avec détection automatique de la section active via IntersectionObserver.
 * Utiliser variant="mobile" dans la colonne principale et variant="desktop" dans l'aside
 * pour éviter le double rendu qui provoque la superposition avec le texte.
 */
export default function TableOfContents({
  variant = "mobile",
}: {
  variant?: "mobile" | "desktop";
}) {
  const [activeId, setActiveId] = useState<string>("preambule");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  /* IntersectionObserver : détecte la section la plus haute dans le viewport */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      /* Déclenchement quand l'élément entre dans la zone 10–50% du viewport */
      { rootMargin: "-10% 0% -50% 0%", threshold: 0 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* Scroll smooth avec offset pour la navbar fixe (h-20 = 80px + marge) */
  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top, behavior: "smooth" });
    setIsMobileOpen(false);
  }, []);

  /* Liens partagés desktop/mobile */
  const Links = () => (
    <ul role="list" className="space-y-0.5">
      {SECTIONS.map(({ id, label, sub }) => (
        <li key={id}>
          <button
            onClick={() => scrollTo(id)}
            className={[
              "block w-full text-left py-2 text-sm font-sans transition-colors duration-200",
              sub ? "pl-4 text-[0.8rem]" : "",
              activeId === id
                ? "text-or"
                : "text-creme/35 hover:text-creme/65",
            ].join(" ")}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );

  if (variant === "mobile") {
    return (
      <div className="lg:hidden mb-10">
        <button
          onClick={() => setIsMobileOpen((v) => !v)}
          className="w-full flex items-center justify-between bg-gris border border-bordure px-5 py-3 rounded-t-lg"
          aria-expanded={isMobileOpen}
          aria-label="Ouvrir le sommaire"
        >
          <span className="text-[10px] tracking-[0.28em] uppercase text-or font-sans">
            Sommaire
          </span>
          <ChevronDown
            size={14}
            className={`text-or transition-transform duration-200 ${
              isMobileOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isMobileOpen && (
          <div className="bg-gris border border-t-0 border-bordure px-5 py-4 rounded-b-lg">
            <Links />
          </div>
        )}
      </div>
    );
  }

  return (
    <nav
      className="sticky top-32"
      aria-label="Sommaire du Manifeste"
    >
      <p className="text-[10px] uppercase tracking-[0.28em] text-or mb-5 font-sans">
        Sommaire
      </p>
      <div className="h-px w-full bg-or/15 mb-5" />
      <Links />
    </nav>
  );
}
