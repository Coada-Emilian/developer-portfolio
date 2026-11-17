import MainProjectSectionCarousel from '../../../../home/sections/main-project/components/MainProjectSectionCarousel'

// Provides a responsive screenshot container for the recruiter featured project.
export default function FeaturedProjectScreenshot() {
  return (
    <div className="aspect-video min-w-0 overflow-hidden rounded-lg border border-blue-100 bg-blue-100 p-1.5 sm:p-2">
      <MainProjectSectionCarousel />
    </div>
  )
}
