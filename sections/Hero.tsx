'use client'
import React from 'react'
import HeroImage from '@/assets/images/hero.svg'
import Image from 'next/image'
import TypedText from '@/components/TypedText'

const Hero = () => {
  return (
    <section className='pt-8 lg:pt-20 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_right,#fa6a6a,#ffffff_50%)]'>
      <div className='container'>
        <div className='lg:flex gap-20'>
          <div className='lg:w-3/5'>
            <h1 className='text-5xl font-bold tracking-tighter bg-gradient-to-b from-thirdColor to-text-1 text-transparent bg-clip-text my-6'>Innovate.   Transform.   Impact.</h1>
            <p className='text-xl text-text-2/80 tracking-tight mb-2'>Providing technology services to create a strong digital presence for your brand</p>
            <TypedText />
            <p className='text-sm text-text-1/80 tracking-tight mt-5 mb-2'>{`Let's Get Started on Your Dream Project`}</p>
            <div className='flex gap-3 items-center mt-4'>
              <button className='btn text-sm md:text-xl'>Schedule Free Consultation</button>
              <button className='btn2 text-sm md:text-xl'>Get Quote</button>
            </div>
          </div>
          <div className='lg:w-2/5'>
            <Image src={HeroImage} alt='HeroImage' className='mt-20 md:h-70 lg:mt-8' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero