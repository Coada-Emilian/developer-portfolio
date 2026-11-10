import projectPage from "../../../assets/images/kinesoinPage.png";

export default function MainProjectMobileSectionScreenshot() {
  return (
    <div className="flex items-center justify-center overflow-hidden rounded-xl bg-white p-2">
      <img
        src={projectPage}
        alt="Interface de l'application KineSoin"
        className="h-auto w-full object-contain"
      />
    </div>
  );
}
