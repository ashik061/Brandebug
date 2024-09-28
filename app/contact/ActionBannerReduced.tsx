import Link from 'next/link'
import React from 'react'
import { FaPhone, FaEnvelope, FaSquareWhatsapp } from 'react-icons/fa6'

const ActionBanner = () => {
    return (
        <section className='bg-bg-1 py-16'>
            <div className='container flex flex-col items-center'>
                <h2 className='text-primary text-center text-3xl font-bold mb-4 capitalize'>Get Started With Exclusive Launch Discount for Early Clients</h2>
                <p className='text-text-2/80 text-center text-md mb-4'>Join our journey, claim upto 25% off on all our services and enjoy unmatched quality at unbeatable rates.</p>
                <p className='text-text-2/80 text-center text-md mb-6'>Reach out to us in the way most convenient for you.</p>

                <button className='btn w-60 tracking-normal'>Get Quote</button>
            </div>

        </section >
    )
}

export default ActionBanner