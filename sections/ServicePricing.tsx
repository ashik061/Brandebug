import React from 'react'
import { FaBusinessTime, FaFileInvoiceDollar } from 'react-icons/fa';
import TemplateBasedWebtise from '@/assets/images/template-based-website.svg'
import StandardWebsite from '@/assets/images/standard-website.svg'
import DigitalBrandingWebsite from '@/assets/images/digital-branding-website.svg'
import EcommerceWebsite from '@/assets/images/ecommerce-website.svg'
import CustomWebApp from '@/assets/images/custom-web-app.svg'
import CompleteSoftwareSolution from '@/assets/images/complete-software-solution.svg'
import Image from 'next/image';


const ServicePricing = () => {

    const pricingData = [
        {
            image: <Image src={TemplateBasedWebtise} alt='Template-based-website' className='h-40 w-auto p-2' />,
            title: "Template-Based Websites",
            description: "Built using pre-designed templates and platforms like WordPress, Shopify, Wix, etc. Offer a faster and cost-effective development process with limited content and features.",
            suitableFor: "Suitable for small businesses, startups, personal blogs, online stores, and websites with basic needs.",
            price: "From $149",
            deliveryTime: "1-3 weeks",
        },
        {
            image: <Image src={StandardWebsite} alt='Standard-website' className='h-40 w-auto p-2'/>,
            title: "Standard Websites",
            description: "Custom-built from scratch, offering greater flexibility, customization options, and a unique professional online presence.",
            suitableFor: "Recommended for Small businesses, startup landing pages, personal blogs, medium-sized businesses, established brands, and organizations with specific requirements.",
            price: "From $199",
            deliveryTime: "2-4 weeks",
        },
        {
            image: <Image src={DigitalBrandingWebsite} alt='Digital-branding-website' className='h-40 w-auto p-2'/>,
            title: "Digital Branding Websites",
            description: "Designed to showcase personal brands, portfolios, or online businesses focusing on content and digital marketing.",
            suitableFor: "Appropriate for influencers, content creators, creative professionals, freelancers, and businesses seeking to establish a strong online presence.",
            price: "From $299",
            deliveryTime: "3-5 weeks",
        },
        {
            image: <Image src={EcommerceWebsite} alt='Ecommerce-website' className='h-40 w-auto p-2'/>,
            title: "E-commerce Websites",
            description: "Specially pitched and developed for individuals or businesses looking to sell products or services online with ease.",
            suitableFor: "Ideal for Individual service providers, consultancy firms, agencies, online stores, e-commerce startups, and businesses offering digital products or services.",
            price: "From $399",
            deliveryTime: "4-6 weeks",
        },
        {
            image: <Image src={CustomWebApp} alt='Custom-webapp' className='h-40 w-auto p-2'/>,
            title: "Custom Web/Mobile Applications",
            description: "Tailored solutions for unique business needs with custom development, integrations, and complex functionalities.",
            suitableFor: "Great for specific industries, medium enterprises, startups with innovative ideas, and businesses requiring specialized web-based applications.",
            price: "From $499",
            deliveryTime: "6-8 weeks",
        },
        {
            image: <Image src={CompleteSoftwareSolution} alt='Complete-software-solution' className='h-40 w-auto p-2'/>,
            title: "Complete Software Solutions",
            description: "Comprehensive software for complex requirements and functionalities, including web applications, mobile apps, or desktop software.",
            suitableFor: "Intended for Large enterprises, Public platforms, and businesses requiring specialized software solutions.",
            price: "From $999",
            deliveryTime: "10-12 weeks",
        },
    ];

    return (

        <section className='bg-primary/30 py-16'>
            <div className='container'>
                <h2 className='text-text-1 text-center text-3xl font-bold mb-4 capitalize'>Find The Perfect <span className='text-primary'>Solution</span>: Plans Tailored to Your Needs and Budget</h2>
                <p className='text-text-2/80 text-center text-md mb-10'>
                    * Prices and development time can vary based on project complexity.
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-4'>
                    {pricingData.map((plan, index) => (
                        <div key={index} className='pricing-card bg-bg-1 px-8 py-6 rounded-3xl shadow-lg shadow-primary'>
                            <div className="flex flex-col items-center gap-5 mb-2">
                                <div className='rounded-2xl p-4'>
                                    {plan.image}
                                </div>
                                <div className='h-60 flex flex-col justify-between'>
                                    <h3 className='text-xl text-primary text-center font-bold'>{plan.title}</h3>
                                    <p className='text-text-2/80 text-center text-sm mt-3'>{plan.description}</p>
                                    <p className='text-text-1/80 text-center text-sm mt-4'>{plan.suitableFor}</p>
                                </div>
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
                                <div className="flex items-center justify-between gap-8 mt-4">
                                    <button className='btn2 text-md'>View Demo</button>
                                    <button className='btn text-md'>Get Quote</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    )
}

export default ServicePricing