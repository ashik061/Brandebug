import React from 'react'
import ContactBanner from './ContactBanner'
import Contact from './Contact'
import ActionBanner from './ActionBannerReduced'

const ContactPage = () => {
  return (
    <>
      <ContactBanner />
      <ActionBanner />
      <Contact />
    </>
  )
}

export default ContactPage