import type { IUser } from '../../interfaces/IUser'

export interface NavbarBrandProps {
  firstName: string
  lastName: string
  subtitle: string
}
export interface NavbarMobileNavigationProps {
  closeMenu: () => void
}

export interface NavbarProps {
  user: IUser
}

export interface NavbarNavigationLinkProps {
  to: string
  end?: boolean
  icon: React.ReactNode
  label: string
  onClick?: () => void
}
