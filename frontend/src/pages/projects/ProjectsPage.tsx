export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-surface text-text-primary">
      {' '}
      {/* Page introduction and overview of the project portfolio. */}
      <section className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Mes projets</p>

        <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
          Des idées concrétisées par le code.
        </h1>

        <div className="mt-4 h-1 w-12 rounded-full bg-blue-500" />

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-primary">
          Découvrez les projets sur lesquels je travaille, les problèmes qu'ils cherchent à résoudre
          et les solutions que j'ai développées.
        </p>

        {/* Future content: project cards linking to their individual detail pages. */}
        <div className="mt-12 rounded-xl border border-blue-100 bg-slate-100 p-8">
          <p className="text-sm font-medium text-text-primary">
            Retrouvez prochainement ici une sélection de mes réalisations, avec leurs
            fonctionnalités, leurs technologies et leurs détails techniques.
          </p>
        </div>
      </section>
    </main>
  )
}
