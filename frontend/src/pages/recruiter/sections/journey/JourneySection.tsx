import { ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'

import SectionHeading from '../../../../components/shared/SectionHeading'
import { journey } from '../../../../data/pages/recruiter'
import { JourneyModal } from './components/JourneyModal'

// Presents a concise overview of the professional journey with access to the full employment history.
export default function RecruiterJourneySection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Manages background scrolling and keyboard dismissal while the modal is open.
  useEffect(() => {
    if (!isModalOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsModalOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isModalOpen])

  return (
    <>
      <section className="flex flex-col gap-5">
        {/* Section heading and action to access the complete professional history. */}
        <div className="flex items-center justify-between gap-3">
          <SectionHeading title="Mon parcours" underline />

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="group flex shrink-0 cursor-pointer items-center gap-1 text-xs font-semibold text-blue-600 transition-colors hover:text-blue-700 md:text-sm"
          >
            <span className="hidden sm:inline">Voir le parcours complet</span>
            <span className="sm:hidden">Tout voir</span>

            <ChevronRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* Displays the two main stages of the professional journey as a vertical timeline. */}
        <div className="relative flex flex-col gap-6">
          {/* Vertical line connecting the timeline entries. */}
          <div className="absolute top-8 bottom-8 left-4 w-px bg-blue-200 md:left-5 lg:left-6" />

          {journey.map((item) => {
            const Icon = item.icon

            return (
              <article
                key={item.title}
                className="relative grid grid-cols-[3rem_minmax(0,1fr)] items-start gap-4"
              >
                {/* Icon visually identifies each stage of the professional journey. */}
                <div className="relative z-10 flex size-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 md:size-10 lg:size-12">
                  <Icon aria-hidden="true" className="size-4 md:size-5 lg:size-6" strokeWidth={2} />
                </div>

                <div className="min-w-0 pt-0.5">
                  <h3 className="text-sm font-bold leading-snug text-text-primary md:text-base lg:text-lg">
                    {item.title}
                  </h3>

                  <p className="mt-0.5 text-xs leading-relaxed text-text-secondary md:text-sm lg:text-base">
                    {item.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* Displays the complete employment history when requested. */}
      {isModalOpen && <JourneyModal setIsModalOpen={setIsModalOpen} />}
    </>
  )
}
