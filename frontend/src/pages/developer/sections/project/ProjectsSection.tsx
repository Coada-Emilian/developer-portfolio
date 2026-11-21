import { useState } from 'react'

import type { ProjectFilter } from '../../../../@types/types/pages/projects/projectFilter.types'
import ProjectFilterSection from '../../../../components/shared/ProjectsFilter'
import SectionHeading from '../../../../components/shared/SectionHeading'
import { projects } from '../../../../data/projects'
import ProjectCard from '../project/components/ProjectCard'

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('Tous')

  const filteredProjects =
    activeFilter === 'Tous'
      ? projects
      : projects.filter((project) => project.categories.includes(activeFilter))

  return (
    <section id="projects" className="w-full bg-slate-50/70">
      <div className="flex w-full flex-col gap-4 sm:gap-5">
        {/* Section heading */}
        <div className="flex flex-col gap-1">
          <SectionHeading title="Mes projets" underline />

          <p className="text-xs leading-relaxed text-slate-600 md:text-sm lg:text-base">
            Une sélection de mes projets, du développement d’applications métier aux projets
            personnels, avec le détail des technologies utilisées.
          </p>
        </div>

        {/* Project filters */}
        <div className="flex justify-center">
          <ProjectFilterSection activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        </div>

        {/* Projects grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="py-10 text-center text-sm text-slate-500">
            Aucun projet ne correspond à cette catégorie.
          </p>
        )}
      </div>
    </section>
  )
}
