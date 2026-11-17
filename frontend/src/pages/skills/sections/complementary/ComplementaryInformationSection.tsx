import DiplomasSection from './DiplomasSection'
import InformationSection from './InformationSection'

// Combines personal and professional information with the education and qualifications section.
export default function ComplementaryInformationSection() {
  return (
    <div className="flex flex-col gap-5">
      <InformationSection />

      <DiplomasSection />
    </div>
  )
}
