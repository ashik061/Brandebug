'use client'
import { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <section className='bg-bg-2 py-16'>
            <div className='container'>
            <h3 className='text-text-1 text-center text-2xl font-bold capitalize'>Book Your Appointment</h3>
                <div className="calendly-inline-widget"
                    data-url="https://calendly.com/ashik18710/30min?hide_gdpr_banner=1&background_color=f5f5f5&text_color=2b4055&primary_color=fa6a6a"
                    style={{ minWidth: '320px', height: '700px' }} />
            </div>


        </section>

    );
}

export default Contact;
