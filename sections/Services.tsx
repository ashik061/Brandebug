import React from 'react'
import { FaPalette, FaNewspaper, FaMobileAlt, FaCaretSquareUp, FaLaptopCode, FaAddressCard, FaSearchengin, FaChartBar, FaLayerGroup } from 'react-icons/fa';

const Services = () => {
    const servicesData = [
        {
            icon: <FaPalette className="h-16 w-16 stroke-6" />,
            title: "Professional Design",
            description: "Stunning design that reflects your brand identity",
        },
        {
            icon: <FaNewspaper className="h-16 w-16 stroke-6" />,
            title: "Engaging Content",
            description: "High-quality content that drives conversions",
        },
        {
            icon: <FaMobileAlt className="h-16 w-16 stroke-6" />,
            title: "Device Responsive",
            description: "Functions flawlessly across all devices and browsers",
        },
        {
            icon: <FaCaretSquareUp className="h-16 w-16 stroke-6" />,
            title: "Clear Call to Action",
            description: "Guide visitors towards taking the desired actions",
        },
        {
            icon: <FaLaptopCode className="h-16 w-16 stroke-6" />,
            title: "Seamless Functionality",
            description: "For easy navigation and intuitive user interactions",
        },
        {
            icon: <FaAddressCard className="h-16 w-16 stroke-6" />,
            title: "User and Content Management",
            description: "User-friendly CMS to manage and update easily",
        },
        {
            icon: <FaSearchengin className="h-16 w-16 stroke-6" />,
            title: "Search Engine Optimised",
            description: "Be found online to your target audience",
        },
        {
            icon: <FaChartBar className="h-16 w-16 stroke-6" />,
            title: "Comprehensive Analytics",
            description: "To track performance and make data-driven decisions",
        },
        {
            icon: <FaLayerGroup className="h-16 w-16 stroke-6" />,
            title: "Maintenance and Support",
            description: "For bug fixing, performance optimization, and further improvements",
        },

    ];
    return (
        <section className='bg-bg-2 py-16'>
            <div className='container'>
                <h2 className='text-text-1 text-center text-3xl font-bold mb-4 capitalize'>We offer all the <span className='text-primary'>Services</span> that a complete website may need</h2>
                <p className='text-text-2/80 text-center text-md mb-10'>From smooth designs and compelling content to robust functionalities, we'll build a website that sets you apart</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                    {servicesData.map((service, index) => (
                        <div key={index} className='bg-transparent p-4 rounded-3xl shadow-xl hover:border-2 hover:border-primary hover:shadow hover:shadow-primary group'>
                            <div className="flex flex-col items-center gap-5 mb-2">
                                <div className="bg-primary group-hover:border-2 group-hover:border-text-1 rounded-2xl p-4">
                                    <div className="text-text-1/90">{service.icon}</div>
                                </div>
                                <h3 className='text-xl text-text-1 text-center font-bold'>{service.title}</h3>
                                <p className='text-text-2/80 text-center text-sm'>{service.description}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services


