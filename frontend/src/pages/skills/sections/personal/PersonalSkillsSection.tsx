import SkillsSection from './SkillsSection'
import TeamContributionSection from './TeamContributionSection'

// Combines the personal skills overview with the team contribution section.
export default function PersonalSkillsSection() {
  return (
    <div className="space-y-10">
      <SkillsSection />

      <TeamContributionSection />
    </div>
  )
}
