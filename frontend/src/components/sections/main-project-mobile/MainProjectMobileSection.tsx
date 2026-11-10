import MainProjectMobileSectionInformation from "./MainProjectMobileSectionInformation";
import MainProjectMobileSectionScreenshot from "./MainProjectMobileSectionScreenshot";

export default function MainProjectMobileSection() {
  return (
    <section className="bg-surface px-4 py-6 md:hidden">
      <div>
        <h2 className="text-left text-lg font-extrabold text-text-primary md:text-2xl">
          Projet principal
        </h2>

        <div className="mt-2 h-1 w-9 rounded-full bg-blue-500" />
      </div>
      <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4 mt-4">
        <MainProjectMobileSectionScreenshot />

        <MainProjectMobileSectionInformation />
      </div>
    </section>
  );
}
