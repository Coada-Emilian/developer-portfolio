import type { IHighlight } from '../../interfaces/shared/IHighlight'

export interface PageHeroProps {
  title: string
  desktopSubtitle?: string
  tabletSubtitle?: string
  mobileSubtitle?: string
  backButton?: boolean
}

export interface SectionHeadingProps {
  title: string
  subsection?: boolean
  underline?: boolean
}

export interface TitleUnderlineProps {
  subsection?: boolean
}

export interface MainProjectSectionCarouselModalProps {
  setIsModalOpen: (isOpen: boolean) => void
  projectScreenshots: string[]
  activeIndex: number
  setActiveIndex: (index: number) => void
  showPrevious: () => void
  showNext: () => void
}

export interface HighlightsSectionProps {
  highlights: IHighlight[]
}
