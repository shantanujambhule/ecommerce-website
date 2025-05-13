import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
  <>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
      <div className=''>
        <img src={assets.logo} className='w-32 mb-5' alt="" />
        <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, iusto!</p>
      </div>

      <div>
        <p className='font-medium text-xl mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
      </div>
      <div>
        <p className='text-xl font-medium mb-5' >GET IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+91-78962482 📲</li>
            <li>forever@gmail.com 📧</li>
        </ul>
      </div>
      
    </div>
    <div>
    <hr />
    <p className='text-center text-sm py-5 text-gray-600'>Copyright @2025 FOREVER.COM All Rights Reserved</p>
  </div>
  </>
  )
}

export default Footer
