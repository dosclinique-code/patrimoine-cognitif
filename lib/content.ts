/**
 * Contenu structuré sourcé depuis :
 *   - CONTENT_MANIFESTE.md
 *   - CONTENT_CHARTE.md
 *   - CONTENT_12_QUESTIONS.md
 *
 * Centraliser le contenu ici garantit la cohérence entre les pages
 * et facilite les mises à jour futures.
 */

// ── Manifeste ─────────────────────────────────────────────────────────────

export const MANIFESTE = {
  definitionCanonique: `Le patrimoine cognitif désigne l'ensemble structuré, souverain et perpétuellement interrogeable des connaissances, des processus de décision, des valeurs et des réflexions d'un individu, d'une famille ou d'une institution. Il est préservé via des systèmes d'intelligence artificielle locaux et sécurisés, permettant aux générations futures d'interroger non pas une "copie" de l'individu, mais la synthèse vivante de son intellect et de son héritage moral.`,

  complement: `Contrairement aux archives statiques, le patrimoine cognitif est actif et relationnel. Il permet à un descendant, cinquante ans après la disparition d'un aïeul, d'interroger son raisonnement face à une crise économique, sa philosophie face à l'éducation, ou la genèse de ses choix stratégiques.`,

  lienImmaterial: `Le patrimoine immatériel — valeurs, récits, savoir-faire et héritage moral — trouve dans le patrimoine cognitif sa forme structurée, souveraine et transmissible. L'un définit ce qui mérite d'être conservé ; l'autre en garantit la pérennité et l'interrogation par les générations futures.`,

  citation:
    "Le patrimoine cognitif transforme la mémoire subie en sagesse transmissible.",

  source: "Manifeste du Patrimoine Cognitif — 2026",
} as const;

// ── Section "Pourquoi maintenant ?" ───────────────────────────────────────

export const POURQUOI = [
  {
    titre: "L'urgence de la préservation",
    texte:
      "Nous laissons des traces numériques considérables, mais ces traces sont souvent chaotiques, dispersées et définitivement perdues. Il devient urgent de structurer ce qui mérite d'être transmis, de séparer le bruit du signal fondateur.",
    icone: "Archive",
  },
  {
    titre: "La souveraineté retrouvée",
    texte:
      "La mémoire d'une lignée ne peut être soumise aux lois extraterritoriales. Architecture air-gap, chiffrement militaire, zéro GAFAM — la souveraineté numérique est la condition sine qua non de la liberté mémorielle.",
    icone: "Shield",
  },
  {
    titre: "La transmission vivante",
    texte:
      "Le patrimoine cognitif est actif et relationnel. Il permet à un descendant d'interroger le raisonnement de son aïeul face à une décision économique, sa philosophie de l'éducation, la genèse de ses choix stratégiques.",
    icone: "MessageCircle",
  },
] as const;

// ── Section "Les 4 principes de la Charte" ────────────────────────────────

export const PRINCIPES = [
  {
    numero: "01",
    titre: "Souveraineté et Air-Gap",
    texte:
      "La mémoire d'une lignée ne peut être hébergée sur des serveurs cloud mutualisés. Le patrimoine cognitif exige une architecture air-gap ou un chiffrement de bout en bout dont les clés sont détenues exclusivement par le constituant ou son mandataire de confiance.",
  },
  {
    numero: "02",
    titre: "Sobriété et Dignité",
    texte:
      "La transmission n'est pas un divertissement. L'interface doit être sobre, élégante, dénuée de gamification ou de biais émotionnels. L'intelligence artificielle au service du patrimoine cognitif doit être un outil de clarification, jamais un simulateur d'émotions.",
  },
  {
    numero: "03",
    titre: "Non-Marchandisation de la Mémoire",
    texte:
      "Les données constituant le patrimoine cognitif sont inaliénables. Elles ne peuvent être utilisées pour l'entraînement de modèles d'IA généraux, ni être monétisées. Le deuil et la mémoire ne sont pas des métriques exploitables.",
  },
  {
    numero: "04",
    titre: "Pérennité Matérielle",
    texte:
      "Un patrimoine cognitif doit survivre à l'entreprise qui l'héberge. L'architecture garantit l'exportabilité totale dans des formats ouverts et pérennes, assurant que la mémoire puisse être transmise indépendamment de la pérennité commerciale du fournisseur.",
  },
] as const;

// ── Section "Ressources" ──────────────────────────────────────────────────

export const RESSOURCES = [
  {
    titre: "Manifeste",
    description:
      "Le document fondateur qui pose les définitions canoniques du Patrimoine Cognitif et du Testament Éthique Numérique. La référence pour toute institution sérieuse.",
    icone: "BookOpen",
    href: "/manifeste",
    cta: "Lire le Manifeste",
  },
  {
    titre: "12 Questions",
    description:
      "Tout comprendre sur le testament éthique numérique : définitions, garanties juridiques, fonctionnement et mise en œuvre souveraine.",
    icone: "HelpCircle",
    href: "/testament-ethique",
    cta: "Explorer les questions",
  },
  {
    titre: "Charte Éthique",
    description:
      "Les 4 principes fondateurs de la transmission souveraine. La norme industrielle que tout prestataire prétendant préserver la mémoire humaine doit respecter.",
    icone: "Scale",
    href: "/charte",
    cta: "Consulter la Charte",
  },
  {
    titre: "Glossaire",
    description:
      "Les définitions de référence du patrimoine cognitif et du patrimoine immatériel : testament éthique, transmission souveraine, héritage immatériel.",
    icone: "Library",
    href: "/glossaire",
    cta: "Explorer le glossaire",
  },
] as const;
