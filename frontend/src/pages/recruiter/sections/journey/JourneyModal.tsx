import { X } from 'lucide-react'
import { experiences } from '../../../../data/pages/recruiter'

interface JourneyModalProps {
  setIsModalOpen: (isOpen: boolean) => void
}

export function JourneyModal({ setIsModalOpen }: JourneyModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setIsModalOpen(false)
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="professional-history-title"
        className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-blue-200 bg-background shadow-2xl"
      >
        {/* Modal header remains visible while the professional history scrolls. */}
        <div className="flex items-center justify-between border-b border-blue-100  bg-surface px-5 py-4 md:px-7">
          <div>
            <h2
              id="professional-history-title"
              className="text-lg font-bold text-text-primary md:text-xl"
            >
              Mon parcours professionnel
            </h2>

            <p className="mt-1 text-xs text-text-secondary md:text-sm">
              Mes expériences et mon évolution professionnelle.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            aria-label="Fermer la fenêtre"
            className="flex size-9 shrink-0 items-center justify-center rounded-full text-text-secondary transition-colors hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
          >
            <X aria-hidden="true" className="size-5" />
          </button>
        </div>

        {/* Full employment history displayed inside a scrollable timeline. */}
        <div className="overflow-y-auto px-5 py-6 md:px-7 bg-surface">
          <div className="relative flex flex-col gap-7 bg-surface">
            <div className="absolute bottom-5 left-1.5 top-3 w-px bg-blue-200" />

            {experiences.map((experience) => (
              <article key={`${experience.period}-${experience.title}`} className="relative pl-7">
                <div className="absolute left-0 top-1.5 size-3 rounded-full border-2 border-blue-500 bg-blue-600" />

                <span className="text-xs font-semibold text-blue-600">
                  {experience.period}
                  {experience.duration && ` · ${experience.duration}`}
                </span>

                <h3 className="mt-1 text-sm font-bold text-text-primary md:text-base">
                  {experience.title}
                </h3>

                <p className="text-xs font-medium text-text-secondary md:text-sm">
                  {experience.company}
                </p>

                <p className="mt-2 text-xs leading-relaxed text-text-secondary md:text-sm">
                  {experience.description}
                </p>

                <ul className="mt-2 flex flex-col gap-1.5">
                  {experience.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex gap-2 text-xs leading-relaxed text-text-secondary md:text-sm"
                    >
                      <span className="shrink-0 text-blue-500">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="flex justify-end border-t border-blue-100 bg-surface px-5 py-3 md:px-7">
          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 cursor-pointer"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  )
}
