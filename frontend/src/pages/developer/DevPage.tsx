export default function DevPage() {
  return (
    <main className="min-h-screen bg-surface px-6 py-16 text-text-primary">
      {/* Page introduction focused on technical exploration. */}
      <section className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Espace développeurs
        </p>

        <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
          Derrière chaque fonctionnalité, une réflexion technique.
        </h1>

        <div className="mt-4 h-1 w-12 rounded-full bg-blue-500" />

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-primary">
          Explorez mes projets sous un angle technique : architecture, technologies, modèles de
          données, API, tests et défis rencontrés pendant le développement.
        </p>

        {/* Future content: project architecture, technical decisions and source code. */}
        <div className="mt-12 rounded-xl border border-blue-100 bg-slate-100 p-8">
          <p className="text-sm font-medium text-text-primary">
            Retrouvez prochainement ici une présentation détaillée de mes projets, de leurs choix
            d'implémentation et de leur code source.
          </p>
        </div>
      </section>
    </main>
  )
}
