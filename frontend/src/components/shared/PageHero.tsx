import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import heroBackground from '../../assets/images/general_hero_background.png'
import heroBackgroundMobile from '../../assets/images/hero_background_mobile.png'

import type { PageHeroProps } from '../../@types/props/shared/shared.props'
import TitleUnderline from '../ui/TitleUnderline'

export default function PageHero({
  title,
  desktopSubtitle,
  tabletSubtitle,
  mobileSubtitle,
  backButton,
  project,
}: PageHeroProps) {
  const navigate = useNavigate()

  // Returns to the previous page when the back button is requested.
  const handleBack = () => {
    navigate(-1)
  }

  const ProjectIcon = project?.icon

  return (
    <section className="relative flex items-center overflow-hidden px-5 py-8 sm:px-8 md:py-5 lg:px-16 lg:py-6">
      {/* Mobile background */}
      <div
        className="absolute inset-0 bg-navy-950 bg-no-repeat bg-size-[100%_100%] md:bg-size-[100%_150%] lg:hidden"
        style={{
          backgroundImage: `url(${heroBackgroundMobile})`,
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
      <div className="relative z-10 w-8/12 sm:py-8">
        {backButton && (
          <button
            type="button"
            onClick={handleBack}
            className="mb-4 inline-flex cursor-pointer items-center gap-2 rounded-full border border-blue-200 bg-blue-50/75 px-2 py-1 text-xxxs font-bold text-blue-950 shadow-sm transition-colors hover:bg-blue-100 md:px-3 md:py-1.5 md:text-sm"
          >
            <ArrowLeft aria-hidden="true" className="size-3 md:size-4" />
            Retour
          </button>
        )}

        <div className="mb-3 flex items-center md:items-start gap-3">
          {ProjectIcon && (
            <ProjectIcon aria-hidden="true" className="size-6 text-white md:size-9" />
          )}
          <div>
            <h1 className="text-lg font-extrabold text-white md:text-2xl lg:text-3xl">{title}</h1>
            <TitleUnderline />
          </div>
        </div>

        {mobileSubtitle && (
          <p className="mt-3 w-full pb-4 text-xs text-white sm:pb-0 md:hidden">{mobileSubtitle}</p>
        )}

        {tabletSubtitle && (
          <p className="mt-3 hidden w-10/12 pb-4 text-xs text-white sm:pb-0 sm:text-base md:block lg:hidden">
            {tabletSubtitle}
          </p>
        )}

        {desktopSubtitle && (
          <p className="mt-3 hidden w-8/12 pb-4 text-xs text-white sm:pb-0 sm:text-base lg:block lg:text-lg">
            {desktopSubtitle}
          </p>
        )}
      </div>
    </section>
  )
}
