import HighlightsSection from '../../components/shared/HighlightsSection'
import ProjectSection from '../../components/shared/project-section/ProjectSection'
import { highlights } from '../../data/pages/lead'
import { projects } from '../../data/projects'

import {
  AIAssistedDevelopmentSection,
  CollaborationSection,
  ContactSectionFooter,
  HeroSection,
  TechnicalEnvironmentSection,
  WorkflowSection,
} from './sections'

export default function LeadPage() {
  const featuredProject = projects.find((project) => project.featured) || projects[0]
  return (
    <main className="min-h-screen bg-surface text-text-primary">
      {/* Page introduction focused on technical leadership and collaboration. */}
      <HeroSection />

      <div className="flex flex-col gap-5 px-4 py-5 sm:gap-6 sm:px-6 lg:p-6">
        <HighlightsSection highlights={highlights} />
        <WorkflowSection />
        <TechnicalEnvironmentSection />
        <ProjectSection
          key={featuredProject.id}
          project={featuredProject}
          isAlternateSection={true}
        />
        <CollaborationSection />
        <AIAssistedDevelopmentSection />
        <ContactSectionFooter />
      </div>
    </main>
  )
}
