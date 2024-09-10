import React from 'react'
import TeamImage from '@/assets/images/team.svg'
import ClientImage from '@/assets/images/client.svg'
import Image from 'next/image'
import { FaCheck, FaRocket } from 'react-icons/fa6'

const About = () => {

    return (
        <section className='bg-bg-1 py-16'>
            <div className='container'>
                <div className='text-center'>
                    <h4 className='text-text-2/80 font-medium text-2xl tracking-tighter'>Looking for a partner who understands your business goals and brand vision?</h4>
                    <h2 className='text-4xl font-bold tracking-tight bg-gradient-to-b from-primary to-text-1 text-transparent bg-clip-text my-4'>{`We’ve got you covered!`}</h2>
                </div>
                <div className='lg:flex gap-16'>
                    <div>
                        <h3 className='text-2xl text-text-1 font-semibold mb-4 lg:mt-20'>Our Promises</h3>
                        <ul>
                            <li className='flex gap-2 text-text-2/70 text-md mb-1 lg:mb-3'><FaCheck className='h-6 w-6 text-primary stroke-6' /> Future-proof tech stack, Tailored to your need</li>
                            <li className='flex gap-2 text-text-2/70 text-md mb-1 lg:mb-3'><FaCheck className='h-6 w-6 text-primary stroke-6' /> Transparent Pricing for Optimal ROI</li>
                            <li className='flex gap-2 text-text-2/70 text-md mb-1 lg:mb-3'><FaCheck className='h-6 w-6 text-primary stroke-6' /> Agile Development, Timely Delivery</li>
                            <li className='flex gap-2 text-text-2/70 text-md mb-1 lg:mb-3'><FaCheck className='h-6 w-6 text-primary stroke-6' /> Conversion-Focused, SEO-Optimized Design</li>
                            <li className='flex gap-2 text-text-2/70 text-md mb-1 lg:mb-3'><FaCheck className='h-6 w-6 text-primary stroke-6' /> Free Maintenance and Ongoing Support</li>
                        </ul>
                    </div>
                    <div className='lg:w-3/5 h-auto'>
                        <Image src={TeamImage} alt='Team Image' className='mt-6 lg:mt-1' />
                    </div>
                </div>
                <div className='lg:flex gap-20'>
                    <div className='lg:w-2/5 h-auto'>
                        <Image src={ClientImage} alt='Team Image' className='mt-6 lg:mt-1 hidden lg:block' />
                    </div>
                    <div className='lg:w-3/5'>
                        <p className='text-sm text-text-2/80 mt-8 text-justify'>We're a dynamic team, with a blend of business acumen and technical expertise, committed to delivering solutions that not only enhance your brand but also drive tangible results. At Brandebug, we believe in building long-lasting partnerships based on honesty, trust, transparency, and a shared vision for success.</p>
                        <Image src={ClientImage} alt='Team Image' className='my-8 h-80 lg:hidden' />
                        <h3 className='text-2xl text-text-1 font-semibold my-6'>Why Choose Us</h3>
                        <ul>
                            <li className='flex items-center gap-2 text-text-2/70 mb-3 text-sm'><FaRocket className='h-6 w-6 text-primary stroke-6' /> As a young, innovative team, our fresh perspective and innovative approach can deliver exceptional results.</li>
                            <li className='flex items-center gap-2 text-text-2/70 text-sm mb-3'><FaRocket className='h-5 w-5 text-primary stroke-6' /> We leverage the latest technology and tools to create cutting-edge digital solutions.</li>
                            <li className='flex items-center gap-2 text-text-2/70 text-sm mb-3'><FaRocket className='h-5 w-5 text-primary stroke-6' /> We utilize the power of AI that helps us work faster and smarter, delivering better results.</li>
                            <li className='flex items-center gap-2 text-text-2/70 text-sm mb-3'><FaRocket className='h-5 w-5 text-primary stroke-6' /> We value open communication and work closely with clients to ensure their complete satisfaction.</li>
                            <li className='flex items-center gap-2 text-text-2/70 text-sm mb-3'><FaRocket className='h-5 w-5 text-primary stroke-6' /> We stay up-to-date with industry trends and best practices to learn and grow continuously.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About