import heroBackground from '../../assets/images/general_hero_background.png'
import heroBackgroundMobile from '../../assets/images/hero_background_mobile.png'

import type { PageHeroProps } from '../../@types/props/shared.props'

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative flex items-center overflow-hidden px-5 py-8 sm:px-8 lg:px-16 lg:py-6">
      {/* Mobile background */}
      <div
        className="absolute inset-0 bg-navy-950 bg-no-repeat lg:hidden"
        style={{
          backgroundImage: `url(${heroBackgroundMobile})`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
        }}
      />

      {/* Desktop background */}
      <div
        className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat lg:block"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundPosition: 'center 50%',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full sm:py-8">
        <h1 className="text-lg font-extrabold text-white sm:text-4xl">{title}</h1>

        <div className="mt-3 h-1 w-12 rounded-full bg-blue-500" />

        {subtitle && (
          <p className="mt-3 text-xs pb-4 w-8/12 text-white sm:text-base lg:text-lg sm:pb-0">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
