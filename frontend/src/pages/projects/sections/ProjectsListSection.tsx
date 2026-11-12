import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

import ProjectCard from '../components/ProjectCard'
import ProjectsFilter from '../components/ProjectsFilter'

import type { ProjectFilter } from '../../../@types/types/pages/projects/projectFilter.types'
import { projects } from '../../../data/projects'

const PROJECTS_PER_PAGE = 3

export default function ProjectsListSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('Tous')
  const [currentPage, setCurrentPage] = useState(1)

  // Display all projects or filter by their assigned categories
  const filteredProjects =
    activeFilter === 'Tous'
      ? projects
      : projects.filter((project) => project.categories.includes(activeFilter))

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE)
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE)

  // Reset pagination when changing filters
  const handleFilterChange = (filter: ProjectFilter) => {
    setActiveFilter(filter)
    setCurrentPage(1)
  }

  // Navigate between pages
  const goToPreviousPage = () => {
    setCurrentPage((page) => Math.max(1, page - 1))
  }

  const goToNextPage = () => {
    setCurrentPage((page) => Math.min(totalPages, page + 1))
  }

  return (
    <section className="flex flex-col gap-6 p-4">
      {/* Project category filters */}
      <ProjectsFilter activeFilter={activeFilter} onFilterChange={handleFilterChange} />

      {/* Project cards */}
      <div className="mx-auto flex w-full flex-col gap-4 lg:w-11/12 lg:mb-4">
        {paginatedProjects.map((project) => (
          <div key={project.id}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      {totalPages > 1 && (
        <nav aria-label="Pagination des projets" className="flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            aria-label="Page précédente"
            className="flex size-9 items-center justify-center rounded-full border border-blue-200 text-blue-800 transition hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="size-5" />
          </button>

          {/* Page indicators */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                aria-label={`Page ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
                className={`flex size-9 items-center justify-center rounded-full text-sm font-semibold transition ${
                  currentPage === page
                    ? 'bg-blue-600 text-white'
                    : 'text-blue-800 hover:bg-blue-100'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            aria-label="Page suivante"
            className="flex size-9 items-center justify-center rounded-full border border-blue-200 text-blue-800 transition hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight className="size-5" />
          </button>
        </nav>
      )}
    </section>
  )
}
