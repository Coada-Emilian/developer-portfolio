import { Code2, FolderKanban, House, Mail, UserRound } from 'lucide-react'
import NavbarNavigationLink from './NavbarNavigationLink'

export default function NavbarDesktopNavigation() {
  return (
    <div className="hidden items-center gap-6 text-sm font-medium lg:flex">
      <NavbarNavigationLink to="/" end icon={<House size={18} />} label="Accueil" />

      <NavbarNavigationLink to="/about" icon={<UserRound size={18} />} label="À propos" />

      <NavbarNavigationLink to="/projects" icon={<FolderKanban size={18} />} label="Projets" />

      <NavbarNavigationLink to="/skills/technical" icon={<Code2 size={18} />} label="Compétences" />

      <NavbarNavigationLink to="/contact" icon={<Mail size={18} />} label="Contact" />
    </div>
  )
}
