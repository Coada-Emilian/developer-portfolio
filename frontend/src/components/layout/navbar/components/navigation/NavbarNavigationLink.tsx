import { NavLink } from 'react-router-dom'
import type { NavbarNavigationLinkProps } from '../../../../../@types/props/layout/layout.props'

export default function NavbarNavigationLink({
  to,
  end,
  icon,
  label,
  onClick,
}: NavbarNavigationLinkProps) {
  return (
    <NavLink to={to} end={end} onClick={onClick} className="flex items-center gap-2">
      {({ isActive }) => (
        <>
          {icon}
          <span
            className={`relative py-2 ${
              isActive
                ? 'after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:rounded-full after:bg-blue-500'
                : ''
            }`}
          >
            {label}
          </span>
        </>
      )}
    </NavLink>
  )
}
