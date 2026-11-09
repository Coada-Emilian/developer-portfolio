import { Code2, UserRound } from "lucide-react";

export default function HeroSectionActions() {
  return (
    <div className="mt-5 flex flex-wrap gap-3 lg:gap-4">
      <a
        href="#projects"
        className="flex items-center gap-2 rounded-xl bg-blue-600 px-2 py-2 text-xs font-semibold text-white transition hover:bg-blue-500 lg:px-5 lg:py-2.5 sm:text-base"
      >
        <Code2 size={18} className="lg:hidden" />
        <Code2 size={22} className="hidden lg:block" />
        Découvrir mes projets
      </a>

      <a
        href="#about"
        className="flex items-center gap-2 rounded-xl border-2 border-white px-2 py-2 text-xs font-semibold text-white transition hover:bg-white/10 lg:px-5 lg:py-2.5 sm:text-base"
      >
        <UserRound size={18} className="lg:hidden" />
        <UserRound size={22} className="hidden lg:block" />À propos de moi
      </a>
    </div>
  );
}
