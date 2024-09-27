import Link from 'next/link'
import React from 'react'
import { FaPhone, FaEnvelope, FaSquareWhatsapp } from 'react-icons/fa6'

const ActionBanner = () => {
    return (
        <section className='bg-primary/20 py-16'>
            <div className='container'>
                <h2 className='text-primary text-center text-3xl font-bold mb-4 capitalize'>Get Started With Exclusive Launch Discount for Early Clients</h2>
                <p className='text-text-2/80 text-center text-md mb-4'>Join our journey, claim upto 25% off on all our services and enjoy unmatched quality at unbeatable rates.</p>
                <p className='text-text-2/80 text-center text-md mb-10'>Reach out to us in the way most convenient for you.</p>
                <div className='grid grid-cols-1 md:grid-cols-3 sm:gap-6 md:gap-0 justify-items-center items-center mb-10 lg:px-20'>
                    <Link href={'tel:+8801883192614'} target='_blank'>
                        <button className='btn2 w-40 tracking-normal gap-2'>
                            <FaPhone />
                            Call</button>
                    </Link>
                    <Link href={'https://wa.me/+8801883192614'} target='_blank'>
                        <button className='btn2 w-40 tracking-normal gap-2'>
                            <FaSquareWhatsapp />
                            Chat</button>
                    </Link>
                    <Link href={'mailto:ashik18710@gmail.com'} target='_blank'>
                        <button className='btn2 w-40 tracking-normal gap-2'>
                            <FaEnvelope />
                            Mail</button>
                    </Link>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center sm:gap-6 md:gap-0 md:px-20 lg:px-60'>
                    <button className='btn w-60'>Schedule Free Consultation</button>
                    <button className='btn w-60 tracking-normal'>Get Quote</button>
                </div>
            </div>

        </section >
    )
}

export default ActionBanner