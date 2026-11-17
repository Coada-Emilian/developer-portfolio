import SectionHeading from '../../../../components/shared/SectionHeading'
import ProjectChallenges from './components/ProjectChallenges'
import ProjectInformation from './components/ProjectInformation'
import { ProjectScreenshot } from './components/ProjectScreenshot'

// Presents KineSoin, its technologies and the main technical challenges addressed during development.
export default function FeaturedProjectSection() {
  return (
    <section className="my-auto flex flex-col gap-4 rounded-xl ">
      <SectionHeading title="Projet principal" underline />

      {/* Displays the project screenshot and information side by side on desktop. */}
      <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3 lg:gap-6 lg:border lg:border-blue-100 lg:bg-blue-50 p-4">
        <ProjectScreenshot />

        <ProjectInformation />

        <ProjectChallenges />
      </div>
    </section>
  )
}
