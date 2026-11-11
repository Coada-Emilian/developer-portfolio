import { Download, Mail, MapPin } from 'lucide-react'

import { GithubIcon } from '@dev.icons/react/mono'
import { FaLinkedin } from 'react-icons/fa'
import type { ProfileCardProps } from '../../../../@types/props/profileCard.props'

export default function ProfileCard({ user }: ProfileCardProps) {
  return (
    <article className="flex w-full max-w-sm flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-100 p-4 shadow-sm">
      {/* Profile information */}
      <div className="flex items-start gap-3 sm:flex-col">
        {/* Profile photo */}
        <img
          src={user.photos[0]}
          alt={`${user.firstName} ${user.lastName}`}
          className="aspect-square w-36 shrink-0 rounded-xl object-cover sm:aspect-5/3 sm:w-full sm:object-[center_20%]"
        />

        {/* Contact information and CV */}
        <div className="flex min-w-0 flex-1 flex-col gap-2 sm:w-11/12 sm:self-center">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(user.location)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold text-slate-600 transition hover:text-blue-600 sm:text-sm"
          >
            <MapPin className="size-4 shrink-0 text-blue-800 sm:size-5" />
            <span>{user.location}</span>
          </a>

          <a
            href={`mailto:${user.email}`}
            className="flex items-center gap-2 text-xs font-bold text-slate-600 transition hover:text-blue-600 sm:text-sm"
          >
            <Mail className="size-4 shrink-0 text-blue-800 sm:size-5" />
            <span className="break-all hidden sm:block">{user.email}</span>
            <span className="break-all sm:hidden">Email</span>
          </a>

          <a
            href={`https://${user.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold text-slate-600 transition hover:text-blue-600 sm:text-sm"
          >
            <FaLinkedin className="size-4 shrink-0 text-blue-800 sm:size-5" />
            <span className="break-all hidden sm:block">{user.linkedin}</span>
            <span className="break-all sm:hidden">LinkedIn</span>
          </a>

          <a
            href={`https://${user.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold text-slate-600 transition hover:text-blue-600 sm:text-sm"
          >
            <GithubIcon className="size-4 shrink-0 text-blue-800 sm:size-5" />
            <span className="break-all hidden sm:block">{user.github}</span>
            <span className="break-all sm:hidden">GitHub</span>
          </a>

          {/* CV download */}
          <div className="mt-2 border-t border-slate-200 pt-3">
            <a
              href={user.cvUrl}
              download
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-800 sm:text-sm"
            >
              <Download className="size-4 shrink-0 sm:size-5" />
              <span>
                <span className="sm:hidden">CV (PDF)</span>
                <span className="hidden sm:inline">Télécharger mon CV (PDF)</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
