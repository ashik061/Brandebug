import React from 'react'
import ServiceBanner from './ServiceBanner'
import Services from '@/sections/Services'
import ServicePricing from '@/sections/ServicePricing'
import ContractApproach from '@/sections/ContractApproach'
import ActionBanner from '@/sections/ActionBanner'

const ServicePage = () => {
  return (
    <>
      <ServiceBanner />
      <Services />
      <ServicePricing />
      <ContractApproach />
      <ActionBanner />
    </>
  )
}

export default ServicePage