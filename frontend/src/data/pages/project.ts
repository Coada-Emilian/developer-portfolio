import {
  CircleCheck,
  Code2,
  Database,
  FlaskConical,
  Layers3,
  Monitor,
  Server,
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

export const architecture = [
  { title: 'Frontend', detail: 'React', icon: Monitor },
  { title: 'Backend', detail: 'Node.js / Express', icon: Server },
  { title: 'Base de données', detail: 'PostgreSQL', icon: Database },
]

export const dataModel = [
  {
    name: 'Patient',
    fields: ['id (PK)', 'nom', 'prénom', 'dateNaissance'],
  },
  {
    name: 'Rendez-vous',
    fields: ['id (PK)', 'date', 'motif', 'patientId (FK)'],
  },
  {
    name: 'Séance',
    fields: ['id (PK)', 'type', 'compteRendu', 'rendezVousId (FK)'],
  },
]

export const apiEndpoints = [
  { method: 'GET', endpoint: '/api/patients', description: 'Lister les patients' },
  { method: 'POST', endpoint: '/api/appointments', description: 'Créer un rendez-vous' },
  { method: 'GET', endpoint: '/api/sessions', description: 'Consulter les séances' },
]

export const technicalChallenges = [
  {
    title: 'Structurer les composants',
    icon: Layers3,
    challenge:
      'Construire une interface riche et cohérente, avec des composants réutilisables et faciles à maintenir.',
    solution:
      'Mise en place d’une architecture de composants modulaire (React), avec découpage en composants et une organisation claire des dossiers.',
  },
  {
    title: 'Gérer les relations métier',
    icon: Database,
    challenge:
      'Modéliser les liens entre patients, rendez-vous et séances, tout en garantissant la cohérence des données.',
    solution:
      'Conception d’un modèle relationnel adapté, avec des contraintes (PK/FK) et une logique métier centralisée.',
  },
  {
    title: 'Sécuriser les échanges API',
    icon: ShieldCheck,
    challenge:
      'Protéger les endpoints et les données sensibles de l’application (patients, rendez-vous, facturation).',
    solution:
      'Mise en place de l’authentification basée sur JWT, validation des entrées et contrôle d’accès sur les routes de l’API.',
  },
]
