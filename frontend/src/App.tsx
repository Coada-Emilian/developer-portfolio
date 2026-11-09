import { Code2, UserRound } from "lucide-react";
import heroBackground from "./assets/images/hero_background.png";
import heroBackgroundMobile from "./assets/images/hero_background_mobile.png";
import userImage from "./assets/images/user_image.png";
import Navbar from "./components/layout/navbar/Navbar";

export default function App() {
  return (
    <main className="min-h-screen bg-surface font-body text-text-primary">
      <Navbar />

      <section className="relative flex min-h-[320px] items-center overflow-hidden px-5 py-8 sm:px-8 lg:min-h-[380px] lg:px-16">
        <div
          className="absolute inset-0 bg-cover bg-[position:100%_center] bg-no-repeat lg:hidden"
          style={{ backgroundImage: `url(${heroBackgroundMobile})` }}
        />

        <div
          className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat lg:block"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />

        <div className="relative z-10 flex w-full items-center gap-8">
          <div className="relative hidden shrink-0 lg:block">
            <img
              src={userImage}
              alt="Emilian Coada"
              className="h-48 w-48 rounded-full border-2 border-white object-cover"
            />
          </div>

          <div className="hidden h-40 w-px shrink-0 bg-blue-100/70 lg:block" />

          <div className="max-w-2xl text-white">
            <div className="mb-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-100 sm:hidden">
                Bienvenue sur mon portfolio
              </p>

              <p className="hidden sm:block font-semibold uppercase tracking-widest text-blue-100 text-sm">
                Bonjour, je suis
              </p>

              <div className="mt-2 h-1 w-9 rounded-full bg-blue-500" />
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl sm:uppercase">
              Emilian
              <span className="sm:text-blue-500"> Coada</span>
            </h1>

            <h2 className="mt-1 text-base font-medium sm:text-2xl lg:text-3xl">
              Développeur Full Stack
            </h2>

            <p className="mt-3 sm:hidden w-xs sm:w-lg max-w-lg text-xs leading-relaxed text-blue-50 ">
              Je conçois et développe des applications web modernes, robustes et
              centrées sur les besoins utilisateurs.
            </p>

            <p className="hidden sm:block mt-3 w-lg leading-relaxed text-blue-50 text-base">
              Concevoir des solutions utiles, apprendre en continu et
              transformer des idées en applications concrètes.
            </p>

            <div className="mt-5 flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#projects"
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-2 sm:px-5 py-2 sm:py-2.5 text-xs font-semibold text-white transition hover:bg-blue-500 sm:text-base"
              >
                <Code2 size={18} className="sm:hidden" />
                <Code2 size={22} className="hidden sm:block" />
                Découvrir mes projets
              </a>

              <a
                href="#about"
                className="flex items-center gap-2 rounded-xl border-2 border-white px-2 sm:px-5 py-2 sm:py-2.5 text-xs font-semibold text-white transition hover:bg-white/10 sm:text-base"
              >
                <UserRound size={18} className="sm:hidden" />
                <UserRound size={22} className="hidden sm:block" />À propos de
                moi
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
