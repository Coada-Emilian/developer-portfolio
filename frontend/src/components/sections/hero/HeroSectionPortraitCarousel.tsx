import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import type { HeroPortraitCarouselProps } from "../../../@types/props/heroSection.props";
import { CAROUSEL_CONFIG } from "../../../config/carousel.config";

export default function HeroSectionPortraitCarousel({
  photos,
  alt,
}: HeroPortraitCarouselProps) {
  // Tracks the currently displayed photo and autoplay state.
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Moves to the previous photo, wrapping around to the last one.
  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? photos.length - 1 : current - 1,
    );
  };

  // Moves to the next photo, wrapping around to the first one.
  const showNext = () => {
    setActiveIndex((current) => (current + 1) % photos.length);
  };

  // Automatically advances the carousel until it is paused.
  useEffect(() => {
    if (isPaused || photos.length <= 1) return;

    const interval = setInterval(showNext, CAROUSEL_CONFIG.AUTO_PLAY_INTERVAL);

    // Clears the previous interval when the effect runs again or unmounts.
    return () => clearInterval(interval);
  }, [isPaused, photos.length]);

  // Nothing to display if no photos have been provided.
  if (photos.length === 0) return null;

  return (
    <div
      className="relative hidden shrink-0 flex-col items-center gap-3 lg:flex"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Portrait images: only the active photo is visible. */}
      <div className="relative h-48 w-48 overflow-hidden rounded-full border-2 border-white">
        {photos.map((photo, index) => (
          <img
            key={photo}
            src={photo}
            alt={alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-${CAROUSEL_CONFIG.TRANSITION_DURATION} ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Previous and next navigation controls. */}
      {photos.length > 1 && (
        <>
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Photo précédente"
            className="absolute top-20 -left-3 cursor-pointer rounded-full bg-white/90 p-1.5 text-blue-900 shadow-md transition hover:bg-white"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            type="button"
            onClick={showNext}
            aria-label="Photo suivante"
            className="absolute top-20 -right-3 cursor-pointer rounded-full bg-white/90 p-1.5 text-blue-900 shadow-md transition hover:bg-white"
          >
            <ChevronRight size={18} />
          </button>
        </>
      )}

      {/* Indicators allow visitors to select a specific photo. */}
      <div className="flex items-center gap-2">
        {photos.map((photo, index) => (
          <button
            key={photo}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Afficher la photo ${index + 1}`}
            aria-current={index === activeIndex}
            className={`h-2 rounded-full transition-all ${
              index === activeIndex
                ? "w-5 bg-white"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
