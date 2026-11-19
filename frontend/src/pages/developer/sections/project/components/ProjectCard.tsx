import { GithubIcon } from '@dev.icons/react'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import type { IProject } from '../../../../../@types/interfaces/pages/projects/IProject'

interface ProjectCardProps {
  project: IProject
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [activeImage, setActiveImage] = useState(0)

  const ProjectIcon = project.icon
  const previewImage = project.media[activeImage]
  const hasMultipleImages = project.media.length > 1

  const showPreviousImage = () => {
    setActiveImage((current) => (current === 0 ? project.media.length - 1 : current - 1))
  }

  const showNextImage = () => {
    setActiveImage((current) => (current === project.media.length - 1 ? 0 : current + 1))
  }

  return (
    <article className="group flex h-full min-w-0 flex-col gap-2 rounded-xl border border-slate-200 bg-white  shadow-sm transition-shadow duration-200 hover:shadow-md">
      {/* Project image carousel */}
      <div className="relative aspect-video w-full overflow-hidden rounded-t-xl">
        <img
          src={previewImage.src}
          alt={previewImage.alt}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {hasMultipleImages && (
          <>
            {/* Previous image */}
            <button
              type="button"
              onClick={showPreviousImage}
              aria-label="Image précédente"
              className="absolute left-2 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-full bg-gray-200/90 text-slate-800 shadow-sm transition-colors hover:bg-white cursor-pointer"
            >
              <ChevronLeft size={17} />
            </button>

            {/* Next image */}
            <button
              type="button"
              onClick={showNextImage}
              aria-label="Image suivante"
              className="absolute right-2 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-full bg-gray-200/90 text-slate-800 shadow-sm transition-colors hover:bg-white cursor-pointer"
            >
              <ChevronRight size={17} />
            </button>

            {/* Image indicators */}
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
              {project.media.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  aria-label={`Afficher l'image ${index + 1}`}
                  aria-current={activeImage === index}
                  className={`h-1.5 rounded-full transition-all ${
                    activeImage === index ? 'w-4 bg-blue-600' : 'w-1.5 bg-white/80'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Project information */}
      <div className="flex flex-1 flex-col gap-4 px-4 py-2">
        {/* Title and icon */}
        <div className="flex min-w-0 items-center">
          <div className="flex items-center text-blue-600 gap-2 w-full">
            <div className="p-2 bg-blue-100 rounded-lg ">
              {ProjectIcon && <ProjectIcon className="size-4 md:size-5 lg:size-6" />}
            </div>

            <h3 className="min-w-0 truncate text-sm md:text-lg font-bold text-slate-900">
              {project.title}
            </h3>
          </div>

          {project.featured && (
            <span className="rounded-full bg-blue-600 px-2 py-1 text-xxxs md:text-xs font-semibold text-white shadow-sm w-fit text-center">
              Projet principal
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-xs md:text-sm font-medium leading-relaxed text-slate-600">
          <span className="sm:hidden">{project.description.mobile}</span>
          <span className="hidden sm:inline lg:hidden">{project.description.tablet}</span>
          <span className="hidden lg:inline">{project.description.desktop}</span>
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-slate-200 bg-blue-100 px-2 py-0.5 text-xxxs md:text-xs font-semibold text-slate-700"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-auto flex flex-wrap items-center gap-2 pt-1">
          <Link
            to={`/projects/${project.id}`}
            className="inline-flex items-center justify-center gap-1 rounded-md bg-blue-950 px-3 py-1.5 text-xxs md:text-sm lg:px-4 lg:py-2 font-semibold text-white transition-colors hover:bg-blue-800"
          >
            Voir le projet
            <ExternalLink className="size-3 md:size-4 lg:size-5" />
          </Link>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Voir ${project.title} sur GitHub`}
              className="inline-flex items-center justify-center gap-1 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xxs md:text-sm lg:px-4 lg:py-2 font-semibold text-slate-800 transition-colors hover:bg-slate-100"
            >
              <GithubIcon className="size-3 md:size-4 lg:size-5" />
              Code sur GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
