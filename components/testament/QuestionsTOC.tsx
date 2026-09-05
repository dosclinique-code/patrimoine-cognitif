"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import { QUESTIONS } from "@/lib/questions";

const ANCHORS = QUESTIONS.map((q) => q.ancre);

/**
 * Sommaire des 12 questions avec :
 * - indicateur de progression "Question X/12"
 * - highlight de la question en cours (IntersectionObserver)
 * Utiliser variant="mobile" dans la colonne principale et variant="desktop" dans l'aside.
 */
export default function QuestionsTOC({
  variant = "mobile",
}: {
  variant?: "mobile" | "desktop";
}) {
  const [activeAncre, setActiveAncre] = useState<string>(ANCHORS[0]);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  /* Numéro de la question active (1-based) */
  const activeNum = QUESTIONS.findIndex((q) => q.ancre === activeAncre) + 1;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActiveAncre(visible[0].target.id);
      },
      { rootMargin: "-10% 0% -50% 0%", threshold: 0 }
    );

    ANCHORS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((ancre: string) => {
    const el = document.getElementById(ancre);
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: "smooth" });
    setIsMobileOpen(false);
  }, []);

  const Links = () => (
    <ul role="list" className="space-y-0">
      {QUESTIONS.map((q) => (
        <li key={q.ancre}>
          <button
            onClick={() => scrollTo(q.ancre)}
            className={[
              "flex items-center gap-2.5 w-full text-left py-1.5 text-xs font-sans transition-colors duration-200",
              activeAncre === q.ancre ? "text-or" : "text-creme/35 hover:text-creme/65",
            ].join(" ")}
          >
            <span
              className={[
                "font-bold font-serif shrink-0 text-[0.7rem] tabular-nums w-5",
                activeAncre === q.ancre ? "text-or" : "text-or/30",
              ].join(" ")}
            >
              {q.numero}
            </span>
            <span className="leading-snug line-clamp-2">{q.titreRaccourci}</span>
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
          className="w-full flex items-center justify-between bg-emeraude/50 border border-or/20 px-5 py-3 rounded-t-lg"
          aria-expanded={isMobileOpen}
          aria-label="Ouvrir le sommaire des questions"
        >
          <span className="text-[10px] tracking-[0.28em] uppercase text-or font-sans">
            Question {activeNum}/12
          </span>
          <ChevronDown
            size={14}
            className={`text-or transition-transform duration-200 ${isMobileOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isMobileOpen && (
          <div className="bg-emeraude/50 border border-t-0 border-or/15 px-5 py-4 rounded-b-lg">
            <Links />
          </div>
        )}
      </div>
    );
  }

  return (
    <nav
      className="sticky top-32"
      aria-label="Sommaire des 12 questions"
    >
      <div className="mb-4">
        <p className="text-[10px] uppercase tracking-[0.28em] text-or font-sans">
          Sommaire
        </p>
        <p className="text-[11px] text-creme/35 font-sans mt-1">
          Question{" "}
          <span className="text-or/70 font-medium">{activeNum}</span>
          /12 en cours
        </p>
      </div>

      <div className="h-px w-full bg-or/10 mb-1">
        <div
          className="h-px bg-or/50 transition-all duration-500"
          style={{ width: `${(activeNum / 12) * 100}%` }}
        />
      </div>

      <div className="h-px w-full bg-or/10 mb-4" />

      <Links />
    </nav>
  );
}
