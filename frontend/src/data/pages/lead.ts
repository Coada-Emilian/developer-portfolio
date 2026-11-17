import { Code2, Layers3, ShieldCheck, Users } from 'lucide-react'
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
