export default function ContactFormMessageInput() {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor="contact-message"
        className="text-xs font-bold text-text-primary md:text-sm lg:text-base"
      >
        Votre message <span className="text-red-500">*</span>
      </label>

      <textarea
        id="contact-message"
        rows={5}
        placeholder="Écrivez votre message..."
        className="w-full resize-y rounded-lg border border-blue-200 bg-surface px-3 py-1 text-sm text-text-primary outline-none transition-colors placeholder:text-text-secondary focus:border-blue-500 md:py-2"
      />
    </div>
  )
}
