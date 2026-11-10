import { GithubIcon } from '@dev.icons/react'
import { ExternalLink, Stethoscope } from 'lucide-react'

import { projectTechnologies } from '../../../../data/projectTechnologies'

export default function MainProjectMobileSectionInformation() {
  return (
    <>
      {/* Project identity and representative icon. */}
      <div className="mt-4 flex items-center gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-100">
          <Stethoscope className="h-4 w-4 text-blue-500" />
        </div>

        <h3 className="text-lg font-extrabold text-text-primary">KineSoin</h3>
      </div>

      {/* Short project description adapted for mobile. */}
      <p className="mt-2 text-xs leading-relaxed font-medium text-text-primary">
        Gestion de cabinet de kinésithérapie. Application full stack pour les patients, les
        rendez-vous, les soins et la facturation.
      </p>

      {/* Technologies used to build the project. */}
      <div className="mt-4 flex flex-wrap gap-2">
        {projectTechnologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-semibold text-text-primary shadow-sm"
          >
            {technology}
          </span>
        ))}
      </div>

      {/* Links to the project and its GitHub repository. */}
      <div className="mt-5 flex items-center gap-3">
        <a
          href="#"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-xs font-bold text-white transition hover:bg-blue-700"
        >
          Découvrir
          <ExternalLink className="h-4 w-4" />
        </a>

        <a
          href="#"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-blue-900 bg-white px-4 py-3 text-xs font-bold text-text-primary transition hover:bg-blue-50"
        >
          <GithubIcon className="h-4 w-4" />
          Code
        </a>
      </div>
    </>
  )
}
