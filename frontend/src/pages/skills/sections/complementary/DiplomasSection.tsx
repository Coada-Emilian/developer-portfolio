import { ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react'
import { useCallback, useEffect, useRef } from 'react'

import { educationItems } from '../../../../data/pages/skills'

export default function DiplomasSection() {
  const carouselRef = useRef<HTMLDivElement>(null)

  // Move the carousel by one card in the requested direction.
  const moveCarousel = useCallback((direction: 'next' | 'previous') => {
    const carousel = carouselRef.current
    const firstCard = carousel?.firstElementChild as HTMLElement | null

    if (!carousel || !firstCard) return

    const gap = 12
    const step = firstCard.offsetWidth + gap
    const maxScroll = carousel.scrollWidth - carousel.clientWidth

    if (direction === 'next') {
      if (carousel.scrollLeft >= maxScroll - step / 2) {
        carousel.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        carousel.scrollBy({ left: step, behavior: 'smooth' })
      }
    } else {
      if (carousel.scrollLeft <= step / 2) {
        carousel.scrollTo({ left: maxScroll, behavior: 'smooth' })
      } else {
        carousel.scrollBy({ left: -step, behavior: 'smooth' })
      }
    }
  }, [])

  // Automatically advance the carousel every five seconds.
  useEffect(() => {
    const interval = setInterval(() => {
      moveCarousel('next')
    }, 5000)

    return () => clearInterval(interval)
  }, [moveCarousel])

  return (
    <section className="flex flex-col gap-4 rounded-xl border border-blue-100 bg-blue-50 p-4 shadow-sm lg:flex-row lg:items-center lg:gap-5">
      {/* Section introduction */}
      <div className="flex shrink-0 items-center gap-3 lg:h-40 lg:w-56">
        <GraduationCap className="size-10 shrink-0 text-blue-600" strokeWidth={2} />

        <h3 className="text-lg font-extrabold leading-tight text-text-primary md:text-xl">
          Diplômes & Certifications
        </h3>
      </div>

      {/* Vertical separator */}
      <div className="hidden h-14 w-px shrink-0 bg-blue-200 lg:block" />

      {/* Diploma carousel and navigation */}
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-2">
        {/* Diploma cards */}
        <div
          ref={carouselRef}
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth scrollbar-none [&::-webkit-scrollbar]:hidden"
        >
          {educationItems.map((item) => (
            <article
              key={item.id}
              className="flex min-w-full snap-start flex-col justify-center gap-2 rounded-xl border border-blue-100 bg-surface p-3 md:min-w-[calc(50%-0.375rem)] lg:min-w-[calc(33.333%-0.5rem)]"
            >
              <div className="flex items-center gap-2">
                <GraduationCap className="size-6 shrink-0 text-blue-600" strokeWidth={2} />

                <h4 className="text-sm font-bold text-text-primary">{item.title}</h4>
              </div>

              <div className="min-w-0">
                <p className="truncate text-xs font-medium text-text-secondary">
                  {item.institution}
                </p>

                <p className="text-xs text-text-secondary">{item.period}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Carousel navigation */}
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={() => moveCarousel('previous')}
            aria-label="Diplôme précédent"
            className="flex size-8 cursor-pointer items-center justify-center rounded-full border border-blue-200 bg-surface text-blue-600 transition-colors hover:bg-blue-100"
          >
            <ChevronLeft className="size-5" />
          </button>

          <button
            type="button"
            onClick={() => moveCarousel('next')}
            aria-label="Diplôme suivant"
            className="flex size-8 cursor-pointer items-center justify-center rounded-full border border-blue-200 bg-surface text-blue-600 transition-colors hover:bg-blue-100"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
