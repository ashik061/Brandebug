import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Services from '@/sections/Services'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
    </>
  )
}

export default Home