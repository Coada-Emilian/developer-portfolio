import { Code2, GraduationCap, Layers3, Monitor, PanelsTopLeft, Server } from 'lucide-react'
import type { ProjectFilter } from '../../@types/types/pages/projects/projectFilter.types'

export const filters = [
  { label: 'Tous', icon: GraduationCap },
  { label: 'Web', icon: Layers3 },
  { label: 'Full Stack', icon: Code2 },
  { label: 'Backend', icon: Server },
  { label: 'Frontend', icon: Monitor },
  { label: 'Application', icon: PanelsTopLeft },
] satisfies { label: ProjectFilter; icon: typeof Code2 }[]
