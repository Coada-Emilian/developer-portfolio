import type { NavbarBrandProps } from '../../../@types/props/navbar.props'
import logo from '../../../assets/logos/logo.png'

export default function NavbarBrand({ firstName, lastName, subtitle }: NavbarBrandProps) {
  return (
    <a href="/" className="flex items-center gap-3">
      <img
        src={logo}
        alt={`${firstName} ${lastName} logo`}
        className="h-8 w-8 object-contain sm:h-12 sm:w-12"
      />

      <div>
        <h1 className="text-sm font-bold tracking-wide uppercase sm:text-xl">
          {firstName} <span className="text-blue-500">{lastName}</span>
        </h1>
        <p className="text-[8px] uppercase tracking-widest text-blue-100 sm:text-xs">{subtitle}</p>
      </div>
    </a>
  )
}
