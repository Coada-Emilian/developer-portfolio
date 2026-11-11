import { useParams } from 'react-router-dom'

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <main className="min-h-screen bg-surface px-6 py-16 text-text-primary">
      {/* Project introduction and dynamic project identification. */}
      <section className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Étude de projet
        </p>

        <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
          {slug ? slug.replaceAll('-', ' ') : 'Projet'}
        </h1>

        <div className="mt-4 h-1 w-12 rounded-full bg-blue-500" />

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-primary">
          Découvrez les objectifs, les fonctionnalités, les choix techniques et les étapes de
          développement de ce projet.
        </p>

        {/* Future content: project overview, features, architecture and technologies. */}
        <div className="mt-12 rounded-xl border border-blue-100 bg-slate-100 p-8">
          <p className="text-sm font-medium text-text-primary">
            Cette page présentera prochainement une étude détaillée du projet, de sa conception à
            son implémentation.
          </p>
        </div>
      </section>
    </main>
  )
}
