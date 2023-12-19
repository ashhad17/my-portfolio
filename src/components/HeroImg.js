import './HeroImgStyle.css'
// import './NavbarStyle.css'
// import Resume from '../assets/1CG20CS056_Mohammed_Ashhad.pdf'
import React from 'react'
import Image from '../assets/background.jpg'
import { Link } from 'react-router-dom'
export default function HeroImg() {
  return (
    <>
    <div className="hero">
        <div className="mask">
        <img className='intro-img' src={Image} alt="background" />
            
        </div>
        <div className="content">
            <p>Hii , Iam Freelancer</p>
            <h1>Software Developer</h1>
            <div className='btns'>
                <Link className='btn' to="/project">Projects</Link>
                <a className='btn btn-light' href="./1CG20CS056_Mohammed_Ashhad.pdf" download="resume.pdf">Download Resume</a>
                
            </div>
        </div>
    </div>
    </>
  )
}
