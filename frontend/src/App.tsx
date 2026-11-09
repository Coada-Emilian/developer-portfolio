import { Code2, FolderKanban, House, Mail, UserRound } from "lucide-react";
import logo from "./assets/logos/logo.png";

function App() {
  return (
    <main className="min-h-screen bg-surface font-body text-text-primary">
      <header className="bg-navy-950 text-white">
        <nav className="mx-auto flex w-full items-center justify-between px-8 py-3 lg:px-12">
          {/* Brand */}
          <a href="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="main logo"
              className="h-12 w-12 object-contain"
            />

            <div>
              <h1 className="text-xl font-bold tracking-wide">
                EMILIAN <span className="text-blue-500">COADA</span>
              </h1>
              <p className="text-xs uppercase tracking-widest text-blue-100">
                Développeur Full Stack
              </p>
            </div>
          </a>

          {/* Navigation */}
          <div className="flex items-center gap-8 text-sm font-medium">
            <a href="/" className="flex items-center gap-2 text-white">
              <House size={18} />
              Accueil
            </a>

            <a href="#about" className="flex items-center gap-2 text-white">
              <UserRound size={18} />À propos
            </a>
            <a href="#projects" className="flex items-center gap-2 text-white">
              <FolderKanban size={18} />
              Projets
            </a>
            <a href="#skills" className="flex items-center gap-2 text-white">
              <Code2 size={18} />
              Compétences
            </a>
            <a href="#contact" className="flex items-center gap-2 text-white">
              <Mail size={18} />
              Contact
            </a>
          </div>

          {/* Language and CV */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2 rounded-full border border-navy-800 px-3 py-1">
              <button className="rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold">
                FR
              </button>
              <button className="px-2 py-1 text-sm text-blue-100 transition hover:text-white">
                EN
              </button>
            </div>

            <a
              href="/cv.pdf"
              download
              className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-navy-950 transition hover:bg-blue-100"
            >
              ↓ CV (PDF)
            </a>
          </div>
        </nav>
      </header>
    </main>
  );
}

export default App;
