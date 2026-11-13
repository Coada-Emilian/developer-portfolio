import MainProjectMobileSectionInformation from './components/MainProjectMobileSectionInformation'
import MainProjectMobileSectionScreenshot from './components/MainProjectMobileSectionScreenshot'

export default function MainProjectMobileSection() {
  return (
    // Mobile and tablet project presentation; desktop uses a separate component.
    <section className="bg-surface px-4 py-6 lg:hidden">
      {/* Section heading and decorative underline */}
      <div>
        <h2 className="text-left text-lg font-extrabold text-text-primary">Projet principal</h2>

        <div className="mt-2 h-1 w-9 rounded-full bg-blue-500" />
      </div>

      {/* Project card containing its screenshot carousel and information */}
      <div className="mt-4 rounded-2xl border border-blue-100 bg-blue-50 p-4">
        <MainProjectMobileSectionScreenshot />
        <MainProjectMobileSectionInformation />
      </div>
    </section>
  )
}
