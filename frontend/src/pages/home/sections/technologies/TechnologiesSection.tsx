import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'

import { CAROUSEL_CONFIG } from '../../../../config/carousel.config'
import { technologies } from '../../../../data/pages/home'
import TechnologyCard from './components/TechnologyCard'

export default function TechnologiesSection() {
  // Tracks the active position, autoplay state and number of visible cards.
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [visibleCount, setVisibleCount] = useState(3)

  // Adjusts the number of visible cards according to the screen width.
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')

    const updateVisibleCount = () => {
      setVisibleCount(mediaQuery.matches ? 5 : 3)
      setActiveIndex(0)
    }

    updateVisibleCount()
    mediaQuery.addEventListener('change', updateVisibleCount)

    return () => {
      mediaQuery.removeEventListener('change', updateVisibleCount)
    }
  }, [])

  // Calculates the last valid carousel position based on visible cards.
  const maxIndex = Math.max(0, technologies.length - visibleCount)

  // Displays the previous position, wrapping around to the end.
  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? maxIndex : current - 1))
  }

  // Displays the next position, wrapping around to the beginning.
  const showNext = () => {
    setActiveIndex((current) => (current >= maxIndex ? 0 : current + 1))
  }

  // Automatically advances the carousel while it is active and unpaused.
  useEffect(() => {
    if (isPaused || maxIndex === 0) return

    const interval = setInterval(showNext, CAROUSEL_CONFIG.AUTO_PLAY_INTERVAL)

    // Resets the interval whenever the active position or carousel state changes.
    return () => clearInterval(interval)
  }, [isPaused, activeIndex, maxIndex])

  return (
    <section className="bg-surface px-3 py-4 sm:px-8 md:py-8 lg:px-12 xl:px-36">
      <div className="mx-auto max-w-7xl md:max-w-11/12">
        {/* Section heading and decorative underline. */}
        <h2 className="text-left text-lg font-extrabold text-text-primary md:text-2xl">
          Technologies principales
        </h2>

        <div className="mt-2 h-1 w-9 rounded-full bg-blue-500" />

        {/* Responsive technology carousel; autoplay pauses while hovered. */}
        <div
          className="relative mt-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Previous position navigation. */}
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Technologies précédentes"
            className="absolute top-1/2 -left-3 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-white p-1.5 text-blue-900 shadow-md transition hover:bg-blue-50 md:-left-5 md:p-2"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Sliding track containing all technology cards. */}
          <div className="overflow-hidden">
            <div
              className="flex w-[333.333%] transition-transform duration-700 ease-in-out md:w-[200%]"
              style={{
                transform: `translateX(-${activeIndex * 10}%)`,
              }}
            >
              {technologies.map(({ name, icon: Icon, altName }) => (
                <div key={name} className="w-[10%] shrink-0 px-1 md:px-2.5">
                  <TechnologyCard name={name} icon={Icon} altName={altName} />
                </div>
              ))}
            </div>
          </div>

          {/* Next position navigation. */}
          <button
            type="button"
            onClick={showNext}
            aria-label="Technologies suivantes"
            className="absolute top-1/2 -right-3 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-white p-1.5 text-blue-900 shadow-md transition hover:bg-blue-50 md:-right-5 md:p-2"
          >
            <ChevronRight size={20} />
          </button>

          {/* Indicators allow visitors to jump to a specific carousel position. */}
          <div className="mt-5 flex items-center justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Afficher les technologies à partir de la position ${index + 1}`}
                aria-current={activeIndex === index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'w-5 bg-blue-600' : 'w-2 bg-blue-300 hover:bg-blue-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
