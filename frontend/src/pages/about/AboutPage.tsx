import { user } from '../../data/user'
import ProfileCard from './components/profile-card/ProfileCard'
import HeroSection from './components/sections/HeroSection'
import HighlightsSection from './components/sections/HighlightsSection'
import IntroductionSection from './components/sections/IntroSection'
import ObjectivesSection from './components/sections/ObjectivesSection'

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

      <div className="flex flex-col gap-2 px-4 py-1 lg:py-4 lg:flex-row lg:items-start lg:gap-6 lg:px-8">
        <ObjectivesSection />
      </div>
    </main>
  )
}
