import React from 'react'
import HeroImage from '../assets/Hero-Image.webp'
import HeroLapImage from '../assets/heroLap.png'
import { NavLink } from 'react-router-dom'
import { CiCircleCheck } from 'react-icons/ci'

const Hero = () => {
  return (
    <main className='w-full grid grid-cols-1 lg:grid-cols-2 gap-12 px-8 py-8 m-auto'>
        <div className='flex flex-col gap-4 pl-16'>
            <p className='uppercase font-bold text-sm text-green-600 border-l-2 border-green-600 pl-2'>the marketing toolkit</p>
            <h1 className='capitalize text-4xl md:text-5xl lg:text-6xl leading-relaxed lg:leading-[80px] font-bold'>marketing proven strateies that drive real results</h1>
            <h3 className='text-[18px] mt-3 font-light text-gray-600 leading-relaxed'>Unleash the power of strategic marketing with our comprehensive course, designed to empower you with the skill and knowledge necessary to navigate the dynamic landscape of modern business.</h3>

            <div className='my-6'>
                <NavLink className={`bg-green-600 py-4 px-8 text-white font-light text-[15px] rounded-full`}>
                    Enroll Now  ﹥
                </NavLink>
            </div>

            <div className='flex flex-wrap gap-4 mt-4'>
                <p className='flex items-center justify-center gap-1'><CiCircleCheck  className='text-green-600 font-bold text-xl'/> Money back guarantee</p>
                <p className='flex items-center justify-center gap-1'><CiCircleCheck  className='text-green-600 font-bold text-xl'/> Scalable growth tools</p>
                <p className='flex items-center justify-center gap-1'><CiCircleCheck  className='text-green-600 font-bold text-xl'/> Access to members-only community</p>
            </div>
        </div>
        <div className='mt-8'>
            <img src={HeroImage} alt="hero-image" width={580} className='sm:block lg:hidden'/>
            <img src={HeroLapImage} alt="hero-lap-image" width={580} className='hidden lg:block' />
        </div>
    </main>
  )
}

export default Hero