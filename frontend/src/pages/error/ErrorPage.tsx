import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-surface px-6 py-16 text-text-primary">
      {/* Main 404 message and navigation back to the homepage. */}
      <section className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Erreur 404</p>

        <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-6xl">
          Oups ! Cette page est introuvable.
        </h1>

        <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-blue-500" />

        <p className="mt-6 text-lg leading-relaxed text-text-primary">
          La page que vous recherchez n'existe pas ou a peut-être été déplacée. Pas d'inquiétude,
          vous pouvez retourner à l'accueil.
        </p>

        {/* Navigation back to the homepage. */}
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Retour à l'accueil
        </Link>
      </section>
    </main>
  )
}
