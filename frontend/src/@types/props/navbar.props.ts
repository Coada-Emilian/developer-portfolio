import type { IUser } from "../interfaces/IUser";

export interface NavbarBrandProps {
  firstName: string;
  lastName: string;
  subtitle: string;
}
export interface NavbarMobileNavigationProps {
  closeMenu: () => void;
}

export interface NavbarProps {
  user: IUser;
}
