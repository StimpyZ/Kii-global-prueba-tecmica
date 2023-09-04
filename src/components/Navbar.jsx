import { useState } from 'react'
import { navLinks } from '../constants'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'

export default function Navbar () {

    const [active, setActive] = useState('Home')
    const [toggle, setToggle] = useState(false)
    return (
        <nav className='w-full flex py-6 justify-between items-center navbar'>
            <div className='flex items-center gap-4'>
                <img src='/kilogo.gif' alt='logo' className='w-[55px] h-[37px]' />
                <h1 className='text-white font-gothan text-xl font-bold'>KII Global</h1>
            </div>
            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                {navLinks.map((link, index) => (

                    <li
                        key={link.id}
                        className={`font-gothan font-normal cursor-pointer text-base ${active === link.title ? 'text-aquamarine' : 'text-white'} ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
                        onClick={() => setActive(link.title)}
                    >
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>

                ))}
            </ul>

            <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img
                    src={toggle ? close : menu}
                    alt='menu'
                    className='w-[20px] h-[20px] cursor-pointer object-contain'
                    onClick={() => setToggle(!toggle)}
                />
            </div>

            <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-black-gradient absolute top-20 right-0 left-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar sm:hidden z-[100]`}>
                <ul className='list-none flex justify-end items-start flex-1 flex-col'>
                    {navLinks.map((link, index) => (
                        <li
                            key={link.id}
                            className={`font-gothan font-normal cursor-pointer text-base ${active === link.title ? 'text-aquamarine' : 'text-white'} ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
                            onClick={() => setActive(link.title)}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )

}
