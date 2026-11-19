import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { Dispatch, SetStateAction } from 'react'

import type { ProjectImage } from '../../../../../src/@types/interfaces/pages/projects/IProjectImage'

interface ProjectScreenshotModalProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
  projectScreenshots: ProjectImage[]
  activeIndex: number
  setActiveIndex: Dispatch<SetStateAction<number>>
  showPrevious: () => void
  showNext: () => void
}

export default function ProjectScreenshotModal({
  setIsModalOpen,
  projectScreenshots,
  activeIndex,
  setActiveIndex,
  showPrevious,
  showNext,
}: ProjectScreenshotModalProps) {
  const currentScreenshot = projectScreenshots[activeIndex]

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Aperçu des captures du projet"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 md:p-10"
      onClick={(event) => {
        // Only closes when the backdrop itself is clicked.
        if (event.target === event.currentTarget) {
          setIsModalOpen(false)
        }
      }}
    >
      <button
        type="button"
        onClick={() => setIsModalOpen(false)}
        aria-label="Fermer"
        className="absolute top-5 right-5 z-50 cursor-pointer rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
      >
        <X size={28} />
      </button>

      <button
        type="button"
        onClick={showPrevious}
        aria-label="Capture précédente"
        className="absolute left-3 z-50 cursor-pointer rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 md:left-8"
      >
        <ChevronLeft size={28} />
      </button>

      {currentScreenshot && (
        <img
          src={currentScreenshot.src}
          alt={currentScreenshot.alt}
          className="max-h-[85vh] max-w-[85vw] object-contain"
        />
      )}

      <button
        type="button"
        onClick={showNext}
        aria-label="Capture suivante"
        className="absolute right-3 z-50 cursor-pointer rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 md:right-8"
      >
        <ChevronRight size={28} />
      </button>

      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3">
        {projectScreenshots.map((screenshot, index) => (
          <button
            key={screenshot.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Afficher la capture ${index + 1}`}
            aria-current={index === activeIndex}
            className={`h-2.5 rounded-full transition-all ${
              index === activeIndex ? 'w-6 bg-white' : 'w-2.5 bg-white/40 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
