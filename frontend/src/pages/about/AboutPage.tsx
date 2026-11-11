import { user } from '../../data/user'
import ProfileCard from './components/profile-card/ProfileCard'
import AboutIntroductionSection from './components/sections/AboutIntroSection'
import HeroSection from './components/sections/HeroSection'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-surface text-text-primary">
      <HeroSection />

      <div className="flex flex-col gap-6 p-4 md:flex-row md:items-start md:gap-8 md:px-8">
        <ProfileCard user={user} />

        <div className="min-w-0 flex-1">
          <AboutIntroductionSection />
        </div>
      </div>
    </main>
  )
}
