import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg2 from '../components/HeroImg2'
import Footer from '../components/Footer'
import Image from '../assets/code.jpg'
import Work from '../components/Work'
// import PricingCard from '../components/PricingCard'
export default function Project() {
  return (
    <>
<Navbar/>
<HeroImg2 src={Image} heading="Projects" desc="Some of my recent work..."/>
<Work/>
{/* <PricingCard/> */}
<Footer/>
    </>
  )
}
