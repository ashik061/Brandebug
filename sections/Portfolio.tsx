import React from 'react'
import UserMeta from '@/assets/images/project1.png'
import FitFinder from '@/assets/images/project2.png'
import LMES from '@/assets/images/project3.png'
import IoTproject from '@/assets/images/project4.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
const Portfolio = () => {
    const projectsData = [
        {
            image: <Image src={UserMeta} alt='UserMeta-website' />,
            title: "UserMeta Pro",
            description: "Revitalized User Meta Pro plugin through strategic web design, ux design and digital marketing; driving sales growth.",
            link: "https://user-meta.com"
        },
        {
            image: <Image src={FitFinder} alt='FitFinder-website' />,
            title: "FitFinder Web App",
            description: "A platform that enable users to explore fitness destinations, connect with peers, and achieve their fitness goals.",
            link: "https://github.com/ashik061/FitFinder"
        },
        {
            image: <Image src={LMES} alt='LMES-mobile-app' />,
            title: "LMES - Lab Monitoring and Evaluation System",
            description: "Led the development of LMES in collaboration with the Office of District Administration, Cumilla, a real-time lab monitoring system deployed in 50 schools, improving lab management efficiency.",
            link: "https://docs.google.com/presentation/d/1a9GofadIhFmDPnc-nps-VWVJZ8-iKZfD7zYofp3iSR8/edit#slide=id.p"
        },
        {
            image: <Image src={IoTproject} alt='IoT-research-overview' />,
            title: "Design and Implementation of a Feasible Model for the IoT Based Ubiquitous Healthcare Monitoring System for Rural and Urban Area",
            description: "The proposed system can transmit sensitive health data to caregivers in real-time, whether online or offline.",
            link: "https://ieeexplore.ieee.org/document/9869637"
        }
    ]
    return (
        <section className='bg-bg-2 py-16'>
            <div className='container'>
                <h2 className='text-text-1 text-center text-3xl font-bold mb-4 capitalize'>Beyond the Code:  <span className='text-primary'>Projects </span>That Make a Difference</h2>
                <p className='text-text-2/80 text-center text-md mb-10'>
                    Turning challenges into solutions through innovation and design
                </p>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 mb-4'>
                    {projectsData.map((project, index) => (
                        <div key={index} className='relative rounded-3xl shadow-md shadow-primary overflow-hidden flex group'>
                            <div className='transition-transform duration-500 ease-in-out transform group-hover:scale-110 '>
                                {project.image}
                            </div>
                            <div className='absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-bg-1/70 to-text-1/80 flex flex-col justify-center items-center text-center px-4 md:px-10 lg:px-16 transition transform duration-500 ease-in-out translate-y-full group-hover:translate-y-0'>
                                <div className='text-center'>
                                    <h4 className='text-xl md:text-2xl font-bold text-text-2'>{project.title}</h4>
                                    <p className='text-sm md:text-md mt-2 text-text-1'>{project.description}</p>
                                    <Link href={project.link || '#'} target='_blank' className='inline-flex justify-center items-center w-8 h-8 md:w-12 md:h-12 mt-4 rounded-full bg-bg-1 text-primary'>
                                        <FaArrowUpRightFromSquare />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center items-center mt-16'>
                    <button className='btn2 w-60 tracking-normal'>View All Projects</button>
                </div>

            </div>
        </section>
    )
}

export default Portfolio