import React from 'react'
import ApproachBanner from './ApproachBanner'
import DevelopmentApproach from '@/sections/DevelopmentApproach'
import ContractApproach from '@/sections/ContractApproach'
import PartnershipApproach from '@/sections/PartnershipApproach'
import ActionBanner from '@/sections/ActionBanner'

const ApproachPage = () => {
  return (
    <>
      <ApproachBanner />
      <ContractApproach />
      <DevelopmentApproach />
      <PartnershipApproach />
      <ActionBanner />
    </>
  )
}

export default ApproachPage