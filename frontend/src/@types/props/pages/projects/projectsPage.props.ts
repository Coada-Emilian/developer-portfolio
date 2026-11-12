import type { ProjectFilter } from '../../../types/pages/projects/projectFilter.types'

export interface ProjectFiltersProps {
  activeFilter: ProjectFilter
  onFilterChange: (filter: ProjectFilter) => void
}
