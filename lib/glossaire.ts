/**
 * Glossaire SEO — définitions canoniques du patrimoine cognitif et immatériel.
 * Source de vérité partagée avec la page /glossaire et les schémas Schema.org.
 */

export type GlossaireEntry = {
  slug: string;
  terme: string;
  definition: string;
  lien?: { label: string; href: string };
};

export const GLOSSAIRE: GlossaireEntry[] = [
  {
    slug: "patrimoine-cognitif",
    terme: "Patrimoine cognitif",
    definition:
      "Ensemble structuré, souverain et perpétuellement interrogeable des connaissances, processus de décision, valeurs et réflexions d'un individu, d'une famille ou d'une institution. Préservé via des systèmes d'intelligence artificielle locaux et sécurisés, il permet aux générations futures d'interroger la synthèse vivante de l'intellect et de l'héritage moral — et non une simple copie de l'individu.",
    lien: { label: "Lire le Manifeste", href: "/manifeste" },
  },
  {
    slug: "patrimoine-immateriel",
    terme: "Patrimoine immatériel",
    definition:
      "Héritage non matériel transmis entre générations : valeurs, récits, savoir-faire, traditions, réflexions morales et spiritualité. Contrairement au patrimoine matériel (biens, immeubles), il ne se transmet pas par un inventaire notarial mais par la mémoire, l'écrit et, aujourd'hui, par des dispositifs numériques souverains.",
  },
  {
    slug: "testament-ethique",
    terme: "Testament éthique",
    definition:
      "Document par lequel une personne transmet à ses descendants ses valeurs, principes moraux, leçons de vie et réflexions personnelles. Contrairement au testament juridique qui répartit des biens matériels, le testament éthique transmet l'immatériel : l'héritage moral et spirituel d'une vie.",
    lien: { label: "12 questions essentielles", href: "/testament-ethique" },
  },
  {
    slug: "testament-ethique-numerique",
    terme: "Testament éthique numérique",
    definition:
      "Forme structurée et souveraine du testament éthique à l'ère numérique. Il combine contenus textuels, enregistrements et métadonnées de transmission, hébergés selon les principes de la Charte de la Transmission Souveraine : confidentialité, inaliénabilité et pérennité.",
    lien: { label: "12 questions essentielles", href: "/testament-ethique" },
  },
  {
    slug: "transmission-souveraine",
    terme: "Transmission souveraine",
    definition:
      "Mode de transmission mémorielle où le constituant ou son mandataire conserve le contrôle exclusif de ses données, sans dépendance aux plateformes cloud mutualisées ni aux lois extraterritoriales. Encadrée par la Charte de la Transmission Souveraine.",
    lien: { label: "Consulter la Charte", href: "/charte" },
  },
  {
    slug: "souverainete-memorielle",
    terme: "Souveraineté mémorielle",
    definition:
      "Capacité d'une personne, d'une famille ou d'une institution à décider qui accède à sa mémoire, comment elle est structurée, conservée et transmise — indépendamment des intérêts commerciaux de tiers ou des juridictions étrangères.",
  },
  {
    slug: "heritage-immateriel",
    terme: "Héritage immatériel",
    definition:
      "Ce qui survit à un individu au-delà de ses biens : sagesse, valeurs, récits fondateurs, décisions structurantes. À l'ère numérique, ne pas structurer cet héritage, c'est le condamner à l'oubli dans des archives dispersées et éphémères.",
  },
  {
    slug: "transmission-intergenerationnelle",
    terme: "Transmission intergénérationnelle",
    definition:
      "Passage des savoirs, valeurs et mémoires d'une génération à la suivante. Le patrimoine cognitif en est la forme active : il permet d'interroger le raisonnement d'un aïeul des décennies après sa disparition.",
  },
  {
    slug: "memoire-numerique",
    terme: "Mémoire numérique",
    definition:
      "Ensemble des traces laissées à l'ère digitale : emails, messages, photos, documents, enregistrements. Sans structuration volontaire, cette mémoire reste chaotique, dispersée et souvent perdue à la disparition de comptes ou de services.",
  },
  {
    slug: "air-gap",
    terme: "Architecture air-gap",
    definition:
      "Dispositif technique où les données mémorielles sont isolées d'Internet ou de réseaux non contrôlés. Principe fondateur n°1 de la Charte : la mémoire d'une lignée ne peut reposer sur des serveurs cloud mutualisés.",
    lien: { label: "Consulter la Charte", href: "/charte" },
  },
];
