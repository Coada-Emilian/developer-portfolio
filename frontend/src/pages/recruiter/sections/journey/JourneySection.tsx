import { ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import SectionHeading from '../../../../components/shared/SectionHeading'
import { journey } from '../../../../data/pages/recruiter'
import { JourneyModal } from './JourneyModal'

// Presents a concise overview of the professional journey with access to the full employment history.
export default function RecruiterJourneySection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (!isModalOpen) return

    // Prevent background scrolling while the professional history modal is open.
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // Allow the modal to be dismissed using the Escape key.
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
        <div className="flex items-center justify-between gap-3">
          <SectionHeading title="Mon parcours" underline />

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="group flex shrink-0 items-center gap-1 text-xs font-semibold text-blue-600 transition-colors hover:text-blue-700 md:text-sm cursor-pointer"
          >
            <span className="hidden sm:inline">Voir le parcours complet</span>
            <span className="sm:hidden">Tout voir</span>

            <ChevronRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>

        <div className="relative flex flex-col gap-6">
          {/* Vertical line connecting the two stages of the professional journey. */}
          <div className="absolute bottom-8 left-4 md:left-5 lg:left-6 top-8 w-px bg-blue-200" />

          {journey.map((item) => {
            const Icon = item.icon

            return (
              <article
                key={item.title}
                className="relative grid grid-cols-[3rem_minmax(0,1fr)] items-start gap-4"
              >
                <div className="relative z-10 flex size-8 md:size-10 lg:size-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Icon aria-hidden="true" className="size-4 md:size-5 lg:size-6" strokeWidth={2} />
                </div>

                <div className="relative pt-0.5">
                  <h3 className="text-sm md:text-base lg:text-lg font-bold leading-snug text-text-primary">
                    {item.title}
                  </h3>

                  <p className="mt-0.5 text-xs md:text-sm lg:text-base leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {isModalOpen && <JourneyModal setIsModalOpen={setIsModalOpen} />}
    </>
  )
}
