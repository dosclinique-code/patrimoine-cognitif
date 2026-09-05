/**
 * Données structurées sourcées depuis CONTENT_12_QUESTIONS.md
 * Séparées de la logique de rendu pour permettre la réutilisation
 * (page, JSON-LD schema, TOC).
 */

export type ContentParagraph = { type: "paragraph"; text: string };
export type ContentList = {
  type: "list";
  items: Array<{ label?: string; text: string }>;
};
export type ContentSteps = {
  type: "steps";
  items: Array<{ label: string; text: string }>;
};

export type ContentBlock = ContentParagraph | ContentList | ContentSteps;

export type Question = {
  numero: string;   // "01", "02", …
  ancre: string;    // "question-1", "question-2", …
  titre: string;
  titreRaccourci: string; // version courte pour le sommaire
  contenu: ContentBlock[];
  aRetenir?: string;
};

// ── 12 questions — CONTENT_12_QUESTIONS.md ────────────────────────────────

export const QUESTIONS: Question[] = [
  {
    numero: "01",
    ancre: "question-1",
    titre: "Qu'est-ce qu'un testament éthique ?",
    titreRaccourci: "Définition du testament éthique",
    contenu: [
      {
        type: "paragraph",
        text: "Le testament éthique (ou ethical will en anglais) est un document par lequel une personne transmet à ses descendants ou à ses proches ses valeurs, ses principes moraux, ses leçons de vie, ses bénédictions et ses réflexions personnelles. Contrairement au testament juridique qui répartit des biens matériels, le testament éthique transmet l'immatériel : l'héritage moral et spirituel d'une vie.",
      },
      {
        type: "paragraph",
        text: "À l'ère numérique, le testament éthique évolue vers une forme interactive : le testament éthique numérique. Il ne s'agit plus d'un simple document statique, mais d'une modélisation des principes et réflexions d'un individu, accessible via une interface d'intelligence artificielle souveraine.",
      },
    ],
  },
  {
    numero: "02",
    ancre: "question-2",
    titre: "En quoi diffère-t-il d'un testament juridique classique ?",
    titreRaccourci: "Différence avec le testament juridique",
    contenu: [
      {
        type: "paragraph",
        text: "Le testament juridique et le testament éthique sont complémentaires, mais répondent à des besoins fondamentalement différents :",
      },
      {
        type: "list",
        items: [
          {
            label: "Testament Juridique",
            text: "Répartit les biens matériels, a une valeur légale contraignante, se concentre sur le « quoi ».",
          },
          {
            label: "Testament Éthique",
            text: "Transmet les valeurs et leçons de vie, n'a pas de valeur juridique contraignante (valeur morale), se concentre sur le « pourquoi » et le « comment ».",
          },
        ],
      },
    ],
  },
  {
    numero: "03",
    ancre: "question-3",
    titre: "Pourquoi le testament éthique est-il devenu nécessaire à l'ère numérique ?",
    titreRaccourci: "Nécessité à l'ère numérique",
    contenu: [
      {
        type: "paragraph",
        text: "L'ère numérique a profondément transformé la nature de la transmission. Nous laissons aujourd'hui des traces numériques considérables, mais ces traces sont souvent chaotiques, dispersées et définitivement perdues. Le testament éthique numérique répond à trois défis majeurs :",
      },
      {
        type: "list",
        items: [
          {
            label: "Le défi de la préservation",
            text: "Structurer et pérenniser l'essentiel au-delà du bruit numérique.",
          },
          {
            label: "Le défi de la transmission",
            text: "Transmettre non pas des fichiers, mais du sens et de la sagesse.",
          },
          {
            label: "Le défi de la souveraineté",
            text: "Garantir que cette transmission échappe aux GAFAM et aux logiques de monétisation du deuil.",
          },
        ],
      },
    ],
    aRetenir:
      "À l'ère numérique, ne pas structurer sa transmission, c'est condamner son héritage immatériel à l'oubli. Le testament éthique numérique est la réponse souveraine à ce défi générationnel.",
  },
  {
    numero: "04",
    ancre: "question-4",
    titre: "Que contient concrètement un testament éthique numérique ?",
    titreRaccourci: "Contenu concret",
    contenu: [
      {
        type: "list",
        items: [
          {
            label: "Les valeurs fondamentales",
            text: "Principes moraux, convictions profondes, leçons apprises tout au long de la vie.",
          },
          {
            label: "L'histoire familiale et les racines",
            text: "Genèse de la famille, anecdotes fondatrices, figures inspirantes de la lignée.",
          },
          {
            label: "Les directives de transmission",
            text: "Souhaits éducatifs, conseils de gestion patrimoniale, maintien de la cohésion familiale.",
          },
          {
            label: "Les réflexions personnelles",
            text: "Regrets, pardons, gratitudes, messages personnalisés pour chaque bénéficiaire.",
          },
          {
            label: "Le processus de décision",
            text: "Raisonnement stratégique, critères d'arbitrage, erreurs à éviter et enseignements à retenir.",
          },
        ],
      },
    ],
  },
  {
    numero: "05",
    ancre: "question-5",
    titre: "Qui peut bénéficier d'un testament éthique ?",
    titreRaccourci: "Qui peut en bénéficier ?",
    contenu: [
      {
        type: "list",
        items: [
          {
            label: "Les familles et les lignées",
            text: "Parents, familles recomposées ou multiculturelles souhaitant pérenniser leur héritage moral.",
          },
          {
            label: "Les entrepreneurs et les dirigeants",
            text: "Fondateurs, dirigeants de PME familiales et créateurs désireux de transmettre leur vision.",
          },
          {
            label: "Les institutions et les organisations",
            text: "Fondations, associations, institutions culturelles voulant préserver leur mémoire institutionnelle.",
          },
          {
            label: "Les professionnels du patrimoine",
            text: "Notaires, family offices et gestionnaires de patrimoine qui accompagnent leurs clients dans la transmission globale.",
          },
        ],
      },
    ],
  },
  {
    numero: "06",
    ancre: "question-6",
    titre: "Comment est-il préservé dans le temps ?",
    titreRaccourci: "Préservation dans le temps",
    contenu: [
      {
        type: "paragraph",
        text: "La pérennité est l'enjeu central. Un testament éthique numérique souverain doit respecter quatre principes :",
      },
      {
        type: "list",
        items: [
          {
            label: "Indépendance technologique",
            text: "Formats ouverts (PDF/A, Markdown), exportabilité complète sans dépendance à un éditeur.",
          },
          {
            label: "Souveraineté matérielle",
            text: "Infrastructures locales ou privées, zéro cloud mutualisé, hébergement en Europe.",
          },
          {
            label: "Maintenance proactive",
            text: "Audits d'intégrité réguliers, migrations anticipées vers les nouveaux formats pérennes.",
          },
          {
            label: "Redondance contrôlée",
            text: "Copies sécurisées multi-sites, vérification par hash cryptographique de l'intégrité.",
          },
        ],
      },
    ],
  },
  {
    numero: "07",
    ancre: "question-7",
    titre: "Quelles garanties de souveraineté et de confidentialité ?",
    titreRaccourci: "Garanties de souveraineté",
    contenu: [
      {
        type: "list",
        items: [
          {
            label: "Techniques",
            text: "Architecture air-gap, zéro télémétrie externe, chiffrement militaire AES-256.",
          },
          {
            label: "Juridiques",
            text: "Conformité RGPD stricte, cadre juridique européen applicable, inaliénabilité totale des données.",
          },
          {
            label: "Éthiques",
            text: "Non-marchandisation de la mémoire, aucun entraînement de modèle tiers, transparence totale.",
          },
        ],
      },
    ],
    aRetenir:
      "Vos données ne quittent jamais votre périmètre de souveraineté. Aucune télémétrie, aucun entraînement de modèle tiers, aucune monétisation de votre mémoire.",
  },
  {
    numero: "08",
    ancre: "question-8",
    titre: "Peut-il avoir une valeur juridique ?",
    titreRaccourci: "Valeur juridique",
    contenu: [
      {
        type: "paragraph",
        text: "Le testament éthique n'a pas de valeur juridique contraignante. Cependant, il peut avoir une valeur indirecte significative :",
      },
      {
        type: "list",
        items: [
          {
            label: "Élément de preuve",
            text: "Éclaire les intentions du défunt en cas de contestation successorale.",
          },
          {
            label: "Directive morale",
            text: "Inspire notaires et juges, guide les médiateurs familiaux.",
          },
          {
            label: "Complément testamentaire",
            text: "Explicite les motivations profondes derrière les dispositions juridiques formelles.",
          },
        ],
      },
    ],
  },
  {
    numero: "09",
    ancre: "question-9",
    titre: "Comment s'articule-t-il avec le testament matériel ?",
    titreRaccourci: "Articulation avec le testament matériel",
    contenu: [
      {
        type: "paragraph",
        text: "Ils sont deux facettes complémentaires et indissociables. Le testament éthique explique le « pourquoi » là où le testament juridique décrit le « quoi ». Il prévient les conflits en clarifiant les intentions du constituant, et accompagne les héritiers dans l'utilisation responsable du patrimoine transmis.",
      },
      {
        type: "paragraph",
        text: "Il doit être coordonné avec les notaires et les family offices dès la phase de planification successorale, pour garantir une cohérence totale entre transmission matérielle et transmission morale.",
      },
    ],
  },
  {
    numero: "10",
    ancre: "question-10",
    titre: "Qui peut y accéder après le décès ?",
    titreRaccourci: "Accès après le décès",
    contenu: [
      {
        type: "paragraph",
        text: "L'accès doit être soigneusement préparé du vivant du constituant :",
      },
      {
        type: "list",
        items: [
          {
            label: "Bénéficiaires",
            text: "Désignés librement par le constituant, avec des niveaux d'accès différenciés selon la sensibilité des contenus.",
          },
          {
            label: "Mandataire",
            text: "Notaire ou proche de confiance chargé de gérer et d'activer l'accès au moment approprié.",
          },
          {
            label: "Modalités d'accès",
            text: "Interface sécurisée, protocoles stricts de vérification d'identité des bénéficiaires.",
          },
          {
            label: "Transmission des clés",
            text: "Coffre-fort numérique ou protocole de transmission anticipée, incluant un mécanisme de déclenchement automatique.",
          },
        ],
      },
    ],
  },
  {
    numero: "11",
    ancre: "question-11",
    titre: "Peut-on le modifier ou le mettre à jour ?",
    titreRaccourci: "Modifications et mises à jour",
    contenu: [
      {
        type: "paragraph",
        text: "Oui — c'est même l'une de ses forces essentielles. Le testament éthique numérique est un document vivant, conçu pour évoluer avec son auteur :",
      },
      {
        type: "list",
        items: [
          {
            label: "Mises à jour libres",
            text: "Événements de vie, évolutions personnelles, changements de contexte familial.",
          },
          {
            label: "Fréquence recommandée",
            text: "Révision légère annuelle conseillée, mise à jour structurelle complète tous les 5 ans.",
          },
          {
            label: "Traçabilité intégrale",
            text: "Historique complet des versions horodatées, avec possibilité de consulter les versions antérieures.",
          },
        ],
      },
    ],
  },
  {
    numero: "12",
    ancre: "question-12",
    titre: "Comment initier la rédaction d'un testament éthique ?",
    titreRaccourci: "Comment initier la démarche",
    contenu: [
      {
        type: "steps",
        items: [
          {
            label: "Réflexion personnelle",
            text: "Identifier ses valeurs fondamentales, les leçons de vie essentielles, les messages à transmettre.",
          },
          {
            label: "Choix de l'accompagnement",
            text: "Sélectionner un professionnel spécialisé et une solution technologique souveraine.",
          },
          {
            label: "Structuration du contenu",
            text: "Organiser par thématiques, intégrer documents, photos et médias significatifs.",
          },
          {
            label: "Sécurisation et transmission",
            text: "Désigner bénéficiaires et mandataire, sécuriser les clés d'accès et planifier la transmission.",
          },
          {
            label: "Maintenance régulière",
            text: "Mettre en place des révisions périodiques et vérifier régulièrement l'intégrité technique.",
          },
        ],
      },
    ],
    aRetenir:
      "Commencez simplement par une liste de vos valeurs les plus importantes. La démarche s'affine progressivement, avec l'accompagnement d'un professionnel spécialisé en transmission mémorielle souveraine.",
  },
];

// ── Helper : génère le texte brut d'une question pour le JSON-LD ──────────

export function questionToPlainText(q: Question): string {
  return q.contenu
    .flatMap((block) => {
      if (block.type === "paragraph") return [block.text];
      if (block.type === "list" || block.type === "steps") {
        return block.items.map((item) =>
          item.label ? `${item.label} : ${item.text}` : item.text
        );
      }
      return [];
    })
    .join(" ");
}
