import React from 'react'
import Work from '../components/Work'
// import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Footer from '../components/Footer'
// import PricingCard from '../components/PricingCard'
// import WorkCard from '../components/WorkCard'
// Link
export default function Home() {
  return (
    <>
    <Navbar/>
     <HeroImg/>
     <Work/>
     {/* <PricingCard/>    */}
     <Footer/>
         </>
  )
}
