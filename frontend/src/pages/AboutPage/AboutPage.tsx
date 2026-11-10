export default function AboutPage() {
  return (
    <main className="min-h-screen bg-surface px-6 py-16 text-text-primary">
      {/* Page introduction and personal presentation. */}
      <section className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          À propos de moi
        </p>

        <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
          Derrière le code, il y a une personne.
        </h1>

        <div className="mt-4 h-1 w-12 rounded-full bg-blue-500" />

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-primary">
          Découvrez mon parcours, ma personnalité, mes motivations et ce qui m'anime dans le
          développement web.
        </p>

        {/* Future content: personal background, interests and motivations. */}
        <div className="mt-12 rounded-xl border border-blue-100 bg-slate-100 p-8">
          <p className="text-sm font-medium text-text-primary">
            Cette page sera bientôt enrichie avec mon histoire, mes expériences et ma vision du
            développement.
          </p>
        </div>
      </section>
    </main>
  )
}
