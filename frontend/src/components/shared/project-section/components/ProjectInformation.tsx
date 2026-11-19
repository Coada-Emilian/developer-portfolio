import { GithubIcon } from '@dev.icons/react'
import { ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

import type { IProject } from '../../../../@types/interfaces/pages/projects/IProject'

import projectBackground from '../../../../assets/images/project_background.png'

// Presents a project's identity, technologies and navigation links.
interface ProjectInformationProps {
  project: IProject
}

export default function ProjectInformation({ project }: ProjectInformationProps) {
  const ProjectIcon = project.icon

  return (
    <div
      className="relative flex h-96 flex-col justify-center gap-8 rounded-xl bg-cover bg-center p-5"
      style={{ backgroundImage: `url(${projectBackground})` }}
    >
      {/* Overlay maintains text readability over the background image. */}
      <div className="absolute inset-0 rounded-xl bg-white/60" />

      <div className="relative flex items-center gap-4">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-blue-100">
          {ProjectIcon && <ProjectIcon className="h-14 w-14 text-blue-500" />}
        </div>

        <div>
          <h3 className="text-2xl font-extrabold text-text-primary">{project.title}</h3>

          <p className="mt-1 hidden text-base font-medium text-text-primary md:block">
            {project.description.desktop}
          </p>

          <p className="mt-1 text-sm font-medium text-text-primary md:hidden">
            {project.description.mobile}
          </p>
        </div>
      </div>

      <div className="relative flex flex-wrap gap-3">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-lg bg-blue-100/90 px-4 py-2 text-sm font-semibold text-text-primary"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="relative flex flex-wrap gap-4">
        <Link
          to={`/projects/${project.id}`}
          className="flex items-center gap-2 rounded-xl bg-blue-900 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
        >
          Voir le projet
          <ExternalLink className="h-6 w-6" />
        </Link>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-blue-900 bg-slate-100 px-6 py-3 font-semibold text-text-primary transition hover:bg-blue-50"
          >
            <GithubIcon className="h-6 w-6" />
            Code sur GitHub
          </a>
        )}
      </div>
    </div>
  )
}
