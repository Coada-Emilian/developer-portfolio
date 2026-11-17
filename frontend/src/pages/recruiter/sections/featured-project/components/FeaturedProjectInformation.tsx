import { GithubIcon } from '@dev.icons/react'
import { ExternalLink, Stethoscope } from 'lucide-react'
import { Link } from 'react-router-dom'

import SectionHeading from '../../../../../components/shared/SectionHeading'
import { projectTechnologies } from '../../../../../data/pages/home'

// Presents the featured project's description, technologies and navigation links.
export default function FeaturedProjectInformation() {
  return (
    <div className="flex min-w-0 flex-col gap-4">
      <div className="flex items-start gap-3">
        <div className="flex size-10 md:size-12  shrink-0 items-center justify-center rounded-lg bg-blue-100 sm:size-14">
          <Stethoscope className="size-5 md:size-6 lg:size-7 text-blue-600" />
        </div>

        <div className="min-w-0 ">
          <SectionHeading title="Kinesoin" />

          <p className="mt-1 text-xxs md:text-xs lg:text-sm leading-relaxed text-text-secondary sm:text-sm">
            Application de gestion pour cabinet de kinésithérapie. Gestion des patients,
            rendez-vous, séances et facturation.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {projectTechnologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md bg-blue-100 px-2.5 py-1 text-[10px] font-semibold text-text-primary sm:text-xs"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        <Link
          to="/projects/1"
          className="flex items-center justify-center gap-2 rounded-lg bg-blue-900 px-3 py-2 text-xxs md:text-xs lg:text-sm font-semibold text-white transition-colors hover:bg-blue-800 sm:text-sm"
        >
          Voir le projet
          <ExternalLink className="size-4" />
        </Link>

        <a
          href="https://github.com/Coada-Emilian/kineSoin"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-lg border border-blue-900 bg-white px-3 py-2 text-xxs md:text-xs lg:text-sm font-semibold text-text-primary transition-colors hover:bg-blue-50 sm:text-sm"
        >
          <GithubIcon className="size-4" />
          Code sur GitHub
        </a>
      </div>
    </div>
  )
}
