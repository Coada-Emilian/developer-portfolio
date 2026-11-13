import type { ElementType } from 'react'
import type { ITechnology } from '../../../interfaces/pages/skills/ITechnology.d.ts'

export interface PageSectionProps {
  title: string
  children: React.ReactNode
}

export interface TechnologyCategoryCardProps {
  title: string
  description: string
  icon: ElementType | null
  technologies: ITechnology[]
}

export interface PersonalSkillCardProps {
  title: string
  description: string
  icon: ElementType
}
