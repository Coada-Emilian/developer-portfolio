import { Globe } from 'lucide-react'

import { languages } from '../../../../data/pages/skills'

export default function LanguagesCard() {
  return (
    <article className="rounded-xl border border-blue-100 bg-blue-50 p-4 shadow-sm">
      {/* Card heading */}
      <div className="mb-4 flex items-center gap-3">
        <Globe className="size-8 shrink-0 text-blue-600" strokeWidth={2} />

        <h3 className="text-lg font-extrabold text-text-primary md:text-xl">Langues</h3>
      </div>

      {/* Language proficiency levels */}
      <div className="space-y-2">
        {languages.map((language) => (
          <div
            key={language.name}
            className="rounded-lg border border-blue-100 bg-surface px-3 py-2"
          >
            <div className="mb-2 flex items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <span
                  className={`fi fi-${language.country} text-xl`}
                  aria-label={`Drapeau ${language.name}`}
                  role="img"
                />

                <span className="text-sm font-semibold text-text-primary">{language.name}</span>
              </div>

              <span className="shrink-0 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">
                {language.level}
              </span>
            </div>

            {/* Visual proficiency progress bar */}
            <div
              className="h-1.5 overflow-hidden rounded-full bg-blue-100"
              role="progressbar"
              aria-label={`Niveau de ${language.name}`}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={language.progress}
            >
              <div
                className="h-full rounded-full bg-blue-600 transition-all duration-300"
                style={{ width: `${language.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}
