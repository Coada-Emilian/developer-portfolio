import {
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

import { SiJunit5, SiKeycloak, SiMongoose } from 'react-icons/si'
import type { ITechnology } from '../../@types/interfaces/pages/skills/ITechnology'
import type { SkillStatus } from '../../@types/types/pages/skills/skillStatus.types'

// Navigation between Skills pages

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

// Skills page section titles

export const skillsSections = {
  '/skills/technical': 'Compétences techniques',
  '/skills/personal': 'Compétences personnelles',
  '/skills/complementary': 'Informations complémentaires',
}

// Frontend

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

// Backend

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

// Databases

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

// Tools & Environment

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

// Testing & Quality

export const testingSkills = {
  title: 'Tests & Qualité',
  description: 'Écriture de tests, validation du comportement et fiabilité du code.',
  icon: FlaskConical,
  technologies: [
    { name: 'JUnit', icon: SiJunit5, status: 'developing' },
    { name: 'Mockito', icon: FlaskConical, status: 'developing' },
  ] satisfies ITechnology[],
}

// Methodologies & Concepts

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

export const statusColors: Record<SkillStatus, string> = {
  acquired: 'bg-green-500',
  developing: 'bg-blue-500',
  familiar: 'bg-amber-500',
}
