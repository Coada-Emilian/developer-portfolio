export default function ContactFormSubjectInput() {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor="contact-subject"
        className="text-xs font-bold text-text-primary md:text-sm lg:text-base"
      >
        Sujet <span className="text-red-500">*</span>
      </label>

      <select
        id="contact-subject"
        defaultValue=""
        className="w-full rounded-lg border border-blue-200 bg-surface px-3 py-1 text-sm text-text-primary outline-none transition-colors focus:border-blue-500 md:py-2"
      >
        <option value="" disabled>
          Sélectionnez un sujet
        </option>
        <option value="opportunity">Opportunité professionnelle</option>
        <option value="project">Projet</option>
        <option value="question">Question</option>
        <option value="other">Autre</option>
      </select>
    </div>
  )
}
