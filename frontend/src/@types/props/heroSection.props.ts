import type { IUser } from "../interfaces/IUser";

export interface HeroSectionProps {
  user: IUser;
}

export interface HeroPortraitCarouselProps {
  photos: string[];
  alt: string;
}
