import { BadgeCheck, BriefcaseBusiness, CalendarDays, Code2, Info, Layers } from 'lucide-react'

import type { IProject } from '../../../../@types/interfaces/pages/projects/IProject'

interface KeyInformationSectionProps {
  project: IProject
}

export default function KeyInformationSection({ project }: KeyInformationSectionProps) {
  return (
    <section className="relative rounded-xl lg:p-4 lg:w-10/12 flex flex-col gap-2 lg:gap-4">
      {/* Section heading */}
      <div className="relative lg:col-span-2 lg:mt-0 lg:py-2 ">
        <div className="flex items-center gap-2">
          <Info className="size-4 text-blue-500 sm:size-8 lg:size-8" />
          <h3 className="text-sm md:text-base lg:text-xl font-bold text-blue-950">
            {' '}
            Informations clés
          </h3>
        </div>
      </div>

      <div className="space-y-1.5">
        {/* Period */}
        {project.period && (
          <div className="flex items-center gap-2 rounded-lg border border-blue-200 bg-white/60 px-2 py-1.5">
            <CalendarDays className="size-3.5 md:size-4.5 lg:size-5 shrink-0 text-blue-600" />
            <span className="w-16 shrink-0 text-xs md:text-sm font-semibold text-text-primary">
              Période
            </span>
            <span className="text-xxs md:text-xs lg:text-sm text-text-primary">
              {project.period}
            </span>
          </div>
        )}

        {/* Project type */}
        <div className="flex items-center gap-2 rounded-lg border border-blue-200 bg-white/60 px-2 py-1.5">
          <Layers className="size-3.5 md:size-4.5 lg:size-5 shrink-0 text-blue-600" />
          <span className="w-16 shrink-0 text-xs md:text-sm font-semibold text-text-primary">
            Type
          </span>
          <span className="text-xxs md:text-xs lg:text-sm  text-text-primary">
            {project.projectType}
          </span>
        </div>

        {/* Context */}
        <div className="flex items-center gap-2 rounded-lg border border-blue-200 bg-white/60 px-2 py-1.5">
          <BriefcaseBusiness className="size-3.5 md:size-4.5 lg:size-5 shrink-0 text-blue-600" />
          <span className="w-16 shrink-0 text-xs md:text-sm font-semibold text-text-primary">
            Contexte
          </span>
          <span className="text-xxs md:text-xs lg:text-sm text-text-primary">
            {project.context}
          </span>
        </div>

        {/* Status */}
        <div className="flex items-center gap-2 rounded-lg border border-blue-200 bg-white/60 px-2 py-1.5">
          <BadgeCheck className="size-3.5 md:size-4.5 lg:size-5 shrink-0 text-blue-600" />
          <span className="w-16 shrink-0 text-xs md:text-sm font-semibold text-text-primary">
            Statut
          </span>
          <span
            className={`rounded-full px-2 py-0.5 text-xxs md:text-xs lg:text-sm font-semibold ${
              project.status === 'Terminé'
                ? 'bg-green-100 text-green-700'
                : 'bg-blue-100 text-blue-700'
            }`}
          >
            {project.status}
          </span>
        </div>

        {/* Source code */}
        <div className="flex items-center gap-2 rounded-lg border border-blue-200 bg-white/60 px-2 py-1.5">
          <Code2 className="size-3.5 md:size-4.5 lg:size-5 shrink-0 text-blue-600" />
          <span className="w-16 shrink-0 text-xs md:text-sm font-semibold text-text-primary">
            Code
          </span>

          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xxs md:text-xs lg:text-sm font-medium text-text-primary transition hover:text-blue-700 hover:underline"
            >
              Open source (GitHub)
            </a>
          ) : (
            <span className="text-xxs md:text-xs lg:text-sm text-text-primary">Non disponible</span>
          )}
        </div>
      </div>
    </section>
  )
}
