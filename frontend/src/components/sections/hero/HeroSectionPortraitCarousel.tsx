import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

interface HeroPortraitCarouselProps {
  photos: string[];
  alt: string;
}

export default function HeroSectionPortraitCarousel({
  photos,
  alt,
}: HeroPortraitCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? photos.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % photos.length);
  };

  useEffect(() => {
    if (isPaused || photos.length <= 1) return;

    const interval = setInterval(showNext, 5000);

    return () => clearInterval(interval);
  }, [isPaused, photos.length]);

  if (photos.length === 0) return null;

  return (
    <div
      className="relative hidden shrink-0 flex-col items-center gap-3 lg:flex"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Portrait */}
      <div className="relative h-48 w-48 overflow-hidden rounded-full border-2 border-white">
        {photos.map((photo, index) => (
          <img
            key={photo}
            src={photo}
            alt={alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {photos.length > 1 && (
        <>
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Photo précédente"
            className="absolute -left-3 top-20 rounded-full bg-white/90 p-1.5 text-blue-900 shadow-md transition hover:bg-white"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            type="button"
            onClick={showNext}
            aria-label="Photo suivante"
            className="absolute -right-3 top-20 rounded-full bg-white/90 p-1.5 text-blue-900 shadow-md transition hover:bg-white"
          >
            <ChevronRight size={18} />
          </button>
        </>
      )}

      <div className="flex items-center gap-2">
        {photos.map((photo, index) => (
          <button
            key={photo}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Afficher la photo ${index + 1}`}
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
