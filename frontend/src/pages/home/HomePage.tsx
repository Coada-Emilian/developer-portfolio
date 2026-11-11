import { user } from '../../data/user'
import AudienceNavigationSection from './sections/audience-navigation/AudienceNavigationSection'
import HeroSection from './sections/hero/HeroSection'
import MainProjectMobileSection from './sections/main-project-mobile/MainProjectMobileSection'
import MainProjectSection from './sections/main-project/MainProjectSection'
import TechnologiesSection from './sections/technologies/TechnologiesSection'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-surface text-text-primary">
      <HeroSection user={user} />

      <AudienceNavigationSection />

      <MainProjectSection />

      <MainProjectMobileSection />

      <TechnologiesSection />
    </main>
  )
}
