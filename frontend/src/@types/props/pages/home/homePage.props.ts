import type { Icon } from '@dev.icons/react'
import type { LucideIcon } from 'lucide-react'
import type { IUser } from '../../../interfaces/IUser'

export interface AudienceNavigationSectionCardProps {
  title: string
  description: string
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
