import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

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

  const projectScreenshots = project.media

  // Displays the previous screenshot.
  const showPrevious = useCallback(() => {
    setActiveIndex((current) => (current === 0 ? projectScreenshots.length - 1 : current - 1))
  }, [projectScreenshots.length])

  // Displays the next screenshot.
  const showNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % projectScreenshots.length)
  }, [projectScreenshots.length])

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
    <div className="flex h-96 items-center justify-center overflow-hidden rounded-xl border border-blue-100 bg-blue-100 p-2">
      <div
        className="relative flex h-full w-full items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
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
            className={`absolute inset-0 h-full w-full cursor-zoom-in transition-opacity duration-700 ${
              index === activeIndex ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
          >
            <img
              src={screenshot.src}
              alt={screenshot.alt}
              className="h-full w-full rounded-lg object-contain p-2"
            />
          </button>
        ))}

        {projectScreenshots.length > 1 && (
          <>
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Capture précédente"
              className="absolute top-1/2 left-3 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-white/90 p-2 text-blue-900 shadow-md transition hover:bg-white"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={showNext}
              aria-label="Capture suivante"
              className="absolute top-1/2 right-3 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-white/90 p-2 text-blue-900 shadow-md transition hover:bg-white"
            >
              <ChevronRight size={20} />
            </button>

            <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/80 px-3 py-2 shadow-sm">
              {projectScreenshots.map((screenshot, index) => (
                <button
                  key={screenshot.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Afficher la capture ${index + 1}`}
                  aria-current={index === activeIndex}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'w-5 bg-blue-600' : 'w-2 bg-blue-300 hover:bg-blue-500'
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
