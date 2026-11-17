import FeaturedProjectSection from './sections/featured-project/FeaturedProjectSection'
import HeroSection from './sections/HeroSection'
import HighlightsSection from './sections/HighlightsSection'
import JourneySection from './sections/journey/JourneySection'
import TechnicalSkillsSection from './sections/TechnicalSkillsSection'

export default function RecruiterPage() {
  return (
    <main className="min-h-screen bg-surface text-text-primary">
      <HeroSection />

      <div className="flex flex-col gap-5 lg:p-6">
        <HighlightsSection />

        <div className=" grid grid-cols-1 space-y-6 px-6 lg:grid-cols-2 lg:space-x-6">
          <JourneySection />

          <TechnicalSkillsSection />
        </div>

        <div className="grid grid-cols-1 space-y-6 px-6 lg:grid-cols-2 lg:space-x-6">
          <FeaturedProjectSection />
        </div>
      </div>
    </main>
  )
}
