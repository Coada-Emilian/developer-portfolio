import type { LucideIcon } from 'lucide-react'
import type { ProjectType } from '../../../types/pages/projects/project.types'
import type { ProjectCategory } from '../../../types/pages/projects/projectCategory.types'
import type { ProjectContext } from '../../../types/pages/projects/projectContext.types'
import type { ProjectStatus } from '../../../types/pages/projects/projectStatus.types'
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

  projectType: ProjectType
  context: ProjectContext
  status: ProjectStatus
  period?: string

  featured?: boolean
  github?: string
  video?: string
}
