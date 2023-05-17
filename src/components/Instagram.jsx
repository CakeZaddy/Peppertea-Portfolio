import React from 'react'
import ig1 from '../assets/ig1.jpg'
import ig3 from '../assets/ig3.jpg'
import ig2 from '../assets/ig2.jpg'
import ig7 from '../assets/ig7.jpg'
import ig5 from '../assets/ig5.jpg'
import ig6 from '../assets/ig6.jpg'
import { BsInstagram } from 'react-icons/bs'
import { HiArrowSmRight } from 'react-icons/hi'

const Instagram = () => {
  return (
    <div>
      <div className=''>
        <div className='relative mx-10 md:mx-20 lg:mx-[150px] my-10 grid gap-0 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-center items-center cursor-pointer'>
          <img src={ig3} alt='' className='w-full h-auto' />
          <img src={ig7} alt='' className='w-full h-auto' />
          <img src={ig1} alt='' className='w-full h-auto' />
          <img src={ig5} alt='' className='w-full h-auto' />
          <img src={ig6} alt='' className='w-full h-auto hidden md:block' />
          <img src={ig2} alt='' className='w-full h-auto hidden md:block' />
          <a href='https://instagram.com/peppertea03/' target='_blank'>
            <div className='absolute inset-0 hover:bg-slate-900/50 ease-in-out duration-300'>
              <div className='flex flex-col justify-center items-center opacity-0 hover:opacity-100 text-white w-full h-full'>
                <BsInstagram size={30} />
                <p className='text-lg font-medium'>@peppertea03</p>
                <HiArrowSmRight size={30} />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Instagram
