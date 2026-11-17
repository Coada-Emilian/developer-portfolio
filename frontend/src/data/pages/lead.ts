import {
  Code2,
  Database,
  Layers3,
  Monitor,
  RefreshCw,
  Search,
  Server,
  ShieldCheck,
  Users,
} from 'lucide-react'
import type { IWorkflowStep } from '../../@types/interfaces/pages/lead/IWorkflowStep'
import type { IHighlight } from '../../@types/interfaces/shared/IHighlight'

export const highlights: IHighlight[] = [
  {
    title: 'Code maintenable',
    description:
      'Un code lisible, structuré et documenté pour faciliter l’évolution et le travail en équipe.',
    icon: Code2,
  },
  {
    title: 'Architecture claire',
    description:
      'Des solutions simples et cohérentes, adaptées au besoin et évolutives dans le temps.',
    icon: Layers3,
  },
  {
    title: 'Qualité & tests',
    description:
      'De bonnes pratiques, des tests ciblés et des vérifications régulières pour livrer en confiance.',
    icon: ShieldCheck,
  },
  {
    title: "Esprit d'équipe",
    description: "Une communication transparente, de l'entraide et un sens de l'objectif commun.",
    icon: Users,
  },
]

export const workflowSteps: IWorkflowStep[] = [
  {
    title: 'Comprendre le besoin',
    description:
      'Échanger, clarifier les attentes et identifier les priorités pour cadrer le travail.',
    icon: Search,
  },
  {
    title: 'Concevoir la solution',
    description: 'Proposer une approche simple, cohérente et adaptée au contexte technique.',
    icon: Layers3,
  },
  {
    title: 'Développer & tester',
    description: 'Implémenter de façon itérative, avec des tests et des validations régulières.',
    icon: Code2,
  },
  {
    title: 'Intégrer & améliorer',
    description:
      'Intégrer, recueillir les retours et faire évoluer la solution de manière progressive.',
    icon: RefreshCw,
  },
]

export const environments = [
  {
    title: 'Backend',
    icon: Server,
    technologies: ['Java', 'Spring Boot', 'REST API', 'Node.js', 'Express.js'],
  },
  {
    title: 'Frontend',
    icon: Monitor,
    technologies: ['React', 'Vue.js', 'TypeScript'],
  },
  {
    title: 'Data & outils',
    icon: Database,
    technologies: ['PostgreSQL', 'MongoDB', 'Docker', 'Git'],
  },
]
