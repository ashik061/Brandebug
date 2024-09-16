import React from 'react'
import ScholarConnect from '@/assets/images/scholar-connect.png'
import GameHub from '@/assets/images/game-hub.png'
import SkillShoot from '@/assets/images/skill-shoot.png'
import PortfolioWebsite from '@/assets/images/portfolio-website.png'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
const Portfolio = () => {
    const projectsData = [
        {
            image: <Image src={ScholarConnect} alt='Scholar-connect-website' />,
            title: "Scholar Connect",
            description: "A platform connecting aspiring students with PhD and MS mentors abroad.",
            link: "https://scholarconnect.pages.dev/"
        },
        {
            image: <Image src={GameHub} alt='Game-hub-website' />,
            title: "Game Hub",
            description: "A dynamic platform for exploring and discovering the best video games across genres.",
            link: "https://game-hub-peach-pi.vercel.app/"
        },
        {
            image: <Image src={SkillShoot} alt='Skill-shoot-website' />,
            title: "Skill Shoot",
            description: "A platform dedicated to enhance skills through expert-led educational materials.",
            link: "https://web-appick.vercel.app/"
        },
        {
            image: <Image src={PortfolioWebsite} alt='Portfolio-website' />,
            title: "Portfolio Website",
            description: "The website presents a clear and concise portfolio showcasing services, projects, etc.",
            link: "https://ashik18710.pages.dev/"
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
                        <div key={index} className='relative rounded-2xl shadow-md shadow-primary overflow-hidden flex group'>
                            <div className='transition-transform duration-500 ease-in-out transform group-hover:scale-110 '>
                                {project.image}
                            </div>
                            <div className='absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-bg-1/70 to-text-1/80 flex flex-col justify-center items-center text-center px-16 transition transform duration-500 ease-in-out translate-y-full group-hover:translate-y-0'>
                                <div className='text-center'>
                                    <h4 className='text-2xl font-bold text-text-2'>{project.title}</h4>
                                    <p className='text-md mt-2 text-text-1'>{project.description}</p>
                                    <Link href={project.link || '#'} target='_blank' className='inline-flex justify-center items-center w-12 h-12 mt-4 rounded-full bg-bg-1 text-primary'>
                                        <FaArrowUpRightFromSquare />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Portfolio