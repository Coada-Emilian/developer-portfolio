import type { ProjectFiltersProps } from '../../../@types/props/pages/projects/projectsPage.props'
import { filters } from '../../../data/pages/projects'

export default function ProjectFilters({ activeFilter, onFilterChange }: ProjectFiltersProps) {
  return (
    // Project category filters
    <nav
      aria-label="Filtrer les projets"
      className="mx-auto flex flex-wrap gap-2 items-center justify-center md:gap-3 md:w-7/12"
    >
      {filters.map(({ label, icon: Icon }) => {
        const isActive = activeFilter === label

        return (
          <button
            key={label}
            type="button"
            aria-pressed={isActive}
            onClick={() => onFilterChange(label)}
            className={`flex cursor-pointer items-center gap-2 rounded-full border px-3 py-2 text-xxs  font-semibold transition sm:px-4 sm:py-2.5 sm:text-sm ${
              isActive
                ? 'border-blue-600 bg-blue-600 text-white'
                : 'border-blue-200 bg-blue-50 text-slate-800 hover:border-blue-400 hover:bg-blue-100'
            }`}
          >
            <Icon className="size-4 shrink-0 sm:size-5" />
            <span>{label}</span>
          </button>
        )
      })}
    </nav>
  )
}
