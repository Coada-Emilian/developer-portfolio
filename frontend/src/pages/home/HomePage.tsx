import { user } from '../../data/user'

import ProjectSection from '../../components/shared/project-section/ProjectSection'
import { projects } from '../../data/projects'
import { AudienceNavigationSection, HeroSection, TechnologiesSection } from './sections'

export default function HomePage() {
  const mainProject = projects.find((project) => project.featured) || projects[0]

  return (
    <main className="min-h-screen bg-surface text-text-primary">
      <HeroSection user={user} />

      <div className="flex flex-col gap-2 px-4 pt-1 md:pb-4 lg:items-start lg:gap-6 lg:px-8 lg:py-4">
        {' '}
        <AudienceNavigationSection />
        <ProjectSection key={mainProject.id} project={mainProject} />
        <TechnologiesSection />
      </div>
    </main>
  )
}
