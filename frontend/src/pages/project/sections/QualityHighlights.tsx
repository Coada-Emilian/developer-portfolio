import HighlightsSection from '../../../components/shared/HighlightsSection'
import SectionHeading from '../../../components/shared/SectionHeading'
import { qualityHighlights } from '../../../data/pages/project'

export default function QualityHighlightsSection() {
  return (
    <section className="w-full">
      <SectionHeading title="Qualité & validation" underline />

      <HighlightsSection highlights={qualityHighlights} />
    </section>
  )
}
