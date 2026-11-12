import MainProjectSectionCarousel from './MainProjectSectionCarousel'

export default function MainProjectSectionScreenshot() {
  // Provides the visual container for the project screenshot carousel.
  return (
    <div className="flex h-96 items-center justify-center overflow-hidden rounded-xl border border-blue-100 bg-blue-100 p-2">
      <MainProjectSectionCarousel />
    </div>
  )
}
