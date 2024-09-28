import React from 'react'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Services from '@/sections/Services'
import ServicePricing from '@/sections/ServicePricing'
import ContractApproach from '@/sections/ContractApproach'
import DevelopmentApproach from '@/sections/DevelopmentApproach'
import PartnershipApproach from '@/sections/PartnershipApproach'
import Portfolio from '@/sections/Portfolio'
import Technologies from '@/sections/Technologies'
import ActionBanner from '@/sections/ActionBanner'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <ServicePricing />
      <ContractApproach />
      <DevelopmentApproach />
      <PartnershipApproach />
      <Portfolio />
      <Technologies />
      <ActionBanner />
    </>
  )
}

export default Home