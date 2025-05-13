import React from 'react'
import Title from '../components/Title'
import NewsLetter from '../components/NewsLetter'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
    <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'}/>
    </div>

    <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
      <div className='flex flex-col gap-6 justify-center md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsum earum modi numquam placeat aspernatur beatae quaerat enim rerum consectetur!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsum earum modi numquam placeat aspernatur beatae quaerat enim rerum consectetur!</p>
        <b className='text-gray-800 font-medium'>OUR MISSION</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aliquam distinctio quam. Cumque, aperiam animi.</p>
      </div>
    </div>

    <div className='text-xl py-4'>
      <Title text1={'WHY'} text2={'CHOOSE US'}/>
    </div>

    <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Quality Assurance</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsa soluta maiores fugiat consequatur. Voluptatum!</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Exceptional Coustomer Service</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsa soluta maiores fugiat consequatur. Voluptatum!</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Convienence</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsa soluta maiores fugiat consequatur. Voluptatum!</p>
      </div>

    </div>
    <NewsLetter />
    </div>
  )
}

export default About
