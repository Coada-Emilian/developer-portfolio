import type { IContactInformationCard } from '../../../interfaces/pages/contact/IContactInformationCard'

export interface ContactInformationCardProps {
  contact: IContactInformationCard
  isEmail: boolean
  href: string
  Icon: React.ComponentType<{ className: string; strokeWidth: number }>
  ActionIcon: React.ComponentType<{ className: string; strokeWidth: number }>
}
