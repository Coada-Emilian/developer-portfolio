// ==========================================
// Imports
// ==========================================

// Lucide icons

import {
  CalendarDays,
  CircleCheck,
  CirclePlay,
  CodeXml,
  Contact,
  Database,
  FlaskConical,
  Layers,
  LockKeyhole,
  Monitor,
  Network,
  Server,
  ShieldCheck,
  Users,
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
