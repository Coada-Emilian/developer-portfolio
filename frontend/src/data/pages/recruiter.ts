import {
  _React,
  _Vue,
  DockerIcon,
  Git,
  GithubIcon,
  Java,
  Postgresql,
  SpringIcon,
  TypescriptIcon,
} from '@dev.icons/react'
import { BriefcaseBusiness, Code2, Layers3, Microscope, Target, TrendingUp } from 'lucide-react'

export const highlights = [
  {
    icon: Code2,
    title: 'Développement Full Stack',
    description: 'De la conception au déploiement d’applications web.',
  },
  {
    icon: Layers3,
    title: 'Projets concrets',
    description: 'Des réalisations fonctionnelles et documentées.',
  },
  {
    icon: TrendingUp,
    title: 'En transition vers un poste IT',
    description: 'Formation, pratique et montée en compétences continue.',
  },
  {
    icon: Target,
    title: 'Esprit produit',
    description: 'Solutions utiles, simples et centrées utilisateur.',
  },
]

export const journey = [
  {
    icon: BriefcaseBusiness,
    title: 'Aujourd’hui — Transition vers le développement',
    description:
      'Montée en compétences sur Java / Spring Boot, consolidation du développement front-end (React, Vue.js) et réalisation de projets personnels. Une première immersion professionnelle chez Alltech m’a permis de contribuer à des projets existants au sein d’une équipe de développement.',
  },
  {
    icon: Microscope,
    title: 'Parcours professionnel antérieur',
    description:
      'Plusieurs années d’expérience en prothèse dentaire, ainsi que dans d’autres environnements professionnels. Ces expériences m’ont apporté rigueur, précision, autonomie, sens de l’organisation et capacité à travailler en équipe.',
  },
]

export const experiences = [
  {
    period: 'Septembre 2026',
    duration: '2 semaines',
    title: 'Développeur Web — Immersion professionnelle',
    company: 'Alltech — Niort',
    description:
      'Participation au développement d’une application existante en Java / Spring Boot et Vue.js, au sein d’une équipe de développement.',
    details: [
      'Développement et évolution de fonctionnalités backend et frontend.',
      'Création et évolution d’entités métier et de leurs relations avec PostgreSQL et MongoDB.',
      'Mise en place et utilisation de Keycloak pour la gestion de l’authentification.',
      'Développement et consommation d’API REST.',
      'Environnement de développement avec Docker, Git et IntelliJ IDEA.',
      'Travail sur une architecture microfrontend avec Vite et Module Federation.',
      'Analyse et résolution de problématiques d’intégration inter-applications, notamment CORS et communication frontend/backend.',
      'Collaboration avec l’équipe de développement, participation aux pull requests, branches de test et intégration de fonctionnalités.',
    ],
  },
  {
    period: 'Avril 2025 – Juin 2026',
    duration: '1 an et 3 mois',
    title: 'Prothésiste dentaire',
    company: 'Laboratoire Hamon — Saint-Maurice-la-Clouère',
    description:
      'Réalisation de prothèses dentaires sur mesure pour des cabinets dentaires, en respectant des exigences techniques et esthétiques précises.',
    details: [
      'Préparation et fabrication de dispositifs prothétiques (couronnes, bridges, etc.).',
      'Lecture et interprétation de prescriptions techniques.',
      'Utilisation d’outils et de matériaux spécifiques avec précision.',
      'Contrôle qualité et ajustements selon les retours des praticiens.',
      'Gestion des priorités et respect des délais de production.',
      'Collaboration avec une équipe de techniciens et communication avec les dentistes.',
      'Adaptation aux nouvelles techniques et matériaux.',
    ],
  },
  {
    period: 'Juillet 2017 – Octobre 2023',
    duration: '6 ans et 4 mois',
    title: 'Prothésiste dentaire',
    company: 'Laboratoire Hamon — Saint-Maurice-la-Clouère',
    description:
      'Fabrication et finition de prothèses dentaires, avec un focus sur la qualité, la précision et le respect des délais.',
    details: [
      'Réalisation des différentes étapes de fabrication des prothèses, de la préparation à la finition.',
      'Travail sur différents types de matériaux et adaptation des techniques selon les réalisations.',
      'Préparation et organisation du matériel nécessaire aux différentes étapes de production.',
      'Vérification des pièces réalisées et identification des éventuelles corrections à effectuer.',
      'Participation à l’entretien courant des postes de travail et du matériel technique.',
      'Développement progressif de l’autonomie sur les différentes étapes de fabrication.',
      'Réalisation d’ajustements et de corrections afin d’obtenir une finition conforme aux exigences du laboratoire.',
    ],
  },
  {
    period: 'Mai 2013 – Juin 2015',
    duration: '2 ans et 1 mois',
    title: 'Cuisinier',
    company: 'Le Panier Poitevin — Couhé',
    description:
      'Travail en équipe dans un environnement rythmé, avec gestion des priorités et respect des délais.',
    details: [
      'Préparation et réalisation des plats dans le respect des consignes et des exigences de qualité.',
      'Organisation du travail et préparation des différents éléments nécessaires au service.',
      'Gestion des priorités et adaptation du rythme de travail en fonction de l’activité.',
      'Travail en équipe et coordination avec les différents membres de la cuisine.',
      'Respect des délais et capacité à travailler efficacement dans un environnement rythmé.',
      'Adaptation aux besoins du service et gestion des imprévus.',
    ],
  },
  {
    period: 'Août 2010 – Février 2013',
    duration: '2 ans et 7 mois',
    title: 'Thérapeute ABA',
    company: 'Cabinet Psychologique Turcu — Galați, Roumanie',
    description:
      'Accompagnement d’enfants présentant des troubles du spectre autistique dans le développement de leurs compétences selon la méthode ABA.',
    details: [
      'Mise en œuvre d’activités adaptées aux objectifs définis avec le psychologue référent.',
      'Travail en équipe et coordination avec les autres thérapeutes.',
      'Organisation et préparation des séances en fonction des objectifs individuels de chaque enfant.',
      'Communication régulière avec l’équipe et partage des observations.',
      'Travail en autonomie tout en respectant le cadre et les recommandations du psychologue.',
      'Gestion de situations comportementales difficiles avec calme, patience et maîtrise de soi.',
    ],
  },
]

export const technologies = [
  { name: 'Java', icon: Java },
  { name: 'Spring Boot', icon: SpringIcon },
  { name: 'React', icon: _React },
  { name: 'Vue.js', icon: _Vue },
  { name: 'TypeScript', icon: TypescriptIcon },
  { name: 'PostgreSQL', icon: Postgresql },
  { name: 'Docker', icon: DockerIcon },
  { name: 'Git', icon: Git },
  { name: 'GitHub', icon: GithubIcon },
]

export const learningPoints = [
  'Formation continue : Java, Spring Boot, Vue.js',
  'Approfondissement du frontend : React, TypeScript et écosystème JavaScript',
  'Consolidation des compétences backend : API REST, Spring Data et persistance',
  'Pratique des bases de données relationnelles et NoSQL',
  'Réalisation et évolution régulière de projets personnels',
  'Veille technologique, exploration de nouvelles approches et bonnes pratiques',
  'Approche orientée qualité, maintenabilité et évolution des applications',
]
