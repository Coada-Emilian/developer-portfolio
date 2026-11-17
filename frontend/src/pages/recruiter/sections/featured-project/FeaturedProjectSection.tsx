import SectionHeading from '../../../../components/shared/SectionHeading'
import FeaturedProjectInformation from './components/FeaturedProjectInformation'
import FeaturedProjectScreenshot from './components/FeaturedProjectScreenshot'

// Presents KineSoin as the featured development project for recruiters.
export default function FeaturedProjectSection() {
  return (
    <section className="rounded-xl lg:border lg:border-blue-100 lg:bg-blue-50 lg:p-4 my-auto">
      <div className="mb-4 flex items-center gap-2">
        <SectionHeading title="Projet principal" underline />
      </div>

      <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-2 lg:gap-6 md:w-10/12 md:mx-auto lg:w-full">
        <FeaturedProjectScreenshot />

        <FeaturedProjectInformation />
      </div>
    </section>
  )
}
