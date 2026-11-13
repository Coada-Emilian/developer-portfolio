import { Download } from 'lucide-react'

export default function NavbarActions() {
  return (
    <>
      <div className="flex items-center gap-1 rounded-full border border-navy-800 p-1">
        <button className="rounded-full bg-blue-600 px-2 py-1 text-xs font-semibold sm:px-3 sm:text-sm">
          FR
        </button>
        <button className="px-2 py-1 text-xs text-blue-100 transition hover:text-white sm:px-3 sm:text-sm">
          EN
        </button>
      </div>
      <a
        href="/cv.pdf"
        download
        className="hidden items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-navy-950 transition hover:bg-blue-100 lg:flex"
      >
        <Download size={16} />
        CV (PDF)
      </a>
    </>
  )
}
