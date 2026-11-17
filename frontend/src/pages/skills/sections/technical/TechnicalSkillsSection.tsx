import SkillsSection from './SkillsSection'
import TrainingSection from './TrainingSection'

// Combines the technical skills overview with the training section.
export default function TechnicalSkillsSection() {
  return (
    <div className="space-y-5">
      <SkillsSection />

      <TrainingSection />
    </div>
  )
}
