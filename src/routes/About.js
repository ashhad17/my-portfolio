import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg2 from '../components/HeroImg2'
import Footer from '../components/Footer'
import Image from '../assets/about.jpg'
import AboutUs from '../components/AboutUs'
export default function About() {
  return (
    <>
<Navbar/>
<HeroImg2 src={Image} heading="About Us" desc="I am FreeLancing Software developer"/>
<AboutUs/>
<Footer/>
    </>
  )
}
