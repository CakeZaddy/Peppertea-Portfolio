import React from 'react'
import saloon from '../assets/saloon.jpg'

const Hero = () => {
  return (
    <div>
      <div className='relative pt-20 lg:pt-0'>
        <img className='w-full ' src={saloon} alt='/' />
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='absolute inset-0 flex flex-col justify-center items-center text-white lg:gap-5 pt-[100px] '>
          <h1 className='font-play text-center text-5xl lg:text-[80px]'>
            Want A Wig
          </h1>
          <h1 className='font-play text-center text-4xl lg:text-[70px]'>
            Or Stylist
          </h1>
          <button className='bg-slate-800 hover:bg-slate-700 text-lg lg:text-xl font-semibold py-2 px-5 rounded-md'>
            Book Now
          </button>
        </div>
      </div>
      <div className='my-10 py-5 px-10 lg:px-[300px]'>
        <h2 className='text-center font-medium text-4xl lg:text-6xl my-2'>
          PEPPERTEA
        </h2>
        <h2 className='text-center text-2xl lg:text-4xl text-slate-600 font-bold'>
          Hair Artist & Wig Maker
        </h2>
        <p className='text-center text-2xl lg:text-4xl font-thin'>
          Corporate, Commercials, Photography, Special Events, Fashion, and
          Music Videos
        </p>
      </div>
    </div>
  )
}

export default Hero
