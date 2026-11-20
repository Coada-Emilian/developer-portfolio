import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'

import type { IProject } from '../../../../@types/interfaces/pages/projects/IProject'
import { CAROUSEL_CONFIG } from '../../../../config/carousel.config'
import ProjectScreenshotModal from './ProjectScreenshotModal'

interface ProjectCarouselProps {
  project: IProject
}

export default function ProjectCarousel({ project }: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const touchTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const projectScreenshots = project.media

  // Displays the previous screenshot.
  const showPrevious = useCallback(() => {
    setActiveIndex((current) => (current === 0 ? projectScreenshots.length - 1 : current - 1))
  }, [projectScreenshots.length])

  // Displays the next screenshot.
  const showNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % projectScreenshots.length)
  }, [projectScreenshots.length])

  // Pauses autoplay during touch interaction and resumes it after the configured delay.
  const handleTouchInteraction = () => {
    setIsPaused(true)

    if (touchTimeout.current) {
      clearTimeout(touchTimeout.current)
    }

    touchTimeout.current = setTimeout(() => {
      setIsPaused(false)
      touchTimeout.current = null
    }, CAROUSEL_CONFIG.AUTO_PLAY_INTERVAL)
  }

  // Clears pending timeouts when the component unmounts.
  useEffect(() => {
    return () => {
      if (touchTimeout.current) {
        clearTimeout(touchTimeout.current)
      }
    }
  }, [])

  // Automatically advances the carousel while active and unpaused.
  useEffect(() => {
    if (isPaused || isModalOpen || projectScreenshots.length <= 1) return

    const interval = setInterval(showNext, CAROUSEL_CONFIG.AUTO_PLAY_INTERVAL)

    return () => clearInterval(interval)
  }, [isPaused, isModalOpen, projectScreenshots.length, showNext])

  // Handles keyboard navigation while the lightbox is open.
  useEffect(() => {
    if (!isModalOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false)
      }

      if (event.key === 'ArrowLeft') {
        showPrevious()
      }

      if (event.key === 'ArrowRight') {
        showNext()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isModalOpen, showPrevious, showNext])

  // Prevents background scrolling while the lightbox is open.
  useEffect(() => {
    if (!isModalOpen) return

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [isModalOpen])

  if (projectScreenshots.length === 0) return null

  return (
    <div className="flex h-44 items-center justify-center overflow-hidden rounded-xl border border-blue-100 bg-blue-100 p-2 md:h-80 lg:h-96">
      <div
        className="relative flex h-full w-full items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchInteraction}
      >
        {projectScreenshots.map((screenshot, index) => (
          <button
            key={screenshot.id}
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
              src={screenshot.src}
              alt={screenshot.alt}
              className="h-full w-full rounded-lg object-contain"
            />
          </button>
        ))}

        {projectScreenshots.length > 1 && (
          <>
            {/* Previous screenshot */}
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Capture précédente"
              className="absolute top-1/2 left-2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-white/90 p-1.5 text-blue-900 shadow-md transition hover:bg-white md:left-3 md:p-2"
            >
              <ChevronLeft className="size-4.5 md:size-5" />
            </button>

            {/* Next screenshot */}
            <button
              type="button"
              onClick={showNext}
              aria-label="Capture suivante"
              className="absolute top-1/2 right-2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-white/90 p-1.5 text-blue-900 shadow-md transition hover:bg-white md:right-3 md:p-2"
            >
              <ChevronRight className="size-4.5 md:size-5" />
            </button>

            {/* Screenshot indicators */}
            <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/80 px-2.5 py-1.5 shadow-sm md:bottom-3 md:px-3 md:py-2">
              {projectScreenshots.map((screenshot, index) => (
                <button
                  key={screenshot.id}
                  type="button"
                  onClick={() => {
                    setActiveIndex(index)
                    handleTouchInteraction()
                  }}
                  aria-label={`Afficher la capture ${index + 1}`}
                  aria-current={index === activeIndex}
                  className={`h-1.5 rounded-full transition-all duration-300 md:h-2 ${
                    index === activeIndex
                      ? 'w-4 bg-blue-600 md:w-5'
                      : 'w-1.5 bg-blue-300 hover:bg-blue-500 md:w-2'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {isModalOpen && (
        <ProjectScreenshotModal
          setIsModalOpen={setIsModalOpen}
          projectScreenshots={projectScreenshots}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          showPrevious={showPrevious}
          showNext={showNext}
        />
      )}
    </div>
  )
}
