import { Code2, GitBranch, Layers3, Workflow } from 'lucide-react'
import type { IHighlight } from '../../@types/interfaces/shared/IHighlight'

export const highlights: IHighlight[] = [
  {
    title: 'Technologies & outils',
    description:
      'React, Vue.js, TypeScript, Java, Spring Boot, Node.js et les outils utilisés pour concevoir des applications.',
    icon: Code2,
  },
  {
    title: 'Architecture & conception',
    description:
      'Structuration des applications, conception des API REST et modélisation des données pour des solutions cohérentes et évolutives.',
    icon: Layers3,
  },
  {
    title: 'Développement Full Stack',
    description:
      'Du frontend au backend, de la création d’interfaces utilisateur à la gestion des données et de la logique métier.',
    icon: Workflow,
  },
  {
    title: 'Projets & expérimentation',
    description:
      'Des applications concrètes pour mettre en pratique de nouvelles technologies, relever des défis techniques et progresser.',
    icon: GitBranch,
  },
]
