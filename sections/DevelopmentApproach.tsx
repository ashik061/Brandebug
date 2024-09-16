import React from 'react'
import { Fa1, Fa2, Fa3, Fa4, Fa5, Fa6 } from 'react-icons/fa6';


const DevelopmentApproach = () => {
    const approachData = [
        {
            icon: <Fa1 className="h-14 w-14 stroke-6" />,
            title: "Laying the Foundation",
            description: "Site map, Wireframes & User Experience (UX) Design",
        },
        {
            icon: <Fa2 className="h-14 w-14 stroke-6" />,
            title: "Content is King",
            description: "Crafting compelling content for target audience",
        },
        {
            icon: <Fa3 className="h-14 w-14 stroke-6" />,
            title: "Building the Core",
            description: "Minimum Viable Product(MVP) development & deployment",
        },
        {
            icon: <Fa4 className="h-14 w-14 stroke-6" />,
            title: "Expanding the Platform",
            description: "Feature development based on priority matrix",
        },
        {
            icon: <Fa5 className="h-14 w-14 stroke-6" />,
            title: "Quality Assurance & Handover",
            description: "Final, polished version of website for approval",
        },
        {
            icon: <Fa6 className="h-14 w-14 stroke-6" />,
            title: "Continued Partnership",
            description: "Free maintenance for three months and ongoing support",
        }
    ];
    return (
        <section className='bg-bg-2 py-16'>
            <div className='container'>
                <h2 className='text-text-1 text-center text-3xl font-bold mb-4 capitalize lg:leading-10'>Our Development <span className='text-primary'>Principles</span>:<br /> Rapid Launch, Agile Development, Lasting Results</h2>
                <p className='text-text-2/80 text-center text-md mb-10'>Committed to developing sustainable solutions that not only meet your initial needs but also have the potential to grow and adapt over time.</p>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
                    {approachData.map((step, index) => (
                        <div key={index} className='bg-bg-2 p-2 rounded-3xl border-text-1 border-2 shadow shadow-primary hover:border-primary hover:shadow-md hover:shadow-primary'>
                            <div className="flex items-center gap-5 group">
                                <div className="border-4 border-text-1 group-hover:border-primary rounded-2xl p-2 m-2">
                                    <div className="text-primary group-hover:text-text-1">{step.icon}</div>
                                </div>
                                <div>
                                    <h3 className='text-xl text-text-1 group-hover:text-primary text-start font-bold mb-2'>{step.title}</h3>
                                    <p className='text-text-2/80 text-start text-sm'>{step.description}</p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default DevelopmentApproach