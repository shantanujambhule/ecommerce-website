import React from 'react'
import Hero from '../components/Hero'
import LatestCollextion from '../components/LatestCollextion'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollextion />
      <BestSeller />
      <OurPolicy />
      <NewsLetter />
    </div>
  )
}

export default Home
