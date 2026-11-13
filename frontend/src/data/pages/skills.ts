// ==========================================
// Imports
// ==========================================

// Lucide icons

import {
  BookOpen,
  BrainCircuit,
  CalendarDays,
  Camera,
  CarFront,
  CircleCheck,
  CirclePlay,
  CodeXml,
  Contact,
  Database,
  FlaskConical,
  Gamepad2,
  IdCard,
  Layers,
  LockKeyhole,
  Monitor,
  Mountain,
  Network,
  RefreshCw,
  Rocket,
  Server,
  ShieldCheck,
  Users,
  Utensils,
  Waypoints,
  Workflow,
} from 'lucide-react'

// Technology icons

import {
  _React,
  _Vue,
  Bootstrap,
  Css3,
  DockerIcon,
  Express,
  Figma,
  GithubIcon,
  GitIcon,
  Hibernate,
  Html5,
  IntellijIdea,
  Java,
  Javascript,
  Maven,
  MongodbIcon,
  Nginx,
  Nodejs,
  Postgresql,
  PostmanIcon,
  Sequelize,
  SpringIcon,
  TailwindIcon,
  TypescriptIcon,
  VisualStudioCode,
  Vite,
} from '@dev.icons/react'

// Additional technology icons

import { SiJunit5, SiKeycloak, SiMongoose } from 'react-icons/si'

// Shared types

import type { ITechnology } from '../../@types/interfaces/pages/skills/ITechnology'
import type { SkillStatus } from '../../@types/types/pages/skills/skillStatus.types'

// ==========================================
// Skills Navigation
// ==========================================

// Links between the different Skills page sections.

export const navigationItems = [
  {
    label: 'Compétences techniques',
    path: '/skills/technical',
    icon: CodeXml,
  },
  {
    label: 'Compétences personnelles',
    path: '/skills/personal',
    icon: Users,
  },
  {
    label: 'Informations complémentaires',
    path: '/skills/complementary',
    icon: Contact,
  },
]

// Titles displayed according to the current route.

export const skillsSections = {
  '/skills/technical': 'Compétences techniques',
  '/skills/personal': 'Compétences personnelles',
  '/skills/complementary': 'Informations complémentaires',
}

// ==========================================
// Technical Skills
// ==========================================

// Frontend technologies.

export const frontendSkills = {
  title: 'Frontend',
  description: 'Développement d’interfaces modernes, réactives et maintenables.',
  icon: Monitor,
  technologies: [
    { name: 'React', icon: _React, status: 'acquired' },
    { name: 'Vue.js', icon: _Vue, status: 'acquired' },
    { name: 'TypeScript', icon: TypescriptIcon, status: 'acquired' },
    { name: 'JavaScript', icon: Javascript, status: 'acquired' },
    { name: 'Vite', icon: Vite, status: 'acquired' },
    { name: 'HTML5', icon: Html5, status: 'acquired' },
    { name: 'CSS3', icon: Css3, status: 'acquired' },
    { name: 'Bootstrap', icon: Bootstrap, status: 'acquired' },
    { name: 'Tailwind CSS', icon: TailwindIcon, status: 'acquired' },
  ] satisfies ITechnology[],
}

// Backend technologies.

export const backendSkills = {
  title: 'Backend',
  description: 'Conception et développement d’API robustes et sécurisées.',
  icon: Server,
  technologies: [
    { name: 'Java', icon: Java, status: 'developing' },
    { name: 'Spring Boot', icon: SpringIcon, status: 'developing' },
    { name: 'Node.js', icon: Nodejs, status: 'acquired' },
    { name: 'Express.js', icon: Express, status: 'acquired' },
    { name: 'Hibernate', icon: Hibernate, status: 'developing' },
    { name: 'Maven', icon: Maven, status: 'developing' },
    { name: 'Sequelize', icon: null, status: 'acquired' },
    { name: 'Spring Data', icon: null, status: 'developing' },
  ] satisfies ITechnology[],
}

