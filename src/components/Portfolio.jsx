import React from 'react'
import port1 from '../assets/port1.jpg'
import port2 from '../assets/port2.jpg'
import port3 from '../assets/port3.jpg'
import port4 from '../assets/port4.jpg'

const Portfolio = () => {
  return (
    <div>
      <div className=' grid lg:grid-cols-2'>
        <div className='relative'>
          <img src={port1} alt='' />
          <div className='absolute inset-0 bg-black opacity-0 hover:opacity-50 cursor-pointer ease-in-out duration-300 '></div>
        </div>
        <div className='relative'>
          <img src={port2} alt='' />
          <div className='absolute inset-0 bg-black opacity-0 hover:opacity-50 cursor-pointer ease-in-out duration-300 '></div>
        </div>
        <div className='relative'>
          <img src={port3} alt='' />
          <div className='absolute inset-0 bg-black opacity-0 hover:opacity-50 cursor-pointer ease-in-out duration-300 '></div>
        </div>
        <div className='relative'>
          <img src={port4} alt='' />
          <div className='absolute inset-0 bg-black opacity-0 hover:opacity-50 cursor-pointer ease-in-out duration-300 '></div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
