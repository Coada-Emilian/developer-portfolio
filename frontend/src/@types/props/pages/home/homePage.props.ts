import type { Icon } from '@dev.icons/react'
import type { LucideIcon } from 'lucide-react'
import type { IUser } from '../../../interfaces/IUser'

export interface AudienceNavigationSectionCardProps {
  desktopTitle: string
  desktopDescription: string
  tabletTitle: string
  tabletDescription: string
  href: string
  icon: LucideIcon
}

export interface HeroSectionProps {
  user: IUser
}

export interface HeroPortraitCarouselProps {
  photos: string[]
  alt: string
}

export interface TechnologyCardProps {
  name: string
  icon: Icon
  altName: string
}
