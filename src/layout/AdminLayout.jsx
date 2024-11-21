import AdminNavbar from './AdminNavbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <section className='p-4'>

      <AdminNavbar />

      <main className='my-5'>
          <Outlet />
      </main>

    </section>
  )
}

export default Layout