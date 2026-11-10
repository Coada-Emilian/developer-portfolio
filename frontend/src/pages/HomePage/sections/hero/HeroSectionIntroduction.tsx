import type { HeroSectionProps } from "../../../../@types/props/heroSection.props";

export default function HeroSectionIntroduction({ user }: HeroSectionProps) {
  return (
    <>
      {/* Introductory greeting, adapted for mobile and desktop. */}
      <div className="mb-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-100 lg:hidden">
          Bienvenue sur mon portfolio
        </p>

        <p className="hidden text-sm font-semibold uppercase tracking-widest text-blue-100 lg:block">
          Bonjour, je suis
        </p>

        {/* Decorative underline. */}
        <div className="mt-2 h-1 w-9 rounded-full bg-blue-500" />
      </div>

      {/* User's name, with the last name highlighted on desktop. */}
      <h1 className="text-3xl font-extrabold tracking-tight lg:text-5xl lg:uppercase">
        {user.firstName}
        <span className="lg:text-blue-500"> {user.lastName}</span>
      </h1>

      {/* Professional title. */}
      <h2 className="mt-1 text-base font-medium sm:text-2xl lg:text-3xl">
        {user.subtitle}
      </h2>

      {/* Shorter introduction displayed on mobile. */}
      <p className="mt-3 w-xs max-w-lg text-xs leading-relaxed text-blue-50 lg:hidden">
        Je conçois et développe des applications web modernes, robustes et
        centrées sur les besoins utilisateurs.
      </p>

      {/* Alternative introduction displayed on desktop. */}
      <p className="mt-3 hidden w-lg text-base leading-relaxed text-blue-50 lg:block">
        Concevoir des solutions utiles, apprendre en continu et transformer des
        idées en applications concrètes.
      </p>
    </>
  );
}
