import './HeroImg2.css'
// import './NavbarStyle.css'
import React from 'react'
// import Image from '../assets/about.jpg'
// import { Link } from 'react-router-dom'
import './HeroImg2.css'
export default function HeroImg2(props) {
    return (
        <>
        <div className="hero-img">
            {/* <div className="mask">
            <img className='intro' src={props.src} alt="background" />
            </div> */}
            <div className="heading">
            <h1>{props.heading}</h1>
                <p>{props.desc}</p>
            </div>
        </div>
        </>
      )}
