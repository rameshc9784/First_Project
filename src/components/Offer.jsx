import React from 'react'
import { NavLink } from 'react-router-dom'

const Offer = () => {
  return (
    <section className='w-full relative bg-green-950 text-white py-2'>
        <div className='flex items-center justify-center gap-2'>
            <span>🎉</span>
            <p className='font-light'>Open your account here to get cashback up to 10%, <NavLink className='border-b border-b-white'> Learn How.</NavLink></p>
        </div>
        <button className='absolute right-5 top-[50%] -translate-y-[60%] cursor-pointer text-3xl'>
            ⨯
        </button>
    </section>
  )
}

export default Offer