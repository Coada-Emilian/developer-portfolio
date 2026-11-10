import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { projectScreenshots } from "../../../data/projectScreenshots";

const AUTO_PLAY_INTERVAL = 5000;

export default function MainProjectMobileSectionScreenshot() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const touchTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? projectScreenshots.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % projectScreenshots.length);
  };

  // Automatic rotation
  useEffect(() => {
    if (isPaused || isModalOpen || projectScreenshots.length <= 1) return;

    const interval = setInterval(showNext, AUTO_PLAY_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused, isModalOpen, activeIndex]);

  // Resume autoplay after touch interaction
  const handleTouchInteraction = () => {
    setIsPaused(true);

    if (touchTimeout.current) {
      clearTimeout(touchTimeout.current);
    }

    touchTimeout.current = setTimeout(() => {
      setIsPaused(false);
    }, AUTO_PLAY_INTERVAL);
  };

  useEffect(() => {
    return () => {
      if (touchTimeout.current) {
        clearTimeout(touchTimeout.current);
      }
    };
  }, []);

  // Keyboard navigation and Escape
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsModalOpen(false);
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  // Prevent background scrolling
  useEffect(() => {
    if (!isModalOpen) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <>
      {/* Mobile carousel */}
      <div
        className="relative flex h-44 items-center justify-center overflow-hidden rounded-xl bg-white p-2"
        onTouchStart={handleTouchInteraction}
      >
        {projectScreenshots.map((screenshot, index) => (
          <button
            key={screenshot}
            type="button"
            onClick={() => {
              setActiveIndex(index);
              setIsModalOpen(true);
            }}
            aria-label={`Agrandir la capture ${index + 1}`}
            className={`absolute inset-0 h-full w-full cursor-zoom-in p-2 transition-opacity duration-700 ${
              index === activeIndex
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          >
            <img
              src={screenshot}
              alt={`Capture d'écran ${index + 1} de KineSoin`}
              className="h-full w-full rounded-lg object-contain"
            />
          </button>
        ))}

        {/* Navigation */}
        <button
          type="button"
          onClick={showPrevious}
          aria-label="Capture précédente"
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-1.5 text-blue-900 shadow-md"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          type="button"
          onClick={showNext}
          aria-label="Capture suivante"
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-1.5 text-blue-900 shadow-md"
        >
          <ChevronRight size={18} />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/80 px-2.5 py-1.5">
          {projectScreenshots.map((screenshot, index) => (
            <button
              key={screenshot}
              type="button"
              onClick={() => {
                setActiveIndex(index);
                handleTouchInteraction();
              }}
              aria-label={`Afficher la capture ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-4 bg-blue-600" : "w-1.5 bg-blue-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Mobile lightbox */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Aperçu des captures KineSoin"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-3"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setIsModalOpen(false);
            }
          }}
        >
          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            aria-label="Fermer"
            className="absolute right-4 top-4 z-50 rounded-full bg-white/10 p-2 text-white"
          >
            <X size={24} />
          </button>

          <button
            type="button"
            onClick={showPrevious}
            aria-label="Capture précédente"
            className="absolute left-2 z-50 rounded-full bg-white/10 p-2 text-white"
          >
            <ChevronLeft size={24} />
          </button>

          <img
            src={projectScreenshots[activeIndex]}
            alt={`Capture d'écran ${activeIndex + 1} de KineSoin`}
            className="max-h-[80vh] max-w-[85vw] object-contain"
          />

          <button
            type="button"
            onClick={showNext}
            aria-label="Capture suivante"
            className="absolute right-2 z-50 rounded-full bg-white/10 p-2 text-white"
          >
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-6 flex items-center gap-2">
            {projectScreenshots.map((screenshot, index) => (
              <button
                key={screenshot}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Afficher la capture ${index + 1}`}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex ? "w-5 bg-white" : "w-2 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
