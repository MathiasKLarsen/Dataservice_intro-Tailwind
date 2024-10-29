import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import './Navbar.css'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className='relative text-white bg-emerald-600'>
        <div className='container'>
            <div className="flex items-center justify-between py-4">
                <div className='px-2'>DataService A/S</div> 

                <button onClick={() => setShowMenu( !showMenu )}  className='mr-2 md:hidden'>
                <RxHamburgerMenu size="2rem"/>
                </button>

                <menu className={`absolute top-0 flex-col md:flex-row md:h-auto md:flex md:flex-0 md:static h-screen md:p-0 p-10 ${ showMenu === true ? "left-0" : "-left-full" } transition-all duration-500 md:bg-transparent bg-emerald-900`}>
                    <li className='mx-4 my-5'>
                        <NavLink to ="/">Forsiden</NavLink>
                    </li>
                    <li className='mx-4 my-5'>
                        <NavLink to ="/about">Om Firmaet</NavLink>
                    </li>
                    <li className='mx-4 my-5'>
                        <NavLink to ="/news">Nyheder</NavLink>
                    </li>
                    <li className='mx-4 my-5'>
                        <NavLink to ="/posts">vis Posts</NavLink>
                    </li>
                    <li className='mx-4 my-5'>
                        <NavLink to ="/photos">se Billeder</NavLink>
                    </li>
                    <li className='mx-4 my-5'>
                        <NavLink to ="/todos">todos</NavLink>
                    </li>
                    <li className='mx-4 my-5'>
                        <NavLink to ="/contact">Kontakt os</NavLink>
                    </li>
                </menu>
            </div>
        </div>
    </nav>
  )
}

export default Navbar