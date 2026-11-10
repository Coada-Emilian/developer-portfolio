export default function LeadPage() {
  return (
    <main className="min-h-screen bg-surface px-6 py-16 text-text-primary">
      {/* Page introduction focused on technical leadership and collaboration. */}
      <section className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Espace Tech Leads
        </p>

        <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
          Du code, des choix techniques et une vision d'ensemble.
        </h1>

        <div className="mt-4 h-1 w-12 rounded-full bg-blue-500" />

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-primary">
          Découvrez ma manière d'aborder la conception logicielle, les choix d'architecture, la
          qualité du code et la collaboration au sein d'une équipe de développement.
        </p>

        {/* Future content: architecture, engineering practices and project decisions. */}
        <div className="mt-12 rounded-xl border border-blue-100 bg-slate-100 p-8">
          <p className="text-sm font-medium text-text-primary">
            Retrouvez prochainement ici des études de cas, des choix d'architecture et des
            réflexions autour de la conception et de l'évolution de projets logiciels.
          </p>
        </div>
      </section>
    </main>
  )
}
