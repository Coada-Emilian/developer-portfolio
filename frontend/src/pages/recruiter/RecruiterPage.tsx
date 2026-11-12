export default function RecruiterPage() {
  return (
    <main className="min-h-screen bg-surface px-6 py-16 text-text-primary">
      {/* Page introduction focused on professional background and opportunities. */}
      <section className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Espace recruteurs
        </p>

        <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
          Un développeur motivé, prêt à relever de nouveaux défis.
        </h1>

        <div className="mt-4 h-1 w-12 rounded-full bg-blue-500" />

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-primary">
          Découvrez mon parcours professionnel, mes compétences techniques, mes expériences et mon
          approche du développement logiciel.
        </p>

        {/* Future content: professional profile, CV, skills and availability. */}
        <div className="mt-12 rounded-xl border border-blue-100 bg-slate-100 p-8">
          <p className="text-sm font-medium text-text-primary">
            Retrouvez prochainement ici mon parcours, mon CV, mes compétences et les informations
            nécessaires pour envisager une collaboration.
          </p>
        </div>
      </section>
    </main>
  )
}
