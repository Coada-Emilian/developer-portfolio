import { CheckCircle2, CirclePlay, Clapperboard } from 'lucide-react'
import type { IProject } from '../../../@types/interfaces/pages/projects/IProject'

interface ProjectVideoSectionProps {
  project: IProject
  videoUrl?: string
  highlights?: string[]
}

export default function ProjectVideoSection({
  project,
  videoUrl,
  highlights = [
    'Aperçu des fonctionnalités principales',
    'Présentation de l’architecture et des choix techniques',
    'Démonstration des principaux parcours utilisateur',
  ],
}: ProjectVideoSectionProps) {
  const poster = project.media[0]?.src

  return (
    <section className="w-full rounded-xl border border-blue-200 bg-blue-100/70 p-3 md:p-4">
      <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[1fr_1.5fr] lg:grid-cols-[1fr_1.5fr]">
        {/* Video player / placeholder */}
        <div className="relative aspect-video overflow-hidden rounded-lg border border-blue-200 bg-slate-900">
          {videoUrl ? (
            <video
              controls
              preload="metadata"
              poster={poster}
              className="h-full w-full object-cover"
            >
              <source src={videoUrl} type="video/mp4" />
              Votre navigateur ne prend pas en charge la lecture vidéo.
            </video>
          ) : (
            <>
              {poster && (
                <img
                  src={poster}
                  alt={`${project.title} – aperçu vidéo`}
                  className="h-full w-full object-cover opacity-70"
                />
              )}

              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
                <CirclePlay className="size-12 text-white drop-shadow-lg sm:size-14" />
                <span className="mt-2 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
                  Vidéo à venir
                </span>
              </div>
            </>
          )}
        </div>

        {/* Video information */}
        <div className="relative flex min-w-0 items-center gap-3 sm:gap-5 lg:px-8">
          <div className="min-w-0 flex-1 lg:flex lg:flex-col lg:gap-4">
            <h3 className="mb-2 flex items-center gap-2 text-sm font-bold text-text-primary md:text-base lg:text-xl">
              <CirclePlay className="size-4 md:size-5 lg:size-9 shrink-0 text-blue-600" />
              Présentation vidéo
            </h3>

            <p className="mb-3 text-xs leading-relaxed text-text-primary sm:text-sm md:font-medium lg:text-base">
              Découvrez {project.title} à travers une démonstration de l'application, de ses
              principales fonctionnalités et de ses choix techniques.
            </p>

            <ul className="space-y-2">
              {highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-xs leading-relaxed text-text-primary md:text-sm lg:text-base"
                >
                  <CheckCircle2 className="mt-0.5 size-3.5 md:size-4 lg:size-7 shrink-0 text-blue-600" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Decorative icon */}
          <div className="hidden shrink-0 items-center justify-center text-blue-200 lg:flex">
            <Clapperboard className="size-16 lg:size-32" strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </section>
  )
}
