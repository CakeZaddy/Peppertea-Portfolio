import React, { useState } from 'react'
import { BsInstagram } from 'react-icons/bs'
import { TbMenu } from 'react-icons/tb'
import { RiCloseFill } from 'react-icons/ri'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='fixed flex justify-between items-center px-2 lg:px-20 w-full h-40 bg-slate-100 z-50'>
      <h1 className='text-7xl text-center font-bold font-alegreya'>
        PEPPERTEA
      </h1>
      <div className='hidden lg:flex justify-center items-center gap-8'>
        <ul className='flex gap-8 hover:text-slate-500 text-lg font-light '>
          <li className='hover:text-black cursor-pointer hover:border-b border-black ease-in-out duration-300'>
            Home
          </li>
          <li className='hover:text-black cursor-pointer hover:border-b border-black ease-in-out duration-300'>
            Portfolio
          </li>
          <li className='hover:text-black cursor-pointer hover:border-b border-black ease-in-out duration-300'>
            About
          </li>
          <li className='hover:text-black cursor-pointer hover:border-b border-black ease-in-out duration-300'>
            Contact
          </li>
        </ul>
        <a href='https://instagram.com/peppertea03/' target='_blank'>
          <BsInstagram
            className='hover:scale-125 ease-in-out duration-500 cursor-pointer'
            size={20}
          />
        </a>
      </div>
      <div
        className='fixed right-2 top-0 lg:hidden p-1 cursor-pointer z-[100]'
        onClick={handleNav}
      >
        {!nav ? <TbMenu size={40} /> : <RiCloseFill size={40} />}
      </div>
      <div
        className={
          nav
            ? 'fixed lg:hidden left-0 top-0 w-full h-full bg-slate-200 ease-in-out duration-700'
            : 'fixed left-[-100%] lg:hidden top-0 w-full h-full bg-slate-200 ease-in-out duration-700'
        }
      >
        <h1 className='text-7xl text-center font-bold font-alegreya mt-10 '>
          PEPPERTEA
        </h1>
        <div className='flex flex-col justify-center items-center gap-8 mt-14'>
          <ul className='text-center flex flex-col gap-8 hover:text-slate-500 text-3xl font-light ease-in-out duration-300 '>
            <li className='hover:text-black cursor-pointer hover:border-b border-black ease-in-out duration-300'>
              Home
            </li>
            <li className='hover:text-black cursor-pointer hover:border-b border-black ease-in-out duration-300'>
              Portfolio
            </li>
            <li className='hover:text-black cursor-pointer hover:border-b border-black ease-in-out duration-300'>
              About
            </li>
            <li className='hover:text-black cursor-pointer hover:border-b border-black ease-in-out duration-300'>
              Contact
            </li>
          </ul>
          <a href='https://instagram.com/peppertea03/' target='_blank'>
            <BsInstagram
              className='hover:scale-125 ease-in-out duration-500 cursor-pointer mt-10'
              size={50}
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
