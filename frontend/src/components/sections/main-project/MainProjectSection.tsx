import MainProjectSectionInformation from "./MainProjectSectionInformation";
import MainProjectSectionScreenshot from "./MainProjectSectionScreenshot";

export default function MainProjectSection() {
  return (
    <section className="bg-surface px-6 py-8 lg:px-12 xl:px-36 hidden md:block">
      <div className="mx-auto max-w-7xl md:max-w-11/12">
        <div>
          <h2 className="text-left text-lg font-extrabold text-text-primary md:text-2xl">
            Projet principal
            <span className="ml-3 rounded-lg bg-blue-100 px-3 py-1 text-lg font-bold text-blue-600">
              KineSoin
            </span>
          </h2>

          <div className="mt-2 h-1 w-9 rounded-full bg-blue-500" />
        </div>

        <div className="mt-5 grid grid-cols-2 items-center gap-10 w-11/12 mx-auto">
          <MainProjectSectionScreenshot />

          <MainProjectSectionInformation />
        </div>
      </div>
    </section>
  );
}