// Database technologies

export const databaseSkills = {
  title: 'Bases de données',
  description: 'Gestion, modélisation et utilisation de bases de données.',
  icon: Database,
  technologies: [
    { name: 'PostgreSQL', icon: Postgresql, status: 'acquired' },
    { name: 'MongoDB', icon: MongodbIcon, status: 'developing' },
    { name: 'Sequelize', icon: Sequelize, status: 'acquired' },
    { name: 'Mongoose', icon: SiMongoose, status: 'familiar' },
  ] satisfies ITechnology[],
}

// Tools & Environment technologies

export const toolsSkills = {
  title: 'Outils & Environnement',
  description: 'Environnement de développement, versioning, conteneurisation et déploiement.',
  icon: CodeXml,
  technologies: [
    { name: 'Git', icon: GitIcon, status: 'acquired' },
    { name: 'GitHub', icon: GithubIcon, status: 'acquired' },
    { name: 'IntelliJ IDEA', icon: IntellijIdea, status: 'developing' },
    { name: 'VS Code', icon: VisualStudioCode, status: 'acquired' },
    { name: 'Docker', icon: DockerIcon, status: 'developing' },
    { name: 'Nginx', icon: Nginx, status: 'familiar' },
    { name: 'Keycloak', icon: SiKeycloak, status: 'familiar' },
    { name: 'Postman', icon: PostmanIcon, status: 'acquired' },
    { name: 'Figma', icon: Figma, status: 'acquired' },
  ] satisfies ITechnology[],
}

// Testing & Quality technologies

export const testingSkills = {
  title: 'Tests & Qualité',
  description: 'Écriture de tests, validation du comportement et fiabilité du code.',
  icon: FlaskConical,
  technologies: [
    { name: 'JUnit', icon: SiJunit5, status: 'developing' },
    { name: 'Mockito', icon: FlaskConical, status: 'developing' },
  ] satisfies ITechnology[],
}

// Methodologies & Concepts technologies

export const methodologySkills = {
  title: 'Méthodologies & Concepts',
  description: 'Organisation, conception et bonnes pratiques de développement.',
  icon: Layers,
  technologies: [
    { name: 'Agile / Scrum', icon: Workflow, status: 'acquired' },
    { name: 'Architecture MVC', icon: Layers, status: 'acquired' },
    { name: 'Microfrontends', icon: Network, status: 'familiar' },
    { name: 'Authentification', icon: ShieldCheck, status: 'developing' },
    { name: 'Conception d’API', icon: Waypoints, status: 'acquired' },
    { name: 'Sécurité web', icon: LockKeyhole, status: 'developing' },
  ] satisfies ITechnology[],
}

// All technical categories, used to render the technology cards.

export const technologyCategories = [
  frontendSkills,
  backendSkills,
  databaseSkills,
  toolsSkills,
  testingSkills,
  methodologySkills,
]

// ==========================================
// Skill Status & Proficiency
// ==========================================

// Colours associated with each technology experience level.

export const statusColors: Record<SkillStatus, string> = {
  acquired: 'bg-green-500',
  developing: 'bg-blue-500',
  familiar: 'bg-amber-500',
}

// Labels displayed in the technology status legend.

export const statuses = [
  { label: 'Acquis', color: 'bg-green-500' },
  { label: 'En développement', color: 'bg-blue-500' },
  { label: 'Familiarisé', color: 'bg-amber-500' },
]

// Global proficiency levels displayed alongside the technology cards.

export const globalLevels = [
  { name: 'Développement Backend', level: 'Avancé' },
  { name: 'Développement Frontend', level: 'Avancé' },
  { name: 'Bases de données', level: 'Intermédiaire' },
  { name: 'DevOps & Outils', level: 'Intermédiaire' },
  { name: 'Tests & Qualité', level: 'Intermédiaire' },
]

