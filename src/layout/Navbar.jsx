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
                    <li className='relative mx-4 my-5 group'>
                        JSONPlaceHolder ↴
                        <menu className='w-auto md:hidden md:group-hover:block md:group-hover:absolute md:bg-tahiti-dark whitespace-nowrap'>
                            <li className='mx-4 my-5'>
                                <NavLink to ="/posts">vis Posts</NavLink>
                            </li>
                            <li className='mx-4 my-5'>
                                <NavLink to ="/photos">vis Billeder</NavLink>
                            </li>
                            <li className='mx-4 my-5'>
                                <NavLink to ="/todos">vis todos</NavLink>
                            </li>
                        </menu>
                    </li>
                    <li className='relative mx-4 my-5 group'>
                        StarWarsAPI ↴
                        <menu className='w-auto md:hidden md:group-hover:block md:group-hover:absolute md:bg-tahiti-dark whitespace-nowrap'>
                            <li className='mx-4 my-5'>
                                <NavLink to ="/starships">StarShips</NavLink>
                            </li>
                        </menu>
                    </li>
                    <li className='relative mx-4 my-5 group'>
                        NewsAPI ↴
                        <menu className='w-auto md:hidden md:group-hover:block md:group-hover:absolute md:bg-tahiti-dark whitespace-nowrap'>
                            <li className='mx-4 my-5'>
                                <NavLink to ="/headlines">HeadLines</NavLink>
                            </li>
                        </menu>
                    </li>
                    <li className='relative mx-4 my-5 group'>
                        Weahter ↴
                        <menu className='w-auto md:hidden md:group-hover:block md:group-hover:absolute md:bg-tahiti-dark whitespace-nowrap'>
                            <li className='mx-4 my-5'>
                                <NavLink to ="/openweather">Openweather</NavLink>
                            </li>
                            <li className='mx-4 my-5'>
                                <NavLink to ="/openweather2">Openweather2</NavLink>
                            </li>
                            <li className='mx-4 my-5'>
                                <NavLink to ="/openweather3">Openweather3</NavLink>
                            </li>
                        </menu>
                    </li>
                    <li className='relative mx-4 my-5 group'>
                        RapidAPI ↴
                        <menu className='w-auto md:hidden md:group-hover:block md:group-hover:absolute md:bg-tahiti-dark whitespace-nowrap'>
                            <li className='mx-4 my-5'>
                                <NavLink to ="/hobbies">Hobbies</NavLink>
                            </li>
                        </menu>
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