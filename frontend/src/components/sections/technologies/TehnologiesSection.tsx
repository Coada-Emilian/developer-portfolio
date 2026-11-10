import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import { technologies } from "../../../data/technologies";
import TechnologyCard from "./TechnologyCard";

const AUTO_PLAY_INTERVAL = 5000;

export default function TechnologiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  // Responsive visible card count
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const updateVisibleCount = () => {
      setVisibleCount(mediaQuery.matches ? 5 : 3);
      setActiveIndex(0);
    };

    updateVisibleCount();
    mediaQuery.addEventListener("change", updateVisibleCount);

    return () => {
      mediaQuery.removeEventListener("change", updateVisibleCount);
    };
  }, []);

  const maxIndex = Math.max(0, technologies.length - visibleCount);

  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? maxIndex : current - 1));
  };

  const showNext = () => {
    setActiveIndex((current) => (current >= maxIndex ? 0 : current + 1));
  };

  // Automatic rotation
  useEffect(() => {
    if (isPaused || maxIndex === 0) return;

    const interval = setInterval(showNext, AUTO_PLAY_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused, activeIndex, maxIndex]);

  return (
    <section className="bg-surface px-3 py-4 sm:px-8 md:py-8 lg:px-12 xl:px-36">
      <div className="mx-auto max-w-7xl md:max-w-11/12">
        <h2 className="text-left text-lg font-extrabold text-text-primary md:text-2xl">
          Technologies principales
        </h2>

        <div className="mt-2 h-1 w-9 rounded-full bg-blue-500" />

        {/* Carousel */}
        <div
          className="relative mt-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Previous button */}
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Technologies précédentes"
            className="absolute -left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-1.5 text-blue-900 shadow-md transition hover:bg-blue-50 md:-left-5 md:p-2 cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Cards */}
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

          {/* Next button */}
          <button
            type="button"
            onClick={showNext}
            aria-label="Technologies suivantes"
            className="absolute -right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-1.5 text-blue-900 shadow-md transition hover:bg-blue-50 md:-right-5 md:p-2 cursor-pointer"
          >
            <ChevronRight size={20} />
          </button>

          {/* Indicators */}
          <div className="mt-5 flex items-center justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Afficher les technologies à partir de la position ${index + 1}`}
                aria-current={activeIndex === index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-5 bg-blue-600"
                    : "w-2 bg-blue-300 hover:bg-blue-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