// Visual widths associated with global proficiency levels.

export const levelWidths = {
  Avancé: 'w-5/6',
  Intermédiaire: 'w-3/5',
}

// Professional strengths displayed in the Skills overview.

export const strengths = [
  'Polyvalence Full Stack',
  'Capacité d’apprentissage rapide',
  'Autonomie et résolution de problèmes',
  'Sens de la qualité et du code maintenable',
  'Collaboration et travail en équipe',
]

// ==========================================
// Training & Learning
// ==========================================

// Training courses grouped by completion status.
// Each course contains its title, provider, progress and status.

export const trainingItems = [
  {
    id: 'completed',
    title: 'Formations terminées',
    description: '7 formations complétées',
    icon: CircleCheck,
    color: 'text-green-600',
    courses: [
      {
        title: 'The Web Developer BootCamp 2024',
        provider: 'Udemy',
        progress: 100,
        status: 'completed',
      },
      {
        title: 'Modern React with Redux',
        provider: 'Udemy',
        progress: 100,
        status: 'completed',
      },
      {
        title: 'Java Basics',
        provider: 'OpenClassrooms',
        progress: 100,
        status: 'completed',
      },
      {
        title: 'Spring Boot Basics',
        provider: 'OpenClassrooms',
        progress: 100,
        status: 'completed',
      },
      {
        title: 'Vue.js Basics',
        provider: 'Grafikart',
        progress: 100,
        status: 'completed',
      },
      {
        title: 'Java Programming Introduction for Beginners',
        provider: 'Udemy',
        progress: 100,
        status: 'completed',
      },
      {
        title: 'Spring Boot 4, Spring 7 & Hibernate for Beginners',
        provider: 'Udemy',
        progress: 100,
        status: 'completed',
      },
    ],
  },
  {
    id: 'in-progress',
    title: 'En cours',
    description: '1 formation en cours',
    icon: CirclePlay,
    color: 'text-blue-600',
    courses: [
      {
        title: 'Full Stack: React and Java Spring Boot - The Developer Guide',
        provider: 'Udemy',
        progress: 3,
        status: 'in-progress',
      },
      {
        title: 'Java Masterclass 2025',
        provider: 'Udemy',
        progress: 31,
        status: 'upcoming',
      },
    ],
  },
  {
    id: 'upcoming',
    title: 'À venir',
    description: '4 formations prévues',
    icon: CalendarDays,
    color: 'text-blue-600',
    courses: [
      {
        title: 'Google Cybersecurity',
        provider: 'Coursera',
        progress: 0,
        status: 'upcoming',
      },
      {
        title: 'Google AI',
        provider: 'Coursera',
        progress: 0,
        status: 'upcoming',
      },
      {
        title: 'Docker Mastery with Kubernetes + Swarm',
        provider: 'Udemy',
        progress: 0,
        status: 'upcoming',
      },
    ],
  },
]

// ==========================================
// Personal Skills
// ==========================================

// Personal qualities and their descriptions.

export const personalSkills = [
  {
    title: 'Esprit d’analyse',
    description: 'Comprendre un besoin, découper un problème et proposer des solutions efficaces.',
    icon: BrainCircuit,
  },
  {
    title: 'Autonomie',
    description:
      'Avancer de manière proactive, prendre des initiatives et gérer mes missions en toute confiance.',
    icon: Rocket,
  },
  {
    title: 'Travail en équipe',
    description: 'Collaborer, partager les connaissances et contribuer à un objectif commun.',
    icon: Users,
  },
  {
    title: 'Adaptabilité',
    description:
      'M’adapter à un nouvel environnement, à des outils ou à des changements de priorités.',
    icon: RefreshCw,
  },
  {
    title: 'Curiosité & apprentissage',
    description:
      'Explorer de nouvelles technologies, me former en continu et élargir mes compétences.',
    icon: BookOpen,
  },
  {
    title: 'Organisation',
    description: 'Prioriser, planifier et tenir mes engagements pour avancer efficacement.',
    icon: CalendarDays,
  },
]

