import { GithubIcon } from '@dev.icons/react'
import { ExternalLink, Stethoscope } from 'lucide-react'

import projectBackground from '../../../../../assets/images/project_background.png'

import { projectTechnologies } from '../../../../../data/pages/home'

// Presents the featured project's identity, technologies and navigation links.
export default function MainProjectSectionInformation() {
  return (
    <div
      className="relative flex h-96 flex-col justify-center gap-8 rounded-xl bg-cover bg-center p-5"
      style={{ backgroundImage: `url(${projectBackground})` }}
    >
      {/* Overlay maintains text readability over the background image. */}
      <div className="absolute inset-0 rounded-xl bg-white/60" />

      <div className="relative flex items-center gap-4">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-blue-100">
          <Stethoscope className="h-14 w-14 text-blue-500" />
        </div>

        <div>
          <h3 className="text-2xl font-extrabold text-text-primary">KineSoin</h3>

          <p className="mt-1 text-base font-medium text-text-primary">
            Application de gestion pour cabinet de kinésithérapie. Gestion des patients,
            rendez-vous, séances et facturation.
          </p>
        </div>
      </div>

      <div className="relative flex flex-wrap gap-3">
        {projectTechnologies.map((technology) => (
          <span
            key={technology}
            className="rounded-lg bg-blue-100/90 px-4 py-2 text-sm font-semibold text-text-primary"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="relative flex flex-wrap gap-4">
        <a
          href="/projects/1"
          className="flex items-center gap-2 rounded-xl bg-blue-900 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
        >
          Voir le projet
          <ExternalLink className="h-6 w-6" />
        </a>

        <a
          href="https://github.com/Coada-Emilian/kineSoin"
          className="flex items-center gap-2 rounded-xl border border-blue-900 bg-slate-100 px-6 py-3 font-semibold text-text-primary transition hover:bg-blue-50"
        >
          <GithubIcon className="h-6 w-6" />
          Code sur GitHub
        </a>
      </div>
    </div>
  )
}
