import {
  ContactSection,
  FeaturedProjectSection,
  HeroSection,
  HighlightsSection,
  JourneySection,
  TechnicalSkillsSection,
  TrainingSection,
} from './sections'

// Composes the recruiter-focused page, presenting professional experience, technical skills and featured work.
export default function RecruiterPage() {
  return (
    <main className="min-h-screen bg-surface text-text-primary">
      <HeroSection />

      {/* Groups the recruiter page content into distinct sections with consistent spacing. */}
      <div className="flex flex-col gap-5 px-4 py-5 sm:gap-6 sm:px-6 lg:p-6">
        <HighlightsSection />

        {/* Presents professional experience alongside the main technical skills. */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <JourneySection />

          <TechnicalSkillsSection />
        </div>

        {/* Combines the featured development project with ongoing training and learning. */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <FeaturedProjectSection />

          <TrainingSection />
        </div>

        {/* Provides a final contact call to action for recruiters. */}
        <ContactSection />
      </div>
    </main>
  )
}