// Principles guiding the way I approach my work.

export const workingPrinciples = [
  'Orienté solution et résolution de problèmes',
  'Communication claire et bienveillante',
  'Rigueur et sens de la qualité',
  'Esprit d’amélioration continue',
  'Ouverture aux retours et aux nouvelles idées',
]

// Contributions I bring to a team.

export const teamContributions = [
  'Une vision globale du produit',
  'De la fiabilité et du suivi',
  'Un état d’esprit constructif',
  'L’envie de faire progresser le projet',
]

// Languages and their proficiency levels.

export const languages = [
  { name: 'Français', country: 'fr', level: 'B2', progress: 70 },
  { name: 'Roumain', country: 'ro', level: 'Natif', progress: 100 },
  { name: 'Anglais', country: 'gb', level: 'C2', progress: 95 },
  { name: 'Norvégien', country: 'no', level: 'A1', progress: 25 },
]

// ==========================================
// Mobility
// ==========================================

export const mobility = {
  icon: CarFront,
  cardIcon: IdCard,
  items: [
    {
      title: 'Permis B',
      description: 'Véhicule personnel',
    },
  ],
}

// ==========================================
// Interests
// ==========================================

export const interests = [
  {
    name: 'Jeux vidéo',
    icon: Gamepad2,
  },
  {
    name: 'Photographie',
    icon: Camera,
  },
  {
    name: 'Randonnée & nature',
    icon: Mountain,
  },
  {
    name: 'Cuisine',
    icon: Utensils,
  },
  {
    name: 'Histoire & mythologie',
    icon: BookOpen,
  },
]

// ==========================================
// Professional Strengths
// ==========================================

export const profileStrengths = [
  'Polyvalence (frontend & backend)',
  'Autonomie et prise d’initiative',
  'Capacité d’adaptation',
  'Sens des responsabilités',
  'Fiabilité et rigueur',
]

// ==========================================
// Education & Qualifications
// ==========================================

// Formal education and professional training.
// Entries are ordered from most recent to oldest.

