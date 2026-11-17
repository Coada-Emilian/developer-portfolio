import { Outlet, useLocation } from 'react-router-dom'

import { user } from '../../../data/user'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

const pagesWithoutFooter = ['/recruiters', '/leads', '/developers']

// Provides the shared page layout and conditionally displays the footer.
export default function Layout() {
  const { pathname } = useLocation()

  const hideFooter = pagesWithoutFooter.includes(pathname)

  return (
    <>
      <Navbar user={user} />

      <main>
        <Outlet />
      </main>

      {!hideFooter && <Footer />}
    </>
  )
}
