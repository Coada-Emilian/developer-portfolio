import { GithubIcon } from '@dev.icons/react'
import { ExternalLink, Stethoscope } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projectTechnologies } from '../../../../../data/pages/home'

export default function ProjectInformation() {
  return (
    // Presents the project identity, description and technologies.
    <div className="flex min-w-0 flex-col gap-3">
      <div className="flex items-start gap-3">
        <Stethoscope
          aria-hidden="true"
          className="size-6 md:size-7 lg:size-8shrink-0 text-blue-600 sm:size-8"
        />

        <div className="min-w-0">
          <h3 className="text-sm md:text-lg lg:text-xl font-bold text-text-primary ">KineSoin</h3>

          <p className="text-xxs text-text-secondary md:text-xs lg:text-base">
            Application de gestion pour cabinet de kinésithérapie
          </p>
        </div>
      </div>

      <p className="text-xs md:text-sm lg:text-lg leading-relaxed text-text-secondary sm:text-sm">
        Gestion des patients, rendez-vous, séances et facturation à travers une application conçue
        pour simplifier le quotidien des praticiens.
      </p>

      {/* Lists the technologies used in the project. */}
      <div className="flex flex-wrap gap-1.5">
        {projectTechnologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md border border-blue-200 bg-blue-100 px-2 py-1 text-[10px] font-medium text-text-primary sm:text-xs"
          >
            {technology}
          </span>
        ))}
      </div>

      {/* Provides access to the project details and source code. */}
      <div className="flex flex-wrap justify-center lg:justify-start gap-2">
        <Link
          to="/projects/1"
          className="flex items-center justify-center gap-2 rounded-lg bg-blue-900 px-3 py-2 lg:px-4 lg:py-3 text-xs lg:text-sm font-semibold text-white transition-colors hover:bg-blue-800"
        >
          Voir le projet
          <ExternalLink aria-hidden="true" className="size-4" />
        </Link>

        <a
          href="https://github.com/Coada-Emilian/kineSoin"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-lg border border-blue-900 bg-white px-3 py-2 lg:px-4 lg:py-3 text-xs lg:text-sm font-semibold text-text-primary transition-colors hover:bg-blue-100"
        >
          <GithubIcon aria-hidden="true" className="size-4" />
          Code sur GitHub
        </a>
      </div>
    </div>
  )
}