export const educationItems = [
  {
    id: 'web-development',
    title: 'Titre Professionnel Développeur Web et Web Mobile',
    institution: 'École O’Clock',
    period: 'Mars 2024 – Novembre 2024',
    qualification: 'Titre Professionnel (TP) Niveau 5',
    field: 'Développement Web Full Stack',
    description:
      'Formation intensive en téléprésentiel couvrant la conception de pages web, de ressources numériques et de solutions informatiques.',
    details: [
      'Formation intensive en téléprésentiel',
      'Développement de compétences en développement web full stack',
      'Projet d’apothéose réalisé en équipe',
      'Obtention du titre professionnel en décembre 2024',
    ],
    skills: ['HTML', 'CSS', 'Figma', 'Node.js', 'Express.js', 'React', 'JavaScript', 'PostgreSQL'],
    status: 'completed',
  },
  {
    id: 'bac-prothesiste-dentaire',
    title: 'Baccalauréat Professionnel Prothèse Dentaire',
    institution: 'Académie d’Art Dentaire Isabelle Dutel – Bordeaux',
    period: 'Septembre 2016 – Juin 2017',
    qualification: 'Baccalauréat Professionnel',
    field: 'Technicien en Prothèses Dentaires',
    description:
      'Formation professionnelle en technologie dentaire, avec une spécialisation dans la fabrication et la réparation de prothèses dentaires et d’appareils.',
    details: [
      'Programme intensif en Technologie Dentaire',
      'Spécialisation dans la fabrication et la réparation de prothèses dentaires et d’appareils',
      'Mise en pratique des compétences techniques et manuelles',
      'Obtention du Baccalauréat Professionnel en juillet 2017',
    ],
    skills: ['CAO', 'Technologie Dentaire', 'Gestion du temps', 'Organisation'],
    status: 'completed',
  },
  {
    id: 'bep-prothesiste-dentaire',
    title: 'Brevet d’Études Professionnelles en Prothèse Dentaire',
    institution: 'Académie d’Art Dentaire Isabelle Dutel – Bordeaux',
    period: 'Septembre 2015 – Juin 2016',
    qualification: 'Brevet d’Études Professionnelles',
    field: 'Technicien en Prothèses Dentaires',
    description:
      'Formation fondamentale en anatomie dentaire, techniques de laboratoire et fabrication de prothèses.',
    details: [
      'Acquisition des compétences fondamentales en anatomie dentaire',
      'Techniques de laboratoire et fabrication de prothèses',
      'Première année de formation en Technologie Dentaire',
      'Obtention du Brevet d’Études Professionnelles en juillet 2016',
    ],
    skills: ['Contrôle qualité', 'Précision et minutie', 'Anatomie dentaire', 'CAO'],
    status: 'completed',
  },
  {
    id: 'culinary-qualification',
    title: 'Diplôme de qualification niveau II',
    institution: 'L’école nationale d’excellence Bella Italia – Brăila, Roumanie',
    period: 'Juin 2012 – Décembre 2012',
    qualification: 'Diplôme de qualification niveau II',
    field: 'Cuisinier, Arts culinaires',
    description:
      'Formation de six mois en arts culinaires, associant enseignement pratique et théorique.',
    details: [
      'Formation de 6 mois en arts culinaires',
      'Instruction intensive à la fois pratique et théorique',
      'Développement de compétences en préparation culinaire',
    ],
    skills: ['Créativité', 'Pédagogie culinaire', 'Communication', 'Gestion du temps'],
    status: 'completed',
  },
  {
    id: 'teaching-certificate',
    title: 'Certificat de promotion',
    institution: 'Université « Dunărea de Jos » de Galați, Roumanie',
    period: 'Octobre 2008 – Juin 2011',
    qualification: 'Certificat de promotion',
    field: 'Préparation du personnel didactique',
    description: 'Parcours de préparation pédagogique destiné au personnel enseignant.',
    details: ['Psychologie de l’éducation', 'Pédagogie I et II', 'Didactique de la spécialité'],
    skills: ['Psychologie de l’éducation', 'Pédagogie', 'Didactique'],
    status: 'completed',
  },
  {
    id: 'history-education',
    title: 'Faculté d’Histoire, philosophie et théologie',
    institution: 'Université « Dunărea de Jos » de Galați, Roumanie',
    period: 'Octobre 2008 – Juin 2011',
    qualification: 'Licence en Histoire et Éducation',
    field: 'Histoire et Éducation',
    description:
      'Cursus de trois ans en histoire et éducation, avec des études historiques et pédagogiques approfondies.',
    details: [
      'Cursus de 3 ans en Histoire et Éducation',
      'Études historiques et pédagogiques approfondies',
      'Développement d’une compréhension approfondie des contextes historiques et éducatifs',
    ],
    skills: ['Communication', 'Histoire', 'Compétences analytiques'],
    status: 'completed',
  },
  {
    id: 'natural-sciences',
    title: 'Diplôme de baccalauréat en Sciences Naturelles',
    institution: 'Lycée pédagogique « D. P. Perpessicius » – Brăila, Roumanie',
    period: 'Septembre 2004 – Juin 2008',
    qualification: 'Diplôme de baccalauréat',
    field: 'Sciences naturelles',
    description: 'Formation secondaire de quatre ans en sciences naturelles.',
    details: [
      'Programme de 4 ans en sciences naturelles',
      'Étude des matières scientifiques fondamentales',
      'Acquisition d’une base solide en biologie, chimie, physique et sciences naturelles',
    ],
    skills: ['Esprit critique', 'Résolution de problèmes', 'Chimie', 'Physique', 'Biologie'],
    status: 'completed',
  },
]
