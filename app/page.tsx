import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Services from '@/sections/Services'
import ServicePricing from '@/sections/ServicePricing'
import ContractApproach from '@/sections/ContractApproach'
import DevelopmentApproach from '@/sections/DevelopmentApproach'
import PartnershipApproach from '@/sections/PartnershipApproach'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ServicePricing />
      <ContractApproach />
      <DevelopmentApproach />
      <PartnershipApproach />
    </>
  )
}

export default Home