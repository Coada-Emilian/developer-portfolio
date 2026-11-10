import { Target } from 'lucide-react'

import footerBackground from '../../../assets/images/footer_background_mobile.png'

export default function MobileFooter() {
  return (
    <footer className="bg-surface px-4 py-6 md:hidden">
      <div
        className="relative flex items-start gap-4 overflow-hidden rounded-2xl bg-cover bg-center p-2"
        style={{ backgroundImage: `url(${footerBackground})` }}
      >
        <div className="absolute inset-0 bg-blue-950/20" />

        {/* Icon */}
        <div className="relative mt-1 shrink-0">
          <Target className="h-9 w-9 text-white" />
        </div>

        {/* Objective */}
        <div className="relative text-white">
          <h2 className="text-base font-extrabold">Mon objectif</h2>

          <p className="mt-1 text-xs font-medium leading-relaxed">
            Continuer à progresser en tant que développeur Full Stack, contribuer à des projets
            concrets et évoluer au sein d'une équipe stimulante.
          </p>
        </div>
      </div>
    </footer>
  )
}
