import { user } from '../../data/user'

import {
  AudienceNavigationSection,
  HeroSection,
  MainProjectMobileSection,
  MainProjectSection,
  TechnologiesSection,
} from './sections'

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
