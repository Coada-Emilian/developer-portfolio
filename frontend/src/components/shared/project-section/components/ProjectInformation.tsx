import { GithubIcon } from '@dev.icons/react'
import { ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

import type { IProject } from '../../../../@types/interfaces/pages/projects/IProject'

import projectBackground from '../../../../assets/images/project_background.png'

interface ProjectInformationProps {
  project: IProject
}

export default function ProjectInformation({ project }: ProjectInformationProps) {
  const ProjectIcon = project.icon

  return (
    <div
      className="relative flex w-full min-w-0 flex-col gap-5 rounded-xl bg-cover  bg-center p-4 sm:gap-6 sm:p-5 lg:h-96 lg:justify-center lg:gap-8"
      style={{ backgroundImage: `url(${projectBackground})` }}
    >
      {/* Overlay maintains text readability over the background image. */}
      <div className="absolute inset-0 rounded-xl bg-white/60" />

      {/* Project identity */}
      <div className="relative flex min-w-0 items-start gap-3 sm:items-center sm:gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 sm:size-16 lg:size-20">
          {ProjectIcon && <ProjectIcon className="size-6 text-blue-500 sm:size-8 lg:size-12" />}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-sm leading-tight font-extrabold text-text-primary md:text-2xl">
            {project.title}
          </h3>

          <p className="mt-1 text-xs leading-snug font-medium text-text-primary md:hidden">
            {project.description.mobile}
          </p>

          <p className="mt-1 text-sm leading-snug font-medium text-text-primary hidden md:block lg:hidden">
            {project.description.tablet}
          </p>

          <p className="mt-1 hidden text-base leading-snug font-medium text-text-primary lg:block">
            {project.description.desktop}
          </p>
        </div>
      </div>

      {/* Project technologies */}
      <div className="relative flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-lg bg-blue-100/90 px-3 py-1.5 text-xxs font-semibold text-text-primary md:px-4 md:py-2 md:text-sm"
          >
            {technology}
          </span>
        ))}
      </div>

      {/* Project links */}
      <div className="relative flex items-start gap-3 sm:gap-4">
        <Link
          to={`/projects/${project.id}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-900 px-3 py-3 text-xs font-semibold text-white transition hover:bg-blue-800 sm:flex-none sm:px-5 sm:text-base"
        >
          <span>
            Voir<span className="hidden md:inline"> le</span> projet
          </span>
          <ExternalLink className="size-3 shrink-0" />
        </Link>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-blue-900 bg-slate-100 px-3 py-3 text-xs font-semibold text-text-primary transition hover:bg-blue-50 sm:flex-none sm:px-5 sm:text-base"
          >
            <GithubIcon className="size-3 shrink-0" />
            <span>
              <span className="hidden md:inline">Code sur </span>GitHub
            </span>
          </a>
        )}
      </div>
    </div>
  )
}
