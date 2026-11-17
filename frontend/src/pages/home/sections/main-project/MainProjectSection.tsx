import SectionHeading from '../../../../components/shared/SectionHeading'
import MainProjectSectionInformation from './components/MainProjectSectionInformation'
import MainProjectSectionScreenshot from './components/MainProjectSectionScreenshot'

export default function MainProjectSection() {
  return (
    //Desktop project presentation; mobile and tablet use a separate component.
    <section className="hidden bg-surface px-6 py-8 lg:block lg:px-12 xl:px-36">
      <div className="mx-auto max-w-7xl">
        {/* Section heading and project name */}
        <div className="flex items-start gap-3">
          <SectionHeading title="Projet principal" underline />

          <span className="ml-3 rounded-lg bg-blue-100 px-3 py-1 text-lg font-bold text-blue-600">
            KineSoin
          </span>
        </div>

        {/* Two-column layout: project screenshots and information */}
        <div className="mx-auto mt-5 grid w-11/12 grid-cols-2 items-center gap-10">
          <MainProjectSectionScreenshot />
          <MainProjectSectionInformation />
        </div>
      </div>
    </section>
  )
}
