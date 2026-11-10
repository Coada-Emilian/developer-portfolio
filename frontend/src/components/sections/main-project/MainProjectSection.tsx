import { Stethoscope } from "lucide-react";
import projectPage from "../../../assets/images/kinesoinPage.png";
import projectBackground from "../../../assets/images/project_background.png";

export default function MainProjectSection() {
  return (
    <section className="bg-surface px-6 py-8 lg:px-12 xl:px-36">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div>
          <div className="mb-2 h-1 w-9 rounded-full bg-blue-500" />

          <h2 className="text-2xl font-extrabold text-text-primary">
            Projet principal
            <span className="ml-3 rounded-lg bg-blue-100 px-3 py-1 text-lg font-bold text-blue-600">
              KineSoin
            </span>
          </h2>
        </div>

        {/* Project content */}
        <div className="mt-5 grid grid-cols-2 items-center gap-8">
          {/* Project screenshot */}
          <div className="flex h-64 items-center justify-center overflow-hidden rounded-xl border border-blue-100 bg-blue-50 p-4">
            <img
              src={projectPage}
              alt="Interface de l'application KineSoin"
              className="h-full w-full rounded-lg object-contain"
            />
          </div>

          {/* Project information */}
          <div
            className="relative flex flex-col gap-5 rounded-xl bg-cover bg-center p-5"
            style={{ backgroundImage: `url(${projectBackground})` }}
          >
            {/* Background overlay */}
            <div className="absolute inset-0 rounded-xl bg-white/60" />

            {/* Project title and description */}
            <div className="relative flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                <Stethoscope className="h-10 w-10 text-blue-500" />
              </div>

              <div>
                <h3 className="text-3xl font-extrabold text-text-primary">
                  KineSoin
                </h3>

                <p className="mt-1 text-base text-text-primary">
                  Application de gestion pour cabinet de kinésithérapie. Gestion
                  des patients, rendez-vous, séances et facturation.
                </p>
              </div>
            </div>

            {/* Technologies */}
            <div className="relative flex flex-wrap gap-3">
              {["Java", "Spring Boot", "React", "PostgreSQL", "API REST"].map(
                (technology) => (
                  <span
                    key={technology}
                    className="rounded-lg bg-blue-100/90 px-4 py-2 text-sm font-semibold text-text-primary"
                  >
                    {technology}
                  </span>
                ),
              )}
            </div>

            {/* Actions */}
            <div className="relative flex flex-wrap gap-4">
              <a
                href="#"
                className="rounded-xl bg-blue-900 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
              >
                Voir le projet ↗
              </a>

              <a
                href="#"
                className="rounded-xl border border-blue-900 bg-white/70 px-6 py-3 font-semibold text-text-primary transition hover:bg-blue-50"
              >
                Code sur GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
