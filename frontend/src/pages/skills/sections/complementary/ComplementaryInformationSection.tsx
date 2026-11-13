import DiplomasSection from './DiplomasSection'
import InformationSection from './InformationSection'

export default function ComplementaryInformationSection() {
  return (
    <div className="flex flex-col gap-5">
      {/* Personal and professional profile information */}
      <InformationSection />

      {/* Education and qualifications carousel */}
      <DiplomasSection />
    </div>
  )
}
