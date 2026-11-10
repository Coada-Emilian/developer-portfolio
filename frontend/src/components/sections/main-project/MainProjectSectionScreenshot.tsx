import projectPage from "../../../assets/images/kinesoinPage.png";

export default function MainProjectSectionScreenshot() {
  return (
    <div className="flex h-96 items-center justify-center overflow-hidden rounded-xl border border-blue-100 bg-slate-100 p-2">
      <img
        src={projectPage}
        alt="Interface de l'application KineSoin"
        className="h-full w-full rounded-lg object-contain"
      />
    </div>
  );
}
