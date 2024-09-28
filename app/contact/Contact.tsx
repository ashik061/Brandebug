'use client'
import { useEffect } from 'react';
import LogoText from '@/assets/images/Logo_text_no_bg.png'
import Image from 'next/image';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaLocationDot, FaFacebook, FaLinkedin, FaXTwitter, FaAngleUp } from 'react-icons/fa6'



const Contact = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <>
            <section className='bg-bg-2 py-16'>
                <div className='container'>
                    <h2 className='text-text-1/90 text-center text-3xl font-bold capitalize'>Book Now and Start with a No-Cost Consultation</h2>
                    <div className="calendly-inline-widget"
                        data-url="https://calendly.com/ashik18710/30min?hide_gdpr_banner=1&background_color=f5f5f5&text_color=2b4055&primary_color=fa6a6a"
                        style={{ minWidth: '320px', height: '700px' }} />
                </div>
            </section>
            <section className='bg-bg-1 py-16'>
                <div className='container'>
                    <h2 className='text-text-1/90 text-center text-3xl font-bold capitalize'>Office Location</h2>
                    <div className='md:flex gap-10 justify-between mb-4'>
                        <div className='w-full md:w-2/4 lg:w-2/5 flex flex-col items-center justify-center md:items-start gap-4 mt-10 bg-bg-2 p-10 rounded-3xl shadow shadow-primary'>
                            <Image src={LogoText} alt='Logo' height={40} width={200} />
                            <Link href={'tel:+8801883192614'} target='_blank' className='text-text-1/80 hover:text-text-1 text-lg flex gap-3 items-center mt-4'><FaPhone className='text-md' /> +8801883192614</Link>
                            <Link href={'mailto:contact@brandebug.com'} target='_blank' className='text-text-1/80 hover:text-text-1 text-lg flex gap-3 items-center'><FaEnvelope className='text-xl' /> contact@brandebug.com</Link>
                            <Link href={'https://maps.app.goo.gl/DDZW97BVvVRi23iJA'} target='_blank' className='text-text-1/80 hover:text-text-1 text-md flex gap-3 items-center'><FaLocationDot className='text-xl' /> House: 47, Road: 10, DIT Project, <br /> Merul Badda, Dhaka-1212</Link>
                            <div className='flex gap-2 mt-4 justify-start'>
                                <Link href={'#'} target='_blank' className='inline-flex justify-center items-center h-10 w-10 border-2 border-primary rounded-full text-2xl text-primary m-2 transition ease-in-out duration-200 hover:bg-primary hover:text-text-1 hover:shadow hover:shadow-primary'><FaFacebook /></Link>
                                <Link href={'#'} target='_blank' className='inline-flex justify-center items-center h-10 w-10 border-2 border-primary rounded-full text-2xl text-primary m-2 transition ease-in-out duration-200 hover:bg-primary hover:text-text-1 hover:shadow hover:shadow-primary'><FaLinkedin /></Link>
                                <Link href={'#'} target='_blank' className='inline-flex justify-center items-center h-10 w-10 border-2 border-primary rounded-full text-2xl text-primary m-2 transition ease-in-out duration-200 hover:bg-primary hover:text-text-1 hover:shadow hover:shadow-primary'><FaXTwitter /></Link>
                            </div>
                        </div>
                        <div className='w-full md:w-2/4 lg:w-3/5 bg-bg-2 rounded-3xl mt-10 shadow shadow-primary'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d228.2043344094716!2d90.4298472!3d23.773421!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c78d6c201901%3A0x8272146affdc1801!2sQCFH%2B9W8%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1727478057184!5m2!1sen!2sbd" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-[400px] md:h-[400px] lg:h-[450px] rounded-3xl'></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>


    );
}

export default Contact;
