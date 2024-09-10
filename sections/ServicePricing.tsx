import React from 'react'
import { FaBusinessTime, FaFileInvoiceDollar } from 'react-icons/fa';
import TemplateBasedWebtise from '@/assets/images/template-based-website.svg'
import Image from 'next/image';


const ServicePricing = () => {

    const pricingData = [
        {
            image: <Image src={TemplateBasedWebtise} alt='Template-based-website' />,
            title: "Template-Based Websites",
            description: "Built using pre-designed templates and platforms like WordPress, Shopify, Wix, etc.",
            suitableFor: "Suitable for small businesses, startups, personal blogs, online stores, and websites with basic needs.",
            price: "From $149",
            deliveryTime: "1-3 weeks",
        },
        {
            image: <Image src={TemplateBasedWebtise} alt='Template-based-website' />,
            title: "Template-Based Websites",
            description: "Built using pre-designed templates and platforms like WordPress, Shopify, Wix, etc.",
            suitableFor: "Suitable for small businesses, startups, personal blogs, online stores, and websites with basic needs.",
            price: "From $149",
            deliveryTime: "1-3 weeks",
        },
        {
            image: <Image src={TemplateBasedWebtise} alt='Template-based-website' />,
            title: "Template-Based Websites",
            description: "Built using pre-designed templates and platforms like WordPress, Shopify, Wix, etc.",
            suitableFor: "Suitable for small businesses, startups, personal blogs, online stores, and websites with basic needs.",
            price: "From $149",
            deliveryTime: "1-3 weeks",
        },
        {
            image: <Image src={TemplateBasedWebtise} alt='Template-based-website' />,
            title: "Template-Based Websites",
            description: "Built using pre-designed templates and platforms like WordPress, Shopify, Wix, etc.",
            suitableFor: "Suitable for small businesses, startups, personal blogs, online stores, and websites with basic needs.",
            price: "From $149",
            deliveryTime: "1-3 weeks",
        },
        {
            image: <Image src={TemplateBasedWebtise} alt='Template-based-website' />,
            title: "Template-Based Websites",
            description: "Built using pre-designed templates and platforms like WordPress, Shopify, Wix, etc.",
            suitableFor: "Suitable for small businesses, startups, personal blogs, online stores, and websites with basic needs.",
            price: "From $149",
            deliveryTime: "1-3 weeks",
        },
        {
            image: <Image src={TemplateBasedWebtise} alt='Template-based-website' />,
            title: "Template-Based Websites",
            description: "Built using pre-designed templates and platforms like WordPress, Shopify, Wix, etc.",
            suitableFor: "Suitable for small businesses, startups, personal blogs, online stores, and websites with basic needs.",
            price: "From $149",
            deliveryTime: "1-3 weeks",
        },
    ];

    return (

        <section className='bg-primary/30 py-16'>
            <div className='container'>
                <h2 className='text-text-1 text-center text-3xl font-bold mb-4 capitalize'>Find The Perfect <span className='text-primary'>Solution</span>: Plans Tailored to Your Needs and Budget</h2>
                <p className='text-text-2/80 text-center text-md mb-10'>
                    * Prices and development time can vary based on project complexity.
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                    {pricingData.map((plan, index) => (
                        <div key={index} className='pricing-card bg-bg-1 px-8 py-6 rounded-3xl shadow-lg shadow-primary'>
                            <div className="flex flex-col items-center gap-5 mb-2">
                                <div className='rounded-2xl p-4'>
                                    <div className='h-36 w-auto'>{plan.image}</div>
                                </div>
                                <h3 className='text-xl text-primary text-center font-bold'>{plan.title}</h3>
                                <p className='text-text-2/80 text-center text-sm mt-3'>{plan.description}</p>
                                <p className='text-text-1/80 text-center text-sm mt-4'>{plan.suitableFor}</p>
                                <div className='flex items-center justify-between gap-6 mt-4'>
                                    <div className='flex items-center gap-2'>
                                        <FaBusinessTime className='text-primary h-6 w-6' />
                                        <p className='text-text-1 text-center text-sm'>{plan.deliveryTime}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaFileInvoiceDollar className='text-primary h-5 w-5' />
                                        <p className='text-text-1 text-center text-sm'>{plan.price}</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between gap-6 mt-4">
                                    <button className='btn2 text-md'>View Demo</button>
                                    <button className='btn text-md'>Get Quote</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* <p className='text-text-2/80 text-center text-md mt-16'>For a personalized quote tailored to your specific needs, please contact us for a free consultation</p>
                <div className='flex justify-center items-center mt-4'>
                    <button className='btn text-md'>Schedule Free Consultation</button>
                </div> */}
            </div>
        </section>
    )
}

export default ServicePricing