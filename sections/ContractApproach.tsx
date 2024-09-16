import React from 'react'
import BusinessMeeting from '@/assets/images/free-meeting.svg'
import WebsitePlan from '@/assets/images/website-plan.svg'
import WebsiteDevelopment from '@/assets/images/website-development.svg'
import Image from 'next/image';
import { FaArrowAltCircleDown } from 'react-icons/fa';


const ContractApproach = () => {
    return (
        <section className='bg-bg-1 py-16'>
            <div className='container'>
                <h2 className='text-text-1 text-center text-3xl font-bold mb-8 capitalize'>Your dream website as easy as…</h2>
                <div className='flex flex-col lg:flex-row items-center justify-center gap-4 mb-6'>
                    <div className="flex flex-col items-center gap-3 mb-6 p-6 rounded-3xl hover:shadow-2xl">
                        <div className="p-2">
                            <Image src={BusinessMeeting} alt='Business-meeting' className='h-28 w-auto p-2' />
                        </div>
                        <h3 className='text-xl text-text-1 text-center font-bold'>Claim a FREE Expert Consultation</h3>
                        <p className='text-text-2/80 text-center text-sm'>Discuss your project goals, vision, and requirements with our experienced team</p>
                    </div>
                    <FaArrowAltCircleDown className="h-20 w-16 stroke-6 text-primary lg:-rotate-90" />
                    <div className="flex flex-col items-center gap-3 mb-6 p-6 rounded-3xl hover:shadow-2xl">
                        <div className="p-2">
                            <Image src={WebsitePlan} alt='Website-plan' className='h-28 w-auto p-2' />
                        </div>
                        <h3 className='text-xl text-text-1 text-center font-bold'>Conduct a Preliminary Sitemap & Plan</h3>
                        <p className='text-text-2/80 text-center text-sm'>Our experts will create a sitemap and project plan, outlining the scope, timeline, and budget</p>
                    </div>
                    <FaArrowAltCircleDown className="h-20 w-16 stroke-6 text-primary lg:-rotate-90" />
                    <div className="flex flex-col items-center gap-3 mb-6 p-6 rounded-3xl hover:shadow-2xl">
                        <div className="p-2">
                            <Image src={WebsiteDevelopment} alt='Website-development' className='h-28 w-auto p-2' />
                        </div>
                        <h3 className='text-xl text-text-1 text-center font-bold'>We Design, Build & Support your Website</h3>
                        <p className='text-text-2/80 text-center text-sm'>Our skilled developers will bring your vision to life, building a stunning and functional website</p>
                    </div>

                </div>

                <p className='text-text-2/80 text-center text-md mt-4'>Anything on your mind? Let's turn ideas into action</p>
                <div className='flex justify-center items-center mt-4'>
                    <button className='btn text-md'>Schedule Free Consultation</button>
                </div>
            </div>



        </section>
    )
}

export default ContractApproach

