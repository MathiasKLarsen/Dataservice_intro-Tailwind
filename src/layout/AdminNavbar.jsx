import { NavLink } from 'react-router-dom'

const AdminNavbar = () => {

  return (
    <nav className='w-1/4 h-screen min-h-screen p-6 text-white bg-slate-600'>
        <div className="mb-6">
            <a className='text-xl font-bold'>DataService A/S</a>
        </div>
        <menu className="space-y-4 menu menu-vertical">
            <li>
                <NavLink to ="admin" className="px-4 py-2 text-white rounded hover:bg-gray-700">ADMIN Home</NavLink>
            </li>
            <li>
                <NavLink to ="/pbgamingadmin" className="px-4 py-2 text-white rounded hover:bg-gray-700">Administrer Gaming (pb)</NavLink>
            </li>
            <li>
                <NavLink to ="/" className="px-4 py-2 text-white rounded hover:bg-gray-700">Forsiden (public)</NavLink>
            </li>
        </menu>
    </nav>
  )
}

export default AdminNavbar