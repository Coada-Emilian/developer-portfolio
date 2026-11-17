import SectionHeading from '../../../components/shared/SectionHeading'

export default function VisionSection() {
  return (
    <section className="flex flex-col gap-2">
      {/* Section heading */}
      <SectionHeading title="Ma vision" underline subsection />

      {/* Vision statement */}
      <div className="flex items-center justify-center gap-3 rounded-xl bg-blue-100 p-3 md:mx-auto md:w-10/12 lg:w-full">
        <span className="text-2xl font-bold leading-none text-blue-600 sm:text-4xl">“</span>

        <p className="text-center font-['Lora'] text-xs font-semibold italic leading-relaxed text-slate-800 sm:text-xl sm:font-bold">
          Construire des solutions simples, fiables et utiles, en apprenant et en progressant
          constamment.
        </p>

        <span className="self-end text-2xl font-bold leading-none text-blue-600 sm:text-4xl">
          ”
        </span>
      </div>
    </section>
  )
}
