export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-surface px-6 py-16 text-text-primary">
      {/* Page introduction and overview of professional skills. */}
      <section className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Mes compétences
        </p>

        <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
          Des compétences techniques, mais aussi humaines.
        </h1>

        <div className="mt-4 h-1 w-12 rounded-full bg-blue-500" />

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-primary">
          Découvrez les compétences que j'ai développées à travers mes expériences professionnelles,
          mes projets personnels et mon parcours d'apprentissage.
        </p>

        {/* Future content: technical, personal and complementary skills. */}
        <div className="mt-12 rounded-xl border border-blue-100 bg-slate-100 p-8">
          <p className="text-sm font-medium text-text-primary">
            Retrouvez prochainement ici mes compétences techniques, mes qualités humaines et mes
            connaissances complémentaires, organisées par domaine.
          </p>
        </div>
      </section>
    </main>
  )
}
