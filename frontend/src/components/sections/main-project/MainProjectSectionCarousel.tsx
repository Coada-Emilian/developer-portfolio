import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import { projectScreenshots } from "../../../data/projectScreenshots";

export default function MainProjectSectionCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const AUTO_PLAY_INTERVAL = 5000;

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? projectScreenshots.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % projectScreenshots.length);
  };

  useEffect(() => {
    if (isPaused || projectScreenshots.length <= 1) return;

    const interval = setInterval(showNext, AUTO_PLAY_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused, activeIndex]);

  return (
    <div
      className="relative flex h-full w-full items-center justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {projectScreenshots.map((screenshot, index) => (
        <img
          key={screenshot}
          src={screenshot}
          alt={`Capture d'écran ${index + 1} de KineSoin`}
          className={`absolute inset-0 h-full w-full rounded-lg object-contain p-2 transition-opacity duration-700 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <button
        type="button"
        onClick={showPrevious}
        aria-label="Capture précédente"
        className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 text-blue-900 shadow-md transition hover:bg-white cursor-pointer"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        type="button"
        onClick={showNext}
        aria-label="Capture suivante"
        className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 text-blue-900 shadow-md transition hover:bg-white cursor-pointer"
      >
        <ChevronRight size={20} />
      </button>

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
  );
}
