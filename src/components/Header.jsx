import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header className='bg-white shadow-lg mx-10 my-8 border border-gray-100 rounded-lg'>
      <div className='px-12 py-5 flex items-center justify-between'>
        <div className='flex items-center justify-center gap-3'>
          <img src={logo} alt="logo" width={30} />
          <span className='text-2xl font-bold'>STRALAB</span>
        </div>
        <nav className='hidden lg:inline-flex'>
          <ul className='flex items-center justify-center gap-16 text-[15px] font-medium'>
            <li>
              <NavLink>Service</NavLink>
            </li>
            <li>
              <NavLink>Why Us</NavLink>
            </li>
            <li>
              <NavLink>Testimonial</NavLink>
            </li>
            <li>
              <NavLink>FAQ</NavLink>
            </li>
            <li>
              <NavLink>About</NavLink>
            </li>
          </ul>
        </nav>
        <div className='flex items-center justify-center gap-4 text-[16px]'>
          <button className='border border-gray-200 px-5 py-2 rounded-full cursor-pointer'>Login</button>
          <button className='bg-green-600 text-white px-5 py-2 rounded-full cursor-pointer hidden md:inline-flex'>Sign Up</button>
        </div>
      </div>
    </header>
  )
}

export default Header