"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Shield } from "lucide-react";
import type { Question, ContentBlock } from "@/lib/questions";

/* ── Rendu d'un bloc de contenu ─────────────────────────────────────────── */

function renderBlock(block: ContentBlock, idx: number) {
  if (block.type === "paragraph") {
    return (
      <p key={idx} className="text-lg text-creme/80 leading-relaxed font-sans mb-4">
        {block.text}
      </p>
    );
  }

  if (block.type === "list") {
    return (
      <ul key={idx} className="space-y-3 mb-4">
        {block.items.map((item, i) => (
          <li key={i} className="flex gap-3 text-creme/75 font-sans text-base leading-relaxed">
            <span className="text-or mt-1.5 shrink-0 text-xs">◆</span>
            <span>
              {item.label && (
                <strong className="text-creme font-medium">{item.label}&nbsp;: </strong>
              )}
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "steps") {
    return (
      <ol key={idx} className="space-y-4 mb-4">
        {block.items.map((item, i) => (
          <li key={i} className="flex gap-4 font-sans text-base text-creme/75 leading-relaxed">
            <span className="text-or font-bold font-serif text-lg shrink-0 w-5">
              {i + 1}.
            </span>
            <span>
              <strong className="text-creme font-medium">{item.label}&nbsp;: </strong>
              {item.text}
            </span>
          </li>
        ))}
      </ol>
    );
  }

  return null;
}

/* ── Composant AccordionItem ─────────────────────────────────────────────── */

interface AccordionItemProps {
  question: Question;
  defaultOpen?: boolean;
}

export default function AccordionItem({
  question,
  defaultOpen = false,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const headingId = `heading-${question.ancre}`;
  const panelId   = `panel-${question.ancre}`;

  return (
    <article
      id={question.ancre}
      className="scroll-mt-28 border-b border-or/10 last:border-b-0"
    >
      {/* ── En-tête cliquable ──────────────────────────────────────────── */}
      <button
        id={headingId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((v) => !v)}
        className={[
          "w-full flex items-center gap-4 py-6 text-left",
          "hover:bg-or/[0.04] transition-colors duration-200 px-2 -mx-2 rounded-sm",
          "group",
        ].join(" ")}
      >
        {/* Numéro */}
        <span className="text-or font-bold font-serif text-xl shrink-0 w-8 tabular-nums">
          {question.numero}.
        </span>

        {/* Titre de la question */}
        <span className="flex-1 font-serif text-xl md:text-2xl text-creme group-hover:text-or/90 transition-colors duration-200 leading-snug">
          {question.titre}
        </span>

        {/* Chevron animé */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="text-or/50 shrink-0 group-hover:text-or transition-colors duration-200"
          aria-hidden="true"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      {/* ── Contenu animé ─────────────────────────────────────────────── */}
      <motion.div
        id={panelId}
        role="region"
        aria-labelledby={headingId}
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
        style={{ overflow: "hidden" }}
      >
        <div className="pl-12 pr-2 pb-8 pt-1">
          {/* Contenu */}
          {question.contenu.map((block, i) => renderBlock(block, i))}

          {/* Encart "À retenir" */}
          {question.aRetenir && (
            <div className="flex gap-3 bg-gris border-l-4 border-marine p-5 mt-6 rounded-r-lg">
              <Shield
                size={18}
                className="text-or shrink-0 mt-0.5"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-or font-sans mb-2">
                  À retenir
                </p>
                <p className="text-creme/80 font-sans text-sm leading-relaxed">
                  {question.aRetenir}
                </p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </article>
  );
}
