import React from 'react'
import PortfolioBanner from './PortfolioBanner'
import Portfolio from '@/sections/Portfolio'
import Technologies from '@/sections/Technologies'
import ActionBanner from '@/sections/ActionBanner'

const PortfolioPage = () => {
  return (
    <>
      <PortfolioBanner />
      <Portfolio />
      <Technologies />
      <ActionBanner />
    </>
  )
}

export default PortfolioPage