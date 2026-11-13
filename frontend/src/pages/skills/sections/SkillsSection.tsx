import type { SkillsSectionProps } from '../../../@types/props/pages/skills/skillsPage.props'
import TitleUnderline from '../../../components/ui/TitleUnderline'

export default function SkillsSection({ title, children }: SkillsSectionProps) {
  return (
    <section className="w-full mb-4">
      <h2 className="text-xl font-bold text-text-primary md:text-2xl">{title}</h2>

      <TitleUnderline />

      <div className="mt-4">{children}</div>
    </section>
  )
}
