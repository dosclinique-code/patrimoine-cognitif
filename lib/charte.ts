/**
 * Contenu structuré sourcé depuis CONTENT_CHARTE.md
 */

export type PrincipeIcon =
  | "ShieldCheck"
  | "Feather"
  | "EyeOff"
  | "Hourglass";

export type PrincipeCharte = {
  numero: string;
  id: string;
  label: string;
  titre: string;
  citation: string;
  texte: string;
  icone: PrincipeIcon;
};

export const CHARTE_INTRO = {
  label: "Nos engagements",
  titre: "La Charte de la Transmission Souveraine",
  sousTitre:
    "Les 4 principes fondateurs que toute solution de patrimoine cognitif doit respecter.",
  introduction:
    "La constitution d'un patrimoine cognitif exige une rigueur absolue. Cette charte établit les standards industriels minimaux que toute solution technologique prétendant préserver la mémoire humaine doit respecter.",
} as const;

export const PRINCIPES_CHARTE: PrincipeCharte[] = [
  {
    numero: "01",
    id: "principe-01",
    label: "Principe 01",
    titre: "Souveraineté et Air-Gap",
    citation:
      "La mémoire d'une lignée ne peut être soumise aux lois extraterritoriales.",
    texte:
      "Le patrimoine cognitif exige une architecture air-gap (déconnectée des réseaux publics) ou un chiffrement de bout en bout dont les clés sont détenues exclusivement par le constituant ou son mandataire de confiance. Aucune donnée sensible ne doit transiter par des serveurs cloud mutualisés soumis aux juridictions étrangères ou aux failles de sécurité des géants du web. La souveraineté numérique est la condition sine qua non de la liberté mémorielle.",
    icone: "ShieldCheck",
  },
  {
    numero: "02",
    id: "principe-02",
    label: "Principe 02",
    titre: "Sobriété et Dignité",
    citation: "La transmission n'est pas un divertissement.",
    texte:
      "L'interface de consultation d'un patrimoine cognitif doit être sobre, élégante, dénuée de gamification, de publicités ou de biais émotionnels artificiels. La technologie doit s'effacer devant la gravité du propos. L'intelligence artificielle au service du patrimoine cognitif doit être un outil de clarification et de synthèse, jamais un simulateur d'émotions ou un chatbot de deuil. Le respect de la dignité du défunt et de ses héritiers prime sur l'expérience utilisateur.",
    icone: "Feather",
  },
  {
    numero: "03",
    id: "principe-03",
    label: "Principe 03",
    titre: "Non-Marchandisation de la Mémoire",
    citation:
      "Le deuil et la mémoire ne sont pas des métriques exploitables.",
    texte:
      "Les données constituant le patrimoine cognitif sont inaliénables. Elles ne peuvent, en aucun cas, être utilisées pour l'entraînement de modèles d'IA généraux (LLM), ni être monétisées, ni être transformées en produit statistique à des fins publicitaires. Le constituant reste l'unique propriétaire de ses données, et celles-ci doivent être détruites à sa demande explicite ou à l'expiration de la période de conservation définie.",
    icone: "EyeOff",
  },
  {
    numero: "04",
    id: "principe-04",
    label: "Principe 04",
    titre: "Pérennité Matérielle",
    citation:
      "Un patrimoine cognitif doit survivre à l'entreprise qui l'héberge.",
    texte:
      "L'architecture technique doit garantir l'exportabilité totale des données dans des formats ouverts, non-propriétaires et pérennes (tels que Markdown, JSON structuré, PDF/A). La mémoire doit pouvoir être physiquement transférée et lue par les générations futures, indépendamment de la pérennité commerciale, financière ou technique du fournisseur initial. La dépendance technologique est l'ennemie de la transmission intergénérationnelle.",
    icone: "Hourglass",
  },
];

export const CHARTE_ENGAGEMENT = {
  texte:
    "En adhérant à cette charte, les signataires s'engagent à placer l'intégrité, la sécurité et la pérennité de la mémoire humaine au-dessus de toute considération de croissance commerciale ou d'optimisation algorithmique.",
  signature: "Premier signataire et gardien de cette charte : Aigyros.",
} as const;

/** IDs des sections navigables (intro + 4 principes + engagement) */
export const CHARTE_SECTION_IDS = [
  "intro",
  ...PRINCIPES_CHARTE.map((p) => p.id),
  "engagement",
] as const;
