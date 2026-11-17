import SectionHeading from '../../../../components/shared/SectionHeading'

import MainProjectMobileSectionInformation from './components/MainProjectMobileSectionInformation'
import MainProjectMobileSectionScreenshot from './components/MainProjectMobileSectionScreenshot'

export default function MainProjectMobileSection() {
  return (
    <section className="bg-surface px-4 py-6 lg:hidden">
      <SectionHeading title="Projet principal" underline />

      <div className="mt-4 rounded-2xl border border-blue-100 bg-blue-50 p-4">
        <MainProjectMobileSectionScreenshot />

        <MainProjectMobileSectionInformation />
      </div>
    </section>
  )
}
