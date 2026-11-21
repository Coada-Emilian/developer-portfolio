import InterestsCard from '../../components/complementary/InterestsCard'
import LanguagesCard from '../../components/complementary/LanguagesCard'
import MobilityCard from '../../components/complementary/MobilityCard'
import MotivationCard from '../../components/complementary/MotivationCard'
import StrengthsCard from '../../components/complementary/StrengthsCard'

// Groups complementary personal information and professional profile details.
export default function InformationSection() {
  return (
    <div className="flex flex-col gap-4">
      {/* Personal information */}
      <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-[2fr_2fr]">
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
          <LanguagesCard />

          <MobilityCard />
        </div>

        <InterestsCard />
      </div>

      {/* Professional profile */}
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-[1.5fr_2fr] lg:grid-cols-[1fr_2fr]">
        <StrengthsCard />

        <MotivationCard />
      </div>
    </div>
  )
}
