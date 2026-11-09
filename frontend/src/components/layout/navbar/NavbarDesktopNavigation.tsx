import { Code2, FolderKanban, House, Mail, UserRound } from "lucide-react";

export default function NavbarDesktopNavigation() {
  return (
    <div className="hidden items-center gap-6 text-sm font-medium lg:flex">
      <a href="/" className="flex items-center gap-2 text-blue-500">
        <House size={18} />
        Accueil
      </a>

      <a
        href="#about"
        className="flex items-center gap-2 transition hover:text-blue-500"
      >
        <UserRound size={18} />À propos
      </a>

      <a
        href="#projects"
        className="flex items-center gap-2 transition hover:text-blue-500"
      >
        <FolderKanban size={18} />
        Projets
      </a>

      <a
        href="#skills"
        className="flex items-center gap-2 transition hover:text-blue-500"
      >
        <Code2 size={18} />
        Compétences
      </a>

      <a
        href="#contact"
        className="flex items-center gap-2 transition hover:text-blue-500"
      >
        <Mail size={18} />
        Contact
      </a>
    </div>
  );
}
