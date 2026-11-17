import HeroSection from './sections/HeroSection'
import ProjectsListSection from './sections/ProjectsListSection'

// Assembles the Projects page with its introduction and project listing.
export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-surface text-text-primary">
      <HeroSection />

      <ProjectsListSection />
    </main>
  )
}
