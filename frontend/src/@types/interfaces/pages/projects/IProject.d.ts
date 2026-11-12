import type { LucideIcon } from 'lucide-react'
import type { ProjectCategory } from '../../../types/pages/projects/projectCategory.types'
import type { ProjectImage } from './IProjectImage'

export interface IProject {
  id: string
  slug: string
  title: string
  icon?: LucideIcon
  description: {
    mobile: string
    tablet: string
    desktop: string
  }
  categories: ProjectCategory[]
  technologies: string[]
  media: ProjectImage[]
  featured?: boolean
}
