import HighlightsSection from '../../components/shared/HighlightsSection'
import { highlights } from '../../data/pages/lead'
import { ContactSection } from '../recruiter/sections'
import {
  AIAssistedDevelopmentSection,
  CollaborationSection,
  FeaturedProjectSection,
  HeroSection,
  TechnicalEnvironmentSection,
  WorkflowSection,
} from './sections'

export default function LeadPage() {
  return (
    <main className="min-h-screen bg-surface text-text-primary">
      {/* Page introduction focused on technical leadership and collaboration. */}
      <HeroSection />

      <div className="flex flex-col gap-5 px-4 py-5 sm:gap-6 sm:px-6 lg:p-6">
        <HighlightsSection highlights={highlights} />
        <WorkflowSection />
        <TechnicalEnvironmentSection />
        <FeaturedProjectSection />
        <CollaborationSection />
        <AIAssistedDevelopmentSection />
        <ContactSection />
      </div>
    </main>
  )
}
