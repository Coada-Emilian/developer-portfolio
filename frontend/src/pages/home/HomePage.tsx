import { user } from '../../data/user'

import ProjectSection from '../../components/shared/project-section/ProjectSection'
import { projects } from '../../data/projects'
import {
  AudienceNavigationSection,
  HeroSection,
  MainProjectMobileSection,
  TechnologiesSection,
} from './sections'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-surface text-text-primary">
      <HeroSection user={user} />

      <AudienceNavigationSection />

      {projects.map((project) => (
        <ProjectSection key={project.id} project={project} />
      ))}

      <MainProjectMobileSection />

      <TechnologiesSection />
    </main>
  )
}
