import React from 'react'
import LogoText from '@/assets/images/Logo_text_no_bg.png'
import LogoIconGif from '@/assets/images/Logo-icon-gif.gif'
import Image from 'next/image'
import { FaBars } from 'react-icons/fa6'



const Navbar = () => {
  return (
    <header className='border-b border-primary sticky top-0 z-50 backdrop-blur-3xl'>
      <div className='py-6'>
        <div className='container'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <Image src={LogoIconGif} alt='Logo' height={50} width={50} />
              <Image src={LogoText} alt='Logo' height={40} width={200} />
            </div>
            <FaBars className='h-7 w-7 lg:hidden' />
            <nav className='hidden lg:flex gap-10 items-center text-text-1/80 font-semibold'>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Approach</a>
              <a href="#">Portfolio</a>
              <button className='btn'>{`Let's Talk Business`}</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar