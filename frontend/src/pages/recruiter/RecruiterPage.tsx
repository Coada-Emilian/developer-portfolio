import HeroSection from './sections/HeroSection'
import HighlightsSection from './sections/HighlightsSection'
import JourneySection from './sections/journey/JourneySection'

export default function RecruiterPage() {
  return (
    <main className="min-h-screen bg-surface text-text-primary">
      <HeroSection />

      <div className="flex flex-col gap-5">
        <HighlightsSection />
        <div className="px-4 grid grid-cols-2 ">
          <JourneySection />
        </div>
      </div>
    </main>
  )
}
