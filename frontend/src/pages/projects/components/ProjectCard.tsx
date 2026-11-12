import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import type { IProject } from '../../../@types/interfaces/pages/projects/IProject'

interface ProjectCardProps {
  project: IProject
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [activeImage, setActiveImage] = useState(0)

  const imagesCount = project.media.length
  const coverImage = project.media[activeImage]

  // Navigate between project images
  const previousImage = () => {
    setActiveImage((current) => (current - 1 + imagesCount) % imagesCount)
  }

  const nextImage = () => {
    setActiveImage((current) => (current + 1) % imagesCount)
  }

  return (
    <article className="group flex items-center gap-3 rounded-xl border border-blue-100 bg-white/50 p-3 pb-8 transition hover:border-blue-200 hover:shadow-sm sm:gap-4 sm:p-4">
      {/* Project image carousel */}
      {coverImage && (
        <div className="group/carousel relative flex aspect-video w-2/5 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-slate-100 p-2">
          <img
            src={coverImage.src}
            alt={coverImage.alt}
            className="size-full rounded-lg object-contain transition duration-300"
          />

          {/* Carousel navigation and indicators */}
          {imagesCount > 1 && (
            <>
              <button
                type="button"
                onClick={previousImage}
                aria-label="Image précédente"
                className="absolute left-1 top-1/2 hidden size-7 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-slate-900/60 text-white transition hover:bg-slate-900/80 md:left-0 md:flex lg:left-1 lg:opacity-0 lg:group-hover/carousel:opacity-100"
              >
                <ChevronLeft className="size-4" />
              </button>

              <button
                type="button"
                onClick={nextImage}
                aria-label="Image suivante"
                className="absolute right-1 top-1/2 hidden size-7 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-slate-900/60 text-white transition hover:bg-slate-900/80 md:right-0 md:flex lg:right-1 lg:opacity-0 lg:group-hover/carousel:opacity-100"
              >
                <ChevronRight className="size-4" />
              </button>

              {/* Carousel indicators */}
              <div className="absolute bottom-2 left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
                {project.media.map((image, index) => (
                  <button
                    key={image.id}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    aria-label={`Afficher l'image ${index + 1}`}
                    aria-current={activeImage === index ? 'true' : undefined}
                    className={`size-1.5 rounded-full transition ${
                      activeImage === index ? 'bg-blue-600' : 'bg-slate-400/70'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Separator between image and project information */}
      {coverImage && <div className="m-2 hidden h-96 w-0.5 bg-slate-200 lg:block" />}

      {/* Project information */}
      <div className="flex min-w-0 flex-1 flex-col gap-1.5 lg:gap-8">
        {/* Project title and featured badge */}
        <div className="flex flex-wrap items-center justify-between gap-1 md:flex-nowrap md:flex-col md:items-start lg:flex-row">
          {project.featured && (
            <span className="rounded-full bg-blue-600 px-2 py-1 text-[9px] font-semibold text-white sm:text-sm lg:hidden">
              Projet principal
            </span>
          )}

          <div className="flex min-w-0 items-center gap-2">
            {project.icon && (
              <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-blue-100 sm:size-9 lg:size-12">
                <project.icon className="size-4 text-blue-700 sm:size-6 lg:size-8" />
              </span>
            )}

            <h3 className="text-sm font-extrabold text-slate-900 sm:text-lg lg:text-2xl">
              {project.title}
            </h3>
          </div>

          {project.featured && (
            <span className="hidden rounded-full bg-blue-600 px-2 py-1 text-base font-semibold text-white lg:block">
              Projet principal
            </span>
          )}
        </div>

        {/* Mobile description */}
        <p className="line-clamp-2 text-[10px] font-medium leading-relaxed text-slate-700 md:hidden">
          {project.description.mobile}
        </p>

        {/* Tablet description */}
        <p className="hidden line-clamp-2 text-sm font-medium leading-relaxed text-slate-700 md:block lg:hidden">
          {project.description.tablet}
        </p>

        {/* Desktop description */}
        <p className="hidden line-clamp-2 text-base font-medium leading-relaxed text-slate-700 lg:block">
          {project.description.desktop}
        </p>

        {/* Project technologies */}
        <div className="flex flex-wrap gap-1 sm:gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-blue-100 px-2 py-1 text-[9px] font-medium text-blue-900 sm:text-sm lg:rounded-lg lg:p-2 lg:text-base"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      {/* Separator between project information and navigation */}
      <div className="m-2 hidden h-96 w-0.5 bg-slate-200 lg:block" />

      {/* Link to the project details page */}
      <Link
        to={`/projects/${project.id}`}
        aria-label={`Découvrir le projet ${project.title}`}
        className="shrink-0 text-blue-900 transition group-hover:translate-x-1 group-hover:text-blue-600"
      >
        <ArrowRight className="size-5 sm:size-7" />
      </Link>
    </article>
  )
}
