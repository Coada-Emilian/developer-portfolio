import type { HeroSectionProps } from "../../../@types/props/heroSection.props";
import heroBackground from "../../../assets/images/hero_background.png";
import heroBackgroundMobile from "../../../assets/images/hero_background_mobile.png";
import userImage from "../../../assets/images/user_image.png";

import HeroSectionActions from "./HeroSectionActions";
import HeroSectionIntroduction from "./HeroSectionIntroduction";
export default function HeroSection({ user }: HeroSectionProps) {
  return (
    <section className="relative flex min-h-80 items-center overflow-hidden px-5 py-8 sm:px-8 lg:min-h-95 lg:px-16">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-position-[100%_center] lg:hidden"
        style={{ backgroundImage: `url(${heroBackgroundMobile})` }}
      />

      <div
        className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat lg:block"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />

      <div className="relative z-10 flex w-full items-center gap-8">
        <div className="relative hidden shrink-0 lg:block">
          <img
            src={userImage}
            alt={`${user.firstName} ${user.lastName}`}
            className="h-48 w-48 rounded-full border-2 border-white object-cover"
          />
        </div>

        <div className="hidden h-40 w-px shrink-0 bg-blue-100/70 lg:block" />

        <div className="max-w-2xl text-white">
          <HeroSectionIntroduction user={user} />

          <HeroSectionActions />
        </div>
      </div>
    </section>
  );
}
