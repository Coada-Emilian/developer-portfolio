import type { IProject } from '../../../@types/interfaces/pages/projects/IProject'
import PageHero from '../../../components/shared/PageHero'

interface HeroSectionProps {
  project?: IProject
}

// Provides the About page hero with responsive introductory text.
export default function HeroSection({ project }: HeroSectionProps) {
  return (
    <PageHero
      title={project?.title}
      mobileSubtitle={project?.description.mobile}
      tabletSubtitle={project?.description.tablet}
      desktopSubtitle={project?.description.desktop}
      project={project}
      backButton={true}
    />
  )
}
