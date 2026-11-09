import {
  Code2,
  Download,
  FolderKanban,
  House,
  Mail,
  Menu,
  UserRound,
  X,
} from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logos/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="relative bg-navy-950 text-white">
      <nav className="mx-auto flex w-full items-center justify-between px-5 py-3 sm:px-8 lg:px-12">
        <a href="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="main logo"
            className="h-8 w-8 object-contain sm:h-12 sm:w-12"
          />

          <div>
            <h1 className="text-sm font-bold tracking-wide uppercase sm:text-xl">
              Emilian <span className="text-blue-500">Coada</span>
            </h1>
            <p className="text-[8px] uppercase tracking-widest text-blue-100 sm:text-xs">
              Développeur Full Stack
            </p>
          </div>
        </a>

        {/* Desktop navigation */}
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

        {/* Language selector and CV */}
        <div className="flex items-center gap-2 sm:gap-5">
          <div className="flex items-center gap-1 rounded-full border border-navy-800 p-1">
            <button className="rounded-full bg-blue-600 px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold">
              FR
            </button>
            <button className="px-2 sm:px-3 py-1 text-xs sm:text-sm text-blue-100 transition hover:text-white">
              EN
            </button>
          </div>

          <a
            href="/cv.pdf"
            download
            className="hidden items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-navy-950 transition hover:bg-blue-100 lg:flex"
          >
            <Download size={16} />
            CV (PDF)
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="rounded-lg border border-blue-100/50 p-2 transition hover:bg-navy-800 lg:hidden"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      {isMenuOpen && (
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
              href="#about"
              onClick={closeMenu}
              className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-navy-800 text-sm"
            >
              <UserRound size={20} />À propos
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-navy-800 text-sm"
            >
              <FolderKanban size={20} />
              Projets
            </a>

            <a
              href="#skills"
              onClick={closeMenu}
              className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-navy-800 text-sm"
            >
              <Code2 size={20} />
              Compétences
            </a>

            <a
              href="#contact"
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
      )}
    </header>
  );
}

export default Navbar;
