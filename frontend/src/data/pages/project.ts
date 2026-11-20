import {
  CircleCheck,
  Code2,
  Database,
  FlaskConical,
  Layers3,
  Monitor,
  ShieldCheck,
  TriangleAlert,
} from 'lucide-react'

export const highlights = [
  {
    icon: Code2,
    title: 'Code source',
    description: 'Un code clair, structuré et versionné sur GitHub, accessible et documenté.',
  },
  {
    icon: Layers3,
    title: 'Architecture',
    description: 'Une architecture modulaire et évolutive, adaptée aux besoins du projet.',
  },
  {
    icon: Database,
    title: 'Données & API',
    description: 'Une API REST robuste et une gestion structurée des données.',
  },
  {
    icon: ShieldCheck,
    title: 'Tests & qualité',
    description:
      'Des tests, des validations et des bonnes pratiques pour un code fiable et maintenable.',
  },
]

export const qualityHighlights = [
  {
    icon: FlaskConical,
    title: 'Tests unitaires',
    description: 'Des tests ciblés sur les fonctions et services clés (logique métier, données).',
  },
  {
    icon: CircleCheck,
    title: 'Validation des données',
    description: 'Des règles de validation côté API (format, champs obligatoires, cohérence).',
  },
  {
    icon: TriangleAlert,
    title: 'Gestion des erreurs',
    description: 'Une gestion centralisée des erreurs, avec des messages clairs et adaptés.',
  },
  {
    icon: Monitor,
    title: 'Vérifications responsive',
    description:
      'Une interface adaptée aux différents écrans (ordinateur, tablette, mobile) pour un usage confortable.',
  },
]
