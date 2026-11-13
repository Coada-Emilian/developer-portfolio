import TitleUnderline from '../../../components/ui/TitleUnderline'

export default function VisionSection() {
  return (
    <section>
      {/* Section heading */}
      <h2 className="mb-2 text-base font-bold text-slate-900 sm:text-xl sm:font-extrabold">
        Ma vision
      </h2>

      <TitleUnderline />

      {/* Vision statement */}
      <div className="flex items-center justify-center gap-3 rounded-xl bg-blue-100 p-3 md:mx-auto md:w-10/12 lg:w-full">
        <span className="text-2xl font-bold leading-none text-blue-600 sm:text-4xl">“</span>

        <p className="text-center font-['Lora'] text-xs font-medium italic leading-relaxed text-slate-800 sm:text-xl sm:font-bold">
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
