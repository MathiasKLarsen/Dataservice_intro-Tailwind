import AdminNavbar from './AdminNavbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <section className='container px-4 mx-auto'>
      <div className='flex'>

        <AdminNavbar />

        <main className='container px-2 m-5'>
            <Outlet />
        </main>

      </div>
    </section>
  )
}

export default Layout