import Footer from './Footer'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <section className='p-4'>
        <Header />

        <main className='my-5'>
            <Outlet />
        </main>

        <Footer />
    </section>
  )
}

export default Layout