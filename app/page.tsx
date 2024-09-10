import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Services from '@/sections/Services'
import ServicePricing from '@/sections/ServicePricing'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ServicePricing />
    </>
  )
}

export default Home