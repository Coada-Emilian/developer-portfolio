import MainProjectSectionCarousel from './MainProjectSectionCarousel'

// Provides the desktop screenshot container for the featured project carousel.
export default function MainProjectSectionScreenshot() {
  return (
    <div className="flex h-96 items-center justify-center overflow-hidden rounded-xl border border-blue-100 bg-blue-100 p-2">
      <MainProjectSectionCarousel />
    </div>
  )
}
