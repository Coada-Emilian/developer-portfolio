import type { ElementType } from 'react'
import type { ITechnology } from '../../../interfaces/pages/skills/ITechnology.d.ts'

export interface TechnicalSkillsSectionProps {
  title: string
  children: React.ReactNode
}

export interface TechnologyCategoryCardProps {
  title: string
  description: string
  icon: ElementType | null
  technologies: ITechnology[]
}
