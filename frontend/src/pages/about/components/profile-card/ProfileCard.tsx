import { Download, Mail, MapPin } from 'lucide-react'

import { GithubIcon } from '@dev.icons/react/mono'
import { FaLinkedin } from 'react-icons/fa'
import type { ProfileCardProps } from '../../../../@types/props/pages/about/aboutPage.props'

export default function ProfileCard({ user }: ProfileCardProps) {
  return (
    <article className="flex w-full max-w-full flex-col gap-4 rounded-2xl border border-slate-200 bg-blue-100 p-4 shadow-sm md:mx-auto md:max-w-10/12 lg:max-w-sm">
      {/* Profile information: photo and contact details */}
      <div className="flex items-start gap-3 sm:flex-col">
        {/* Profile photo: displayed beside contact details on mobile and above them from sm onwards */}
        <img
          src={user.photos[0]}
          alt={`${user.firstName} ${user.lastName}`}
          className="aspect-square w-36 shrink-0 rounded-xl object-cover sm:object-[center_20%] md:mx-auto md:aspect-5/3 md:w-10/12 lg:w-11/12"
        />

        {/* Contact information and CV download */}
        <div className="flex min-w-0 flex-1 flex-col gap-2 p-1 px-2 sm:w-11/12 sm:self-center">
          {/* Location linked to Google Maps */}
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(user.location)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold text-slate-600 transition hover:text-blue-600 md:text-base lg:text-sm"
          >
            <MapPin className="size-4 shrink-0 text-blue-800 md:size-6" />
            <span>{user.location}</span>
          </a>

          {/* Email: full address on larger screens, shorter label on mobile */}
          <a
            href={`mailto:${user.email}`}
            className="flex items-center gap-2 text-xs font-bold text-slate-600 transition hover:text-blue-600 md:text-base lg:text-sm"
          >
            <Mail className="size-4 shrink-0 text-blue-800 md:size-6" />
            <span className="hidden break-all sm:block">{user.email}</span>
            <span className="break-all sm:hidden">Email</span>
          </a>

          {/* LinkedIn profile */}
          <a
            href={`https://${user.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold text-slate-600 transition hover:text-blue-600 md:text-base lg:text-sm"
          >
            <FaLinkedin className="size-4 shrink-0 text-blue-800 md:size-6" />
            <span className="hidden break-all sm:block">{user.linkedin}</span>
            <span className="break-all sm:hidden">LinkedIn</span>
          </a>

          {/* GitHub profile */}
          <a
            href={`https://${user.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold text-slate-600 transition hover:text-blue-600 md:text-base lg:text-sm"
          >
            <GithubIcon className="size-4 shrink-0 text-blue-800 md:size-6" />
            <span className="hidden break-all sm:block">{user.github}</span>
            <span className="break-all sm:hidden">GitHub</span>
          </a>

          {/* CV download */}
          <div className="mt-2 border-t border-slate-200 pt-3">
            <a
              href={user.cvUrl}
              download
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-800 sm:text-sm md:mx-auto md:w-8/12 lg:w-full"
            >
              <Download className="size-4 shrink-0 md:size-6" />
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
