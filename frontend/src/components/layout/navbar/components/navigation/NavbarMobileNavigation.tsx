import { Code2, Download, FolderKanban, House, Mail, UserRound } from 'lucide-react'
import type { NavbarMobileNavigationProps } from '../../../../../@types/props/layout/layout.props'
import NavbarNavigationLink from './NavbarNavigationLink'

export default function NavbarMobileNavigation({ closeMenu }: NavbarMobileNavigationProps) {
  return (
    <nav
      id="mobile-navigation"
      className="absolute left-0 top-full z-50 w-full border-t border-navy-800 bg-navy-950 px-5 py-4 shadow-lg lg:hidden"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-2">
        <NavbarNavigationLink
          to="/"
          end={true}
          onClick={closeMenu}
          icon={<House size={20} />}
          label="Accueil"
        />

        <NavbarNavigationLink
          to="/about"
          onClick={closeMenu}
          icon={<UserRound size={20} />}
          label="À propos"
        />

        <NavbarNavigationLink
          to="/projects"
          onClick={closeMenu}
          icon={<FolderKanban size={20} />}
          label="Projets"
        />

        <NavbarNavigationLink
          to="/skills/technical"
          matchPaths={['/skills/personal', '/skills/complementary']}
          icon={<Code2 size={20} />}
          label="Compétences"
        />

        <NavbarNavigationLink
          to="/contact"
          onClick={closeMenu}
          icon={<Mail size={20} />}
          label="Contact"
        />

        <a
          href="/cv.pdf"
          download
          onClick={closeMenu}
          className="mx-auto mt-2 flex w-fit items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-navy-950"
        >
          <Download size={18} />
          Télécharger mon CV
        </a>
      </div>
    </nav>
  )
}
