import { Globe } from 'lucide-react'
import SectionHeading from '../../../../components/shared/SectionHeading'

import { languages } from '../../../../data/pages/skills'

// Displays the user's languages and their respective proficiency levels.
export default function LanguagesCard() {
  return (
    <article className="rounded-xl border border-blue-100 bg-blue-50 p-4 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <Globe className="size-6 shrink-0 text-blue-600 md:size-7 lg:size-9" strokeWidth={2} />

        <SectionHeading title="Langues" />
      </div>

      {/* Displays each language with its proficiency level and progress indicator. */}
      <div className="space-y-2">
        {languages.map((language) => (
          <div
            key={language.name}
            className="rounded-lg border border-blue-100 bg-surface px-3 py-2"
          >
            <div className="mb-2 flex items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <span
                  className={`fi fi-${language.country} rounded-full text-base md:text-lg lg:text-xl`}
                  aria-label={`Drapeau ${language.name}`}
                  role="img"
                />

                <span className="text-xs font-semibold text-text-primary md:text-sm lg:text-base">
                  {language.name}
                </span>
              </div>

              <span className="shrink-0 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800 md:text-sm">
                {language.level}
              </span>
            </div>

            {/* Visual proficiency progress bar */}
            <div
              className="h-1.5 overflow-hidden rounded-full bg-slate-100"
              role="progressbar"
              aria-label={`Niveau de ${language.name}`}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={language.progress}
            >
              <div
                className="h-full rounded-full bg-linear-to-r from-violet-300 via-indigo-500 to-blue-500 transition-all duration-300"
                style={{ width: `${language.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}
