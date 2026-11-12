import { Outlet } from 'react-router-dom'
import { user } from '../../../data/user'

import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

export default function Layout() {
  return (
    <>
      <Navbar user={user} />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}
