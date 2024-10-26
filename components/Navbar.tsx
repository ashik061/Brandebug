'use client'
import React from 'react'
import LogoText from '@/assets/images/Logo_text_no_bg.png'
import LogoIconGif from '@/assets/images/Logo-icon-gif.gif'
import Image from 'next/image'
import { FaBars } from 'react-icons/fa6'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'



const Navbar = () => {
  const router = useRouter()
  const pathName = usePathname()

  const capitalizeFirstLetter = (string:string) => {
    const cleanString = string.replace(/^\//, ''); 
  return cleanString.charAt(0).toUpperCase() + cleanString.slice(1);
  };

  const activeClass = 'text-primary scale-110 '
  const normalClass = 'hover:text-primary hover:scale-110'
  const links = ['/services', '/approach', '/portfolio', '/about']

  return (
    <header className='border-b border-primary sticky top-0 z-50 bg-bg-1'>
      <div className='py-3'>
        <div className='container'>
          <div className='flex items-center justify-between'>
            <Link href={'/'} className='flex items-center'>
              <Image src={LogoIconGif} alt='Logo' height={58} width={58} />
              <Image src={LogoText} alt='Logo' height={40} width={200} />
            </Link>
            <FaBars className='h-7 w-7 lg:hidden' />
            <nav className='hidden lg:flex gap-10 items-center text-text-1/80 font-semibold'>
            {links.map ((item) => (
              <Link key={item} href={item} className={item === pathName ? activeClass + normalClass : normalClass}>{capitalizeFirstLetter(item)}</Link>
            )) }
              <button className='btn' onClick={()=>{router.push('/contact')}}>{`Let's Talk Business`}</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar