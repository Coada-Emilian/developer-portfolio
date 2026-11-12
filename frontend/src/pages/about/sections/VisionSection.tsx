import TitleUnderline from '../../../components/ui/TitleUnderline'

export default function VisionSection() {
  return (
    <section>
      <h2 className="mb-2 text-base font-bold text-slate-900  sm:font-extrabold sm:text-xl">
        Ma vision
      </h2>

      <TitleUnderline />

      <div className="flex items-center justify-center gap-3 rounded-xl bg-blue-100 p-3">
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
