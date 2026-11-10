import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";

import { CAROUSEL_CONFIG } from "../../../../config/carousel.config";
import { projectScreenshots } from "../../../../data/projectScreenshots";

export default function MainProjectSectionCarousel() {
  // Tracks the active screenshot, autoplay state and lightbox visibility.
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Displays the previous screenshot, wrapping around to the last one.
  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? projectScreenshots.length - 1 : current - 1,
    );
  };

  // Displays the next screenshot, wrapping around to the first one.
  const showNext = () => {
    setActiveIndex((current) => (current + 1) % projectScreenshots.length);
  };

  // Automatically advances the carousel while it is active and unpaused.
  useEffect(() => {
    if (isPaused || isModalOpen || projectScreenshots.length <= 1) return;

    const interval = setInterval(showNext, CAROUSEL_CONFIG.AUTO_PLAY_INTERVAL);

    // Resets the interval when the active screenshot or carousel state changes.
    return () => clearInterval(interval);
  }, [isPaused, isModalOpen, activeIndex]);

  // Handles keyboard navigation and closing the lightbox.
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  // Prevents the background page from scrolling while the lightbox is open.
  useEffect(() => {
    if (!isModalOpen) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <>
      {/* Main carousel with autoplay paused while the user hovers over it. */}
      <div
        className="relative flex h-full w-full items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Screenshot buttons: only the active screenshot is interactive. */}
        {projectScreenshots.map((screenshot, index) => (
          <button
            key={screenshot}
            type="button"
            onClick={() => {
              setActiveIndex(index);
              setIsModalOpen(true);
            }}
            aria-label={`Agrandir la capture ${index + 1}`}
            className={`absolute inset-0 h-full w-full cursor-zoom-in transition-opacity duration-700 ${
              index === activeIndex
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          >
            <img
              src={screenshot}
              alt={`Capture d'écran ${index + 1} de KineSoin`}
              className="h-full w-full rounded-lg object-contain p-2"
            />
          </button>
        ))}

        {/* Previous and next navigation controls. */}
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

        {/* Indicators allow visitors to jump directly to a screenshot. */}
        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/80 px-3 py-2 shadow-sm">
          {projectScreenshots.map((screenshot, index) => (
            <button
              key={screenshot}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Afficher la capture ${index + 1}`}
              aria-current={index === activeIndex}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-5 bg-blue-600"
                  : "w-2 bg-blue-300 hover:bg-blue-500"
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 md:p-10"
          onClick={(event) => {
            // Closes the lightbox only when clicking the backdrop itself.
            if (event.target === event.currentTarget) {
              setIsModalOpen(false);
            }
          }}
        >
          {/* Closes the lightbox and returns to the main carousel. */}
          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            aria-label="Fermer"
            className="absolute top-5 right-5 z-50 cursor-pointer rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
          >
            <X size={28} />
          </button>

          {/* Previous screenshot navigation. */}
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Capture précédente"
            className="absolute left-3 z-50 cursor-pointer rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 md:left-8"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Enlarged version of the currently selected screenshot. */}
          <img
            src={projectScreenshots[activeIndex]}
            alt={`Capture d'écran ${activeIndex + 1} de KineSoin`}
            className="max-h-[85vh] max-w-[85vw] object-contain"
          />

          {/* Next screenshot navigation. */}
          <button
            type="button"
            onClick={showNext}
            aria-label="Capture suivante"
            className="absolute right-3 z-50 cursor-pointer rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 md:right-8"
          >
            <ChevronRight size={28} />
          </button>

          {/* Indicators allow navigation between screenshots in the lightbox. */}
          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3">
            {projectScreenshots.map((screenshot, index) => (
              <button
                key={screenshot}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Afficher la capture ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-6 bg-white"
                    : "w-2.5 bg-white/40 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
