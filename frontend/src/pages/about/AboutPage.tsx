import { user } from '../../data/user'
import ProfileCard from './components/profile-card/ProfileCard'
import ApproachSection from './components/sections/ApproachSection'
import HeroSection from './components/sections/HeroSection'
import HighlightsSection from './components/sections/HighlightsSection'
import IntroductionSection from './components/sections/IntroSection'
import ObjectivesSection from './components/sections/ObjectivesSection'
import ValuesSection from './components/sections/ValuesSection'
import VisionSection from './components/sections/VisionSection'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-surface text-text-primary">
      <HeroSection />

      <div className="flex flex-col gap-2 px-4 py-1 lg:py-4 lg:flex-row lg:items-start lg:gap-6 lg:px-8">
        {/* Profile card */}
        <div className="w-full lg:w-80 lg:shrink-0">
          <ProfileCard user={user} />
        </div>

        {/* Introduction */}
        <div className="min-w-0 flex-1 p-4">
          <IntroductionSection />
        </div>

        {/* Highlights */}
        <div className="w-full lg:w-100 lg:shrink-0">
          <HighlightsSection />
        </div>
      </div>

      <div className="w-11/12 h-0.5 mx-auto bg-gray-200 hidden sm:block"></div>

      <div className="grid grid-cols-1 gap-6 px-4 py-4 lg:grid-cols-[1fr_1.2fr_0.8fr] lg:px-8 lg:pb-8">
        {/* Left column */}
        <div className="flex min-w-0 flex-col gap-2">
          <ObjectivesSection />
          <ApproachSection />
        </div>

        {/* Centre column */}
        <div className="flex min-w-0 flex-col gap-4">
          <VisionSection />
          <ValuesSection />
        </div>

        {/* Right column */}
        <div className="min-w-0">{/* InterestsSection will go here */}</div>
      </div>
    </main>
  )
}
