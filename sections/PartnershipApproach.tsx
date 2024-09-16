import React from 'react'
import FixedPriceProjects from '@/assets/images/fixed-price-project.svg'
import HourlyBillingProjects from '@/assets/images/hourly-billing.svg'
import ResultOrientedProjects from '@/assets/images/result-oriented-project.svg'
import Image from 'next/image'

const PartnershipApproach = () => {
    const partnershipApproach = [
        {
            image: <Image src={FixedPriceProjects} alt='Fixed-Price-Project' className='h-40 w-auto p-2' />,
            title: "Fixed-Price Projects",
            description: "Ideal for clients with a defined scope and budget. We provide a fixed quote for the entire project.",
            benefits: "Predictable costs, clear timelines, reduced risk, and Guaranteed outcomes",
            buttonText: "Get Quote"
        },
        {
            image: <Image src={HourlyBillingProjects} alt='Hourly-Billing-Project' className='h-40 w-auto p-2' />,
            title: "Hourly Billing",
            description: "Best suited for clients requiring flexibility. We offer dedicated experts or teams for customized solutions.",
            benefits: "Dedicated Expert workforce, scalable resources, hourly Rates, Ongoing support",
            buttonText: "Discuss"
        },
        {
            image: <Image src={ResultOrientedProjects} alt='Result-Oriented-Project' className='h-40 w-auto p-2' />,
            title: "Results-Oriented Partnership",
            description: "Perfect for businesses with proven products or established traffic. We invest in your website and share in the website’s revenue.",
            benefits: "Reduced costs, shared risk and revenue, accelerated growth, Performance-driven outcomes",
            buttonText: "Apply"
        }
    ]
    return (
        <section className='bg-bg-1 py-16'>
            <div className='container'>
                <h2 className='text-text-1 text-center text-3xl font-bold mb-4 capitalize'>More Than Just a Website: A <span className='text-primary'>Partnership</span> for Growth and Success</h2>
                <p className='text-text-2/80 text-center text-md mb-10'>
                    Choose the Partnership Model That Best Suits Your Needs
                </p>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 mb-4 md:px-20 lg:px-0'>
                    {partnershipApproach.map((model, index) => (
                        <div key={index} className=' bg-primary/20 px-8 py-6 rounded-3xl shadow shadow-primary hover:shadow-none hover:border-primary'>
                            <div className="flex flex-col items-center gap-2">
                                <div className='rounded-2xl'>
                                    {model.image}
                                </div>
                                <div className='h-56 flex flex-col justify-between'>
                                    <h3 className='text-xl text-primary text-center font-bold'>{model.title}</h3>
                                    <p className='text-text-2/80 text-center text-sm mt-2'>{model.description}</p>
                                    <p className='text-text-1/80 text-center text-sm mt-4'>{model.benefits}</p>
                                </div>
                                <div className="flex items-center justify-between gap-8 mt-4">
                                    <button className='btn2 text-md w-40'>{model.buttonText}</button>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default PartnershipApproach