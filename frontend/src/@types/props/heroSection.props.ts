import type { LucideIcon } from "lucide-react";
import type { IUser } from "../interfaces/IUser";

export interface HeroSectionProps {
  user: IUser;
}

export interface AudienceNavigationProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}
