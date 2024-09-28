'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import LogoText from '@/assets/images/Logo_text_no_bg.png'
import LogoIconGif from '@/assets/images/Logo-icon-gif.gif'
import Image from 'next/image'
import { FaBars } from 'react-icons/fa6'
import Link from 'next/link'



const Navbar = () => {
  const router = useRouter()
  return (
    <header className='border-b border-primary sticky top-0 z-50 backdrop-blur-3xl'>
      <div className='py-4'>
        <div className='container'>
          <div className='flex items-center justify-between'>
            <Link href={'/'} className='flex items-center'>
              <Image src={LogoIconGif} alt='Logo' height={58} width={58} />
              <Image src={LogoText} alt='Logo' height={40} width={200} />
            </Link>
            <FaBars className='h-7 w-7 lg:hidden' />
            <nav className='hidden lg:flex gap-10 items-center text-text-1/80 font-semibold'>
              <Link href="/services" className='hover:text-primary'>Services</Link>
              <Link href="/approach" className='hover:text-primary'>Approach</Link>
              <Link href="/portfolio" className='hover:text-primary'>Portfolio</Link>
              <Link href="/about" className='hover:text-primary'>About</Link>
              <button className='btn' onClick={()=>{router.push('/contact')}}>{`Let's Talk Business`}</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar