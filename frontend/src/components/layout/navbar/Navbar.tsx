import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import type { NavbarProps } from '../../../@types/props/layout/layout.props'
import NavbarActions from './components/NavbarActions'
import NavbarBrand from './components/NavbarBrand'
import NavbarDesktopNavigation from './components/navigation/NavbarDesktopNavigation'
import NavbarMobileNavigation from './components/navigation/NavbarMobileNavigation'

function Navbar({ user }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const closeMenu = () => setIsMobileMenuOpen(false)

  return (
    <header className="relative bg-navy-950 text-white">
      <nav className="mx-auto flex w-full items-center justify-between px-5 py-3 sm:px-8 lg:px-12">
        <NavbarBrand firstName={user.firstName} lastName={user.lastName} subtitle={user.subtitle} />

        <NavbarDesktopNavigation />

        <div className="flex items-center gap-2 sm:gap-5">
          <NavbarActions />

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            className="rounded-lg border border-blue-100/50 p-2 transition hover:bg-navy-800 lg:hidden"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && <NavbarMobileNavigation closeMenu={closeMenu} />}
    </header>
  )
}

export default Navbar
