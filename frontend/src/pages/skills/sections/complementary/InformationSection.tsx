import InterestsCard from '../../components/complementary/InterestsCard'
import LanguagesCard from '../../components/complementary/LanguagesCard'
import MobilityCard from '../../components/complementary/MobilityCard'
import MotivationCard from '../../components/complementary/MotivationCard'
import StrengthsCard from '../../components/complementary/StrengthsCard'

export default function InformationSection() {
  return (
    <div className="flex flex-col gap-5">
      {/* Personal information */}
      <div className="grid w-full grid-cols-1 gap-5 xl:grid-cols-[1fr_1fr_1.5fr]">
        <LanguagesCard />
        <MobilityCard />
        <InterestsCard />
      </div>

      {/* Professional profile */}
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-[1fr_2fr]">
        <StrengthsCard />
        <MotivationCard />
      </div>
    </div>
  )
}
