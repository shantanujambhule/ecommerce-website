import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-10 justify-center mb-28'>
        <img src={assets.contact_img} className='w-full md:max-w-[450px]' alt="" />
        <div className='flex flex-col gap-6 justify-center md:w-2/4 text-gray-600'>
          <p className='text-xl font-medium'>Our Store</p>
          <p>654646 India <br /> Delhi, Delhi metro station</p>
          <p>Tel:(75) 8797998 <br /> Email: forever@gmail.com</p>
          <p>Careers at Forever</p>
          <p>Learn more about us</p>
      </div>
      </div>
    </div>
  )
}

export default Contact
