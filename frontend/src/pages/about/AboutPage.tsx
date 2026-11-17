import { user } from '../../data/user'

import ProfileCard from './components/profile-card/ProfileCard'
import {
  ApproachSection,
  HeroSection,
  HighlightsSection,
  InterestsSection,
  IntroductionSection,
  ObjectivesSection,
  ValuesSection,
  VisionSection,
} from './sections'

// Assembles the About page, combining the user's profile, professional background and personal interests.
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-surface text-text-primary">
      <HeroSection />

      {/* Profile, introduction and professional highlights. */}
      <div className="flex flex-col gap-2 px-4 pt-1 md:pb-4 lg:flex-row lg:items-start lg:gap-6 lg:px-8 lg:py-4">
        <div className="w-full md:mx-auto md:w-10/12 lg:mx-0 lg:w-80 lg:shrink-0">
          <ProfileCard user={user} />
        </div>

        <div className="min-w-0 flex-1 p-4">
          <IntroductionSection />
        </div>

        <div className="w-full lg:w-100 lg:shrink-0">
          <HighlightsSection />
        </div>
      </div>

      <div className="mx-auto hidden h-0.5 w-11/12 bg-gray-200 sm:block" />

      {/* Objectives, working approach, vision, values and interests. */}
      <div className="grid grid-cols-1 gap-6 px-4 py-4 lg:grid-cols-[1fr_1.2fr_0.8fr] lg:px-8 lg:pb-8">
        <div className="grid min-w-0 grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-1">
          <ObjectivesSection />

          <ApproachSection />
        </div>

        <div className="flex min-w-0 flex-col gap-4">
          <VisionSection />

          <ValuesSection />
        </div>

        <div className="min-w-0">
          <InterestsSection />
        </div>
      </div>
    </main>
  )
}
