import { user } from '../../data/user'
import ProfileCard from './components/profile-card/ProfileCard'
import AboutHighlightsSection from './components/sections/AboutHighlightsSection'
import AboutIntroductionSection from './components/sections/AboutIntroSection'
import HeroSection from './components/sections/HeroSection'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-surface text-text-primary">
      <HeroSection />

      <div className="flex flex-col gap-2 p-4 lg:flex-row lg:items-start lg:gap-6 lg:px-8">
        {/* Profile card */}
        <div className="w-full lg:w-80 lg:shrink-0">
          <ProfileCard user={user} />
        </div>

        {/* Introduction */}
        <div className="min-w-0 flex-1 p-4">
          <AboutIntroductionSection />
        </div>

        {/* Highlights */}
        <div className="w-full lg:w-100 lg:shrink-0">
          <AboutHighlightsSection />
        </div>
      </div>

      <div className="w-11/12 h-0.5 mx-auto bg-gray-200"></div>
    </main>
  )
}
