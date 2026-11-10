import { Code2, Download, FolderKanban, House, Mail, UserRound } from 'lucide-react'
import type { NavbarMobileNavigationProps } from '../../../@types/props/navbar.props'

export default function NavbarMobileNavigation({ closeMenu }: NavbarMobileNavigationProps) {
  return (
    <nav
      id="mobile-navigation"
      className="absolute left-0 top-full z-50 w-full border-t border-navy-800 bg-navy-950 px-5 py-4 shadow-lg lg:hidden"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-2">
        <a
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-blue-500 hover:bg-navy-800 text-sm"
        >
          <House size={18} />
          Accueil
        </a>

        <a
          href="/about"
          onClick={closeMenu}
          className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-navy-800 text-sm"
        >
          <UserRound size={20} />À propos
        </a>

        <a
          href="/projects"
          onClick={closeMenu}
          className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-navy-800 text-sm"
        >
          <FolderKanban size={20} />
          Projets
        </a>

        <a
          href="/skills"
          onClick={closeMenu}
          className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-navy-800 text-sm"
        >
          <Code2 size={20} />
          Compétences
        </a>

        <a
          href="/contact"
          onClick={closeMenu}
          className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-navy-800 text-sm"
        >
          <Mail size={20} />
          Contact
        </a>

        <a
          href="/cv.pdf"
          download
          onClick={closeMenu}
          className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 font-semibold text-navy-950 w-fit mx-auto text-sm"
        >
          <Download size={18} />
          Télécharger mon CV
        </a>
      </div>
    </nav>
  )
}
