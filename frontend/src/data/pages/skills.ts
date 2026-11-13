import {
  CodeXml,
  Contact,
  Database,
  FlaskConical,
  Layers,
  Monitor,
  Server,
  Users,
} from 'lucide-react'

import {
  _React,
  _Vue,
  Bootstrap,
  Css3,
  Docker,
  Express,
  Figma,
  Git,
  Github,
  Hibernate,
  Html5,
  IntellijIdea,
  Java,
  Javascript,
  Maven,
  Mongodb,
  Nginx,
  Nodejs,
  Postgresql,
  Postman,
  Sequelize,
  Spring,
  TailwindIcon,
  Typescript,
  VisualStudioCode,
  Vite,
} from '@dev.icons/react'

import { SiJunit5, SiKeycloak, SiMongoose } from 'react-icons/si'

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
    { name: 'React', icon: _React },
    { name: 'Vue.js', icon: _Vue },
    { name: 'TypeScript', icon: Typescript },
    { name: 'JavaScript', icon: Javascript },
    { name: 'Vite', icon: Vite },
    { name: 'Tailwind CSS', icon: TailwindIcon },
    { name: 'HTML5', icon: Html5 },
    { name: 'CSS3', icon: Css3 },
    { name: 'Bootstrap', icon: Bootstrap },
  ],
}

// Backend

export const backendSkills = {
  title: 'Backend',
  description: 'Conception et développement d’API robustes et sécurisées.',
  icon: Server,
  technologies: [
    { name: 'Java', icon: Java },
    { name: 'Spring Boot', icon: Spring },
    { name: 'Node.js', icon: Nodejs },
    { name: 'Express.js', icon: Express },
    { name: 'Hibernate', icon: Hibernate },
    { name: 'Maven', icon: Maven },
  ],
}

// Databases

export const databaseSkills = {
  title: 'Bases de données',
  description: 'Gestion, modélisation et utilisation de bases de données.',
  icon: Database,
  technologies: [
    { name: 'PostgreSQL', icon: Postgresql },
    { name: 'MongoDB', icon: Mongodb },
    { name: 'Sequelize', icon: Sequelize },
    { name: 'Mongoose', icon: SiMongoose },
  ],
}

// Tools & Environment

export const toolsSkills = {
  title: 'Outils & Environnement',
  description: 'Environnement de développement, versioning, conteneurisation et déploiement.',
  icon: CodeXml,
  technologies: [
    { name: 'Git', icon: Git },
    { name: 'GitHub', icon: Github },
    { name: 'IntelliJ IDEA', icon: IntellijIdea },
    { name: 'VS Code', icon: VisualStudioCode },
    { name: 'Docker', icon: Docker },
    { name: 'Nginx', icon: Nginx },
    { name: 'Keycloak', icon: SiKeycloak },
    { name: 'Postman', icon: Postman },
    { name: 'Figma', icon: Figma },
  ],
}

// Testing & Quality

export const testingSkills = {
  title: 'Tests & Qualité',
  description: 'Écriture de tests, validation du comportement et fiabilité du code.',
  icon: FlaskConical,
  technologies: [
    { name: 'JUnit', icon: SiJunit5 },
    { name: 'Mockito', icon: FlaskConical },
  ],
}

// Methodologies & Concepts

export const methodologySkills = {
  title: 'Méthodologies & Concepts',
  description: 'Organisation, conception et bonnes pratiques de développement.',
  icon: Layers,
  technologies: [
    { name: 'Agile / Scrum', icon: null },
    { name: 'Architecture MVC', icon: null },
    { name: 'Microfrontends', icon: null },
    { name: 'Authentification', icon: null },
    { name: 'Conception d’API', icon: null },
    { name: 'Sécurité web', icon: null },
  ],
}
