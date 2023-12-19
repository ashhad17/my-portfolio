import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg2 from '../components/HeroImg2'
import Footer from '../components/Footer'
import Image from '../assets/contact.jpg'
import ContactUs from '../components/ContactUs'
export default function Contact() {
  return (
    <>
<Navbar/>

<HeroImg2 src={Image} heading="Contact Us" desc="Let's have a chat..."/>
<ContactUs/>
<Footer/>
    </>
  )
}
