import React from 'react'
import LogoText from '@/assets/images/Logo_text_no_bg.png'
import LogoIconGif from '@/assets/images/Logo-icon-gif.gif'
import LogoTagLine from '@/assets/images/tagline_no_bg.png'
import Image from 'next/image'
import Link from 'next/link'
import { FaPhone, FaEnvelope, FaLocationDot, FaFacebook, FaLinkedin, FaXTwitter, FaAngleUp } from 'react-icons/fa6'

const Footer = () => {
  return (
    <>
      <section className='bg-text-2 py-16 border-b border-bg-1'>
        <div className='container'>
          <div className='md:flex gap-30 justify-between'>
            <div className='flex flex-col items-center gap-1'>
              <Image src={LogoIconGif} alt='Logo' height={100} width={100} />
              <Image src={LogoText} alt='Logo' height={50} width={250} />
              <Image src={LogoTagLine} alt='Logo' height={30} width={250} />
              <div className='flex gap-4 mt-4'>
                <Link href={'#'} target='_blank' className='inline-flex justify-center items-center h-10 w-10 border-2 border-primary rounded-full text-2xl text-primary m-2 transition ease-in-out duration-200 hover:bg-primary hover:text-text-1 hover:shadow hover:shadow-primary'><FaFacebook /></Link>
                <Link href={'#'} target='_blank' className='inline-flex justify-center items-center h-10 w-10 border-2 border-primary rounded-full text-2xl text-primary m-2 transition ease-in-out duration-200 hover:bg-primary hover:text-text-1 hover:shadow hover:shadow-primary'><FaLinkedin /></Link>
                <Link href={'#'} target='_blank' className='inline-flex justify-center items-center h-10 w-10 border-2 border-primary rounded-full text-2xl text-primary m-2 transition ease-in-out duration-200 hover:bg-primary hover:text-text-1 hover:shadow hover:shadow-primary'><FaXTwitter /></Link>
              </div>
            </div>
            <div className='flex flex-col items-center md:items-start gap-4 mt-10'>
              <h4 className='text-bg-1 text-xl'>Quick Links</h4>
              <Link href={'/services'} className='text-bg-1/70 hover:text-bg-2 text-md'>Services</Link>
              <Link href={'/approach'} className='text-bg-1/70 hover:text-bg-2 text-md'>Approach</Link>
              <Link href={'/portfolio'} className='text-bg-1/70 hover:text-bg-2 text-md'>Portfolio</Link>
              <Link href={'/contact'} className='text-bg-1/70 hover:text-bg-2 text-md'>Contact</Link>
            </div>
            <div className='flex flex-col items-center md:items-start gap-4 mt-10'>
              <h4 className='text-bg-1 text-xl'>Contact Us</h4>
              <Link href={'tel:+8801883192614'} target='_blank' className='text-bg-1/70 hover:text-bg-2 text-lg flex gap-3 items-center'><FaPhone className='text-md'/> +8801883192614</Link>
              <Link href={'mailto:contact@brandebug.com'} target='_blank' className='text-bg-1/70 hover:text-bg-2 text-lg flex gap-3 items-center'><FaEnvelope className='text-xl' /> contact@brandebug.com</Link>
              <Link href={'https://maps.app.goo.gl/DDZW97BVvVRi23iJA'} target='_blank' className='text-bg-1/70 hover:text-bg-2 text-md flex gap-3 items-center'><FaLocationDot className='text-xl' /> House: 47, Road: 10, DIT Project, <br /> Merul Badda, Dhaka-1212</Link>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-text-2 py-2'>
        <div className='container flex items-center justify-between'>
          <p className='text-bg-2 text-sm md:text-lg'>© 2024 Brandebug | All Rights Reserved.</p>
          <Link href={'#'} className='inline-flex justify-center items-center h-10 w-10 border-2 border-primary rounded-lg text-2xl text-primary m-2 transition ease-in-out duration-200 hover:bg-primary hover:text-text-1 hover:shadow hover:shadow-primary'><FaAngleUp /></Link>
        </div>

      </section>
    </>

  )
}

export default Footer