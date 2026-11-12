import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import { CAROUSEL_CONFIG } from '../../../../../config/carousel.config'
import { projectScreenshots } from '../../../../../data/pages/home'

export default function MainProjectMobileSectionScreenshot() {
  // Tracks the active screenshot, autoplay state and lightbox visibility.
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Stores the timeout used to resume autoplay after touch interaction.
  const touchTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Displays the previous screenshot, wrapping around to the last one.
  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? projectScreenshots.length - 1 : current - 1))
  }

  // Displays the next screenshot, wrapping around to the first one.
  const showNext = () => {
    setActiveIndex((current) => (current + 1) % projectScreenshots.length)
  }

  // Automatically advances the carousel while it is active and unpaused.
  useEffect(() => {
    if (isPaused || isModalOpen || projectScreenshots.length <= 1) return

    const interval = setInterval(showNext, CAROUSEL_CONFIG.AUTO_PLAY_INTERVAL)

    // Resets the interval whenever the active screenshot or carousel state changes.
    return () => clearInterval(interval)
  }, [isPaused, isModalOpen, activeIndex])

  // Pauses autoplay during touch interaction and resumes it after the configured delay.
  const handleTouchInteraction = () => {
    setIsPaused(true)

    if (touchTimeout.current) {
      clearTimeout(touchTimeout.current)
    }

    touchTimeout.current = setTimeout(() => {
      setIsPaused(false)
    }, CAROUSEL_CONFIG.AUTO_PLAY_INTERVAL)
  }

  // Clears any pending timeout when the component unmounts.
  useEffect(() => {
    return () => {
      if (touchTimeout.current) {
        clearTimeout(touchTimeout.current)
      }
    }
  }, [])

  // Handles keyboard navigation and closing the lightbox.
  useEffect(() => {
    if (!isModalOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsModalOpen(false)
      if (event.key === 'ArrowLeft') showPrevious()
      if (event.key === 'ArrowRight') showNext()
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isModalOpen])

  // Prevents the background page from scrolling while the lightbox is open.
  useEffect(() => {
    if (!isModalOpen) return

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [isModalOpen])

  return (
    <>
      {/* Mobile carousel with touch-based autoplay control. */}
      <div
        className="relative flex h-44 items-center justify-center overflow-hidden rounded-xl bg-white p-2"
        onTouchStart={handleTouchInteraction}
      >
        {/* Screenshot buttons: only the active screenshot is interactive. */}
        {projectScreenshots.map((screenshot, index) => (
          <button
            key={screenshot}
            type="button"
            onClick={() => {
              setActiveIndex(index)
              setIsModalOpen(true)
            }}
            aria-label={`Agrandir la capture ${index + 1}`}
            className={`absolute inset-0 h-full w-full cursor-zoom-in p-2 transition-opacity duration-700 ${
              index === activeIndex ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
          >
            <img
              src={screenshot}
              alt={`Capture d'écran ${index + 1} de KineSoin`}
              className="h-full w-full rounded-lg object-contain"
            />
          </button>
        ))}

        {/* Previous and next navigation controls. */}
        <button
          type="button"
          onClick={showPrevious}
          aria-label="Capture précédente"
          className="absolute top-1/2 left-2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-1.5 text-blue-900 shadow-md"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          type="button"
          onClick={showNext}
          aria-label="Capture suivante"
          className="absolute top-1/2 right-2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-1.5 text-blue-900 shadow-md"
        >
          <ChevronRight size={18} />
        </button>

        {/* Indicators allow visitors to jump directly to a screenshot. */}
        <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/80 px-2.5 py-1.5">
          {projectScreenshots.map((screenshot, index) => (
            <button
              key={screenshot}
              type="button"
              onClick={() => {
                setActiveIndex(index)
                handleTouchInteraction()
              }}
              aria-label={`Afficher la capture ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'w-4 bg-blue-600' : 'w-1.5 bg-blue-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox displays the selected screenshot over the entire viewport. */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Aperçu des captures KineSoin"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-3"
          onClick={(event) => {
            // Closes the lightbox only when clicking the backdrop itself.
            if (event.target === event.currentTarget) {
              setIsModalOpen(false)
            }
          }}
        >
          {/* Closes the lightbox and returns to the carousel. */}
          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            aria-label="Fermer"
            className="absolute top-4 right-4 z-50 rounded-full bg-white/10 p-2 text-white"
          >
            <X size={24} />
          </button>

          {/* Previous screenshot navigation. */}
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Capture précédente"
            className="absolute left-2 z-50 rounded-full bg-white/10 p-2 text-white"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Enlarged version of the currently selected screenshot. */}
          <img
            src={projectScreenshots[activeIndex]}
            alt={`Capture d'écran ${activeIndex + 1} de KineSoin`}
            className="max-h-[80vh] max-w-[85vw] object-contain"
          />

          {/* Next screenshot navigation. */}
          <button
            type="button"
            onClick={showNext}
            aria-label="Capture suivante"
            className="absolute right-2 z-50 rounded-full bg-white/10 p-2 text-white"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators allow navigation between screenshots in the lightbox. */}
          <div className="absolute bottom-6 flex items-center gap-2">
            {projectScreenshots.map((screenshot, index) => (
              <button
                key={screenshot}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Afficher la capture ${index + 1}`}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex ? 'w-5 bg-white' : 'w-2 bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
