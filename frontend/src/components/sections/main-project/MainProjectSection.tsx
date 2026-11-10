import MainProjectSectionInformation from "./MainProjectSectionInformation";
import MainProjectSectionScreenshot from "./MainProjectSectionScreenshot";

export default function MainProjectSection() {
  return (
    // Desktop and tablet project presentation; mobile uses a separate component.
    <section className="hidden bg-surface px-6 py-8 md:block lg:px-12 xl:px-36">
      <div className="mx-auto max-w-7xl md:max-w-11/12">
        {/* Section heading and project name. */}
        <div>
          <h2 className="text-left text-lg font-extrabold text-text-primary md:text-2xl">
            Projet principal
            <span className="ml-3 rounded-lg bg-blue-100 px-3 py-1 text-lg font-bold text-blue-600">
              KineSoin
            </span>
          </h2>

          {/* Decorative heading underline. */}
          <div className="mt-2 h-1 w-9 rounded-full bg-blue-500" />
        </div>

        {/* Two-column layout: project screenshots and information. */}
        <div className="mx-auto mt-5 grid w-11/12 grid-cols-2 items-center gap-10">
          <MainProjectSectionScreenshot />

          <MainProjectSectionInformation />
        </div>
      </div>
    </section>
  );
}
