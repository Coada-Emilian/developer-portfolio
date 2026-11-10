export default function ContactPage() {
  return (
    <main className="min-h-screen bg-surface px-6 py-16 text-text-primary">
      {/* Page introduction and invitation to connect. */}
      <section className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Contact</p>

        <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
          Faisons connaissance et parlons de vos projets.
        </h1>

        <div className="mt-4 h-1 w-12 rounded-full bg-blue-500" />

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-primary">
          Vous avez une opportunité, une idée ou simplement envie d'échanger autour du développement
          web ? Je serais ravi d'en discuter avec vous.
        </p>

        {/* Future content: contact details, social links and contact form. */}
        <div className="mt-12 rounded-xl border border-blue-100 bg-slate-100 p-8">
          <p className="text-sm font-medium text-text-primary">
            Retrouvez prochainement ici mes coordonnées, mes réseaux professionnels et un formulaire
            pour me contacter.
          </p>
        </div>
      </section>
    </main>
  )
}
